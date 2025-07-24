# 从源码部署

Android Termux部署请前往[🔗部署方法](https://blockhaity.github.io/2025/02/10/BAAH%E5%9C%A8%E9%80%86%E5%A4%A9%E7%8E%AF%E5%A2%83%E4%B8%8B%E7%9A%84%E8%BF%90%E8%A1%8C/)

无论如何，都不建议直接从源码部署，从源码部署不会有官方的更新程序支持，使用 `git pull` 也会有损坏程序的风险。

首先，安装好 **Python 3.10.x** 

**Windows**

<a href="https://apps.microsoft.com/detail/9PJPW5LDXLZ5" title="从Microsoft Store下载"><img src="/img/website/Get-it-form-Microsoft.svg" alt="SVG Image" width="200" height="200"></a>

[从Python官网下载](https://www.python.org/ftp/python/3.10.9/python-3.10.9-amd64.exe)

**MacOS**

使用homebrew安装

``` bash
brew install python 3.10
```

**Linux**

使用UV安装

``` bash
uv python install 3.10
```

~~啥？你没有UV，放心，你都用linux了，这点小事肯定会解决的。~~

然后，你需要自备adb

## 从Git安装

**Windows**

使用 `winget` 安装Git

``` cmd
winget install Git.Git
```

或从 [Git官方网站](https://git-scm.com/downloads) 下载，运行安装程序，一路下一步即可

~~不用担心安装到C盘会占用空间，就100+MB的软件~~

**MacOS**

从homebrew安装

``` bash
brew install git
```

**Linux**

一般发行版中都自带Git,如果没有，请从软件包管理器中安装

然后，在你想安装BAAH的位置，打开终端，运行以下内容。

``` cmd
# 如果你连接github的网络良好，运行这个
git clone https://github.com/BlueArchiveArisHelper/BAAH.git
# 如果不好，运行下列内容
git clone https://gh-proxy.com/BlueArchiveArisHelper/BAAH.git
```

不要关闭窗口，运行 `cd BAAH` 进入文件夹，安装依赖

``` cmd
# 换源
pip config set global.index-url https://mirrors.cernet.edu.cn/pypi/web/simple
# 安装依赖
pip install -r requirements.txt
```

使用 `python jsoneditor.py` 来运行webui,在配置文件编辑界面中修改adb路径

执行 `python main.py config.json` 将会按照config.json配置开始执行BAAH

## 从源码归档安装

不用安装git,下载 **source code zip** 然后解压到想要的文件夹，在BAAH源代码文件夹中打开终端，然后安装依赖，运行即可。