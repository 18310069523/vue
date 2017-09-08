<template>
<div class="main">
	<div class="int"><input type="text" placeholder="搜索"></div>
	<dl v-for="item in items">
			<dt><img :src="item.img" alt=""></dt>	
			<dd>
				<p><strong>{{item.name}}</strong><em>{{item.time}}</em></p>
				<p>{{item.con}}</p>
			</dd>
	</dl>
</div>
</template>

<script>
	export default {
		"name":"",
		data(){
			return {
				items:	[
					{name:"我的电脑",img:"../../static/images/a2.jpg",con:"你已在电脑登录，可传文件到电脑"},
					{name:"腾讯新闻",img:"../../static/images/a3.jpg",con:"萌妹子叫“黄埔军校” 开学3天火了"},
					{name:"八一小分队",img:"../../static/images/a4.jpg",con:"我们是最棒的！！！"},
					{name:"QQ看点",img:"../../static/images/a5.jpg",con:"[订阅]最新潮流"},
					{name:"王世杰",img:"../../static/images/a6.jpg",con:"[别笑了]别笑了眼泪都掉了"},
					{name:"购物号",img:"../../static/images/a7.jpg",con:"【新消息】电影大放送"},
					{name:"李四",img:"../../static/images/a8.jpg",con:"今天天气真好"}
				]
			}
		}
	}
</script>

<style scoped>
	dl{
		width: 100%;
		height: auto;
		border-bottom: 1px solid #EEEEEE;
	}
	dt{
		width: 50px;
		height: 50px;
		padding: 2%;
		padding-bottom: 0;
		float: left;
	}
	dt img{
		width: 100%;
		height: 100%;
	}
	dd{
		width: 100%;
		height: auto;
	}
	dd p{
		line-height: 33px;
		text-align: left;
		
	}
	dd p strong{
		font-family: "微软雅黑";
		font-size: 18px;
	}
	dd p em{
		float: right;
		padding-right: 10px;
		font-style: normal;
	}
	

	.main{
		width: 100%;
		height: 100%;
		overflow-y: auto;
	}
	.int{
		width: 100%;
		height: 40px;
		border-radius: 5px;
		background: #F3F3F3;
	}
	.int input{
		width: 20%;
		line-height: 40px;
		height: 90%;
		margin-top:1%;
		background: #F3F3F3; 
		border:none;
	}
</style>