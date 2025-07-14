# Salimul Hashir - Cybersecurity Portfolio

A professional cybersecurity portfolio website built with React, featuring a modern dark theme with green accents and console-inspired design elements.

## 🚀 Features

- **Dark Theme**: Clean black background with green accents
- **Console Aesthetics**: Professional terminal-inspired styling
- **Responsive Design**: Works perfectly on desktop and mobile
- **Interactive Navigation**: Smooth scrolling with section indicators
- **Portfolio Sections**: Education, Experience, Skills, Projects, Blog, Contact
- **Static Blog**: Pre-loaded cybersecurity articles
- **Contact Form**: Frontend-only contact form with validation

## 📁 Project Structure

```
├── client/
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/          # Page components
│   │   ├── lib/            # Utilities and constants
│   │   └── hooks/          # Custom React hooks
│   └── index.html          # Main HTML file
├── shared/                 # Shared utilities
├── attached_assets/        # Static assets
└── README.md              # This file
```

## 🛠️ Technologies Used

- **React** - Frontend framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **Wouter** - Client-side routing
- **Radix UI** - UI components
- **Lucide React** - Icons

## 🌐 Deployment

This is a frontend-only application that can be deployed to any static hosting platform.

### Netlify (Recommended)

1. **Connect Your Repository**
   - Go to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub/GitLab repository

2. **Build Settings**
   - Build command: `npm run build:frontend`
   - Publish directory: `dist`

3. **Deploy**
   - Click "Deploy site"
   - Your site will be live at `https://your-site-name.netlify.app`

### Vercel

1. **Connect Repository**
   - Go to [Vercel](https://vercel.com)
   - Import your project from GitHub/GitLab

2. **Build Settings**
   - Framework: React
   - Build command: `npm run build:frontend`
   - Output directory: `dist`

3. **Deploy**
   - Click "Deploy"
   - Your site will be live at `https://your-project.vercel.app`

### GitHub Pages

1. **Enable GitHub Pages**
   - Go to your repository settings
   - Enable GitHub Pages from the "Actions" source

2. **Add GitHub Actions Workflow**
   Create `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages
   on:
     push:
       branches: [ main ]
   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - uses: actions/setup-node@v3
           with:
             node-version: '18'
         - run: npm install
         - run: npm run build:frontend
         - uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist
   ```

### Other Platforms

- **Firebase Hosting**: Use `firebase init` and deploy with `firebase deploy`
- **Surge.sh**: Run `npm install -g surge` then `surge dist/`
- **Cloudflare Pages**: Connect repository and set build command to `npm run build:frontend`

## 🔧 Development

To run the project locally:

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build:frontend
   ```

## 📝 Customization

### Personal Information

Update your personal details in `client/src/lib/constants.ts`:
- Education data
- Work experience
- Skills and technologies
- Projects
- Blog posts
- Contact information

### Styling

The color scheme is defined in `client/src/index.css`:
- `--cyber-green`: Main accent color
- `--cyber-black`: Background color
- Console styling classes

### Content

- **Blog Posts**: Add/edit articles in `BLOG_DATA` in constants file
- **Projects**: Update `PROJECTS_DATA` with your portfolio items
- **Skills**: Modify `SKILLS_DATA` with your technical abilities

## 🎨 Design Features

- **Matrix Rain Effect**: Animated background on hero section
- **Console Typography**: Monospace fonts for technical aesthetic
- **Smooth Scrolling**: Navigation with section indicators
- **Responsive Grid**: Mobile-first design approach
- **Interactive Elements**: Hover effects and transitions

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with 💚 by Salimul Hashir