<script setup lang="ts">
import { ref, onMounted } from 'vue'

// Props
interface Award {
  id: number
  year: string
  title: string
  institution: string
  date: string
  color: string
}

defineProps<{
  awards: Award[]
}>()

// State
const boardVisible = ref(false)

// Intersection Observer for scroll-triggered animation
const boardContainer = ref<HTMLElement | null>(null)

onMounted(() => {
  if (!boardContainer.value) return

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !boardVisible.value) {
          boardVisible.value = true
        }
      })
    },
    { threshold: 0.15 }
  )

  observer.observe(boardContainer.value)
})
</script>

<template>
  <div ref="boardContainer" class="notice-board-container">
    
    <!-- Cork Board Frame -->
    <div class="board-frame" :class="{ 'visible': boardVisible }">
      
      <!-- Wooden Frame Border -->
      <div class="wood-frame"></div>
      
      <!-- Cork Board Background -->
      <div class="cork-board">
        
        <!-- Cork texture overlay -->
        <div class="cork-texture"></div>
        
        <!-- Pinned Award Cards -->
        <div class="awards-grid">
          <div
            v-for="(award, index) in awards"
            :key="award.id"
            class="award-card-wrapper"
            :style="{ '--card-delay': `${index * 0.15}s` }"
            :class="{ 'visible': boardVisible }"
          >
            <!-- Push Pin -->
            <div class="push-pin" :style="{ '--pin-color': award.color }">
              <div class="pin-head"></div>
              <div class="pin-shadow"></div>
            </div>
            
            <!-- Award Notice Card -->
            <div class="award-card" :style="{ '--border-color': award.color }">
              
              <!-- Card Corner Fold -->
              <div class="corner-fold"></div>
              
              <!-- Year Badge -->
              <div class="year-badge" :style="{ backgroundColor: award.color }">
                {{ award.year }}
              </div>
              
              <!-- Trophy Icon -->
              <div class="trophy-container">
                <svg class="trophy-icon" viewBox="0 0 24 24" fill="none" :style="{ stroke: award.color }" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                  <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                  <path d="M4 22h16"></path>
                  <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                  <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                  <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                </svg>
              </div>
              
              <!-- Award Title -->
              <h3 class="award-title" :style="{ fontFamily: 'var(--font-display)' }">
                {{ award.title }}
              </h3>
              
              <!-- Institution -->
              <p class="award-institution" :style="{ fontFamily: 'var(--font-label)', color: award.color }">
                {{ award.institution }}
              </p>
              
              <!-- Date -->
              <p class="award-date" :style="{ fontFamily: 'var(--font-label)' }">
                {{ award.date }}
              </p>
              
              <!-- Decorative stamp -->
              <div class="approval-stamp" :style="{ borderColor: award.color, color: award.color }">
                <span :style="{ fontFamily: 'var(--font-label)' }">AWARDED</span>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
    
  </div>
</template>

<style scoped>
.notice-board-container {
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
}

/* Board Frame */
.board-frame {
  position: relative;
  opacity: 0;
  transform: scale(0.95);
  transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.board-frame.visible {
  opacity: 1;
  transform: scale(1);
}

/* Wooden Frame Border */
.wood-frame {
  position: absolute;
  inset: -1rem;
  background: linear-gradient(135deg, #8B6F47 0%, #6B5638 50%, #8B6F47 100%);
  border-radius: 8px;
  box-shadow: 
    0 8px 24px rgba(0, 0, 0, 0.3),
    inset 0 2px 4px rgba(255, 255, 255, 0.2),
    inset 0 -2px 4px rgba(0, 0, 0, 0.3);
  
  /* Wood grain texture */
  background-image: 
    repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0, 0, 0, 0.08) 2px, rgba(0, 0, 0, 0.08) 4px);
}

