<script setup lang="ts">
import { ref } from 'vue'
import { Download, ExternalLink, Github, Linkedin, Mail, ArrowUp, Eye } from 'lucide-vue-next'

// ─── Data ─────────────────────────────────────────────────────────────────────

const EXPERIENCE = [
  {
    id: 'marys-meals',
    company: "Mary's Meals",
    role: 'Web & Applications Developer',
    period: '2025 – Present',
    spineColor: '#1F3D2F',
    labelColor: '#A8C5A0',
    height: 195,
    chapters: [
      'Building responsive, multi-language supporter journeys using Vue.js and modern TypeScript for a global audience across devices',
      'Designing intuitive donation flows, story pages and regional content to improve accessibility and engagement',
      'Integrating Stripe, Algolia, Google Analytics and OpenAI features to support data-informed improvements',
      'Contributing to digital transformation initiatives supporting over 3 million children daily',
    ],
  },
  {
    id: 'freelance',
    company: 'Freelance',
    role: 'Web Developer',
    period: '2024 – 2025',
    spineColor: '#6B1F2A',
    labelColor: '#F0B8C0',
    height: 178,
    chapters: [
      'Developed user-friendly web applications with a strong frontend focus using modern tech stacks',
      'Built a custom portfolio site for a professional artist with CMS-driven content and cross-device layouts',
      'Designed responsive UI components with ShadCN and TypeScript for a smoother, more accessible experience',
      'Integrated Stripe for bookings and Cloudinary for media handling, driving a 20% increase in event bookings',
    ],
  },
  {
    id: 'qmul',
    company: 'Queen Mary University of London',
    role: 'Computer Science Teaching Assistant',
    period: '2023 – 2025',
    spineColor: '#1A2B4A',
    labelColor: '#A8BCE8',
    height: 162,
    chapters: [
      'Mentored 7 student teams through full 12-week SDLC cycles to build well-being apps for FDM Group',
      'Guided teams on frontend design with React and React Native, achieving a 95% project completion rate',
      'Led hands-on lab sessions for 200+ students across 5 core modules',
      'Achieved a 97% issue resolution rate through clear, engaging explanations of programming concepts',
    ],
  },
  {
    id: 'mathtutor',
    company: 'MyTutor',
    role: 'Maths Tutor',
    period: '2022 – 2025',
    spineColor: '#4a1a3c',
    labelColor: '#A8BCE8',
    height: 122,
    chapters: [
      'Facilitated diverse data driven and tailored teaching strategies for over 200 one-on-one and group tutoring sessions.',
      'Provided detailed and organised explanations, ensuring clarity in remote teaching environment for over 10,000 minutes',
    ],
  },
  {
    id: 'techanddataintern',
    company: 'Lloyds Banking Group',
    role: 'Start Your Journey 2023 Technology & Data Intern',
    period: '2023',
    spineColor: '#4a1a20',
    labelColor: '#A8BCE8',
    height: 122,
    chapters: [
      'Analysed extensive fraud detection dataset, contributing to 7% increase in detection accuracy, aligning with industry improvements from 85% to 92% in a bank simulation exercise.',
      'Collaborated in a 4-day virtual hackathon, developing innovative tech solutions and improving problem solving skills.',
    ],
  },
  {
    id: 'techandengintern',
    company: 'Rolls Royce',
    role: 'I Accelerator Technology & Engineering Intern',
    period: '2022 – 2025',
    spineColor: '#4a1a3c',
    labelColor: '#A8BCE8',
    height: 180,
    chapters: [
      'Designed and implemented a remote maintenance solution for urban mobility aircraft reducing average maintenance time by 25% per cycle.',
      'Presented a technical innovation proposal to senior engineer panel, achieving runner-up position among 10 competitive projects',
    ],
  },
  {
    id: 'technologystreamintern',
    company: 'Bright Network',
    role: 'Technology Stream Intern',
    period: '2022',
    spineColor: '#231a4a',
    labelColor: '#A8BCE8',
    height: 135,
    chapters: [
      'Optimised routing and scheduling algorithms using breadth-first and depth-first search techniques, leading to a 10% improvement in delivery efficiency for simulated logistics scenarios.',
      'Completed a work sample project, demonstrating thorough technical skills and problem-solving abilities.',
    ],
  },
  {
    id: 'itfloorwalker',
    company: 'Ideal Health & NHS Foundation Trust',
    role: 'IT Support Analyst (Floorwalker)',
    period: '2022',
    spineColor: '#4a301a',
    labelColor: '#A8BCE8',
    height: 150,
    chapters: [
      'Trained 100+ healthcare staff on EPR system, reducing implementation time from 6 to 4.5 weeks.',
      'Resolved 20+ software bugs during EPR system launch, improving user satisfaction from 70% to 92%',
    ],
  },
]

const DECORATIVE_SPINES = [
  { color: '#3A2A1A', height: 158, width: 22 },
  { color: '#2A3A2A', height: 205, width: 18 },
  { color: '#3A1A3A', height: 148, width: 26 },
  { color: '#4A3018', height: 172, width: 20 },
  { color: '#1A3A3A', height: 190, width: 16 },
  { color: '#3A3A1A', height: 160, width: 24 },
]

const PROJECTS = [
  {
    id: 'period-ml',
    title: 'Period Poverty ML',
    genre: 'Health Tech',
    coverBg: '#1F3D2F',
    accentColor: '#A8C5A0',
    synopsis:
      'Machine learning app implementing an LSTM model for preventing luteal phase defect, miscarriages and infertility, while overcoming period product poverty amongst academic institutions — achieving 80% accuracy.',
    stack: ['Python', 'React Native', 'Flask', 'Supabase', 'TensorFlow', 'PostgreSQL'],
    year: '2024',
  },
  {
    id: 'globalstay',
    title: 'GlobalStay',
    genre: 'Consultancy Platform',
    coverBg: '#6B1F2A',
    accentColor: '#F0B8C0',
    synopsis:
      'Cross-platform accommodation and consultant networking application built for FDM Group. Led a 7-member team through a 12-week sprint cycle, earning the Best Software Engineering Award.',
    stack: ['Next.js', 'React Native', 'Node.js', 'Redis', 'Tailwind CSS', 'Redux'],
    year: '2024',
  },
  {
    id: 'artist-portfolio',
    title: 'Artist Portfolio',
    genre: 'Creative Tools',
    coverBg: '#1A2B4A',
    accentColor: '#A8BCE8',
    synopsis:
      'Custom portfolio site for a professional artist featuring intuitive event browsing, CMS-driven content management and seamless cross-device layouts, contributing to a 20% increase in event bookings.',
    stack: ['TypeScript', 'ShadCN', 'Stripe', 'Cloudinary'],
    year: '2025',
  },
  {
    id: 'supporter-platform',
    title: 'Supporter Platform',
    genre: 'Non-Profit',
    coverBg: '#4A3410',
    accentColor: '#D4A840',
    synopsis:
      "Multilingual supporter journeys for Mary's Meals, with accessible donation flows, story pages and regional content that drive engagement for a charity serving over 3 million children daily.",
    stack: ['Vue.js', 'TypeScript', 'Stripe', 'Algolia', 'OpenAI API'],
    year: '2025',
  },
]

