<style scoped>
    .jdms {
        overflow: hidden;
        background: white;
        /*border-radius: 0.1rem;*/
        margin: 0.1rem 0rem 0;
        /*padding: 0.1rem 0;*/
        /*height: 0.4rem;*/
        line-height: 0.6rem;
    }
    
    .jdms img {
        float: left;
        width: 1.5rem;
        margin: 0 0.3rem 0 0;
    }
    
    .jdms span {
        float: left;
        /*width: 1rem;*/
        vertical-align: middle
    }
    
    .jdms span:nth-child(2) {
        /*width: 3rem;*/
        margin-right: 0.2rem;
    }
    
    .jdms button {
        float: right;
        margin: 0.1rem 0.1rem 0 0;
    }
    
    .bottom {
        width: 100%;
        overflow: hidden;
        font-size: 0.24rem;
        margin-top: 0.1rem;
    }
    
    .bottom li {
        overflow: hidden;
        width: 1.66rem;
        float: left;
        height: 2rem;
        padding: 0.1rem;
        border-right: 0.01rem solid lightgray;
        border-top: 0.01rem solid lightgray;
    }
    
    .bottom aside {
        float: left;
        text-align: left;
    }
    
    .bottom aside p:nth-child(1) {
        font-size: 0.28rem;
        font-weight: bolder;
    }
    
    .bottom img {
        width: 100%;
    }
    
    .bottom li:first-child {
        width: 3.54rem;
    }
    
    .bottom li:first-child aside {
        width: 50%;
    }
    
    .bottom li:last-child {
        border-right: none
    }
    
    .banner img {
        width: 80%;
        display: block;
        margin: 0 auto;
    }
    
    .everyBanner {
        width: 2.1rem !important;
        font-size: 0.24rem
    }
    
    .everyBanner .onep {
        color: red;
        font-size: 0.28rem;
        margin: 0.1rem 0;
        font-weight: bolder;
    }
    
    .everyBanner p {
        text-align: center
    }
    
    .kxl {
        overflow: hidden;
        background: #ffaf00
    }
    
    .kxl li {
        width: 3.7rem;
        float: left
    }
    
    .kxl li:nth-child(even) {
        float: right
    }
    
    .kxl li img {
        width: 100%;
    }
    
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
    }
    
    .kxlTittle img {
        width: 100%;
    }
</style>
<template>
    <div>
          <div class="jdms">
            <img src="/image/icon/jdms.png" alt="">
            <span>{{intTime}}点场</span>
            <span>{{hours}}:{{minute}}:{{second}}</span>
            <button type="">一元秒电脑</button>
         </div>
           
        <swiper :options="swiperOption" ref="mykill" class="banner">
            <swiper-slide v-for="(i,index) in jdms.srollData" class="everyBanner">
            <img :src="i.img" alt="">
            <p class="onep">{{i.currentPrice}}</p>
            <p>{{i.originPrice}}</p>
            </swiper-slide>
        </swiper>
        <div class="kxlTittle">
            <img :src="jdms.kxl.titleImg" alt="">
        </div>
        <ul class="kxl">
            <li v-for="i in jdms.kxl.list"><img :src="i.img" alt=""></li>
        </ul>
        <ul class="kxlbottom">
            <li v-for="(i,index) in jdms.otherData">
                <template v-if="index!==3">
                    <p>
                        <span>{{i.name}}</span>
                        <span>{{i.text}}</span>
                    </p>
                    <aside>
                            <img :src="i.img" alt="">
                        </aside>
                </template>
<template v-else>
                    <section>
                        <span>{{i.name}}</span>
                        <span>{{i.text}}</span>
                        <aside>
                            <img :src="i.img" alt="">
                        </aside>
                        
                    </section>
                     <section>
                        <span>{{i.name}}</span>
                        <span>{{i.text}}</span>
                        <img :src="i.img" alt="">
                    </section>
                </template>
</li>
</ul>
</div>



</template>

<script>
    import {
        swiper,
        swiperSlide
    } from 'vue-awesome-swiper'
    export default {
        name: 'banner',
        props: ["jdms"],
        data() {
            return {
                currenttime: new Date(this.jdms.currentTime).getTime(),
                endtime: new Date(this.jdms.endTime).getTime(),
                swiperOption: {
                    slidesPerView: "auto"
                },
            }
        },
        methods: {

        },
        mounted() {
            var _this = this
            setInterval(function() {
                _this.currenttime += 1000

                // console.log(_this.currenttime)
            }, 1000)
        },
        computed: {
            alltime() {
                return this.endtime - this.currenttime
            },
            intTime() {
                return new Date(this.jdms.endTime).getHours()
            },
            hours() {
                return Math.floor(this.alltime / (1000 * 60 * 60))
            },
            minute() {
                return Math.floor((this.alltime % (1000 * 60 * 60)) / (1000 * 60))
            },
            second() {
                return Math.floor(((this.alltime % (1000 * 60 * 60)) % (1000 * 60)) / 1000)
            },
        },


        components: {
            swiper,
            swiperSlide
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->