<template>
  <div class="app">
    <search v-if="searchState"></search>
   <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom"   ref="loadmore">
        <main>
            <banner :banner="indexData.banner"></banner>
            <div class="bannerNew"><img :src="indexData.bannerList[0].banner1" alt=""></div>
            <navtop :tab="indexData.tab"></navtop>
           <div class="bannerNew"><img :src="indexData.bannerList[1].banner2" alt=""></div>
           <fast-news :fastnews="indexData.fastNews"></fast-news>
           <jdms :jdms="indexData.jdms"></jdms>
           <every-com :alldata="indexData.lovelife"></every-com>
           <every-com :alldata="indexData.xpz"></every-com>
           <index-moreload :loadmoretitle="indexData.loadmoretitle" :loadmore="indexData.loadmore"></index-moreload>
        </main>
    <div slot="top" class="mint-loadmore-top loading">
        <p v-show="Status !== 'loading'" :class="{ 'rotate': Status === 'drop' }"></p>
        <p v-show="Status === 'loading'">Loading...</p>
    </div>
    <div slot="bottom" class="mint-loadmore-bottom loading">
      <p v-show="Status !== 'loading'" :class="{ 'rotate': Status === 'drop' }">下拉加载更多</p>
      <p v-show="Status === 'bottomloading'">Loading...</p>
    </div>
  </mt-loadmore>
  </div>
</template>

<script>
    import {
        Loadmore,
    } from "mint-ui";
    import search from "./search"
    import banner from "./page/banner"
    import navtop from "./page/navtop"
    import fastNews from "./page/fastNews"
    import jdms from "./page/jdms"
    import every_com from "./page/every_com"
    import index_moreload from "./page/index_moreload"

    export default {
        name: 'index',
        data() {
            return {
                indexData: this.$route.params.data,
                Status: false,
                searchState: true
            }
        },
        created() {
            // console.log(this.axios)
            var _this = this

        },
        mounted() {

        },
        computed: {

        },
        methods: {
            loadTop() {
                var _this = this
                this.Status = "loading"
                this.searchState = false
                setTimeout(function() {
                    _this.Status = false
                    _this.searchState = true
                    _this.$refs.loadmore.onTopLoaded();
                }, 1000)
            },
            loadBottom() {
                var _this = this
                this.Status = "bottomloading"
                setTimeout(function() {
                    _this.Status = false
                    _this.indexData.loadmore.push(..._this.indexData.loadmore)
                    _this.$refs.loadmore.onBottomLoaded();
                }, 1000)
            }
        },

        components: {
            [Loadmore.name]: Loadmore,
            search: search,
            banner,
            navtop,
            fastNews,
            jdms,
            everyCom: every_com,
            indexMoreload: index_moreload
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet/scss">
    ul {
        background: red
    }
    
    .bannerNew {
        img {
            width: 100%
        }
    }
    
    .loading p {
        text-align: center
    }
</style>