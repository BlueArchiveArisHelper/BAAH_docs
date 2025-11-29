# 环境搭建

## 开发工具准备

请准备好你所擅长使用的开发环境，需要 python 3.10.x 和 git

## 获取源码

首先，打开浏览器，进入 `https://github.com/BlueArchiveArisHelper/BAAH`

点击 **fork** ，取消勾选 **Copy the main branch only**，创建你自己的Fork

然后，选择心仪的位置打开终端

``` bash
git clone https://github.com/<你的用户名>/BAAH -b dev
```

源码会下载此文件夹中

## 安装所需依赖

``` bash
cd BAAH
pip install -r requirements.txt
```

## 进行开发

项目文件结构与类说明请看后续文档。

::: tip
欢迎成为项目贡献者! 

如果你想要将你开发的内容合并到项目主分支，请在BAAH项目主页开一个issue，描述你想要完善何种功能和现有的构思，进行交流并issue通过后再进行开发，这有利于让你的pr **更顺利** 地被通过。
:::

## 打包

你可以使用打包脚本编译出可执行文件

### Windows EXE

直接运行下列命令即可
``` cmd
python package.py
```

### Linux Docker

使用 `DockerFile` 打包即可