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

Or just double click `UPDATE.exe` to update BAAH.

## 1. How to provide feedback

Please:

0. Check if the issue is already listed in the FAQs.
1. Check whether the BAAH is the latest version. You can update BAAH through the update button in the GUI.
2. Describe your game server, BAAH version.
3. Describe your purpose.
4. Describe the behavior of BAAH before and after the error occurred or provide a recording.
5. Provide logs of BAAH.exe before and after the error occurred.

For details, see the [Getting Support](/en_US/docs/manual/get-support) section.

## 2. ADB connection failed, screenshot size is 0kb or game is always detected as not opened

Please check if the adb port number in your configuration file matches the adb port number of the emulator.

Please verify if your server selection in the configuration file is correct.

## 3. How to check MuMuPlayer emulator's port number

Click the three horizontal lines in the upper right corner of the emulator, open Device Diagnostics, scroll to the bottom, and the ADB port number will be displayed.

## 4. How to check LDPlayer emulator's port number

When connecting to LDPlayer, you can check `Whether use adb serial to connect the emulator` on the right side of the ADB port input box, then enter `emulator-5554`, or try `emulator-5556`, `emulator-5558`, etc., until the connection is successful.

Click Multi-instance on the right side of the emulator to get the current emulator's ID number, the port number is: 5555 + ID * 2

## 5. JP/Global server with third-party localization

BAAH is an auto-click software based on image and text recognition. Changing images and text may make it unusable.

## 6. CN server with anti-censorship patch

BAAH can dynamically recognize CN server's anti-censorship patch. Please ensure you are using the official anti-censorship patch.

## 7. When Using Swipe to Select Levels, the Swipe Distance is Not Enough

This issue usually occurs in CN server official BAs. Unbind the swipe trigger distance from the server in the configuration file and change 40 to 60.

## 8. Can BAAH be Multi-opened?

Switch to different configuration files in the GUI interface, then click Save and Run in the bottom right corner separately.

BAAH can be run through the command line, just cd to the BAAH folder, and execute `BAAH.exe your_config.json`. By combining the Windows Task Scheduler, you can run BAAH automatically at a specific time.

If you are using a bat command or Windows Task Scheduler, make sure to cd to the BAAH folder, then execute `BAAH.exe config1.json` followed by `BAAH.exe config2.json`.

## 9. Can BAAH be Run Multi-opened with Other Scripts?

BAAH is compatible with ALAS and MAA, but:

1. Please do not attempt to run BAAH and ALAS or MAA on the same multi-opened emulator/same emulator port simultaneously, as they will compete for screenshots. Please set up multiple multi-opened emulators.
2. Please be careful not to let the automation scripts restart the adb service, BAAH will not try to shut down the adb daemon, you should start BAAH after other automation tools.

## 10. BAAH.exe disappeared after extraction

Please add the BAAH folder to your antivirus software's whitelist and extract again. BAAH is completely open source. As long as you download BAAH from GitHub Release, MirrorChyan, the Quark Cloud Disk link at the beginning of this document, or the QQ group, you can use it safely.

## 11. How to make BAAH run on a schedule

BAAH is essentially an application that can accept parameters. When we open cmd, cd to the BAAH folder, and execute `BAAH.exe your_config_name.json`, we can run the configuration. After understanding how to use Windows Task Scheduler, you can use it to control the scheduled automatic operation of the program. Combined with BAAH's scheduled emulator on/off feature, you can complete BAAH's daily tasks hands-free.

See [Video Tutorial](https://www.bilibili.com/video/BV1ZxfGYSEVr?t=1995.6) and the [Automated Operation](/en_US/docs/manual/automated-operation) section.

## 12. GUI runtime parameters

You can set more parameters before GUI running to enable more settings. For example, run "BAAH.exe --token 123456" will protect your GUI webpage with a password. Following is the paremeter table that GUI can use:


| Param | Desc | Default |
|-|-|-|
| --host | GUI will bind on this IP | 127.0.0.1 |
| --port | GUI will bind on this port | 8000, auto find |
| --token | GUI password | None |
| --no-show | Switch, will not open explorer when GUI is started if it is given | ||

