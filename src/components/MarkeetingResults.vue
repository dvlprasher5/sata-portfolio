<template>
  <div class="bg-gray-50 text-gray-900 px-4 flex justify-center py-18">
    <!-- Main Card -->
    <div class="bg-gradient-to-br from-white/95 to-gray-50/90 backdrop-blur-lg shadow-xl border border-gray-200 rounded-2xl p-8 max-w-4xl w-full text-center">
      
      <!-- Heading -->
      <h1 class="text-4xl font-extrabold mb-4 text-gray-900">
        Let's Boost Your Marketing Results
      </h1>

      <!-- Subheading -->
      <p class="text-gray-600 mb-8 text-lg">
        Unlock your business potential with expert social media strategies that engage and deliver results.
      </p>

      <!-- Main CTA Button -->
      <button
        class="px-4 py-2 sm:px-8 sm:py-3 cursor-pointer bg-gradient-to-b from-blue-500 to-blue-600 text-white font-semibold rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
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
            class="flex items-center bg-white border border-gray-300 rounded-full px-2 py-1 sm:px-5 sm:py-2 mx-2 whitespace-nowrap shadow-sm"
          >
            <span class="text-green-600 mr-2 py-[1px] px-[1px] bg-green-100 border border-green-300 rounded-full"><Check /></span>
            <span class="text-gray-800">{{ item }}</span>
          </div>
          <!-- Duplicate for infinite loop -->
          <div
            v-for="(item, i) in movingTags"
            :key="'row1dup-' + i"
            class="flex items-center bg-white border border-gray-300 rounded-full px-5 py-2 mx-2 whitespace-nowrap shadow-sm"
          >
            <span class="text-green-600 mr-2 py-[1px] px-[1px] bg-green-100 border border-green-300 rounded-full"><Check /></span>
            <span class="text-gray-800">{{ item }}</span>
          </div>
        </div>

        <!-- Row 2 -->
        <div class="flex animate-scroll-right">
          <div
            v-for="(item, i) in movingTags"
            :key="'row2-' + i"
            class="flex items-center bg-white border border-gray-300 rounded-full px-5 py-2 mx-2 whitespace-nowrap shadow-sm"
          >
            <span class="text-green-600 mr-2 py-[1px] px-[1px] bg-green-100 border border-green-300 rounded-full"><Check /></span>
            <span class="text-gray-800">{{ item }}</span>
          </div>
          <!-- Duplicate for infinite loop -->
          <div
            v-for="(item, i) in movingTags"
            :key="'row2dup-' + i"
            class="flex items-center bg-white border border-gray-300 rounded-full px-5 py-2 mx-2 whitespace-nowrap shadow-sm"
          >
            <span class="text-green-600 mr-2 py-[1px] px-[1px] bg-green-100 border border-green-300 rounded-full"><Check /></span>
            <span class="text-gray-800">{{ item }}</span>
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