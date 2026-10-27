// ============================================================
// SEMUA KONTEN PORTOFOLIO ADA DI SINI.
// Ganti teks di bawah ini sesuai data kamu.
// Nanti kalau backend/Supabase sudah siap, file ini bisa
// diganti jadi hasil fetch('/api/content') — struktur datanya
// sengaja dibuat sama supaya migrasinya gampang.
// ============================================================

export const profile = {
  name: "Naura Muthia Alwanadi",
  role: "Informatics Graduate · Data Engineering · Web Development · AI/ML",
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
    "I am an Informatics graduate with internship experience in Data Engineering and hands-on experience in data integration, data processing, data validation, and data warehousing. Through my internship and academic projects, I have worked with SQL, Python, AWS, Amazon Redshift, databases, and web application development.",
    "I am passionate about exploring technology, solving problems, and continuously developing my skills in Data Engineering, Web Development, and Artificial Intelligence (AI). I enjoy learning new technologies and applying them to practical projects."
  ]
}

export const education = [
  {
    institution: "UPN \"Veteran\" Jakarta",
    degree: "Bachelor of Informatics, Faculty of Computer Science",
    nilai: "GPA 3.86 / 4.00",
    period: "2022 — 2026",
    description: "Studied core areas of Informatics, including programming, databases, data processing, and software development. Applied academic knowledge through internship experience and projects involving data engineering, machine learning, and web application development."
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
  web: ["React.js", "FastAPI", "HTML", "CSS", "JavaScript"],
  data: ["Python", "SQL", "Amazon Redshift", "DBeaver", "Excel", "AWS"],
  ml: ["Deep Learning", "Tensorflow / Keras", "Image Processing"],
  database: ["PostgreSQL", "MySQL", "Docker", "Git & GitHub"],
  soft: [
    "Problem solving", "Time Management", "Teamwork",
    "Communication", "Adaptable", "Documentation"
  ]
}       

export const internships = [
  {
    company: "PT BTPN Syariah",
    role: "Data Platform Engineer Intern",
    period: "Juli — Oktober 2025",
    summary: "Supported data warehousing, data integration, and migration activities as part of the Data Platform team. Developed an Amazon Redshift view for ORBAS using SQL, investigated schema synchronization issues in a MySQL-to-S3-to-SQL Server workflow, and assisted with data migration using AWS Database Migration Service (DMS).",
    tools: ["DBeaver", "Amazon Redshift", "AWS DMS", "SQL", "Git", "AWS Glue", "MySQL"],
    outcomes: [
      "Strengthened SQL, data validation, and troubleshooting skills in an enterprise data environment.",
      "Gained practical experience with data warehousing, schema synchronization, and database migration workflows."
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
    summary: "Validated vendor data and managed 50+ procurement documents using Microsoft Excel and the E-Procurement system, including tender records and evaluation documentation. Created and revised flowcharts for three procurement processes: Vendor Management System (VMS), direct transactions, and simple tenders.",
    tools: ["Microsoft Excel", "Microsoft Word", "Figma", "E-Procurement System"],
    outcomes: [
      "Improved accuracy and attention to detail through vendor data validation and procurement document management.",
      "Developed business process mapping and documentation skills through collaboration with the Procurement team."
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
    summary: "PATTERNA is a full-stack web application that classifies fabric types and quality into 10 classes using Deep Learning. The project compares multiple deep learning architectures and integrates the selected model into a web-based classification workflow with image preprocessing. The selected EfficientNetB0 model achieved 82% accuracy on the evaluated dataset. The application was developed using React.js and FastAPI, with PostgreSQL for data storage. It was deployed using Vercel for the frontend and Hugging Face Spaces for the backend, with Docker for containerization.",
    tools: ["React.js", "Python", "FastAPI", "TensorFlow/Keras", "PostgreSQL", "Docker", "Vercel", "Hugging Face Spaces"],
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
    summary: "WorshipFinder is a collaborative web application that helps users find places of worship across six religions in Indonesia. It features search and filtering by worship place type, typology, province, and regency. My contribution focused on frontend development and supporting search functionality, including API integration and data retrieval, to help users find relevant places of worship.",
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
    summary: "Effective Plan for UTBK is a web-based learning platform designed to support students in preparing for the university entrance examination. The application includes user registration, login, and session management, with PHP and MySQL supporting its web functionality. The platform provides learning resources for five subjects, including downloadable study materials, practice exercises, and YouTube tutorials.",
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
    documentation: [
      { src: "/senat-1.jpg", role: "Treasurer", caption: "ID Card" },
      { src: "/senat-2.jpeg", role: "FIK 2024/25 General Election Activities", caption: "Head of the Supervising Committee" },
      { src: "/senat-3.jpg", role: "Senat Day Out", caption: "Head of Consumption" },
      { src: "/senat-4.jpeg", role: "Legislative School", caption: "Master of Ceremony" },
      { src: "/senat-5.jpg", role: "Comparative Study with DPM FIB UI", caption: "Participant" },
      { src: "/senat-6.jpeg", role: "FIK 2023/24 General Election Activities", caption: "Participant" }
    ]
  },
  {
    tag: "class: organisasi",
    name: "Oh Be Shine",
    role: "Event Manager",
    period: "2024 - 2025",
    description: "Responsible for planning, organizing, and ensuring the smooth execution of events by leading a 4-person team and coordinating with 55 external parties. Managed 5 major programs, including monthly meetings, 2 bonding sessions, and 2 external webinars.",
    documentation: [
      { src: "/obs-1.png", caption: "Event Manager Certificate" },
      { src: "/obs-2.jpg", caption: "Best Divison" },
      { src: "/obs-3.png", caption: "Weekly Meeting with Event Team" },
      { src: "/obs-4.png", caption: "Event Team" },
      { src: "/obs-5.jpeg", caption: "External Webinar Event Moderator" }
    ]
  },
  {
    tag: "class: organisasi",
    name: "UKM Seni Tari Veteran Jakarta",
    role: "Traditional Dance Member", 
    period: "2022 - 2024",
    description: "Participated in regular training sessions, cultural performances at various university events, and dance competitions outside campus. Contributed as an event committee member by supporting planning, coordination, and event execution in collaboration with members across divisions.",
    documentation: [
      { src: "/stvj-1.jpeg", role: "STVJ Dance Competition Event 2024", caption: "Humas & LO Division" },
      { src: "/stvj-2.jpeg", role: "Dance Workshop 2023", caption: "Event Divison" },
      { src: "/stvj-3.jpeg", role: "Traditional Dance Competition 2024", caption: "Participant" },
      { src: "/stvj-4.jpeg", role: "STVJ Dance Competition Event 2023", caption: "Event Division" },
      { src: "/stvj-5.jpeg", role: "Traditional Dance Competition 2023", caption: "Participant" },
      { src: "/stvj-6.jpeg", role: "Perform at a Campus Internal Event", caption: "Participant" }
    ]
  },
  {
    tag: "class: organisasi",
    name: "Quran Reading and Writing Activities (Musholla Darussalam)",
    role: "Teaching Volunteer",
    period: "2023",
    description: "Taught Quran reading and writing to children and participated in Islamic activities at the local prayer hall. Helped coordinate children’s activities and events to create an active and enjoyable learning environment.",
    documentation: [
      { src: "/ngaji-1.jpeg"},
      { src: "/ngaji-2.jpeg"},
      { src: "/ngaji-3.jpeg"},
      { src: "/ngaji-4.jpg"},
      { src: "/ngaji-5.jpeg"}
    ]
  },
  {
    tag: "class: organisasi",
    name: "Ratoh Jaroe Extracurricular",
    role: "Chairperson",
    period: "2021 - 2022",
    description: "Led organizational meetings, arranged regular practice schedules, and coordinated 45 members to actively participate in various extracurricular activities and performances, strengthening team coordination and member discipline.",
    documentation: [
      { src: "/saman-1.png", caption: "Extracurricular Leader Certificate" },
      { src: "/saman-2.jpeg", caption: "Ratoh Jaroe Competition 2021" },
      { src: "/saman-3.jpeg", caption: "Team Documentation" },
      { src: "/saman-4.jpeg", caption: "Internal Member's Iftar Gathering" }
    ]
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
