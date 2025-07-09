# Lu Nguyen Minh - Portfolio

A modern, responsive portfolio website built with Next.js 15+, TypeScript, and Tailwind CSS featuring smooth animations, contact functionality, and optimized performance.

## 🚀 Features

- **Modern Design**: Clean, professional design with dark/light mode support
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Animations**: Advanced animations using Framer Motion with intersection observers
- **Contact Form**: Functional contact form with email integration using Resend
- **Performance Optimized**: Next.js SSR, Turbopack in development, and modern web practices
- **Type Safe**: Built with TypeScript and Zod validation for better development experience
- **SEO Optimized**: Comprehensive meta tags and structured data for better search visibility
- **Accessibility**: ARIA labels and semantic HTML for better accessibility

## 🛠️ Tech Stack

### Core Framework

- **Framework**: Next.js 15+ (App Router) with Turbopack
- **Language**: TypeScript
- **Runtime**: React 19

### Styling & UI

- **Styling**: Tailwind CSS
- **Icons**: Lucide React, Radix UI Icons, React Icons
- **Animations**: Framer Motion
- **Theme**: next-themes for dark/light mode toggle

### Functionality

- **Form Handling**: React Hook Form with Zod validation
- **Email Service**: Resend for contact form submissions
- **Scroll Detection**: React Intersection Observer for animations
- **State Management**: React built-in state management

### Development & Quality

- **Linting**: ESLint with Next.js configuration
- **Type Checking**: TypeScript 5+
- **Build Tool**: Next.js with Turbopack (development)

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── [locale]/          # Internationalization setup (future)
│   │   ├── api/               # API routes
│   │   │   └── contact/       # Contact form endpoint
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   ├── not-found.tsx      # 404 page
│   │   └── page.tsx           # Home page
│   ├── components/            # Reusable components
│   │   ├── sections/          # Page sections
│   │   │   ├── about.tsx      # About section
│   │   │   ├── contact.tsx    # Contact form section
│   │   │   ├── experience.tsx # Work experience
│   │   │   ├── hero.tsx       # Hero/landing section
│   │   │   ├── projects.tsx   # Projects showcase
│   │   │   └── skills.tsx     # Skills display
│   │   ├── motion/            # Animation components
│   │   ├── navbar.tsx         # Navigation component
│   │   ├── scroll-indicator.tsx # Scroll progress indicator
│   │   ├── theme-provider.tsx # Theme context provider
│   │   ├── theme-status.tsx   # Theme status component
│   │   └── client-only.tsx    # Client-side only wrapper
│   ├── hooks/                 # Custom React hooks
│   │   └── use-theme-detection.ts # Theme detection hook
│   ├── lib/                   # Utility functions and constants
│   │   ├── constants.ts       # Global constants and configuration
│   │   └── env.ts             # Environment utilities
│   └── i18n/                  # Internationalization (planned)
│       └── messages/          # Translation files
├── public/                    # Static assets
│   ├── *.svg                  # Icon files
│   └── 404.html               # Custom 404 page
└── ...config files            # Configuration files
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

  // Resume/CV (can be a file path or external URL)
  resumeFile: "/YourName-CV.pdf", // or Google Drive link

  // Experience & Education
  yearsOfExperience: "X+", // Dynamically calculated or static
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

### Site Configuration & SEO

The site automatically generates SEO metadata from your personal information:

```typescript
export const SITE_CONFIG = {
  title: `${PERSONAL_INFO.name} - ${PERSONAL_INFO.title}`,
  description: PERSONAL_INFO.summary,
  url: getBaseUrl(), // Automatically detects environment
  siteName: `${PERSONAL_INFO.name} Portfolio`,
  keywords: [
    // Comprehensive keywords for better SEO
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    // Add your relevant keywords
  ],
};
```

### Contact Form Setup

To enable the contact form functionality:

1. **Set up Resend** (recommended):

   ```bash
   # Get your API key from https://resend.com
   # Add to your environment variables
   RESEND_API_KEY=your_resend_api_key
   ```

