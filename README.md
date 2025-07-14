# Portfolio Website - Complete User Guide

This is a complete guide for managing your cybersecurity portfolio website. No technical background required!

## Table of Contents
1. [Getting Started](#getting-started)
2. [How to Edit Content](#how-to-edit-content)
3. [Adding New Content](#adding-new-content)
4. [Customizing Colors & Appearance](#customizing-colors--appearance)
5. [Managing Blog Posts](#managing-blog-posts)
6. [Contact Form Setup](#contact-form-setup)
7. [Troubleshooting](#troubleshooting)

---

## Getting Started

### What You Have
- A modern portfolio website with cybersecurity theme
- Dark/light theme toggle
- Professional sections: Education, Experience, Projects, Skills, Blog, Contact
- Responsive design (works on mobile and desktop)
- Console-style animations and effects

### How to Run Your Website
1. Open the Replit project
2. Click the "Run" button (green play button)
3. Your website will open in a new tab

---

## How to Edit Content

### 1. Personal Information (Hero Section)

**File to edit:** `client/src/lib/constants.ts`

**What to change:**
- Your name (currently "salimul hashir")
- Your tagline/quote
- Your description paragraph

**How to do it:**
1. Open `client/src/lib/constants.ts`
2. Find the text you want to change
3. Edit it between the quotation marks
4. Save the file

### 2. Education Section

**File to edit:** `client/src/lib/constants.ts`

**What you can change:**
- University name
- Degree title
- Graduation year
- GPA
- Certification status

**Example:**
```javascript
export const EDUCATION_DATA = {
  university: "Your University Name",
  degree: "Your Degree Title",
  year: "2025",
  gpa: "8.5/10",
  certifications: "AWS Certified, CompTIA Security+"
};
```

### 3. Work Experience

**File to edit:** `client/src/lib/constants.ts`

**What you can change:**
- Company names
- Job titles
- Employment dates
- Job descriptions
- Skills used

**Example:**
```javascript
export const EXPERIENCE_DATA = [
  {
    company: "Your Company Name",
    position: "Your Job Title",
    duration: "Jan 2024 - Present",
    description: "What you did at this job...",
    skills: ["Skill 1", "Skill 2", "Skill 3"]
  }
];
```

### 4. Projects

**File to edit:** `client/src/lib/constants.ts`

**What you can change:**
- Project names
- Descriptions
- Technologies used
- Links (GitHub, demo, etc.)

**Example:**
```javascript
export const PROJECTS_DATA = [
  {
    title: "Your Project Name",
    description: "What your project does...",
    technologies: ["React", "Node.js", "PostgreSQL"],
    githubUrl: "https://github.com/yourusername/project",
    liveUrl: "https://yourproject.com"
  }
];
```

### 5. Skills

**File to edit:** `client/src/lib/constants.ts`

**What you can change:**
- Programming languages
- Security tools
- Operating systems
- Frameworks
- Technical skills
- Soft skills
- Databases

**Example:**
```javascript
export const SKILLS_DATA = {
  programmingLanguages: ["Python", "JavaScript", "C++"],
  securityTools: ["Wireshark", "Metasploit", "Burp Suite"],
  // ... add or remove skills as needed
};
```

---

## Adding New Content

### Adding a New Project
1. Open `client/src/lib/constants.ts`
2. Find `PROJECTS_DATA`
3. Add a new project object:
```javascript
{
  title: "New Project Name",
  description: "Description of what it does",
  technologies: ["Tech1", "Tech2", "Tech3"],
  githubUrl: "https://github.com/yourusername/newproject",
  liveUrl: "https://newproject.com"
}
```

### Adding a New Job Experience
1. Open `client/src/lib/constants.ts`
2. Find `EXPERIENCE_DATA`
3. Add a new experience object:
```javascript
{
  company: "New Company",
  position: "Your Position",
  duration: "Start Date - End Date",
  description: "What you did there...",
  skills: ["Skill1", "Skill2"]
}
```

### Adding New Skills
1. Open `client/src/lib/constants.ts`
2. Find `SKILLS_DATA`
3. Add skills to the appropriate category:
```javascript
programmingLanguages: ["Python", "JavaScript", "NEW_LANGUAGE"],
```

---

## Customizing Colors & Appearance

### Theme Colors
**File to edit:** `client/src/index.css`

**Current themes:**
- **Light theme:** White background, black text, green accents
- **Dark theme:** Black background, white text, green accents

**How to change colors:**
1. Open `client/src/index.css`
2. Find the `:root` section (light theme) or `.dark` section (dark theme)
3. Change the color values:

```css
:root {
  --cyber-green: hsl(120, 100%, 35%);  /* Main green color */
  --background: hsl(0, 0%, 98%);       /* Background color */
  --foreground: hsl(0, 0%, 10%);       /* Text color */
}
```

### Changing the Main Green Color
Find `--cyber-green` in both `:root` and `.dark` sections and change the values:
- `hsl(120, 100%, 35%)` = Green
- `hsl(240, 100%, 35%)` = Blue
- `hsl(300, 100%, 35%)` = Purple
- `hsl(0, 100%, 35%)` = Red

### Font Changes
**File to edit:** `client/src/index.css`

The website uses two fonts:
- **Console font:** JetBrains Mono (for headings and navigation)
- **Regular font:** System default (for content)

To change fonts, modify the `.console-heading` class:
```css
.console-heading {
  font-family: 'Your-Font-Name', monospace;
}
```

---

## Managing Blog Posts

### Adding Blog Posts
**File to edit:** `server/storage.ts`

1. Open `server/storage.ts`
2. Find the `initializeBlogPosts()` function
3. Add new blog posts:

```javascript
this.blogPosts.set(3, {
  id: 3,
  title: "Your Blog Post Title",
  content: "Your blog post content here...",
  excerpt: "Short description of the post",
  tags: ["tag1", "tag2", "tag3"],
  createdAt: new Date(),
  updatedAt: new Date()
});
```

### Editing Existing Blog Posts
1. Find the blog post you want to edit in `initializeBlogPosts()`
2. Change the `title`, `content`, `excerpt`, or `tags`
3. Save the file

---

## Contact Form Setup

### How the Contact Form Works
- Users fill out: Name, Email, Subject, Message
- Form data is stored in memory (resets when server restarts)
- You can view messages in the browser console (for development)

### Making the Form Send Real Emails
To receive actual emails, you'll need to:
1. Set up an email service (like SendGrid, Mailgun, or AWS SES)
2. Get API keys from the service
3. Add the email-sending code to `server/routes.ts`

**This requires some technical setup - consider asking a developer for help with this part.**

---

## Troubleshooting

### Common Issues

**1. Website won't load**
- Check if the "Run" button is green
- Try refreshing the page
- Check for errors in the console

**2. Changes don't appear**
- Make sure you saved the file
- Wait a few seconds for auto-reload
- Try refreshing the browser

**3. Text looks weird**
- Check for missing quotation marks
- Make sure commas are in the right places
- Look for typos in the file

**4. Colors aren't working**
- Check the color format: `hsl(0, 0%, 50%)`
- Make sure you're editing the right theme (`:root` for light, `.dark` for dark)

### File Structure (What Each File Does)

```
client/src/
├── components/          # Website sections (don't edit unless you know what you're doing)
├── lib/constants.ts     # YOUR CONTENT GOES HERE
├── index.css           # Colors and styling
└── pages/              # Page layouts

server/
├── storage.ts          # Blog posts and data storage
└── routes.ts           # Backend functionality
```

### Important Files to Edit:
- **`client/src/lib/constants.ts`** - All your personal content
- **`client/src/index.css`** - Colors and styling
- **`server/storage.ts`** - Blog posts

### Files to NOT Edit (unless you're a developer):
- `package.json`
- `vite.config.ts`
- `tailwind.config.ts`
- Most files in `client/src/components/`

---

## Getting Help

### If Something Breaks:
1. Check the console for error messages
2. Make sure all quotation marks and commas are correct
3. Try reverting your last change
4. Use the "History" feature in Replit to go back to a working version

### Need More Features?
Consider hiring a developer to add:
- Real email functionality
- Database storage
- Admin panel for easier editing
- More interactive features
- Advanced styling

---

## Quick Reference

### Most Common Edits:
1. **Change your name:** Edit the hero section in `constants.ts`
2. **Add a project:** Add to `PROJECTS_DATA` in `constants.ts`
3. **Update skills:** Edit `SKILLS_DATA` in `constants.ts`
4. **Change colors:** Edit color values in `index.css`
5. **Add blog post:** Add to `initializeBlogPosts()` in `storage.ts`

### Tips:
- Always save files after editing
- Test changes by viewing your website
- Keep backups of working versions
- Don't edit files you don't understand
- When in doubt, ask for help!

---

*This guide covers the basics. For advanced customization, consider working with a web developer.*