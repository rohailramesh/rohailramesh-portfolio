<script setup lang="ts">
import { ref, onMounted } from 'vue'

// Props
interface MapRoom {
  id: string
  label: string
  sub: string
  position: { x: number; y: number }
  icon: string
}

const isInView = ref(false)

const rooms: MapRoom[] = [
  { id: 'about', label: 'Staff Pick', sub: 'About', position: { x: 20, y: 20 }, icon: '📖' },
  { id: 'experience', label: 'Career Chronicles', sub: 'Experience', position: { x: 75, y: 28 }, icon: '📚' },
  { id: 'projects', label: 'Featured Editions', sub: 'Projects', position: { x: 80, y: 44 }, icon: '✨' },
  { id: 'skills', label: 'Reference Collection', sub: 'Skills', position: { x: 45, y: 56 }, icon: '🔮' },
  { id: 'awards', label: 'Wall of Fame', sub: 'Awards', position: { x: 15, y: 68 }, icon: '🏆' },
  { id: 'resume', label: 'Catalog Card', sub: 'Resume', position: { x: 68, y: 78 }, icon: '📜' },
  { id: 'contact', label: 'Customer Service Desk', sub: 'Contact', position: { x: 35, y: 88 }, icon: '✉️' },
]

// State
const mapVisible = ref(false)
const pathsDrawn = ref(false)
const hoveredRoom = ref<string | null>(null)
const mapContainer = ref<HTMLElement | null>(null)

// Emit for navigation
const emit = defineEmits<{
  navigate: [id: string]
}>()

const navigateTo = (id: string) => {
  emit('navigate', id)
}

// Generate path between two points for SVG with more organic curves
const generatePath = (from: { x: number; y: number }, to: { x: number; y: number }): string => {
  const dx = to.x - from.x
  const dy = to.y - from.y
  const distance = Math.sqrt(dx * dx + dy * dy)
  
  // Create more dynamic curves based on direction
  const controlOffset = distance * 0.3
  
  // First control point - offset perpendicular to the direction
  const controlX1 = from.x + dx * 0.25 + (dy > 0 ? -controlOffset * 0.3 : controlOffset * 0.3)
  const controlY1 = from.y + dy * 0.25
  
  // Second control point - offset in opposite direction for S-curve
  const controlX2 = from.x + dx * 0.75 + (dy > 0 ? controlOffset * 0.3 : -controlOffset * 0.3)
  const controlY2 = from.y + dy * 0.75
  
  return `M ${from.x} ${from.y} C ${controlX1} ${controlY1}, ${controlX2} ${controlY2}, ${to.x} ${to.y}`
}

// Intersection Observer for scroll-triggered animation
onMounted(() => {
  if (!mapContainer.value) return

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isInView.value) {
          isInView.value = true
          
          // Trigger animations when map comes into view
          setTimeout(() => {
            mapVisible.value = true
          }, 200)
          
          setTimeout(() => {
            pathsDrawn.value = true
          }, 800)
        }
      })
    },
    { threshold: 0.2 } // Trigger when 20% of the map is visible
  )

  observer.observe(mapContainer.value)
})
</script>