2. **Update the contact API** in `src/app/api/contact/route.ts`:
   ```typescript
   // Configure your email settings
   const fromEmail = "your-portfolio@yourdomain.com";
   const toEmail = "your.email@example.com";
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

3. **Set up environment variables**

   ```bash
   # Create .env.local file
   cp .env.example .env.local

   # Add your Resend API key for contact form
   RESEND_API_KEY=your_resend_api_key
   ```

4. **Update personal information**
   - Edit `src/lib/constants.ts` with your information
   - Replace resume file/link in the constants
   - Update project details in `src/components/sections/projects.tsx`
   - Customize skills in `src/components/sections/skills.tsx`

5. **Run the development server**

   ```bash
   npm run dev
   ```

   > Uses Turbopack for faster development builds

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Customization Guide

### Adding New Sections

1. Create a new component in `src/components/sections/`
2. Import and add it to `src/app/page.tsx`
3. Update navigation in `src/lib/constants.ts` (NAVIGATION array)

### Modifying Animations

- Animation components are in `src/components/motion/`
- Intersection observer hooks control when animations trigger
- Framer Motion variants can be customized for different effects

### Styling Customization

- **Colors & Theme**: `tailwind.config.ts` and `src/app/globals.css`
- **Dark/Light Mode**: Handled by `next-themes` and `theme-provider.tsx`
- **Typography**: Tailwind utility classes throughout components
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

### Content Management

- **Personal Info**: `src/lib/constants.ts`
- **Projects**: `src/components/sections/projects.tsx`
- **Skills**: `src/components/sections/skills.tsx`
- **Experience**: `src/components/sections/experience.tsx`
- **About**: `src/components/sections/about.tsx`

### Contact Form Customization

- **API Endpoint**: `src/app/api/contact/route.ts`
- **Form Component**: `src/components/sections/contact.tsx`
- **Validation**: Zod schemas for type-safe form validation
- **Email Provider**: Currently configured for Resend, easily adaptable

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard:
   - `RESEND_API_KEY` (if using contact form)
4. Deploy automatically

### Other Platforms

```bash
# Build the project
npm run build

# Start production server
npm run start

# For static export (if needed)
npm run build && npm run export
```

### Environment Variables

Required for production:

```env
RESEND_API_KEY=your_resend_api_key  # For contact form
```

## 📱 Responsive Design

Fully responsive across all device sizes:

- **Desktop**: 1920px+ (Full layout with animations)
- **Laptop**: 1024px - 1919px (Optimized spacing)
- **Tablet**: 768px - 1023px (Adapted layouts)
- **Mobile**: 320px - 767px (Mobile-first design)

## ⚡ Performance Features

- **Server-Side Rendering**: Next.js App Router
- **Turbopack**: Fast development builds
- **Code Splitting**: Automatic with Next.js
- **Image Optimization**: Next.js built-in optimization
- **Static Generation**: For improved loading speeds
- **Modern JavaScript**: ES2022+ features with broad compatibility

## 🎨 Theme Support

- **Light Mode**: Professional and clean appearance
- **Dark Mode**: Modern dark theme with proper contrast
- **System Detection**: Automatically follows OS preference
- **Manual Toggle**: Theme switcher in navigation
- **Persistent**: Remembers user preference across sessions

## 🔒 Contact Form Security

- **Input Validation**: Zod schema validation on both client and server
- **Rate Limiting**: Prevents spam submissions
- **Email Verification**: Validates email format and deliverability
- **XSS Protection**: Sanitized inputs and secure data handling

## 📊 SEO & Analytics Ready

- **Comprehensive Meta Tags**: Title, description, keywords, Open Graph
- **Structured Data**: JSON-LD for better search engine understanding
- **Sitemap**: Automatically generated by Next.js
- **Analytics Ready**: Easy integration with Google Analytics, Vercel Analytics

## 🧪 Development Tools

```bash
# Development with Turbopack
npm run dev

# Production build
npm run build

# Linting
npm run lint

# Type checking
npx tsc --noEmit
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own use. If you make improvements that could benefit others, pull requests are welcome!

### Contribution Guidelines

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request with a clear description

## 📞 Contact & Support

- **Email**: lunguyenminh1@gmail.com
- **GitHub**: [@minhlu99](https://github.com/minhlu99)
- **LinkedIn**: [Lu Nguyen Minh](https://www.linkedin.com/in/l%E1%BB%AF-nguy%C3%AAn-minh-0258a9151/)

## 🔧 Troubleshooting

### Common Issues

1. **Contact form not working**: Check RESEND_API_KEY environment variable
2. **Animations not smooth**: Ensure `framer-motion` is properly installed
3. **Theme toggle issues**: Clear browser localStorage and try again
4. **Build failures**: Check TypeScript errors with `npx tsc --noEmit`

### Getting Help

- Check the [GitHub Issues](https://github.com/minhlu99/portfolio/issues)
- Review the documentation in each component file
- Contact the maintainer for specific questions

---

Built with ❤️ using Next.js 15, TypeScript, Tailwind CSS, and modern web technologies
