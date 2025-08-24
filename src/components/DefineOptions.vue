<template>
    <section class="text-white py-16 px-6">
        <div class="max-w-6xl mx-auto text-center">
            <!-- Small button -->
            <button class="bg-gray-900 text-sm px-4 py-1 rounded-full mb-4 border border-gray-700">
                Why SATA?
            </button>

            <!-- Heading -->
            <h2 class="text-4xl font-bold mb-2">What makes us different?</h2>
            <p class="text-gray-400 mb-12">
                While other agencies focus on deliverables, we focus on your results.
            </p>

            <!-- Comparison Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <!-- Crewcial Card -->
                <div>
                    <h3 class="flex gap-4 items-center justify-center text-xl font-bold mb-4">
                        <div
                            class="w-10 h-10 flex items-center justify-center border-2 border-white rounded-full bg-white">
                            <div
                                class="w-8 h-8 flex items-center justify-center border border-black rounded-full bg-white">
                                <span class="text-black font-bold text-lg">S</span>
                            </div>
                        </div>
                        SATA
                    </h3>
                    <div
                        class="bg-gradient-to-br from-[#1a1a1a]/80 to-[#0f0f0f]/70 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/10">
                        <ul class="space-y-3 flex flex-col items-center ">
                            <li v-for="(item, index) in crewcialList" :key="index" class="flex items-center gap-2">
                                <CircleCheckBig color="#bc71d1" class="glow-purple" />
                                <span>{{ item }}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- Other Agencies Card -->
                <div>   
                    <div>
                        <h1 class="flex gap-4 items-center justify-center text-xl font-bold mb-4">Other Agencies</h1>
                    </div>                 
                    <div
                        class="bg-gradient-to-br mt-7 from-[#2a2a2a]/80 to-[#1a1a1a]/70 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/10">
                        <ul class="space-y-3 flex flex-col items-center ">
                            <li v-for="(item, index) in otherAgenciesList" :key="index" class="flex items-center gap-2">
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

const crewcialList = [
    "Fast communication you can count on",
    "Campaigns built around your unique goals",
    "Fresh tactics that drive today's growth",
    "Deep insights into your specific niche",
    "Work by a team of in-house pros",
];

const otherAgenciesList = [
    "Delayed replies and unclear updates",
    "Generic strategies that miss the mark",
    "Rely on outdated, recycled playbooks",
    "Limited understanding of your audience",
    "Outsource to low-cost freelance networks",
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