<template>
  <div ref="mapContainer" class="enchanted-map-container">
    
    <!-- Parchment Background with torn edges -->
    <div class="parchment-wrapper" :class="{ 'visible': mapVisible }">
      
      <!-- Decorative corner flourishes -->
      <div class="corner-flourish top-left">✦</div>
      <div class="corner-flourish top-right">✦</div>
      <div class="corner-flourish bottom-left">✦</div>
      <div class="corner-flourish bottom-right">✦</div>
      
      <!-- Compass Rose -->
      <div class="compass-rose">
        <svg viewBox="0 0 100 100" class="compass-svg">
          <!-- Compass circle -->
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" stroke-width="1" opacity="0.3"/>
          <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" stroke-width="0.5" opacity="0.2"/>
          
          <!-- North point (main) -->
          <path d="M 50 5 L 55 45 L 50 40 L 45 45 Z" fill="currentColor" opacity="0.6"/>
          
          <!-- South point -->
          <path d="M 50 95 L 55 55 L 50 60 L 45 55 Z" fill="currentColor" opacity="0.4"/>
          
          <!-- East point -->
          <path d="M 95 50 L 55 45 L 60 50 L 55 55 Z" fill="currentColor" opacity="0.4"/>
          
          <!-- West point -->
          <path d="M 5 50 L 45 45 L 40 50 L 45 55 Z" fill="currentColor" opacity="0.4"/>
          
          <!-- N letter -->
          <text x="50" y="20" text-anchor="middle" font-size="12" fill="currentColor" opacity="0.7" font-family="var(--font-label)">N</text>
        </svg>
      </div>
      
      <!-- Title -->
      <div class="map-title">
        <h2 :style="{ fontFamily: 'var(--font-display)' }">Shop Map</h2>
        <p :style="{ fontFamily: 'var(--font-label)' }">Navigate the Aisles</p>
      </div>
      
      <!-- SVG Map Floor Plan -->
      <svg class="map-svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
        <defs>
          <!-- Filter for paper texture effect -->
          <filter id="paper-texture">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" result="noise"/>
            <feDiffuseLighting in="noise" lighting-color="white" surfaceScale="1">
              <feDistantLight azimuth="45" elevation="60"/>
            </feDiffuseLighting>
          </filter>
          
          <!-- Glow effect for hover -->
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        <!-- Connecting Paths (ink lines) -->
        <g class="path-group" :class="{ 'drawn': pathsDrawn }">
          <path
            v-for="(room, index) in rooms.slice(0, -1)"
            :key="`path-${index}`"
            :d="generatePath(room.position, rooms[index + 1]!.position)"
            class="ink-path"
            :style="{ '--path-delay': `${index * 0.15}s` }"
          />
        </g>
        
        <!-- Room Markers -->
        <g v-for="(room, index) in rooms" :key="room.id">
          <!-- Room circle/area -->
          <g 
            @mouseenter="hoveredRoom = room.id"
            @mouseleave="hoveredRoom = null"
            @click="navigateTo(room.id)"
            class="room-marker"
            :class="{ 'hovered': hoveredRoom === room.id }"
            :style="{ '--room-delay': `${index * 0.1 + 1}s` }"
          >
            <!-- Glow circle on hover -->
            <circle 
              :cx="room.position.x" 
              :cy="room.position.y" 
              r="5.5"
              class="room-glow"
              :style="{ fill: 'var(--accent)' }"
            />
            
            <!-- Main room circle -->
            <circle 
              :cx="room.position.x" 
              :cy="room.position.y" 
              r="4"
              class="room-circle"
              :style="{ fill: 'var(--card)', stroke: 'var(--foreground)' }"
            />
            
            <!-- Room icon inside circle -->
            <text
              :x="room.position.x"
              :y="room.position.y + 1.5"
              text-anchor="middle"
              class="room-icon"
              font-size="4"
            >
              {{ room.icon }}
            </text>
            
            <!-- Room label below circle -->
            <text
              :x="room.position.x"
              :y="room.position.y + 7"
              text-anchor="middle"
              class="room-label"
              font-size="3"
              :style="{ fontFamily: 'var(--font-label)' }"
            >
              {{ room.label }}
            </text>
          </g>
        </g>
        
        <!-- "You are here" marker at entrance with person -->
        <g class="you-are-here" :style="{ '--marker-delay': '1.5s' }">
          <!-- Person walking in at top -->
          <g class="person-at-entrance" transform="translate(50, 8)">
            <!-- Person SVG - bigger -->
            <g transform="scale(0.2) translate(-24, -32)">
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
            </g>
            <!-- Person shadow -->
            <ellipse cx="0" cy="3" rx="3" ry="1" fill="rgba(0, 0, 0, 0.2)" class="person-shadow"/>
          </g>
          
          <!-- Entrance label below person with more space -->
          <text class="entrance-label" x="50" y="16.5" text-anchor="middle" font-size="3" fill="var(--foreground)" font-family="var(--font-label)" opacity="0.7" font-weight="600">
            Entrance
          </text>
        </g>
      </svg>
      
      <!-- Floating dust particles -->
      <div class="dust-particles">
        <div v-for="n in 15" :key="n" class="dust-particle" :style="{ '--particle-delay': `${n * 0.4}s` }"></div>
      </div>
      
    </div>
    
  </div>
