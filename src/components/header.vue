<template>
<div class="header" id="header">
	<a><img src="../../static/images/a1.jpg" alt=""></a>	
	<label>消息</label>
	<i>+</i>
</div>
</template>

<script>
	export default {
		"name":"header"
	}
</script>

<style scoped>
.header{
		width: 100%;
		height: 44px;
		line-height: 44px;
		text-align: center;
		display: flex;
		background:#FB6B8F;
	}
.header label{
	flex:4;
	color:#fff;
	font-size: 18px;
}
.header i{
	flex:1;
	color:#fff;
	font-size:30px;
	font-style:normal;
}
.header a{
	flex:1;
	padding: 5px;
}
.header a img{
	width:70%;
	height:100%;
}
</style>