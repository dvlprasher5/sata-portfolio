<template>
    <section class=" text-white min-h-screen py-16">
        <div class="max-w-6xl mx-auto px-4 text-center">
            <!-- Small Paragraph -->
            <p class="text-sm text-gray-300 mb-4">Proven Success</p>

            <!-- Heading -->
            <h2 class="text-4xl font-bold mb-4">Case Studies</h2>

            <!-- Description -->
            <p class="text-gray-400 max-w-2xl mx-auto mb-12">
                Explore our case studies to see how we’ve helped clients overcome challenges
                and achieve remarkable results through effective strategies.
            </p>

            <!-- Image Columns -->
            <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-4 ">
                <!-- Card -->
                <div
                    v-for="(card, index) in cards"
                    :key="index"
                    :ref="el => setCardRef(el, index)"
                    :class="[
                      'bg-gradient-to-br px-4 py-8 from-[#1a1a1a]/80 to-[#0f0f0f]/70 backdrop-blur-lg border-white/10 border-2 rounded-xl overflow-hidden shadow-lg hover:scale-[1.02]',
                      // base transitions
                      'transform transition-all duration-700 ease-out',
                      // reveal animation
                      isVisible[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    ]"
                >
                    <!-- Image -->
                    <img :src="card.image" alt="card image" class="w-full h-56 object-cover" />

                    <!-- Content -->
                    <div class="p-5">
                        <!-- Tags -->
                        <div class="flex space-x-3 mb-3 justify-center text-sm">
                            <span class="bg-gray-800 text-gray-300 px-3 py-1 rounded-full">
                                {{ card.date }}
                            </span>
                            <span class="bg-gray-800 text-gray-300 px-3 py-1 rounded-full">
                                {{ card.category }}
                            </span>
                        </div>

                        <!-- Title -->
                        <h3 class="text-white text-lg font-bold mb-2">
                            {{ card.title }}
                        </h3>

                        <!-- Description -->
                        <p class="text-gray-400 text-sm">
                            {{ card.description }}
                        </p>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick, onBeforeUpdate } from "vue";

const scrollY = ref(0);
const handleScroll = () => (scrollY.value = window.scrollY);

// your existing data (unchanged)
const cards = ref([
  {
    image: "/src/assets/BlackMan.jpg",
    date: "Oct 29, 2024",
    category: "SOCIAL MEDIA",
    title: "DV Fitness Brand Social Media",
    description:
      "A fitness brand struggled to maintain consistent engagement across multiple social media platforms and enhance."
  },
  {
    image: "/src/assets/cat.jpg",
    date: "Nov 18, 2024",
    category: "B2B",
    title: "HR Management Software",
    description:
      "A B2B HR management software provider aimed to demonstrate the value of its solutions to potential clients effectively."
  },
  {
    image: "/src/assets/Brand1.jpg",
    date: "Oct 29, 2024",
    category: "SOCIAL MEDIA",
    title: "DV Fitness Brand Social Media",
    description:
      "A fitness brand struggled to maintain consistent engagement across multiple social media platforms and enhance."
  },
  {
    image: "/src/assets/Brand2.jpg",
    date: "Nov 18, 2024",
    category: "B2B",
    title: "HR Management Software",
    description:
      "A B2B HR management software provider aimed to demonstrate the value of its solutions to potential clients effectively."
  },
  {
    image: "/src/assets/SeaView.jpg",
    date: "Oct 29, 2024",
    category: "SOCIAL MEDIA",
    title: "DV Fitness Brand Social Media",
    description:
      "A fitness brand struggled to maintain consistent engagement across multiple social media platforms and enhance."
  },
  {
    image: "/src/assets/Bannar1.jpg",
    date: "Nov 18, 2024",
    category: "B2B",
    title: "HR Management Software",
    description:
      "A B2B HR management software provider aimed to demonstrate the value of its solutions to potential clients effectively."
  }
]);

// ---- Animation logic (added) ----
const cardRefs = ref([]);                     // DOM nodes of cards
const isVisible = ref(cards.value.map(() => false)); // per-card visibility
const nextBatchStart = ref(0);                // which pair should animate next (0, 2, 4, ...)

function setCardRef(el, i) {
  if (el) cardRefs.value[i] = el;
}

let observer;

onBeforeUpdate(() => {
  // keep refs in sync if list changes
  cardRefs.value = [];
});

onMounted(async () => {
  window.addEventListener("scroll", handleScroll);
  await nextTick();

  // Reveal exactly two at a time in order (0–1, then 2–3, then 4–5)
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const index = cardRefs.value.indexOf(entry.target);
        if (index === -1) return;

        const batchStart = Math.floor(index / 2) * 2;

        // gate: only reveal the *next* batch
        if (batchStart === nextBatchStart.value) {
          // show this pair
          isVisible.value[batchStart] = true;
          if (typeof isVisible.value[batchStart + 1] !== "undefined") {
            isVisible.value[batchStart + 1] = true;
          }

          // stop observing this pair
          if (cardRefs.value[batchStart]) observer.unobserve(cardRefs.value[batchStart]);
          if (cardRefs.value[batchStart + 1]) observer.unobserve(cardRefs.value[batchStart + 1]);

          // move to next pair
          nextBatchStart.value += 2;
        }
      });
    },
    {
      // require the batch lead card to be reasonably in view before triggering
      root: null,
      rootMargin: "0px 0px -30% 0px",
      threshold: [0, 0.25, 0.5, 0.75, 1]
    }
  );

  // Observe all cards (the gating ensures only the correct pair reveals)
  cardRefs.value.forEach((el) => el && observer.observe(el));
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
  if (observer) observer.disconnect();
});
</script>
