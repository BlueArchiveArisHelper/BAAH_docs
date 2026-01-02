---
# SEO Optimization
title: BAAH Advanced Source Code Deployment Guide
subtitle: Python 3.10+Git Manual Compilation (with Risk Warning)
description: BAAH source code deployment solution for developers, requires Python 3.10 and ADB environment, supports Windows/macOS/Linux/Android, no official update support, recommended for technical users.
---

<LanguageWarn/>

# Deploying from Source Code

For Android Termux deployment, please visit [🔗 Deployment Method](https://bas.blockhaity.qzz.io?target=/2025/02/10/BAAH%E5%9C%A8%E9%80%86%E5%A4%A9%E7%8E%AF%E5%A2%83%E4%B8%8B%E7%9A%84%E8%BF%90%E8%A1%8C/) (Only Chinese!!!)

::: warning
Regardless, it is not recommended for regular users to deploy directly from source code. There will be no official update program support for source code deployment, and using `git pull` also carries the risk of damaging the program.

:::

First, install **Python 3.10.x**

::: tabs
== Windows

**Windows**

<a href="https://apps.microsoft.com/detail/9PJPW5LDXLZ5" title="Download from Microsoft Store"><img src="/img/website/Get-it-form-Microsoft.svg" alt="SVG Image" width="200" height="200"></a>

[Download from Python official website](https://www.python.org/ftp/python/3.10.11/python-3.10.11-amd64.exe)

== macOS

**macOS**

Install using homebrew

``` bash
brew install python 3.10
```

== Linux

**Linux**

Install using UV

``` bash
uv python install 3.10
```

~~What? You don't have UV? Don't worry, if you're using Linux, you'll definitely figure this small thing out.~~

:::

Then, you need to prepare [adb](https://developer.android.google.cn/tools/releases/platform-tools) and [aria2](https://github.com/aria2/aria2/releases) yourself.

## Installing from Git

::: tabs

== Windows

**Windows**

Install Git using `winget`

``` cmd
winget install Git.Git
```

Or download from [Git official website](https://git-scm.com/downloads), run the installer, and click Next all the way through

~~Don't worry about installing to C drive taking up space, it's just a 100+MB software~~

== macOS

**macOS**

Install from homebrew

``` bash
brew install git
```

== Linux

**Linux**

Most distributions come with Git pre-installed. If not, please install it from the package manager


:::

Then, in the location where you want to install BAAH, open the terminal and run the following.

``` cmd
# If you have good network connection to GitHub, run this
git clone https://github.com/BlueArchiveArisHelper/BAAH.git
# If not, run the following
git clone https://gh-proxy.com/BlueArchiveArisHelper/BAAH.git
```

Don't close the window, run `cd BAAH` to enter the folder, and install dependencies.

``` cmd
# Switch source
pip config set global.index-url https://mirrors.cernet.edu.cn/pypi/web/simple
# Install dependencies
pip install -r requirements.txt
```

Use `python jsoneditor.py` to run the WebUI, and modify the adb and aria2 paths in the configuration file editing interface.

Execute `python jsoneditor.py config.json` to start BAAH according to the config.json configuration.

## Installing from Source Archive

No need to install Git, download the **source code zip** and extract it to the desired folder. Open the terminal in the BAAH source code folder, then install dependencies and run.

## Manual Container Building

BAAH provides a standalone `Dockerfile`, allowing you to build the container without cloning the repository

Build commands are as follows

``` bash
# Download Dockerfile
wget https://github.com/BlueArchiveArisHelper/BAAH/raw/refs/heads/main/Dockerfile

# If network is poor, run the following command
wget https://v6.gh-proxy.com/github.com/BlueArchiveArisHelper/BAAH/raw/refs/heads/main/Dockerfile.CN

sudo docker build -f <your-downloaded-Dockerfile> -t baah:localbuild .

# If you are using podman, use the following command
sudo docker build -f <your-downloaded-Dockerfile> -t baah:localbuild .
```