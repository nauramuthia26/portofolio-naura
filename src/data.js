// ============================================================
// SEMUA KONTEN PORTOFOLIO ADA DI SINI.
// Ganti teks di bawah ini sesuai data kamu.
// Nanti kalau backend/Supabase sudah siap, file ini bisa
// diganti jadi hasil fetch('/api/content') — struktur datanya
// sengaja dibuat sama supaya migrasinya gampang.
// ============================================================

export const profile = {
  name: "Naura Muthia Alwanadi",
  role: "Informatics · Web Development & Data Engineering Enthusiast",
  photo: "/photo.jpg",
  email: "nauraalwnd@gmail.com",
  location: "Tangerang, Indonesia",
  socials: [
    { label: "GitHub", url: "https://github.com/nauramuthia26" },
    { label: "LinkedIn", url: "https://linkedin.com/in/nauramuthiaalwanadi" }
  ]
}

export const about = {
  tag: "class: tentang-saya",
  paragraphs: [
    "I am a Informatics graduate with an interest in Web Development, Machine Learning, and Data Engineering. This interest has grown through various academic projects and internship experiences that have given me the opportunity to learn about web application development, data processing, and the implementation of Artificial Intelligence (AI)-based technologies.",
    "One of my most meaningful academic experiences was my PATTERNA thesis project, which involved developing a web application for fabric type and quality classification using Deep Learning. This project further strengthened my interest in continuously learning and developing technologies in this field."
  ]
}

export const education = [
  {
    institution: "UPN \"Veteran\" Jakarta",
    degree: "Bachelor of Informatics, Faculty of Computer Science",
    nilai: "GPA 3.86 / 4.00",
    period: "2022 — 2026",
    description: "Explored various areas of Computer Science through coursework, training, and internships, eventually developing a strong interest in data, machine learning, and web development, particularly frontend development."
  },
  {
    institution: "SMA Negeri 12 Kota Tangerang",
    degree: "Mathematics and Natural Sciences (MIPA)",
    nilai: "GPA 88.2 / 100",
    period: "2019 — 2022",
    description: "Developed an interest in fields involving logic and quantitative reasoning, particularly mathematics. Outside academics, actively participated in the school student council (MPM) and extracurricular activities."
  }
]

export const skills = {
  web: ["React.js", "FastAPI", "Git & GitHub", "Docker", "HTML", "CSS"],
  data: ["Python", "TensorFlow / Keras", "Excel"],
  database: ["PostgreSQL / Supabase", "SQL"],
  soft: [
    "Problem solving", "Time Management", "Teamwork",
    "Communication", "Adaptable", "Critical Thinking"
  ]
}       

export const internships = [
  {
    company: "PT BTPN Syariah",
    role: "Data Platform Engineer Intern",
    period: "Juli — Oktober 2025",
    summary: "Supported data integration and data warehouse management using AWS and SQL by contributing to data pipeline development, creating views in Amazon Redshift, and supporting data migration processes to ensure smooth and accurate data transfers.",
    tools: ["DBeaver", "Amazon Redshift", "AWS DMS", "MySQL", "AWS CodePipeline", "Git"],
    outcomes: [
      "Adapted to various technologies such as AWS Redshift, AWS DMS, AWS Glue, and Git to support data warehousing and data integration processes in an enterprise environment.",
      "Strengthened SQL and data validation skills, as well as understanding of data migration and deployment workflows through hands-on implementation with the Data Platform team."
    ],
    documentation: [
      { src: "/btpns-doc-1.jpg", caption: "Personal Documentation" },
      { src: "/btpns-doc-2.jpg", caption: "Team Documentation" },
      { src: "/btpns-doc-3.jpg", caption: "Deployment Activity" },
      { src: "/btpns-doc-4.jpg", caption: "Assessment Certificate" }
    ]
  },
  {
    company: "PT Jasa Marga Tollroad Maintenance",
    role: "Procurement Intern",
    period: "September 2024 — Januari 2025",
    summary: "Contributed to vendor data validation and reconciliation using Microsoft Excel and an e-Procurement system, including matching physical documents with digital records to ensure data accuracy. Created flowcharts for the Vendor Management System (VMS), direct transactions, and simple tender processes to document procurement workflows.",
    tools: ["Microsoft Excel", "Microsoft Word", "Figma", "E-Procurement System"],
    outcomes: [
      "Improved accuracy and attention to detail in validating, correcting, and reconciling vendor data using Microsoft Excel and an e-Procurement system.",
      "Developed business process analysis skills by mapping procurement workflows into flowcharts to support process documentation."
    ],
    documentation: [
      { src: "/jm-doc-1.jpg", caption: "Personal Documentation" },
      { src: "/jm-doc-2.jpeg", caption: "Data Validation Activity" }
    ]
  }
]

