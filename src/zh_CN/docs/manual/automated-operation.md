# 自动化运行

::: tabs
== Windows

**Windows**

你可以使用 **Windows任务计划程序** 来自动化运行

1. 首先，在任务计划程序库中，创建一个文件夹，名称任意。

![计划任务：找到程序](/img/automated-operation/windows_timer_1.webp)

2. 然后，点击进入文件夹，创建一个基本任务，名称任意。如：

![计划任务：创建基本任务](/img/automated-operation/windows_timer_2.webp)

![计划任务：创建基本任务](/img/automated-operation/windows_timer_3.webp)

3. 触发器的选择上，根据需求选择。如：

![计划任务：选择触发器](/img/automated-operation/windows_timer_4.webp)

![计划任务：选择触发器](/img/automated-operation/windows_timer_5.webp)

4. 执行任务，选择 **运行程序(T)**

![计划任务：选择运行方式](/img/automated-operation/windows_timer_6.webp)

5. 点击 **浏览(R)...** 选择你的BAAH程序本体 **BAAH.exe**

添加参数，填写配置文件名称，要带后缀名，如 **example.json**

起始于，填写 **程序或脚本(P):** 下方输入框 **BAAH.exe** 前的所有内容。如：

![计划任务：寻找程序](/img/automated-operation/windows_timer_7.webp)

6. 随后点击 **下一页(N)** **完成(F)** 随后你的自动化任务创建成功。

![计划任务：完成](/img/automated-operation/windows_timer_8.webp)

== Linux
**Linux**

首先，确保你已经安装了BAAH的Docker容器以及MCSManager，使用 `docker ps` 或 `sudo docker ps` 来查看，命令输出中存在 **BAAH** 即已安装

[安装MCSManager](https://www.mcsmanager.com/)

新建一个实例，部署在 **localhost:24444**

程序类型选择 **部署任意控制台程序**

部署方式选择 **无需额外文件**

名称任意，启动命令输入 `docker exec BAAH sh -c "python jsoneditor.py <你的配置文件名称>.json"`

点击确定，进入控制台，点击计划任务。

点击新增，根据自己实际情况设置即可。

:::