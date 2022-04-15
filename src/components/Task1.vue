<template>
  <div :style="{'background': bgColor}">
    <div class="bg msg" v-show="show">
      <h1 :style="{color}">Досить бавитись</h1>
    </div>
    <div class="bg" v-show="!show">
      <h1 class="text" :style="{'color': color}">Перевірка</h1>
      <button class="btn" @click="changeColor" :style="{'background': color}">
        Змінити кольори
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      color: 'blue',
      bgColor: 'yellow',
      counter: 0,
      show: false
    }
  },
  methods: {
    changeColor() {
      this.color = this.color === 'blue' ? 'yellow' : 'blue'
      this.bgColor = this.bgColor === 'yellow' ? 'blue' : 'yellow';
      this.counter++
      if (this.counter === 5 && this.show === false) {
        this.show = true;
      }
    }
  }
}
</script>

<style scoped>
.bg {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.text {
  text-align: center;
}

.btn {
  font-size: 20px;
  font-weight: 700;
  padding: 20px;
  align-self: center;
}

.msg {
  text-align: center;

}
</style>