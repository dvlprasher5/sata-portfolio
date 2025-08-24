<template>
  <div class="relative overflow-hidden py-4">
    <!-- Left blur -->
    <div class="pointer-events-none absolute top-0 left-0 w-32 h-full bg-gradient-to-r  to-transparent z-10"></div>
    <!-- Right blur -->
    <div class="pointer-events-none absolute top-0 right-0 w-32 h-full bg-gradient-to-l  to-transparent z-10"></div>

    <!-- Scrolling content -->
    <div class="flex whitespace-nowrap animate-slide">
      <div
        v-for="(item, index) in repeatedItems"
        :key="index"
        class="flex items-center mx-8 text-white font-semibold text-[28px]"
      >
        <span>{{ item }}</span>
        <span class="mx-6 text-white">✦</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ScrollingTags",
  data() {
    return {
      items: ["Content Creation", "Marketing Strategy", "Online Presence", "Digital Marketing"],
    };
  },
  computed: {
    repeatedItems() {
      return [...this.items, ...this.items];
    },
  },
};
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
  animation: slide 12s linear infinite;
}
</style>
