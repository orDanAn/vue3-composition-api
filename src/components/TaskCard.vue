<template>
  <div class="card">
    <h2>{{card.taskTitle}}</h2>
    <!-- Статус может быть 4х типов: ['active', 'done', 'cancelled', 'pending'?] -->
    <p><strong>Статус</strong>: <AppStatus :type="card.typeStatus" /></p>
    <p><strong>Дэдлайн</strong>: {{ card.deadline }}</p>
    <p><strong>Описание</strong>: {{ card.taskText }}</p>
    <div>
      <button
        class="btn"
        @click="startJob(card.id)"
      >
        Взять в работу
      </button>
      <button
        class="btn primary"
        @click="stopJob(card.id)"
      >
        Завершить
      </button>
      <button
        class="btn danger"
        @click="cancelJob(card.id)"
      >
        Отменить
      </button>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'
import AppStatus from '../components/AppStatus'

export default {
  // props: {
  //   card: Object
  // },
  setup () {
    const store = useStore()

    const card = computed(() => store.getters.getTask)

    function startJob (id) {
      store.commit('changeTypeStatus', { id, status: 'pending' })
    }

    function stopJob (id) {
      store.commit('changeTypeStatus', { id, status: 'done' })
    }

    function cancelJob (id) {
      store.commit('changeTypeStatus', { id, status: 'cancelled' })
    }

    return {
      card,
      startJob,
      stopJob,
      cancelJob
    }
  },
  components: {
    AppStatus
  }
}
</script>

<style>

</style>
