<template>
  <h1
    class="text-white center"
    v-if="!cards.length"
  >
    Задач пока нет
  </h1>
  <div v-else>
    <h3 class="text-white">Всего активных задач: {{activeTasks}}</h3>
    <DetailTaskCard
    v-for="card in cards"
    :key="card.id"
    :card="card"
    />
  </div>
</template>

<script>
import { useStore } from 'vuex'

import { computed } from 'vue'
import DetailTaskCard from '../components/DetailTaskCard.vue'

export default {
  setup () {
    const store = useStore()
    const cards = computed(() => store.getters.getTasks)
    const activeTasks = computed(() => {
      const activeCarde = cards.value.filter(card => card.typeStatus === 'active')

      return activeCarde.length
    })

    return {
      cards,
      activeTasks
    }
  },
  components: { DetailTaskCard }
}
</script>
