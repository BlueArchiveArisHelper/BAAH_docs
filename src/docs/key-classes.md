# 关键类说明

## modules/configs/Configger类

位于modules/configs/下的MyConfig控制了用户配置文件的内容，其关键行为是给未出现的用户配置文件赋默认值，以及通过已知的配置推算未知的配置。这两个功能分别和settingMaps.py和defaultSettings.py有关

## DATA/assets/ButtonName；PageName；PopupName类

皆为静态截图的命名类

## AllPage/Page类

初始构想是维护一个页面间的跳转图，这样当我们想要到达哪个游戏页面时，调用Page.to_page(PageName.PAGE_TARGET)即可。

后面取消了此类构想，将页面的跳转放到了每一个TASK里面，通过Page.is_page()判断当前页面是否是该页面

## AllTask/Task类

Task类的实例就是用户想要完成的自动化任务，每个任务都会有pre_condition, on_run, post_condition阶段。run方法定义了Task实例的运行逻辑。

其中pre_condition是此任务是否可以进行的判断，当pre_condition返回False时，将会跳过此任务。

on_run定义了任务具体的执行步骤，在on_run内部，使用self.run_until(func1, func2, times)来持续性地执行func1操作, 直到func2成立，或执行了times次，每次尝试执行后都会重新进行截图操作。使用match(page_pic(PageName.PAGE_TARGET))来进行图片匹配操作。使用click(button_pic(ButtonName.BUTTON_TARGET))点击图像匹配中心点，或使用click((224, 789))点击横轴224，纵轴789位置。

post_condition是任务的后置判断，主要判断此任务结束时的位置是否可控，是否跳转到了其他的页面。后面发现后置判断完全可以省略或放进on_run的最后，此方法可以废弃。

在modules/AllTask文件夹下的所有与子文件夹同名的Task，都应是一个每日任务之一，比如咖啡馆相关任务/商店购买任务，它们将会被放进myAllTask列表内进行解析运行。这些与子文件夹同名的每日任务Task默认都是从游戏主页，也就是live2D界面开始运行，运行结束时应当回到游戏主页。