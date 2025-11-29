<LanguageWarn/>

# Task Development Steps

::: tip

If your sub-task/tool code will not be called by other tasks, please place it directly in the primary task folder; if you think other tasks will also call this sub-task/tool, then place it in `modules/AllTask/SubTask/` or `modules/utils`
:::

1. Use the screenshot function (or other functions) in test to capture the required image patterns. Place the screenshots from different servers in their respective subfolders within the `assets` folders, and rename them consistently.
2. Register this pattern in `ButtonName.py`, `PageName.py`, or `PopupName.py` under `DATA/assets/` using the filename.
3. Place patterns with the same filename but belonging to different servers in `DATA/assets_<server>`.
4. Create a new folder for this primary task under `modules/AllTask/`, and create a new Python file with the same name inside it. Copy the content from `ataskformat.py` or from the task template in the development specifications, modifying the class name and the name default attribute in the constructor to your task name. Import this primary task class in `modules/AllTask/__init__`. If your task class does not need to appear in the task list and will be called by other tasks, then no import is needed.
5. If you need to add task-related configuration items, add the default values and mapping functions in `modules/configs/defaultSettings.py`, and define the mapping relationships in `modules/configs/settingMaps`.
6. Modify the content of this new task's Python file to implement the task logic. When necessary, implement code splitting for sub-tasks/tools.
7. To ensure your task can be correctly parsed from the configuration file, you need to add the task name stored in the user configuration file to `TaskName` in `modules/AllTask/myAllTask.py`, and add the mapping relationship between `task_config_name` and `i18n_key_name` (the i18n string key displayed in the GUI for this task), `task_module` (the Python class of this task) in `TaskInstanceMap`. If your task class does not need to appear in the task list (not a primary task), then no import is needed.
8. If you need to allow users to modify related configuration content, you need to add the configuration page object ConfigPanel for this feature in `get_config_list` in `gui/refactor_pages/json_set_panel.py`. This will appear as an element in the left list of the configuration page. The methods in ConfigPanel are the sub-pages of the configuration content, stored in `gui/pages/`.
9. Add the corresponding text in `DATA/i18n`.
