export default {
  state: {
    tasks: [
      {
        typeStatus: 'done',
        deadline: '24.12.22',
        taskText: 'все что нужно сделать для этой задачи',
        taskTitle: 'Первая задача',
        id: 1
      },
      {
        typeStatus: 'active',
        deadline: '10.12.21',
        taskText: 'все что нужно сделать для этой задачи',
        taskTitle: 'Вторая задача',
        id: 2
      },
      {
        typeStatus: 'cancelled',
        deadline: '14.11.20',
        taskText: 'все что нужно сделать для этой задачи',
        taskTitle: 'Последняя задача',
        id: 3
      }
    ],

    task: {}
  },

  actions: {

  },

  mutations: {
    start (state, tasks) {
      state.tasks = tasks
    },
    addTask (state, task) {
      state.tasks.push(task)
      // сохраняем изменения
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    selectTask (state, id) {
      const task = state.tasks.find(task => task.id === id)
      if (task) {
        state.task = task
      } else state.task = {}
    },
    changeTypeStatus (state, { id, status }) {
      const idxTask = state.tasks.findIndex(task => task.id === id)
      state.task.typeStatus = status
      state.tasks.splice(idxTask, 1, state.task)
      // сохраняем изменения
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    }
  },

  getters: {
    getTasks (state) {
      return state.tasks
    },
    getTask (state) {
      return state.task
    }
  }
}
