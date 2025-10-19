<LanguageWarn/>

# Development Specification

This development specification is a reference recommendation.

Additionally, if you want your PR to be merged as soon as possible, please write at least one line of comment to describe each logical statement block.

Recommended reference: [Google Python Style Guide](https://google.github.io/styleguide/pyguide.html)

## Key Naming & Mapping

In the default configuration `modules/configs/defaultSettings.py`, all keys are named with **uppercase letters, numbers, and English underscores(_)**

The mapping table names follow the `<lowercase>2<lowercase>` naming convention

In the internationalization configuration `DATA/i18n`, all keys are named with **lowercase letters, numbers, and English underscores(_)**

## File Naming

When writing webui pages in `gui/pages`, please name them as `Setting_xxx.py`, where `xxx` preferably starts with an uppercase English letter.

When writing logic in `modules/AllTask`, create a folder named `XxxXxx` based on the primary task name (don't create if it already exists). The primary task should be named `XxxXxx.py`, consistent with the parent folder.

## Code Obfuscation

BAAH is a multi-person maintained open source project. Please avoid confusing your code in the following or other ways:
 - Don't use meaningless filenames, variable names, or keys
 - Don't over-rely on AI code generation

## Logic File Template

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
## Function Calls

To call user configuration in code, you can directly use `config.userconfigdict["KEY"]` to get the value.

::: tip
According to the specification, all keys in `config.userconfigdict` must use uppercase letters, numbers, and English underscores(_)
:::

For logging in logic, please use the `logging` class with four levels: `logging.info`, `logging.warn`, `logging.error`, and `logging.debug`, combined with `istr({CN: "日志", EN: "log"})` for internationalized output.

When writing webui, use `config.get_text('key')` to get internationalized data and `config.userconfigdict["KEY"]` to get user configuration.

::: warning
Please use `istr` for multilingual text display and avoid hardcoding strings
:::

