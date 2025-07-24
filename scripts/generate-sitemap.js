const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');
// 忽略关键字
const ignoreKeywords = ['.js', '.woff2', '.css', '.json', '.png', '.svg','.xml'];

// 递归遍历目录
function walkDir(dir, fileList = []) {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            walkDir(filePath, fileList);
        } else {
            fileList.push(filePath);
        }
    });

    return fileList;
}

// 生成XML格式的站点地图
function generateSitemap(distDir) {
    const fileList = walkDir(distDir);
    let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
    sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

    fileList.forEach(file => {
        // 将dist目录路径替换为空，以便生成相对路径
        const relativePath = path.relative(distDir, file);

        // 检查是否包含忽略关键字
        const shouldIgnore = ignoreKeywords.some(keyword => relativePath.includes(keyword));

        if (!shouldIgnore) {
            sitemap += `\t<url>\n\t\t<loc>https://baah.sanmusen.top/${relativePath}</loc>\n`;

            // 如果文件是HTML文件，则提取锚点
            if (path.extname(file) === '.html') {
                const htmlContent = fs.readFileSync(file, 'utf-8');
                const $ = cheerio.load(htmlContent);

                $('a').each((index, element) => {
                    const href = $(element).attr('href');
                    if (href && href.startsWith('#')) {
                        sitemap += `\t\t<loc>https://baah.sanmusen.top/${relativePath}${href}</loc>\n`;
                    }
                });
            }

            sitemap += `\t</url>\n`;
        }
    });



    sitemap += '</urlset>';

    // 将站点地图写入dist目录
    fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemap);
}

// 使用dist目录作为参数调用函数
generateSitemap(path.join(__dirname, '../dist'));
