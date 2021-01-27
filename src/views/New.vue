<template>
  <form class="card" @submit.prevent="createTask">
    <h1>Создать новую задачу</h1>
    <div class="form-control">
      <label for="title">Название</label>
      <input
        type="text"
        id="title"
        v-model="taskTitle"
      >
    </div>

    <div class="form-control">
      <label for="date">Дата дэдлайна</label>
      <input
        type="date"
        id="date"
        v-model="deadline"
      >
    </div>

    <div class="form-control">
      <label for="description">Описание</label>
      <textarea
        id="description"
        v-model="taskText"
      >
      </textarea>
    </div>

    <button
      class="btn primary"
      :disabled="validationBtn"
    >
      Создать
    </button>
  </form>
</template>

<script>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  setup () {
    const store = useStore()
    const router = useRouter()

    const taskTitle = ref('')
    const deadline = ref('')
    const taskText = ref('')

    function comparisonDate (time) {
      return new Date(time).getTime() < new Date().getTime()
    }

    function createTask () {
      const newTask = {
        typeStatus: 'active',
        deadline: deadline.value,
        taskText: taskText.value,
        taskTitle: taskTitle.value,
        id: new Date().getTime()
      }
      if (comparisonDate(deadline.value)) {
        newTask.typeStatus = 'cancelled'
      }
      store.commit('addTask', newTask)
      deadline.value = ''
      taskText.value = ''
      taskTitle.value = ''
      router.push('/')
    }

    const validationBtn = computed(() => !deadline.value || !taskText.value || !taskTitle.value)

    return {
      taskTitle,
      deadline,
      taskText,
      createTask,
      validationBtn
    }
  }
}
</script>
