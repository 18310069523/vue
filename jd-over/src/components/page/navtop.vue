<template>
            <!--<div class="swiper-container banner navtop">
                <div class="swiper-wrapper">
                    <div class="swiper-slide allnavtop" v-for=" i in listpage">
                        <dl v-for="j in geteverydata(i-1)" >
                            <dt><img :src="j.img" alt=""></dt>
                            <dd>{{j.name}}</dd>
                        </dl>
                    </div>
                </div>
                <div class="swiper-pagination navtopPage"></div>
            </div>-->
            <swiper :options="swiperOption" class="navtop" ref="navtop" >
    
                <swiper-slide v-for=" i in listpage" class="allnavtop">
                   <dl v-for="j in geteverydata(i-1)" >
                            <dt><img :src="j.img" alt=""></dt>
                            <dd>{{j.name}}</dd>
                        </dl>
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
        props: ["tab"],
        data() {
            return {
                swiperOption: {
                    grabCursor: true,
                    setWrapperSize: true,
                    pagination: '.swiper-pagination',
                    paginationClickable: true,
                    mousewheelControl: true,
                    observeParents: true,
                }

            }
        },
        methods: {
            geteverydata(i) {
                return this.tab.slice(i * 10, (i + 1) * 10)
            }
        },
        computed: {
            listpage: function() {

                return Math.ceil(this.tab.length / 10)
            },
            alldata() {
                var arr = []
                for (var i = 0; i < this.listpage; i++) {
                    arr.push(this.tab.slice(i * 10, (i + 1) * 10))
                }
                // this.listpage.forEach(function(i, index) {
                // arr.push(this.tab.slice(index, (index + 1) * 10))
                // });
                return arr
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
    .banner img {
        width: 100%;
    }
    
    .navtop {
        background: #f3f3f3
    }
    
    .allnavtop {
        display: flex;
        flex-wrap: wrap;
    }
    
    .allnavtop dl {
        width: 20%;
        font-size: 0.26rem;
        text-align: center;
        margin: 0.1rem 0;
    }
    
    .allnavtop dt img {
        width: 50%;
    }
</style>