<template>
  <div class="feedback">
    <div class="quote">
      <i class="fa-solid fa-quote-left"></i>
    </div>
    <div class="row card-row ">
      <div class="col-lg-3">
        <div class="text">
          <h6>Customers' Feedback with Dr.Face Products</h6>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis sequi eum explicabo ab ratione, aliquam accusamus. Eum quaerat facilis eveniet.</p>
        </div>
      </div>
      <div class="col-lg-9" >
        <swiper
      
          :slides-per-view="3"
          :space-between="30"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
          :autoplay="{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: false }"
          :breakpoints="{
              '100': {
                slidesPerView:1,
                slidesPerGroup:1
              },
              '450': {
              slidesPerView:2,
              slidesPerGroup:1,
              },
              '850': {
                  slidesPerView: 3,
                  slidesPerGroup: 1,
              },
          
          }"
          :pagination="{
              clickable: true,
              dynamicBullets:true,
          }"
          class="swiper"
          id="card-swiper"
        >
          <swiper-slide v-for="(card, index) in cards" :key="index">
            <div class=" card" >
              <img :src="card.img" alt="">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem qui cum, alias aliquid inventore sit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, sit.</p>
              <h4>Customer Name</h4>
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
  import { ref } from 'vue';

  SwiperCore.use([Autoplay, Navigation, Pagination])

  export default {
    components: {Swiper, SwiperSlide,},
    setup() {
      let cards = [
        {img: require('@/assets/images/profile1.jpeg')},
        {img: require('@/assets/images/profile2.jpg')},
        {img: require('@/assets/images/profile3.jpeg')},
        {img: require('@/assets/images/profile4.jpg')},
        {img: require('@/assets/images/profile5.jpg')},
        {img: require('@/assets/images/profile6.jpg')}
      ];

        // Refs for custom CSS styles
      const nextButtonStyle = ref
      ({
        fontSize: '24px',
        width: '40px',
        height: '40px',
        lineHeight: '40px',
        backgroundColor: '#fff',
        color: '#000',
      });

      const prevButtonStyle = ref({
        fontSize: '24px',
        width: '40px',
        height: '40px',
        lineHeight: '40px',
        backgroundColor: '#fff',
        color: '#000',
      });

   
      return {cards, nextButtonStyle, prevButtonStyle};
    },
  }
</script>

<style scoped>
  .feedback {
    width: 90%;
    height: 450px;
    background-image: linear-gradient(to left, rgba(192, 167, 28, 0.5), rgba(17, 89, 102, 0.8));
    margin: 100px auto;
    position: relative;
  }

  .quote {
    width: 100px;
    height: 100px;
    background-color: #3a2d7c;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    position: absolute;
    top: -40px;
    left: 80px;
  }

  .quote i {
    font-size: 50px;
    color: #fff;
  }
  .text {
    margin: 40% 0 0 15%;
    padding: 5px 25px;
  }

  .text h6 {
    color: #fff;
    font-size: 22px;
    font-weight: bold;
  }

  .text p {
    font-size: 14px;
    color: #eee;
    margin-top: 25px;
  }

  .swiper {
    margin-left: 30px;
    margin-top: 1%;
    padding: 20px 20px 30px;
  }

  .card {
    height: 340px;
  }
  .card img {
    width: 100%;
    object-fit: cover;
    object-position: center;
    height: 170px;
    border-radius: 5px 5px 0 0;
  }

  .card p {
    font-size: 12px;
    margin-top: 15px;
    padding: 8px;
  }

  .card h4 {
    font-size: 16px;
    font-weight: bold;
    text-align: center;
  }
</style>