# 开发规范

此开发规范为参考推荐规范，如果你的代码质量较高，你的pr也会给予通过。

BAAH是一个有历史包袱的项目，请不要看到有不和规范的地方就抨击作者。

此开发规范是后天总结而成的，且编写者并不是作者，请各位开发者友善交流。

推荐参考：[Google Python 开发规范（中文）](https://zh-google-styleguide.readthedocs.io/en/latest/google-python-styleguide/contents.html)

~~其实，只要能看懂，不混淆，基本上你的PR就不太会不通过（没必要的功能除外）。~~

## 键值命名&映射

在默认配置 `modules/configs/defaultSettings.py` 中，所有的键值都以 **大写字母，数字，EN下划线(_)** 命名，都以 `KEY: {"d": "default"}` 的方式添加

各个特殊键值对应如下

```
d: default value 默认值
s: selective value 可选值
m: map value 映射方法
    from: map value的来源key
    map: map value的映射函数，默认是 lambda x=parsedjson[from]: ...
p: post parse action 后解析方法，默认是lambda value, parsedjson: ...，如果需要在解析后对值执行一些固定的判断和替换，可以在这重写

userconfigdict是一个dict，存储用户的一个脚本的BAAH配置文件的内容，用户可以在GUI里修改这些值
```

如果你要使用映射 `modules/configs/settingMaps.py` ，selective value作为提醒值存在，主要的map映射应当在settingMaps里。
2
映射字典规范如下，

``` python
from2map = {"from"; "map"}
```

其中，映射表名称为 `<小写英文>2<小写英文>` 命名

在国际化配置 `DATA/i18n` 中，所有键值都以 **小写字母，数字，EN下划线(_)** 命名

## 文件命名

在webui页面编写 `gui/pages` 中，请以 `Setting_xxx.py` 命名，最好 `xxx` 以大写英语字母开头。

在逻辑编写 `modules/AllTask` 中，根据游戏运行的相关环节，创建以 `XxxXxx` 为名称的文件夹，已有则不用创建，文件则以 `XxxXxx.py` 命名

## 关于混淆

这是开源项目，请不要以以下甚至其他方式混淆你的代码。
 - 使用VSCode的 `black formatter` 插件对文件进行格式化。（`modules/configs/settingMaps.py`和`modules/configs/defaultSettings.py` 的字典除外）
 - 使用无意义的文件名，变量名，键值
 - 不要过度依赖AI代码编写插件（BAAH文件结构较为复杂，AI吃不下，会出现严重的细节问题）

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

若要逻辑中，调用用户配置文件，可以直接使用 `config.userconfigdict["KEY"]` 获取。

::: tip
根据规范，所有 `config.userconfigdict` 的键值全部使用大写字母，数字，EN下划线(_)命名
::: 

逻辑中，所有日志输出请使用 `logging` 类，有`logging.info` `logging.warn` `logging.error` `logging.debug` 4个级别，且搭配 `istr({"zh_CN": "日志", "en_US": "log"})` 实现国际化输出。

在webui编写中，使用 `config.get_text('key')` 获取国际化数据，使用 `config.userconfigdict, "KEY"` 获取用户配置文件。

::: warning
请不要硬编码，请不要硬编码，请不要硬编码。
:::

::: tip
根据规范，所有 `config.get_text` 的键值全部使用小写字母和下划线
::: 

若你的工具不会被其他的任务调用，请统一放到一个类内，若你是对已有的工具添加调用，则放到 `modules/utils` 中，并添加引用。