<template>
  <header
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
    :class="['fixed top-0 left-0 w-full bg-white/90 backdrop-blur-sm text-gray-900 flex justify-between items-center px-4 md:px-96 py-3 z-50 transition-transform duration-300 border-b border-gray-200', navbarHidden && !isHovering ? '-translate-y-full' : 'translate-y-0']">

    <!-- Logo -->
    <div class="flex items-center">
      <div class="w-8 md:w-10 h-8 md:h-10 flex items-center justify-center rounded-full cursor-pointer">
        <img src="/sata logo.png" alt="">
      </div>
    </div>

    <!-- Desktop Nav -->
    <nav class="hidden md:flex items-center space-x-6 font-semibold text-xl relative">
      <!-- Added cylindrical background that slides behind active link -->
      <div
        v-if="activeLink"
        class="absolute top-1/2 -translate-y-1/2 h-10 bg-blue-100 rounded-full transition-all duration-300 ease-out"
        :style="{
          width: activeLink.width + 'px',
          left: activeLink.left + 'px',
        }"
      />
      
      <a 
        href="/" 
        ref="navLinkRefs"
        :class="['relative z-10 transition-all duration-300 px-3 py-1.5 rounded-lg', currentPath === '/' ? 'text-blue-600' : 'hover:text-blue-500']"
        @click="setActiveLink($event, '/')">
        Home
      </a>
      <a 
        href="/about" 
        ref="navLinkRefs"
        :class="['relative z-10 transition-all duration-300 px-3 py-1.5 rounded-lg', currentPath === '/about' ? 'text-blue-600' : 'hover:text-blue-500']"
        @click="setActiveLink($event, '/about')">
        About
      </a>
      <a 
        href="/work" 
        ref="navLinkRefs"
        :class="['relative z-10 transition-all duration-300 px-3 py-1.5 rounded-lg', currentPath === '/work' ? 'text-blue-600' : 'hover:text-blue-500']"
        @click="setActiveLink($event, '/work')">
        Work
      </a>
      <a 
        href="/contact" 
        ref="navLinkRefs"
        :class="['relative z-10 transition-all duration-300 px-3 py-1.5 rounded-lg', currentPath === '/contact' ? 'text-blue-600' : 'hover:text-blue-500']"
        @click="setActiveLink($event, '/contact')">
        Contact
      </a>
    </nav>

    <!-- Desktop Button -->
    <button
      class="hidden md:block ml-4 bg-gradient-to-b from-blue-500 to-blue-600 text-white font-medium py-2 px-4 rounded-lg shadow hover:opacity-90 transition">
      Book Consultation
    </button>

    <!-- Hamburger Button (mobile) -->
    <button
      class="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1 rounded hover:bg-gray-100 transition"
      @click="isOpen = !isOpen">
      <span :class="['block w-6 h-0.5 bg-gray-900 transition-all duration-300', isOpen && 'rotate-45 translate-y-2']"></span>
      <span :class="['block w-6 h-0.5 bg-gray-900 transition-all duration-300', isOpen && 'opacity-0']"></span>
      <span :class="['block w-6 h-0.5 bg-gray-900 transition-all duration-300', isOpen && '-rotate-45 -translate-y-2']"></span>
    </button>

    <!-- Mobile Menu -->
    <transition name="slide-fade">
      <div
        v-if="isOpen"
        class="absolute top-full left-0 w-full bg-white/95 backdrop-blur-sm flex flex-col text-gray-900 p-4 space-y-4 md:hidden z-50 border-t border-gray-200">
        <a 
          href="/" 
          @click="closeMenu" 
          :class="['py-2 px-3 rounded-lg transition-all duration-300', currentPath === '/' ? 'text-blue-600 bg-blue-50' : 'hover:text-blue-600 hover:bg-gray-100']">
          Home
        </a>
        <a 
          href="/about" 
          @click="closeMenu" 
          :class="['py-2 px-3 rounded-lg transition-all duration-300', currentPath === '/about' ? 'text-blue-600 bg-blue-50' : 'hover:text-blue-600 hover:bg-gray-100']">
          About
        </a>
        <a 
          href="/work" 
          @click="closeMenu" 
          :class="['py-2 px-3 rounded-lg transition-all duration-300', currentPath === '/work' ? 'text-blue-600 bg-blue-50' : 'hover:text-blue-600 hover:bg-gray-100']">
          Work
        </a>
        <a 
          href="/contact" 
          @click="closeMenu" 
          :class="['py-2 px-3 rounded-lg transition-all duration-300', currentPath === '/contact' ? 'text-blue-600 bg-blue-50' : 'hover:text-blue-600 hover:bg-gray-100']">
          Contact
        </a>
        <button
          class="w-full bg-gradient-to-b from-blue-500 to-blue-600 text-white font-medium py-2 px-4 rounded-lg shadow hover:opacity-90 transition">
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
const isHovering = ref(false)
const activeLink = ref(null)
const navLinkRefs = ref([])

const closeMenu = () => {
  isOpen.value = false
}

const onMouseEnter = () => {
  isHovering.value = true
}

const onMouseLeave = () => {
  isHovering.value = false
}

const setActiveLink = (event, path) => {
  const element = event.target
  activeLink.value = {
    width: element.offsetWidth,
    left: element.offsetLeft,
  }
}

const handleScroll = () => {
  const currentScrollY = window.scrollY

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
  
  if (navLinkRefs.value.length > 0) {
    const firstLink = navLinkRefs.value[0]
    activeLink.value = {
      width: firstLink.offsetWidth,
      left: firstLink.offsetLeft,
    }
  }
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