<style scoped>
    .kxlbottom {
        overflow: hidden;
    }
    
    .kxlbottom li {
        width: 3.74rem;
        float: left;
        border-bottom: 0.02rem solid lightgray;
        display: flex;
        font-size: 0.26rem;
        padding: 0.2rem 0 0;
        height: 1.8rem
    }
    
    .kxlbottom li p {
        flex: 1;
        padding: 0.1rem
    }
    
    .kxlbottom li p span {
        display: block
    }
    
    .kxlbottom li p span:nth-child(1) {
        font-weight: bold
    }
    
    .kxlbottom li aside {
        flex: 1;
    }
    
    .kxlbottom li img {
        width: 80%
    }
    
    .kxlbottom li:nth-child(4) section {
        flex: 1;
        display: flex;
        flex-direction: column;
    }
    
    .kxlbottom li:nth-child(4) section img {
        width: 60%
    }
    
    .kxlbottom li:nth-child(odd) {
        border-right: 0.02rem solid lightgray;
    }
    
    .kxlTittle {
        width: 100%;
        padding: 0.1rem 0 0;
        height: 0.8rem;
    }
    
    .kxlTittle img {
        width: 1.6rem;
        display: block;
        margin: 0 auto;
    }
    
    .com_bottom {
        overflow: hidden;
        font-size: 0.28rem;
        border-bottom: 0.015rem solid lightgray;
    }
    
    .com_bottom li {
        float: left;
        width: 1.65rem;
        border-right: 0.015rem solid lightgray;
        padding: 0.1rem;
    }
    
    .com_bottom li:last-child {
        border: none
    }
    
    .com_bottom li span {
        display: block;
        font-size: 0.24rem;
    }
    
    .com_bottom li span:nth-child(1) {
        font-size: 0.3rem;
        font-weight: bold;
    }
    
    .com_bottom li img {
        display: block;
        width: 1.5rem;
        margin: 0.1rem auto;
    }
    
    .banner img {
        width: 100%;
    }
</style>
<template>
    <div>
        
           
        
        <div class="kxlTittle" :style="{background:'url('+alldata.bgimg+') 100% 100% no-repeat'}">
            <img :src="alldata.classImg" alt="">
        </div>
        
        <ul class="kxlbottom">
                <li v-for="(i,index) in alldata.firstData">
                    <p>
                        <span>{{i.name}}</span>
                        <span>{{i.text}}</span>
                    </p>
                    <aside>
                            <img :src="i.img" alt="">
                    </aside>
                </li>
                
        </ul>
        <ul class="com_bottom">
            
                <li v-for="i in alldata.secData">
                        <span>{{i.name}}</span>
                        <span>{{i.text}}</span>
                        <img :src="i.img" alt="">
                       
                       
                </li>
            
        </ul>
        <swiper :options="swiperOption" :not-next-tick="notNextTick" ref="every_com" >
    
                <swiper-slide v-for=" i in alldata.banner" class="banner">
                    <img :src="i.img" alt="">
                </swiper-slide>
                 <div class="swiper-pagination every_com_page"  slot="pagination"></div>
            </swiper>
</div>



</template>

<script>
    import {
        swiper,
        swiperSlide
    } from 'vue-awesome-swiper'
    export default {
        name: 'banner',
        props: ["alldata"],
        data() {
            return {

                notNextTick: true,
                swiperOption: {
                    autoplay: 1000,
                    pagination: '.every_com_page',
                    paginationClickable: true,
                    autoplayDisableOnInteraction: false
                }
            }
        },
        methods: {

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