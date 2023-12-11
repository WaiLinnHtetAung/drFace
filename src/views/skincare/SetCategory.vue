<template>
  <div class="set-list">
    <div class="section-header">
      <h2>Available Skincare Sets</h2>
      <div class="line"></div>
    </div>

    <div class="row mt-5">
      <div class="col-lg-3 col-md-6 mb-4 set-card">
        <div
          class="photo-card"
          style="
            background-image: -webkit-linear-gradient(
              65deg,
              #d5a5ad 50%,
              #e1bbc2 40%
            );
          "
        >
          <img src="@/assets/images/set/acne.png" alt="" />
        </div>
        <div class="card-content text-center">
          <h4>Acne Set (ဝက်ခြံအသားအရေများအတွက်)</h4>
          <i class="fa-solid fa-star me-2"></i
          ><i class="fa-solid fa-star me-2"></i
          ><i class="fa-solid fa-star me-2"></i
          ><i class="fa-solid fa-star me-2"></i
          ><i class="fa-solid fa-star me-2"></i>
          <!-- <p>
            <i class="fa-solid fa-money-bill-1-wave text-black me-2"></i>0000 Ks
          </p> -->
          <router-link to="/set/acne" class="detail-btn"
            >See Detail</router-link
          >
        </div>
      </div>
      <div class="col-lg-3 col-md-6 mb-4 set-card">
        <div
          class="photo-card"
          style="
            background-image: -webkit-linear-gradient(
              65deg,
              #4987e6 50%,
              #85b1f3 40%
            );
          "
        >
          <img src="@/assets/images/set/white.png" alt="" />
        </div>
        <div class="card-content text-center">
          <h4>Whitening Set (အသားဖြူဝင်းချင်သူများအတွက်)</h4>
          <i class="fa-solid fa-star me-2"></i
          ><i class="fa-solid fa-star me-2"></i
          ><i class="fa-solid fa-star me-2"></i
          ><i class="fa-solid fa-star me-2"></i
          ><i class="fa-solid fa-star me-2"></i>
          <!-- <p>
            <i class="fa-solid fa-money-bill-1-wave text-black me-2"></i>00000
            Ks
          </p> -->
          <router-link to="/set/whitening" class="detail-btn"
            >See Detail</router-link
          >
        </div>
      </div>
      <div class="col-lg-3 col-md-6 mb-4 set-card">
        <div
          class="photo-card"
          style="
            background-image: -webkit-linear-gradient(
              65deg,
              #f184ac 50%,
              #f59abb 50%
            );
          "
        >
          <img src="@/assets/images/set/anti.png" alt="" />
        </div>
        <div class="card-content text-center">
          <h4>Anti-aging Set (အရေးအကြောင်းရှိသော အသားအရေများအတွက်)</h4>
          <i class="fa-solid fa-star me-2"></i
          ><i class="fa-solid fa-star me-2"></i
          ><i class="fa-solid fa-star me-2"></i
          ><i class="fa-solid fa-star me-2"></i
          ><i class="fa-solid fa-star me-2"></i>
          <!-- <p>
            <i class="fa-solid fa-money-bill-1-wave text-black me-2"></i>0000 Ks
          </p> -->
          <router-link to="/set/anti-aging" class="detail-btn"
            >See Detail</router-link
          >
        </div>
      </div>
      <div class="col-lg-3 col-md-6 mb-4 set-card">
        <div
          class="photo-card"
          style="
            background-image: -webkit-linear-gradient(
              65deg,
              #56c0e2 50%,
              #6ecded 40%
            );
          "
        >
          <img src="@/assets/images/set/glow.png" alt="" />
        </div>
        <div class="card-content text-center">
          <h4>Glow Set (Starter Set) ပုံမှန်အသားအရေများအတွက်</h4>
          <i class="fa-solid fa-star me-2"></i
          ><i class="fa-solid fa-star me-2"></i
          ><i class="fa-solid fa-star me-2"></i
          ><i class="fa-solid fa-star me-2"></i
          ><i class="fa-solid fa-star me-2"></i>
          <!-- <p>
            <i class="fa-solid fa-money-bill-1-wave text-black me-2"></i>0000 Ks
          </p> -->
          <router-link to="/set/glow" class="detail-btn"
            >See Detail</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
export default {
  setup() {
    onMounted(() => {
      window.scrollTo(0, 0);
    });
  },
};
</script>

<style scoped>
.set-list {
  margin: 70px;
  padding: 0 9%;
}

.set-list .section-header {
  margin-bottom: 60px;
}

.set-card {
  transition: 0.3s ease-in-out;
}

.set-card:hover {
  background: #e9e6e6;
  border-radius: 20px;
  padding: 20px;
  transform: translateY(-30px);
}

.photo-card img {
  width: 100%;
  border-radius: 20px;
}

.photo-card span {
  background-color: rgb(200, 163, 56, 0.7);
  padding: 1px 15px;
  font-size: 13px;
  font-weight: bold;
  position: absolute;
  right: 0%;
}

.card-content {
  margin-top: 20px;
  height: 150px;
  position: relative;
}

.card-content i {
  color: goldenrod;
  font-size: 14px;
}

.card-content h4 {
  font-size: 16px;
  font-weight: 500;
  font-style: italic;
}

.card-content p {
  font-size: 13px;
  font-weight: bold;
  margin: 8px 0 20px;
  position: absolute;
  bottom: 28px;
  left: 0;
  right: 0;
}

.detail-btn {
  width: 100%;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
}

@media (min-width: 1500px) {
  .detail-btn {
    right: 42%;
  }
}
</style>
