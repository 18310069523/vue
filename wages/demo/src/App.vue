<template>
  <div id="app">
    <span v-if="$root.user"></span>
    <template v-if="$route.path != '/login'">
      <HeaderBar></HeaderBar>
      <div class="content">
        <el-menu
          :default-active="defaultActive"
          class="left-menu"
          @open="handleOpen"
          :router='true'
          @close="handleClose"
        >
          <template v-for="(item, index) in $router.options.routes" v-if="item.meta"   >
            {{setActiveIndex(item.path,index)}}
            <el-submenu :index="(index+'')" v-if="item.children" :key="index">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>{{item.meta.title}}</span>
              </template>

              <el-menu-item
                v-for="(item2, index2) in item.children"
                :index="(index+'-'+(index2+1))"
                :key="index2"
                :route="{path:item.path+'/'+item2.path}"
              >{{setActiveIndex(item.path+'/'+item2.path, (index+'-'+(index2+1)))}}{{item2.meta.title}}</el-menu-item>
            </el-submenu>
            <el-menu-item  :index="(index+'')" :key="index" :route="{path:item.path}" v-else >
              <i class="el-icon-menu"></i>
              <span slot="title">{{item.meta.title}}</span>
            </el-menu-item>
          </template>
        </el-menu>
        <div class="right-content">
          <!-- <el-breadcrumb separator="/">
            <el-breadcrumb-item v-for="(item, index) in $route.matched" :key="index">{{item.meta.title}}</el-breadcrumb-item>
          </el-breadcrumb> -->
          <router-view/>
        </div>
      </div>
    </template>
    <template v-else>
      <router-view ></router-view>
    </template>
  </div>


</template>

<script>
import './static/font/iconfont.css'
import './static/css/reset.css'
import './static/css/index.css'

import HeaderBar from '@/components/HeaderBar'

export default {
  name: 'app',
  data () {
    return {
      defaultActive: '2'
    }
  },
  components: {
    HeaderBar
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    setActiveIndex (path, index) {
      if (path === this.$route.path) {
        this.defaultActive = index + ''
      }
      return ''
    }
  },
  created () {
    console.log(this.$root.user)
  }
}
</script>

<style lang="less">
#app {
  .content{
    padding-top:90px;
    .left-menu{
      width: 200px;
      position: fixed;
      bottom:0;
      top: 81px;
    }
    .right-content{
      margin-left: 200px;
      padding: 10px;
    }
  }
}
</style>
