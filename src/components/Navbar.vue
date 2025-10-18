<template>
  <header
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
    :class="['fixed top-0 left-0 w-full bg-[#141414d3] text-white flex justify-between items-center px-96 py-3 z-50 transition-transform duration-300', navbarHidden && !isHovering ? '-translate-y-full' : 'translate-y-0']">

    <!-- Logo -->
    <div class="flex items-center">
      <div class="w-10 h-10 flex items-center justify-center rounded-full cursor-pointer">
        <img src="/sata logo.png" alt="">
      </div>
    </div>

    <!-- Desktop Nav -->
    <nav class="hidden md:flex items-center space-x-6 font-semibold text-xl">
      <a href="/" :class="currentPath === '/' ? 'text-blue-400' : 'hover:text-gray-300'">
        Home
      </a>
      <a href="/about" :class="currentPath === '/about' ? 'text-blue-400' : 'hover:text-gray-300'">
        About
      </a>
      <a href="/work" :class="currentPath === '/work' ? 'text-blue-400' : 'hover:text-gray-300'">
        Work
      </a>
      <a href="/contact" :class="currentPath === '/contact' ? 'text-blue-400' : 'hover:text-gray-300'">
        Contact
      </a>
    </nav>

    <!-- Desktop Button -->
    <button
      class="hidden md:block ml-4 bg-gradient-to-b from-gray-200 to-blue-300 text-black font-medium py-2 px-4 rounded-lg shadow hover:opacity-90 transition">
      Book Consultation
    </button>

    <!-- Hamburger Button (mobile) -->
    <button
      class="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1 rounded hover:bg-white/10 transition"
      @click="isOpen = !isOpen">
      <span class="block w-6 h-0.5 bg-white"></span>
      <span class="block w-6 h-0.5 bg-white"></span>
      <span class="block w-6 h-0.5 bg-white"></span>
    </button>

    <!-- Mobile Menu -->
    <transition name="slide-fade">
      <div
        v-if="isOpen"
        class="absolute top-full left-0 w-full bg-black/95 backdrop-blur-sm flex flex-col text-white p-4 space-y-3 md:hidden z-50">
        <a href="/" @click="closeMenu" :class="currentPath === '/' ? 'text-blue-400' : 'hover:text-blue-400'">Home</a>
        <a href="/about" @click="closeMenu" :class="currentPath === '/about' ? 'text-blue-400' : 'hover:text-blue-400'">About</a>
        <a href="/work" @click="closeMenu" :class="currentPath === '/work' ? 'text-blue-400' : 'hover:text-blue-400'">Work</a>
        <a href="/contact" @click="closeMenu" :class="currentPath === '/contact' ? 'text-blue-400' : 'hover:text-blue-400'">Contact</a>
        <button
          class="bg-gradient-to-b from-gray-200 to-blue-300 text-black font-medium py-2 px-4 rounded-lg shadow hover:opacity-90 transition">
          Book Consultation
        </button>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isOpen = ref(false)
const navbarHidden = ref(false)
const lastScrollY = ref(0)
const currentPath = ref('/')
// <CHANGE> Added isHovering ref to track mouse hover state
const isHovering = ref(false)

const closeMenu = () => {
  isOpen.value = false
}

// <CHANGE> Added mouse enter handler to show navbar on hover
const onMouseEnter = () => {
  isHovering.value = true
}

// <CHANGE> Added mouse leave handler to hide navbar on mouse leave
const onMouseLeave = () => {
  isHovering.value = false
}

const handleScroll = () => {
  const currentScrollY = window.scrollY

  // Hide navbar when scrolling down, show when scrolling up
  if (currentScrollY > lastScrollY.value && currentScrollY > 50) {
    navbarHidden.value = true
  } else {
    navbarHidden.value = false
  }

  lastScrollY.value = currentScrollY
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  currentPath.value = window.location.pathname
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style>
.slide-fade-enter-active, .slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>