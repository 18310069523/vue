import Vue from "vue"
//import head from "./components/head.vue"

import main from "./app.vue"
import "swiper.css"
import "swiper.js"
import "style.css"
new Vue({
    el: '#app',
   	render:h=>h(main)
})
