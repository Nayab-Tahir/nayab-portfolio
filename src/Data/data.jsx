export const myCareerList = [
  "_ai engineer",
  "_genai developer",
  "_rag specialist",
  "_backend engineer",
];

export const terminalData = {
  listDir: {
    root: ["resume.page", "welcome.txt", "Pages", "Files"],
    Pages: ["about.page", "projects.page", "services.page", "resume.page", "contact.page"],
    Files: ["welcome.txt"],
  },
  terminalInstructionsList: [
    {
      num: 1,
      title: "clear",
      description: "It will clear the terminal",
    },
    {
      num: 2,
      title: "cd",
      description: "Changes directory to specified directory",
    },
    {
      num: 3,
      title: "ls",
      description: "List files, directories and pages.",
    },
    {
      num: 4,
      title: "cat",
      description: "Display the contents of a file {.txt}",
    },
    {
      num: 5,
      title: "open",
      description: "Open specified page {.page}",
    },
    {
      num: 6,
      title: "mv",
      description: "Move or rename a file or directory",
    },
    {
      num: 7,
      title: "cp",
      description: "Copy a file or directory",
    },
    {
      num: 8,
      title: "cp",
      description: "Copy a file or directory",
    },
  ],
};

export const aboutMeIntro = {
  intro:
    "...AI Engineer crafting production-grade Generative AI, RAG systems, and intelligent agents. Let's build what's next?",
  "short-desc":
    "...AI Engineer building [GenAI, RAG, Voice AI]; var stack = 'LangChain' + 'vector_dbs' + 'Django_DRF' + 'LLM_orchestration';",
  "detailed-desc":
    "...I design and ship production GenAI systems — multi-tenant RAG platforms, regulatory compliance agents, real-time voice AI, and AI-driven analytics — combining LangChain, vector databases (Pinecone, Chroma, FAISS), and robust Django/FastAPI backends to turn LLMs into reliable, enterprise-ready products;",
  "more-details": {
    "short-desc":
      "...AI Engineer at Techtics.ai since Apr 2024. BS Software Engineering (FCIT, CGPA 3.63). Focused on GenAI, RAG, multi-agent systems, and backend engineering;",
    "detailed-desc":
      "…I specialize in Generative AI and RAG architectures: building multi-tenant platforms, policy-aware compliance agents, and voice-first assistants. My toolbox is LangChain, LlamaIndex, Pinecone/Chroma/FAISS, OpenAI and Gemini, LiveKit for real-time voice, and Django REST Framework/FastAPI on the backend. I've integrated AI systems with enterprise platforms (Zoho, TrainerCentral) and hold the DeepLearning.AI Deep Learning and Machine Learning Specializations.",
  },
};

export const servicesData = {
  servicesIntro:
    "…Turning business needs into production-grade AI — custom RAG agents, compliance automation, voice AI, and LLM-powered analytics built to scale.",
  services: [
    {
      name: "generative ai & rag",
      color: "#9a99ff",
      description:
        "…Design and ship RAG architectures with LangChain, LlamaIndex, and vector stores (Pinecone, Chroma, FAISS). Configurable ingestion for documents, web, and multimedia, with pluggable LLM and embedding providers;",
    },
    {
      name: "ai agents & automation",
      color: "#e6db74",
      description:
        "…Build multi-agent systems and policy-aware AI assistants for regulatory compliance, risk assessment, and business workflows. Integrates with enterprise tools (Zoho, TrainerCentral) to automate real work;",
    },
    {
      name: "voice & real-time ai",
      color: "#2fcbef",
      description:
        "…Develop real-time voice AI assistants using LiveKit with full STT → RAG → TTS pipelines, delivering context-aware audio responses grounded in authoritative sources;",
    },
    {
      name: "backend & api engineering",
      color: "#e6db74",
      description:
        "…Production backends with Django REST Framework and FastAPI — multi-tenant architectures, REST APIs, embeddable widgets, and integrations that turn AI prototypes into shippable products;",
    },
  ],
};