</template>

<style scoped>
.enchanted-map-container {
  position: relative;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 0 1rem 2rem;
}

/* Parchment wrapper */
.parchment-wrapper {
  position: relative;
  background: linear-gradient(135deg, #f4f1e8 0%, #e8dfc8 100%);
  border-radius: 8px;
  padding: 3rem 2rem;
  box-shadow: 
    0 10px 40px rgba(0, 0, 0, 0.15),
    inset 0 0 60px rgba(139, 116, 78, 0.1);
  opacity: 0;
  transform: translateY(20px) scale(0.95);
  transition: all 1s cubic-bezier(0.34, 1.56, 0.64, 1);
  
  /* Paper texture overlay */
  background-image: 
    repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(139, 116, 78, 0.03) 2px, rgba(139, 116, 78, 0.03) 4px),
    repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(139, 116, 78, 0.03) 2px, rgba(139, 116, 78, 0.03) 4px);
}

.parchment-wrapper.visible {
  opacity: 1;
  transform: translateY(0) scale(1);
}
.entrance-label{
  margin-top: 0.5rem;
}

/* Corner flourishes */
.corner-flourish {
  position: absolute;
  font-size: 1.5rem;
  color: var(--accent);
  opacity: 0.4;
  animation: gentleRotate 8s ease-in-out infinite;
}

.corner-flourish.top-left { top: 1rem; left: 1rem; }
.corner-flourish.top-right { top: 1rem; right: 1rem; animation-delay: 2s; }
.corner-flourish.bottom-left { bottom: 1rem; left: 1rem; animation-delay: 4s; }
.corner-flourish.bottom-right { bottom: 1rem; right: 1rem; animation-delay: 6s; }

@keyframes gentleRotate {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(15deg); }
}

/* Compass Rose */
.compass-rose {
  position: absolute;
  top: 2rem;
  right: 2rem;
  width: 70px;
  height: 70px;
  color: var(--muted-foreground);
  opacity: 0;
  animation: fadeInRotate 1.5s ease-out 1s forwards;
}

.compass-svg {
  width: 100%;
  height: 100%;
  animation: compassSpin 30s linear infinite;
}

@keyframes compassSpin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes fadeInRotate {
  from {
    opacity: 0;
    transform: rotate(-90deg) scale(0.5);
  }
  to {
    opacity: 1;
    transform: rotate(0deg) scale(1);
  }
}

/* Map Title */
.map-title {
  text-align: center;
  margin-bottom: 1rem;
}

.map-title h2 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  color: var(--foreground);
  opacity: 0;
  animation: fadeInUp 0.8s ease-out 0.5s forwards;
}

