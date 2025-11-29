# 开发规范

此开发规范为参考推荐规范。

此外，如果希望你的pr能够被尽快合并，请在每块逻辑语句区域处写下至少一行注释进行描述。

推荐参考：[Google Python 开发规范（中文）](https://zh-google-styleguide.readthedocs.io/en/latest/google-python-styleguide/contents.html)

## 键值命名&映射

在默认配置 `modules/configs/defaultSettings.py` 中，所有的键值都以 **大写字母，数字，EN下划线(_)** 命名

其中，映射表名称为 `<小写英文>2<小写英文>` 命名

在国际化配置 `DATA/i18n` 中，所有键值都以 **小写字母，数字，EN下划线(_)** 命名

## 文件命名

在webui页面编写 `gui/pages` 中，请以 `Setting_xxx.py` 命名，最好 `xxx` 以大写英语字母开头。

在逻辑编写 `modules/AllTask` 中，根据一级任务名称，创建以 `XxxXxx` 为名称的文件夹，已有则不用创建。一级任务则以同样的 `XxxXxx.py` 命名，与上级文件夹保持一致

## 关于混淆

BAAH是一个多人维护的开源项目，请注意不要以以下或其他方式混淆你的代码。
 - 不要使用无意义的文件名，变量名，键值
 - 不要过度依赖AI代码编写

## 逻辑文件模板

``` python
from DATA.assets.PageName import PageName
from DATA.assets.ButtonName import ButtonName
from DATA.assets.PopupName import PopupName

from modules.AllPage.Page import Page
from modules.AllTask.Task import Task

from modules.utils import click, swipe, match, page_pic, button_pic, popup_pic, sleep, ocr_area, config, screenshot, match_pixel, istr, CN, EN, JP
from modules.utils.log_utils import logging

class NameOfTask(Task):
    def __init__(self, name="NameOfTask") -> None:
        super().__init__(name)

     
    def pre_condition(self) -> bool:
        return super().pre_condition()
    
     
    def on_run(self) -> None:
        super().on_run()

     
    def post_condition(self) -> bool:
        return super().post_condition()
```

## 函数调用

若要在代码中调用用户配置文件，可以直接使用 `config.userconfigdict["KEY"]` 获取。

::: tip
根据规范，所有 `config.userconfigdict` 的键值全部使用大写字母，数字，EN下划线(_)命名
::: 

逻辑中，所有日志输出请使用 `logging` 类，有`logging.info` `logging.warn` `logging.error` `logging.debug` 4个级别，且搭配 `istr({CN: "日志", EN: "log"})` 实现国际化输出。

在webui编写中，使用 `config.get_text('key')` 获取国际化数据，使用 `config.userconfigdict["KEY"]` 获取用户配置文件。

::: warning
请使用istr实现多语言显示文字，避免进行字符串硬编码
:::
