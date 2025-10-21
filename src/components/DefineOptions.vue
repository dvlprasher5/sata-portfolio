<template>
  <section class="text-white py-16 px-6">
    <div class="max-w-6xl mx-auto text-center">
        
      <!-- Small button -->
      <button
        class="bg-gray-900 text-sm px-4 py-1 rounded-full mb-4 border border-gray-700"
      >
        Why SATA?
      </button>

      <!-- Heading -->
      <h2 class="text-4xl font-bold mb-2">What makes us different?</h2>
      <p class="text-gray-400 mb-12">
        While other companies deliver code, we deliver complete software solutions.
      </p>

      <!-- Comparison Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">

        <!-- SATA Card -->
        <div>
          <h3 class="flex gap-2 items-center justify-center text-xl font-bold mb-4">
            <div class="w-10 h-10 flex items-center justify-center">
              <div class="w-10 h-10 flex items-center justify-center">
                <span class="text-black font-bold text-lg">
                  <img src="/sata logo.png" alt="" class="w-full h-full object-contain" />
                </span>
              </div>
            </div>
            SATA
          </h3>

          <div class="bg-gradient-to-br from-[#1a1a1a]/80 to-[#0f0f0f]/70 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/10">
            <ul class="space-y-3 flex flex-col items-start">
              <li
                v-for="(item, index) in sataList"
                :key="index"
                class="flex items-center gap-2"
              >
                <CircleCheckBig color="#bc71d1" class="glow-purple" />
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Other Companies Card -->
        <div>
          <div>
            <h1
              class="flex gap-4 items-center justify-center text-xl font-bold mb-4"
            >
              Other Companies
            </h1>
          </div>
          <div
            class="bg-gradient-to-br mt-7 from-[#2a2a2a]/80 to-[#1a1a1a]/70 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/10"
          >
            <ul class="space-y-3 flex flex-col items-start">
              <li
                v-for="(item, index) in otherCompaniesList"
                :key="index"
                class="flex items-center gap-2"
              >
                <CircleCheckBig color="#009996" class="glow-teal" />
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { CircleCheckBig } from "lucide-vue-next";

const sataList = [
  "Custom-built software tailored to your business needs",
  "Seamless communication and transparent progress updates",
  "Scalable, secure, and future-proof code architecture",
  "Experienced in-house developers and designers",
  "On-time delivery with post-launch support",
];

const otherCompaniesList = [
  "One-size-fits-all software with limited customization",
  "Slow communication and unclear development timelines",
  "Neglects scalability and long-term maintenance",
  "Dependence on outsourced or inexperienced teams",
  "Little to no support after project completion",
];
</script>

<style scoped>
.glow-purple {
  filter: drop-shadow(0 0 6px rgba(188, 113, 209, 0.8));
}
.glow-teal {
  filter: drop-shadow(0 0 6px rgba(0, 153, 150, 0.8));
}
</style>
