<template>
<!-- primary, danger, warning -->
  <span :class="['badge', selectTypeStatus.statusClass]" v-text="selectTypeStatus.statusText">

  </span>
</template>

<script>
import { reactive, computed } from 'vue'
export default {
  props: {
    type: String
  },
  setup (props) {
    // active', 'done', 'cancelled'
    const typeStatus = reactive({
      active: {
        statusClass: 'primary',
        statusText: 'Активен'
      },
      done: {
        statusClass: 'primary',
        statusText: 'Завершено'
      },
      cancelled: {
        statusClass: 'danger',
        statusText: 'Отменен'
      },
      pending: {
        statusClass: 'warning',
        statusText: 'В работе'
      }
    })

    return {
      selectTypeStatus: computed(() => typeStatus[props.type])
    }
  }
}
</script>
