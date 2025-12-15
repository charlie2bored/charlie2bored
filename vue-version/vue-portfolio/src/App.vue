<template>
  <div id="app" class="min-h-screen bg-white text-black">
    <Navigation />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navigation,
    Footer
  }
}
</script>