export const projects = [
  {
    tag: "class: proyek",
    name: "PATTERNA",
    period: "2025 — 2026",
    summary: "PATTERNA is a full-stack web application that uses Deep Learning to classify fabric type and quality across 10 classes. The project compares several deep learning architectures and selects EfficientNetB0 as the best-performing model, achieving 82% accuracy and better rejection of non-fabric images. The system was deployed end-to-end with a React frontend on Vercel, FastAPI backend on Hugging Face Spaces, and Supabase PostgreSQL for data storage.",
    tools: ["React.js", "Python", "FastAPI", "TensorFlow/Keras", "Supabase PostgreSQL"],
    outcomes: [
      "The EfficientNetB0 model achieved 82% accuracy and demonstrated better rejection of non-fabric images compared with other models.",
      "The system was successfully implemented as a full-stack application, with the frontend deployed on Vercel and the backend on Hugging Face Spaces."
    ],
    links: [
      { label: "Live Demo", url: "https://patterna-skripsi.vercel.app/" },
      { label: "GitHub", url: "https://github.com/nauramuthia26/patterna-skripsi" }
    ],
    documentation: [
      { src: "/patterna-project-1.png", caption: "Website Interface" },
      { src: "/patterna-project-2.png", caption: "Login Interfce" },
      { src: "/patterna-project-3.png", caption: "Database Table Interface" },
      { src: "/patterna-project-4.jpeg", caption: "Mobile Compatibility" }
    ]
  },
  {
    tag: "class: proyek",
    name: "WorshipFinder",
    period: "2025",
    summary: "WorshipFinder is a web application for helping users find places of worship based on specific needs. It provides search and filtering features by worship place type, typology, province, and regency. The project primarily focused on implementing and testing the APIs and ensuring that the filtering and data retrieval functions work properly, while the frontend was kept simple and focused on the core features.",
    tools: ["JavaScript", "HTML", "CSS"],
    outcomes: [
      "Developed a web application for finding places of worship with filtering features based on multiple location categories and types of places of worship.",
      "Implemented a search interface and results display to make information easier to find."
    ],
    links: [
      { label: "GitHub", url: "https://github.com/nauramuthia26/workshipfinder_kel4" }
    ],
    documentation: [
      { src: "/worshipfinder-project-2.png", caption: "Homepage" }
    ]
  },
  {
    tag: "class: proyek",
    name: "Effective Plan for UTBK",
    period: "2024",
    summary: "Effective Plan for UTBK is a web interface designed to help students organize their UTBK preparation more effectively. It provides features for creating study plans, monitoring study progress, and accessing curated learning materials. The project focused primarily on frontend development and user interface design, using JavaScript, HTML, and CSS without a backend implementation.",
    tools: ["JavaScript", "PHP", "HTML", "CSS"],
    outcomes: [
      "Developed a web application interface to support planning and monitoring of UTBK study activities.",
      "Implemented features and user interfaces using JavaScript, PHP, HTML, and CSS."
    ],
    links: [
      { label: "GitHub", url: "#" }
    ],
    documentation: [
      { src: "/utbk-project-1.png", caption: "Homepage" },
      { src: "/utbk-project-2.png", caption: "Login Interface" },
      { src: "/utbk-project-3.png", caption: "Learning Material Video Links" }
    ]
  },
  {
    tag: "class: proyek",
    name: "Invasion Shooter",
    period: "2024",
    summary: "Invasion Shooter is a collaborative shooter game developed in Unity to practice game development. The project focused on UI design, game flow, and scene management, including transitions between the homepage, gameplay, level-up, and game-over screens. It also involved integrating visual assets and UI elements within the Unity Editor.",
    tools: ["Unity Editor"],
    outcomes: [
      "Developed a playable shooter game with integrated gameplay flow, user interface, and scene transitions.",
      "Contributed to UI design, game flow, scene management, and visual asset integration."
    ],
    links: [
    ],
    documentation: [
      { src: "/game-project-1.png", caption: "Homepage" },
      { src: "/game-project-2.png", caption: "Level 1" },
      { src: "/game-project-3.png", caption: "Level Up Screen" },
      { src: "/game-project-4.png", caption: "Game Over Screen" }
    ]
  }
]

