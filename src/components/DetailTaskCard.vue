<template>
  <div class="card">
      <h2 class="card-title">
        {{card.taskTitle}}
        <AppStatus :type="card.typeStatus" />
      </h2>
      <p>
        <strong>
          <small>
            {{ card.deadline }}
          </small>
        </strong>
      </p>
      <button
        class="btn primary"
        @click="showTask(card.id)"
      >
        Посмотреть
      </button>
    </div>
</template>

<script>
// import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import AppStatus from '../components/AppStatus'

export default {
  props: {
    card: Object
  },
  setup () {
    // const store = useStore()
    const router = useRouter()
    function showTask (id) {
      // store.commit('selectTask', id)
      router.push(`/task/${id}`)
    }

    return {
      showTask
    }
  },
  components: {
    AppStatus
  }
}
</script>

<style>

</style>
