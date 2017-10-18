<template>
 <nav class="index_search" :class="{opacityStateOut:opacityState,opacityStateIn:!opacityState}">
    <div><i></i><i></i><input type="text"></div><button>登录</button>
  </nav>
</template>

<script>
    import {
        Loadmore
    } from "mint-ui"
    export default {
        name: 'index',
        data() {
            return {
                list: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                opacityState: true
            }
        },
        methods: {
            loadTop() {
                var _this = this
                this.topStatus = "loading"
                setTimeout(function() {
                    _this.topStatus = false
                    _this.$refs.loadmore.onTopLoaded();
                }, 1000)


            }
        },

        components: {
            [Loadmore.name]: Loadmore
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    ul {
        font-size: 0.4rem
    }
    
    .mint-loadmore {
        font-size: 0.48rem
    }
    
    .opacityStateOut {
        background: rgba(0, 0, 0, 0) !important
    }
    
    .opacityStateIn {
        background: rgba(0, 0, 0, 0.5) !important
    }
    
    .index_search {
        width: 100%;
        height: 0.72rem;
        padding: 0.1rem 0.1rem;
        position: fixed;
        top: 0rem;
        z-index: 1000;
        background: red;
        overflow: hidden;
    }
    
    .index_search div {
        width: 5.8rem;
        height: 0.52rem;
        background: white;
        border-radius: 0.36rem;
        overflow: hidden;
        float: left;
        padding: 0.1rem 0rem 0.1rem 0.2rem;
        margin-left: 0.1rem
    }
    
    .index_search button {
        float: right;
        margin: 0.1rem 0.4rem;
        color: white;
    }
    
    .index_search div i {
        width: 0.52rem;
        height: 0.52rem;
        float: left;
    }
    
    .index_search div i:nth-child(1) {
        background: url("/image/jdsprites.png") 0.06rem 0.1rem no-repeat;
        background-size: 4rem 4rem;
    }
    
    .index_search div i:nth-child(2) {
        width: 0.4rem;
        background: url("/image/jdsprites.png") -1.6rem 0.1rem no-repeat;
        background-size: 4rem 4rem;
    }
    
    .index_search div input {
        height: 0.52rem;
        float: left;
        margin-left: 0.1rem;
    }
</style>