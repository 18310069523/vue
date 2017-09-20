<template>
<main id="mains">
	<div class="box">
	<div class="left">
		<input type="text" placeholder="手机号">
		<input type="text" placeholder="验证码">
	</div>
	<div class="right">
		<input type="button" @click="getnode()" value="获取验证码">
	</div>
	</div>
</main>
</template>
<script>
export default{
	name:"main",
	data:function(){
		return{
			val:60
		}
	},
	methods:{
		getnode(){
			setTimeout(function(){
				this.value = this.val;
				this.val = this.val--
			},1000)
		}
	}
}

</script>
<style>
	main{
		flex: 1;
		
	}
	.box{
		width: 80%;
		margin-left: 10%;
		height: 4rem;
		display: flex;
		border:1px solid #ccc;
		margin: 2rem auto;
	}
	.left{
		flex: 4;
	}
	.left input{
		height: 1.8rem;
	}
	.right{
		flex: 3;
		text-align: center;
		line-height: 3rem;
	}
	.right input{
	    border: none;
	    background: #fff;
	    margin-top: 27%;
	}
</style>