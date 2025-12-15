<template>
  <div>
    <!-- Hero Section -->
    <section class="pt-[200px] pb-[150px] min-h-screen flex items-center bg-white dark:bg-gray-900 transition-colors duration-300">
      <div class="max-w-[1400px] mx-auto px-5">
        <div class="max-w-[800px]">
          <p class="text-base text-gray-600 mb-5 uppercase tracking-wider">
            Based in New York City
          </p>
          <h1 class="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            Charlie &quot;2bored&quot; Vargas
          </h1>
          <h2 class="text-2xl md:text-3xl text-gray-600 mb-10 leading-relaxed">
            Data Analyst & Multimodal Designer
          </h2>
          <p class="text-xl text-gray-700 mb-16 max-w-2xl leading-relaxed">
            Everything &quot;Charlie&quot;. All in one place.
          </p>
          <div class="flex flex-col sm:flex-row gap-10">
            <router-link to="/projects" class="text-black hover:text-gray-600 transition-colors duration-300 text-xl font-medium">
              View My Work
            </router-link>
            <router-link to="/contact" class="text-black hover:text-gray-600 transition-colors duration-300 text-xl font-medium">
              Get In Touch
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience Preview -->
    <section class="py-[150px]">
      <div class="max-w-[1400px] mx-auto px-5">
        <div class="text-center mb-[100px]">
          <h2 class="text-4xl md:text-5xl font-bold mb-5">Experience</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional journey in technology and development
          </p>
        </div>

        <div class="space-y-[80px]">
          <div class="grid grid-cols-[200px_1fr] gap-16">
            <div class="text-xl text-gray-600 font-medium pt-3">2022 —</div>
            <div>
              <h3 class="text-3xl font-bold mb-3">Senior Developer</h3>
              <h4 class="text-2xl text-gray-600 mb-6">Tech Corp</h4>
              <p class="text-lg text-gray-700 mb-8 max-w-2xl">
                Led development of scalable web applications, mentored junior developers, and implemented modern development practices.
              </p>
            </div>
          </div>
        </div>

        <div class="text-center mt-[100px]">
          <router-link to="/experience" class="text-black hover:text-gray-600 transition-colors duration-300 text-xl font-medium">
            View All Experience →
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>
