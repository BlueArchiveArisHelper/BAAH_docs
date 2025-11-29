import os
import re
from tool import tools

if __name__ == "__main__":
    src = tools.filetree("src")
    mdlist = [path for path in src if path.endswith(".md")]
    imglist = [path for path in src if path.endswith(".webp") or path.endswith(".png") or path.endswith(".jpg") or path.endswith(".jpeg")]
    print("开始检查死链")
    
    print("检查sidebar")
    for file in os.listdir(".vitepress/sidebar"):
        if file == "index.ts":
            continue
        with open(f".vitepress/sidebar/{file}", "r", encoding="utf-8") as f:
            content = f.read()
            # 匹配 link: '/path' 或 link: "/path" 中的路径内容
            pattern = r"link:\s*['\"]([^'\"]+)['\"]"
            links = re.findall(pattern, content)
            for link in links:
                # print(f"找到链接: {link}")
                if link == "/zh_CN" or link == "/en_US":
                    if "src"+link+"/index.md" not in mdlist:
                        tools.write_error(f"死链: {link}")
                elif "src"+link+".md" not in mdlist:
                    tools.write_error(f"死链: {link}")
    
    print("检查navbar")
    for file in os.listdir(".vitepress/navbar"):
        if file == "index.ts":
            continue
        with open(f".vitepress/navbar/{file}", "r", encoding="utf-8") as f:
            content = f.read()
            # 匹配 link: '/path' 或 link: "/path" 中的路径内容
            links = re.findall(pattern, content)
            for link in links:
                # print(f"找到链接: {link}")
                if link == "/zh_CN" or link == "/en_US":
                    if "src"+link+"/index.md" not in mdlist:
                        tools.write_error(f"死链: {link}")
                elif "src"+link+".md" not in mdlist:
                    tools.write_error(f"死链: {link}")
    
    print("检查md文件死链")
    for file in mdlist:
        with open(file, "r", encoding="utf-8") as f:
            content = f.read()
            # 查找markdown链接
            links = re.findall(r"\[.*?\]\((.*?)\)", content)
            for link in links:
                if link.startswith("http") or link.startswith("https"):
                    # print(f"找到外部链接: {link}, 跳过")
                    continue
                if link.startswith("/img/"):
                    # print(f"找到图片链接: {link}")
                    if link.replace("/img/", "src/public/img/") not in imglist:
                        tools.write_error(f"死链: {link}")