const SKILLS: Record<string, { title: string; color: string; height: number }[]> = {
  Languages: [
    { title: 'JavaScript', color: '#1E3A2F', height: 128 },
    { title: 'TypeScript', color: '#1A2B48', height: 142 },
    { title: 'PHP', color: '#262626', height: 118 },
    { title: 'Python', color: '#1A3A38', height: 136 },
    { title: 'Java', color: '#3A1E1E', height: 120 },
    { title: 'SQL / NoSQL', color: '#2A1E3A', height: 132 },
  ],
  'Web, AI & Integrations': [
    { title: 'Vue.js', color: '#1E3A24', height: 130 },
    { title: 'React / Next.js', color: '#1A3030', height: 140 },
    { title: 'React Native', color: '#1A2448', height: 126 },
    { title: 'REST APIs', color: '#3A1A2A', height: 120 },
    { title: 'i18n', color: '#3A1A1A', height: 114 },
    { title: 'OpenAI API', color: '#1A2A3A', height: 134 },
    { title: 'Stripe', color: '#1A1E2A', height: 122 },
    { title: 'Algolia', color: '#241A3A', height: 128 },
  ],
  'Cloud & Product Tools': [
    { title: 'AWS', color: '#3A1A30', height: 124 },
    { title: 'CI/CD', color: '#3A2410', height: 118 },
    { title: 'Git', color: '#1A1A1A', height: 116 },
    { title: 'Linux', color: '#1E1A3A', height: 122 },
    { title: 'Jest', color: '#1A3018', height: 132 },
    { title: 'GA4', color: '#2A2818', height: 118 },
    { title: 'Figma', color: '#1A2A2A', height: 126 },
  ],
}

// ─── State ────────────────────────────────────────────────────────────────────

const openExp = ref<string | null>(null)
const openProj = ref<string | null>(null)
const stamped = ref(false)
const submitted = ref(false)
const guestbook = ref({ name: '', email: '', message: '' })
const mobileMenuOpen = ref(false)
const showScrollTop = ref(false)

const shopName = 'ROHAIL RAMESH'
const letters = shopName.split('')

// ─── Methods ──────────────────────────────────────────────────────────────────

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  mobileMenuOpen.value = false
}

