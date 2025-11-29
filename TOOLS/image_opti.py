from tool import tools
import os

def image_opti():
    # 定义需要跳过转换的关键字
    skip_keywords = ['website']
    src = tools.filetree("src") 
    mdlist = [path for path in src if path.endswith(".md")]
    for md in mdlist:
        with open(md, "r") as f:
            content = f.read()
            import re
            # 匹配markdown图片链接
            pattern = r'!\[.*?\]\((.*?)\)'
            images = re.findall(pattern, content)
            
            for img_path in images:
                # 检查文件是否存在
                if os.path.exists(img_path):
                    # 检查是否包含跳过关键字或已经是webp格式
                    if not any(keyword in img_path for keyword in skip_keywords) and not img_path.endswith('.webp'):
                        # 构建新的webp文件路径
                        new_path = os.path.splitext(img_path)[0] + '.webp'
                        # 使用ffmpeg转换
                        os.system(f'ffmpeg -i "src/public{img_path}" -lossless 1 "src/public{new_path}"')
                        # 替换markdown中的链接
                        content = content.replace(img_path, new_path)
                        # 删除原文件
                        os.remove(img_path)
            
            # 写回文件
            with open(md, "w") as f:
                f.write(content)

