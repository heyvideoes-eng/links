import json
import re

html_content = open("bookmarks.html", "r", encoding="utf-8").read()

pattern = r'<A HREF="(.*?)"[^>]*>(.*?)</A>'
matches = re.findall(pattern, html_content)

bookmarks = [{"url": m[0], "title": m[1]} for m in matches]

with open("data.js", "w", encoding="utf-8") as f:
    f.write("const bookmarksData = " + json.dumps(bookmarks, indent=2) + ";\n")
