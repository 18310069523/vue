<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
    export default {
        name: 'app',
        created() {
            this.$router.push({
                name: "loading",
                params: {
                    url: this.$route.name
                }
            })
        },
        mounted() {

        }
    }
</script>

<style>
    * {
        margin: 0;
        padding: 0;
    }
    
    #app {
        font-size: 0.32rem;
        overflow: hidden
    }
    
    input,
    button {
        border: none;
        outline: none;
        background: none;
    }
    
    ul {
        list-style: none
    }
</style>