<template>
  <header
    class="fixed top-0 left-0 w-full bg-[#141414d3] text-white flex justify-between items-center px-96 py-3 z-50">

    <!-- Logo -->

    <div class="flex items-center">
      <div class="w-10 h-10 flex items-center justify-center rounded-full cursor-pointer">
        <img src="/sata logo.png" alt="">
      </div>
    </div>

    <!-- Desktop Nav -->

    <nav class="hidden md:flex items-center space-x-6 font-semibold text-xl">
      <RouterLink
        to="/"
        :class="route.path === '/' ? 'text-blue-400' : 'hover:text-gray-300'">
        Home
      </RouterLink>
      <RouterLink
        to="/about"
        :class="route.path === '/about' ? 'text-blue-400' : 'hover:text-gray-300'">
        About
      </RouterLink>
      <RouterLink
        to="/work"
        :class="route.path === '/work' ? 'text-blue-400' : 'hover:text-gray-300'">
        Work
      </RouterLink>
      <RouterLink
        to="/contact"
        :class="route.path === '/contact' ? 'text-blue-400' : 'hover:text-gray-300'">
        Contact
      </RouterLink>
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
        <RouterLink to="/" @click="closeMenu" :class="route.path === '/' ? 'text-blue-400' : 'hover:text-blue-400'">Home</RouterLink>
        <RouterLink to="/about" @click="closeMenu" :class="route.path === '/about' ? 'text-blue-400' : 'hover:text-blue-400'">About</RouterLink>
        <RouterLink to="/work" @click="closeMenu" :class="route.path === '/work' ? 'text-blue-400' : 'hover:text-blue-400'">Work</RouterLink>
        <RouterLink to="/contact" @click="closeMenu" :class="route.path === '/contact' ? 'text-blue-400' : 'hover:text-blue-400'">Contact</RouterLink>
        <button
          class="bg-gradient-to-b from-gray-200 to-blue-300 text-black font-medium py-2 px-4 rounded-lg shadow hover:opacity-90 transition">
          Book Consultation
        </button>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const isOpen = ref(false)
const route = useRoute()

const closeMenu = () => {
  isOpen.value = false
}

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