export const skillsData = {
  skillsIntro:
    "...Step into a treasury of skills, each facet reflecting versatility, precision, and adaptability, tailored to meet diverse challenges and fuel success.",
  skills: [
    [
      {
        symbol: ".py",
        title: "python",
        description:
          "primary language for AI/ML work — LangChain, LlamaIndex, FastAPI, and every data pipeline I ship;",
      },
      {
        symbol: ".lc",
        title: "langchain",
        description:
          "orchestration for RAG pipelines, agents, tool use, and prompt flows across OpenAI, Gemini, and other LLM providers;",
      },
    ],
    [
      {
        symbol: ".dj",
        title: "django / drf",
        description:
          "production backends for multi-tenant AI platforms — REST APIs, auth, data modeling, and LLM-backed endpoints;",
      },
      {
        symbol: ".vs",
        title: "vector search",
        description:
          "Pinecone, Chroma, and FAISS for embeddings-based retrieval — tuning chunking, hybrid search, and recall quality;",
      },
    ],
    [
      {
        symbol: ".lk",
        title: "livekit voice",
        description:
          "real-time voice AI agents with STT → RAG → TTS pipelines and low-latency audio streaming;",
      },
      {
        symbol: ".dk",
        title: "docker",
        description:
          "containerizing AI services and backends for reproducible deploys across dev and production;",
      },
    ],
  ],

  drivingSkills: [
    [
      {
        symbol: "tw",
        title: "team work",
        description:
          "I value collaboration and believe in power of collective effort, where diverse skills come together to achieve common goals;",
      },
      {
        symbol: "in",
        title: "innovation",
        description:
          "I'm driven by passion for pushing boundaries and exploring new ideas, constantly seeking innovative solutions to complex problems;",
      },
    ],
    [
      {
        symbol: "ex",
        title: "excellence",
        description:
          "My commitment to excellence fuels my pursuit of continuous improvement, striving to deliver high-quality outcomes in my work;",
      },
      {
        symbol: "hw",
        title: "hard work",
        description:
          "I embrace challenges with dedication, recognizing that perseverance is key to overcoming obstacles and achieving success;",
      },
    ],
  ],
};

export const experienceData = {
  experienceIntro: "…Embark on a journey through my professional chronicles, where each role tells a story of growth, challenges conquered, and expertise honed.",
  experiences: [
    {
      startDate: "Apr 2024",
      endDate: "Present",
      companyName: "techtics.ai",
      position: "DATA SCIENTIST / AI ENGINEER",
      description:
        "…At Techtics.ai I design and ship production-grade Generative AI systems — multi-tenant RAG platforms, regulatory compliance agents, and risk assessment tools — built on LangChain, vector databases, and Django REST Framework, integrated with enterprise platforms like Zoho and TrainerCentral;",
    },
    {
      startDate: "Aug 2023",
      endDate: "Apr 2024",
      companyName: "i2c",
      position: "SOFTWARE ENGINEER",
      description:
        "…At i2c I enhanced the End-of-Day Scheduler, Push Scheduler, and Campaign Scheduler services, shipping fixes and optimizing slow queries to make core batch systems faster and more reliable;",
    },
    {
      startDate: "Feb 2023",
      endDate: "Jun 2023",
      companyName: "fcit",
      position: "TEACHER ASSISTANT OF DATA SCIENCE",
      description:
        "…At FCIT I supported Data Science students as a Teaching Assistant — mentoring on assignments, labs, and core concepts throughout the semester;",
    },
    {
      startDate: "Mar 2022",
      endDate: "Sep 2022",
      companyName: "fcit",
      position: "TEACHER ASSISTANT OF WEB DEVELOPMENT",
      description:
        "…At FCIT I assisted Web Development students as a Teaching Assistant, facilitating lab sessions and guiding them through core frontend and backend concepts;",
    },
  ],
};

export const projectsData = {
  projectsIntro:
    "…A showcase of production-grade AI systems — RAG platforms, compliance agents, voice assistants, and analytics tools built to ship, not to demo.",
  projects: [
    {
      tag1: "genai",
      tag2: "langchain",
      name: "ragpulse",
      role: "MULTI-TENANT RAG AGENT PLATFORM",
      description:
        "…A no-code platform for building and deploying custom RAG agents with configurable ingestion for documents, web, and multimedia, pluggable LLM/embedding/vector-store abstraction (OpenAI/Gemini, Pinecone/Chroma), per-agent system prompts and isolated memory, plus REST APIs and embeddable widgets for external integrations;",
    },
    {
      tag1: "compliance",
      tag2: "rag",
      name: "dot compliance",
      role: "REGULATORY AI ASSISTANT (USA)",
      description:
        "…A policy-aware RAG agent for DOT and FMCSA compliance, combining continuously synced government regulations with company-specific policies and integrated with Zoho Email and TrainerCentral for automated responses and training workflows;",
    },
    {
      tag1: "voice ai",
      tag2: "livekit",
      name: "aalim360",
      role: "REAL-TIME VOICE AI ASSISTANT",
      description:
        "…A real-time voice-based RAG agent for Quran, Hadith, and Islamic jurisprudence — full STT → RAG → TTS pipeline with authoritative Islam360 audio, delivering context-aware answers with authentic recitations;",
    },
    {
      tag1: "iso",
      tag2: "risk",
      name: "crimsonrisk.ai",
      role: "ISO COMPLIANCE & RISK ASSESSMENT",
      description:
        "…An AI-driven ISO compliance assessment system using conversational data collection, with risk scoring and gap analysis that guides organizations toward compliance readiness with minimal manual effort;",
    },
    {
      tag1: "fintech",
      tag2: "analytics",
      name: "finly",
      role: "AI CFO & FINANCIAL INTELLIGENCE",
      description:
        "…A multi-company financial analytics platform integrating Shopify, Google Ads, and Meta Ads — pipelines for transaction normalization, categorization, and ROI analytics, with an AI CFO assistant generating insights and revenue optimization guidance;",
    },
  ],
};
