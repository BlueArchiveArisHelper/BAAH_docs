import os
from bs4 import BeautifulSoup
from urllib.parse import urljoin
from xml.etree.ElementTree import Element, SubElement, tostring, ElementTree
from xml.dom.minidom import parseString

def fetch_links_from_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        html = file.read()
        soup = BeautifulSoup(html, 'html.parser')
        links = [a['href'] for a in soup.find_all('a', href=True)]
        return links

def generate_sitemap(base_url, urls):
    urlset = Element('urlset', {'xmlns': 'http://www.sitemaps.org/schemas/sitemap/0.9'})
    
    for url in urls:
        url_element = SubElement(urlset, 'url')
        loc_element = SubElement(url_element, 'loc')
        loc_element.text = urljoin(base_url, url)
    
    sitemap_xml = tostring(urlset, 'utf-8')
    pretty_xml = parseString(sitemap_xml).toprettyxml(indent="  ")
    return pretty_xml
    
def get_all_html_files(folder):
    html_files = []
    for root, dirs, files in os.walk(folder):
        for file in files:
            if file.endswith('.html'):
                html_files.append(os.path.join(root, file))
    return html_files

def get_relative_path(file_path, base_folder):
    if not file_path:
        return ''
    return os.path.relpath(file_path, base_folder)

# 示例用法
base_folder = 'dist'  # 替换为你的本地文件夹路径
base_url = 'file://' + base_folder

# 获取所有HTML文件
html_files = get_all_html_files(base_folder)

# 获取所有链接
all_links = []
for html_file in html_files:
    links = fetch_links_from_file(html_file)
    relative_links = [get_relative_path(link, base_folder) for link in links if link]
    all_links.extend(relative_links)

# 生成站点地图
pretty_xml = generate_sitemap(base_url, all_links)

pretty_xml = pretty_xml.replace('<?xml version="1.0" ?>', '<?xml version="1.0" encoding="UTF-8"?>')
pretty_xml = pretty_xml.replace('file://dist/', 'https://baah.sanmusen.top/')

# 保存站点地图到文件
with open('dist/sitemap.xml', 'w', encoding='utf-8') as file:
    file.write(pretty_xml)