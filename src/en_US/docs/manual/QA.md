---
# SEO Optimization
title: BAAH Frequently Asked Questions
subtitle: Update/Multi-instance/Error Handling Guide
description: Quick solutions to common BAAH automation script issues update overlay installation, ADB connection fixes, multi-instance configuration, antivirus false positive handling, scheduled task settings, compatible with MAA/ALAS and other tools.
---

<LanguageWarn/>

# Q&A Frequently Asked Questions

## 0. How to update BAAH

Download BAAH1.x.xx_update.zip from [GitHub Release](https://github.com/BlueArchiveArisHelper/BAAH/releases/) or [Gitee Release](https://gitee.com/sammusen/BAAH/releases) or QQ group or by clicking the update button in the GUI, then extract all contents to the BAAH folder and overwrite.

Or double-click `UPDATE.exe` in the directory to update BAAH.

## 1. How to provide feedback

Please:

0. Check if the issue is already listed in the FAQ
1. Check if BAAH is the latest version, you can update BAAH through the update button in the GUI
2. Describe your game server region and BAAH version number
3. Describe your purpose
4. Describe BAAH's behavior before and after the error occurs, or provide a screen recording
5. Provide logs from BAAH.exe before and after the error occurs

For details, see the [Getting Support](../docs/get-support) section.

## 2. ADB connection failed, screenshot size is 0kb or game is always detected as not opened

Please check if the ADB port number in your configuration file matches the emulator's ADB port number.

Please check if the game server region selection in your configuration file is correct.

## 3. How to check MuMuPlayer's port number

Click the three horizontal lines in the upper right corner of the emulator, open Device Diagnostics, scroll to the bottom, and the ADB port number will be displayed.

## 4. How to check LDPlayer emulator's port number

When connecting to LDPlayer, you can check "Use Serial Number" on the right side of the ADB port input box, then enter `emulator-5554`, or try `emulator-5556`, `emulator-5558`, etc., until the connection is successful.

Click Multi-instance on the right side of the emulator to get the current emulator's ID number, the port number is: 5555 + ID * 2

## 5. JP/Global server with third-party localization

BAAH is an auto-click software based on image and text recognition. Changing images and text may make it unusable.

## 6. CN server with anti-censorship patch

BAAH can dynamically recognize CN server's anti-censorship patch. Please ensure you are using the official anti-censorship patch.

## 7. When using swipe to select stages, the swipe distance is not enough, causing the script to click on the blank space between buttons

This issue usually occurs on CN server BA. Please unbind the swipe trigger distance from the server region in the configuration file and change the original 40 to 60. If it was originally 60, try changing it to 40.

## 8. Can BAAH run multiple instances

In the GUI interface, switch to different configuration files and click "Save and Run" in the lower right corner respectively.

BAAH can be used via command line. Please cd to the BAAH folder and execute `BAAH.exe your_config_name.json` to run the configuration. Combined with Windows Task Scheduler, automatic startup can be achieved.

If you use bat commands, make sure you have cd'd to the BAAH folder, then execute `BAAH.exe config1.json` followed by `BAAH.exe config2.json`

## 9. Can BAAH run with other scripts

BAAH is compatible with ALAS and MAA, but:

1. Do not try to run (BAAH) and (ALAS) or (MAA) simultaneously on the same multi-instance emulator/same emulator port, as they will compete for screenshots. Please set up multiple multi-instance emulators
2. Try to prevent automation scripts from restarting the ADB service. BAAH will never restart the ADB service. You can start BAAH after other automation tools.

## 10. BAAH.exe disappeared after extraction

Please add the BAAH folder to your antivirus software's whitelist and extract again. BAAH is completely open source. As long as you download BAAH from GitHub Release, Mirror酱, the Baidu Netdisk link at the beginning of this document, or the QQ group, you can use it safely.

## 11. How to make BAAH run on a schedule

BAAH is essentially an application that can accept parameters. When we open cmd, cd to the BAAH folder, and execute `BAAH.exe your_config_name.json`, we can run the configuration. After understanding how to use Windows Task Scheduler, you can use it to control the scheduled automatic operation of the program. Combined with BAAH's scheduled emulator on/off feature, you can complete BAAH's daily tasks hands-free.

See [Video Tutorial](https://www.bilibili.com/video/BV1ZxfGYSEVr?t=1995.6) and the [Automated Operation](../docs/automated-operation) section.

## 12. GUI runtime parameters

You can specify parameters when starting the GUI to achieve more settings, such as "BAAH_GUI.exe --token 123456" to set a password for the GUI page. The following is a list of available parameters

| Param | Desc | Default |
|-|-|-|
| --host | GUI startup IP | 127.0.0.1 |
| --port | GUI startup port | 8000 (auto search) |
| --token | GUI password | None |
| --no-show | Switch, don't open browser when specified | |

