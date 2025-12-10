<template>
  <section class="mt-6 text-gray-900 py-16 px-6 bg-gray-50">
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div class="flex justify-between items-start mb-12 flex-wrap gap-4">
        <div>
          <button class="bg-white border border-gray-300 text-sm px-4 py-1 rounded-full mb-4 shadow-sm">What We Deliver</button>
          <h2 class="text-4xl font-bold mb-4">Our Services</h2>
          <p class="text-gray-600 max-w-2xl">
            We offer tailored solutions to enhance your social media presence and
            drive real results for your business.
          </p>
        </div>
        <div>
          <!-- <button
            class="border cursor-pointer mt-24 border-gray-300 px-6 py-2 rounded-full text-sm hover:bg-gray-900 hover:text-white transition"
          >
            Learn More
          </button> -->
        </div>
      </div>

      <!-- Services Grid (2 per row) -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
  <div
    v-for="(service, index) in services"
    :key="index"
    class="bg-white shadow-lg border border-gray-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-xl transition"
  >
    <div class="mb-4 text-gray-700">
      <div
        v-html="service.icon"
        class="w-12 h-12 drop-shadow-md"
      ></div>
    </div>
    <h3 class="text-lg font-bold mb-2 text-gray-900">{{ service.title }}</h3>
    <p class="text-gray-600 text-sm leading-relaxed">{{ service.description }}</p>
  </div>
</div>
</div>
</section>
</template>

<script setup>
const services = [
  {
    icon: `<img width="54" height="54" src="https://img.icons8.com/external-goofy-color-kerismaker/96/external-UI-UX-Design-graphic-design-goofy-color-kerismaker.png" alt="external-UI-UX-Design-graphic-design-goofy-color-kerismaker"/>`,
    title: "UI/UX",
    description:
      "We craft user-focused interfaces driven by data and strategy, ensuring every design decision enhances engagement and achieves your business goals.",
  },

  {
    icon: `<img width="64" height="64" src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-book-keeping-finance-flaticons-lineal-color-flat-icons.png" alt="external-book-keeping-finance-flaticons-lineal-color-flat-icons"/>`,
    title: "Book Keeping",
    description:
      "We deliver reliable bookkeeping solutions that simplify your finances, ensuring accuracy, compliance, and peace of mind.",
  },

  {
    icon: `<img width="48" height="48" src="https://img.icons8.com/fluency/48/window-settings--v1.png" alt="window-settings--v1"/>`,
    title: "Web Development",
    description:
      "We develop dynamic, user-friendly websites that enhance your online presence and drive measurable business growth.",
  },

  {
    icon: `<img width="64" height="64" src="https://img.icons8.com/external-justicon-lineal-color-justicon/64/external-app-development-responsive-web-design-justicon-lineal-color-justicon.png" alt="external-app-development-responsive-web-design-justicon-lineal-color-justicon"/>`,
    title: "App Development",
    description:
      "We create intuitive, high-performing mobile apps that keep users engaged and build lasting connections with your brand.",
  },

  {
    icon: `<img width="64" height="64" src="https://img.icons8.com/dusk/64/artificial-intelligence.png" alt="artificial-intelligence"/>`,
    title: "AI Technologies",
    description:
      "We harness the power of artificial intelligence to build smart, data-driven systems that boost efficiency, accuracy, and business growth.",
  },

  {
    icon: `<img width="64" height="64" src="https://img.icons8.com/external-wanicon-lineal-color-wanicon/64/external-consultation-teamwork-wanicon-lineal-color-wanicon.png" alt="external-consultation-teamwork-wanicon-lineal-color-wanicon"/>`,
    title: "Software Consulting",
    description:
      "We help businesses choose the right technology stack, optimize operations, and scale efficiently.",
  },
];
</script>