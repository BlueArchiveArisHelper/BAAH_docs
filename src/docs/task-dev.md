# 任务开发步骤

1. 使用test里的截图功能（或其他功能）截取所需的图片pattern。将各个服务器下的截图放入各个 `assets` 文件夹内相应子文件夹内，并一致重命名。
2. 在 `DATA/assets/` 下的 `ButtonName.py` 或 `PageName.py` 或 `PopupName.py` 内用文件名注册此pattern。
3. 在 `DATA/assets_<server>` 放入同文件名，不同区服的pattern。
4. 在 `modules/AllTask/` 下新建此任务的文件夹，并在其内部新建同名py文件，将 `ataskformat.py` 内的内容，或是从开发规范的任务模板复制粘贴进去，修改类名与构造函数的name默认属性为你的task名字。在 `modules/AllTask/__init__` 内导入此任务类，若你的任务类无需出现在任务列表，以其他任务调用的形式，则无需导入。
5. 修改此新任务的py文件内容
6. 在 `modules/AllTask/myAllTask.py` 的 `TaskName` 里添加 用户配置项目文件内的任务名, 在 `TaskInstanceMap` 里添加 `task_config_name` 对应的 `i18n_key_name`, `task_module` 映射关系，若你的任务类无需出现在任务列表，以其他任务调用的形式，则无需导入。
7. 在 `gui/refactor_pages/json_set_panel.py` 的 `get_config_list` 里添加 `用户配置项目文件内的任务名` 与 `gui里显示的文本间的对应关系`
8. 在 `DATA/i18n` 里添加对应文本
9. 如要添加配置项，在 `modules/configs/defaultSettings.py` 里添加配置默认值以及映射函数，在 `modules/configs/settingMaps` 定义映射关系即可。