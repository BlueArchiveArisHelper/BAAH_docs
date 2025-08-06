#!/usr/bin/bash

echo '=================='
echo 'BAAH 开发容器初始化'
echo '=================='

echo '更换apt软件源'
echo 'Types: deb
URIs: https://mirrors.cernet.edu.cn/debian
Suites: bookworm bookworm-updates bookworm-backports
Components: main contrib non-free non-free-firmware
Signed-By: /usr/share/keyrings/debian-archive-keyring.gpg

# 默认注释了源码镜像以提高 apt update 速度，如有需要可自行取消注释
# Types: deb-src
# URIs: https://mirrors.cernet.edu.cn/debian
# Suites: bookworm bookworm-updates bookworm-backports
# Components: main contrib non-free non-free-firmware
# Signed-By: /usr/share/keyrings/debian-archive-keyring.gpg

# 以下安全更新软件源包含了官方源与镜像站配置，如有需要可自行修改注释切换
# Types: deb
# URIs: https://mirrors.cernet.edu.cn/debian-security
# Suites: bookworm-security
# Components: main contrib non-free non-free-firmware
# Signed-By: /usr/share/keyrings/debian-archive-keyring.gpg

# # Types: deb-src
# # URIs: https://mirrors.cernet.edu.cn/debian-security
# # Suites: bookworm-security
# # Components: main contrib non-free non-free-firmware
# # Signed-By: /usr/share/keyrings/debian-archive-keyring.gpg

Types: deb
URIs: http://security.debian.org/debian-security
Suites: bookworm-security
Components: main contrib non-free non-free-firmware
Signed-By: /usr/share/keyrings/debian-archive-keyring.gpg

# Types: deb-src
# URIs: http://security.debian.org/debian-security
# Suites: bookworm-security
# Components: main contrib non-free non-free-firmware
# Signed-By: /usr/share/keyrings/debian-archive-keyring.gpg
' | tee /etc/apt/sources.list.d/debian.sources

echo '安装ADB'
apt update
apt install adb -y

echo '安装UV'
wget https://gh-proxy.com/github.com/dariogriffo/uv-debian/releases/download/0.8.3%2B1/uv_0.8.3-1+bookworm_amd64.deb
apt install ./uv_0.8.3-1+bookworm_amd64.deb -y
rm uv_0.8.3-1+bookworm_amd64.deb

echo '安装依赖到项目目录'
python3.10 -m venv .venv
mkdir -p /root/.config/uv
echo '[[index]]
url = "https://mirrors.cernet.edu.cn/pypi/web/simple"
default = true' > ~/.config/uv/uv.toml
source .venv/bin/activate
uv pip install -r requirements.txt
uv pip install opencv-python-headless==4.9.0.80

rm dev-container-initialize.sh

echo '=================='
echo 'BAAH 开发容器初始化完成'
echo '在IDE内激活虚拟环境即可使用'
echo '=================='