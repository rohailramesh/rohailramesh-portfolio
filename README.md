# Chapter & Verse - Interactive Portfolio

A Vue 3 portfolio website with a creative bookshop metaphor, ported from the React version.

## 🎨 Features

- **Interactive Hero** - Animated shop sign with letter-by-letter animation
- **Shop Map** - Navigation directory with 6 themed aisles
- **About Section** - Staff pick card with bio and social links
- **Experience Shelf** - Interactive book spines revealing work history
- **Projects Gallery** - Book covers with expandable synopses
- **Skills Index** - Genre-organized skill books on shelves
- **Resume Card** - Library card with animated stamp effect
- **Contact Guestbook** - Notebook-style contact form

## 🛠️ Tech Stack

- **Vue 3.5** - Composition API with `<script setup>`
- **TypeScript** - Type safety
- **Vite 8** - Lightning-fast dev server
- **Tailwind CSS 4** - Utility-first styling
- **@vueuse/motion** - Vue 3 animations
- **Lucide Vue** - Icon library
- **Radix Vue** - Accessible UI primitives

## 📦 Installation

```bash
npm install
```

## 🚀 Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🏗️ Build

```bash
npm run build
```

## 📝 Key Differences from React Version

1. **Composition API** - Using Vue 3's `<script setup>` instead of React hooks
2. **v-motion directive** - Instead of Framer Motion
3. **Vue Transitions** - Built-in `<Transition>` component for animations
4. **Template syntax** - Vue templates instead of JSX
5. **Reactive refs** - Using `ref()` instead of `useState()`

## 🎭 Sections

- **Hero** (`/`) - Animated bookshop entrance
- **Map** (`#map`) - Navigation guide
- **About** (`#about`) - Personal introduction
- **Experience** (`#experience`) - Career timeline
- **Projects** (`#projects`) - Featured work
- **Skills** (`#skills`) - Technical expertise
- **Resume** (`#resume`) - Downloadable CV
- **Contact** (`#contact`) - Get in touch

## 📄 License

This portfolio is based on the original Figma Make project.
