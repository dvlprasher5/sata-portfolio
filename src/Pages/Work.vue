<script setup>
import Navbar from '@/components/Navbar.vue';
import CaseStudies from './CaseStudies.vue';
import MarkeetingResults from '@/components/MarkeetingResults.vue';
import FooterSection from '@/components/FooterSection.vue';

</script>

<template>
    <Navbar />
    <div class="flex justify-center items-center p-6 mt-18">
        <div
            class="bg-gradient-to-br from-[#1a1a1a]/80 to-[#0f0f0f]/70 backdrop-blur-lg border border-white/10 rounded-2xl p-10 flex items-center justify-center relative overflow-hidden w-full max-w-5xl h-[250px]">
            <!-- Decorative circles -->
            <div class="absolute w-[300px] h-[300px] rounded-full border border-gray-700 opacity-20"></div>
            <div class="absolute w-[500px] h-[500px] rounded-full border border-gray-700 opacity-10"></div>
            <div class="absolute w-[700px] h-[700px] rounded-full border border-gray-700 opacity-5"></div>

            <!-- Centered Text -->
            <h1 class="text-white text-4xl font-bold relative z-10">
                Company Work
            </h1>
        </div>
    </div>
    <CaseStudies/>
    <MarkeetingResults/>
    <FooterSection/>
</template>