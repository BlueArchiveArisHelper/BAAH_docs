# 任务开发步骤

::: tip

若你的 子任务/工具代码 不会被其他的任务调用，请直接放到所属的一级任务文件夹内；若你认为其他任务也会调用此 子任务/工具，则放到 `modules/AllTask/SubTask/` 或 `modules/utils` 中
:::

1. 使用test里的截图功能（或其他功能）截取所需的图片pattern。将各个服务器下的截图放入各个 `assets` 文件夹内相应子文件夹内，并一致重命名。
2. 在 `DATA/assets/` 下的 `ButtonName.py` 或 `PageName.py` 或 `PopupName.py` 内用文件名注册此pattern。
3. 在 `DATA/assets_<server>` 放入同文件名，属于不同区服的pattern。
4. 在 `modules/AllTask/` 下新建此一级任务的文件夹，并在其内部新建同名py文件，将 `ataskformat.py` 内的内容，或是从开发规范的任务模板复制粘贴进去，修改类名与构造函数的name默认属性为你的task名字。在 `modules/AllTask/__init__` 内导入此一级任务类，若你的任务类无需出现在任务列表，以其他任务调用的形式，则无需导入。
5. 如要添加任务相关配置项，在 `modules/configs/defaultSettings.py` 里添加配置默认值以及映射函数，在 `modules/configs/settingMaps` 定义映射关系即可。
6. 修改此新任务的py文件内容，实现任务逻辑。必要时实现 子任务/工具 的代码拆分。
7. 为了让你的任务能够从配置文件被正确解析，需要在 `modules/AllTask/myAllTask.py` 的 `TaskName` 里添加 用户配置项目文件内存储的任务名, 在 `TaskInstanceMap` 里添加 `task_config_name` 对应的 `i18n_key_name`（GUI内显示的此任务的i18n字符串键）, `task_module` （此任务的python类）映射关系。若你的任务类无需出现在任务列表（非一级任务），则无需导入。
8. 如果你需要让用户能够修改相关配置内容，则需要在 `gui/refactor_pages/json_set_panel.py` 的 `get_config_list` 里添加 此功能的配置页对象ConfigPanel，这会显示为配置页面左侧列表内的一个元素。ConfigPanel内的方法即为该配置内容的子页面，存放于 `gui/pages/` 内
9. 在 `DATA/i18n` 里添加对应文本