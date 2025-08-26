<LanguageWarn/>

# Key Classes

## modules/configs/Configger Class

Located in modules/configs/, MyConfig controls the contents of the user configuration file. Its key behaviors are assigning default values to user configuration files that have not appeared and deducing unknown configurations through known configurations. These two functions are related to settingMaps.py and defaultSettings.py, respectively.

The following are the meanings of each configuration item field in defaultSettings.py:
```
d: default value. If this configuration item doesn't exist in the user configuration file, the default value when adding this configuration item will be this value
s: selective value. This only serves as a reminder to developers and has no value constraint effect
m: map value. At the same level as the default value. When a map mapping method is defined, if this configuration item doesn't exist in the user configuration file, when adding the configuration item, it will prioritize finding a matching value for this value according to the mapping relationship
    from: source key of map value
    map: mapping function of map value, default is lambda x: ...
p: post parse action. A secondary parsing process, located after the d and m processes, and this process will be triggered regardless of whether this configuration item exists in the user configuration file. Default is lambda value, parsedjson: ..., if you need to perform some fixed judgments and replacements on the value after each configuration file parsing, you can rewrite it here
```

::: warning
The selective value only exists as a reminder value. The main map mapping should be in settingMaps and controlled through the m or p fields.
:::

::: warning
When redoing the logic for a certain function, it's best to set a new parameter key name and copy the parameter value from the old key through the mapping function.
:::

### Differences between the Three Parameters in Config

| Feature | userconfigdict | softwareconfigdict | userstoragedict |
| ---- | -------------- | ----------------- | ---------------- |
| Parsing | Parsed before each execution or user edit | Parsed at software startup | Parsed when script runtime data needs to be saved |
| Quantity | Only one copy per configuration file | Only one copy per BAAH software | Only one copy per configuration file |
| Function | Stores each user's task configuration | Stores BAAH software configuration | Stores non-task content storage information corresponding to configuration files |

## DATA/assets/ButtonName; PageName; PopupName Classes

These are naming classes for static screenshots.

## AllPage/Page Class

The initial idea was to maintain a diagram of page transitions so that when we want to reach a particular game page, we can call Page.to_page(PageName.PAGE_TARGET).

Later, this idea was abandoned, and page transitions were moved into each TASK. Page.is_page() is used to determine if the current page is the desired page.

## AllTask/Task Class

An instance of the Task class is an automation task that the user wants to complete. Each task has pre_condition, on_run, and post_condition phases. The run method defines the logic for running Task instances.

The pre_condition is the judgment of whether this task can proceed. When pre_condition returns False, the task will be skipped.

on_run defines the specific execution steps of the task. Inside on_run, use self.run_until(func1, func2, times) to continuously execute func1 operation until func2 is established or it has been executed times times. Screenshot operations are performed using match(page_pic(PageName.PAGE_TARGET)). Clicking on image matches the center point using click(button_pic(ButtonName.BUTTON_TARGET)) or click((224, 789)) to click at the coordinates (224, 789) on the screen.

post_condition is the post-judgment of the task, mainly to determine if the task is in a controllable state when it ends, and if it has transitioned to other pages.

::: tip
When the pre_condition method returns False multiple times, the task will not be executed.

When the post_condition method returns False multiple times, it will trigger a return to the homepage operation.
:::

There are many subfolders in the modules/AllTask folder. Tasks with the same name as these subfolders are called first-level Tasks. Each first-level Task should be one of the daily tasks, such as cafe-related major tasks/shop purchase major tasks. These first-level Tasks will be placed in the myAllTask list for parsing and can run serially.

::: tip
First-level Tasks should start from the game homepage, that is, the live2D interface, and should return to the game homepage when finished running.
:::

There may be multiple py files inside a first-level task folder, which are second-level tasks. Second-level tasks may be split and packaged step collections within first-level tasks. Under `modules/AllTask/SubTask/`, there are multiple reusable step logics, such as list scroll selection (ScrollSelect), in-game combat tasks (FightQuest), etc.