<template>
  <div v-if="status == 'skincare'">
    <Navbar />
    <router-view/>
    <Footer />
  </div>

  <div v-else>
    <router-view/>
  </div>
</template>

<script>
  import Navbar from '@/components/skincare/Navbar.vue'
  import Footer from '@/components/skincare/Footer.vue'
  import { useStore } from 'vuex'
  import { computed, ref, watchEffect } from 'vue'

  export default {
    components: {Navbar, Footer},
    setup(){
      const store = useStore();
      let status = ref('');
      let isChoosing = ref();

      let myGetter = computed(() => store.getters['getPageStatus']);

      watchEffect(() => status.value = myGetter.value);

      return {status, isChoosing}
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

</style>
