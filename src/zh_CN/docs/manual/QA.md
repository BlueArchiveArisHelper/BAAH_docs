---
# SEO优化
title: BAAH 常见问题解答
subtitle: 更新/多开/报错处理指南
description: 快速解决 BAAH 自动化脚本的典型问题：更新覆盖安装、ADB连接修复、多开配置、杀毒误报处理、定时任务设置，兼容 MAA/ALAS 等工具。
---

# Q&A 常见问题

## 0. 如何更新BAAH

从[GitHub Release](https://github.com/BlueArchiveArisHelper/BAAH/releases/)界面或[Gitee Release](https://gitee.com/sammusen/BAAH/releases)界面或QQ群内或通过点击GUI的更新按钮下载 BAAH1.x.xx_update.zip 后，解压缩所有内容至 BAAH 文件夹内覆盖即可。

或者双击目录下的 `UPDATE.exe` 来更新 BAAH 。

## 1. 如何反馈

请：

0. 检查问题是否已经列在常见问题里
1. 检查BAAH是否是最新版本，你可以通过GUI内的更新按钮来更新BAAH
2. 描述你的游戏区服，BAAH版本号
3. 描述你的目的
4. 描述BAAH在错误发生前后的行为或提供录屏
5. 提供BAAH.exe发生错误前后的日志

详见章节[获取支持](/zh_CN/docs/manual/get-support)。

## 2. 提示adb连接失败，截图大小为0kb 或 一直检测到游戏未打开，尝试打开游戏

请检查你配置文件里的adb端口号是否和模拟器的adb端口号相同。

请检查你配置文件里的游戏区服选择是否正确。

## 3. 如何查看MuMu模拟器的端口号

点击模拟器右上角三条横线，点开问题检测，滑动到底部，会显示 adb端口号

## 4. 如何查看雷电模拟器的端口号

连接到雷电模拟器，可以勾选adb端口输入框右侧的 `直接使用序列号连接模拟器` ，然后填入 `emulator-5554` ，或者依次尝试 `emulator-5556` ,  `emulator-5558` 等，直到成功连接。

模拟器右侧点击多开，可以得知当前模拟器的ID编号，端口号为：5555+ID*2

## 5. 日服/国际服使用了第三方汉化

BAAH 是基于图像和文字识别的自动点击软件，改变了图像和文字等很可能无法使用。

## 6. 国服BA安装了反和谐

BAAH 可以动态识别国服的反和谐，请确保使用的反和谐来自第一方。

## 7. 使用滑动进行选关时，滑动距离不够，导致脚本点击到按钮间的空白处

这个问题通常出现在国服BA上，请把配置文件底部的滑动触发距离取消与区服绑定，并将原先的40改为60。如果原先是60，请尝试改为40

## 8. BAAH能否多开

在GUI界面切换至不同配置文件，分别点击右下角保存并运行即可。

BAAH可以通过命令行使用，请cd到BAAH文件夹下，执行 `BAAH.exe 你的配置名.json` 即可运行该配置，结合Windows的任务计划程序可以实现自动启动。

如果你使用bat命令，请确保cd到了BAAH文件夹下，然后执行 `BAAH.exe config1.json` 接着执行 `BAAH.exe config2.json`

## 9. BAAH能否与其他脚本多开

BAAH与ALAS，MAA兼容，只是：

1. 请不要尝试在 一个多开模拟器/一个模拟器端口 上同时运行（BAAH）和（ALAS）或（MAA），他们会抢占截图。请设置多个多开模拟器
2. 请注意尽量不要让自动化脚本重启adb服务，BAAH永远不会重启adb服务，你可以把BAAH放在其它自动化工具的后面启动。

## 10. 解压后BAAH.exe消失了

请将BAAH所在文件夹设置为杀毒软件的白名单重新解压，BAAH完全开源，只需确保你的BAAH下载自GitHub Release、Mirror酱、本文档开头的夸克网盘和QQ群内，即可安心使用。

## 11. 如何让BAAH能够定时自动运行

BAAH的本质是一个可以接受参数的应用程序，当我们打开cmd，cd到BAAH文件夹下，执行 `BAAH.exe 你的配置名.json` 即可运行该配置。在了解了如何使用Windows的任务计划程序后末尾，您就可以使用任务计划程序控制程序的定时自动运行，结合BAAH中的定时开启/关闭模拟器功能，即可做到解放双手完成BAAH的每日任务。

详见[视频教程](https://www.bilibili.com/video/BV1ZxfGYSEVr?t=1995.6)和章节[自动化运行](/zh_CN/docs/manual/automated-operation)。

## 12. GUI运行时参数

你可以在GUI启动时指定参数以实现更多设置，比如 "BAAH_GUI.exe --token 123456" 来为GUI页面设置密码。以下是可使用的参数列表

| Param | Desc | Default |
|-|-|-|
| --host | GUI启动时的ip | 127.0.0.1 |
| --port | GUI启动时的端口 | 8000 （自动查找） |
| --token | GUI密码 | None |
| --no-show | 开关，指定时不自动打开浏览器 | |
