# BAAH网站仓库

## 文件结构

```
/.vitepress --> VitePress相关文件
/.vitepress/config.mjs --> VitePress配置文件
/src/public/img --> 分门别类存储图片
/src/docs --> 赛文档的地方
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