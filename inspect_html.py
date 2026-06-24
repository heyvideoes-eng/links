import json
from bs4 import BeautifulSoup
import re

with open(r"C:\Users\vansh\.gemini\antigravity-ide\brain\2e337789-9bd8-4952-8655-604a4893708c\.system_generated\steps\42\content.md", "r", encoding="utf-8") as f:
    html = f.read()

soup = BeautifulSoup(html, 'html.parser')
# Find elements that might be tools. Usually they have classes like 'li', 'item', 'tool'
# Let's just find all 'a' tags with an 'href' and see which ones look like tools.
# theresanaiforthat URLs for tools look like /ai/tool-name/
links = soup.find_all('a', href=re.compile(r'^/ai/'))

tools = []
for a in links[:10]:
    tools.append({
        'text': a.text.strip(),
        'href': a['href'],
        'parent_classes': a.parent.get('class', [])
    })

print(json.dumps(tools, indent=2))
