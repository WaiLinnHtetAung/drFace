<template>
  <div class="choose">
    <div class="option-card">
      <div class="row">
        <div class="welcome-text">
          <h2>Welcome to &nbsp;&nbsp; <span class="dr-face">Dr.Face</span></h2>
        </div>
        <div class="col-lg-6 col-md-6 skincare">
          <img src="@/assets/images/products.png" alt="">
          <h4>Dr.Face Skin care</h4>
          <router-link to="/drface" @click="choose('skincare')">Visit Website</router-link>
        </div>
        <div class="col-lg-6 col-md-6 clinic">
          <img src="@/assets/images/doctor.png" alt="">
          <h4>The Face Clinic</h4>
          <router-link to="/clinic" @click="choose('clinic')">Visit Website</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { useStore } from 'vuex';
  export default {
    setup() {
      const store = useStore();

      let choose = (status) => {
        store.dispatch('getPageStatus', status);
      }

      return {choose}
    }
  }
</script>

<style scoped>
  .choose {
    position: fixed;
    top: 0;
    bottom: 0;
    background: rgba(38, 38, 38, 0.8);
    width: 100%;
    height: 100%;
  }
  .row {
    position: relative;
    box-shadow: 5px 5px 10px rgb(155, 153, 153);

  }

  .welcome-text {
    position: absolute;
    top: 20px;
    left: 180px;
    
  }

  .dr-face {
    color: aqua;
  }

  .welcome-text h2 {
    font-weight: bold;
    color: #fff;
    background: #b3912f;
    display: inline-block;
    padding: 5px 35px;
    box-shadow: 10px 10px 10px rgb(138, 137, 126);
  }

  .option-card {
    width: 800px;
    margin: 120px auto;
  }

  .skincare {
    background-image: linear-gradient(to right,rgba(218, 172, 33, 0.5), rgba(240, 218, 167, 0.7));
    height: 430px;
    text-align: center;
  }
  .clinic {
    background-image: linear-gradient(to left,rgb(148, 203, 206), rgb(203,229,230, .7));
    text-align: center;
  }

  .clinic img {
    margin: 95px 0 14px 0;
    width: 50%;
  }

  .skincare img {
    margin-top: 120px;
    width: 60%;
  }

  .skincare h4, .clinic h4 {
    font-style: italic;
    font-size: 22px;
    font-weight: bold;
  }

  a {
    text-decoration: none;
    font-size: 16px;
    padding:5px 20px;
    background: #53bbb4;
    border-radius: 7px;
    margin-top: 10px;
    color: #f7f7f7;
    font-weight: 500;
    transition: .3s ease;
    display: inline-block;
  }
  .clinic a {
    color: #fff;
    background: #ac8a17;
  }

  
</style>

