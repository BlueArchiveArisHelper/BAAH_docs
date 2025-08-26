import os
import time
import re

### 配置区 ###
global config
config = {
    # 开启Debug输出
    "enable-debug-output": False,
    # 检查列表, 按顺序执行, 每一项为函数中check_后，()前的部分，例如config
    "check-list": ["config","navbar", "sidebar", "file", "dead_link"],
    # 汇总警告
    "enable-summary-warn": True,
    # 汇总错误
    "enable-summary-error": True
}

### 逻辑区 ###

global warninglist
global errorlist

warninglist = []
errorlist = []

# 日志模块
class logging:
    def info(msg):
        print(f'Checker | {time.strftime("%H:%M:%S")} | INFO | {msg}')

    def warn(msg):
        print("\033[33m" + f'Checker | {time.strftime("%H:%M:%S")} | WARN | {msg}' + "\033[0m")
        
    def error(msg):
        print("\033[31m" + f'Checker | {time.strftime("%H:%M:%S")} | ERROR | {msg}' + "\033[0m")

    def debug(msg):
        if config["enable-debug-output"]:
            print("\033[36m" + f'Checker | {time.strftime("%H:%M:%S")} | DEBUG | {msg}' + "\033[0m")
        else:
            pass

def check_config():
    logging.info("检查配置文件")
    config = os.listdir(".vitepress/config")
    navbar = os.listdir(".vitepress/navbar")
    sidebar = os.listdir(".vitepress/sidebar")
    
    # 移除配置索引文件
    del navbar[navbar.index("index.ts")]
    del sidebar[sidebar.index("index.ts")]
    
    logging.debug(f"配置文件列表: {config}")
    logging.debug(f"导航栏文件列表: {navbar}")
    logging.debug(f"侧边栏文件列表: {sidebar}")
    
    for language in config:
        if language not in navbar:
            logging.warn(f"未找到导航栏文件{language}")
            warninglist = warninglist.append(f"未找到导航栏文件{language}")
        if language not in sidebar:
            logging.warn(f"未找到侧边栏文件{language}")
            warninglist = warninglist.append(f"未找到侧边栏文件{language}")
    
    logging.info("检查完成\n")

def check_navbar():
    logging.info("检查导航栏文件")
    navbar = os.listdir(".vitepress/navbar")
    del navbar[navbar.index("index.ts")]

    for language in navbar:
        with open(f".vitepress/navbar/{language}", "r", encoding="utf-8") as language_file, open(f".vitepress/navbar/index.ts", "r", encoding="utf-8") as index_file:
            Nav = re.findall(r'export const (\w+): DefaultTheme\.NavItem\[\]', language_file.read())[0]
            logging.debug(f"导航栏文件{language}中找到{Nav}")
            
            language_name = language.split(".")[0]
            
            index_context = index_file.read()
            
            # 确认多语言导航栏文件是否正确引用
            if language_name not in index_context:
                logging.error(f"导航栏索引文件未引用{language}文件")
                errorlist.append(f"导航栏索引文件未引用{language}文件")
            
            # 确认多语言导航栏列表是否正确引用
            if index_context.count(Nav) < 2:
                logging.error(f"导航栏索引文件未找到{Nav}列表")
                errorlist.append(f"导航栏索引文件未找到{Nav}列表")
                   
    logging.info("检查完成\n")

def check_sidebar():
    logging.info("检查侧边栏文件")
    navbar = os.listdir(".vitepress/sidebar")
    del navbar[navbar.index("index.ts")]

    for language in navbar:
        with open(f".vitepress/navbar/{language}", "r", encoding="utf-8") as language_file, open(f".vitepress/navbar/index.ts", "r", encoding="utf-8") as index_file:
            Nav = re.findall(r'export const (\w+): DefaultTheme\.NavItem\[\]', language_file.read())[0]
            logging.debug(f"侧边栏文件{language}中找到{Nav}")
            
            language_name = language.split(".")[0]
            
            index_context = index_file.read()
            
            # 确认多语言导航栏文件是否正确引用
            if language_name not in index_context:
                logging.error(f"侧边栏索引文件未引用{language}文件")
                errorlist.append(f"侧边栏索引文件未引用{language}文件")
            
            # 确认多语言导航栏列表是否正确引用
            if index_context.count(Nav) < 2:
                logging.error(f"侧边栏索引文件未找到{Nav}列表")
                errorlist.append(f"侧边栏索引文件未找到{Nav}列表")
                   
    logging.info("检查完成\n")

