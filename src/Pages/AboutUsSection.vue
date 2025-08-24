<template>
  <section class="  flex justify-center p-8">
    <div class=" text-white bg-gradient-to-br from-[#1a1a1a]/80 to-[#0f0f0f]/70 backdrop-blur-lg shadow-lg  border-white/10 border-2 rounded-2xl overflow-hidden max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 p-8 items-center">
      
      <!-- Left Content -->
      <div>
        <!-- Small Label -->
        <span class="inline-block bg-gray-800 text-white px-4 py-1 rounded-full text-sm mb-4">
          About Us
        </span>

        <!-- Heading -->
        <h2 class="text-3xl md:text-4xl font-bold leading-tight mb-4">
          Your Partner in Social Media Success
        </h2>

        <!-- Description -->
        <p class="text-gray-300 mb-6">
          We are dedicated to helping brands thrive in the digital landscape through innovative social media.
        </p>

        <!-- Bullet Points -->
        <ul class="space-y-3 mb-6">
          <li class="flex items-center space-x-2">
            <span class="text-lg">💡</span>
            <span>Creative Content Solutions</span>
          </li>
          <li class="flex items-center space-x-2">
            <span class="text-lg">📊</span>
            <span>Boost Engagement Rates</span>
          </li>
          <li class="flex items-center space-x-2">
            <span class="text-lg">💻</span>
            <span>Data-Driven Insights</span>
          </li>
        </ul>

        <!-- Button -->
        <button class="bg-white cursor-pointer md:block ml-6 bg-gradient-to-b from-gray-200 to-blue-300 text-black px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-transform">
          Book Strategy Call
        </button>
      </div>

      <!-- Right Image -->
      <div>
        <img
          src="https://images.unsplash.com/photo-1551836022-d5d88e9218df"
          alt="Team working"
          class="rounded-xl object-cover w-full h-full"
        />
      </div>
    </div>
  </section>
</template>

<script setup>

</script>
