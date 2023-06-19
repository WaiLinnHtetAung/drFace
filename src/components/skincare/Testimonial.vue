<template>
  <div class="feedback">
    <div class="quote">
      <i class="fa-solid fa-quote-left"></i>
    </div>
    <div class="row card-row ">
      <div class="col-lg-3">
        <div class="text">
          <h6>What they are saying about Drface Products</h6>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis sequi eum explicabo ab ratione, aliquam accusamus. Eum quaerat facilis eveniet.</p>
        </div>
      </div>
      <div class="col-lg-9">
        <swiper
          :slides-per-view="3"
          :space-between="30"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
          :autoplay="{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: false }"
          :breakpoints="{
              '450': {
              slidesPerView:2,
              slidesPerGroup:2,
              },
              '850': {
                  slidesPerView: 3,
                  slidesPerGroup: 3,
              },
          
          }"
          :navigation="true"
          :pagination="{
              clickable: true,
              dynamicBullets:true,
          }"
          class="swiper"
        >
          <swiper-slide v-for="(card, index) in cards" :key="index">
            <div class=" card" >
              <img :src="card.img" alt="">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem qui cum, alias aliquid inventore sit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, sit.</p>
            </div>
          </swiper-slide>

       

        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
  import {Swiper, SwiperSlide} from 'swiper/vue'
  import 'swiper/swiper-bundle.css'
  import SwiperCore,{ Autoplay, Pagination, Navigation } from 'swiper';
  SwiperCore.use([Autoplay, Navigation, Pagination])
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      let cards = [
        {img: require('@/assets/images/profile1.jpeg')},
        {img: require('@/assets/images/profile2.jpg')},
        {img: require('@/assets/images/profile3.jpeg')},
        {img: require('@/assets/images/profile4.jpg')},
        {img: require('@/assets/images/profile5.jpg')},
        {img: require('@/assets/images/profile6.jpg')}
      ];
   
      return {cards};
    },
  }
</script>

<style scoped>
  .feedback {
    width: 90%;
    height: 450px;
    background-image: linear-gradient(to left, rgba(192, 167, 28, 0.5), rgba(17, 89, 102, 0.8));
    margin: 150px auto;
    position: relative;
  }


  .text {
    margin-top: 50%;
    padding: 5px 15px;
  }

  .text h6 {
    color: #fff;
    font-size: 22px;
    font-weight: bold;
  }

  .text p {
    font-size: 14px;
    color: #eee;
  }

  .swiper {
    margin-left: 30px;
    margin-top: 1%;
    padding: 20px 20px;
  }


  .card img {
    width: 100%;
  }
</style>