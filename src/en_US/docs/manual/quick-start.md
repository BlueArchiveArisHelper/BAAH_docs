---
# SEO Optimization
title: BAAH Quick Deployment Guide
subtitle: Windows/Linux Automated Script Configuration
description: Complete BlueArchive Aris Helper deployment in 3 steps! MuMu emulator settings (1280x720/240 DPI), Windows extract-and-run + GUI configuration, Linux Docker one-click deployment, with scheduled task automation support.
---

<LanguageWarn/>

# Quick Start

## Pre-deployment Preparation

1. Emulator
   - It is recommended to use MuMu 4.x
   - Set resolution to 1280*720 pixels with 240 DPI. Enable ADB debugging. Note the ADB debugging port number of the emulator.
   - If you are using MuMuPlayer, please turn off Keep alive in background in the bottom of settings.
   - If ADB cannot connect, please confirm that the network bridge mode of the emulator is turned off or modify the ADB connection IP in other settings.
2. Game Settings
    - **Games** -> **EX Skill Effects** -> **Off**
    - **Graphics** -> **Battle Screen Vertical Letterbox** -> **Off**
    - Manually raise the camera view in the cafe to the highest position, preferably stacking all furniture on the far right side of the screen.
3. Additional Game Settings for PC Version
    - **Graphics** -> **Display Mode** -> **Windowsed**
    - **Graphics** -> **Aspect Ratio** -> **16:9**
    - **Control** -> **Display Shortcut Icon** -> **Off**
    - Close software that displays frame rate and usage in the game window, as they may block the UI.
## Deployment

:::: tabs

== Windows
**Windows**

[Video Tutorial](https://www.bilibili.com/video/BV1ZxfGYSEVr)

First, download the approximately 160MB compressed package and extract it to any folder.

[Go to Download Page](/en_US/download)

Copy example.json from the BAAH_CONFIGS folder and rename it to any other name, such as task.json

Double-click BAAH.exe to open the interface.

In Server Configuration, select your BA server.

If you are using an emulator, modify the port number to your emulator's ADB debugging port in the Emulator Configuration.

If you're using an emulator and want to auto-start it, enter the emulator path in the Emulator Configuration.

If you're using the Japanese Server PC version and want to auto-start the game, enter the game path (typically at ...\YostarGames\BlueArchive_JP\BlueArchive.exe) in the Emulator Configuration.

In Task Execution Order, enable the task flow or click the Quick Call Task button to run tasks.


== macOS
**macOS**

See [Deploy from Source Code](/en_US/docs/manual/source-code) for details.

== Linux
**Linux**

First, ensure your system has Docker installed. You can check by entering the following command

``` bash
# For ROOT users
docker help
# For non-ROOT users with sudo privileges
sudo docker help
```

If the command outputs the following content, then your system has Docker

::: details Command Output
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

Then, pull the image, create and run the container.

``` bash
docker run -d --name BAAH -p 8000:8000 ghcr.io/BlueArchiveArisHelper/baah:latest
```

Then open your browser and navigate to `http://<your-server-ip>:8000`

In Server Configuration, select your BA server.

In Emulator Configuration, modify the port number to your emulator's ADB debugging port. (If you are using an emulator)

In Task Execution Order, enable the task flow or click the Quick Call Task button to run tasks.

::::
