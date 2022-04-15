<template>
  <nav>
    <router-link to="/task1">Задача 1</router-link> |
    <router-link to="/task2">Задача 2</router-link> |
    <router-link to="/task3">Задача 3</router-link>
  </nav>
  <router-view/>
</template>

<style>
body {
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 10px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
