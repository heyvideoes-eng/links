import re
import json
from bs4 import BeautifulSoup

def parse_html():
    try:
        with open(r"C:\Users\vansh\.gemini\antigravity-ide\brain\2e337789-9bd8-4952-8655-604a4893708c\.system_generated\steps\42\content.md", "r", encoding="utf-8") as f:
            content = f.read()
    except FileNotFoundError:
        print("File not found")
        return
        
    soup = BeautifulSoup(content, 'html.parser')
    
    tools = []
    # In theresanaiforthat, tools are often in <li> or <div> elements with class 'li'
    items = soup.select('li.li, div.li')
    
    for item in items:
        a_tag = item.select_first('a.tool_link, a.tool_name, a.name')
        if not a_tag:
            a_tag = item.select_first('a')
            
        if not a_tag:
            continue
            
        title = a_tag.text.strip()
        url = a_tag.get('href')
        
        # Categories are usually in tags
        categories = []
        tags = item.select('.tool_tags a, .tags a, .category')
        for tag in tags:
            cat = tag.text.strip()
            if cat and cat not in categories:
                categories.append(cat)
                
        # Description
        desc_tag = item.select_first('.tool_desc, .description')
        desc = desc_tag.text.strip() if desc_tag else ""
        
        if url and not url.startswith('javascript'):
            if url.startswith('/'):
                url = 'https://theresanaiforthat.com' + url
            tools.append({
                "title": title,
                "url": url,
                "categories": categories,
                "description": desc
            })
            
        if len(tools) >= 200:
            break
            
    print(f"Extracted {len(tools)} tools")
    if tools:
        print("Sample:", json.dumps(tools[0], indent=2))
        
    with open("extracted_tools.json", "w", encoding="utf-8") as f:
        json.dump(tools, f, indent=2)

if __name__ == "__main__":
    parse_html()
