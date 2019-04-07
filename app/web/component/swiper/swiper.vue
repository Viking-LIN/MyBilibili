<template>
	<div>
		<!--轮播图---写法-->
		 <div class="swiper-container">
	        <div class="swiper-wrapper">
	            <div class="swiper-slide" v-for="item in swiperList" :key="item.index">
	            	<img :src="item.imgSrc.split('@')[0]"/>
	            </div>
	        </div>
	        <div class="swiper-pagination swiper-pagination-white"></div>
    	</div>
	</div>
</template>
<script>
	import Swiper from 'swiper';
    import 'swiper/dist/css/swiper.min.css';
    export default {
        name:'Swiper',
        props:['swiperList'],
        mounted() {
			var mySwiper = new Swiper ('.swiper-container', {
			    loop: true, 
			    pagination: {
			      el: '.swiper-pagination',
			    },    
			    // 如果需要前进后退按钮
			    navigation: {
			      nextEl: '.swiper-button-next',
			      prevEl: '.swiper-button-prev',
			    },
			    autoplay: {
			    disableOnInteraction: false,
			  },
			})  
        }
    }	
</script>
<style>	
	 .swiper-container {width: 500px; height: 220px;border-radius: 5px;}
      .swiper-wrapper {width: 100%; height: 100%; }
      .swiper-slide { width: 100%;   height: 100%;}
			.swiper-pagination{
				position: relative;

			}
			.swiper-container-horizontal>.swiper-pagination-bullets{    left: 200px;
    width: 100%;
    top: -20px;}
      .swiper-pagination-bullet { width:0.833rem;
        height: 0.833rem;display: inline-block;  background: #FFFFFF; }  
    .swiper-slide img{width: 100%;height: 100%; }
</style>
