<template>
  <div class="feedback">
    <div class="quote">
      <i class="fa-solid fa-quote-left"></i>
    </div>
    <div class="row card-row">
      <div class="col-lg-3">
        <div class="text">
          <h6>Customers' Feedback with Dr.Face Products</h6>
        </div>
      </div>
      <div class="img-preview-container" v-if="imgview == true">
        <div class="img-preview">
          <div
            class="d-flex justify-content-between align-items-center px-3 py-1 text-white shadow"
            style="background: #333"
          >
            <span>Image Preview</span>
            <i
              class="fa-solid fa-xmark fs-3 pointer"
              @click="imgview = false"
            ></i>
          </div>
          <ReviewImage :img_url="image_url" />
        </div>
      </div>
      <div class="col-lg-9">
        <div class="feedback-slider swiper">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide"
              v-for="(card, index) in cards"
              :key="index"
            >
              <div class="card pointer" @click="getImageView(index)">
                <img :src="card.img" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-pagination" id="swiper-paginate"></div>
      </div>
    </div>
  </div>
</template>

<script>
import ReviewImage from "./ReviewImage";
import { ref, onMounted } from "vue";
export default {
  components: { ReviewImage },
  setup() {
    let cards = [
      { img: require("@/assets/images/review/1.jpg") },
      { img: require("@/assets/images/review/2.jpg") },
      { img: require("@/assets/images/review/3.jpg") },
      { img: require("@/assets/images/review/4.jpg") },
      { img: require("@/assets/images/review/5.jpg") },
      { img: require("@/assets/images/review/6.jpg") },
    ];

    let imgview = ref(false);
    let image_url = ref("");
    const getImageView = (url) => {
      image_url.value = url;
      imgview.value = true;
    };

    const swiper = ref(null);

    onMounted(() => {
      swiper.value = new Swiper(".feedback-slider", {
        speed: 600,
        loop: true,
        autoplay: {
          delay: 5000,
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
            slidesPerView: 1,
            spaceBetween: 20,
          },

          650: {
            slidesPerView: 2,
            spaceBetween: 20,
          },

          1200: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        },
      });
    });

    return { cards, swiper, imgview, image_url, getImageView };
  },
};
</script>

<style scoped>
.feedback {
  width: 90%;
  height: 450px;
  background-image: linear-gradient(
    to left,
    rgba(192, 167, 28, 0.5),
    rgba(17, 89, 102, 0.8)
  );
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
  font-size: 28px;
  font-weight: bold;
  margin-top: 30px;
}

.text p {
  font-size: 14px;
  color: #eee;
  margin-top: 25px;
}

.swiper {
  margin-left: 30px;
  margin-top: 2%;
  padding: 20px 20px 30px;
}

.card {
  height: 350px;
  border-radius: 7px;
  overflow: hidden;
}
.card img {
  width: 100%;
  object-fit: fill;
  object-position: center;
  height: 100%;
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

.img-preview-container {
  width: 100%;
  height: 100%;
  background: rgb(242, 242, 242, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999999;
  display: flex;
  justify-content: center;
  align-items: start;
}

.img-preview {
  height: 500px;
  width: 800px;
  margin-top: 50px;
}

@media (max-width: 1500px) {
  .card {
    height: 320px;
  }
  .swiper {
    margin-left: 20px;
    margin-top: 5%;
  }
}

@media (max-width: 1300px) {
  .text {
    margin: 40% 0 0 10%;
    padding: 5px 15px;
  }

  .text h6 {
    font-size: 24px;
    margin-top: 50px;
  }
  .card {
    height: 290px;
  }
  .swiper {
    margin-left: 10px;
    margin-top: 7%;
  }

  .swiper-pagination {
    padding-left: 200px;
    margin-bottom: 20px;
  }
}

@media (max-width: 990px) {
  .feedback {
    width: 90%;
    height: 500px;
  }
  .quote {
    width: 80px;
    height: 80px;
    left: 50px;
  }

  .quote i {
    font-size: 40px;
  }
  .text {
    margin: 0%;
    padding: 5px 15px;
  }

  .text h6 {
    text-align: center;
    font-size: 24px;
    margin-top: 30px;
  }
  .card {
    height: 330px;
  }
  .swiper {
    margin-left: 10px;
    margin-top: 1%;
  }

  .swiper-pagination {
    padding-left: 0px;
    margin-bottom: 10px;
  }
}

@media (max-width: 768px) {
  .feedback {
    width: 90%;
    height: 470px;
  }
  .text {
    margin: 0%;
    padding: 15px 15px 0px;
  }

  .card {
    height: 280px;
  }
  .card img {
    object-fit: cover;
    height: 100%;
  }
}

@media (max-width: 650px) {
  .swiper-slide {
    display: flex;
    justify-content: center;
  }
  .card {
    width: 80%;
    height: 300px;
    text-align: center;
  }
  .card img {
    object-fit: fill;
    height: 100%;
  }
}

@media (max-width: 590px) {
  .card {
    width: 100%;
    height: 300px;
  }
  .swiper-pagination {
    margin-bottom: 0px;
  }
}
</style>
