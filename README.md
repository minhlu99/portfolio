# Lu Nguyen Minh - Portfolio

A modern, responsive portfolio website built with Next.js 14+, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional design with dark/light mode support
- **Responsive**: Fully responsive design that works on all devices
- **Animations**: Smooth animations using Framer Motion
- **Performance**: Optimized for speed with Next.js SSR and modern web practices
- **SEO Optimized**: Meta tags and structured data for better search visibility
- **Type Safe**: Built with TypeScript for better development experience

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: next-themes for dark/light mode
- **Deployment**: Ready for Vercel, Netlify, or any static hosting

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/                 # Next.js app directory
│   ├── components/          # Reusable components
│   │   ├── sections/        # Page sections (Hero, About, etc.)
│   │   ├── navbar.tsx       # Navigation component
│   │   ├── scroll-indicator.tsx
│   │   └── theme-provider.tsx
│   ├── lib/
│   │   └── constants.ts     # Global constants and configuration
│   └── styles/
├── public/                  # Static assets
└── ...config files
```

## ⚙️ Configuration

### Personal Information

All personal information is centralized in `src/lib/constants.ts`. Update this file to customize the portfolio with your information:

```typescript
export const PERSONAL_INFO = {
  // Basic Info
  name: "Your Full Name",
  firstName: "Your First Name",
  title: "Your Job Title",
  location: "Your Location",

  // Contact Information
  email: "your.email@example.com",
  phone: "your-phone-number",

  // Social Links
  github: {
    url: "https://github.com/yourusername",
    username: "yourusername",
  },
  linkedin: {
    url: "https://linkedin.com/in/yourprofile",
    username: "yourprofile",
  },

  // Professional Summary
  summary: "Your professional summary...",

  // Resume/CV
  resumeFile: "/YourName-CV.pdf",

  // Experience & Education
  yearsOfExperience: "X+",
  education: {
    degree: "Your Degree",
    university: "Your University",
    period: "YYYY - YYYY",
    gpa: "X.X",
  },

  // Current Status
  currentCompany: "Your Company",
  currentPosition: "Your Position",
  workPeriod: "Start Date - Present",
  workLocation: "Work Location",
};
```

### Site Configuration

Update site metadata and SEO settings:

```typescript
export const SITE_CONFIG = {
  title: `${PERSONAL_INFO.name} - ${PERSONAL_INFO.title}`,
  description: PERSONAL_INFO.summary,
  url: "https://your-domain.com",
  siteName: `${PERSONAL_INFO.name} Portfolio`,
  keywords: [
    // Add relevant keywords
  ],
};
```

## 🚀 Getting Started

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Update personal information**

   - Edit `src/lib/constants.ts` with your information
   - Replace `public/LuNguyenMinh-CV.pdf` with your resume
   - Update any project details in the components

4. **Run the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Customization

### Adding New Sections

1. Create a new component in `src/components/sections/`
2. Import and add it to `src/app/page.tsx`
3. Update navigation in `src/lib/constants.ts` if needed

### Styling

- Colors and themes are defined in `tailwind.config.ts`
- Global styles are in `src/app/globals.css`
- Component-specific styles use Tailwind classes

### Content Updates

- **Personal Info**: Update `src/lib/constants.ts`
- **Projects**: Edit `src/components/sections/projects.tsx`
- **Skills**: Edit `src/components/sections/skills.tsx`
- **Experience**: Edit `src/components/sections/experience.tsx`

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

```bash
npm run build
npm run export  # For static export if needed
```

## 📱 Responsive Design

The portfolio is fully responsive and tested on:

- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🎨 Theme Support

- **Light Mode**: Clean, professional appearance
- **Dark Mode**: Modern dark theme
- **System**: Automatically follows system preference
- **Toggle**: Manual theme switching available

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own use. If you make improvements that could benefit others, pull requests are welcome!

## 📞 Contact

- **Email**: lunguyenminh1@gmail.com
- **GitHub**: [@minhlu99](https://github.com/minhlu99)
- **LinkedIn**: [Lu Nguyen Minh](https://www.linkedin.com/in/l%E1%BB%AF-nguy%C3%AAn-minh-0258a9151/)

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
