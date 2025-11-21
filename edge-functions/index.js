
const supportedLanguages = [
    { code: 'en', name: 'English', path: '/en_US/' },
    { code: 'zh', name: '中文', path: '/zh_CN/' },
]

// 获取浏览器语言偏好
function getBrowserLanguage(acceptLanguage) {
    // 解析 Accept-Language 头
    const languages = acceptLanguage.split(',').map(lang => {
        const [code, quality = '1'] = lang.trim().split(';q=')
        return {
            code: code.split('-')[0], // 只取主语言代码
            quality: parseFloat(quality)
        }
    })

    // 按质量值排序
    languages.sort((a, b) => b.quality - a.quality)

    // 查找第一个匹配的支持的语言
    for (const lang of languages) {
        const supported = supportedLanguages.find(s => s.code === lang.code)
        if (supported) {
            return supported
        }
    }

    // 如果没有匹配的语言，返回默认语言（英文）
    return supportedLanguages[0]
}

// EO 边缘函数主函数
export default async function onRequest(context) {
    try {
        // 获取请求URL中的参数，决定要获取哪个文件
        const url = new URL(context.request.url);
        const fileUrl = url.searchParams.get('url') || '/edge-func-res/redirect.html';

        // 在边缘函数中发起请求
        const response = await fetch(fileUrl);
        const html = await response.text();
        const acceptLanguage = context.request.headers.get('accept-language') || ''
        const browserLanguage = getBrowserLanguage(acceptLanguage)

        // 替换重定向保留字段
        const redirectHtml = html.replace(/{{redirect}}/g, browserLanguage.path)
        return new Response(redirectHtml, {
            headers: {
                'Content-Type': 'text/html'
            }
        });
    } catch (error) {
        // 错误处理：返回默认语言页面
        return Response.redirect(new URL(supportedLanguages[0].path, context.request.url), 302)
    }
}






