<LanguageWarn/>

# File Structure & Description

<LiteTree>
Project Directory
    + [folder]BAAH_CONFIGS // User-configured tasks to be executed
    + DATA // Various static resources required for this project and multilingual support
        - [folder]assets // Global server resources (Traditional Chinese) and resource semantic files
        - [folder]assets_cn // CN server and Bilibili Server resources
        - [folder]assets_global_en // Global server resources (English)
        - [folder]assets_jp // JP server resources
        - [folder]grid_solution // Auto-mapping data
        - [folder]i18n // Internationalization data
    + [folder]docs // Old documents (archived)
    + gui // WebUI related
        - [folder]components // Reusable components
        - [folder]pages // Sub-pages within secondary pages (single configuration file edit page)
        + refactor_pages // Route pages
            - home.py // Primary page (homepage)
            - json_set_panel.py // Secondary page (single configuration file edit page)
        - define.py // Define GUI global shared config variables and JS injection
    + modules // Main modules
        - [folder]AllPage // Page-level positioning (deprecated)
        - [folder]AllTask // Primary tasks
        + configs // Configuration file management module
            - defaultSettings.py // Default parameters for configuration files
            - MyConfig.py // Define configuration file class
            - settingMaps.py // Mapping relationships between parameters
        - [folder]utils // Tools or auxiliary methods used
    + tools // Static resources for called adb and libraries; note that these resources are not in GitHub
        - [folder]adb
        - [folder]aria2
    BAAH.py // Execute a user-configured task file, encapsulated as a method
    jsoneditor.py // Entry file for WebUI, including command-line argument parsing
    main.py // Entry file for the main program, including command-line argument parsing
    package.py // Package script as executable file
    requirements.txt // Dependency list
</LiteTree>