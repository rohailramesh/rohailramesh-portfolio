<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Mail, Github, Linkedin } from 'lucide-vue-next'

// State
const isBookOpen = ref(false)
const showContent = ref(false)
const showPrompt = ref(false)
const bookContainer = ref<HTMLElement | null>(null)

// Open book on click
const openBook = () => {
  if (isBookOpen.value) return
  
  showPrompt.value = false
  isBookOpen.value = true
  
  setTimeout(() => {
    showContent.value = true
  }, 800)
}

// Intersection Observer
onMounted(() => {
  if (!bookContainer.value) return

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            if (!isBookOpen.value) {
              showPrompt.value = true
            }
          }, 500)
        } else {
          // Only hide prompt when scrolling away, don't close the book
          showPrompt.value = false
        }
      })
    },
    { threshold: 0.3 }
  )

  observer.observe(bookContainer.value)

  onUnmounted(() => {
    if (bookContainer.value) {
      observer.unobserve(bookContainer.value)
    }
  })
})
</script>

<template>
  <div class="book-stage" ref="bookContainer">
    <!-- Peek Inside Prompt -->
    <Transition
      enter-active-class="prompt-enter"
      leave-active-class="prompt-leave"
    >
      <button 
        v-if="showPrompt && !isBookOpen" 
        class="peek-prompt"
        @click="openBook"
      >
        <div class="prompt-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
          </svg>
        </div>
        <span class="prompt-text">Peek Inside</span>
      </button>
    </Transition>

    <!-- The Book -->
    <div 
      class="book-container"
      :class="{ 'is-open': isBookOpen, 'clickable': !isBookOpen }"
      @click="openBook"
    >
      <!-- Left Page/Cover -->
      <div class="book-left">
        <div class="book-cover-front">
          <div class="leather-texture"></div>
          
          <div class="cover-content">
            <div class="avatar-circle">
              <img src="/rohailramesh-pic.jpg" alt="Rohail Ramesh" class="avatar-image" />
            </div>

            <div class="cover-text">
              <h3 class="cover-name">ROHAIL RAMESH</h3>
              <p class="cover-role">Full-Stack Developer</p>
              <p class="cover-location">London, United Kingdom</p>
            </div>

            <div class="social-links">
              <a href="mailto:rohailramesh@hotmail.com" class="social-link" title="Email">
                <Mail :size="16" />
              </a>
              <a href="https://github.com/rohailramesh" target="_blank" class="social-link" title="GitHub">
                <Github :size="16" />
              </a>
              <a href="https://www.linkedin.com/in/rohail-ramesh-a18b001b4" target="_blank" class="social-link" title="LinkedIn">
                <Linkedin :size="16" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Page -->
      <div class="book-right">
        <div class="book-page">
          <Transition
            enter-active-class="content-enter"
            enter-from-class="content-enter-from"
          >
            <div v-if="showContent" class="page-content">
              <div class="bio-text">
                <p class="bio-paragraph">
                  Rohail builds scalable, user-focused products across fintech, healthcare, education, and
                  non-profit sectors. Currently developing multilingual supporter platforms at Mary's
                  Meals, creating accessible, cross-device experiences that drive engagement and
                  donations for a global charity serving over 3 million children daily.
                </p>
                <p class="bio-paragraph">
                  Skilled in JavaScript, TypeScript, Vue.js, React, and API integrations, with
                  experience implementing Stripe, Algolia, OpenAI, and Google Analytics. Passionate
                  about combining clean, maintainable code with thoughtful UI/UX design.
                </p>
              </div>
            </div>
          </Transition>
        </div>
        <!-- Scroll Indicator for small screens - outside scrollable area -->
        <Transition
          enter-active-class="content-enter"
          enter-from-class="content-enter-from"
        >
          <div v-if="showContent" class="scroll-indicator">
            <span>Scroll for more</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
        </Transition>
      </div>

      <!-- Book Spine -->
      <div class="book-spine">
        <div class="spine-text">STAFF PICK</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.book-stage {
  position: relative;
  perspective: 2000px;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
}

