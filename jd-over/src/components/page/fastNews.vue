<template>
        <div class="fastNews">
            <img src="/image/icon/jd_news.png" alt="">
            <swiper :options="swiperOption" ref="fastNews" class="centers" >
                <swiper-slide v-for=" i in fastnews">
                    {{i.text}}
                </swiper-slide>
            </swiper>
            <button type="">更多</button>
        </div>
            
        
     
</template>

<script>
    import {
        swiper,
        swiperSlide
    } from 'vue-awesome-swiper'
    export default {
        name: 'banner',
        props: ["fastnews"],
        data() {
            return {

                swiperOption: {
                    autoplay: 2000,
                    direction: 'vertical'
                }
            }
        },
        components: {
            swiper,
            swiperSlide
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .fastNews {
        overflow: hidden;
        background: white;
        border-radius: 0.1rem;
        margin: 0 0.2rem;
        height: 0.4rem;
        padding: 0.1rem 0;
    }
    
    .fastNews img {
        float: left;
        width: 1.5rem;
        margin: 0.03rem 0.2rem 0 0.4rem;
    }
    
    .centers {
        float: left;
        width: 2rem;
        font-size: 0.24rem;
    }
    
    .fastNews button {
        float: right;
        width: 0.8rem;
    }
</style>