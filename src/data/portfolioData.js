export const portfolioData = {
  profile: {
    name: "SAYYAD YAMEEN",
    initials: "SY",
    brandTitle: "SY. / SAYYAD YAMEEN",
    labelYear: "PORTFOLIO / 2026",
    tagline: "THINK. DESIGN. DEVELOP. INNOVATE.",
    headline: "Building intelligent things. Designing meaningful experiences.",
    roles: [
      "AI & ML Developer",
      "Data Science Student",
      "Python Developer",
      "UI/UX Designer",
      "Web Developer"
    ],
    heroIntro: "I am SAYYAD YAMEEN, an AI & ML developer and Data Science student interested in technology, programming and creative digital experiences. I enjoy exploring artificial intelligence, machine learning, web development and UI/UX design. My goal is to transform ideas into useful and meaningful digital experiences.",
    aboutIntro: "I am a technology enthusiast pursuing my journey from Artificial Intelligence and Machine Learning into Data Science.\n\nI enjoy combining programming, problem-solving and creative design to build meaningful digital experiences.\n\nBeyond coding, I am interested in exploring new technologies, visual design and innovative ideas.",
    detailedAbout: [
      {
        title: "Discipline & Mathematical Logic",
        content: "My technical grounding begins in core computer science, systems programming in C, Java, and Python, progressing into probabilistic machine learning models and neural computation architectures."
      },
      {
        title: "The Editorial Design Sensibility",
        content: "Code alone does not create impact unless communicated with emotional clarity. I design interfaces inspired by Swiss typography, architectural minimalism, and intuitive spatial pacing in Figma."
      },
      {
        title: "Continuous Exploration",
        content: "Technology evolves rapidly. My focus remains grounded in first-principles thinking, learning new data science methods, deploying machine learning models, and building digital tools that respect the human user."
      }
    ],
    contactInfo: {
      email: import.meta.env.VITE_CONTACT_EMAIL || "sayyadyameen.dev@gmail.com",
      phone: import.meta.env.VITE_WHATSAPP_NUMBER || "919876543210",
      whatsappDisplay: "+91 98765 43210",
      location: "India &bull; Remote Available",
      github: import.meta.env.VITE_GITHUB_URL || "https://github.com",
      linkedin: import.meta.env.VITE_LINKEDIN_URL || "https://linkedin.com",
      instagram: import.meta.env.VITE_INSTAGRAM_URL || "",
    },
    images: {
      hero: "/images/yameen-about.jpg",
      about: "/images/yameen-hero.jpg",
      gallery: "/images/yameen-gallery.png",
      sunset: "/images/yameen-sunset.png",
    },
    resumeUrl: "/resume/sayyad-yameen-resume.pdf"
  },

  skillsData: [
    {
      category: "PROGRAMMING",
      skills: ["Python", "Java", "C"],
      desc: "Algorithmic thinking, object-oriented software engineering, and computational logic."
    },
    {
      category: "AI & DATA",
      skills: ["Artificial Intelligence", "Machine Learning", "Data Science"],
      desc: "Computer vision, sentiment classification, statistical analysis, and predictive modeling."
    },
    {
      category: "DEVELOPMENT",
      skills: ["HTML", "CSS", "JavaScript", "Web Development"],
      desc: "Modern semantic web standards, high-performance responsive frontend, and client architectures."
    },
    {
      category: "DESIGN",
      skills: ["Figma", "Wireframing", "Prototyping", "UI/UX Design"],
      desc: "Human-centered information architecture, luxury editorial layouts, and design systems."
    }
  ],

  projects: [
    {
      id: "ai-robot",
      number: "01",
      title: "AI-BASED ROBOT",
      category: "Robotics & Computer Vision",
      shortDescription: "An intelligent robotic system combining voice control, object detection, obstacle detection and automation.",
      fullDescription: "The AI-Based Robot is an integrated embedded and software project designed to demonstrate autonomous movement, human voice interaction, and real-time computer vision. It leverages computer vision algorithms for detecting objects in its trajectory while utilizing ultrasonic sensor arrays to dynamically avoid obstacles. With hands-free voice-controlled operation, users can issue navigation and task commands directly.",
      features: [
        "Voice-controlled operation with natural command recognition",
        "Object detection via computer vision and neural detection",
        "Obstacle detection and real-time collision prevention",
        "Automated robotic movement and autonomous trajectory navigation"
      ],
      technologies: ["Python", "Artificial Intelligence", "Computer Vision", "Object Detection", "Voice Recognition", "Automation"],
      image: "/images/projects/ai-robot.jpg",
      interactiveType: "robot"
    },
    {
      id: "movie-analyzer",
      number: "02",
      title: "MOVIE REVIEW ANALYZER",
      category: "Machine Learning & NLP",
      shortDescription: "A machine learning application that analyzes movie reviews and predicts sentiment.",
      fullDescription: "A machine learning application built to analyze natural language in film critiques and predict viewer sentiment with high precision. Incorporating text tokenization, stop-word removal, TF-IDF vectorization, and supervised classification algorithms, the system delivers confidence scores, sentiment breakdowns (Positive/Negative/Neutral), and insightful keyword weights.",
      features: [
        "Review input form supporting raw movie critiques and essays",
        "Sentiment classification into Positive, Negative, or Neutral states",
        "Machine learning predictions with real-time confidence scores",
        "User-friendly, clean interface with instant sentiment feedback"
      ],
      technologies: ["Python", "Machine Learning", "Data Science", "Natural Language Processing", "Sentiment Analysis"],
      image: "/images/projects/movie-analyzer.jpg",
      interactiveType: "sentiment"
    },
    {
      id: "resume-builder",
      number: "03",
      title: "RESUME BUILDER",
      category: "Web Application",
      shortDescription: "A web application for creating professional resumes with templates and PDF export.",
      fullDescription: "A modern web application tailored for students, engineers, and professionals to build polished, recruiter-ready resumes effortlessly. Users input personal information, educational milestones, technical toolkits, and project records into structured forms, experiencing real-time live preview rendering and one-click PDF export.",
      features: [
        "Resume information forms with intelligent validation",
        "Professional modern templates designed for readability",
        "Live real-time preview of formatted document",
        "Client-side high-quality PDF export and download"
      ],
      technologies: ["JavaScript", "HTML5", "CSS3", "Responsive Design", "PDF Export"],
      image: "/images/projects/resume-builder.jpg",
      interactiveType: "resume"
    },
    {
      id: "personal-portfolio",
      number: "04",
      title: "PERSONAL PORTFOLIO",
      category: "Creative Technology",
      shortDescription: "A personal digital platform showcasing my technical skills, design interests and projects.",
      fullDescription: "A minimal luxury digital experience engineered from the ground up for SAYYAD YAMEEN. Engineered with high-performance React, Three.js 3D kinetic sculpture, Tailwind CSS, bespoke editorial typography, and integrated communication channels.",
      features: [
        "Minimal luxury editorial aesthetic with warm ivory & deep charcoal themes",
        "Interactive 3D kinetic sculpture with real-time mouse tracking and lighting",
        "Editorial project detail modals with live interactive simulation benches",
        "Direct WhatsApp integration and authenticated email channel"
      ],
      technologies: ["React", "Three.js", "Tailwind CSS", "UI/UX Design", "Framer Motion"],
      image: "/images/projects/portfolio-system.jpg",
      interactiveType: "portfolio"
    }
  ],

  designStudies: [
    {
      id: "design-1",
      number: "STUDY 01",
      title: "Neural Vision — Research Dashboard",
      category: "Web Dashboard & Data System",
      description: "A dark-toned analytical dashboard for tracking machine learning models, loss gradients, latency curves, and GPU cluster throughput.",
      deliverables: ["Wireframes", "Design Tokens", "High-Fidelity Interface", "Interactive Prototype"],
      tools: ["Figma", "Design Systems", "Data Visualization"]
    },
    {
      id: "design-2",
      number: "STUDY 02",
      title: "PulseHealth — Mobile Interface",
      category: "Mobile Application",
      description: "An intuitive mobile health interface presenting biometric metrics, daily wellness indicators, and predictive health summaries.",
      deliverables: ["User Flow", "Low-Fi Blueprints", "Hi-Fi Visual Design", "Clickable Prototype"],
      tools: ["Figma", "Mobile UX", "Micro-Interactions"]
    },
    {
      id: "design-3",
      number: "STUDY 03",
      title: "Quantum — Design System Library",
      category: "Design System & UI Library",
      description: "A comprehensive modular component kit featuring typography tokens, spatial grid rules, and responsive interface states.",
      deliverables: ["Atomic UI Kit", "Color Tokens", "Typography Scale", "Component States"],
      tools: ["Figma", "Design Tokens", "Auto Layout"]
    },
    {
      id: "design-4",
      number: "STUDY 04",
      title: "ApexFlow — Financial Analytics",
      category: "SaaS Interface",
      description: "A high-density trading and asset distribution platform balancing data complexity with crisp visual clarity.",
      deliverables: ["Information Architecture", "Dashboard Views", "Modal Flows"],
      tools: ["Figma", "Information Architecture", "UI Design"]
    }
  ],

  educationTimeline: [
    {
      degree: "B.Tech in Data Science",
      badge: "Degree Program",
      focus: "Data Science, Machine Learning, Statistical Foundations & Predictive Modeling",
      description: "In-depth study of statistical analysis, big data architectures, machine learning algorithms, and data-driven computational systems.",
      current: true
    },
    {
      degree: "Diploma in Artificial Intelligence & Machine Learning",
      badge: "Specialized Technical Diploma",
      focus: "Applied AI, Machine Learning Paradigms, Automation & Programming Logic",
      description: "Comprehensive foundational study covering artificial intelligence fundamentals, neural concepts, automation, and programming in Python, Java, and C.",
      current: false
    }
  ],

  galleryImages: [
    {
      src: "/images/yameen-sunset.png",
      title: "Golden Hour Ocean of Clouds",
      plate: "PLATE I",
      location: "Summit Ridge",
      caption: "Reflections upon the sea of clouds at sunset — where expansive nature informs calm, intentional design."
    },
    {
      src: "/images/yameen-hero.jpg",
      title: "Mountain Horizon & Perspective",
      plate: "PLATE II",
      location: "Highland Lookout",
      caption: "Open horizons and layered mountain ranges under the clear sky."
    },
    {
      src: "/images/yameen-about.jpg",
      title: "Above the Clouds",
      plate: "PLATE III",
      location: "Misty Mountain Peaks",
      caption: "High altitude viewpoints surrounded by morning fog."
    },
    {
      src: "/images/yameen-gallery.png",
      title: "Morning Mist & Forest Trail",
      plate: "PLATE IV",
      location: "Forested Valley",
      caption: "First light rising across forested valleys and cloud canopies."
    }
  ],

  technicalInterests: [
    { title: "Artificial Intelligence", desc: "Autonomous decision-making, neural computation, and intelligent agents." },
    { title: "Machine Learning", desc: "Supervised and unsupervised models, NLP pipelines, and sentiment prediction." },
    { title: "Data Science", desc: "Exploratory statistics, feature discovery, and predictive architectures." },
    { title: "Web Development", desc: "Clean architecture, high-performance web standards, and modern user experiences." },
    { title: "UI/UX Design", desc: "Human-centered spatial pacing, typography, and minimalist design systems." },
    { title: "Emerging Technologies", desc: "Exploring the frontiers of edge computing, ambient intelligence, and developer tools." },
    { title: "Software Development", desc: "Clean, maintainable, modular software code across Python, Java, and C." }
  ]
};
