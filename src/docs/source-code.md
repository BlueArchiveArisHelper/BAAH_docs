# 从源码部署

无论如何，都不建议直接从源码部署，从源码部署不会有官方的更新程序支持，使用 `git pull` 也会有损坏程序的风险。

## Windows

首先，安装好 **Python 3.10.x** 

<a href="https://apps.microsoft.com/detail/9PJPW5LDXLZ5" title="从Microsoft Store下载"><img src="/img/website/Get-it-form-Microsoft.svg" alt="SVG Image" width="200" height="200"></a>

[从Python官网下载](https://www.python.org/ftp/python/3.10.9/python-3.10.9-amd64.exe)

### 从Git安装

使用 `winget` 安装Git

``` cmd
winget install Git.Git
```

或从 [Git官方网站](https://git-scm.com/downloads) 下载，运行安装程序，一路下一步即可

~~不用担心安装到C盘会占用空间，就100+MB的软件~~

然后，在你想安装BAAH的位置，打开终端，运行以下内容。

``` cmd
# 如果你连接github的网络良好，运行这个
git clone https://github.com/sanmusen214/BAAH.git
# 如果不好，运行下列内容
git clone https://gh-proxy.com/sanmusen214/BAAH.git
```

不要关闭窗口，运行 `cd BAAH` 进入文件夹，安装依赖

``` cmd
# 换源
pip config set global.index-url https://mirrors.cernet.edu.cn/pypi/web/simple
# 安装依赖
pip install -r requirements.txt
```

