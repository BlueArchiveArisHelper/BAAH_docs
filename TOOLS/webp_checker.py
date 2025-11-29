import os
from tool import tools

if __name__ == "__main__":
    imglist = [img for img in tools.filetree("src/public/img") if "website" not in img]
    for img in imglist:
        if not img.endswith(".webp") and os.path.isdir(img):
            tools.write_warn(f"图片 {img} 不是 webp 格式，建议对其进行转换以避免图像优化Action产生二次提交")