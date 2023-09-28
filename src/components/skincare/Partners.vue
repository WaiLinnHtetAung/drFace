<template>
    <div class="partners">
        <div class="partners-slider swiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide"  v-for="i in 14" :key="i">
                <div class="partners-card">
                  <img 
                        :src="require(`@/assets/images/logos/${i}.png`)" alt="" 
                        :class="{'lg-img': i ==4 || i == 5 || i == 6 || i == 7 || i == 12}"
                    />
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-pagination" id="swiper-paginate"></div>
    </div>
</template>

<script>
import { onMounted, ref } from 'vue';
    export default {
        setup() {
            const swiper = ref(null);

            onMounted(() => {
                swiper.value = new Swiper(".partners-slider", {
                    speed: 600,
                    loop: true,
                    autoplay: {
                    delay: 1000,
                    disableOnInteraction: false,
                    },
                    slidesPerView: "auto",
                    pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                    type: "bullets",
                    },
                    breakpoints: {
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                    },

                    500: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },

                    700: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },

                    1200: {
                        slidesPerView: 6,
                        spaceBetween: 20,
                    },
                    },
                });
            });
        }
    }
</script>

<style scoped>
    .partners {
        margin: 40px auto 10px;
        padding: 0 13%;
        height: 320px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-image: linear-gradient(to left,rgba(165, 165, 79, 0.5), rgba(102, 102, 226, 0.5));
    }

    .partners img {
        width: 75%;
        height: 200px;
        object-fit: contain;
    }

    .partners img.lg-img {
        width: 95%;
    }

    @media (max-width:1600px) {
        .partners {
            padding: 0 9%;
        }
    }

    @media (max-width: 1080px) {
        .partners {
            padding: 0 5%;
            height: 250px;
        }
   
    }
</style>
