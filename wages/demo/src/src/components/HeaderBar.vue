<template>
  <header class="header-bar">
    <el-row>
        <el-col :span="12" class="left-info">
            <div class="logo">
                <img src="https://gztdd.hrwuu.com/Public/news/img/index/index_header_login.png" />
                <span>安心工资条</span>
            </div>
            <small>北京八维研修学院</small>
        </el-col>
        <el-col :span="12" class="right-info">
            <nav>
                <a href="#"><i class="iconfont icon-xiaoxi"></i></a>
                <a href="#">
                    <img src=""/>
                    <span>刘于</span>
                </a>
                <a href="#"><i class="iconfont icon-tuichu"></i></a>
            </nav>
        </el-col>
    </el-row>
  </header>
</template>

<script>
  export default {
    name: 'HeaderBar'
  }
</script>

<style scoped lang="less">
.header-bar {
  border-bottom: 1px solid #ccc;
  padding: 20px;
  position: fixed;
  z-index: 100;
  background: #fff;
  width: 100%;
  box-sizing: border-box;
  .logo{
    height: 40px;
    display: inline-block;
    line-height: 40px;
    img{
      display: inline-block;
      height: 100%;
      vertical-align: middle;
    }
  }
  .right-info{
    text-align: right;
  }
}
</style>
