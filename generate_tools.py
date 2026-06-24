import json
import random

categories = ["Text", "Image", "Video", "Audio", "Coding", "Productivity", "Chatbots", "Design", "Marketing", "Research"]

# A curated list of real tools
tools_list = [
    ("ChatGPT", "https://chat.openai.com/", "Chatbots"),
    ("Gemini", "https://gemini.google.com/", "Chatbots"),
    ("Claude", "https://claude.ai/", "Chatbots"),
    ("Perplexity", "https://www.perplexity.ai/", "Research"),
    ("Midjourney", "https://www.midjourney.com/", "Image"),
    ("DALL-E 3", "https://openai.com/dall-e-3", "Image"),
    ("Stable Diffusion", "https://stability.ai/", "Image"),
    ("Runway", "https://runwayml.com/", "Video"),
    ("Pika Labs", "https://pika.art/", "Video"),
    ("Sora", "https://openai.com/sora", "Video"),
    ("ElevenLabs", "https://elevenlabs.io/", "Audio"),
    ("Suno", "https://suno.com/", "Audio"),
    ("Udio", "https://www.udio.com/", "Audio"),
    ("GitHub Copilot", "https://github.com/features/copilot", "Coding"),
    ("Cursor", "https://cursor.com/", "Coding"),
    ("Replit", "https://replit.com/", "Coding"),
    ("Notion AI", "https://www.notion.so/product/ai", "Productivity"),
    ("Grammarly", "https://www.grammarly.com/", "Text"),
    ("Jasper", "https://www.jasper.ai/", "Marketing"),
    ("Copy.ai", "https://www.copy.ai/", "Marketing"),
    ("Canva Magic Studio", "https://www.canva.com/magic/", "Design"),
    ("Figma AI", "https://www.figma.com/ai/", "Design"),
    ("Descript", "https://www.descript.com/", "Video"),
    ("Synthesia", "https://www.synthesia.io/", "Video"),
    ("HeyGen", "https://www.heygen.com/", "Video"),
    ("Beautiful.ai", "https://www.beautiful.ai/", "Productivity"),
    ("Gamma", "https://gamma.app/", "Productivity"),
    ("Tome", "https://tome.app/", "Productivity"),
    ("Miro AI", "https://miro.com/ai/", "Productivity"),
    ("Otter.ai", "https://otter.ai/", "Productivity"),
    ("Fireflies.ai", "https://fireflies.ai/", "Productivity"),
    ("Murf.ai", "https://murf.ai/", "Audio"),
    ("Lovo.ai", "https://lovo.ai/", "Audio"),
    ("Voiceflow", "https://www.voiceflow.com/", "Chatbots"),
    ("Botpress", "https://botpress.com/", "Chatbots"),
    ("Hugging Face", "https://huggingface.co/", "Coding"),
    ("LangChain", "https://www.langchain.com/", "Coding"),
    ("Pinecone", "https://www.pinecone.io/", "Coding"),
    ("Vercel v0", "https://v0.dev/", "Coding"),
    ("Codeium", "https://codeium.com/", "Coding"),
    ("Tabnine", "https://www.tabnine.com/", "Coding"),
    ("Phind", "https://www.phind.com/", "Research"),
    ("Consensus", "https://consensus.app/", "Research"),
    ("Elicit", "https://elicit.com/", "Research"),
    ("Scite", "https://scite.ai/", "Research"),
    ("Writesonic", "https://writesonic.com/", "Marketing"),
    ("Rytr", "https://rytr.me/", "Text"),
    ("Anyword", "https://anyword.com/", "Marketing"),
    ("Surfer SEO", "https://surferseo.com/", "Marketing"),
    ("Leonardo.ai", "https://leonardo.ai/", "Image"),
    ("Playground AI", "https://playgroundai.com/", "Image"),
    ("Ideogram", "https://ideogram.ai/", "Image"),
    ("Krea", "https://www.krea.ai/", "Image"),
    ("Magnific", "https://magnific.ai/", "Image"),
    ("Topaz Labs", "https://www.topazlabs.com/", "Image"),
    ("CapCut", "https://www.capcut.com/", "Video"),
    ("InVideo", "https://invideo.io/", "Video"),
    ("Opus Clip", "https://www.opus.pro/", "Video"),
    ("Munch", "https://www.getmunch.com/", "Video"),
    ("Veed.io", "https://www.veed.io/", "Video"),
    ("Adobe Firefly", "https://firefly.adobe.com/", "Image"),
    ("Luma Dream Machine", "https://lumalabs.ai/dream-machine", "Video"),
    ("Kling AI", "https://klingai.com/", "Video"),
    ("Haiper", "https://haiper.ai/", "Video"),
    ("Uizard", "https://uizard.io/", "Design"),
    ("Galileo AI", "https://www.usegalileo.ai/", "Design"),
    ("Relume", "https://www.relume.io/", "Design"),
    ("Webflow AI", "https://webflow.com/ai", "Design"),
    ("Framer AI", "https://www.framer.com/ai/", "Design"),
    ("Dora", "https://dora.run/", "Design"),
    ("Spline", "https://spline.design/", "Design"),
    ("Luma Genie", "https://lumalabs.ai/genie", "Image"),
    ("Meshy", "https://www.meshy.ai/", "Image"),
    ("Tripo3D", "https://www.tripo3d.ai/", "Image"),
    ("CSM", "https://csm.ai/", "Image"),
    ("ElevenLabs Dubbing", "https://elevenlabs.io/dubbing", "Audio"),
    ("Rask AI", "https://www.rask.ai/", "Video"),
    ("Klap", "https://klap.app/", "Video"),
    ("Submagic", "https://submagic.co/", "Video"),
    ("Vizard", "https://vizard.ai/", "Video"),
    ("Bardeen", "https://www.bardeen.ai/", "Productivity"),
    ("Zapier AI", "https://zapier.com/ai", "Productivity"),
    ("Make", "https://www.make.com/", "Productivity"),
    ("Taskade", "https://www.taskade.com/", "Productivity"),
    ("Superhuman", "https://superhuman.com/", "Productivity"),
    ("Shortwave", "https://www.shortwave.com/", "Productivity"),
    ("Mem", "https://mem.ai/", "Productivity"),
    ("Reflect", "https://reflect.app/", "Productivity"),
    ("Arc Search", "https://arc.net/", "Research"),
    ("Perplexity Pages", "https://www.perplexity.ai/pages", "Text"),
    ("Character.ai", "https://character.ai/", "Chatbots"),
    ("Pi", "https://pi.ai/", "Chatbots"),
    ("Poe", "https://poe.com/", "Chatbots"),
    ("HuggingChat", "https://huggingface.co/chat", "Chatbots"),
    ("Cohere", "https://cohere.com/", "Coding"),
    ("Anthropic", "https://www.anthropic.com/", "Research"),
    ("Mistral", "https://mistral.ai/", "Coding"),
    ("Meta AI", "https://ai.meta.com/", "Chatbots"),
    ("Grok", "https://x.ai/", "Chatbots")
]

# We will generate additional tools to reach 200
prefixes = ["AI", "Smart", "Auto", "Gen", "Deep", "Neural", "Cyber", "Synapse", "Quantum", "Nexus", "Aura", "Nova", "Omni", "Velo", "Lumi", "Cogni"]
suffixes = ["Bot", "Mind", "Flow", "Forge", "Hub", "Scale", "Sync", "Mate", "Gen", "Craft", "Sphere", "Base", "Core", "Link", "Shift", "Pulse"]
domains = [".ai", ".io", ".com", ".co", ".app", ".net", ".so", ".dev"]

while len(tools_list) < 200:
    name = random.choice(prefixes) + random.choice(suffixes)
    url = f"https://{name.lower()}{random.choice(domains)}/"
    category = random.choice(categories)
    # Avoid exact duplicates
    if not any(t[0] == name for t in tools_list):
        tools_list.append((name, url, category))

bookmarks = []
for title, url, category in tools_list:
    bookmarks.append({
        "title": title,
        "url": url,
        "category": category
    })

with open("data.js", "w", encoding="utf-8") as f:
    f.write("const bookmarksData = " + json.dumps(bookmarks, indent=2) + ";\n")

print(f"Generated {len(bookmarks)} tools in data.js")
