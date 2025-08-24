<template>
    <section class=" text-white py-16">
        <div class="max-w-3xl mx-auto px-4 text-center">
            <!-- Small label -->
            <p class="inline-block px-4 py-1 border border-gray-700 rounded-full text-sm mb-4">
                Common Questions
            </p>

            <!-- Heading -->
            <h2 class="text-3xl md:text-4xl font-bold mb-4">FAQs</h2>

            <!-- Paragraph -->
            <p class="text-gray-400 mb-10">
                We’ve answered the most common questions about our social media management
                services to help you get started.
            </p>

            <!-- Accordion -->
            <div class="space-y-4 text-left">
                <div v-for="(faq, i) in faqs" :key="i" class="bg-gradient-to-br from-[#1a1a1a]/80 to-[#0f0f0f]/70 backdrop-blur-lg shadow-lg border border-white/10  rounded-lg overflow-hidden">
                    <button
                        class="w-full flex justify-between items-center px-6 bg-[#0F0F0F] py-8 font-semibold focus:outline-none"
                        @click="toggle(i)">
                        {{ faq.question }}
                        <span class="text-xl">
                            {{ openIndex === i ? '−' : '+' }}
                        </span>
                    </button>
                    <div v-if="openIndex === i" class="px-6 pb-4 text-gray-400 text-sm mt-10">
                        {{ faq.answer }}
                    </div>
                </div>
                
            </div>
            
        </div>
    </section>
</template>

<script setup>
import { ref } from "vue";

const openIndex = ref(null);

const faqs = [
    {
        question: "What services do you offer?",
        answer: "We offer social media management, content creation, and brand strategy.",
    },
    {
        question: "What is your pricing structure?",
        answer: "Pricing is tailored to your needs. Contact us for a custom quote.",
    },
    {
        question: "How can I contact support?",
        answer: "You can reach out via our contact page or email us at support@example.com.",
    },
     {
        question: "How can I contact support?",
        answer: "You can reach out via our contact page or email us at support@example.com.",
    },

];

function toggle(i) {
    openIndex.value = openIndex.value === i ? null : i;
}
</script>
