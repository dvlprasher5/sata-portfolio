<template>
  <section class="text-white py-12">
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
      <!-- Left side fixed -->
      <div class="hidden md:block md:sticky md:top-20 self-start h-fit">
        <div>
          <button class="px-4 py-1 border border-white rounded-full text-sm mb-4">
            Proven Success
          </button>
          <h2 class="text-3xl font-bold mb-4">Case Studies</h2>
          <p class="text-gray-300 mb-6">
            Explore our case studies to see how we’ve helped clients overcome challenges and achieve
            remarkable results through effective strategies.
          </p>

          <!-- Stats -->
          <div class="bg-gradient-to-br from-[#1a1a1a]/80 to-[#0f0f0f]/70 backdrop-blur-lg shadow-lg border border-white/10 rounded-xl p-4 mb-4">
            <h3 class="font-bold text-xl">Campaign ROI</h3>
            <p class="text-gray-400">4x return on ad spend</p>
          </div>

          <div class="bg-gradient-to-br from-[#1a1a1a]/80 to-[#0f0f0f]/70 backdrop-blur-lg shadow-lg border border-white/10 rounded-xl p-4 mb-4">
            <h3 class="font-bold text-xl">Lead Increase</h3>
            <p class="text-gray-400">+65% average growth</p>
          </div>

          <div class="bg-gradient-to-br from-[#1a1a1a]/80 to-[#0f0f0f]/70 backdrop-blur-lg shadow-lg border border-white/10 rounded-xl p-4 mb-4">
            <h3 class="font-bold text-xl">Campaign ROI</h3>
            <p class="text-gray-400">4x return on ad spend</p>
          </div>

          <div class="bg-gradient-to-br from-[#1a1a1a]/80 to-[#0f0f0f]/70 backdrop-blur-lg shadow-lg border border-white/10 rounded-xl p-4 mb-4">
            <h3 class="font-bold text-xl">Lead Increase</h3>
            <p class="text-gray-400">+65% average growth</p>
          </div>
        </div>
      </div>

      <!-- Right side scroll content -->
      <div>
        <div class="sticky top-20">
          <div class="border-gray-500 hover:border-gray-500 shadow-lg px-4 py-4">
            <img src="/src/assets/BlackMan.jpg" alt="Case Study Image" class="rounded-xl" />
            <div class="flex gap-3 mt-4">
              <span class="bg-gray-800 px-3 py-1 rounded-full text-sm">Oct 29, 2024</span>
              <span class="bg-gray-800 px-3 py-1 rounded-full text-sm">Social Media</span>
            </div>
            <div>
              <h1 class="text-2xl mt-2">DV FITNESS SOCIAL MEDIA</h1>
              <p>A fitness brand struggled to maintain consistent engagement across multiple social media platforms and enhance.</p>
            </div>
          </div>

          <div class="border-gray-500 shadow-lg px-4 py-4">
            <img src="/src/assets/Bannar1.jpg" alt="Case Study Image" class="rounded-xl" />
            <div class="flex gap-3 mt-4">
              <span class="bg-gray-800 px-3 py-1 rounded-full text-sm">Oct 29, 2024</span>
              <span class="bg-gray-800 px-3 py-1 rounded-full text-sm">Social Media</span>
            </div>
            <div>
              <h1 class="text-2xl mt-2">DV FITNESS SOCIAL MEDIA</h1>
              <p>A fitness brand struggled to maintain consistent engagement across multiple social media platforms and enhance.</p>
            </div>
          </div>

          <div class="border-gray-500 shadow-lg px-4 py-4">
            <img src="/src/assets/SeaView.jpg" alt="Case Study Image" class="rounded-xl" />
            <div class="flex gap-3 mt-4">
              <span class="bg-gray-800 px-3 py-1 rounded-full text-sm">Oct 29, 2024</span>
              <span class="bg-gray-800 px-3 py-1 rounded-full text-sm">Social Media</span>
            </div>
            <div>
              <h1 class="text-2xl mt-2">DV FITNESS SOCIAL MEDIA</h1>
              <p>A fitness brand struggled to maintain consistent engagement across multiple social media platforms and enhance.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Button moved outside grid -->
    <div class="mt-6 flex justify-center">
      <button
        class="px-8 py-3 cursor-pointer rounded-lg font-semibold text-black bg-gradient-to-r from-gray-100 to-blue-200 hover:from-gray-200 hover:to-blue-300 transition">
        View All Case Studies
      </button>
    </div>
  </section>
</template>
