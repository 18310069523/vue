<template>

      
            <swiper :options="swiperOption" :not-next-tick="notNextTick" ref="topBanner" >
    
                <swiper-slide v-for=" i in banner" class="banner">
                    <img :src="i.img" alt="">
                </swiper-slide>
                 <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
            
        
     
</template>

<script>
    import {
        swiper,
        swiperSlide
    } from 'vue-awesome-swiper'
    export default {
        name: 'banner',
        props: ["banner"],
        data() {
            return {
                notNextTick: true,
                swiperOption: {
                    autoplay: 1000,
                    pagination: '.swiper-pagination',
                    paginationClickable: true,
                    autoplayDisableOnInteraction: false
                }
            }
        },

        mounted() {

        },

        components: {
            swiper,
            swiperSlide
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    ul {
        background: red
    }
    
    .banner img {
        width: 100%;
    }
</style>