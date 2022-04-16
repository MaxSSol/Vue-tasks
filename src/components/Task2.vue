<template>
  <div class="main">
    <div class="form">
      <input v-model="task" type="text" placeholder="Що потрібно зробити?">
      <button @click="addTask" class="btn">Додати</button>
    </div>
    <div class="lists">
      <div class="list" v-for="task in tasks" :key="task.id">
        <p class="list-title"><strong>Треба зробити:</strong> {{task.title}}</p>
        <button @click="deleteTask(task)" class="btn">Видалити</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      task: '',
      tasks: [
        {id:1, title: 'Test1'},
        {id:2, title: 'Test2'}
      ]
    }
  },
  methods: {
    addTask() {
      this.tasks.push({id: Date.now(), title: this.task})
      this.task = '';
    },

    deleteTask(task) {
      this.tasks = this.tasks.filter(t => t.id !== task.id)
    }
  }
}
</script>

<style scoped>
.main {
  padding: 30px;
}
.list {
  padding: 10px;
  display: flex;
  justify-content: space-between;
  border: black dashed 2px;
  margin-bottom: 10px;
}

.form {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}

.form input {
  padding: 10px;
}
.btn {
  align-self: flex-end;
  margin-top: 10px;
  border-radius: 15px;
  padding: 10px 15px;
  background: transparent;
}
</style>