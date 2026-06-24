const bookmarksData = [
  {
    "title": "ChatGPT",
    "url": "https://chat.openai.com/",
    "category": "Chatbots",
    "description": "The most popular AI chatbot by OpenAI, capable of answering questions, writing essays, and more."
  },
  {
    "title": "Gemini",
    "url": "https://gemini.google.com/",
    "category": "Chatbots",
    "description": "Google's advanced AI model for text, code, and multimodal tasks."
  },
  {
    "title": "Claude",
    "url": "https://claude.ai/",
    "category": "Chatbots",
    "description": "Anthropic's helpful, harmless, and honest AI assistant."
  },
  {
    "title": "Perplexity",
    "url": "https://www.perplexity.ai/",
    "category": "Chatbots",
    "description": "An AI-powered search engine that provides cited answers to your questions."
  },
  {
    "title": "Character.ai",
    "url": "https://character.ai/",
    "category": "Chatbots",
    "description": "Conversational AI assistant to help answer questions and automate tasks."
  },
  {
    "title": "Pi",
    "url": "https://pi.ai/",
    "category": "Chatbots",
    "description": "Conversational AI assistant to help answer questions and automate tasks."
  },
  {
    "title": "Poe",
    "url": "https://poe.com/",
    "category": "Chatbots",
    "description": "Conversational AI assistant to help answer questions and automate tasks."
  },
  {
    "title": "HuggingChat",
    "url": "https://huggingface.co/chat",
    "category": "Chatbots",
    "description": "Conversational AI assistant to help answer questions and automate tasks."
  },
  {
    "title": "Meta AI",
    "url": "https://ai.meta.com/",
    "category": "Chatbots",
    "description": "Conversational AI assistant to help answer questions and automate tasks."
  },
  {
    "title": "Grok",
    "url": "https://x.ai/",
    "category": "Chatbots",
    "description": "Conversational AI assistant to help answer questions and automate tasks."
  },
  {
    "title": "You.com",
    "url": "https://you.com/",
    "category": "Chatbots",
    "description": "Conversational AI assistant to help answer questions and automate tasks."
  },
  {
    "title": "Kuki",
    "url": "https://www.kuki.ai/",
    "category": "Chatbots",
    "description": "Conversational AI assistant to help answer questions and automate tasks."
  },
  {
    "title": "Replika",
    "url": "https://replika.com/",
    "category": "Chatbots",
    "description": "Conversational AI assistant to help answer questions and automate tasks."
  },
  {
    "title": "Chai",
    "url": "https://chai-research.com/",
    "category": "Chatbots",
    "description": "Conversational AI assistant to help answer questions and automate tasks."
  },
  {
    "title": "DeepSeek",
    "url": "https://chat.deepseek.com/",
    "category": "Chatbots",
    "description": "Conversational AI assistant to help answer questions and automate tasks."
  },
  {
    "title": "Janitor AI",
    "url": "https://janitorai.com/",
    "category": "Chatbots",
    "description": "Conversational AI assistant to help answer questions and automate tasks."
  },
  {
    "title": "ChatPDF",
    "url": "https://www.chatpdf.com/",
    "category": "Chatbots",
    "description": "Conversational AI assistant to help answer questions and automate tasks."
  },
  {
    "title": "Chatsonic",
    "url": "https://writesonic.com/chat",
    "category": "Chatbots",
    "description": "Conversational AI assistant to help answer questions and automate tasks."
  },
  {
    "title": "Bing Chat",
    "url": "https://www.bing.com/chat",
    "category": "Chatbots",
    "description": "Conversational AI assistant to help answer questions and automate tasks."
  },
  {
    "title": "Andi",
    "url": "https://andisearch.com/",
    "category": "Chatbots",
    "description": "Conversational AI assistant to help answer questions and automate tasks."
  },
  {
    "title": "Midjourney",
    "url": "https://www.midjourney.com/",
    "category": "Image",
    "description": "Generate high-quality, artistic AI images from text prompts."
  },
  {
    "title": "DALL-E 3",
    "url": "https://openai.com/dall-e-3",
    "category": "Image",
    "description": "OpenAI's latest image generation model integrated directly into ChatGPT."
  },
  {
    "title": "Stable Diffusion",
    "url": "https://stability.ai/",
    "category": "Image",
    "description": "Open-source AI image generation model with incredible flexibility."
  },
  {
    "title": "Leonardo.ai",
    "url": "https://leonardo.ai/",
    "category": "Image",
    "description": "AI-powered image generation and editing platform."
  },
  {
    "title": "Playground AI",
    "url": "https://playgroundai.com/",
    "category": "Image",
    "description": "AI-powered image generation and editing platform."
  },
  {
    "title": "Ideogram",
    "url": "https://ideogram.ai/",
    "category": "Image",
    "description": "AI-powered image generation and editing platform."
  },
  {
    "title": "Krea",
    "url": "https://www.krea.ai/",
    "category": "Image",
    "description": "AI-powered image generation and editing platform."
  },
  {
    "title": "Magnific",
    "url": "https://magnific.ai/",
    "category": "Image",
    "description": "AI-powered image generation and editing platform."
  },
  {
    "title": "Topaz Labs",
    "url": "https://www.topazlabs.com/",
    "category": "Image",
    "description": "AI-powered image generation and editing platform."
  },
  {
    "title": "Adobe Firefly",
    "url": "https://firefly.adobe.com/",
    "category": "Image",
    "description": "AI-powered image generation and editing platform."
  },
  {
    "title": "Luma Genie",
    "url": "https://lumalabs.ai/genie",
    "category": "Image",
    "description": "AI-powered image generation and editing platform."
  },
  {
    "title": "Meshy",
    "url": "https://www.meshy.ai/",
    "category": "Image",
    "description": "AI-powered image generation and editing platform."
  },
  {
    "title": "Tripo3D",
    "url": "https://www.tripo3d.ai/",
    "category": "Image",
    "description": "AI-powered image generation and editing platform."
  },
  {
    "title": "CSM",
    "url": "https://csm.ai/",
    "category": "Image",
    "description": "AI-powered image generation and editing platform."
  },
  {
    "title": "Lexica",
    "url": "https://lexica.art/",
    "category": "Image",
    "description": "AI-powered image generation and editing platform."
  },
  {
    "title": "Civitai",
    "url": "https://civitai.com/",
    "category": "Image",
    "description": "AI-powered image generation and editing platform."
  },
  {
    "title": "NightCafe",
    "url": "https://creator.nightcafe.studio/",
    "category": "Image",
    "description": "AI-powered image generation and editing platform."
  },
  {
    "title": "Artbreeder",
    "url": "https://www.artbreeder.com/",
    "category": "Image",
    "description": "AI-powered image generation and editing platform."
  },
  {
    "title": "SeaArt",
    "url": "https://seaart.ai/",
    "category": "Image",
    "description": "AI-powered image generation and editing platform."
  },
  {
    "title": "Recraft",
    "url": "https://www.recraft.ai/",
    "category": "Image",
    "description": "AI-powered image generation and editing platform."
  },
  {
    "title": "Stockimg.ai",
    "url": "https://stockimg.ai/",
    "category": "Image",
    "description": "AI-powered image generation and editing platform."
  },
  {
    "title": "Pebblely",
    "url": "https://pebblely.com/",
    "category": "Image",
    "description": "AI-powered image generation and editing platform."
  },
  {
    "title": "Photoroom",
    "url": "https://www.photoroom.com/",
    "category": "Image",
    "description": "AI-powered image generation and editing platform."
  },
  {
    "title": "Clipdrop",
    "url": "https://clipdrop.co/",
    "category": "Image",
    "description": "AI-powered image generation and editing platform."
  },
  {
    "title": "Craiyon",
    "url": "https://www.craiyon.com/",
    "category": "Image",
    "description": "AI-powered image generation and editing platform."
  },
  {
    "title": "Cutout.pro",
    "url": "https://www.cutout.pro/",
    "category": "Image",
    "description": "AI-powered image generation and editing platform."
  },
  {
    "title": "Kaiber",
    "url": "https://kaiber.ai/",
    "category": "Image",
    "description": "AI-powered image generation and editing platform."
  },
  {
    "title": "Tengr.ai",
    "url": "https://tengr.ai/",
    "category": "Image",
    "description": "AI-powered image generation and editing platform."
  },
  {
    "title": "DeepAI",
    "url": "https://deepai.org/",
    "category": "Image",
    "description": "AI-powered image generation and editing platform."
  },
  {
    "title": "Dezgo",
    "url": "https://dezgo.com/",
    "category": "Image",
    "description": "AI-powered image generation and editing platform."
  },
  {
    "title": "Runway",
    "url": "https://runwayml.com/",
    "category": "Video",
    "description": "Advanced suite of AI tools for video editing, generation, and VFX."
  },
  {
    "title": "Pika Labs",
    "url": "https://pika.art/",
    "category": "Video",
    "description": "An AI video generation platform that brings your text to life."
  },
  {
    "title": "Sora",
    "url": "https://openai.com/sora",
    "category": "Video",
    "description": "OpenAI's groundbreaking text-to-video generation model."
  },
  {
    "title": "Descript",
    "url": "https://www.descript.com/",
    "category": "Video",
    "description": "Create, edit, and enhance professional videos using AI."
  },
  {
    "title": "Synthesia",
    "url": "https://www.synthesia.io/",
    "category": "Video",
    "description": "Create, edit, and enhance professional videos using AI."
  },
  {
    "title": "HeyGen",
    "url": "https://www.heygen.com/",
    "category": "Video",
    "description": "Create, edit, and enhance professional videos using AI."
  },
  {
    "title": "CapCut",
    "url": "https://www.capcut.com/",
    "category": "Video",
    "description": "Create, edit, and enhance professional videos using AI."
  },
  {
    "title": "InVideo",
    "url": "https://invideo.io/",
    "category": "Video",
    "description": "Create, edit, and enhance professional videos using AI."
  },
  {
    "title": "Opus Clip",
    "url": "https://www.opus.pro/",
    "category": "Video",
    "description": "Create, edit, and enhance professional videos using AI."
  },
  {
    "title": "Munch",
    "url": "https://www.getmunch.com/",
    "category": "Video",
    "description": "Create, edit, and enhance professional videos using AI."
  },
  {
    "title": "Veed.io",
    "url": "https://www.veed.io/",
    "category": "Video",
    "description": "Create, edit, and enhance professional videos using AI."
  },
  {
    "title": "Luma Dream Machine",
    "url": "https://lumalabs.ai/dream-machine",
    "category": "Video",
    "description": "Create, edit, and enhance professional videos using AI."
  },
  {
    "title": "Kling AI",
    "url": "https://klingai.com/",
    "category": "Video",
    "description": "Create, edit, and enhance professional videos using AI."
  },
  {
    "title": "Haiper",
    "url": "https://haiper.ai/",
    "category": "Video",
    "description": "Create, edit, and enhance professional videos using AI."
  },
  {
    "title": "Rask AI",
    "url": "https://www.rask.ai/",
    "category": "Video",
    "description": "Create, edit, and enhance professional videos using AI."
  },
  {
    "title": "Klap",
    "url": "https://klap.app/",
    "category": "Video",
    "description": "Create, edit, and enhance professional videos using AI."
  },
  {
    "title": "Submagic",
    "url": "https://submagic.co/",
    "category": "Video",
    "description": "Create, edit, and enhance professional videos using AI."
  },
  {
    "title": "Vizard",
    "url": "https://vizard.ai/",
    "category": "Video",
    "description": "Create, edit, and enhance professional videos using AI."
  },
  {
    "title": "Fliki",
    "url": "https://fliki.ai/",
    "category": "Video",
    "description": "Create, edit, and enhance professional videos using AI."
  },
  {
    "title": "Pictory",
    "url": "https://pictory.ai/",
    "category": "Video",
    "description": "Create, edit, and enhance professional videos using AI."
  },
  {
    "title": "D-ID",
    "url": "https://www.d-id.com/",
    "category": "Video",
    "description": "Create, edit, and enhance professional videos using AI."
  },
  {
    "title": "Colossyan",
    "url": "https://www.colossyan.com/",
    "category": "Video",
    "description": "Create, edit, and enhance professional videos using AI."
  },
  {
    "title": "Elai.io",
    "url": "https://elai.io/",
    "category": "Video",
    "description": "Create, edit, and enhance professional videos using AI."
  },
  {
    "title": "Hour One",
    "url": "https://hourone.ai/",
    "category": "Video",
    "description": "Create, edit, and enhance professional videos using AI."
  },
  {
    "title": "Wonder Studio",
    "url": "https://wonderdynamics.com/",
    "category": "Video",
    "description": "Create, edit, and enhance professional videos using AI."
  },
  {
    "title": "GliaCloud",
    "url": "https://www.gliacloud.com/",
    "category": "Video",
    "description": "Create, edit, and enhance professional videos using AI."
  },
  {
    "title": "Wisecut",
    "url": "https://www.wisecut.video/",
    "category": "Video",
    "description": "Create, edit, and enhance professional videos using AI."
  },
  {
    "title": "Gling",
    "url": "https://gling.ai/",
    "category": "Video",
    "description": "Create, edit, and enhance professional videos using AI."
  },
  {
    "title": "Vidyo.ai",
    "url": "https://vidyo.ai/",
    "category": "Video",
    "description": "Create, edit, and enhance professional videos using AI."
  },
  {
    "title": "Maja",
    "url": "https://maja.ai/",
    "category": "Video",
    "description": "Create, edit, and enhance professional videos using AI."
  },
  {
    "title": "ElevenLabs",
    "url": "https://elevenlabs.io/",
    "category": "Audio",
    "description": "The most realistic AI voice generator and text-to-speech software."
  },
  {
    "title": "Suno",
    "url": "https://suno.com/",
    "category": "Audio",
    "description": "Create incredible, full-length songs with AI using simple text prompts."
  },
  {
    "title": "Udio",
    "url": "https://www.udio.com/",
    "category": "Audio",
    "description": "AI voice generation, text-to-speech, and music creation tool."
  },
  {
    "title": "Murf.ai",
    "url": "https://murf.ai/",
    "category": "Audio",
    "description": "AI voice generation, text-to-speech, and music creation tool."
  },
  {
    "title": "Lovo.ai",
    "url": "https://lovo.ai/",
    "category": "Audio",
    "description": "AI voice generation, text-to-speech, and music creation tool."
  },
  {
    "title": "ElevenLabs Dubbing",
    "url": "https://elevenlabs.io/dubbing",
    "category": "Audio",
    "description": "AI voice generation, text-to-speech, and music creation tool."
  },
  {
    "title": "WellSaid Labs",
    "url": "https://wellsaidlabs.com/",
    "category": "Audio",
    "description": "AI voice generation, text-to-speech, and music creation tool."
  },
  {
    "title": "Play.ht",
    "url": "https://play.ht/",
    "category": "Audio",
    "description": "AI voice generation, text-to-speech, and music creation tool."
  },
  {
    "title": "Resemble AI",
    "url": "https://www.resemble.ai/",
    "category": "Audio",
    "description": "AI voice generation, text-to-speech, and music creation tool."
  },
  {
    "title": "Altered",
    "url": "https://www.altered.ai/",
    "category": "Audio",
    "description": "AI voice generation, text-to-speech, and music creation tool."
  },
  {
    "title": "Voiceify",
    "url": "https://voiceify.ai/",
    "category": "Audio",
    "description": "AI voice generation, text-to-speech, and music creation tool."
  },
  {
    "title": "Soundraw",
    "url": "https://soundraw.io/",
    "category": "Audio",
    "description": "AI voice generation, text-to-speech, and music creation tool."
  },
  {
    "title": "Mubert",
    "url": "https://mubert.com/",
    "category": "Audio",
    "description": "AI voice generation, text-to-speech, and music creation tool."
  },
  {
    "title": "Boomy",
    "url": "https://boomy.com/",
    "category": "Audio",
    "description": "AI voice generation, text-to-speech, and music creation tool."
  },
  {
    "title": "AIVA",
    "url": "https://www.aiva.ai/",
    "category": "Audio",
    "description": "AI voice generation, text-to-speech, and music creation tool."
  },
  {
    "title": "Splash",
    "url": "https://www.splashmusic.com/",
    "category": "Audio",
    "description": "AI voice generation, text-to-speech, and music creation tool."
  },
  {
    "title": "Beatoven.ai",
    "url": "https://www.beatoven.ai/",
    "category": "Audio",
    "description": "AI voice generation, text-to-speech, and music creation tool."
  },
  {
    "title": "Audiocraft",
    "url": "https://audiocraft.metademolab.com/",
    "category": "Audio",
    "description": "AI voice generation, text-to-speech, and music creation tool."
  },
  {
    "title": "Vocal Remover",
    "url": "https://vocalremover.org/",
    "category": "Audio",
    "description": "AI voice generation, text-to-speech, and music creation tool."
  },
  {
    "title": "LALAL.AI",
    "url": "https://www.lalal.ai/",
    "category": "Audio",
    "description": "AI voice generation, text-to-speech, and music creation tool."
  },
  {
    "title": "GitHub Copilot",
    "url": "https://github.com/features/copilot",
    "category": "Coding",
    "description": "Your AI pair programmer that suggests code snippets directly in your editor."
  },
  {
    "title": "Cursor",
    "url": "https://cursor.com/",
    "category": "Coding",
    "description": "The AI-first code editor built to make you instantly more productive."
  },
  {
    "title": "Replit",
    "url": "https://replit.com/",
    "category": "Coding",
    "description": "AI coding assistant to help write, debug, and understand code faster."
  },
  {
    "title": "Hugging Face",
    "url": "https://huggingface.co/",
    "category": "Coding",
    "description": "AI coding assistant to help write, debug, and understand code faster."
  },
  {
    "title": "LangChain",
    "url": "https://www.langchain.com/",
    "category": "Coding",
    "description": "AI coding assistant to help write, debug, and understand code faster."
  },
  {
    "title": "Pinecone",
    "url": "https://www.pinecone.io/",
    "category": "Coding",
    "description": "AI coding assistant to help write, debug, and understand code faster."
  },
  {
    "title": "Vercel v0",
    "url": "https://v0.dev/",
    "category": "Coding",
    "description": "AI coding assistant to help write, debug, and understand code faster."
  },
  {
    "title": "Codeium",
    "url": "https://codeium.com/",
    "category": "Coding",
    "description": "AI coding assistant to help write, debug, and understand code faster."
  },
  {
    "title": "Tabnine",
    "url": "https://www.tabnine.com/",
    "category": "Coding",
    "description": "AI coding assistant to help write, debug, and understand code faster."
  },
  {
    "title": "Cohere",
    "url": "https://cohere.com/",
    "category": "Coding",
    "description": "AI coding assistant to help write, debug, and understand code faster."
  },
  {
    "title": "Mistral",
    "url": "https://mistral.ai/",
    "category": "Coding",
    "description": "AI coding assistant to help write, debug, and understand code faster."
  },
  {
    "title": "CodiumAI",
    "url": "https://www.codium.ai/",
    "category": "Coding",
    "description": "AI coding assistant to help write, debug, and understand code faster."
  },
  {
    "title": "Blackbox AI",
    "url": "https://www.blackbox.ai/",
    "category": "Coding",
    "description": "AI coding assistant to help write, debug, and understand code faster."
  },
  {
    "title": "Sourcegraph Cody",
    "url": "https://about.sourcegraph.com/cody",
    "category": "Coding",
    "description": "AI coding assistant to help write, debug, and understand code faster."
  },
  {
    "title": "MutableAI",
    "url": "https://mutable.ai/",
    "category": "Coding",
    "description": "AI coding assistant to help write, debug, and understand code faster."
  },
  {
    "title": "Warp",
    "url": "https://www.warp.dev/",
    "category": "Coding",
    "description": "AI coding assistant to help write, debug, and understand code faster."
  },
  {
    "title": "Mintlify",
    "url": "https://mintlify.com/",
    "category": "Coding",
    "description": "AI coding assistant to help write, debug, and understand code faster."
  },
  {
    "title": "Qdrant",
    "url": "https://qdrant.tech/",
    "category": "Coding",
    "description": "AI coding assistant to help write, debug, and understand code faster."
  },
  {
    "title": "Weaviate",
    "url": "https://weaviate.io/",
    "category": "Coding",
    "description": "AI coding assistant to help write, debug, and understand code faster."
  },
  {
    "title": "Chroma",
    "url": "https://www.trychroma.com/",
    "category": "Coding",
    "description": "AI coding assistant to help write, debug, and understand code faster."
  },
  {
    "title": "LlamaIndex",
    "url": "https://www.llamaindex.ai/",
    "category": "Coding",
    "description": "AI coding assistant to help write, debug, and understand code faster."
  },
  {
    "title": "Supabase",
    "url": "https://supabase.com/",
    "category": "Coding",
    "description": "AI coding assistant to help write, debug, and understand code faster."
  },
  {
    "title": "Firebase Genkit",
    "url": "https://firebase.google.com/products/genkit",
    "category": "Coding",
    "description": "AI coding assistant to help write, debug, and understand code faster."
  },
  {
    "title": "Ollama",
    "url": "https://ollama.com/",
    "category": "Coding",
    "description": "AI coding assistant to help write, debug, and understand code faster."
  },
  {
    "title": "LM Studio",
    "url": "https://lmstudio.ai/",
    "category": "Coding",
    "description": "AI coding assistant to help write, debug, and understand code faster."
  },
  {
    "title": "Anyscale",
    "url": "https://www.anyscale.com/",
    "category": "Coding",
    "description": "AI coding assistant to help write, debug, and understand code faster."
  },
  {
    "title": "Together AI",
    "url": "https://www.together.ai/",
    "category": "Coding",
    "description": "AI coding assistant to help write, debug, and understand code faster."
  },
  {
    "title": "Fireworks AI",
    "url": "https://fireworks.ai/",
    "category": "Coding",
    "description": "AI coding assistant to help write, debug, and understand code faster."
  },
  {
    "title": "Groq",
    "url": "https://groq.com/",
    "category": "Coding",
    "description": "AI coding assistant to help write, debug, and understand code faster."
  },
  {
    "title": "Modal",
    "url": "https://modal.com/",
    "category": "Coding",
    "description": "AI coding assistant to help write, debug, and understand code faster."
  },
  {
    "title": "Notion AI",
    "url": "https://www.notion.so/product/ai",
    "category": "Productivity",
    "description": "Write better, think faster, and organize everything in your Notion workspace."
  },
  {
    "title": "Beautiful.ai",
    "url": "https://www.beautiful.ai/",
    "category": "Productivity",
    "description": "AI-powered workspace tool designed to streamline your daily workflows."
  },
  {
    "title": "Gamma",
    "url": "https://gamma.app/",
    "category": "Productivity",
    "description": "AI-powered workspace tool designed to streamline your daily workflows."
  },
  {
    "title": "Tome",
    "url": "https://tome.app/",
    "category": "Productivity",
    "description": "AI-powered workspace tool designed to streamline your daily workflows."
  },
  {
    "title": "Miro AI",
    "url": "https://miro.com/ai/",
    "category": "Productivity",
    "description": "AI-powered workspace tool designed to streamline your daily workflows."
  },
  {
    "title": "Otter.ai",
    "url": "https://otter.ai/",
    "category": "Productivity",
    "description": "AI-powered workspace tool designed to streamline your daily workflows."
  },
  {
    "title": "Fireflies.ai",
    "url": "https://fireflies.ai/",
    "category": "Productivity",
    "description": "AI-powered workspace tool designed to streamline your daily workflows."
  },
  {
    "title": "Bardeen",
    "url": "https://www.bardeen.ai/",
    "category": "Productivity",
    "description": "AI-powered workspace tool designed to streamline your daily workflows."
  },
  {
    "title": "Zapier AI",
    "url": "https://zapier.com/ai",
    "category": "Productivity",
    "description": "AI-powered workspace tool designed to streamline your daily workflows."
  },
  {
    "title": "Make",
    "url": "https://www.make.com/",
    "category": "Productivity",
    "description": "AI-powered workspace tool designed to streamline your daily workflows."
  },
  {
    "title": "Taskade",
    "url": "https://www.taskade.com/",
    "category": "Productivity",
    "description": "AI-powered workspace tool designed to streamline your daily workflows."
  },
  {
    "title": "Superhuman",
    "url": "https://superhuman.com/",
    "category": "Productivity",
    "description": "AI-powered workspace tool designed to streamline your daily workflows."
  },
  {
    "title": "Shortwave",
    "url": "https://www.shortwave.com/",
    "category": "Productivity",
    "description": "AI-powered workspace tool designed to streamline your daily workflows."
  },
  {
    "title": "Mem",
    "url": "https://mem.ai/",
    "category": "Productivity",
    "description": "AI-powered workspace tool designed to streamline your daily workflows."
  },
  {
    "title": "Reflect",
    "url": "https://reflect.app/",
    "category": "Productivity",
    "description": "AI-powered workspace tool designed to streamline your daily workflows."
  },
  {
    "title": "Sana",
    "url": "https://sanalabs.com/",
    "category": "Productivity",
    "description": "AI-powered workspace tool designed to streamline your daily workflows."
  },
  {
    "title": "Motion",
    "url": "https://www.usemotion.com/",
    "category": "Productivity",
    "description": "AI-powered workspace tool designed to streamline your daily workflows."
  },
  {
    "title": "Reclaim",
    "url": "https://reclaim.ai/",
    "category": "Productivity",
    "description": "AI-powered workspace tool designed to streamline your daily workflows."
  },
  {
    "title": "Clockwise",
    "url": "https://www.getclockwise.com/",
    "category": "Productivity",
    "description": "AI-powered workspace tool designed to streamline your daily workflows."
  },
  {
    "title": "Trevor AI",
    "url": "https://trevorai.com/",
    "category": "Productivity",
    "description": "AI-powered workspace tool designed to streamline your daily workflows."
  },
  {
    "title": "Akiflow",
    "url": "https://akiflow.com/",
    "category": "Productivity",
    "description": "AI-powered workspace tool designed to streamline your daily workflows."
  },
  {
    "title": "Sunsama",
    "url": "https://sunsama.com/",
    "category": "Productivity",
    "description": "AI-powered workspace tool designed to streamline your daily workflows."
  },
  {
    "title": "Fathom",
    "url": "https://fathom.video/",
    "category": "Productivity",
    "description": "AI-powered workspace tool designed to streamline your daily workflows."
  },
  {
    "title": "Read AI",
    "url": "https://www.read.ai/",
    "category": "Productivity",
    "description": "AI-powered workspace tool designed to streamline your daily workflows."
  },
  {
    "title": "Krisp",
    "url": "https://krisp.ai/",
    "category": "Productivity",
    "description": "AI-powered workspace tool designed to streamline your daily workflows."
  },
  {
    "title": "Glean",
    "url": "https://www.glean.com/",
    "category": "Productivity",
    "description": "AI-powered workspace tool designed to streamline your daily workflows."
  },
  {
    "title": "Dashworks",
    "url": "https://www.dashworks.ai/",
    "category": "Productivity",
    "description": "AI-powered workspace tool designed to streamline your daily workflows."
  },
  {
    "title": "Slite",
    "url": "https://slite.com/",
    "category": "Productivity",
    "description": "AI-powered workspace tool designed to streamline your daily workflows."
  },
  {
    "title": "Coda AI",
    "url": "https://coda.io/product/ai",
    "category": "Productivity",
    "description": "AI-powered workspace tool designed to streamline your daily workflows."
  },
  {
    "title": "Airtable AI",
    "url": "https://airtable.com/platform/ai",
    "category": "Productivity",
    "description": "AI-powered workspace tool designed to streamline your daily workflows."
  },
  {
    "title": "Grammarly",
    "url": "https://www.grammarly.com/",
    "category": "Marketing",
    "description": "AI-powered typing assistant to improve writing, tone, and grammar."
  },
  {
    "title": "Jasper",
    "url": "https://www.jasper.ai/",
    "category": "Marketing",
    "description": "AI copilot for enterprise marketing teams to create branded content."
  },
  {
    "title": "Copy.ai",
    "url": "https://www.copy.ai/",
    "category": "Marketing",
    "description": "AI copywriting and marketing assistant to scale your content strategy."
  },
  {
    "title": "Writesonic",
    "url": "https://writesonic.com/",
    "category": "Marketing",
    "description": "AI copywriting and marketing assistant to scale your content strategy."
  },
  {
    "title": "Rytr",
    "url": "https://rytr.me/",
    "category": "Marketing",
    "description": "AI copywriting and marketing assistant to scale your content strategy."
  },
  {
    "title": "Anyword",
    "url": "https://anyword.com/",
    "category": "Marketing",
    "description": "AI copywriting and marketing assistant to scale your content strategy."
  },
  {
    "title": "Surfer SEO",
    "url": "https://surferseo.com/",
    "category": "Marketing",
    "description": "AI copywriting and marketing assistant to scale your content strategy."
  },
  {
    "title": "Frase",
    "url": "https://www.frase.io/",
    "category": "Marketing",
    "description": "AI copywriting and marketing assistant to scale your content strategy."
  },
  {
    "title": "Clearscope",
    "url": "https://www.clearscope.io/",
    "category": "Marketing",
    "description": "AI copywriting and marketing assistant to scale your content strategy."
  },
  {
    "title": "MarketMuse",
    "url": "https://www.marketmuse.com/",
    "category": "Marketing",
    "description": "AI copywriting and marketing assistant to scale your content strategy."
  },
  {
    "title": "Sudowrite",
    "url": "https://www.sudowrite.com/",
    "category": "Marketing",
    "description": "AI copywriting and marketing assistant to scale your content strategy."
  },
  {
    "title": "NovelAI",
    "url": "https://novelai.net/",
    "category": "Marketing",
    "description": "AI copywriting and marketing assistant to scale your content strategy."
  },
  {
    "title": "Wordtune",
    "url": "https://www.wordtune.com/",
    "category": "Marketing",
    "description": "AI copywriting and marketing assistant to scale your content strategy."
  },
  {
    "title": "QuillBot",
    "url": "https://quillbot.com/",
    "category": "Marketing",
    "description": "AI copywriting and marketing assistant to scale your content strategy."
  },
  {
    "title": "ProWritingAid",
    "url": "https://prowritingaid.com/",
    "category": "Marketing",
    "description": "AI copywriting and marketing assistant to scale your content strategy."
  },
  {
    "title": "Hemingway Editor",
    "url": "https://hemingwayapp.com/",
    "category": "Marketing",
    "description": "AI copywriting and marketing assistant to scale your content strategy."
  },
  {
    "title": "Lex",
    "url": "https://lex.page/",
    "category": "Marketing",
    "description": "AI copywriting and marketing assistant to scale your content strategy."
  },
  {
    "title": "Hootsuite OwlyWriter",
    "url": "https://www.hootsuite.com/features/owlywriter-ai",
    "category": "Marketing",
    "description": "AI copywriting and marketing assistant to scale your content strategy."
  },
  {
    "title": "Lately",
    "url": "https://www.lately.ai/",
    "category": "Marketing",
    "description": "AI copywriting and marketing assistant to scale your content strategy."
  },
  {
    "title": "Taplio",
    "url": "https://taplio.com/",
    "category": "Marketing",
    "description": "AI copywriting and marketing assistant to scale your content strategy."
  },
  {
    "title": "Canva Magic Studio",
    "url": "https://www.canva.com/magic/",
    "category": "Design",
    "description": "A suite of AI design tools built right into Canva."
  },
  {
    "title": "Figma AI",
    "url": "https://www.figma.com/ai/",
    "category": "Design",
    "description": "AI-powered features inside Figma to speed up the design process."
  },
  {
    "title": "Uizard",
    "url": "https://uizard.io/",
    "category": "Design",
    "description": "AI design tool to generate stunning UI, graphics, and visual assets."
  },
  {
    "title": "Galileo AI",
    "url": "https://www.usegalileo.ai/",
    "category": "Design",
    "description": "AI design tool to generate stunning UI, graphics, and visual assets."
  },
  {
    "title": "Relume",
    "url": "https://www.relume.io/",
    "category": "Design",
    "description": "AI design tool to generate stunning UI, graphics, and visual assets."
  },
  {
    "title": "Webflow AI",
    "url": "https://webflow.com/ai",
    "category": "Design",
    "description": "AI design tool to generate stunning UI, graphics, and visual assets."
  },
  {
    "title": "Framer AI",
    "url": "https://www.framer.com/ai/",
    "category": "Design",
    "description": "AI design tool to generate stunning UI, graphics, and visual assets."
  },
  {
    "title": "Dora",
    "url": "https://dora.run/",
    "category": "Design",
    "description": "AI design tool to generate stunning UI, graphics, and visual assets."
  },
  {
    "title": "Spline",
    "url": "https://spline.design/",
    "category": "Design",
    "description": "AI design tool to generate stunning UI, graphics, and visual assets."
  },
  {
    "title": "Looka",
    "url": "https://looka.com/",
    "category": "Design",
    "description": "AI design tool to generate stunning UI, graphics, and visual assets."
  },
  {
    "title": "Brandmark",
    "url": "https://brandmark.io/",
    "category": "Design",
    "description": "AI design tool to generate stunning UI, graphics, and visual assets."
  },
  {
    "title": "Khroma",
    "url": "https://www.khroma.co/",
    "category": "Design",
    "description": "AI design tool to generate stunning UI, graphics, and visual assets."
  },
  {
    "title": "Huemint",
    "url": "https://huemint.com/",
    "category": "Design",
    "description": "AI design tool to generate stunning UI, graphics, and visual assets."
  },
  {
    "title": "Colormagic",
    "url": "https://colormagic.app/",
    "category": "Design",
    "description": "AI design tool to generate stunning UI, graphics, and visual assets."
  },
  {
    "title": "Fontjoy",
    "url": "https://fontjoy.com/",
    "category": "Design",
    "description": "AI design tool to generate stunning UI, graphics, and visual assets."
  },
  {
    "title": "Autodraw",
    "url": "https://www.autodraw.com/",
    "category": "Design",
    "description": "AI design tool to generate stunning UI, graphics, and visual assets."
  },
  {
    "title": "Magician",
    "url": "https://magician.design/",
    "category": "Design",
    "description": "AI design tool to generate stunning UI, graphics, and visual assets."
  },
  {
    "title": "Genius",
    "url": "https://genius.design/",
    "category": "Design",
    "description": "AI design tool to generate stunning UI, graphics, and visual assets."
  },
  {
    "title": "Viesus",
    "url": "https://www.viesus.com/",
    "category": "Design",
    "description": "AI design tool to generate stunning UI, graphics, and visual assets."
  },
  {
    "title": "Fronty",
    "url": "https://fronty.com/",
    "category": "Design",
    "description": "AI design tool to generate stunning UI, graphics, and visual assets."
  }
];
