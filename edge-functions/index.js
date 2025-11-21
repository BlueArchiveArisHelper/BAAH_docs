
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
        const acceptLanguage = context.request.headers.get('accept-language') || ''
        const browserLanguage = getBrowserLanguage(acceptLanguage)
        
        // 根据语言返回简单的文本信息
        const messages = {
            'en': 'Redirecting to English version...',
            'zh': '正在跳转到中文版本...'
        }
        
        return new Response(messages[browserLanguage.code], {
            headers: {
                'Content-Type': 'text/plain; charset=utf-8'
            }
        });
    } catch (error) {
        // 错误处理：返回默认语言信息
        return new Response('Redirecting to English version...', {
            headers: {
                'Content-Type': 'text/plain; charset=utf-8'
            }
        });
    }
}







