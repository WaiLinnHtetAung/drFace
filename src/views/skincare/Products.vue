<template>
  <div style="background: #fff">
    <div class="top-img">
      <img src="@/assets/images/products-img.jpg" alt="" />
      <div class="text">
        <h3>Dr.Face Treatments and skin care products</h3>
        <p>
          This collection of medical-grade products helps banish blemishes and
          promote clearer skin.
        </p>
      </div>
    </div>
    <div class="title">All Products</div>
    <div class="row products">
      <div
        class="col-lg-3 col-md-6 product-card mb-5"
        v-for="(product, index) in products"
        :key="index"
      >
        <div class="product-img" :style="product.bg">
          <img :src="product.img" alt="" />
        </div>
        <div class="ingredients">
          <span v-for="(item, index) in product.ingredients" :key="index">{{
            item
          }}</span>
        </div>
        <h2>{{ product.name }}</h2>
        <div class="rating">
          <i class="fa-solid fa-star me-2"></i
          ><i class="fa-solid fa-star me-2"></i
          ><i class="fa-solid fa-star me-2"></i
          ><i class="fa-solid fa-star me-2"></i
          ><i class="fa-solid fa-star me-2"></i>
          <p>
            <i class="fa-solid fa-money-bill-1-wave me-2"></i
            >{{
              product.price
                ? product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                : ""
            }}
          </p>
        </div>
        <div class="detail pointer" @click="detail(product.id)">
          <router-link :to="'/product/' + product.id">See Detail</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, onUpdated } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  setup() {
    let router = useRouter();
    let store = useStore();
    let products = computed(() => store.getters["getProducts"]);

    let detail = (id) => router.push(`/product/${id}`);

    onMounted(() => {
      window.scrollTo(0, 0);
    });

    return { products, detail };
  },
};
</script>

<style scoped>
.top-img {
  position: relative;
  margin-bottom: 50px;
}
.top-img img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  object-position: center;
  filter: brightness(0.9);
}
.top-img .text {
  position: absolute;
  bottom: 30%;
  left: 10%;
  width: 500px;
}

.text h3 {
  font-size: 33px;
  font-weight: bold;
  font-style: italic;
}
.text p {
  font-size: 14px;
  margin-top: 20px;
}

.product-card {
  position: relative;
  height: 450px;
}

.title {
  width: 86%;
  padding: 10px 20px;
  border: none;
  margin: 0 auto 15px;
  border-radius: 7px;
  background-image: linear-gradient(to left, #cabcbc, rgb(236, 162, 25, 0.5));
  font-size: 18px;
  box-shadow: 8px 8px 0.4rem #c9c5bb;
  font-weight: bold;
}

.products {
  padding: 20px 7%;
}

.product-img {
  width: 100%;
  height: 180px;
  text-align: center;
  padding: 0;
  margin: 0;
  background-image: -webkit-linear-gradient(65deg, #196892 50%, #7dbee2 40%);
}

.products img {
  width: 60%;
  object-fit: contain;
  height: 100%;
}

.ingredients {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  justify-content: center;
  margin: 20px auto 10px;
  padding: 0 5px;
}
.ingredients span {
  border: 1px solid rgb(73, 63, 63);
  padding: 0px 10px;
  font-size: 10px;
  border-radius: 10px;
}

.product-card h2 {
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  font-style: italic;
  margin: 20px auto;
  padding: 0 20px;
}

.rating {
  text-align: center;
}

.rating .fa-star {
  color: #e2c164;
}

.rating p i {
  color: green;
}

.rating p {
  margin: 12px auto 10px;
  font-weight: bold;
  font-size: 12px;
}
.detail {
  background-color: #eee;
  width: 93%;
  padding: 20px auto;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: -webkit-linear-gradient(65deg, #747171 25%, #e2c164 20%);
  position: absolute;
  bottom: 0;
}
.product-card a {
  text-decoration: none;
  color: #423e3e;
  font-weight: bold;
  font-size: 12px;
}

@media (max-width: 990px) {
  .product-card {
    position: relative;
    height: 400px;
  }
}

@media (max-width: 768px) {
  .top-img .text {
    width: 300px;
  }
  .text h3 {
    font-size: 24px;
    font-weight: bold;
    font-style: italic;
  }
}
</style>
