<template>
  <div id="app">
    <headers></headers>
    <mains></mains>
    <footers></footers>
  </div>
</template>

<script>
import headers from './components/header'
import mains from './components/main'
import footers from './components/footer'

export default {
  name: 'app',
  components: {
    headers,
    mains,
    footers
  }
}
</script>

<style>
*{
			padding: 0;
			margin: 0;
      font-size: 14px;
      Font-family:”微软雅黑”;
      box-sizing: border-box;
}
  html,body{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width:100%;
  height:100%;
}
</style>
