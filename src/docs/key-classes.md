# 关键类说明

## modules/configs/Configger类

位于modules/configs/下的MyConfig控制了用户配置文件的内容，其关键行为是给未出现的用户配置文件赋默认值，以及通过已知的配置推算未知的配置。这两个功能分别和settingMaps.py和defaultSettings.py有关

以下为defaultSettings.py内每个配置项目的字段含义。
```
d: default value 默认值。若用户配置文件内无这个配置项目，则触发配置项目新增时的默认值为这个值
s: selective value 可选值，此项仅起到对开发者的提示作用，无任何值约束作用
m: map value 映射方法。与默认值同级，当定义了map映射方式后，若用户配置文件内无这个配置项目，则触发配置项目新增时优先按照映射关系为这个值寻找搭配的值
    from: map value的来源key
    map: map value的映射函数，默认是 lambda x: ...
p: post parse action 后解析方法。二级解析过程，位于d和m过程之后，且无轮用户配置文件内有无这个配置项目，都会触发此流程。默认是lambda value, parsedjson: ...，如果需要在每次对配置文件解析后对值执行一些固定的判断和替换，可以在这重写
```

::: warning
selective value仅作为提醒值存在，主要的map映射应当在settingMaps里，并通过m或p字段进行控制。
:::

::: warning
对某个功能进行逻辑重做时，最好设定新的参数key名，并通过mapping功能从旧key中复制参数的值
:::

### Config里三种参数的不同

| 特性 | userconfigdict | softwareconfigdict | userstoragedict |
| ---- | -------------- | ----------------- | ---------------- |
| 解析 | 在每次执行或用户编辑前解析 | 在软件启动时解析 | 在需要进行脚本运行数据保存时解析 |
| 数量 | 每个配置文件仅对应一份 | 每个BAAH软件仅对应一份 | 每个配置文件仅对应一份 |
| 功能 | 存储用户的每份任务配置 | 存储BAAH软件的配置 | 存储配置文件对应的非任务内容的存储信息 |

## DATA/assets/ButtonName；PageName；PopupName类

皆为静态截图的命名类

## AllPage/Page类

初始构想是维护一个页面间的跳转图，这样当我们想要到达哪个游戏页面时，调用Page.to_page(PageName.PAGE_TARGET)即可。

后面取消了此类构想，将页面的跳转放到了每一个TASK里面，通过Page.is_page()判断当前页面是否是该页面

## AllTask/Task类

Task类的实例就是用户想要完成的自动化任务，每个任务都会有pre_condition, on_run, post_condition阶段。run方法定义了Task实例的运行逻辑。

其中pre_condition是此任务是否可以进行的判断，当pre_condition返回False时，将会跳过此任务。

on_run定义了任务具体的执行步骤，在on_run内部，使用self.run_until(func1, func2, times)来持续性地执行func1操作, 直到func2成立，或执行了times次，每次尝试执行后都会重新进行截图操作。使用match(page_pic(PageName.PAGE_TARGET))来进行图片匹配操作。使用click(button_pic(ButtonName.BUTTON_TARGET))点击图像匹配中心点，或使用click((224, 789))点击横轴224，纵轴789位置。

post_condition是任务的后置判断，主要判断此任务结束时的位置是否可控，是否回到某个特定的页面。

::: tip
当pre_condition方法多次返回False，则该任务不会被执行

当post_condition方法多次返回False，会触发回到主页操作
:::

在modules/AllTask文件夹下有许多子文件夹，与这些子文件夹同名的Task，称之为一级Task。每个一级Task都应是一个每日任务之一，比如咖啡馆相关大任务/商店购买大任务，这些一级Task将会被放进myAllTask列表内进行解析并能够串行运行。

::: tip
一级Task应当从游戏主页，也就是live2D界面开始运行，运行结束时应当回到游戏主页。
:::

在一级任务的文件夹内部可能会有复数个py文件，此为二级任务。二级任务可能是一级任务内的拆分并包装后的步骤集合。在 `modules/AllTask/SubTask/` 下存在多个可复用步骤逻辑，如列表滚动选择（ScrollSelect），局内战斗任务（FightQuest）等。