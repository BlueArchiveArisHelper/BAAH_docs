# 文件结构&说明

<LiteTree>
项目目录
    + [folder]BAAH_CONFIGS // 用户配置的需要执行的任务
    + DATA // 此项目所需的各类静态资源以及多语言支持
      - [folder]assets // 国际服资源（繁体）
      - [folder]assets_cn // 国，B服资源
      - [folder]assets_global_en // 国际服资源（英语）
      - [folder]assets_jp // 日服资源
      - [folder]grid_solution // 自动推图数据
      - [folder]i18n // 国际化数据
    + [folder]docs // 旧文档（归档）
    + gui // webui相关
        - [folder]components // 可复用组件
        - [folder]pages // 页面以及子页面
        - __init__.py // 对于一个config而言的编辑页面
    + modules // 主要模块
        - [folder]AllPage // 页面级别定位
        - [folder]AllTask // 逻辑：自动任务（不会全部出现在任务选择列表中）
        - [folder]configs // 原始配置
        - [folder]utils // 使用的工具的Python调用
    + tools // 被调用的adb以及库的静态资源包，注意这些资源不在github里面
        - [folder]adb
        - [folder]nicegui
        - [folder]pponnxcr
        - [folder]aria2
    BAAH.py // 执行某一个用户配置的任务文件
    jsoneditor.py // webui的入口文件
    main.py // 为主程序的入口文件
    package.py // 打包脚本
    requirements.txt // 依赖列表
</LiteTree>

