<template>
  <div class=" text-white py-10 overflow-hidden">
    <h2 class="text-3xl font-bold text-center mb-2">Hear from Our Clients</h2>
    <p class="text-center text-gray-400 mb-10">
      Hear from our satisfied clients about how we have transformed their social media presence and driven meaningful results.
    </p>

    <!-- Row 1 -->
    <div class="relative w-full overflow-hidden">
      <div class="flex animate-scroll-left">
        <div v-for="(card, i) in testimonials" :key="'r1-'+i" class="card">
          <div class="card-content bg-gradient-to-br from-[#1a1a1a]/80 to-[#0f0f0f]/70 backdrop-blur-lg shadow-lg border border-white/10">
            <div class="flex">
              <Star fill="yellow" color="yellow" size="18" v-for="n in 5" :key="n" />
            </div>
            <div class="flex gap-3 items-center">
              <img :src="card.img" alt="Profile" class="w-12 h-12 rounded-full" />
              <div>
                <h3 class="font-bold">{{ card.name }}</h3>
                <p class="text-sm text-gray-400">{{ card.role }}</p>
              </div>
            </div>
            <p class="text-gray-300 text-sm card-text">"{{ card.text }}"</p>
          </div>
        </div>

        <!-- duplicate for seamless loop -->
        <div v-for="(card, i) in testimonials" :key="'r1dup-'+i" class="card">
          <div class="card-content bg-gradient-to-br from-[#1a1a1a]/80 to-[#0f0f0f]/70 backdrop-blur-lg shadow-lg border border-white/10">
            <div class="flex">
              <Star fill="yellow" color="yellow" size="18" v-for="n in 5" :key="n" />
            </div>
            <div class="flex gap-3 items-center">
              <img :src="card.img" alt="Profile" class="w-12 h-12 rounded-full" />
              <div>
                <h3 class="font-bold">{{ card.name }}</h3>
                <p class="text-sm text-gray-400">{{ card.role }}</p>
              </div>
            </div>
            <p class="text-gray-300 text-sm card-text">"{{ card.text }}"</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Row 2 -->
    <div class="relative w-full overflow-hidden mt-6">
      <div class="flex animate-scroll-right">
        <div v-for="(card, i) in testimonials" :key="'r2-'+i" class="card">
          <div class="card-content bg-gradient-to-br from-[#1a1a1a]/80 to-[#0f0f0f]/70 backdrop-blur-lg shadow-lg border border-white/10">
            <div class="flex">
              <Star fill="yellow" color="yellow" size="18" v-for="n in 5" :key="n" />
            </div>
            <div class="flex gap-3 items-center">
              <img :src="card.img" alt="Profile" class="w-12 h-12 rounded-full" />
              <div>
                <h3 class="font-bold">{{ card.name }}</h3>
                <p class="text-sm text-gray-400">{{ card.role }}</p>
              </div>
            </div>
            <p class="text-gray-300 text-sm card-text">"{{ card.text }}"</p>
          </div>
        </div>

        <div v-for="(card, i) in testimonials" :key="'r2dup-'+i" class="card">
          <div class="card-content bg-gradient-to-br from-[#1a1a1a]/80 to-[#0f0f0f]/70 backdrop-blur-lg shadow-lg border border-white/10">
            <div class="flex">
              <Star fill="yellow" color="yellow" size="18" v-for="n in 5" :key="n" />
            </div>
            <div class="flex gap-3 items-center">
              <img :src="card.img" alt="Profile" class="w-12 h-12 rounded-full" />
              <div>
                <h3 class="font-bold">{{ card.name }}</h3>
                <p class="text-sm text-gray-400">{{ card.role }}</p>
              </div>
            </div>
            <p class="text-gray-300 text-sm card-text">"{{ card.text }}"</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Row 3 -->
    <div class="relative w-full overflow-hidden mt-6">
      <div class="flex animate-scroll-left">
        <div v-for="(card, i) in testimonials" :key="'r3-'+i" class="card">
          <div class="card-content bg-gradient-to-br from-[#1a1a1a]/80 to-[#0f0f0f]/70 backdrop-blur-lg shadow-lg border border-white/10">
            <div class="flex">
              <Star fill="yellow" color="yellow" size="18" v-for="n in 5" :key="n" />
            </div>
            <div class="flex gap-3 items-center">
              <img :src="card.img" alt="Profile" class="w-12 h-12 rounded-full" />
              <div>
                <h3 class="font-bold">{{ card.name }}</h3>
                <p class="text-sm text-gray-400">{{ card.role }}</p>
              </div>
            </div>
            <p class="text-gray-300 text-sm card-text">"{{ card.text }}"</p>
          </div>
        </div>

        <div v-for="(card, i) in testimonials" :key="'r3dup-'+i" class="card">
          <div class="card-content bg-gradient-to-br from-[#1a1a1a]/80 to-[#0f0f0f]/70 backdrop-blur-lg shadow-lg border border-white/10">
            <div class="flex">
              <Star fill="yellow" color="yellow" size="18" v-for="n in 5" :key="n" />
            </div>
            <div class="flex gap-3 items-center">
              <img :src="card.img" alt="Profile" class="w-12 h-12 rounded-full" />
              <div>
                <h3 class="font-bold">{{ card.name }}</h3>
                <p class="text-sm text-gray-400">{{ card.role }}</p>
              </div>
            </div>
            <p class="text-gray-300 text-sm card-text">"{{ card.text }}"</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Star } from 'lucide-vue-next';

const testimonials = [
  {
    name: "Josh Brown",
    role: "Social Manager",
    text: "Working with Crewcial has been amazing. Great results!",
    img: "/src/assets/BlackMan.jpg"
  },
  {
    name: "Kylie Davis",
    role: "Digital Marketer",
    text: "Thanks to Crewcial, I finally understand Facebook ads. Their guidance was a game-changer!",
    img: "/src/assets/Brand1.jpg"
  },
  {
    name: "Natasha Lewis",
    role: "Brand Strategist",
    text: "They simplified our marketing efforts. Their support made all the difference!",
    img: "/src/assets/Brand2.jpg"
  }
]
</script>

<style scoped>
.card {
  width: 300px;
  height: 220px;
  margin-right: 1rem;
  flex-shrink: 0;
}

.card-content {
  background-color: #1f1f1f;
  border-radius: 0.5rem;
  padding: 1.5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-text {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

/* Infinite loop animations */
@keyframes scroll-left {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

@keyframes scroll-right {
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0); }
}

.animate-scroll-left {
  animation: scroll-left 25s linear infinite;
}

.animate-scroll-right {
  animation: scroll-right 25s linear infinite;
}

/* Slower on small screens */
@media (max-width: 640px) {
  .animate-scroll-left {
    animation-duration: 40s;
  }
  .animate-scroll-right {
    animation-duration: 40s;
  }
}
</style>
