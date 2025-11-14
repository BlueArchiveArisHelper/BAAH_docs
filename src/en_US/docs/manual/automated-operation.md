<LanguageWarn/>

# Automated Operation

::: tabs
== Windows

**Windows**

You can use **Windows Task Scheduler** to automate the operation

1. First, in the Task Scheduler Library, create a folder with any name.

![Task Scheduler: Find Program](/img/automated-operation/windows_timer_1.png)

2. Then, click to enter the folder and create a basic task with any name. For example:

![Task Scheduler: Create Basic Task](/img/automated-operation/windows_timer_2.png)

![Task Scheduler: Create Basic Task](/img/automated-operation/windows_timer_3.png)

3. For the trigger selection, choose according to your needs. For example:

![Task Scheduler: Select Trigger](/img/automated-operation/windows_timer_4.png)

![Task Scheduler: Select Trigger](/img/automated-operation/windows_timer_5.png)

4. For the action, select **Start a program**

![Task Scheduler: Select Action](/img/automated-operation/windows_timer_6.png)

5. Click **Browse...** to select your BAAH program **BAAH.exe**

Add arguments, fill in the configuration file name with extension, such as **example.json**

For Start in (optional), fill in everything before **BAAH.exe** in the input box below **Program/script:**. For example:

![Task Scheduler: Find Program Path](/img/automated-operation/windows_timer_7.png)

6. Then click **Next** and **Finish** to complete the task creation.

![Task Scheduler: Complete](/img/automated-operation/windows_timer_8.png)

== Linux
**Linux**

First, ensure you have installed the BAAH Docker container and MCSManager. Use `docker ps` or `sudo docker ps` to check. If **BAAH** appears in the command output, it is installed.

[Install MCSManager](https://www.mcsmanager.com/)

Create a new instance deployed at **localhost:24444**

Select **Deploy any console program** as the program type

Select **No additional files required** as the deployment method

Name it as you like, and for the startup command, enter `docker exec BAAH sh -c "python jsoneditor.py <your configuration file name>.json"`

Click OK, enter the console, and click on Scheduled Tasks.

Click Add and set according to your actual situation.

:::
