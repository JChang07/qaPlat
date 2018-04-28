<template>
  <div id="app">
    <Button type="primary">
      hshshs
    </Button>
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
import Button from '../node_modules/iview/src/components/button/button'
export default {
  components: {Button},
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
