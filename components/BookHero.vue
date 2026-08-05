<script setup lang="ts">
import { ref, onMounted } from 'vue'

// State
const sceneVisible = ref(false)
const personVisible = ref(false)
const isEntering = ref(false)
const doorOpening = ref(false)

// Floating books for background
const floatingBooks = [
  { id: 1, delay: 0, duration: 25, size: 0.6, startX: 10, startY: 20 },
  { id: 2, delay: 5, duration: 30, size: 0.4, startX: 80, startY: 70 },
  { id: 3, delay: 10, duration: 28, size: 0.5, startX: 20, startY: 80 },
  { id: 4, delay: 3, duration: 32, size: 0.35, startX: 90, startY: 30 },
  { id: 5, delay: 8, duration: 27, size: 0.45, startX: 15, startY: 50 },
]

// Enter the bookstore with animation
const scrollToProjects = () => {
  // Start the entering animation
  isEntering.value = true
  doorOpening.value = true
  
  // Person walks to door (1.5s total)
  // Then scroll to the next section
  setTimeout(() => {
    const element = document.getElementById('map')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    // Reset after scroll
    setTimeout(() => {
      isEntering.value = false
      doorOpening.value = false
    }, 1000)
  }, 1500)
}

// Fade in animation on mount
onMounted(() => {
  setTimeout(() => {
    sceneVisible.value = true
  }, 200)
  
  setTimeout(() => {
    personVisible.value = true
  }, 1000)
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

    <!-- Bookstore Scene -->
    <div class="bookstore-scene" :class="{ 'visible': sceneVisible }">
      
      <!-- Bookstore Building -->
      <div class="bookstore-building">

        
        <!-- Awning -->
        <div class="awning">
          <div class="awning-stripe"></div>
          <div class="awning-stripe"></div>
          <div class="awning-logo">
            <img src="/rr-logo.png" alt="RR Logo" class="awning-emblem" />
          </div>
          <div class="awning-stripe"></div>
          <div class="awning-stripe"></div>
        </div>
        
        <!-- Store Sign -->
        <div class="store-sign">
          <h1 class="sign-title">ROHAIL RAMESH</h1>
          <p class="sign-subtitle">Full-Stack Developer</p>
        </div>
        
        <!-- Storefront -->
        <div class="storefront">
          <!-- Left Window -->
          <div class="shop-window">
            <div class="window-shine"></div>
            <div class="window-books">
              <div class="book" style="--book-height: 80%; --book-color: #8B4513;"></div>
              <div class="book" style="--book-height: 65%; --book-color: #6B3410;"></div>
              <div class="book" style="--book-height: 90%; --book-color: #C4922B;"></div>
              <div class="book" style="--book-height: 70%; --book-color: #8B6914;"></div>
            </div>
          </div>
          
          <!-- Door -->
          <div class="shop-door" :class="{ 'opening': doorOpening }">
            <div class="door-panel" :class="{ 'opening': doorOpening }">
              <button @click="scrollToProjects" class="enter-button">
                <span>ENTER</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
            <div class="door-handle"></div>
          </div>
          
          <!-- Right Window -->
          <div class="shop-window">
            <div class="window-shine"></div>
            <div class="window-books">
              <div class="book" style="--book-height: 75%; --book-color: #6B3410;"></div>
              <div class="book" style="--book-height: 85%; --book-color: #C4922B;"></div>
              <div class="book" style="--book-height: 60%; --book-color: #8B4513;"></div>
              <div class="book" style="--book-height: 95%; --book-color: #8B6914;"></div>
            </div>
          </div>
        </div>
        
      </div>
      
      <!-- Walkway Path -->
      <div class="walkway-path" :class="{ 'visible': personVisible }"></div>
      
      <!-- Person Icon (you standing in front) -->
      <div class="person-icon" :class="{ 'visible': personVisible, 'entering': isEntering }">
        <svg viewBox="0 0 48 64" fill="currentColor">
          <!-- Head -->
          <circle cx="24" cy="12" r="6" fill="#2C1810"/>
          <!-- Neck -->
          <rect x="22" y="17" width="4" height="3" rx="1" fill="#2C1810"/>
          <!-- Body (torso) -->
          <path d="M 18 20 L 18 36 Q 18 38, 20 38 L 28 38 Q 30 38, 30 36 L 30 20 Q 30 20, 24 20 Q 18 20, 18 20 Z" fill="#4a2810"/>
          <!-- Arms -->
          <path d="M 18 22 L 14 28 L 14 38 Q 14 40, 16 40 L 17 40 L 17 28 L 18 24 Z" fill="#3d2214"/>
          <path d="M 30 22 L 34 28 L 34 38 Q 34 40, 32 40 L 31 40 L 31 28 L 30 24 Z" fill="#3d2214"/>
          <!-- Legs -->
          <path d="M 20 38 L 20 56 Q 20 58, 22 58 L 23 58 L 23 38 Z" fill="#2C1810"/>
          <path d="M 28 38 L 28 56 Q 28 58, 26 58 L 25 58 L 25 38 Z" fill="#2C1810"/>
          <!-- Shoes -->
          <ellipse cx="22" cy="59" rx="3" ry="2" fill="#1a0f08"/>
          <ellipse cx="26" cy="59" rx="3" ry="2" fill="#1a0f08"/>
        </svg>
        <div class="person-shadow"></div>
      </div>
      
    </div>
  </section>
</template>

<style scoped>
/* ====================================================================
   HERO SECTION
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

/* ====================================================================
   BOOKSTORE SCENE
   ==================================================================== */

.bookstore-scene {
  position: relative;
  width: 100%;
  max-width: min(90%, 900px);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(2rem, 5vh, 4rem);
  opacity: 0;
  transform: translateY(30px);
  transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 10;
}

.bookstore-scene.visible {
  opacity: 1;
  transform: translateY(0);
}

/* ====================================================================
   BOOKSTORE BUILDING
   ==================================================================== */

.bookstore-building {
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  overflow: hidden;
}

/* Roofline */
.roofline {
  position: relative;
  background: linear-gradient(135deg, #1a0f08 0%, #0d0805 100%);
  padding: clamp(0.75rem, 1.5vh, 1.5rem) clamp(2rem, 5vw, 4rem);
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 3px solid #4a2810;
}

.chimney {
  width: clamp(30px, 5vw, 50px);
  height: clamp(40px, 6vh, 60px);
  background: linear-gradient(to right, #6B3410 0%, #4a2810 100%);
  border: 2px solid #2C1810;
  border-radius: 4px 4px 0 0;
  box-shadow: 
    0 -2px 8px rgba(0, 0, 0, 0.4),
    inset 0 1px 0 rgba(139, 69, 19, 0.3);
  position: relative;
}

.chimney::before {
  content: '';
  position: absolute;
  top: -8px;
  left: -2px;
  right: -2px;
  height: 10px;
  background: linear-gradient(to bottom, #4a2810 0%, #6B3410 100%);
  border-radius: 2px 2px 0 0;
}

/* Store Sign */
.store-sign {
  background: linear-gradient(135deg, #2C1810 0%, #1a0f08 100%);
  padding: clamp(1.5rem, 4vh, 2.5rem) clamp(2rem, 5vw, 4rem);
  text-align: center;
  border-bottom: 4px solid #C4922B;
}

.sign-title {
  font-family: var(--font-display);
  font-size: clamp(1rem, 5vw, 4rem);
  font-weight: 700;
  color: #C4922B;
  margin: 0;
  line-height: 1.2;
  text-shadow: 
    2px 2px 4px rgba(0, 0, 0, 0.8),
    0 0 30px rgba(196, 146, 43, 0.5);
  letter-spacing: 0.05em;
}

.sign-subtitle {
  font-family: var(--font-label);
  font-size: clamp(0.85rem, 1.8vw, 1.2rem);
  letter-spacing: clamp(0.25em, 0.5vw, 0.5em);
  text-transform: uppercase;
  color: #D4C4B0;
  font-weight: 500;
  margin: clamp(0.75rem, 1.5vh, 1.25rem) 0 0;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8);
}

/* Awning */
.awning {
  display: flex;
  height: clamp(60px, 10vh, 100px);
  background: linear-gradient(to bottom, #8B4513 0%, #6B3410 100%);
  box-shadow: 
    0 4px 15px rgba(0, 0, 0, 0.4),
    inset 0 2px 4px rgba(255, 255, 255, 0.1);
}

.awning-stripe {
  flex: 1;
  background: linear-gradient(to bottom, 
    #C4922B 0%, 
    #C4922B 50%, 
    #8B4513 50%, 
    #8B4513 100%);
}

.awning-stripe:nth-child(even) {
  background: linear-gradient(to bottom, 
    #8B4513 0%, 
    #8B4513 50%, 
    #6B3410 50%, 
    #6B3410 100%);
}

.awning-logo {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to bottom, #2C1810 0%, #1a0f08 100%);
  padding: clamp(0.5rem, 1.5vh, 1rem);
}

.awning-emblem {
  width: clamp(50px, 8vw, 80px);
  height: auto;
  filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.5));
  opacity: 0.95;
}

/* Storefront */
.storefront {
  display: flex;
  background: linear-gradient(135deg, #8B6914 0%, #6B5410 100%);
  padding: clamp(1.5rem, 3vw, 3rem);
  gap: clamp(1rem, 2.5vw, 2rem);
  min-height: clamp(300px, 40vh, 450px);
}

/* Shop Windows */
.shop-window {
  flex: 1;
  background: linear-gradient(135deg, rgba(135, 206, 235, 0.3) 0%, rgba(70, 130, 180, 0.2) 100%);
  border: 4px solid #2C1810;
  border-radius: 6px;
  position: relative;
  overflow: hidden;
  padding: clamp(0.75rem, 2vw, 1.5rem);
  display: flex;
  align-items: flex-end;
}

.window-shine {
  position: absolute;
  top: 15%;
  left: 15%;
  width: 40%;
  height: 35%;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.5) 0%, transparent 100%);
  border-radius: 50%;
  pointer-events: none;
}

.window-books {
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  gap: clamp(0.25rem, 1vw, 0.75rem);
  width: 100%;
  height: 70%;
}

.book {
  width: clamp(18px, 3vw, 35px);
  height: var(--book-height);
  background: linear-gradient(to right, 
    var(--book-color) 0%, 
    var(--book-color) 85%, 
    rgba(0, 0, 0, 0.3) 85%, 
    rgba(0, 0, 0, 0.3) 100%);
  border: 2px solid rgba(74, 40, 16, 0.5);
  border-radius: 2px 2px 0 0;
  box-shadow: 
    2px 2px 8px rgba(0, 0, 0, 0.5),
    inset -3px 0 5px rgba(0, 0, 0, 0.3),
    inset 0 -2px 3px rgba(0, 0, 0, 0.2);
  position: relative;
}

.book::before {
  content: '';
  position: absolute;
  top: 8%;
  left: 15%;
  width: 60%;
  height: 3px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 1px;
}

.book::after {
  content: '';
  position: absolute;
  top: 18%;
  left: 15%;
  width: 60%;
  height: 2px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 1px;
}

/* Shop Door */
.shop-door {
  flex: 0 0 clamp(140px, 25%, 220px);
  background: linear-gradient(135deg, #4a2810 0%, #2C1810 100%);
  border: 4px solid #1a0f08;
  border-radius: 6px;
  position: relative;
  display: flex;
  flex-direction: column;
  box-shadow: 
    inset 0 2px 10px rgba(0, 0, 0, 0.6),
    0 6px 15px rgba(0, 0, 0, 0.5);
}

.door-panel {
  flex: 1;
  margin: clamp(1rem, 2.5vw, 2rem);
  background: linear-gradient(135deg, rgba(135, 206, 235, 0.15) 0%, rgba(70, 130, 180, 0.1) 100%);
  border: 3px solid #2C1810;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.door-panel::before {
  content: '';
  position: absolute;
  top: 8%;
  left: 8%;
  width: 35%;
  height: 45%;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, transparent 100%);
  border-radius: 50%;
  transition: opacity 0.3s ease;
}

.door-panel.opening {
  animation: doorSwing 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  transform-origin: left center;
}

.door-panel.opening::before {
  opacity: 0.1;
}

@keyframes doorSwing {
  0% {
    transform: perspective(600px) rotateY(0deg);
  }
  50% {
    transform: perspective(600px) rotateY(-45deg);
  }
  100% {
    transform: perspective(600px) rotateY(-50deg);
  }
}

.door-handle {
  position: absolute;
  right: clamp(1rem, 2.5vw, 2rem);
  top: 50%;
  transform: translateY(-50%);
  width: clamp(10px, 2vw, 18px);
  height: clamp(35px, 6vh, 60px);
  background: linear-gradient(to right, #C4922B 0%, #8B6914 100%);
  border-radius: 4px;
  box-shadow: 
    0 2px 6px rgba(0, 0, 0, 0.6),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
}

/* Enter Button */
.enter-button {
  display: flex;
  align-items: center;
  gap: clamp(0.5rem, 1vw, 0.75rem);
  padding: clamp(0.85rem, 2.5vh, 1.5rem) clamp(1.5rem, 4vw, 2.5rem);
  background: linear-gradient(135deg, #C4922B 0%, #8B6914 100%);
  color: #1C1714;
  border: 3px solid #8B6914;
  border-radius: 8px;
  font-family: var(--font-label);
  font-size: clamp(0.9rem, 2vw, 1.2rem);
  letter-spacing: 0.2em;
  text-transform: uppercase;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 
    0 6px 20px rgba(196, 146, 43, 0.5),
    inset 0 1px 0 rgba(255, 255, 255, 0.4);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.4);
}

.enter-button:hover {
  transform: scale(1.05);
  box-shadow: 
    0 8px 25px rgba(196, 146, 43, 0.7),
    inset 0 1px 0 rgba(255, 255, 255, 0.5);
  background: linear-gradient(135deg, #D4A72C 0%, #9B7515 100%);
}

.enter-button:active {
  transform: scale(0.98);
}

.enter-button svg {
  transition: transform 0.3s ease;
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3));
}

.enter-button:hover svg {
  transform: translateX(4px);
}

/* ====================================================================
   WALKWAY PATH
   ==================================================================== */

.walkway-path {
  position: absolute;
  bottom: clamp(100px, 9vh, 160px);
  left: 50%;
  transform: translateX(-50%);
  width: clamp(80px, 135vw, 400px);
  height: clamp(50px, 3vh, 140px);
  background: linear-gradient(to top,
    rgba(107, 93, 82, 0.4) 0%,
    rgba(107, 93, 82, 0.3) 50%,
    transparent 100%);
  clip-path: polygon(40% 100%, 60% 100%, 55% 0%, 45% 0%);
  opacity: 0;
  transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.3s;
  z-index: 5;
}

.walkway-path.visible {
  opacity: 1;
}

.walkway-path::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  height: 3px;
  background: rgba(74, 40, 16, 0.3);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}

/* ====================================================================
   PERSON ICON
   ==================================================================== */

.person-icon {
  position: relative;
  width: clamp(80px, 12vw, 130px);
  height: clamp(100px, 16vh, 160px);
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 15;
}

.person-icon.visible {
  opacity: 1;
  transform: translateY(0);
  animation: heartbeat 2s ease-in-out infinite;
}

.person-icon.entering {
  animation: walkToDoor 1.5s cubic-bezier(0.4, 0, 0.2, 1) forwards !important;
}

@keyframes heartbeat {
  0%, 100% {
    transform: translateY(0) scale(1);
  }
  10% {
    transform: translateY(0) scale(1.05);
  }
  20% {
    transform: translateY(0) scale(1);
  }
  30% {
    transform: translateY(0) scale(1.05);
  }
  40% {
    transform: translateY(0) scale(1);
  }
}

@keyframes walkToDoor {
  0% {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
  50% {
    transform: translateY(clamp(-60px, -8vh, -80px)) scale(0.85);
    opacity: 1;
  }
  80% {
    transform: translateY(clamp(-100px, -14vh, -140px)) scale(0.6);
    opacity: 0.7;
  }
  100% {
    transform: translateY(clamp(-120px, -16vh, -160px)) scale(0.3);
    opacity: 0;
  }
}

.person-icon svg {
  width: 100%;
  height: 100%;
  fill: #3d2214;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.4));
  stroke: #2C1810;
  stroke-width: 0.5;
}

.person-shadow {
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 10px;
  background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.3) 0%, transparent 70%);
  border-radius: 50%;
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
  opacity: 0.3;
  animation: float var(--duration) ease-in-out infinite;
  animation-delay: var(--delay);
  left: var(--start-x);
  top: var(--start-y);
  will-change: transform;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0) rotate(0deg) scale(var(--size));
    opacity: 0.3;
  }
  50% {
    transform: translateY(-60px) rotate(-5deg) scale(var(--size));
    opacity: 0.5;
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
   PARTICLES
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
  30% {
    opacity: 0;
    transform: translateY(-60px) scale(0.5);
  }
}

/* ====================================================================
   RESPONSIVE
   ==================================================================== */

@media (max-width: 768px) {
  .storefront {
    min-height: clamp(250px, 35vh, 350px);
    padding: clamp(1rem, 2vw, 2rem);
    gap: clamp(0.75rem, 2vw, 1.5rem);
  }

  .shop-door {
    flex: 0 0 clamp(110px, 22%, 180px);
  }

  .floating-book {
    opacity: 0.2;
  }
}

@media (max-width: 640px) {
  .storefront {
    min-height: clamp(220px, 32vh, 300px);
    padding: clamp(0.85rem, 1.5vw, 1.5rem);
    gap: clamp(0.5rem, 1.5vw, 1rem);
  }

  .shop-window {
    padding: clamp(0.5rem, 1.5vw, 1rem);
  }

  .book {
    width: clamp(14px, 2.5vw, 28px);
  }

  .shop-door {
    flex: 0 0 clamp(90px, 20%, 150px);
  }

  .enter-button {
    font-size: clamp(0.75rem, 1.7vw, 1rem);
    padding: clamp(0.7rem, 2vh, 1.2rem) clamp(1.2rem, 3.5vw, 2rem);
  }

  .enter-button svg {
    width: 16px;
    height: 16px;
  }
}

@media (max-width: 480px) {
  .storefront {
    min-height: clamp(200px, 30vh, 280px);
    padding: clamp(0.75rem, 1.5vw, 1.25rem);
    gap: clamp(0.5rem, 1.5vw, 1rem);
  }

  .shop-window {
    padding: clamp(0.5rem, 1.2vw, 0.85rem);
  }

  .shop-door {
    flex: 0 0 clamp(100px, 24%, 160px);
  }

  .window-books {
    height: 65%;
    gap: clamp(0.2rem, 0.8vw, 0.5rem);
  }

  .book {
    width: clamp(14px, 2.8vw, 28px);
  }

  .door-panel {
    margin: clamp(0.75rem, 2vw, 1.5rem);
  }

  .enter-button {
    padding: clamp(0.65rem, 1.8vh, 1rem) clamp(1.1rem, 3.2vw, 1.8rem);
    font-size: clamp(0.75rem, 1.7vw, 0.95rem);
    gap: clamp(0.35rem, 0.8vw, 0.6rem);
  }

  .enter-button svg {
    width: 16px;
    height: 16px;
  }

  .floating-book {
    display: none;
  }

  .person-icon {
    width: clamp(65px, 10vw, 100px);
    height: clamp(80px, 13vh, 130px);
  }
}

@media (max-width: 375px) {
  .sign-title {
    font-size: clamp(1.2rem, 4.5vw, 3rem);
  }

  .sign-subtitle {
    font-size: clamp(0.6rem, 1.5vw, 1rem);
  }

  .enter-button {
    font-size: clamp(0.7rem, 1.5vw, 0.9rem);
    padding: clamp(0.6rem, 1.8vh, 1rem) clamp(1rem, 3vw, 1.5rem);
    gap: clamp(0.4rem, 0.8vw, 0.6rem);
  }

  .enter-button svg {
    width: 14px;
    height: 14px;
  }
}
</style>
