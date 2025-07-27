# 环境搭建

推荐开发工具 VSCode PyCharm

请确保你的环境内包含 `git`，且熟悉Github的基本操作。

## 开发工具准备

### Windows

首先，安装Python 3.10.x

<a href="https://apps.microsoft.com/detail/9PJPW5LDXLZ5" title="从Microsoft Store下载"><img src="/img/website/Get-it-form-Microsoft.svg" alt="SVG Image" width="200" height="200"></a>

[从Python官网下载](https://www.python.org/ftp/python/3.10.18/python-3.10.18-amd64.exe)

#### VSCode

[VSCode 下载](https://code.visualstudio.com)

<a href="https://apps.microsoft.com/detail/XP9KHM4BK9FZ7Q" title="从Microsoft Store下载"><img src="/img/website/Get-it-form-Microsoft.svg" alt="SVG Image" width="200" height="200"></a>

安装后，安装 Python 与 Python Extension Pack 以及本地化插件

#### PyCharm

[PyCharm 下载](https://www.jetbrains.com/zh-cn/pycharm/)

### MacOS

首先，从HomeBrew安装python 3.10.x

``` bash
brew install python 3.10
```

#### VSCode

[VSCode 下载](https://code.visualstudio.com)

安装后，安装 Python 与 Python Extension Pack 以及本地化插件

#### PyCharm

[PyCharm 下载](https://www.jetbrains.com/zh-cn/pycharm/)

### Linux

首先安装Python 3.10.x

推荐安装UV，该工具拥有强大的Python环境，版本管理能力。

**安装UV**

::: tabs
=== Debian/Ubuntu
``` bash
sudo apt install uv
```
=== RedHat/Fedora
``` bash
sudo dnf install uv
```
=== Arch/Manjaro
``` bash
sudo pacman -S uv
```
:::

然后，使用UV安装 Python 3.10.x

``` bash
uv python install 3.10
```

~~下载过慢自行魔法~~

当然，不想安装UV，也可以从源码安装，或是容器搭建。

**容器搭建**

确保你有docker。

首先，获取Python的Docker镜像

``` bash
sudo docker pull python:3.10
```
然后，寻找你心仪的位置，这里以/workspace为例，创建docker容器

``` bash
docker run -itd --name dev -v /workspace（你心仪的位置）:/workspace python:3.10 /bin/bash
```

接下来，使用VSCode的开发容器功能或PyCharm的同类（不知道有没有）功能，打开容器终端，进入/workspace目录。

[克隆你的dev分支仓库](#获取源码) 用VSCode在容器内打开此目录，然后运行初始化脚本。

``` bash
# 初始化脚本一键运行命令
bash -c "$(curl -L gh-proxy.com/github.com/BlueArchiveArisHelper/BAAH_docs/raw/refs/heads/src/public/res/dev-container-initalize.sh)"
```

::: details 脚本内容
``` bash
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
' > /etc/apt/sources.list.d/debian.sources

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

echo '=================='
echo 'BAAH 开发容器初始化完成'
echo '在IDE内激活虚拟环境即可使用'
echo '=================='
```
:::


**源码安装**

首先，安装相关依赖，不同的系统依赖包名不同，请自行解决

然后运行下列命令

``` bash
sudo curl -O https://www.python.org/ftp/python/3.10.18/Python-3.10.18.tgz
tar zxvf ./Python-3.10.9.tgz
cd python-3.10.9
./configure --prefix=/usr/local/python310 # 配置安装目录
make -j8
sudo make altinstall
```

随后，你的python将会安装到 `/usr/local/python310` 部分系统可能会自动添加环境变量，若没有添加，你的python可执行文件在 `/usr/local/python310/bin/python3.10`

#### VSCode

如果在使用图形化桌面发行版，则可以获取官方的 VSCode

<a href="https://snapcraft.io/code" title="从Snap Store下载"><img src="/img/website/Get-it-from-Snap-Store/zh-tw.svg" alt="SVG Image" width="200" height="200"></a>

虽然可以，但是不建议从Snap安装。

[从VSCode官方网站下载安装包安装](https://code.visualstudio.com)

如果你正在使用 Arch/Manjaro 则建议从AUR安装

::: tabs
=== 构建安装
``` bash
git clone https://aur.archlinux.org/visual-studio-code-bin.git
cd visual-studio-code-bin
makepkg -si
```
=== yay
``` bash
yay -S visual-studio-code-bin
```
=== paru
``` bash
paru -S visual-studio-code-bin
```
:::

安装后，安装 Python 与 Python Extension Pack 以及本地化插件

#### PyCharm

你可以从 **JetBrains Toolbox** 安装，但不建议。

[PyCharm 下载](https://www.jetbrains.com/zh-cn/pycharm/)

如果你正在使用 Arch/Manjaro 则建议从AUR安装

::: tabs
=== 构建安装
``` bash
git clone https://aur.archlinux.org/pycharm-community-edition-bin.git
cd pycharm-community-edition-bin
makepkg -si
```
=== yay
``` bash
yay -S pycharm-community-edition-bin
```
=== paru
``` bash
paru -S pycharm-community-edition-bin
```
:::

## 获取源码

首先，打开浏览器，进入 `https://github.com/BlueArchiveArisHelper/BAAH`

点击 **fork** ，取消勾选 **Copy the main branch only**，创建你自己的Fork

然后，选择心仪的位置打开终端

``` bash
git clone https://github.com/<你的用户名>/BAAH -b dev
```

源码已经下载到你的硬盘中，使用VSCode或PyCharm打开此文件夹，创建Venv虚拟环境，开始正式开发。

## 打包

### Windows EXE

直接运行下列命令即可
``` cmd
python package.py
```

### Linux Docker

使用 `DockerFile` 打包即可