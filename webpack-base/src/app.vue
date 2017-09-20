<template>
<div>
<header>
<label>京东生鲜</label>
</header>
<main>
	<div class="int">
		<input type="text" placeholder="搜索您想要的商品">
	</div>
	<ul class='list'>
		<li>精选</li>
		<li>水果</li>
		<li>海鲜</li>
		<li>肉禽</li>
		<li>速冻</li>
		<li>蔬菜蛋</li>
	</ul>
	<div class="swiper-container">
		<div class="swiper-wrapper">
			<div class="swiper-slide"><img src="images/a1.png" alt=""></div>
			<div class="swiper-slide"><img src="images/a1.png" alt=""></div>
			<div class="swiper-slide"><img src="images/a1.png" alt=""></div>
			<div class="swiper-slide"><img src="images/a1.png" alt=""></div>
		</div>
	</div>
</main>
</div>
</template>
<script>
	// new Swiper(".swiper-container",{
	// 	autoplay:500
	// })
</script>
<style scoped>
header{
	text-align: center;
	background: #F8F8F8;
	height: 0.88rem;
	line-height: 0.88rem;
	font-weight: bold;
	color: #f00;
}
main .int{
	width: 80%;
	height: 0.6rem;
	margin-left: 10%;
	background: #ccc;
	border-radius: 0.1rem;
}
.int input{
	width: 90%;
	height: 90%;
	margin-left: 5%;
	border:none;
	background: none
}
main .list{
	width: 100%;
	display: flex;
}
main .list li{
	flex: 1;
	text-align: center;
	list-style:none;
	font-size: 0.24rem;
	color: #ccc;
	line-height: 0.4rem;
	height: 0.4rem;
}
main .list li:hover{
	color: #000;
	border-bottom: 1px solid #000;
}
.swiper-slide img{
	width: 100%;
	height: 100%;
}
</style>