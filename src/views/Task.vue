<template>
  <TaskCard
    v-if="task"
  />
  <h3 class="text-white center" v-else>
    Задачи с id = <strong>{{ $route.params.id }}</strong> нет.
  </h3>
</template>

<script>
import { computed, onBeforeMount } from 'vue'
import { useStore } from 'vuex'
import TaskCard from '../components/TaskCard.vue'
import { useRoute } from 'vue-router'

export default {
  setup () {
    const store = useStore()
    const route = useRoute()
    const task = computed(() => {
    // проеряем есть ли такая задача
      return !!Object.keys(store.getters.getTask).length
    })
    onBeforeMount(() => {
      store.commit('selectTask', +route.params.id)
    })
    return {
      task
    }
  },
  components: {
    TaskCard
  }
}
</script>

<style scoped>
</style>
