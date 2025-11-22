---
# SEO优化
title: BAAH 多平台下载指南
subtitle: Windows/macOS/Linux/安卓
description: 免费获取 BlueArchive Aris Helper 自动化脚本！Windows 推荐高速镜像下载，macOS 需源码部署，Linux 支持 Docker 一键运行，安卓详见外部教程。
---

# 下载BAAH

::: tip
你可以加入以下QQ群之一以获取最新版本更新通知

**禁言通知群2: 1056031857**

**禁言通知群1: 1029291081 （已满）**

**禁言通知群: 715586983（已满）**



你可以加入以下QQ群之一以咨询使用帮助

**问题解答群：985729020**

:::

<style>

.VPButton {
    display: inline-block;
    border: 1px solid transparent;
    text-align: center;
    font-weight: 600;
    white-space: nowrap;
    transition: color .25s, border-color .25s, background-color .25s;
    margin-right: 3px;
}

.VPButton:last-child {
    margin-right: 0;
}

.VPButton:active {
    transition: color .1s, border-color .1s, background-color .1s
}

.VPButton.medium {
    border-radius: 20px;
    padding: 0 20px;
    line-height: 38px;
    font-size: 14px;
}

.VPButton.big {
    border-radius: 24px;
    padding: 0 24px;
    line-height: 46px;
    font-size: 16px
}

.VPButton.brand {
    border-color: var(--vp-button-brand-border);
    color: var(--vp-button-brand-text);
    background-color: var(--vp-button-brand-bg);
    text-decoration: none
}

.VPButton.brand:hover {
    border-color: var(--vp-button-brand-hover-border);
    color: var(--vp-button-brand-hover-text);
    background-color: var(--vp-button-brand-hover-bg)
}

.VPButton.brand:active {
    border-color: var(--vp-button-brand-active-border);
    color: var(--vp-button-brand-active-text);
    background-color: var(--vp-button-brand-active-bg)
}

.VPButton.alt {
    border-color: var(--vp-button-alt-border);
    color: var(--vp-button-alt-text);
    background-color: var(--vp-button-alt-bg);
    text-decoration: none
}

.VPButton.alt:hover {
    border-color: var(--vp-button-alt-hover-border);
    color: var(--vp-button-alt-hover-text);
    background-color: var(--vp-button-alt-hover-bg)
}

.VPButton.alt:active {
    border-color: var(--vp-button-alt-active-border);
    color: var(--vp-button-alt-active-text);
    background-color: var(--vp-button-alt-active-bg)
}
</style>

<!-- 重构下载页 -->
## 针对您的操作系统

<script>
    fetch('https://api.github.com/repos/BlueArchiveArisHelper/BAAH/releases/latest')
        .then(response => response.json())
        .then(data => {
            document.getElementById('tag').textContent = data.tag_name;
            document.getElementById('body').innerHTML = data.body.replace(/\n/g, '<br>');
            
            // 根据操作系统显示对应的下载按钮
            const platform = navigator.platform.toLowerCase();
            const downloadDiv = document.getElementById('download');
            
            if (platform.includes('win')) {
                downloadDiv.innerHTML = `
                    <div class="download-buttons">
                        <a href="https://pan.quark.cn/s/319faf23496c" class="VPButton medium brand">夸克网盘下载</a>
                        <a href="https://mirrorchyan.com/zh/projects?rid=BAAH" class="VPButton medium alt">Mirror酱下载</a>
                        <a href="https://github.com/BlueArchiveArisHelper/BAAH/releases" class="VPButton medium alt">GitHub Release</a>
                    </div>
                `;
            } else if (platform.includes('mac')) {
                downloadDiv.innerHTML = `
                    <div class="download-buttons">
                        <a href="/zh_CN/docs/manual/source-code.md" class="VPButton medium brand">查看源码部署教程</a>
                    </div>
                `;
            } else if (platform.includes('linux')) {
                downloadDiv.innerHTML = `
                    <p>你的操作系统为Linux,可以使用下列部署方法</p>
                    <div class="download-buttons">
                        <a href="/zh_CN/docs/manual/quick-start" class="VPButton medium brand">Docker部署</a>
                        <a href="/zh_CN/docs/manual/source-code" class="VPButton medium alt">查看源码部署教程</a>
                    </div>
                `;
            } else if (platform.includes('android')) {
                downloadDiv.innerHTML = `
                    <div class="download-buttons">
                        <a href="https://bas.blockhaity.qzz.io?target=/2025/02/10/BAAH%E5%9C%A8%E9%80%86%E5%A4%A9%E7%8E%AF%E5%A2%83%E4%B8%8B%E7%9A%84%E8%BF%90%E8%A1%8C/" class="VPButton medium brand">查看Android部署教程</a>
                    </div>
                `;
            }
        })
        .catch(error => {
            console.error('获取版本信息失败:', error);
            document.getElementById('tag').textContent = '获取失败';
            document.getElementById('body').textContent = '获取失败';
        });
</script>

当前最新版本：<span id="tag"></span>

::: details 发布内容
<p id="body"></p>
:::

<div id="download"></div>

## 所有操作系统

:::: tabs

== Windows

<a href="https://pan.quark.cn/s/319faf23496c" class="VPButton medium brand">夸克网盘下载</a>
<a href="https://mirrorchyan.com/zh/projects?rid=BAAH" class="VPButton medium alt">Mirror酱下载(需要CDK)</a>
<a href="https://github.com/BlueArchiveArisHelper/BAAH/releases" class="VPButton medium alt">GitHub Release</a>
<a href="https://api.blockhaity.qzz.io/docs/#/api-doc/getbaah" class="VPButton medium alt">BlockHaity's API</a>

== MacOS

<a href="/zh_CN/docs/manual/source-code.md" class="VPButton medium brand">查看源码部署教程</a>

== Linux

<a href="/zh_CN/docs/manual/quick-start" class="VPButton medium brand">Docker部署</a>
<a href="/zh_CN/docs/manual/source-code" class="VPButton medium alt">查看源码部署教程</a>

== Android Termux

<a href="https://bas.blockhaity.qzz.io?target=/2025/02/10/BAAH%E5%9C%A8%E9%80%86%E5%A4%A9%E7%8E%AF%E5%A2%83%E4%B8%8B%E7%9A%84%E8%BF%90%E8%A1%8C/" class="VPButton medium brand">查看Android部署教程</a>

::::