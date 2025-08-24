<template>
  <!-- <CHANGE> Added animated background image to hero section only -->
  <section
    class="relative flex flex-col items-center justify-center text-center text-white px-14 py-20 pt-28 overflow-hidden"
  >
    <!-- Animated Background Image -->
    <div class="absolute inset-0 z-0">
      <div
        class="animate-slide-left-right w-[200%] h-full bg-cover bg-center filter blur-sm opacity-30"
        style="
          background-image: url('/public/car-service-and-store-google-sli-removebg-preview.png');"
      ></div>
    </div>

    <!-- Content with higher z-index -->
    <div class="relative z-10">
      <!-- Label -->
      <span
        class="bg-black/80 border border-gray-600 text-sm px-4 py-1 rounded-full"
      >
        All Marketing Solutions
      </span>

      <!-- Heading -->
      <h1
        class="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight max-w-3xl text-white text-center"
      >
        Become a Part of the Leading IT Education Hub in
        <span class="glow-text">Gilgit Baltistan</span>
      </h1>

      <!-- Subheading -->
      <p class="text-lg text-gray-300 mt-6 max-w-2xl">
        We help businesses connect with their audience, boost engagement, and
        drive sales through tailored social media strategies and compelling
        content.
      </p>

      <!-- Button -->
      <button
        class="mt-8 cursor-pointer bg-gradient-to-b from-gray-200 to-blue-300 text-black font-medium py-3 px-6 rounded-xl shadow hover:opacity-90 transition hover:scale-105 hover:shadow-lg"
      >
        Book Consultation Call
      </button>

      <!-- Rating -->
      <div class="flex flex-col items-center mt-6">
        <div
          class="flex items-center space-x-1 text-yellow-400 drop-shadow-[0_0_6px_rgba(250,204,21,0.8)]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6 fill-current"
            viewBox="0 0 20 20"
          >
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.785.57-1.84-.197-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6 fill-current"
            viewBox="0 0 20 20"
          >
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.785.57-1.84-.197-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6 fill-current"
            viewBox="0 0 20 20"
          >
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.785.57-1.84-.197-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6 fill-current"
            viewBox="0 0 20 20"
          >
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.785.57-1.84-.197-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6 fill-current"
            viewBox="0 0 20 20"
          >
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.785.57-1.84-.197-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            />
          </svg>
          <span class="ml-2 text-white text-lg font-medium">5.0</span>
        </div>
        <p class="text-gray-400 text-sm mt-1">
          100+ clients love to work with us.
        </p>
      </div>
    </div>

    <!-- Statistic Cards -->
    <section class="bg-transparent py-12">
      <div class="flex flex-wrap justify-center gap-8 cursor-pointer">
        <div
          class="bg-transparent backdrop-blur-xs rounded-2xl px-8 py-6 text-center w-64 border border-gray-800 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
        >
          <h3 class="text-white text-3xl font-bold">25+</h3>
          <p class="text-gray-400 mt-2 text-sm">Years of<br />Experience</p>
        </div>
        <div
          class="bg-transparent backdrop-blur-xs rounded-2xl px-8 py-6 text-center w-64 border border-gray-800 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
        >
          <h3 class="text-white text-3xl font-bold">99%</h3>
          <p class="text-gray-400 mt-2 text-sm">
            Satisfied &<br />Happy Clients
          </p>
        </div>
        <div
          class="bg-transparent backdrop-blur-xs rounded-2xl px-8 py-6 text-center w-64 border border-gray-800 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
        >
          <h3 class="text-white text-3xl font-bold">600+</h3>
          <p class="text-gray-400 mt-2 text-sm">Projects<br />Completed</p>
        </div>
        <div
          class="bg-transparent backdrop-blur-xs rounded-2xl px-8 py-6 text-center w-64 border border-gray-800 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
        >
          <h3 class="text-white text-3xl font-bold">27+</h3>
          <p class="text-gray-400 mt-2 text-sm">Top Industries<br />Served</p>
        </div>
      </div>
    </section>
  </section>
</template>

<style scoped>
@keyframes slide-left-right {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0%);
  }
}

.animate-slide-left-right {
  animation: slide-left-right 20s linear infinite;
}

.glow-text {
  color: #ff0011;
}
</style>