/* Cork Board Background */
.cork-board {
  position: relative;
  background: linear-gradient(135deg, #C19A6B 0%, #B08D5F 50%, #C19A6B 100%);
  border-radius: 4px;
  padding: 3rem 2rem;
  min-height: 500px;
  box-shadow: inset 0 0 40px rgba(0, 0, 0, 0.15);
}

/* Cork Texture Overlay */
.cork-texture {
  position: absolute;
  inset: 0;
  background-image: 
    radial-gradient(circle at 20% 30%, rgba(139, 111, 71, 0.3) 1px, transparent 1px),
    radial-gradient(circle at 60% 70%, rgba(139, 111, 71, 0.3) 1px, transparent 1px),
    radial-gradient(circle at 80% 10%, rgba(139, 111, 71, 0.3) 1px, transparent 1px),
    radial-gradient(circle at 40% 90%, rgba(139, 111, 71, 0.3) 1px, transparent 1px),
    radial-gradient(circle at 15% 65%, rgba(139, 111, 71, 0.3) 1px, transparent 1px),
    radial-gradient(circle at 75% 45%, rgba(139, 111, 71, 0.3) 1px, transparent 1px);
  background-size: 8px 8px, 12px 12px, 10px 10px, 15px 15px, 9px 9px, 11px 11px;
  background-position: 0 0, 3px 5px, 7px 2px, 2px 8px, 5px 3px, 1px 6px;
  opacity: 0.6;
  pointer-events: none;
}

/* Awards Grid */
.awards-grid {
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 3rem 2.5rem;
  max-width: 1000px;
  margin: 0 auto;
}

/* Award Card Wrapper */
.award-card-wrapper {
  position: relative;
  opacity: 0;
  transform: translateY(20px) rotate(0deg);
  transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
  transition-delay: var(--card-delay);
}

.award-card-wrapper.visible {
  opacity: 1;
  transform: translateY(0) rotate(var(--card-rotation, 0deg));
}

/* Add slight rotation variations for realism */
.award-card-wrapper:nth-child(1) { --card-rotation: -1.5deg; }
.award-card-wrapper:nth-child(2) { --card-rotation: 1deg; }
.award-card-wrapper:nth-child(3) { --card-rotation: -0.5deg; }

/* Push Pin */
.push-pin {
  position: absolute;
  top: -8px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.award-card-wrapper:hover .push-pin {
  transform: translateX(-50%) translateY(-2px);
}

.pin-head {
  width: 20px;
  height: 20px;
  background: radial-gradient(circle at 30% 30%, var(--pin-color), color-mix(in srgb, var(--pin-color) 70%, black));
  border-radius: 50%;
  box-shadow: 
    0 2px 4px rgba(0, 0, 0, 0.3),
    inset -1px -1px 2px rgba(0, 0, 0, 0.3),
    inset 1px 1px 2px rgba(255, 255, 255, 0.4);
  position: relative;
}

.pin-head::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 8px;
  background: linear-gradient(to bottom, #888, #555);
  border-radius: 1px;
}

.pin-shadow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 24px;
  height: 24px;
  background: radial-gradient(circle, rgba(0, 0, 0, 0.2) 0%, transparent 70%);
  border-radius: 50%;
  z-index: -1;
}

/* Award Notice Card */
.award-card {
  position: relative;
  background: #F5F1E3;
  padding: 2rem 1.5rem;
  border-radius: 2px;
  box-shadow: 
    0 4px 12px rgba(0, 0, 0, 0.15),
    0 2px 4px rgba(0, 0, 0, 0.1);
  border: 2px solid var(--border-color);
  border-top: 8px solid var(--border-color);
  transition: all 0.3s ease;
  
  /* Paper texture */
  background-image: 
    repeating-linear-gradient(0deg, transparent, transparent 1.5px, rgba(0, 0, 0, 0.02) 1.5px, rgba(0, 0, 0, 0.02) 3px);
}

.award-card-wrapper:hover .award-card {
  transform: translateY(-4px) rotate(0deg) !important;
  box-shadow: 
    0 8px 24px rgba(0, 0, 0, 0.2),
    0 4px 8px rgba(0, 0, 0, 0.15);
}

/* Corner Fold */
.corner-fold {
  position: absolute;
  top: 0;
  right: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 30px 30px 0;
  border-color: transparent #E5E1D3 transparent transparent;
  filter: drop-shadow(-1px 1px 2px rgba(0, 0, 0, 0.15));
}

/* Year Badge */
.year-badge {
  display: inline-block;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 700;
  font-family: var(--font-label);
  color: #FFF;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin-bottom: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

/* Trophy Container */
.trophy-container {
  display: flex;
  justify-content: center;
  margin: 1rem 0 1.5rem;
}

.trophy-icon {
  width: 64px;
  height: 64px;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
}

/* Award Title */
.award-title {
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.3;
  color: #2C1810;
  margin-bottom: 0.75rem;
  text-align: center;
}

/* Award Institution */
.award-institution {
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  margin-bottom: 0.5rem;
  text-align: center;
  opacity: 0.85;
}

/* Award Date */
.award-date {
  font-size: 0.75rem;
  color: #5A4A3A;
  opacity: 0.6;
  text-align: center;
  margin-bottom: 1rem;
}

/* Approval Stamp */
.approval-stamp {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  width: 80px;
  height: 80px;
  border: 3px solid;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(-15deg);
  opacity: 0.3;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  transition: opacity 0.3s ease;
}

.award-card-wrapper:hover .approval-stamp {
  opacity: 0.5;
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .cork-board {
    padding: 2rem 1rem;
    min-height: 400px;
  }
  
  .awards-grid {
    grid-template-columns: 1fr;
    gap: 3rem 0;
  }
  
  .award-card {
    padding: 1.75rem 1.25rem;
  }
  
  .award-title {
    font-size: 1.1rem;
  }
  
  .trophy-icon {
    width: 56px;
    height: 56px;
  }
  
  .wood-frame {
    inset: -0.75rem;
  }
}

@media (max-width: 480px) {
  .notice-board-container {
    padding: 0.5rem;
  }
  
  .cork-board {
    padding: 1.5rem 0.75rem;
  }
  
  .award-card {
    padding: 1.5rem 1rem;
  }
  
  .award-title {
    font-size: 1rem;
  }
  
  .trophy-icon {
    width: 48px;
    height: 48px;
  }
  
  .year-badge {
    font-size: 0.7rem;
    padding: 0.35rem 0.85rem;
  }
  
  .approval-stamp {
    width: 70px;
    height: 70px;
    font-size: 0.6rem;
  }
}
</style>
