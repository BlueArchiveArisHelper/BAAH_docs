# 环境搭建

推荐开发工具 VSCode PyCharm

请确保你的环境内包含 `git`，且熟悉Github的基本操作。

## 开发工具准备

### Windows

首先，安装Python 3.10.x

<a href="https://apps.microsoft.com/detail/9PJPW5LDXLZ5" title="从Microsoft Store下载"><img src="/img/website/Get-it-form-Microsoft.svg" alt="SVG Image" width="200" height="200"></a>

[从Python官网下载](https://www.python.org/ftp/python/3.10.9/python-3.10.9-amd64.exe)

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

当然，不想安装UV，也可以从源码安装

**源码安装**

首先，安装相关依赖，不同的系统依赖包名不同，请自行解决

然后运行下列命令

``` bash
sudo curl -O https://www.python.org/ftp/python/3.10.9/Python-3.10.9.tgz
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