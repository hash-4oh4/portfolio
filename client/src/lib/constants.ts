export const EDUCATION_DATA = {
  degree: {
    title: "Bachelor of Engineering",
    field: "Computer Science and Engineering (Cyber Security)",
    school: "Dr. Mahalingam College of Engineering and Technology",
    duration: "Expected: May 2026",
    gpa: "8.00/10 (Till 5th Sem)",
    coursework: ["Network Security", "System Hardening", "Penetration Testing", "Linux Administration"]
  },
  certifications: [
    { name: "Certification in Cybersecurity – ISC2", status: "Earned", statusColor: "text-green-400" },
    { name: "Google Cybersecurity Professional Certificate", status: "Earned", statusColor: "text-green-400" },
    { name: "Certified System Administrator – ServiceNow", status: "Earned", statusColor: "text-green-400" },
    { name: "Linguaskill Business English Certificate – Cambridge", status: "Earned", statusColor: "text-green-400" }
  ]
};

export const EXPERIENCE_DATA = [
  {
    title: "Corporate Security Intern",
    company: "LTIMindtree",
    duration: "July 2024 - August 2024",
    responsibilities: [
      "Observed and learned from the Corporate Security Department's daily operations",
      "Gained insight into SIEM tools and network endpoint configurations",
      "Studied the configuration processes for firewalls, routers, and intrusion prevention systems (IPS)",
      "Learned about secure system administration and network device hardening",
      "Researched vulnerability assessment techniques and remediation strategies",
      "Participated in security audits as an observer, understanding compliance requirements",
      "Monitored emerging cybersecurity threats and contributed reported observation to the team"
    ],
    technologies: ["SIEM", "Firewalls", "IPS", "Network Security"]
  },
  {
    title: "Software Support Apprenticeship",
    company: "Stark Tech",
    duration: "April 2023 - June 2023",
    responsibilities: [
      "Integrated software with IoT devices and deployed IoT and robotic products",
      "Enhanced system efficiency through software and hardware optimization",
      "Developed and tested APIs for device communication and data handling",
      "Provided technical documentation and user guides for internal use"
    ],
    technologies: ["IoT", "APIs", "Software Integration"]
  },
  {
    title: "Technical Team Head",
    company: "Encryptix (Department Association of Cyber Security)",
    duration: "Current Position",
    responsibilities: [
      "Led Technofete 2025 as the Overall Coordinator, managing cross-functional teams",
      "Streamlined event operations and ensured successful and timely execution of all activities",
      "Led technical initiatives, including workshops and events, fostering innovation and teamwork"
    ],
    technologies: []
  }
];

export const PROJECTS_DATA = [
  {
    title: "Custom Linux OS Optimized for Secure Framework",
    description: "Built a customized Linux operating system from the ground up with LFS (Linux from Scratch) as model. Implemented advanced security modules and hardened against common vulnerabilities.",
    technologies: ["Linux", "LFS", "SELinux", "System Hardening", "Security Modules"],
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    github: "#",
    demo: "#"
  },
  {
    title: "Secure Chat Application Using End-to-End Encryption",
    description: "Developed a secure messaging platform using the MERN stack with end-to-end encryption. Enabled voice, video communication, and secure file sharing with robust encryption protocols.",
    technologies: ["MERN Stack", "AES-256", "RSA", "Multi-Factor Authentication"],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    github: "#",
    demo: "#"
  },
  {
    title: "Chatbot for Mining Industry Regulations",
    description: "Created a chatbot using transformer technology to interpret mining industry regulations. Developed for Smart India Hackathon (SIH) 2023, addressing real-time industry problems.",
    technologies: ["Transformer Technology", "NLP", "Python", "Machine Learning"],
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    github: "#",
    demo: "#"
  }
];

export const SKILLS_DATA = {
  programmingLanguages: [
    "Python", "C++", "Java", "Bash", "HTML", "PHP"
  ],
  securityTools: [
    "Wireshark", "Metasploit", "Burp Suite", "FTK Imager", "Autopsy", 
    "Splunk", "Hypervisor", "SIEM Tools", "Firewalls", "IPS"
  ],
  operatingSystems: [
    "Linux", "Windows", "Android", "macOS"
  ],
  frameworks: [
    "MERN Stack", "React", "Node.js", "Express", "MongoDB"
  ],
  technicalSkills: [
    "Cybersecurity", "Linux Administration", "System Hardening", 
    "Penetration Testing", "Networking", "Data Structures and Algorithms"
  ],
  databases: [
    "MySQL", "MongoDB"
  ],
  softSkills: [
    "Leadership", "Communication", "Problem-Solving", "Time Management", 
    "Attention to Detail", "Conflict Resolution", "Business English"
  ]
};

// Static blog data - no backend needed
export const BLOG_DATA = [
  {
    id: 1,
    title: "Understanding Zero-Day Vulnerabilities",
    excerpt: "An in-depth analysis of zero-day vulnerabilities, their impact on cybersecurity, and how organizations can prepare for unknown threats.",
    content: "Zero-day vulnerabilities represent one of the most significant challenges in cybersecurity today. These security flaws exist in software but are unknown to the vendor and security community, making them particularly dangerous. In this comprehensive guide, we'll explore what zero-day vulnerabilities are, how they're discovered and exploited, and most importantly, how organizations can protect themselves against these unknown threats.",
    date: "December 15, 2024",
    tags: ["Security", "Vulnerability", "Zero-Day"],
    createdAt: new Date("2024-12-15"),
    updatedAt: new Date("2024-12-15")
  },
  {
    id: 2,
    title: "Implementing Perfect Forward Secrecy",
    excerpt: "A practical guide to implementing perfect forward secrecy in web applications to protect against future cryptographic breaches.",
    content: "Perfect Forward Secrecy (PFS) is a cryptographic property that ensures session keys will not be compromised even if long-term secret keys are compromised. This article provides a comprehensive guide to implementing PFS in modern web applications, covering both theoretical concepts and practical implementation strategies.",
    date: "December 10, 2024",
    tags: ["Cryptography", "Security", "Web Security"],
    createdAt: new Date("2024-12-10"),
    updatedAt: new Date("2024-12-10")
  },
  {
    id: 3,
    title: "My Journey Learning Ethical Hacking",
    excerpt: "Sharing my experience learning ethical hacking, from basic concepts to advanced penetration testing techniques and certifications.",
    content: "Learning ethical hacking has been one of the most rewarding aspects of my cybersecurity journey. In this post, I'll share my experience, the resources I used, challenges I faced, and the certifications I pursued. Whether you're just starting out or looking to advance your skills, this guide will provide valuable insights into the world of ethical hacking.",
    date: "December 5, 2024",
    tags: ["Ethical Hacking", "Learning", "Career"],
    createdAt: new Date("2024-12-05"),
    updatedAt: new Date("2024-12-05")
  },
  {
    id: 4,
    title: "Securing Cloud Infrastructure with Terraform",
    excerpt: "Best practices for securing cloud infrastructure using Infrastructure as Code principles with Terraform and automated security scanning.",
    content: "As organizations increasingly adopt cloud infrastructure, securing these environments becomes paramount. This article explores how to implement security best practices using Terraform, Infrastructure as Code (IaC) principles, and automated security scanning tools to create robust, secure cloud deployments.",
    date: "November 28, 2024",
    tags: ["Cloud Security", "DevOps", "Infrastructure"],
    createdAt: new Date("2024-11-28"),
    updatedAt: new Date("2024-11-28")
  }
];
