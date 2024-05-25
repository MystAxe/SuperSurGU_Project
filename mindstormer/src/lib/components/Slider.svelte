<script>
	import { register } from 'swiper/element/bundle';
    register();
	
</script>


<swiper-container
class="slider" 
space-between="90" 
centered-slides="true" 
slides-per-view="2.5" 
loop="true" 
navigation="true"
  >
	<swiper-slide class="slide">
		<img  src="slider\slide1.jpg" alt="">
	</swiper-slide>
	<swiper-slide class="slide">
		<img  src="slider\slide2.jpg" alt="">
	</swiper-slide>
	<swiper-slide class="slide">
		<img  src="slider\slide3.jpg" alt="">
	</swiper-slide>
	<swiper-slide class="slide">
		<img  src="slider\slide4.jpg" alt="">
	</swiper-slide>
	<swiper-slide class="slide">
		<img  src="slider\slide5.jpg" alt="">
	</swiper-slide>
</swiper-container>


<style>
	.slider {
		margin-top: 50px;
		width: 100%;
		height: auto;
	}
	.slide {
	}
    .slide img {
		width: 100%;
		height: auto;
		border-radius: 25px;
	}
	swiper-container::part(button-prev),
	swiper-container::part(button-next) {
		color: #000;
		background-color: #fff;
		height: 35px;
		border-radius: 50%;
		width: 40px;
	}

	swiper-container::part(button-prev) {
		padding: 10px 10px 10px 5px;
	}
	
	swiper-container::part(button-next) {
		padding: 10px 5px 10px 10px;
	}
</style>