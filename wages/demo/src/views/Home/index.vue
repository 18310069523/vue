<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: '首页'
    }
  },
  created () {
    this.$http.get('/api/getlist', {}).then((data) => {
      console.log(data)
    })
  }
}
</script>
