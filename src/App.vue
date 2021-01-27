<template>
  <the-navbar></the-navbar>
  <div class="container with-nav">
    <router-view />
  </div>
</template>

<script>
import { onBeforeMount } from 'vue'
import { useStore } from 'vuex'
import TheNavbar from './components/TheNavbar'

export default {

  setup () {
    const store = useStore()

    onBeforeMount(() => {
      if (localStorage.getItem('tasks')) {
        store.commit('start', JSON.parse(localStorage.getItem('tasks')))
      }
    })

    return {

    }
  },

  components: {
    TheNavbar
  }
}
</script>

<style>

</style>