/* Peek Prompt */
.peek-prompt {
  position: absolute;
  bottom: -60px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.875rem 1.5rem;
  background: linear-gradient(135deg, #8B4513 0%, #6B3410 100%);
  color: #F2ECD8;
  border: 2px solid rgba(196, 146, 43, 0.4);
  border-radius: 50px;
  font-family: var(--font-label);
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(139, 69, 19, 0.4);
  animation: heartbeat 2s ease-in-out infinite;
  transition: all 0.3s ease;
}

.peek-prompt:hover {
  transform: translateX(-50%) scale(1.05);
  background: linear-gradient(135deg, #A0522D 0%, #8B4513 100%);
}

@keyframes heartbeat {
  0%, 100% { transform: translateX(-50%) scale(1); }
  10% { transform: translateX(-50%) scale(1.05); }
  20% { transform: translateX(-50%) scale(1); }
  30% { transform: translateX(-50%) scale(1.05); }
  40% { transform: translateX(-50%) scale(1); }
}

.prompt-enter { animation: prompt-fade-in 0.6s ease-out forwards; }
.prompt-leave { animation: prompt-fade-out 0.3s ease-out forwards; }

@keyframes prompt-fade-in {
  from { opacity: 0; transform: translateX(-50%) translateY(10px); }
  to { opacity: 1; transform: translateX(-50%) translateY(0); }
}

@keyframes prompt-fade-out {
  from { opacity: 1; transform: translateX(-50%) translateY(0); }
  to { opacity: 0; transform: translateX(-50%) translateY(-10px); }
}

/* Book Container */
.book-container {
  position: relative;
  width: 100%;
  max-width: 1000px;
  height: clamp(400px, 50vh, 600px);
  margin: 0 auto;
  transform-style: preserve-3d;
}

.book-container.clickable {
  cursor: pointer;
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
  left: -25%;
  justify-content: center;
  justify-items: center;
  align-items: center;
  transform-origin: right;
  transition: all 2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  z-index: 2;
}

.book-container.is-open .book-left {
  left: 0;
  transform: rotateY(0deg);
}

.book-right {
  position: relative;
  left: 50%;
  opacity: 0;
  z-index: 1;
  transition: opacity 0.5s ease 1.5s;
}

.book-container.is-open .book-right {
  opacity: 1;
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

/* Left Cover */
.book-cover-front {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #1F3D2F 0%, #2D5040 50%, #1a3328 100%);
  border-radius: 6px 0 0 6px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: clamp(2rem, 4vw, 3rem);
  border: 2px solid rgba(168, 197, 160, 0.2);
  box-shadow: 
    inset 0 0 60px rgba(0, 0, 0, 0.3),
    4px 0 20px rgba(0, 0, 0, 0.4);
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

.cover-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(1rem, 2vw, 1.5rem);
  transform: scaleX(-1);
}

.book-container.is-open .cover-content {
  transform: scaleX(1);
}

.avatar-circle {
  width: clamp(100px, 18vw, 160px);
  height: clamp(100px, 18vw, 160px);
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid #A8C5A0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
}

.avatar-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.cover-text {
  text-align: center;
  color: #A8C5A0;
}

.cover-name {
  font-family: var(--font-display);
  font-size: clamp(1.25rem, 2.5vw, 1.75rem);
  font-weight: 700;
  color: #FFFFFF;
  margin: 0 0 0.5rem;
  letter-spacing: 0.1em;
}

.cover-role {
  font-family: var(--font-label);
  font-size: clamp(0.75rem, 1.2vw, 0.9rem);
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin: 0 0 0.25rem;
  opacity: 0.9;
}

.cover-location {
  font-family: var(--font-label);
  font-size: clamp(0.65rem, 1vw, 0.8rem);
  opacity: 0.7;
  margin: 0;
}

.social-links {
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
}

.social-link {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(168, 197, 160, 0.1);
  border: 2px solid rgba(168, 197, 160, 0.3);
  border-radius: 50%;
  color: #A8C5A0;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: rgba(168, 197, 160, 0.2);
  border-color: #A8C5A0;
  transform: translateY(-2px);
}

/* Right Page */
.book-page {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #F2ECD8 0%, #EAE3CE 100%);
  border-radius: 0 6px 6px 0;
  box-shadow: 
    -6px 0 30px rgba(0, 0, 0, 0.4),
    inset 0 0 60px rgba(28, 23, 20, 0.02);
  position: relative;
  overflow-y: auto;
  padding: clamp(2rem, 4vw, 3rem);
  display: flex;
  justify-content: center;
}

.book-page::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: 
    repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(28, 23, 20, 0.02) 2px, rgba(28, 23, 20, 0.02) 4px);
  pointer-events: none;
}

.page-content {
  position: relative;
  z-index: 1;
}

.content-enter {
  animation: content-fade-in 0.6s ease-out forwards;
}

.content-enter-from {
  opacity: 0;
}

@keyframes content-fade-in {
  to { opacity: 1; }
}

.bio-paragraph {
  font-family: var(--font-body);
  font-size: clamp(0.85rem, 1.3vw, 1rem);
  line-height: 1.7;
  color: #1C1714;
  margin: 0 0 1.25rem;
}

.bio-paragraph:last-child {
  margin-bottom: 0;
}

/* Scroll Indicator */
.scroll-indicator {
  display: none;
  position: absolute;
  bottom: -50px;
  left: 0;
  right: 0;
  padding: 0.75rem 1rem;
  background: linear-gradient(to top, rgba(234, 227, 206, 0.95), rgba(234, 227, 206, 0.8));
  backdrop-filter: blur(4px);
  border-top: 1px solid rgba(28, 23, 20, 0.15);
  border-radius: 0 0 6px 0;
  font-family: var(--font-label);
  font-size: 0.7rem;
  font-weight: 600;
  color: rgba(28, 23, 20, 0.75);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  animation: bounce 2s ease-in-out infinite;
  box-shadow: 0 -2px 8px rgba(28, 23, 20, 0.08);
  z-index: 10;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}

/* Responsive */
@media (max-width: 768px) {


  .book-left {
    width: 50%;
  }
  
  .cover-content {
    transform: scaleX(-1);
  }
  

  .peek-prompt{
    left: 48%;
  }
  .book-container.is-open .cover-content {
    transform: scaleX(1);
  }
  
  .book-spine {
    width: 30px;
  }
  
  .social-link {
    width: 36px;
    height: 36px;
  }
  
  .book-page {
    padding: clamp(1.5rem, 3vw, 2rem);
  }
  
  .bio-paragraph {
    font-size: 0.8rem;
    line-height: 1.6;
  }
  

}
@media (max-width: 550px) {
  .scroll-indicator {
    display: flex;
  }
}

@media (max-width: 480px) {

  
  .book-left {
    left: -90px;
    width: 50%;
  }
  
  .cover-content {
    transform: scaleX(-1);
  }
  

  
  .book-container.is-open .cover-content {
    transform: scaleX(1);
  }
  
  .book-spine {
    width: 25px;
  }
  
  .social-link {
    width: 32px;
    height: 32px;
  }
  
  .peek-prompt {
    bottom: -60px;
    padding: 0.75rem 1.25rem;
    font-size: 0.75rem;
    left: 48%;
  }
  
  .book-page {
    padding: clamp(1.25rem, 2.5vw, 1.75rem);
  }
  
  .bio-paragraph {
    font-size: 0.75rem;
    line-height: 1.6;
    margin-bottom: 0.9rem;
  }
  
  .scroll-indicator {
    display: flex;
    font-size: 0.65rem;
  }
}
</style>
