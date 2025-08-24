<template>
  <section class="flex justify-center p-12">
    <div class=" text-white rounded-2xl overflow-hidden max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 p-8 items-center">

      <!-- Left Side -->
      <div class="flex flex-col space-y-6">
        <!-- Image -->
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
          alt="Team working"
          class="rounded-xl object-cover w-full  max-w-h-68"
        />

        <!-- Text & Button -->
        <div>
          <h3 class="text-3xl font-bold">Eager to Begin?</h3>
          <p class="text-gray-300 mt-1 text-2xl">Reach out to us today!</p>
         <button
  class="mt-4 cursor-pointer border-white/10  hover:bg-[#1a1a1a]/80 text-white px-8 py-4 rounded-lg border  
          transition-all duration-300 font-semibold flex items-center space-x-2 group"
>
  <span>Get in Touch</span>
  <!-- Icon (arrow) -->
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    stroke-width="2"
  >
    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
  </svg>
</button>
        </div>
      </div>

      <!-- Right Side -->
      <div class="ml-4">
        <!-- Tag -->
        <span class="inline-block  border border-gray-600  text-white px-4 py-1 rounded-full text-sm mb-4">
          Why Us
        </span>

        <!-- Heading -->
        <h2 class="text-3xl md:text-4xl font-semibold mb-4">Why Choose Us</h2>

        <!-- Paragraph -->
        <p class="text-gray-300 mb-6 text-[19px]">
          At Crewcial, we understand the unique challenges faced by businesses and individuals in the digital landscape.
          Here’s why you should partner with us:
        </p>

        <!-- Accordion -->
        <div class="space-y-3">
          <div
            v-for="(item, index) in accordionItems"
            :key="index"
            class="border border-gray-700 rounded-xl"
          >
            <div
            
              class="flex justify-between rounded-2xl items-center px-4 py-3 cursor-pointer hover:bg-gray-900 transition"
              @click="toggleItem(index)"
            >
              <span>{{ item.title }}</span>
              <span class="text-xl font-bold">{{ openIndex === index ? '-' : '+' }}</span>
            </div>

            <div
              v-if="openIndex === index"
              class="px-4 mt-4 pb-3 text-gray-400 text-sm"
            >
              {{ item.content }}
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const openIndex = ref(null)

const accordionItems = [
  {
    title: 'Customized Solutions',
    content: 'We tailor our strategies to your brand’s unique needs and goals.'
  },
  {
    title: 'Demonstrated Success',
    content: 'Our track record speaks for itself with proven results.'
  },
  {
    title: 'Commitment to Quality',
    content: 'We uphold the highest standards in all our projects.'
  }
]

function toggleItem(index) {
  openIndex.value = openIndex.value === index ? null : index
}
</script>
