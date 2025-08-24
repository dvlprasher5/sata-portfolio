<template>
    <section class=" text-white py-16">
        <div class="max-w-6xl mx-auto px-4 text-center">
            <!-- Small paragraph -->
            <p class="text-sm uppercase tracking-wide mb-2 ">Meet Our Team</p>

            <!-- Heading -->
            <h2 class="text-3xl md:text-4xl font-bold mb-4">Dedicated Professionals</h2>

            <!-- Paragraph -->
            <p class="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
                Our team of experts is passionate about helping your brand thrive in the digital landscape.
            </p>

            <!-- Image Slider -->
            <div class="overflow-hidden">
                <div class="flex animate-slide" :style="{ animationDuration: `${images.length * 3}s` }">
                    <div v-for="(img, index) in [...images, ...images]" :key="index"
                        class="flex-shrink-0 w-64 h-80 rounded-xl overflow-hidden mx-2">
                        <img :src="img" alt="" class="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const images = [
    "/src/assets/BlackMan.jpg",
    "/src/assets/Brand1.jpg",
    "/src/assets/Brand2.jpg",
];
</script>

<style scoped>
@keyframes slide {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(-50%);
    }
}

.animate-slide {
    animation: slide 20s linear infinite;
}
</style>