def check_file():
    logging.info("检查文件文件结构")
    language = os.listdir("src")
    
    del language[language.index("public")]
    del language[language.index("zh_CN")]
    del language[language.index("index.md")]
    
    zh_CN_tree = []
    for root, dirs, files in os.walk("src/zh_CN"):
        for file in files:
            full_path = os.path.join(root, file)
            full_path = full_path.replace("src/zh_CN", "")
            zh_CN_tree.append(full_path)
    
    logging.debug(f"中文文件树: {zh_CN_tree}")
    
    for language in language:
        logging.debug(f"检查{language}文件结构")
        tree = []
        for root, dirs, files in os.walk(f"src/{language}"):
            for file in files:
                full_path = os.path.join(root, file)
                full_path = full_path.replace(f"src/{language}", "")
                tree.append(full_path)
        
        logging.debug(f"{language}文件树: {tree}")
        
        more = tree
        for file in zh_CN_tree:
            if file not in tree:
                logging.warn(f"未找到{file}文件")
                warninglist.append(f"未找到{file}文件")
            else:
                logging.debug(f"找到{file}文件")
                del more[more.index(file)]
                pass
        
        for file in more:
            logging.warn(f"找到多余{file}文件")
            warninglist.append(f"找到多余{file}文件")
    
    logging.info("检查完成\n")

def check_dead_link():
    logging.info("检查死链")
    language = os.listdir("src")
    
    del language[language.index("public")]
    del language[language.index("index.md")]

    for language in language:
        logging.info(f"检查{language}死链")
        tree = []
        for root, dirs, files in os.walk(f"src/{language}"):
            for file in files:
                full_path = os.path.join(root, file)
                full_path = full_path.replace(f"src", "")
                full_path = full_path.replace(".md", "")
                if "index" in full_path:
                    full_path = full_path.replace("/index", "")
                tree.append(full_path)
        
        logging.info("开始检查侧边栏中是否存在死链")
        with open(f".vitepress/sidebar/{language}.ts", "r", encoding="utf-8") as language_file:
            language_file_context = language_file.read()
            for url in tree:
                if url in language_file_context:
                    logging.debug(f"找到{url}")
                else:
                    logging.error(f"未找到{url}")
                    errorlist.append(f"未找到{url}")
        
        imgtree = []
        for root, dirs, files in os.walk(f"src/public/img"):
            for file in files:
                full_path = os.path.join(root, file)
                full_path = full_path.replace(f"src/public", "")
                imgtree.append(full_path)
        logging.debug(f"图片文件树: {imgtree}")
        
        logging.info("开始检查文章死链")
        filelist = []
        for url in tree:
            if url == f"/{language}":
                filelist.append(url+"/index.md")
            else:
                filelist.append(url+".md")
        logging.debug(f"文章文件树: {filelist}")

        for file in filelist:
            with open(f"src{file}", "r", encoding="utf-8") as language_file:
                language_file_context = language_file.read()
                urls = re.findall(r'\[.*?\]\((.*?)\)', language_file_context)
                
                for url in urls:
                    if url.startswith("/img/"):
                        logging.debug(f"找到{url}图片")
                        
                        if url not in imgtree:
                            logging.error(f"查找到图片死链：{url}")
                   
                    elif url.startswith(f"/{language}/"):                        
                        logging.debug(f"找到{url}链接")

                        if not url.startswith("/img/"):
                            # 根据连接处理字符串，防止出现不应该出现的错误
                            if not url.endswith(".md"):
                                if ".md" not in url:
                                    url = url + ".md"
                                    logging.debug(f"修正链接为{url}")
                                elif "#" in url:
                                    url = url.split("#")[0]
                                    logging.debug(f"修正链接为{url}")
                            if url not in filelist:
                                logging.error(f"查找到文章死链：{url}")
                                
    logging.info("检查完成\n")
                    
if __name__ == "__main__":
    print("#############################")
    print("### 检查器 for BAAH_docs ###")
    print("#############################\n")
    
    for run in config["check-list"]:
        eval('check_'+run+'()')
        
    print("################")
    print("### 检查完成 ###")
    print("################")
    
    # 汇总
    if config["enable-summary-warn"] == True and len(warninglist) > 0:
        number = len(warninglist)
        print("\033[33m"+f"检查出{number}个警告，所有检查出的警告如下"+"\033[0m")
        for warning in warninglist:
            logging.warn(warning)
            
    if config["enable-summary-error"] == True and len(errorlist) > 0:
        number = len(errorlist)
        print("\033[31m"+f"检查出{number}个错误，所有检查出的错误如下"+"\033[0m")
        for error in errorlist:
            logging.error(error)