<template>
  <nav class="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50">
    <div class="max-w-[1400px] mx-auto px-5 py-5">
      <div class="flex justify-between items-center">
        <router-link to="/" class="text-2xl font-bold">Charlie</router-link>

        <div class="hidden md:flex space-x-10">
          <router-link
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            class="text-gray-600 hover:text-black transition-colors duration-300"
          >
            {{ item.label }}
          </router-link>
        </div>

        <button
          @click="toggleMenu"
          class="md:hidden flex flex-col space-y-1"
        >
          <span class="w-6 h-0.5 bg-black block transition-transform" :class="{ 'rotate-45 translate-y-1.5': isOpen }"></span>
          <span class="w-6 h-0.5 bg-black block" :class="{ 'opacity-0': isOpen }"></span>
          <span class="w-6 h-0.5 bg-black block transition-transform" :class="{ '-rotate-45 -translate-y-1.5': isOpen }"></span>
        </button>
      </div>

      <div v-if="isOpen" class="md:hidden overflow-hidden">
        <div class="py-5 space-y-4">
          <router-link
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            @click="closeMenu"
            class="block text-gray-600 hover:text-black transition-colors duration-300"
          >
            {{ item.label }}
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      isOpen: false,
      navItems: [
        { path: '/', label: 'Home' },
        { path: '/experience', label: 'Experience' },
        { path: '/projects', label: 'Projects' },
        { path: '/shop', label: 'Shop' },
        { path: '/contact', label: 'Contact' }
      ]
    }
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen
    },
    closeMenu() {
      this.isOpen = false
    }
  }
}
</script>
