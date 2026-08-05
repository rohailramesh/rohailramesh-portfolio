<script setup lang="ts">
import { ref, onMounted } from 'vue'

// State
const isBookOpen = ref(false)
const showContent = ref(false)

// Floating books for background
const floatingBooks = [
  { id: 1, delay: 0, duration: 25, size: 0.6, startX: 10, startY: 20 },
  { id: 2, delay: 5, duration: 30, size: 0.4, startX: 80, startY: 70 },
  { id: 3, delay: 10, duration: 28, size: 0.5, startX: 20, startY: 80 },
  { id: 4, delay: 3, duration: 32, size: 0.35, startX: 90, startY: 30 },
  { id: 5, delay: 8, duration: 27, size: 0.45, startX: 15, startY: 50 },
]

// Scroll to projects
const scrollToProjects = () => {
  const element = document.getElementById('map')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

// Scroll to contact  
const scrollToContact = () => {
  const element = document.getElementById('contact')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

// Auto-open on mount with book opening transition
onMounted(() => {
  // Start opening the book immediately
  setTimeout(() => {
    isBookOpen.value = true
  }, 100)
  
  // Show content as book is opening
  setTimeout(() => {
    showContent.value = true
  }, 800)
})
</script>

<template>
  <section class="hero-section">
    <!-- Floating Books Background -->
    <div class="floating-books-container">
      <div 
        v-for="book in floatingBooks" 
        :key="book.id"
        class="floating-book"
        :style="{
          '--delay': book.delay + 's',
          '--duration': book.duration + 's',
          '--size': book.size,
          '--start-x': book.startX + '%',
          '--start-y': book.startY + '%'
        }"
      >
        <div class="mini-book">
          <div class="mini-spine"></div>
          <div class="mini-cover"></div>
        </div>
      </div>
    </div>

    <!-- Magical particles/sparkles -->
    <div class="particles-container">
      <div v-for="n in 20" :key="n" class="particle" :style="{ '--particle-delay': (n * 0.3) + 's' }"></div>
    </div>

    <!-- Ambient background glow -->
    <div class="ambient-glow"></div>

    <div class="book-stage">
      <!-- The Book -->
      <div 
        class="book-container"
        :class="{ 'is-open': isBookOpen }"
      >
        <!-- Left Page/Cover -->
        <div class="book-left">
          <div class="book-cover-front">
            <div class="leather-texture"></div>
            <img src="/rr-logo.png" alt="RR Logo" class="book-emblem-logo" />
          </div>
        </div>

        <!-- Right Page - Shows content when open -->
        <div class="book-right">
          <div class="book-page">
            <!-- Page curl effect -->
            <div class="page-curl"></div>
            
            <Transition
              enter-active-class="content-enter"
              enter-from-class="content-enter-from"
            >
              <div v-if="showContent" class="page-content">
                <!-- Simplified content -->
                <div class="hero-text">
                  <h1 class="hero-name">
                    <div class="name-line"><span>R</span><span>O</span><span>H</span><span>A</span><span>I</span><span>L</span></div>
                    <div class="name-line"><span>R</span><span>A</span><span>M</span><span>E</span><span>S</span><span>H</span></div>
                  </h1>
                  <p class="hero-tagline">Full-Stack Developer</p>
                </div>

              </div>
            </Transition>
            
            <!-- Page curl with button -->
            <div class="page-curl-container">
              <div class="page-curl"></div>
              <button v-if="showContent" @click="scrollToProjects" class="curl-button">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <path d="M12 5v14M5 12l7 7 7-7"/>
                </svg>
                <span>Explore</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Book Spine -->
        <div class="book-spine">
          <div class="spine-text">ROHAIL RAMESH</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* ====================================================================
   HERO SECTION LAYOUT
   ==================================================================== */

.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #E8DCC8 0%, #D4C4B0 100%);
  overflow: hidden;
  padding: clamp(1rem, 5vw, 3rem);
}

.ambient-glow {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: min(100%, 1000px);
  height: clamp(200px, 40vh, 400px);
  background: radial-gradient(ellipse at 50% 100%, rgba(139, 69, 19, 0.15) 0%, transparent 70%);
  pointer-events: none;
}

