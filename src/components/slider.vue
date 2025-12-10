<template>
  <div class="relative overflow-hidden py-4 bg-gray-50">
    
    <!-- Scrolling content -->
    <div class="flex whitespace-nowrap animate-slide">
      <div
        v-for="(item, index) in repeatedItems"
        :key="index"
        class="flex items-center mx-8 font-semibold text-[28px]"
        style="color: #111827 !important;"
      >
        <span style="color: #111827 !important;">{{ item }}</span>
        <span class="mx-6" style="color: #3b82f6 !important;">✦</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ScrollingTags",
  data() {
    return {
      items: ["UI/UX", "Book Keeping", "Web Development", "App Development", "AI Technologies", "Software Consulting"],
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

/* Force light theme colors */
div {
  background-color: gray-50 !important;
}

span {
  color: #111827 !important;
}
</style>