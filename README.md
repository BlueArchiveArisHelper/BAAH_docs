# BAAH网站仓库

此分支正在进行多语言测试

## 文件结构

```
/.vitepress --> VitePress相关文件
/.vitepress/config.mjs --> VitePress配置文件
/.vitepress/config --> 多语言配置文件
/.vitepress/navbar --> 多语言导航栏
/.vitepress/sideber --> 多语言侧边栏

/src/public/img --> 分门别类存储图片

/src/zh_CN --> 中文文档
/src/docs --> 赛文档的地方
/src/download.md --> 下载页
/src/index.md --> 主页

/src/en_US --> English site
/src/en_US/docs --> English docs
/src/en_US/download.md --> English download page
/src/en_US/index.md --> English home page

/scripts/ --> 后处理脚本位置
```

## 编写

图片调用

首先，在 `/src/public/img` 中，创建对应的文件夹，将图片放入

然后，通过下列方式调用

``` markdown
![说明](/img/文档名/xxx.png)
```

## SEO格式

---
title: 标题
subtitle: 小标题
description: 描述
---