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
3. PC 版游戏本体附加设置
    - **画面** -> **画面模式** -> **视窗模式**
    - **画面** -> **画面比例** -> **16:9**
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

在服务器设置中，选择你游玩的 BA 服务器。

如果使用的是模拟器，请在模拟器设置中，修改端口号为你的模拟器adb调试端口。

如果使用的是模拟器，并且希望自动打开模拟器，请在模拟器设置中填写模拟器路径。

如果使用的是日服 PC 版，并且希望能自动打开游戏，请在模拟器设置中填写游戏路径（通常为…\YostarGames\BlueArchive_JP\BlueArchive.exe）。

在任务执行顺序设置中，启用任务流或点击快速执行按钮运行任务。


== macOS
**macOS**

详见[从源码部署](/zh_CN/docs/manual/source-code.md)。

== Linux
**Linux**

首先，确保你的系统内包含Docker，可以输入一下命令查看

``` bash
# 对于ROOT用户
docker help
# 对于非ROOT，但是拥有sudo权限的用户
sudo docker help
```

如果命令输出了以下内容，则你的系统包含Docker

::: details 命令输出
``` bash
Usage:  docker [OPTIONS] COMMAND

A self-sufficient runtime for containers

Common Commands:
  run         Create and run a new container from an image
  exec        Execute a command in a running container
  ps          List containers
  build       Build an image from a Dockerfile
  pull        Download an image from a registry
  push        Upload an image to a registry
  images      List images
  login       Authenticate to a registry
  logout      Log out from a registry
  search      Search Docker Hub for images
  version     Show the Docker version information
  info        Display system-wide information

Management Commands:
  builder     Manage builds
  container   Manage containers
  context     Manage contexts
  image       Manage images
  manifest    Manage Docker image manifests and manifest lists
  network     Manage networks
  plugin      Manage plugins
  system      Manage Docker
  trust       Manage trust on Docker images
  volume      Manage volumes

Swarm Commands:
  swarm       Manage Swarm

Commands:
  attach      Attach local standard input, output, and error streams to a running container
  commit      Create a new image from a container's changes
  cp          Copy files/folders between a container and the local filesystem
  create      Create a new container
  diff        Inspect changes to files or directories on a container's filesystem
  events      Get real time events from the server
  export      Export a container's filesystem as a tar archive
  history     Show the history of an image
  import      Import the contents from a tarball to create a filesystem image
  inspect     Return low-level information on Docker objects
  kill        Kill one or more running containers
  load        Load an image from a tar archive or STDIN
  logs        Fetch the logs of a container
  pause       Pause all processes within one or more containers
  port        List port mappings or a specific mapping for the container
  rename      Rename a container
  restart     Restart one or more containers
  rm          Remove one or more containers
  rmi         Remove one or more images
  save        Save one or more images to a tar archive (streamed to STDOUT by default)
  start       Start one or more stopped containers
  stats       Display a live stream of container(s) resource usage statistics
  stop        Stop one or more running containers
  tag         Create a tag TARGET_IMAGE that refers to SOURCE_IMAGE
  top         Display the running processes of a container
  unpause     Unpause all processes within one or more containers
  update      Update configuration of one or more containers
  wait        Block until one or more containers stop, then print their exit codes

Global Options:
      --config string      Location of client config files (default "/root/.docker")
  -c, --context string     Name of the context to use to connect to the daemon (overrides
                           DOCKER_HOST env var and default context set with "docker context use")
  -D, --debug              Enable debug mode
  -H, --host list          Daemon socket to connect to
  -l, --log-level string   Set the logging level ("debug", "info", "warn", "error", "fatal")
                           (default "info")
      --tls                Use TLS; implied by --tlsverify
      --tlscacert string   Trust certs signed only by this CA (default "/root/.docker/ca.pem")
      --tlscert string     Path to TLS certificate file (default "/root/.docker/cert.pem")
      --tlskey string      Path to TLS key file (default "/root/.docker/key.pem")
      --tlsverify          Use TLS and verify the remote
  -v, --version            Print version information and quit

Run 'docker COMMAND --help' for more information on a command.

For more help on how to use Docker, head to https://docs.docker.com/go/guides/
```
:::

然后，拉取镜像，创建并运行容器。

``` bash
docker run -d --name BAAH -p 8000:8000 ghcr.io/bluearchivearishelper/baah:latest
```

随后打开浏览器，打开 `http://<your-server-ip>:8000`

在服务器设置中，选择你游玩的 BA 服务器。

如果使用的是模拟器，请在模拟器设置中，修改端口号为你的模拟器adb调试端口。

在任务执行顺序设置中，启用任务流或点击快速执行按钮运行任务。

::::