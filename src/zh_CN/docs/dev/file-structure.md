# 文件结构&说明

<LiteTree>
项目目录
    + [folder]BAAH_CONFIGS // 用户配置的需要执行的任务
    + DATA // 此项目所需的各类静态资源以及多语言支持
        - [folder]assets // 国际服资源（繁体）以及资源语义化文件
        - [folder]assets_cn // 国，B服资源
        - [folder]assets_global_en // 国际服资源（英语）
        - [folder]assets_jp // 日服资源
        - [folder]grid_solution // 自动推图数据
        - [folder]i18n // 国际化数据
    + [folder]docs // 旧文档（归档）
    + gui // webui相关
        - [folder]components // 可复用组件
        - [folder]pages // 二级页面（单个配置文件编辑页）内的子页面
        + refactor_pages // 路由页面
            - home.py // 一级页面（首页）
            - json_set_panel.py // 二级页面（单个配置文件编辑页）
        - define.py // 定义GUI全局共享config变量和js注入
    + modules // 主要模块
        - [folder]AllPage // 页面级别定位（弃用）
        - [folder]AllTask // 一级任务
        + configs // 配置文件管理模块
            - defaultSettings.py // 配置文件的默认参数
            - MyConfig.py // 定义配置文件类
            - settingMaps.py // 参数间映射关系
        - [folder]utils // 使用工具或辅助方法
    + tools // 被调用的adb以及库的静态资源包，注意这些资源不在github里面
        - [folder]adb
        - [folder]aria2
    BAAH.py // 执行某一个用户配置的任务文件，封装为方法
    jsoneditor.py // webui的入口文件，包含命令行参数解析
    main.py // 脚本主程序
    package.py // 打包脚本为可执行文件
    requirements.txt // 依赖列表
</LiteTree>

