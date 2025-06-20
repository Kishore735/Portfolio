# Kishore K - Portfolio Website

A modern, clean, and responsive personal portfolio website showcasing my skills, projects, and experience as a Computer Science student specializing in AI/ML and web development.

## 🌐 Live Demo

[View Live Portfolio](https://kishore735.github.io/Portfolio) <!-- Will be available after GitHub Pages deployment -->

## 🚀 Features

- **Modern Design**: Clean, minimalistic UI with smooth animations
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Interactive Elements**: Animated bubbles, hover effects, and smooth scrolling
- **Real Content**: All sections populated with actual resume data
- **Resume Download**: Direct PDF download functionality
- **LeetCode Integration**: Real-time coding statistics display

## 🛠️ Tech Stack

- **Frontend**: React 19 with Hooks
- **Build Tool**: Vite 6 for lightning-fast development
- **Styling**: Tailwind CSS 4 for utility-first styling
- **Animations**: CSS-in-JS animations and transitions
- **Icons**: Custom SVG icons and emojis

## 📖 Sections

- **Homepage**: Hero section with animated background elements
- **About**: Personal introduction, education, and background
- **Skills**: Technical skills with animated progress bars
- **Experience**: Work experience and internships
- **Work**: Portfolio projects from hackathons and personal work
- **LeetCode**: Coding achievements and problem-solving stats
- **Contact**: Professional contact information and social links

## 🎨 Design Features

- Clean, minimalistic design
- Smooth scroll navigation with active section highlighting
- Interactive animated bubbles on homepage
- Professional color scheme with yellow accents
- Mobile-responsive navigation menu
- Hover effects and smooth transitions

## 📦 Project Structure

```
src/
├── components/
│   ├── Homepage.jsx     # Landing page with hero section and navigation
│   ├── About.jsx        # Personal introduction and background
│   ├── Skills.jsx       # Technical skills with progress bars
│   ├── Experience.jsx   # Work experience and internships
│   ├── Work.jsx         # Portfolio projects showcase
│   ├── Leetcode.jsx     # Coding achievements and stats
│   └── Contact.jsx      # Contact information and social links
├── assets/
│   ├── profile.png      # Profile picture
│   ├── project images   # Project screenshots
│   └── Kishore_Resume.pdf
├── App.jsx              # Main app component with routing
├── index.css           # Global styles and Tailwind imports
└── main.jsx            # React entry point
```
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## 🎨 Customization

### Personal Information

Update the following files with your personal information:

- **Homepage.jsx**: Change name and tagline
- **About.jsx**: Update bio and social links
- **Experience.jsx**: Modify skills and experience levels
- **Work.jsx**: Replace with your actual projects
- **Leetcode.jsx**: Update your LeetCode profile URL and stats
- **Contact.jsx**: Change email and contact information

### Styling

- All components use Tailwind CSS utility classes
- Colors and spacing can be customized in `tailwind.config.js`
- Custom styles can be added to `src/index.css`

### Images

Replace placeholder images with your actual photos:
- Profile pictures
- Project screenshots
- Background images

## 🌐 Deployment

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment to any static hosting service.

### Deployment Options

- **Vercel**: Connect your GitHub repo for automatic deployments
- **Netlify**: Drag and drop the `dist` folder or connect GitHub
- **GitHub Pages**: Use GitHub Actions for automated deployment
- **Firebase Hosting**: Deploy with Firebase CLI

## 📱 Responsive Design

The portfolio is designed to work perfectly on:
- Desktop (1024px and above)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🔧 Development Guidelines

- Use functional React components with hooks
- Apply Tailwind CSS utility classes for styling
- Maintain semantic HTML structure
- Include proper accessibility attributes
- Test on multiple screen sizes
- Keep components modular and reusable

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

---

Built with ❤️ by Kishore+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
