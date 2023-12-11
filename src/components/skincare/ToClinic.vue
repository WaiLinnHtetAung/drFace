<template>
  <div class="outer-card">
    <div class="content">
      <h4>Dr.face skin care product</h4>
      <p>
        Dr.face skin care product in Myanmar Since 2011 <br />
        More than 10 Years experiences
      </p>
      <router-link to="/products" class="dr-btn"
        >Visit Dr.face Skin Care Products</router-link
      >
    </div>
    <div class="photo">
      <img src="@/assets/images/founder.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.outer-card {
  background: rgb(22, 184, 187, 0.8);
  width: 50%;
  height: 300px;
  margin: 60px auto 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 55px;
  border-radius: 7px;
}

.content {
  width: 450px;
  height: 230px;
  background-color: rgb(60, 168, 170);
  padding: 35px 20px 10px;
}

.content h4 {
  font-weight: bold;
  color: #fff;
}

.content p {
  color: #ffffff;
  margin: 10px auto 25px;
}

.outer-card .photo {
  width: 31%;
}

.outer-card .photo img {
  width: 100%;
}

@media (max-width: 1600px) {
  .outer-card {
    width: 60%;
    height: 300px;
    margin: 60px auto 0px;
  }
  .outer-card .photo {
    width: 250px;
  }
}

@media (max-width: 1200px) {
  .outer-card {
    width: 70%;
    height: 300px;
    margin: 60px auto 0px;
  }
  .outer-card .photo {
    width: 250px;
  }
}

@media (max-width: 1080px) {
  .outer-card {
    width: 75%;
    padding: 15px 30px;
  }
}

@media (max-width: 900px) {
  .outer-card {
    width: 90%;
  }
}

@media (max-width: 768px) {
  .outer-card {
    flex-direction: column-reverse;
    gap: 15px;
    height: auto;
  }

  .outer-card .photo {
    width: 300px;
  }

  .content {
    width: 100%;
    height: 230px;
    padding: 35px 20px 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}

@media (max-width: 600px) {
  .content {
    height: 250px;
  }

  .content p {
    text-align: center;
  }
}
</style>
