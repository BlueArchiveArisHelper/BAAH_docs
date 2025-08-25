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
   - If you are using MuMuPlayer, please turn off Keep alive in background in the bottom of settings
   - If ADB cannot connect, please confirm that the network bridge mode of the emulator is turned off or modify the ADB connection IP in other settings.
2. Game Settings
    - **Games** -> **EX Skill Effects** -> **Off**
    - **Graphics** -> **Battle Screen Vertical Letterbox** -> **Off**
    - Manually raise the camera view in the cafe to the highest position, preferably stacking all furniture on the far right side of the screen

## Deployment

:::: tabs

== Windows
**Windows**

[Video Tutorial](https://www.bilibili.com/video/BV1ZxfGYSEVr)

First, download the approximately 140MB compressed package and extract it to any folder

[Go to Download Page](/download)

Copy example.json from the BAAH_CONFIGS folder and rename it to any other name, such as task.json

Double-click BAAH_GUI.exe to open the interface.

In emulator settings, modify the port number to your emulator's ADB debugging port.

In server settings, select your BA server.

In task execution order settings, enable the task flow or click the quick execute button to run tasks.


== MacOS
**MacOS**

See [Deploy from Source Code](../docs/source-code.md) for details.

== Linux
**Linux**

First, ensure your system has Docker installed. You can check by entering the following command

 56  ``` bash
# For ROOT users
docker help
# For non-ROOT users with sudo privileges
sudo docker help

If the command outputs the following content, then your system has Docker

 65  ::: details Command Output
 66  ``` bash
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
149  :::

Then, pull the image, create and run the container.

153  ``` bash
docker run -d --name BAAH -p 8000:8000 ghcr.io/BlueArchiveArisHelper/baah:latest

Then open your browser and navigate to `http://<your-server-ip>:8000`

In emulator settings, modify the port number to your emulator's ADB debugging port.

In server settings, select your BA server.

In task execution order settings, enable the task flow or click the quick execute button to run tasks.

::::
