<template>
  <section class="mt-6 text-white py-16 px-6">
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div class="flex justify-between items-start mb-12 flex-wrap gap-4">
        <div>
          <button class="bg-gray-800 text-sm px-4 py-1 rounded-full mb-4">What We Deliver</button>
          <h2 class="text-4xl font-bold mb-4">Our Services</h2>
          <p class="text-gray-400 max-w-2xl">
            We offer tailored solutions to enhance your social media presence and
            drive real results for your business.
          </p>
        </div>
        <div>
          <button
            class="border cursor-pointer mt-24 border-gray-600 px-6 py-2 rounded-full text-sm hover:bg-white hover:text-black transition"
          >
            Learn More
          </button>
        </div>
      </div>

      <!-- Services Grid (2 per row) -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div
          v-for="(service, index) in services"
          :key="index"
          class="bg-gradient-to-br from-[#1a1a1a]/80 to-[#0f0f0f]/70 backdrop-blur-lg  shadow-lg border border-white/10 rounded-xl p-6 hover:border-gray-600 transition"
        >
          <div class="mb-4 text-gray-300">
            <div
              v-html="service.icon"
              class="w-8 h-8 drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]"
            ></div>
          </div>
          <h3 class="text-lg font-bold mb-2">{{ service.title }}</h3>
          <p class="text-gray-400 text-sm leading-relaxed">{{ service.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
             <path d="M3 3h18v4H3zM3 11h18v4H3zM3 19h18v2H3z"/>
           </svg>`,
    title: "Social Media Strategy",
    description:
      "We create data-driven strategies tailored to your business goals, ensuring you reach the right audience with maximum impact.",
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
             <path d="M12 20h9" />
             <path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
           </svg>`,
    title: "Content Creation",
    description:
      "Our team produces eye-catching graphics and captivating copy that showcase your brand's message and attract attention.",
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
             <circle cx="12" cy="12" r="10"/>
             <path d="M12 6v6l4 2"/>
           </svg>`,
    title: "Analytics & Reporting",
    description:
      "We provide detailed insights into your social media performance, helping you grow rapidly and strategically.",
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
             <path d="M4 12l2 2 4-4" />
             <path d="M12 6l2 2 4-4" />
             <path d="M12 12l2 2 4-4" />
             <path d="M4 18l2 2 4-4" />
           </svg>`,
    title: "Community Management",
    description:
      "We build and nurture relationships with your audience, ensuring engagement and loyalty to your brand.",
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
             <line x1="12" y1="1" x2="12" y2="23"/>
             <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7H15a3.5 3.5 0 0 1 0 7H6"/>
           </svg>`,
    title: "Paid Advertising",
    description:
      "We create high-ROI ad campaigns tailored to your target audience for maximum reach and conversions.",
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
             <circle cx="11" cy="11" r="8" />
             <line x1="21" y1="21" x2="16.65" y2="16.65"/>
           </svg>`,
    title: "Brand Monitoring",
    description:
      "We track your brand's online presence to ensure your reputation stays strong and relevant.",
  },
];
</script>
