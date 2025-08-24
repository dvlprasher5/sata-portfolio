<template>
  <div class=" text-white px-4 flex justify-center py-18">
    <!-- Main Card -->
    <div class="bg-gradient-to-br  from-[#1a1a1a]/80 to-[#0f0f0f]/70 backdrop-blur-lg shadow-lg border border-white/10 rounded-2xl p-8 max-w-4xl w-full text-center ">
      
      <!-- Heading -->
      <h1 class="text-4xl font-extrabold mb-4">
        Let's Boost Your Marketing Results
      </h1>

      <!-- Subheading -->
      <p class="text-gray-400 mb-8 text-lg">
        Unlock your business potential with expert social media strategies that engage and deliver results.
      </p>

      <!-- Main CTA Button -->
      <button
        class="px-4 py-2 sm:px-8 sm:py-3 cursor-pointer  bg-gradient-to-b from-white to-blue-400 text-black font-semibold rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
      >
        Book Free Consultation
      </button>

      <!-- Moving Tags -->
      <div class="mt-10 space-y-4 overflow-hidden">
        
        <!-- Row 1 -->
        <div class="flex animate-scroll-left">
          <div
            v-for="(item, i) in movingTags"
            :key="'row1-' + i"
            class="flex items-center bg-black border border-gray-700 rounded-full px-2 py-1 sm:px-5 sm:py-2 mx-2 whitespace-nowrap"
          >
            <span class="text-green-500 mr-2 py-[1px] px-[1px] bg-green-900 border border-green-400 rounded-full"><Check /></span>
            <span>{{ item }}</span>
          </div>
          <!-- Duplicate for infinite loop -->
          <div
            v-for="(item, i) in movingTags"
            :key="'row1dup-' + i"
            class="flex items-center bg-black border border-gray-700 rounded-full px-5 py-2 mx-2 whitespace-nowrap"
          >
            <span class="text-green-500 mr-2 py-[1px] px-[1px] bg-green-900 border border-green-400"><Check /></span>
            <span>{{ item }}</span>
          </div>
        </div>

        <!-- Row 2 -->
        <div class="flex animate-scroll-right">
          <div
            v-for="(item, i) in movingTags"
            :key="'row2-' + i"
            class="flex items-center bg-black border border-gray-700 rounded-full px-5 py-2 mx-2 whitespace-nowrap"
          >
            <span class="text-green-500 mr-2 py-[1px] px-[1px] bg-green-900 border border-green-400 rounded-full"><Check /></span>
            <span>{{ item }}</span>
          </div>
          <!-- Duplicate for infinite loop -->
          <div
            v-for="(item, i) in movingTags"
            :key="'row2dup-' + i"
            class="flex items-center bg-black border border-gray-700 rounded-full px-5 py-2 mx-2 whitespace-nowrap"
          >
            <span class="text-green-500 mr-2 py-[1px] px-[1px] bg-green-900 border border-green-400 rounded-full"><Check /></span>
            <span>{{ item }}</span>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { Check } from 'lucide-vue-next';

const movingTags = [
  "Get More Clients",
  "Boost Your Leads",
  "Expert Marketing",
  "Grow Your Brand",
  "Custom Campaigns",
  "Proven Results",
  "Increase ROI",
];
</script>

<style scoped>
@keyframes scroll-left {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
@keyframes scroll-right {
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0); }
}

.animate-scroll-left {
  animation: scroll-left 20s linear infinite;
}
.animate-scroll-right {
  animation: scroll-right 20s linear infinite;
}

/* Slow animation on small screens */
@media (max-width: 640px) {
  .animate-scroll-left {
    animation-duration: 40s;
  }
  .animate-scroll-right {
    animation-duration: 40s;
  }
}
</style>
