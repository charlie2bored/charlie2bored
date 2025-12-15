# Charlie's Portfolio - Next.js & Vue.js Versions

A modern, minimalist portfolio website built with **Next.js (React)** and **Vue.js**, featuring Framer Motion animations and multiple pages.

## 🎨 Design Inspiration

Inspired by the [Palmer template](https://palmer-template.framer.website/) with ultra-minimalist design principles:
- Clean white/black color scheme
- Seamless section transitions
- Typography-focused layout
- Horizontal content flows
- Subtle animations

## 📁 Project Structure

```
charlie2bored/
├── src/                    # Next.js (React) version
│   ├── app/               # Next.js App Router
│   │   ├── page.tsx       # Home page
│   │   ├── experience/    # Experience page
│   │   ├── projects/      # Projects page
│   │   ├── shop/          # Shop page
│   │   ├── contact/       # Contact page
│   │   ├── layout.tsx     # Root layout
│   │   └── globals.css    # Global styles
│   └── components/        # React components
│       ├── Navigation.tsx
│       ├── Hero.tsx
│       ├── Experience.tsx
│       ├── Projects.tsx
│       ├── Shop.tsx
│       ├── Contact.tsx
│       └── Footer.tsx
├── vue-version/           # Vue.js version
│   └── vue-portfolio/     # Vue 3 project
│       ├── src/
│       │   ├── components/
│       │   ├── views/
│       │   ├── router/
│       │   ├── App.vue
│       │   └── main.js
│       └── README.md
└── README.md
```

## 🚀 Getting Started

### Next.js Version (React)

1. **Navigate to the root directory:**
   ```bash
   cd charlie2bored
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000)**

### Vue.js Version

1. **Navigate to Vue directory:**
   ```bash
   cd vue-version/vue-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

## 🛠️ Technologies Used

### Next.js Version
- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Animation library
- **ESLint** - Code linting

### Vue.js Version
- **Vue 3** - Progressive framework
- **Vue Router 4** - Official router
- **Vite** - Build tool
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling

## 📱 Pages & Features

### Both Versions Include:
- **Home** - Hero section with call-to-actions
- **Experience** - Work experience timeline
- **Projects** - Portfolio showcase with project cards
- **Shop** - Digital products listing
- **Contact** - Contact form and information

### Key Features:
- ✅ **Responsive Design** - Mobile-first approach
- ✅ **Smooth Animations** - Framer Motion (React) / CSS transitions (Vue)
- ✅ **Modern Routing** - Next.js App Router / Vue Router
- ✅ **TypeScript** - Type-safe development
- ✅ **SEO Optimized** - Meta tags and performance
- ✅ **Clean Architecture** - Component-based structure

## 🎯 Framework Comparison

| Feature | Next.js (React) | Vue.js |
|---------|----------------|--------|
| **Framework** | React 18 + Next.js 14 | Vue 3 |
| **Routing** | App Router (file-based) | Vue Router 4 |
| **Animations** | Framer Motion | CSS Transitions |
| **Build Tool** | Next.js (webpack) | Vite |
| **Components** | JSX + TSX | Single File Components |
| **State** | React Hooks | Vue Composition API |

## 🚀 Deployment

### Next.js Version
```bash
npm run build
npm start
# or deploy to Vercel, Netlify, etc.
```

### Vue.js Version
```bash
npm run build
npm run preview
# or deploy to Netlify, Vercel, etc.
```

## 🤝 Contributing

Both versions are fully functional and demonstrate modern web development practices. Choose the framework that best fits your needs!

## 📄 License

This project is open source and available under the MIT License.
