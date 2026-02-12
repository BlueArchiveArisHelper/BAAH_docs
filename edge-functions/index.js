
const supportedLanguages = [
    { code: 'en', name: 'English', path: '/en_US' },
    { code: 'zh', name: '中文', path: '/zh_CN' },
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
        const acceptLanguage = context.request.headers.get('accept-language') || ''
        const browserLanguage = getBrowserLanguage(acceptLanguage)
        
        // 解析URL获取target参数
        const url = new URL(context.request.url)
        const target = url.searchParams.get('target') || '/'
        
        // 构建重定向路径
        const redirectPath = target ? `${browserLanguage.path}${target}` : browserLanguage.path

        // 返回重定向响应
        return Response.redirect(redirectPath, 302)
    } catch (error) {
        // 错误处理：重定向到默认语言（中文）
        return Response.redirect(supportedLanguages[1].path, 302)
    }
}

