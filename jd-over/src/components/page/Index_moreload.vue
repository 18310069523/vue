<style scoped>
    .loadmore {
        width: 7.5rem;
        font-size: 0.24rem;
        background: #f0f2f5;
        overflow: hidden;
    }
    
    .loadmore dl {
        width: 3.72rem;
        float: left;
        background: white;
        margin: 0.05rem 0;
    }
    
    .loadmore dl:nth-child(even) {
        float: right;
    }
    
    .loadmore dl dt {
        width: 100%
    }
    
    .loadmore dl dt img {
        width: 100%;
    }
    
    .loadmore dl dd {
        width: 100%;
        padding: 0.1rem;
        box-sizing: border-box;
    }
    
    .loadmore dl dd p:nth-child(2) {
        color: #f23030;
        text-align: left;
        margin: 0.1rem 0
    }
    
    .loadmore dl dd p:nth-child(1) {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
    }
    
    .loadmore dl dd p:nth-child(3) {
        overflow: hidden;
    }
    
    .loadmore dl dd p:nth-child(3) span {
        float: left
    }
    
    .loadmore dl dd p:nth-child(3) span:nth-child(2) {
        float: right;
    }
    
    h2 {
        height: 0.77rem;
    }
    
    h2 img {
        width: 1.6rem;
        display: block;
        margin: 0 auto;
    }
    
    .loadmore button {
        margin: 0.2rem auto;
        display: block
    }
</style>


<template>
  <div class="loadmore" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="20">
    <h2 :style="{background:'url('+loadmoretitle.bgimg+') no-repeat',backgroundSize:'7.5rem 0.77rem'}">
      <img :src="loadmoretitle.classImg" alt="">
    </h2>
    <dl v-for="i in loadmore" >
      <dt><img :src="i.img" alt=""></dt>
      <dd>
        <p>{{i.text}}</p>
        <p>￥{{i.price}}</p>
        <p>
          <span>好评率{{i.discuss}}%</span>
          <span>找相似</span>
        </p>
      </dd>
    </dl>
    <button @click="clickMore">点击更多</button>
  </div>
 
</template>
<script>
    export default {
        name: 'carrousel',
        props: ["loadmore", "loadmoretitle"],
        data() {
            return {
                loading: false,
                num: 0

            }
        },

        computed: {



        },

        mounted() {

        },
        methods: {
            loadMore() {
                if (this.num < 2) {
                    // this.loadMoreFn()
                    this.num++
                }

            },
            loadMoreFn() {
                this.loading = true;
                var _this = this
                setTimeout(function() {
                    // alert(2)
                    _this.loadmore.push(..._this.loadmore)
                    _this.loading = false;
                }, 3000)
            },
            clickMore() {
                this.loadMoreFn()
            },

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->