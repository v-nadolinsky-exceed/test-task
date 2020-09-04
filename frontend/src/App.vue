<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {}
}
</script>

<style>
@import "~bootstrap/dist/css/bootstrap.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  margin: 0 !important;
  text-align: center;
  color: #2c3e50;
  /*height: 100vh;*/
  /*width: 100vw;*/
  /*background: linear-gradient(225deg, rgb(62, 175, 132), rgb(53, 73, 94));*/
}
</style>