export const organizations = [
  {
    tag: "class: organisasi",
    name: "Senat Mahasiswa Fakultas Ilmu Komputer",
    role: "Treasurer",
    period: "2024 - 2025",
    description: "Managed approximately IDR 33 million in incoming funds while ensuring financial transparency and balance. Monitored transactions, prepared monthly financial reports, and increased member compliance with cash contributions to 70%, resulting in more stable income and optimized spending.",
  },
  {
    tag: "class: organisasi",
    name: "Oh Be Shine",
    role: "Event Manager",
    period: "2024 - 2025",
    description: "Responsible for planning, organizing, and ensuring the smooth execution of events by leading a 4-person team and coordinating with 55 external parties. Managed 5 major programs, including monthly meetings, 2 bonding sessions, and 2 external webinars."
  },
  {
    tag: "class: organisasi",
    name: "UKM Seni Tari Veteran Jakarta",
    role: "Traditional Dance Member", 
    period: "2022 - 2024",
    description: "Participated in regular training sessions, cultural performances at various university events, and dance competitions outside campus. Contributed as an event committee member by supporting planning, coordination, and event execution in collaboration with members across divisions."
  },
  {
    tag: "class: organisasi",
    name: "Quran Reading and Writing Activities (Musholla Darussalam)",
    role: "Teaching Volunteer",
    period: "2023",
    description: "Taught Quran reading and writing to children and participated in Islamic activities at the local prayer hall. Helped coordinate children’s activities and events to create an active and enjoyable learning environment."
  },
  {
    tag: "class: organisasi",
    name: "Ratoh Jaroe Extracurricular",
    role: "Chairperson",
    period: "2021 - 2022",
    description: "Led organizational meetings, arranged regular practice schedules, and coordinated 45 members to actively participate in various extracurricular activities and performances, strengthening team coordination and member discipline."
  },
] 

export const certificates = [
  { src: "/css-cert-1.jpg", title: "Basic CSS Class (Online)", issuer: "Codepolitan", year: "2026" },
  { src: "/bnsp-cert-2.jpg", title: "Program Assistant", issuer: "BNSP", year: "2025" },
  { src: "/deeplearning-cert-3.jpg", title: "Deep Learning with Tensorflow", issuer: "IBM", year: "2025" },
  { src: "/dataanalytics-cert-4.jpg", title: "Data Analytics", issuer: "Certiport", year: "2024" },
  { src: "/generativeai-cert-5.jpg", title: "Developer Generative AI", issuer: "Alibaba Cloud Certification", year: "2024" },
  { src: "/dasarai-cert-6.jpg", title: "Basic AI Learning Class", issuer: "Dicoding ", year: "2024" }
]