function handleFormSubmit() {
  // Clear the form after a short delay to allow submission to complete
  setTimeout(() => {
    guestbook.value = { name: '', email: '', message: '' }
  }, 100)
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

// Show scroll to top button when user scrolls down
if (typeof window !== 'undefined') {
  window.addEventListener('scroll', () => {
    showScrollTop.value = window.scrollY > 500
  })
}
</script>

<template>
  <div class="min-h-screen overflow-x-hidden" :style="{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }">
    <!-- ── STICKY NAV ──────────────────────────────────────────────────────── -->
    <nav
      class="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-3 border-b border-border"
      :style="{
        backdropFilter: 'blur(16px)',
        backgroundColor: 'rgba(242, 236, 216, 0.88)',
      }"
    >
      <button
        @click="window.scrollTo({ top: 0, behavior: 'smooth' })"
        class="text-sm font-bold tracking-widest uppercase hover:opacity-60 transition-opacity"
        :style="{ fontFamily: 'var(--font-display)', letterSpacing: '0.15em' }"
      >
        RR
      </button>
      
      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center gap-7">
        <button
          v-for="section in ['about', 'experience', 'projects', 'skills', 'contact']"
          :key="section"
          @click="scrollTo(section)"
          class="text-xs uppercase tracking-widest opacity-50 hover:opacity-100 transition-opacity"
          :style="{ fontFamily: 'var(--font-label)' }"
        >
          {{ section }}
        </button>
        <button
          @click="scrollTo('resume')"
          class="text-xs uppercase tracking-widest px-3 py-1.5 border border-border hover:border-foreground/40 transition-all"
          :style="{ fontFamily: 'var(--font-label)' }"
        >
          Checkout →
        </button>
      </div>

      <!-- Mobile Menu Button -->
      <button
        @click="mobileMenuOpen = !mobileMenuOpen"
        class="md:hidden flex flex-col gap-1 w-6 h-6 items-center justify-center"
        :aria-label="mobileMenuOpen ? 'Close menu' : 'Open menu'"
      >
        <span
          class="w-5 h-0.5 bg-current transition-all"
          :class="mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''"
        />
        <span
          class="w-5 h-0.5 bg-current transition-all"
          :class="mobileMenuOpen ? 'opacity-0' : ''"
        />
        <span
          class="w-5 h-0.5 bg-current transition-all"
          :class="mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''"
        />
      </button>
    </nav>

    <!-- Mobile Menu Dropdown -->
    <Transition
      enter-active-class="transition-all duration-200"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-150"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="mobileMenuOpen"
        class="fixed top-[49px] left-0 right-0 z-40 md:hidden border-b border-border"
        :style="{
          backdropFilter: 'blur(16px)',
          backgroundColor: 'rgba(242, 236, 216, 0.95)',
        }"
      >
        <div class="flex flex-col py-2">
          <button
            v-for="section in ['about', 'experience', 'projects', 'skills', 'contact']"
            :key="section"
            @click="scrollTo(section)"
            class="text-left px-6 py-3 text-sm uppercase tracking-widest opacity-70 hover:opacity-100 transition-opacity"
            :style="{ fontFamily: 'var(--font-label)' }"
          >
            {{ section }}
          </button>
          <button
            @click="scrollTo('resume')"
            class="text-left px-6 py-3 text-sm uppercase tracking-widest opacity-70 hover:opacity-100 transition-opacity border-t border-border/30 mt-2 pt-4"
            :style="{ fontFamily: 'var(--font-label)' }"
          >
            Checkout →
          </button>
        </div>
      </div>
    </Transition>

    <!-- ── HERO ────────────────────────────────────────────────────────────── -->
    <section
      class="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-14"
      :style="{ backgroundColor: '#0B1A11' }"
    >
      <!-- Warm floor glow -->
      <div
        class="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
        :style="{
          width: '700px',
          height: '280px',
          background: 'radial-gradient(ellipse at 50% 100%, rgba(196,146,43,0.18) 0%, transparent 70%)',
        }"
      />
      <!-- Window panes -->
      <div class="absolute inset-0 pointer-events-none flex items-center justify-center opacity-[0.03]">
        <div class="grid grid-cols-2 gap-4" :style="{ width: '340px', height: '280px' }">
          <div v-for="i in 4" :key="i" class="border border-white rounded-sm" />
        </div>
      </div>

      <!-- Shop sign board -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 800, ease: 'easeOut' } }"
        class="relative mb-10 px-8 sm:px-14 py-8 sm:py-10 text-center mx-4"
        :style="{
          background: 'linear-gradient(150deg, #1E1208 0%, #120C04 100%)',
          border: '2px solid #5A3C18',
          borderRadius: '3px',
          boxShadow: '0 0 60px rgba(196,146,43,0.14), 0 20px 60px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.04)',
        }"
      >
        <!-- Inner gold border -->
        <div
          class="absolute pointer-events-none"
          :style="{
            inset: '10px',
            border: '1px solid rgba(196,146,43,0.22)',
            borderRadius: '2px',
          }"
        />

        <!-- Animated shop name -->
        <div class="flex items-center justify-center mb-3 overflow-hidden">
          <span
            v-for="(char, i) in letters"
            :key="i"
            v-motion
            :initial="{ opacity: 0, y: 28 }"
            :enter="{
              opacity: 1,
              y: 0,
              transition: {
                delay: 300 + i * 55,
                duration: 450,
                ease: 'easeOut',
              },
            }"
            :style="{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(28px, 5vw, 48px)',
              fontWeight: 700,
              color: '#C4922B',
              textShadow: '0 0 30px rgba(196,146,43,0.45)',
              letterSpacing: char === ' ' ? '0.4em' : '0.06em',
              display: 'inline-block',
            }"
          >
            {{ char === ' ' ? '\u00A0' : char }}
          </span>
        </div>

        <div
          v-motion
          :initial="{ opacity: 0, scaleX: 0 }"
          :enter="{ opacity: 1, scaleX: 1, transition: { delay: 1400, duration: 500 } }"
          :style="{
            height: '1px',
            backgroundColor: 'rgba(196,146,43,0.3)',
            marginBottom: '10px',
          }"
        />

        <p
          v-motion
          :initial="{ opacity: 0 }"
          :enter="{ opacity: 0.5, transition: { delay: 1600, duration: 600 } }"
          class="text-[10px] sm:text-[11px]"
          :style="{
            fontFamily: 'var(--font-label)',
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            color: '#C4922B',
          }"
        >
          A Portfolio of Works
        </p>

        <!-- Open sign -->
        <div
          v-motion
          :initial="{ opacity: 0, rotate: -20 }"
          :enter="{ opacity: 1, rotate: 10, transition: { delay: 2000, duration: 500, type: 'spring', stiffness: 200 } }"
          class="absolute"
          :style="{ top: '-18px', right: '-16px' }"
        >
          <div
            class="px-3 py-1 text-xs font-bold uppercase tracking-widest border-2 rounded-sm"
            :style="{
              fontFamily: 'var(--font-label)',
              backgroundColor: '#C4922B',
              color: '#0B1A11',
              borderColor: '#8B6214',
              fontSize: '10px',
              boxShadow: '2px 2px 0 rgba(0,0,0,0.4)',
            }"
          >
            OPEN
          </div>
        </div>
      </div>

      <!-- Enter CTA -->
      <button
        v-motion
        :initial="{ opacity: 0 }"
        :enter="{ opacity: 1, transition: { delay: 2100, duration: 500 } }"
        @click="scrollTo('map')"
        class="px-8 sm:px-10 py-3 border transition-all hover:bg-[rgba(196,146,43,0.12)] text-[11px] sm:text-xs mx-4"
        :style="{
          borderColor: 'rgba(196,146,43,0.5)',
          color: '#C4922B',
          fontFamily: 'var(--font-label)',
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
        }"
      >
        Enter the Shop
        <span style="font-size: large">↓</span>
      </button>

      <p
        v-motion
        :initial="{ opacity: 0 }"
        :enter="{ opacity: 1, transition: { delay: 2600 } }"
        class="absolute bottom-8 text-[9px] sm:text-[10px] px-4"
        :style="{
          fontFamily: 'var(--font-label)',
          letterSpacing: '0.35em',
          textTransform: 'uppercase',
          color: 'rgba(196,146,43,0.35)',
        }"
      >
        scroll to browse
      </p>
    </section>

    <!-- ── SHOP MAP ────────────────────────────────────────────────────── -->
    <section id="map" class="py-24 px-8 max-w-5xl mx-auto">
      <div class="text-center mb-14">
        <p
          class="text-sm sm:text-base uppercase tracking-[0.35em] mb-3"
          :style="{ fontFamily: 'var(--font-label)', color: 'var(--muted-foreground)' }"
        >
          Aisle Directory
        </p>
        <h2 class="text-4xl sm:text-5xl lg:text-6xl font-bold" :style="{ fontFamily: 'var(--font-display)' }">Shop Map</h2>
      </div>

      <!-- Zigzag Timeline Path -->
      <div class="relative max-w-3xl mx-auto" style="text-align: center">
        <div
          v-for="(item, index) in [
            { aisle: 'A·1', label: 'About', sub: 'Staff Picks · Bio', id: 'about' },
            { aisle: 'B·2', label: 'Experience', sub: 'Career Shelf', id: 'experience' },
            { aisle: 'C·3', label: 'Projects', sub: 'Featured Works', id: 'projects' },
            { aisle: 'D·4', label: 'Skills', sub: 'Genre Index', id: 'skills' },
            { aisle: 'E·5', label: 'Checkout', sub: 'Resume Desk', id: 'resume' },
            { aisle: 'F·6', label: 'Contact', sub: 'Guestbook', id: 'contact' },
          ]"
          :key="item.id"
          class="relative mb-12 last:mb-0"
        >
          <!-- Connecting Line -->
          <div
            v-if="index < 5"
            class="absolute top-full left-1/2 w-0.5 h-12 -translate-x-1/2 opacity-20"
            :style="{ backgroundColor: 'var(--foreground)' }"
          />

          <!-- Aisle Stop -->
          <button
            @click="scrollTo(item.id)"
            class="group relative w-full text-left p-6 border-2 transition-all hover:border-foreground/30 hover:shadow-md"
            :class="index % 2 === 0 ? 'md:mr-auto md:w-[80%]' : 'md:ml-auto md:w-[80%]'"
            :style="{
              backgroundColor: 'var(--card)',
              borderColor: 'var(--border)',
            }"
          >
            <!-- Aisle Number Badge -->
            <div
              class="absolute -left-3 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-2 flex items-center justify-center font-bold"
              :style="{
                backgroundColor: 'var(--background)',
                borderColor: 'var(--border)',
                fontFamily: 'var(--font-label)',
                fontSize: '11px',
              }"
            >
              {{ item.aisle }}
            </div>

            <div class="ml-6">
              <div
                class="text-2xl font-bold mb-1 group-hover:underline"
                :style="{ fontFamily: 'var(--font-display)' }"
              >
                {{ item.label }}
              </div>
              <div class="text-sm opacity-60" :style="{ fontFamily: 'var(--font-label)' }">
                {{ item.sub }}
              </div>
            </div>

            <!-- Arrow indicator -->
            <div class="absolute right-4 top-1/2 -translate-y-1/2 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
              →
            </div>
          </button>
        </div>
      </div>

      <!-- Decorative rule -->
      <div class="flex items-center gap-4 mt-16 opacity-25">
        <div class="flex-1 h-px bg-foreground/30" />
        <span :style="{ fontFamily: 'var(--font-label)', fontSize: '10px', letterSpacing: '0.3em' }">
          BROWSE FREELY
        </span>
        <div class="flex-1 h-px bg-foreground/30" />
      </div>
    </section>

    <!-- ── ABOUT ───────────────────────────────────────────────────────────── -->
    <section id="about" class="py-24 px-8 max-w-5xl mx-auto">
      <div class="text-center mb-14">
        <p
          class="text-sm sm:text-base uppercase tracking-[0.35em] mb-3"
          :style="{ fontFamily: 'var(--font-label)', color: 'var(--muted-foreground)' }"
        >
          Aisle A·1
        </p>
        <h2 class="text-4xl sm:text-5xl lg:text-6xl font-bold" :style="{ fontFamily: 'var(--font-display)' }">Staff Picks</h2>
      </div>

      <div
        class="flex flex-col md:flex-row max-w-3xl mx-auto border border-border overflow-hidden"
        :style="{ backgroundColor: 'var(--card)' }"
      >
        <!-- Book cover / spine side -->
        <div
          class="flex-shrink-0 flex flex-col items-center justify-between p-10 md:py-12 staff-picks"
          :style="{ backgroundColor: '#1F3D2F', minWidth: '220px', width: '220px' }"
        >
          <div
            class="text-xs uppercase tracking-[0.25em] text-white/40 staff-pick-title"
            :style="{ fontFamily: 'var(--font-label)' }"
          >
            Staff Pick
          </div>

          <!-- Avatar circle -->
          <div
            class="w-35 h-35 rounded-full flex items-center justify-center border-2"
            :style="{ backgroundColor: '#2D5040', borderColor: '#A8C5A0' }"
          >
            <span
              class="text-3xl font-bold"
              :style="{ fontFamily: 'var(--font-display)', color: '#A8C5A0' }"
            >
              <img src="../rohailramesh-pic.jpg" alt="Rohail Ramesh" class="rounded-full w-full h-full object-cover" />
            </span>
          </div>

          <div class="text-center">
            <div class="text-white text-lg font-bold" :style="{ fontFamily: 'var(--font-display)' }">
              Rohail Ramesh
            </div>
            <div
              class="text-xs mt-1 opacity-55"
              :style="{ fontFamily: 'var(--font-label)', color: '#A8C5A0', letterSpacing: '0.1em' }"
            >
              Full-Stack Web & Applications Developer
            </div>
            <div
              class="text-xs mt-0.5 opacity-40"
              :style="{ fontFamily: 'var(--font-label)', color: '#A8C5A0' }"
            >
              London, United Kingdom
            </div>
          </div>
        </div>

        <!-- Flap / bio -->
        <div class="flex-1 p-8 md:p-10">
          <div
            class="text-xs uppercase tracking-[0.2em] mb-5 opacity-45"
            :style="{ fontFamily: 'var(--font-label)' }"
          >
            About the Author
          </div>
          <p class="text-base leading-relaxed mb-4" :style="{ fontFamily: 'var(--font-body)' }">
            Rohail builds scalable, user-focused products across fintech, healthcare, education, and
            non-profit sectors. Currently developing multilingual supporter platforms at Mary's
            Meals, creating accessible, cross-device experiences that drive engagement and
            donations for a global charity serving over 3 million children daily.
          </p>
          <p class="text-base leading-relaxed mb-7" :style="{ fontFamily: 'var(--font-body)' }">
            Skilled in JavaScript, TypeScript, Vue.js, React, and API integrations, with
            experience implementing Stripe, Algolia, OpenAI, and Google Analytics. Passionate
            about combining clean, maintainable code with thoughtful UI/UX design.
          </p>

          <div class="flex items-center gap-5">
            <a
              href="mailto:rohailramesh@hotmail.com"
              class="flex items-center gap-1.5 text-xs uppercase tracking-widest opacity-50 hover:opacity-100 transition-opacity"
              :style="{ fontFamily: 'var(--font-label)' }"
            >
              <Mail :size="12" /> Mail
            </a>
            <a
              href="#"
              class="flex items-center gap-1.5 text-xs uppercase tracking-widest opacity-50 hover:opacity-100 transition-opacity"
              :style="{ fontFamily: 'var(--font-label)' }"
            >
              <Github :size="12" /> GitHub
            </a>
            <a
              href="#"
              class="flex items-center gap-1.5 text-xs uppercase tracking-widest opacity-50 hover:opacity-100 transition-opacity"
              :style="{ fontFamily: 'var(--font-label)' }"
            >
              <Linkedin :size="12" /> LinkedIn
            </a>
