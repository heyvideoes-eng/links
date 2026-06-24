import json

descriptions = {
    "ChatGPT": "The most popular AI chatbot by OpenAI, capable of answering questions, writing essays, and more.",
    "Gemini": "Google's advanced AI model for text, code, and multimodal tasks.",
    "Claude": "Anthropic's helpful, harmless, and honest AI assistant.",
    "Perplexity": "An AI-powered search engine that provides cited answers to your questions.",
    "Midjourney": "Generate high-quality, artistic AI images from text prompts.",
    "DALL-E 3": "OpenAI's latest image generation model integrated directly into ChatGPT.",
    "Stable Diffusion": "Open-source AI image generation model with incredible flexibility.",
    "Runway": "Advanced suite of AI tools for video editing, generation, and VFX.",
    "Pika Labs": "An AI video generation platform that brings your text to life.",
    "Sora": "OpenAI's groundbreaking text-to-video generation model.",
    "ElevenLabs": "The most realistic AI voice generator and text-to-speech software.",
    "Suno": "Create incredible, full-length songs with AI using simple text prompts.",
    "GitHub Copilot": "Your AI pair programmer that suggests code snippets directly in your editor.",
    "Cursor": "The AI-first code editor built to make you instantly more productive.",
    "Notion AI": "Write better, think faster, and organize everything in your Notion workspace.",
    "Grammarly": "AI-powered typing assistant to improve writing, tone, and grammar.",
    "Jasper": "AI copilot for enterprise marketing teams to create branded content.",
    "Canva Magic Studio": "A suite of AI design tools built right into Canva.",
    "Figma AI": "AI-powered features inside Figma to speed up the design process.",
    "Phind": "The AI search engine tailored specifically for developers."
}

category_desc = {
    "Chatbots": "Conversational AI assistant to help answer questions and automate tasks.",
    "Image": "AI-powered image generation and editing platform.",
    "Video": "Create, edit, and enhance professional videos using AI.",
    "Audio": "AI voice generation, text-to-speech, and music creation tool.",
    "Coding": "AI coding assistant to help write, debug, and understand code faster.",
    "Productivity": "AI-powered workspace tool designed to streamline your daily workflows.",
    "Design": "AI design tool to generate stunning UI, graphics, and visual assets.",
    "Marketing": "AI copywriting and marketing assistant to scale your content strategy.",
    "Research": "AI search engine and research assistant for accurate information gathering."
}

def main():
    with open("data.js", "r", encoding="utf-8") as f:
        content = f.read()
        
    json_str = content.replace("const bookmarksData = ", "").strip().rstrip(";")
    bookmarks = json.loads(json_str)

    for b in bookmarks:
        if b["title"] in descriptions:
            b["description"] = descriptions[b["title"]]
        else:
            b["description"] = category_desc.get(b.get("category", "Productivity"), "Powerful AI tool to boost your workflow.")

    with open("data.js", "w", encoding="utf-8") as f:
        f.write("const bookmarksData = " + json.dumps(bookmarks, indent=2) + ";\n")
        
    print("Added descriptions to data.js")

if __name__ == "__main__":
    main()
