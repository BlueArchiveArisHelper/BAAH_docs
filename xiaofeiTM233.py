import urllib.request
import json

# 从小飞RAN的API获取下载链接

data = urllib.request.urlopen('https://baah.02000721.xyz').read()
data = json.loads(data)

url = data['assets'][0]['browser_download_url']
url = url.replace('https://github.com/sanmusen214/BAAH/releases/', 'https://baah.02000721.xyz/')

# 替换文件内容

with open('src/download.md', mode='r+t', encoding='utf-8') as f:
    text = f.read()
    text = text.replace('###xiaofeiRAN-download-url###', url)

with open('src/download.md', mode='wt', encoding='utf-8') as f:
    f.write(text)
    