.book-stage {
  position: relative;
  perspective: 2000px;
  z-index: 10;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  transition: transform 0.3s ease-out;
}

/* Parallax effect on mouse move - will be controlled via JS */
.book-stage:hover {
  transform: scale(1.02);
}

/* ====================================================================
   THE BOOK
   ==================================================================== */

.book-container {
  position: relative;
  width: 100%;
  max-width: 1000px;
  height: clamp(300px, 60vh, 550px);
  margin: 0 auto;
  transform-style: preserve-3d;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Initial state: left page is closed (rotated) */
.book-left {
  transform: rotateY(180deg);
  backface-visibility: visible;
}

/* Book Pages */
.book-left,
.book-right {
  position: absolute;
  width: 50%;
  height: 100%;
  top: 0;
  transform-style: preserve-3d;
}

.book-left {
  left: 0;
  transform-origin: right center;
  transition: transform 2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  z-index: 2;
}

.book-container.is-open .book-left {
  transform: rotateY(0deg);
}

.book-right {
  right: 0;
  left: 50%;
  z-index: 1;
  /* Right page stays flat - no transformation */
}

/* Book Spine */
.book-spine {
  position: absolute;
  left: 50%;
  top: 0;
  width: 50px;
  height: 100%;
  transform: translateX(-50%) rotateY(90deg);
  background: linear-gradient(to right, #4a2810, #6B3410, #4a2810);
  transform-origin: center;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow:
    inset -3px 0 12px rgba(0, 0, 0, 0.7),
    inset 3px 0 12px rgba(0, 0, 0, 0.7);
  z-index: 1;
}

.spine-text {
  writing-mode: vertical-rl;
  text-orientation: mixed;
  font-family: var(--font-display);
  font-size: clamp(0.85rem, 1.5vw, 1.1rem);
  font-weight: 700;
  color: rgba(196, 146, 43, 0.5);
  letter-spacing: 0.25em;
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.6);
}

/* ====================================================================
   BOOK COVERS
   ==================================================================== */

.book-cover-front {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #8B4513 0%, #6B3410 50%, #4a2810 100%);
  border-radius: 6px 0px 0px 6px;

  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: clamp(1.5rem, 4vw, 3rem);
  border: 2px solid rgba(139, 69, 19, 0.4);
}

.leather-texture {
  position: absolute;
  inset: 0;
  background-image: 
    radial-gradient(circle at 20% 30%, rgba(0, 0, 0, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(0, 0, 0, 0.1) 0%, transparent 50%),
    repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(0, 0, 0, 0.03) 2px, rgba(0, 0, 0, 0.03) 4px);
  opacity: 0.6;
}

.book-emblem-logo {
  width: clamp(80px, 20vw, 200px);
  height: auto;
  max-width: 80%;
  object-fit: contain;
  opacity: 0.9;
  filter: drop-shadow(3px 3px 8px rgba(0, 0, 0, 0.5));
  animation: logo-glow 4s ease-in-out infinite;
}

@keyframes logo-glow {
  0%, 100% {
    filter: drop-shadow(3px 3px 8px rgba(0, 0, 0, 0.5)) drop-shadow(0 0 15px rgba(196, 146, 43, 0.2));
  }
  50% {
    filter: drop-shadow(3px 3px 8px rgba(0, 0, 0, 0.5)) drop-shadow(0 0 25px rgba(196, 146, 43, 0.4));
  }
}

/* ====================================================================
   BOOK PAGE CONTENT
   ==================================================================== */

.book-page {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #F2ECD8 0%, #EAE3CE 100%);
  border-radius: 0 6px 6px 0;
  box-shadow: 
    -6px 0 30px rgba(0, 0, 0, 0.4),
    inset 0 0 60px rgba(28, 23, 20, 0.02);
  position: relative;
  overflow: hidden;
  padding: clamp(1.5rem, 5vw, 3rem) clamp(1rem, 4vw, 3rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.book-page::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: 
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(28, 23, 20, 0.02) 2px,
      rgba(28, 23, 20, 0.02) 4px
    );
  pointer-events: none;
}

.page-content {
  margin-top: 3rem;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.content-enter {
  animation: content-fade-in 0.6s ease-out forwards;
}

.content-enter-from {
  opacity: 0;
}

@keyframes content-fade-in {
  to {
    opacity: 1;
  }
}

/* ====================================================================
   HERO TEXT
   ==================================================================== */

.hero-text {
  text-align: center;
  margin-bottom: 2rem;
  width: 100%;
}

.hero-name {
  font-family: var(--font-display);
  font-size: clamp(2rem, 6vw, 4rem);
  font-weight: 700;
  color: #1C1714;
  margin: 0 0 clamp(0.75rem, 2vw, 1rem);
  line-height: 1.2;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hero-name span {
  display: inline-block;
}

.hero-tagline {
  font-family: var(--font-label);
  font-size: clamp(0.75rem, 1.6vw, 0.95rem);
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: #8B4513;
  font-weight: 500;
  margin: 0;
}

/* ====================================================================
   HERO ACTIONS
   ==================================================================== */

/* ====================================================================
   CURL BUTTON
   ==================================================================== */

.page-curl-container {
  position: absolute;
  bottom: 0;
  right: 0;
}

.curl-button {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 80px;
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  gap: 0.15rem;
  padding: 0 8px 8px 0;
  font-family: var(--font-label);
  font-size: 0.5rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-weight: 600;
  background: linear-gradient(135deg, transparent 49%, #8B4513 51%);
  color: #F2ECD8;
  border: none;
  border-radius: 0 0 6px 0;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 10;
  clip-path: polygon(100% 0, 100% 100%, 0 100%);
  animation: curl-button-appear 0.4s ease-out 0.6s backwards;
}

.curl-button span {
  transform: rotate(-45deg);
  transform-origin: center;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
  white-space: nowrap;
  margin-bottom: 10px;
  margin-right: 2px;
}

@keyframes curl-button-appear {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.curl-button:hover {
  background: linear-gradient(135deg, transparent 48%, #A0522D 50%);
}

.curl-button svg {
  transition: transform 0.3s ease;
  transform: rotate(-45deg);
  margin-bottom: 10px;
  margin-right: -5px;
  margin-top: 10px
}

.curl-button:hover svg {
  transform: rotate(-45deg) translate(2px, 2px);
}

/* ====================================================================
   RIBBON BOOKMARKS
   ==================================================================== */

.ribbons-container {
  position: absolute;
  right: -40px;
  top: 10%;
  display: flex;
  flex-direction: column;
  gap: clamp(0.5rem, 2vh, 1rem);
  z-index: 20;
}

.ribbon-bookmark {
  position: relative;
  padding: 0.75rem 2.5rem 0.75rem 1.25rem;
  background: var(--ribbon-color);
  color: #F2ECD8;
  border: none;
  cursor: pointer;
  font-family: var(--font-label);
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  font-weight: 600;
  box-shadow: 
    3px 3px 12px rgba(0, 0, 0, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.2),
    inset 0 -1px 0 rgba(0, 0, 0, 0.2);
  clip-path: polygon(0 0, 100% 0, 100% 100%, 20px 100%, 10px 50%, 20px 0);
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  animation: ribbon-appear 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  animation-delay: calc(1.5s + var(--ribbon-index) * 0.1s);
}

.ribbon-bookmark:hover {
  transform: translateX(-8px);
  box-shadow: 
    5px 5px 20px rgba(0, 0, 0, 0.5),
    inset 0 1px 0 rgba(255, 255, 255, 0.3),
    inset 0 -1px 0 rgba(0, 0, 0, 0.3);
}

@keyframes ribbon-appear {
  from {
    opacity: 0;
    transform: translateX(60px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.ribbon-label {
  position: relative;
  z-index: 1;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

/* ====================================================================
   FLOATING BOOKS BACKGROUND
   ==================================================================== */

.floating-books-container {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 1;
}

.floating-book {
  position: absolute;
  opacity: 0.4;
  animation: float var(--duration) ease-in-out infinite;
  animation-delay: var(--delay);
  left: var(--start-x);
  top: var(--start-y);
  will-change: transform;
  z-index: 1;
}

@keyframes float {
  0% {
    transform: translateY(0) rotate(0deg) scale(var(--size));
    opacity: 0.4;
  }
  25% {
    transform: translateY(-40px) rotate(8deg) scale(calc(var(--size) * 1.1));
    opacity: 0.6;
  }
  50% {
    transform: translateY(-80px) rotate(-5deg) scale(var(--size));
    opacity: 0.4;
  }
  75% {
    transform: translateY(-40px) rotate(6deg) scale(calc(var(--size) * 0.95));
    opacity: 0.5;
  }
  100% {
    transform: translateY(0) rotate(0deg) scale(var(--size));
    opacity: 0.4;
  }
}

.mini-book {
  width: 50px;
  height: 70px;
  position: relative;
  transform-style: preserve-3d;
  filter: drop-shadow(4px 4px 8px rgba(0, 0, 0, 0.3));
}

.mini-spine {
  position: absolute;
  width: 6px;
  height: 100%;
  background: linear-gradient(to right, #2C1810, #3d2817);
  border-radius: 1px 0 0 1px;
}

.mini-cover {
  position: absolute;
  left: 6px;
  width: 34px;
  height: 100%;
  background: linear-gradient(135deg, #8B4513, #6B3410);
  border-radius: 0 2px 2px 0;
  box-shadow: 
    3px 3px 10px rgba(0, 0, 0, 0.5),
    inset 0 1px 0 rgba(196, 146, 43, 0.2);
}

/* ====================================================================
   MAGICAL PARTICLES
   ==================================================================== */

.particles-container {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 5;
}

.particle {
  position: absolute;
  width: 3px;
  height: 3px;
  background: radial-gradient(circle, rgba(196, 146, 43, 0.8), transparent);
  border-radius: 50%;
  animation: sparkle 6s ease-in-out infinite;
  animation-delay: var(--particle-delay);
  left: calc(20% + (var(--particle-delay, 0s) * 10));
  top: calc(20% + (var(--particle-delay, 0s) * 5));
  opacity: 0;
}

@keyframes sparkle {
  0%, 100% {
    opacity: 0;
    transform: translateY(0) scale(0);
  }
  10% {
    opacity: 1;
    transform: translateY(-20px) scale(1);
  }
  20% {
    opacity: 0.8;
    transform: translateY(-40px) scale(1.2);
  }
  30% {
    opacity: 0;
    transform: translateY(-60px) scale(0.5);
  }
}

/* ====================================================================
   PAGE CURL EFFECT
   ==================================================================== */

.page-curl {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, transparent 50%, rgba(28, 23, 20, 0.08) 50%);
  border-radius: 0 0 6px 0;
  opacity: 0;
  animation: curl-fade-in 0.8s ease-out 1.2s forwards;
  pointer-events: none;
}

@keyframes curl-fade-in {
  to {
    opacity: 1;
  }
}

/* ====================================================================
   RESPONSIVE
   ==================================================================== */

@media (max-width: 1024px) {
  .book-spine {
    width: 40px;
  }
  
  .spine-text {
    font-size: 0.9rem;
    letter-spacing: 0.2em;
  }
}

@media (max-width: 768px) {
  .hero-section {
    padding: 1rem;
  }

  .book-container {
    height: clamp(350px, 30vh, 500px);
  }

  .hero-text {
    margin-bottom: 1.5rem;
  }

  .cta-explore {
    width: 100%;
    padding: 1rem 2rem;
    margin-top: 1.5rem;
  }

  .book-spine {
    width: 30px;
  }
  
  .spine-text {
    font-size: 0.75rem;
    letter-spacing: 0.15em;
  }

  .floating-book {
    opacity: 0.3;
  }
}

@media (max-width: 480px) {
  .book-container {
    height: clamp(300px, 20vh, 450px);
  }

  .hero-name {
    gap: 0.1rem;
  }

  .cta-explore {
    font-size: 0.75rem;
    padding: 0.875rem 1.5rem;
  }

  .floating-book {
    display: none;
  }
}
@media (max-width: 375px) {
  .hero-text{
    font-size: 0.8rem;
  }
  .hero-name{
    font-size: 1.5rem;
  }
}
</style>
