---
# SEO 优化
title: BAAH 快速部署指南
subtitle: Windows/Linux 自动化脚本配置
description: 3 步完成 BlueArchive Aris Helper 部署！MuMu 模拟器设置（1280x720/240 DPI），Windows 解压即用 + GUI 配置，Linux Docker 一键运行，支持定时任务自动化。
---

# 快速开始

## 开始前的准备

1. 模拟器
   - 建议使用 MuMu 4.x
   - 分辨率设置为 1280*720 像素， 240 DPI。将adb调试打开。注意模拟器的adb调试端口号。
   - 如果你使用的MuMu模拟器，请在设置的底部关闭后台保活运行。
   - 如果adb无法连接，请确认关闭模拟器的网络桥接功能 或 在其他设置中修改adb连接IP。
2. 游戏本体设置
    - **游戏** -> **技能动画** -> **关**
    - **画面** -> **战斗时上下黑边** -> **关**
    - 咖啡厅的摄像机视角手动拉到了最高，最好将家具全堆在屏幕最右侧。
3. 国际服 Steam 版游戏本体附加设置
    - **操作** -> **快捷键图示显示** -> **关**
    - 关闭在游戏窗口显示帧率占用等功能的软件，它们很可能会挡住UI。

## 开始部署

:::: tabs

== Windows
**Windows**

[视频教程](https://www.bilibili.com/video/BV1ZxfGYSEVr)

首先，下载约 160MB 的压缩包后解压至任意文件夹。

[前往下载页](/zh_CN/download)

将 BAAH_CONFIGS 文件夹内的 example.json 复制并重命名为任一其他名字，如 task.json

双击 BAAH.exe 打开界面。

在服务器设置中，选择你游玩的ba服务器。

如果使用的是模拟器，请在模拟器设置中，修改端口号为你的模拟器adb调试端口。

在任务执行顺序设置中，启用任务流或点击快速执行按钮运行任务。


== macOS
**macOS**

详见[从源码部署](/zh_CN/docs/manual/source-code.md)。

== Linux
**Linux**

首先，确保你的电脑内存在容器管理器（如 `podman`,`docker`）和 `adb`

然后，使用root权限运行 `adb start-server`

接下来，运行容器

::: details Docker命令
``` bash
sudo docker run -d \
                -v /path/to/configs:/app/BAAH/BAAH_CONFIGS \
                --net=host \
                --restart=always \
                --name BAAH \
                ghcr.io/bluearchivearishelper/baah:latest
```
:::

::: details Podman命令
``` bash
sudo docker run -d \
                -v /path/to/configs:/app/BAAH/BAAH_CONFIGS \
                --net=host \
                --restart=always \
                --name BAAH \
                ghcr.io/bluearchivearishelper/baah:latest
```
:::

::::