<!--            <a-->
<!--              href="#"-->
<!--              class="flex items-center gap-1.5 text-xs uppercase tracking-widest opacity-50 hover:opacity-100 transition-opacity"-->
<!--              :style="{ fontFamily: 'var(&#45;&#45;font-label)' }"-->
<!--            >-->
<!--              <ExternalLink :size="12" /> Portfolio-->
<!--            </a>-->
          </div>
        </div>
      </div>
    </section>

    <!-- ── EXPERIENCE ──────────────────────────────────────────────────────── -->
    <section id="experience" class="py-24 px-8 max-w-5xl mx-auto">
      <div class="text-center mb-14">
        <p
          class="text-sm sm:text-base uppercase tracking-[0.35em] mb-3"
          :style="{ fontFamily: 'var(--font-label)', color: 'var(--muted-foreground)' }"
        >
          Aisle B·2
        </p>
        <h2 class="text-4xl sm:text-5xl lg:text-6xl font-bold" :style="{ fontFamily: 'var(--font-display)' }">Career Shelf</h2>
      </div>
      <p
        class="text-center text-sm sm:text-base uppercase tracking-widest opacity-40 -mt-8 mb-12 px-4"
        :style="{ fontFamily: 'var(--font-label)' }"
      >
        Pull a book to read the chapters
      </p>

      <!-- Shelf unit -->
      <div
        class="relative p-4 sm:p-6 pt-6 sm:pt-8 pb-0 overflow-x-auto"
        :style="{
          backgroundColor: '#F0EAD8',
          border: '1px solid rgba(0,0,0,0.07)',
        }"
      >
        <!-- Wrapper for books and shelf bar to scroll together -->
        <div class="inline-block min-w-full">
          <!-- Books + decoratives -->
          <div class="flex items-end gap-2 px-2 pb-0 min-h-[220px]">
          <!-- Experience books -->
          <button
            v-for="exp in EXPERIENCE"
            :key="exp.id"
            @click="openExp = openExp === exp.id ? null : exp.id"
            class="cursor-pointer flex-shrink-0 focus:outline-none hover:-translate-y-3 transition-transform duration-200"
            :aria-label="`${exp.company} — click to read`"
          >
            <div
              :style="{
                width: '48px',
                height: exp.height + 'px',
                backgroundColor: exp.spineColor,
                borderRadius: '2px 5px 5px 2px',
                boxShadow:
                  openExp === exp.id
                    ? 'inset -5px 0 12px rgba(0,0,0,0.55), 8px 0 18px rgba(0,0,0,0.5)'
                    : '-2px 3px 8px rgba(0,0,0,0.35), inset -1px 0 4px rgba(0,0,0,0.3)',
                writingMode: 'vertical-rl',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                paddingTop: '14px',
                paddingBottom: '14px',
                transition: 'box-shadow 0.2s',
                position: 'relative',
              }"
            >
              <!-- Top gold band -->
              <div
                :style="{
                  position: 'absolute',
                  top: '8px',
                  left: 0,
                  right: 0,
                  height: '2px',
                  backgroundColor: exp.labelColor,
                  opacity: 0.35,
                }"
              />
              <span
                :style="{
                  color: exp.labelColor,
                  transform: 'rotate(180deg)',
                  fontFamily: 'var(--font-label)',
                  fontSize: '10px',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                }"
              >
                {{ exp.company }}
              </span>
              <div
                :style="{
                  position: 'absolute',
                  bottom: '8px',
                  left: 0,
                  right: 0,
                  height: '2px',
                  backgroundColor: exp.labelColor,
                  opacity: 0.35,
                }"
              />
            </div>
          </button>

          <!-- Decorative non-interactive spines -->
          <div
            v-for="(d, i) in DECORATIVE_SPINES"
            :key="i"
            :style="{
              flexShrink: 0,
              width: d.width + 'px',
              height: d.height + 'px',
              backgroundColor: d.color,
              borderRadius: '2px 4px 4px 2px',
              boxShadow: '-1px 2px 5px rgba(0,0,0,0.28)',
            }"
          />
        </div>
          <!-- Shelf bar -->
          <div
            class="h-5 rounded-sm"
            :style="{
              background: 'linear-gradient(180deg, #9B7040 0%, #7A5228 45%, #4A3018 100%)',
              boxShadow: '0 6px 18px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.12)',
            }"
          />
        </div>
      </div>

      <!-- Scroll hint below shelf - only visible on small screens -->
      <div class="sm:hidden flex items-center justify-center gap-2 mt-3 animate-pulse">
        <span class="text-xs opacity-50" :style="{ fontFamily: 'var(--font-label)', letterSpacing: '0.1em' }">
          Swipe to see more
        </span>
        <span class="text-sm opacity-50">→</span>
      </div>

      <!-- Open chapter view -->
      <Transition
        enter-active-class="transition-all duration-350 ease-in-out"
        leave-active-class="transition-all duration-350 ease-in-out"
        enter-from-class="opacity-0 max-h-0"
        enter-to-class="opacity-100 max-h-[2000px]"
        leave-from-class="opacity-100 max-h-[2000px]"
        leave-to-class="opacity-0 max-h-0"
      >
        <div
          v-if="openExp"
          class="overflow-hidden border-x border-b border-border"
          :style="{ backgroundColor: 'var(--card)' }"
        >
          <div class="p-8 md:p-10">
            <div class="flex items-start justify-between mb-7 gap-4">
              <div>
                <h3 class="text-2xl font-bold" :style="{ fontFamily: 'var(--font-display)' }">
                  {{ EXPERIENCE.find((e) => e.id === openExp)?.company }}
                </h3>
                <p
                  class="text-sm opacity-50 mt-1"
                  :style="{ fontFamily: 'var(--font-label)', letterSpacing: '0.05em' }"
                >
                  {{ EXPERIENCE.find((e) => e.id === openExp)?.role }} &nbsp;·&nbsp;
                  {{ EXPERIENCE.find((e) => e.id === openExp)?.period }}
                </p>
              </div>
              <div
                :style="{
                  width: '3px',
                  height: '56px',
                  backgroundColor: EXPERIENCE.find((e) => e.id === openExp)?.spineColor,
                  borderRadius: '2px',
                  flexShrink: 0,
                }"
              />
            </div>

            <div class="space-y-4">
              <div
                v-for="(chapter, i) in EXPERIENCE.find((e) => e.id === openExp)?.chapters"
                :key="i"
                class="flex gap-4"
              >
                <span
                  class="flex-shrink-0 opacity-35 tabular-nums"
                  :style="{
                    fontFamily: 'var(--font-label)',
                    fontSize: '11px',
                    marginTop: '3px',
                  }"
                >
                  Ch.{{ String(i + 1).padStart(2, '0') }}
                </span>
                <p class="text-base leading-relaxed" :style="{ fontFamily: 'var(--font-body)' }">
                  {{ chapter }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </section>

    <!-- ── PROJECTS ────────────────────────────────────────────────────────── -->
    <section id="projects" class="py-24 px-8 max-w-5xl mx-auto">
      <div class="text-center mb-14">
        <p
          class="text-sm sm:text-base uppercase tracking-[0.35em] mb-3"
          :style="{ fontFamily: 'var(--font-label)', color: 'var(--muted-foreground)' }"
        >
          Aisle C·3
        </p>
        <h2 class="text-4xl sm:text-5xl lg:text-6xl font-bold" :style="{ fontFamily: 'var(--font-display)' }">
          Featured Works
        </h2>
      </div>
      <p
        class="text-center text-sm sm:text-base uppercase tracking-widest opacity-40 -mt-8 mb-12 px-4"
        :style="{ fontFamily: 'var(--font-label)' }"
      >
        Select a title to read the synopsis
      </p>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
        <div v-for="project in PROJECTS" :key="project.id" class="flex flex-col">
          <button
            @click="openProj = openProj === project.id ? null : project.id"
            class="text-left focus:outline-none"
            :class="{ 'hover:-translate-y-3 transition-transform duration-200': openProj !== project.id }"
            :aria-label="`${project.title} — click to open`"
          >
            <div
              class="relative rounded-sm overflow-hidden"
              :style="{
                aspectRatio: '2/3',
                width: '100%',
                backgroundColor: project.coverBg,
                boxShadow:
                  openProj === project.id
                    ? 'inset 0 0 24px rgba(0,0,0,0.6), 6px 10px 24px rgba(0,0,0,0.5)'
                    : '-4px 4px 14px rgba(0,0,0,0.4)',
                transition: 'box-shadow 0.3s',
              }"
            >
              <!-- Spine shadow -->
              <div
                :style="{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: '12px',
                  background: 'linear-gradient(90deg, rgba(0,0,0,0.4) 0%, transparent 100%)',
                }"
              />
              <!-- Cover content -->
              <div class="absolute inset-0 p-5 flex flex-col justify-between">
                <div>
                  <div
                    class="text-xs uppercase tracking-widest mb-3 opacity-65"
                    :style="{ fontFamily: 'var(--font-label)', color: project.accentColor }"
                  >
                    {{ project.genre }}
                  </div>
                  <div
                    class="text-xl font-bold leading-tight text-white"
                    :style="{ fontFamily: 'var(--font-display)' }"
                  >
                    {{ project.title }}
                  </div>
                </div>
                <!-- Decorative rule -->
                <div class="flex items-end justify-between">
                  <div
                    :style="{
                      width: '32px',
                      height: '1px',
                      backgroundColor: project.accentColor,
                      opacity: 0.5,
                    }"
                  />
                  <span
                    class="text-white/40 text-xs"
                    :style="{ fontFamily: 'var(--font-label)' }"
                  >
                    {{ project.year }}
                  </span>
                </div>
              </div>
            </div>
          </button>

          <!-- Case study panel -->
          <Transition
            enter-active-class="transition-all duration-320 ease-in-out"
            leave-active-class="transition-all duration-320 ease-in-out"
            enter-from-class="opacity-0 max-h-0"
            enter-to-class="opacity-100 max-h-[1000px]"
            leave-from-class="opacity-100 max-h-[1000px]"
            leave-to-class="opacity-0 max-h-0"
          >
            <div v-if="openProj === project.id" class="overflow-hidden">
              <div
                class="mt-3 p-4 border border-border text-sm"
                :style="{ backgroundColor: 'var(--card)' }"
              >
                <p class="leading-relaxed mb-4" :style="{ fontFamily: 'var(--font-body)' }">
                  {{ project.synopsis }}
                </p>
                <div class="flex flex-wrap gap-1.5">
                  <span
                    v-for="s in project.stack"
                    :key="s"
                    class="text-xs px-2 py-0.5 border border-border"
                    :style="{
                      fontFamily: 'var(--font-label)',
                      backgroundColor: project.coverBg + '1A',
                    }"
                  >
                    {{ s }}
                  </span>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </section>

    <!-- ── SKILLS ──────────────────────────────────────────────────────────── -->
    <section id="skills" class="py-24 px-8 max-w-5xl mx-auto">
      <div class="text-center mb-14">
        <p
          class="text-sm sm:text-base uppercase tracking-[0.35em] mb-3"
          :style="{ fontFamily: 'var(--font-label)', color: 'var(--muted-foreground)' }"
        >
          Aisle D·4
        </p>
        <h2 class="text-4xl sm:text-5xl lg:text-6xl font-bold" :style="{ fontFamily: 'var(--font-display)' }">Genre Index</h2>
      </div>

      <div class="space-y-12">
        <div v-for="[genre, books] in Object.entries(SKILLS)" :key="genre">
          <div class="flex items-center gap-3 mb-3">
            <span
              class="text-xs uppercase tracking-[0.2em] opacity-40"
              :style="{ fontFamily: 'var(--font-label)' }"
            >
              Section
            </span>
            <span class="text-lg font-semibold" :style="{ fontFamily: 'var(--font-display)' }">
              {{ genre }}
            </span>
          </div>

          <div
            class="relative p-4 sm:p-5 pt-6 sm:pt-7 pb-0 overflow-x-auto"
            :style="{
              backgroundColor: '#F0EAD8',
              border: '1px solid rgba(0,0,0,0.06)',
            }"
          >
            <!-- Wrapper for books and shelf bar to scroll together -->
            <div class="inline-block min-w-full">
              <div class="flex items-end gap-1.5 pb-0">
              <div
                v-for="book in books"
                :key="book.title"
                class="hover:-translate-y-3 transition-transform duration-150"
                :style="{ flexShrink: 0 }"
              >
                <div
                  :style="{
                    width: '38px',
                    height: book.height + 'px',
                    backgroundColor: book.color,
                    borderRadius: '2px 4px 4px 2px',
                    boxShadow: '-2px 2px 6px rgba(0,0,0,0.3), inset -1px 0 4px rgba(0,0,0,0.22)',
                    writingMode: 'vertical-rl',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'default',
                  }"
                >
                  <span
                    :style="{
                      fontFamily: 'var(--font-label)',
                      fontSize: '9px',
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.72)',
                      transform: 'rotate(180deg)',
                    }"
                  >
                    {{ book.title }}
                  </span>
                </div>
              </div>
            </div>
              <!-- Shelf bar -->
              <div
                class="h-5 rounded-sm"
                :style="{
                  background: 'linear-gradient(180deg, #9B7040 0%, #7A5228 45%, #4A3018 100%)',
                  boxShadow: '0 6px 18px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.12)',
                }"
              />
            </div>
          </div>

          <!-- Scroll hint below shelf - only visible on small screens -->
          <div class="sm:hidden flex items-center justify-center gap-2 mt-3 animate-pulse">
            <span class="text-xs opacity-50" :style="{ fontFamily: 'var(--font-label)', letterSpacing: '0.1em' }">
              Swipe to see more
            </span>
            <span class="text-sm opacity-50">→</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ── RESUME ──────────────────────────────────────────────────────────── -->
    <section id="resume" class="py-24 px-8 max-w-5xl mx-auto">
      <div class="text-center mb-14">
        <p
          class="text-sm sm:text-base uppercase tracking-[0.35em] mb-3"
          :style="{ fontFamily: 'var(--font-label)', color: 'var(--muted-foreground)' }"
        >
          Aisle E·5
        </p>
        <h2 class="text-4xl sm:text-5xl lg:text-6xl font-bold" :style="{ fontFamily: 'var(--font-display)' }">
          Checkout Desk
        </h2>
      </div>

      <div class="max-w-sm mx-auto">
        <!-- Library card -->
        <div
          class="relative border-2 border-border"
          :style="{
            backgroundColor: '#FDFBF0',
            boxShadow: '4px 4px 0 rgba(0,0,0,0.1)',
            fontFamily: 'var(--font-label)',
          }"
        >
          <!-- Red ruled lines background -->
          <div
            class="absolute inset-0 pointer-events-none"
            :style="{
              backgroundImage:
                'repeating-linear-gradient(transparent, transparent 30px, rgba(200,40,40,0.1) 30px, rgba(200,40,40,0.1) 31px)',
              backgroundSize: '100% 31px',
              backgroundPositionY: '52px',
            }"
          />

          <div class="relative p-6">
            <!-- Header -->
            <div class="border-b-2 border-foreground/20 pb-3 mb-5">
              <div
                class="text-xs uppercase tracking-widest opacity-40 mb-1"
                :style="{ fontSize: '9px', letterSpacing: '0.2em' }"
              >
                London Public Portfolio
              </div>
              <div
                class="text-2xl font-bold"
                :style="{ fontFamily: 'var(--font-display)', lineHeight: 1.2 }"
              >
                Library Card
              </div>
            </div>

            <!-- Fields -->
            <div class="space-y-3 mb-7 text-sm">
              <div
                v-for="{ key, val, bold } in [
                  { key: 'PATRON', val: 'ROHAIL RAMESH', bold: true },
                  { key: 'TITLE', val: 'Full-Stack Web & Applications Developer', bold: false },
                  { key: 'LOCATION', val: 'London, United Kingdom', bold: false },
                  // { key: 'ACTIVE SINCE', val: '2023', bold: false },
                  // { key: 'STATUS', val: 'AVAILABLE', bold: true },
                ]"
                :key="key"
                class="flex gap-3 items-baseline"
                :style="{ lineHeight: '31px' }"
              >
                <span class="opacity-35 flex-shrink-0" :style="{ width: '100px', fontSize: '11px' }">
                  {{ key }}
                </span>
                <span :class="{ 'font-bold': bold }">{{ val }}</span>
              </div>
            </div>

            <!-- Checkout button -->
            <div class="relative">
              <a
                href="../public/Rohail%20Ramesh%20CV%202026.pdf"
                target="_blank"
                @click="stamped = true"
                class="w-full py-3 border-2 border-foreground/20 text-xs uppercase tracking-widest hover:border-foreground/50 transition-all flex items-center justify-center gap-2"
                :style="{ fontFamily: 'var(--font-label)' }"
              >
                <Eye :size="12" />
                Checkout Resume
              </a>

            </div>
          </div>
        </div>

        <p
          class="text-center mt-4 text-xs opacity-30"
          :style="{ fontFamily: 'var(--font-label)', letterSpacing: '0.1em' }"
        >
          PDF · Last updated 2026
        </p>
      </div>
    </section>

    <!-- ── CONTACT ─────────────────────────────────────────────────────────── -->
    <section id="contact" class="py-24 px-8 max-w-5xl mx-auto pb-36">
      <div class="text-center mb-14">
        <p
          class="text-sm sm:text-base uppercase tracking-[0.35em] mb-3"
          :style="{ fontFamily: 'var(--font-label)', color: 'var(--muted-foreground)' }"
        >
          Aisle F·6
        </p>
        <h2 class="text-4xl sm:text-5xl lg:text-6xl font-bold" :style="{ fontFamily: 'var(--font-display)' }">Guestbook</h2>
      </div>
      <p
        class="text-center text-sm sm:text-base uppercase tracking-widest opacity-40 -mt-8 mb-14 px-4"
        :style="{ fontFamily: 'var(--font-label)' }"
      >
        Leave a note at the counter
      </p>

      <div class="max-w-lg mx-auto">
        <Transition
          mode="out-in"
          enter-active-class="transition-opacity duration-400"
          leave-active-class="transition-opacity duration-400"
          enter-from-class="opacity-0"
          enter-to-class="opacity-100"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <form
            v-if="!submitted"
            @submit="handleFormSubmit"
            action="https://formsubmit.co/rohailramesh@hotmail.com"
            method="POST"
            target="_blank"
            class="border-2 border-border p-8 relative"
            :style="{
              backgroundColor: '#FDFBF0',
              backgroundImage:
                'repeating-linear-gradient(transparent, transparent 30px, rgba(0,0,128,0.07) 30px, rgba(0,0,128,0.07) 31px)',
              backgroundSize: '100% 31px',
              backgroundPositionY: '54px',
              fontFamily: 'var(--font-label)',
            }"
          >
            <!-- Red margin line -->
            <div
              class="absolute top-0 bottom-0 pointer-events-none"
              :style="{ left: '48px', width: '1px', backgroundColor: 'rgba(200,40,40,0.18)' }"
            />

            <div
              class="text-xl font-bold mb-8 relative z-10"
              :style="{ fontFamily: 'var(--font-display)', lineHeight: '31px' }"
            >
              Sign the Guestbook
            </div>

            <div class="space-y-6 relative z-10">
              <div>
                <label
                  class="block text-xs uppercase tracking-widest opacity-40 mb-1"
                  :style="{ lineHeight: '31px' }"
                >
                  Name
                </label>
                <input
                  v-model="guestbook.name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  required
                  class="w-full bg-transparent border-b border-foreground/20 pb-1 text-sm outline-none focus:border-foreground/50 transition-colors placeholder:opacity-30"
                  :style="{ fontFamily: 'var(--font-label)', lineHeight: '31px' }"
                />
              </div>

              <div>
                <label
                  class="block text-xs uppercase tracking-widest opacity-40 mb-1"
                  :style="{ lineHeight: '31px' }"
                >
                  Email
                </label>
                <input
                  v-model="guestbook.email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  required
                  class="w-full bg-transparent border-b border-foreground/20 pb-1 text-sm outline-none focus:border-foreground/50 transition-colors placeholder:opacity-30"
                  :style="{ fontFamily: 'var(--font-label)', lineHeight: '31px' }"
                />
              </div>

              <div>
                <label
                  class="block text-xs uppercase tracking-widest opacity-40 mb-1"
                  :style="{ lineHeight: '31px' }"
                >
                  Message
                </label>
                <textarea
                  v-model="guestbook.message"
                  name="message"
                  placeholder="Leave a note..."
                  rows="3"
                  required
                  class="w-full bg-transparent border-b border-foreground/20 pb-1 text-sm outline-none focus:border-foreground/50 transition-colors resize-none placeholder:opacity-30"
                  :style="{ fontFamily: 'var(--font-label)' }"
                />
              </div>

              <button
                type="submit"
                :disabled="!guestbook.name || !guestbook.message"
                class="mt-2 px-7 py-2.5 border border-border text-xs uppercase tracking-widest hover:border-foreground/40 transition-all disabled:opacity-25"
                :style="{ fontFamily: 'var(--font-label)' }"
              >
                Sign &nbsp;→
              </button>
            </div>
          </form>

          <div v-else class="text-center py-20">
            <div
              class="text-2xl font-bold mb-3"
              :style="{ fontFamily: 'var(--font-display)' }"
            >
              Thank you, {{ guestbook.name }}.
            </div>
            <p
              class="text-base opacity-60 mb-8"
              :style="{ fontFamily: 'var(--font-body)' }"
            >
              Your note has been recorded in the guestbook.
            </p>
            <div class="flex items-center justify-center gap-5">
              <a
                href="#"
                class="flex items-center gap-1.5 text-xs uppercase tracking-widest opacity-50 hover:opacity-100 transition-opacity"
                :style="{ fontFamily: 'var(--font-label)' }"
              >
                <Mail :size="12" /> Email
              </a>
              <a
                href="#"
                class="flex items-center gap-1.5 text-xs uppercase tracking-widest opacity-50 hover:opacity-100 transition-opacity"
                :style="{ fontFamily: 'var(--font-label)' }"
              >
                <Github :size="12" /> GitHub
              </a>
              <a
                href="#"
                class="flex items-center gap-1.5 text-xs uppercase tracking-widest opacity-50 hover:opacity-100 transition-opacity"
                :style="{ fontFamily: 'var(--font-label)' }"
              >
                <Linkedin :size="12" /> LinkedIn
              </a>
            </div>
          </div>
        </Transition>
      </div>
    </section>

    <!-- ── FOOTER ──────────────────────────────────────────────────────────── -->
    <footer class="py-12 border-t border-border/50">
      <div class="text-center">
        <p
          class="text-xs opacity-30"
          :style="{ fontFamily: 'var(--font-label)', letterSpacing: '0.15em' }"
        >
          © 2026 Chapter & Verse · A Portfolio by Rohail Ramesh
        </p>
      </div>
    </footer>

    <!-- ── SCROLL TO TOP BUTTON ────────────────────────────────────────────── -->
    <Transition
      enter-active-class="transition-all duration-300"
      enter-from-class="opacity-0 translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-300"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-4"
    >
      <button
        v-if="showScrollTop"
        @click="scrollToTop"
        class="fixed bottom-8 right-8 px-4 py-3 border-2 border-border hover:border-foreground/40 transition-all shadow-lg z-50 group"
        :style="{
          backgroundColor: 'rgba(242, 236, 216, 0.95)',
          backdropFilter: 'blur(8px)',
          fontFamily: 'var(--font-label)',
        }"
      >
        <div class="flex items-center gap-2 text-xs uppercase tracking-widest">
          <ArrowUp :size="14" class="group-hover:-translate-y-1 transition-transform" />
          <span class="hidden sm:inline">Back to Gate</span>
          <span class="sm:hidden">Back to Gate</span>
        </div>
      </button>
    </Transition>
  </div>
</template>

<style scoped>
@media (max-width: 768px) {
  .staff-picks {
    width: 100% !important;
  }
  .staff-pick-title{
    margin-bottom: 0.5rem;
  }
}

</style>
