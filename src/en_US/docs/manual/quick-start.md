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
3. Additional Game Settings for Steam Global Version
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

In Emulator Configuration, modify the port number to your emulator's ADB debugging port. (If you are using an emulator)

In Task Execution Order, enable the task flow or click the Quick Call Task button to run tasks.


== macOS
**macOS**

See [Deploy from Source Code](/en_US/docs/manual/source-code) for details.

== Linux
**Linux**

First, ensure your system has a container manager (such as `podman` or `docker`) and `adb` installed

Then, run `adb start-server` with root privileges

Next, run the container

::: details Docker Command
``` bash
sudo docker run -d \
                -v /path/to/configs:/app/BAAH/BAAH_CONFIGS \
                --net=host \
                --restart=always \
                --name BAAH \
                ghcr.io/bluearchivearishelper/baah:latest
:::

::: details Podman Command
``` bash
sudo docker run -d \
                -v /path/to/configs:/app/BAAH/BAAH_CONFIGS \
                --net=host \
                --restart=always \
                --name BAAH \
                ghcr.io/bluearchivearishelper/baah:latest
:::

::::
