<script setup lang="ts">
import { Check } from 'lucide-vue-next';
</script>

<template>
  <section class=" text-white py-16">
    <div class="max-w-6xl mx-auto px-4">

      <!-- Header -->
      <div class="text-center mb-12">
        <span class="px-4 py-1 border border-white rounded-full text-sm">
          Flexible Plans for Every Agency
        </span>
        <h2 class="text-4xl font-bold mt-6">Choose Your Growth Plan</h2>
        <p class="text-gray-400 mt-4 max-w-2xl mx-auto">
          Whether you’re just starting out or scaling up, our plans are designed
          to help you achieve your marketing goals with ease and confidence.
        </p>
      </div>

      <!-- First Row (2 Cards) -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <!-- Starter Plan -->
        <div class="bg-gradient-to-br from-[#1a1a1a]/80 to-[#0f0f0f]/70 backdrop-blur-lg shadow-lg border border-white/10 rounded-2xl p-8">
          <h3 class="text-2xl font-bold mb-2">Starter Plan</h3>
          <p class="text-gray-400 mb-4">
            Perfect for startups and small businesses building their online presence.
          </p>
          <p class="text-2xl font-bold mb-6">$900 <span class="text-lg font-normal">/one-time</span></p>
          <ul class="space-y-3 text-gray-300">
            <li class="flex gap-1"> <Check color="#009996" style="filter: drop-shadow(0 0 6px #009996);" /> Website Setup (up to 5 pages)</li>
            <li class="flex gap-1"> <Check color="#009996" style="filter: drop-shadow(0 0 6px #009996);" /> Social Media Profile Setup (up to 2 platforms)</li>
            <li class="flex gap-1"> <Check color="#009996" style="filter: drop-shadow(0 0 6px #009996);" /> Basic SEO & Analytics</li>
            <li class="flex gap-1"> <Check color="#009996" style="filter: drop-shadow(0 0 6px #009996);" /> 1 Month Support</li>
          </ul>
          <div class="mt-11">
            <button class="px-4 py-3 cursor-pointer border border-white/10 w-full hover:bg-[#1a1a1a]/80">Book My Call</button>
          </div>
        </div>

        <!-- Growth Plan -->
        <div class="bg-gradient-to-br from-[#1a1a1a]/80 to-[#0f0f0f]/70 backdrop-blur-lg shadow-lg border border-white/10 rounded-2xl p-8">
          <h3 class="text-2xl font-bold mb-2">Growth Plan</h3>
          <p class="text-gray-400 mb-4">
            Ideal for growing agencies or businesses ready to scale.
          </p>
          <p class="text-2xl font-bold mb-6">$1,800 <span class="text-lg font-normal">/month</span></p>
          <ul class="space-y-3 text-gray-300">
            <li class="flex gap-1"> <Check color="#009996" style="filter: drop-shadow(0 0 6px #009996);" /> Website Setup (up to 10 pages)</li>
            <li class="flex gap-1"> <Check color="#009996" style="filter: drop-shadow(0 0 6px #009996);" /> Advanced SEO & Analytics</li>
            <li class="flex gap-1"> <Check color="#009996" style="filter: drop-shadow(0 0 6px #009996);" /> Social Media Management (up to 3 platforms, 8 posts/month)</li>
            <li class="flex gap-1"> <Check color="#009996" style="filter: drop-shadow(0 0 6px #009996);" /> 3 Case Studies & Blog Integration (CMS)</li>
            <li class="flex gap-1"> <Check color="#009996" style="filter: drop-shadow(0 0 6px #009996);" /> Monthly Performance Report</li>
          </ul>
          <div class="mt-8">
            <button class="px-4 py-3 cursor-pointer border border-white/10 w-full hover:bg-[#1a1a1a]/80">Book My Call</button>
          </div>
        </div>
      </div>

      <!-- Second Row (1 Card) -->
      <div class="grid grid-cols-1">
        <div class="bg-gradient-to-br from-[#1a1a1a]/80 to-[#0f0f0f]/70 backdrop-blur-lg shadow-lg border border-white/10 rounded-2xl p-8">
          <h3 class="text-2xl font-bold mb-2">Enterprise Plan</h3>
          <p class="text-gray-400 mb-4">
            For large-scale projects with custom requirements.
          </p>
          <p class="text-2xl font-bold mb-6">Custom Pricing</p>
          <ul class="space-y-3 text-gray-300">
            <li class="flex gap-1"> <Check color="#009996" style="filter: drop-shadow(0 0 6px #009996);" />Unlimited Pages</li>
            <li class="flex gap-1"> <Check color="#009996" style="filter: drop-shadow(0 0 6px #009996);" /> Fully Custom Features</li>
            <li class="flex gap-1"> <Check color="#009996" style="filter: drop-shadow(0 0 6px #009996);" /> Priority Support</li>
            <li class="flex gap-1"> <Check color="#009996" style="filter: drop-shadow(0 0 6px #009996);" />Quarterly Strategy Sessions</li>
            <li class="flex gap-1"> <Check color="#009996" style="filter: drop-shadow(0 0 6px #009996);" /> Dedicated Account Manager</li>
            <li class="flex gap-1"> <Check color="#009996" style="filter: drop-shadow(0 0 6px #009996);" /> Quarterly Strategy Sessions</li>
          </ul>
          <div class="mt-8">
            <button class="px-4 py-3 border cursor-pointer border-white/10 w-full hover:bg-[#1a1a1a]/80">Book My Call</button>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