.map-title p {
  font-size: 0.9rem;
  color: var(--muted-foreground);
  text-transform: uppercase;
  letter-spacing: 2px;
  opacity: 0;
  animation: fadeInUp 0.8s ease-out 0.7s forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* SVG Map */
.map-svg {
  width: 100%;
  height: auto;
  min-height: 420px;
  max-height: 520px;
}

/* Ink Paths */
.ink-path {
  fill: none;
  stroke: var(--foreground);
  stroke-width: 0.3;
  opacity: 0.3;
  stroke-dasharray: 100;
  stroke-dashoffset: 100;
  stroke-linecap: round;
  transition: opacity 0.3s ease, stroke-width 0.3s ease;
}

.path-group.drawn .ink-path {
  animation: drawPath 1.5s ease-out var(--path-delay) forwards;
}

@keyframes drawPath {
  to {
    stroke-dashoffset: 0;
  }
}

/* Room Markers */
.room-marker {
  cursor: pointer;
  opacity: 0;
  transform-origin: center;
  animation: roomAppear 0.6s ease-out var(--room-delay) forwards;
  transition: transform 0.3s ease-out;
}

@keyframes roomAppear {
  from {
    opacity: 0;
    transform: scale(0);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.room-circle {
  stroke-width: 0.5;
  transition: all 0.3s ease-out;
  filter: drop-shadow(0 0 0 transparent);
}

.room-glow {
  opacity: 0;
  transition: all 0.3s ease-out;
  filter: blur(3px);
}

/* Clear hover state - glow ring appears around the room */
.room-marker:hover .room-glow {
  opacity: 0.6;
  transform: scale(1.4);
}

/* Room circle gets highlighted fill */
.room-marker:hover .room-circle {
  fill: var(--accent);
  stroke-width: 1;
}

/* Icon stays in place on hover */
.room-marker:hover .room-icon {
  /* No transform on hover - keep icon inside circle */
}

/* Label becomes bolder and more visible */
.room-marker:hover .room-label {
  font-weight: 700;
  opacity: 1;
  font-size: 3.2px;
}

/* Entire marker lifts slightly on hover */
.room-marker:hover {
  transform: translateY(-1px);
}

.room-icon {
  transition: transform 0.3s ease-out;
  pointer-events: none;
}

.room-label {
  fill: var(--foreground);
  opacity: 0.7;
  transition: all 0.3s ease-out;
  pointer-events: none;
}

/* You are here marker */
.you-are-here {
  opacity: 0;
  animation: markerBounce 0.8s ease-out var(--marker-delay) forwards;
}

@keyframes markerBounce {
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
  60% {
    opacity: 1;
    transform: translateY(2px);
  }
  80% {
    transform: translateY(-1px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Person at entrance */
.person-at-entrance {
  opacity: 0;
  animation: personWalkIn 1.2s ease-out 2s forwards;
}

.person-at-entrance g[transform*="scale"] {
  animation: heartbeat 2.5s ease-in-out 3.2s infinite;
}

@keyframes personWalkIn {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}

@keyframes heartbeat {
  0%, 100% {
    transform: scale(0.2) translate(-24, -32);
  }
  14% {
    transform: scale(0.22) translate(-24, -32);
  }
  28% {
    transform: scale(0.2) translate(-24, -32);
  }
  42% {
    transform: scale(0.22) translate(-24, -32);
  }
  56% {
    transform: scale(0.2) translate(-24, -32);
  }
}

/* Person shadow subtle pulse */
.person-shadow {
  animation: shadowPulse 2s ease-in-out infinite;
}

@keyframes shadowPulse {
  0%, 100% {
    opacity: 0.2;
    transform: scale(1);
  }
  50% {
    opacity: 0.15;
    transform: scale(1.1);
  }
}

/* Dust particles */
.dust-particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
}

.dust-particle {
  position: absolute;
  width: 3px;
  height: 3px;
  background: var(--accent);
  border-radius: 50%;
  opacity: 0;
  animation: floatDust 8s ease-in-out var(--particle-delay) infinite;
}

.dust-particle:nth-child(odd) {
  animation-duration: 10s;
}

@keyframes floatDust {
  0% {
    opacity: 0;
    transform: translate(0, 0) scale(0);
  }
  10% {
    opacity: 0.4;
  }
  50% {
    opacity: 0.6;
    transform: translate(var(--float-x, 20px), var(--float-y, -30px)) scale(1);
  }
  90% {
    opacity: 0.3;
  }
  100% {
    opacity: 0;
    transform: translate(var(--float-x, 40px), var(--float-y, -60px)) scale(0);
  }
}

.dust-particle:nth-child(1) { left: 10%; top: 20%; --float-x: 15px; --float-y: -25px; }
.dust-particle:nth-child(2) { left: 30%; top: 40%; --float-x: -20px; --float-y: -30px; }
.dust-particle:nth-child(3) { left: 50%; top: 30%; --float-x: 25px; --float-y: -35px; }
.dust-particle:nth-child(4) { left: 70%; top: 50%; --float-x: -15px; --float-y: -28px; }
.dust-particle:nth-child(5) { left: 85%; top: 25%; --float-x: 18px; --float-y: -32px; }
.dust-particle:nth-child(6) { left: 15%; top: 60%; --float-x: -22px; --float-y: -26px; }
.dust-particle:nth-child(7) { left: 45%; top: 70%; --float-x: 20px; --float-y: -29px; }
.dust-particle:nth-child(8) { left: 65%; top: 15%; --float-x: -18px; --float-y: -33px; }
.dust-particle:nth-child(9) { left: 25%; top: 80%; --float-x: 16px; --float-y: -27px; }
.dust-particle:nth-child(10) { left: 80%; top: 65%; --float-x: -25px; --float-y: -31px; }
.dust-particle:nth-child(11) { left: 40%; top: 10%; --float-x: 22px; --float-y: -34px; }
.dust-particle:nth-child(12) { left: 60%; top: 85%; --float-x: -19px; --float-y: -28px; }
.dust-particle:nth-child(13) { left: 20%; top: 45%; --float-x: 24px; --float-y: -30px; }
.dust-particle:nth-child(14) { left: 75%; top: 35%; --float-x: -21px; --float-y: -32px; }
.dust-particle:nth-child(15) { left: 55%; top: 55%; --float-x: 17px; --float-y: -29px; }

/* Responsive adjustments */
@media (max-width: 768px) {
  .parchment-wrapper {
    padding: 2rem 1.5rem;
  }
  
  .compass-rose {
    width: 50px;
    height: 50px;
    top: 1.5rem;
    right: 1.5rem;
  }
  
  .map-title h2 {
    font-size: 2rem;
  }
  
  .map-title p {
    font-size: 0.85rem;
    letter-spacing: 1.5px;
  }
  
  .map-svg {
    min-height: 380px;
  }
  
  .room-label {
    font-size: 3px;
  }
  
  .room-icon {
    font-size: 5px;
  }
  
  /* Make rooms bigger on tablet for easier tapping */
  .room-circle {
    r: 3.5;
  }
  
  .room-glow {
    r: 5;
  }
  
  /* Slightly smaller person on tablet */
  .person-at-entrance g[transform*="scale"] {
    animation: heartbeatTablet 2.5s ease-in-out 3.2s infinite;
  }
  
  @keyframes heartbeatTablet {
    0%, 100% {
      transform: scale(0.17) translate(-24, -32);
    }
    14% {
      transform: scale(0.19) translate(-24, -32);
    }
    28% {
      transform: scale(0.17) translate(-24, -32);
    }
    42% {
      transform: scale(0.19) translate(-24, -32);
    }
    56% {
      transform: scale(0.17) translate(-24, -32);
    }
  }
}

@media (max-width: 480px) {
  .parchment-wrapper {
    padding: 1.5rem 1rem;
  }
  
  .map-title h2 {
    font-size: 1.75rem;
    margin-bottom: 0.3rem;
  }
  
  .map-title p {
    font-size: 0.7rem;
    letter-spacing: 1px;
  }
  
  .compass-rose {
    width: 40px;
    height: 40px;
    top: 1rem;
    right: 1rem;
  }
  
  .map-svg {
    min-height: 320px;
  }
  
  .room-label {
    font-size: 3.5px;
  }
  
  .room-icon {
    font-size: 5.5px;
  }
  
  /* Even bigger touch targets on mobile */
  .room-circle {
    r: 4;
  }
  
  .room-glow {
    r: 6;
  }
  
  .corner-flourish {
    font-size: 1rem;
  }
  
  /* Smaller person on mobile */
  .person-at-entrance g[transform*="scale"] {
    animation: heartbeatMobile 2.5s ease-in-out 3.2s infinite;
  }
  
  @keyframes heartbeatMobile {
    0%, 100% {
      transform: scale(0.15) translate(-24, -32);
    }
    14% {
      transform: scale(0.17) translate(-24, -32);
    }
    28% {
      transform: scale(0.15) translate(-24, -32);
    }
    42% {
      transform: scale(0.17) translate(-24, -32);
    }
    56% {
      transform: scale(0.15) translate(-24, -32);
    }
  }
}

@media (max-width: 380px) {
  .map-title h2 {
    font-size: 1.5rem;
  }
  
  .map-title p {
    font-size: 0.65rem;
  }
  
  .compass-rose {
    display: none; /* Hide on very small screens to save space */
  }
  
  .parchment-wrapper {
    padding: 1.25rem 0.75rem;
  }
  
  .room-label {
    font-size: 4px;
  }
  
  .room-icon {
    font-size: 6px;
  }
}
</style>
