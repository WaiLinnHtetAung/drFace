<template>
    <div class="best-seller">
        <div class="section-header">
            <h2>OUR BEST SELLER</h2>
            <div class="line"></div>
        </div>

        <div class="row mt-5">
            <div class="col-lg-3 col-md-6 ">
                <div class="photo-card" style="background-image: -webkit-linear-gradient(65deg, #d5a5ad 50%, #e1bbc2 40%)">
                    <img src="@/assets/Products/01.all-in-one/img1.png" alt="">
                    <span>Dr.Face</span>
                </div>
                <div class="card-content text-center">
                    <h4>All in One</h4>
                    <i class="fa-solid fa-star me-2"></i><i class="fa-solid fa-star me-2"></i><i class="fa-solid fa-star me-2"></i><i class="fa-solid fa-star me-2"></i><i class="fa-solid fa-star me-2"></i>
                    <p><i class="fa-solid fa-money-bill-1-wave text-black me-2"></i>1000 Ks</p>
                    <router-link to="#" class="detail-btn">See Detail</router-link>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 ">
                <div class="photo-card " style="background-image: -webkit-linear-gradient(65deg, #8acc8f 50%, #b2dbb4 40%)">
                    <img src="@/assets/Products/04.acne-back-spray/img.png" alt="">
                    <span>Dr.Face</span>
                </div>
                <div class="card-content text-center">
                    <h4>Dr.Face Body Acne Spray</h4>
                    <i class="fa-solid fa-star me-2"></i><i class="fa-solid fa-star me-2"></i><i class="fa-solid fa-star me-2"></i><i class="fa-solid fa-star me-2"></i><i class="fa-solid fa-star me-2"></i>
                    <p><i class="fa-solid fa-money-bill-1-wave text-black me-2"></i>1000 Ks</p>
                    <router-link to="#" class="detail-btn">See Detail</router-link>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 ">
                <div class="photo-card" style="background-image: -webkit-linear-gradient(65deg, #fcb476 50%, #ffc18a 40%);">
                    <img src="@/assets/Products/09.pore-toner/img.png" alt="">
                    <span>Dr.Face</span>
                </div>
                <div class="card-content text-center">
                    <h4>Dr.face Pore Minimizer Clarifying  Toner </h4>
                    <i class="fa-solid fa-star me-2"></i><i class="fa-solid fa-star me-2"></i><i class="fa-solid fa-star me-2"></i><i class="fa-solid fa-star me-2"></i><i class="fa-solid fa-star me-2"></i>
                    <p><i class="fa-solid fa-money-bill-1-wave text-black me-2"></i>1000 Ks</p>
                    <router-link to="#" class="detail-btn">See Detail</router-link>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 ">
                <div class="photo-card" style="background-image: -webkit-linear-gradient(65deg, #f184ac 50%, #f59abb 50%);  ">
                    <img src="@/assets/Products/14.anti-aging/img.png" alt="">
                    <span>Dr.Face</span>
                </div>
                <div class="card-content text-center">
                    <h4>Dr.face Anti-Aging Serum  </h4>
                    <i class="fa-solid fa-star me-2"></i><i class="fa-solid fa-star me-2"></i><i class="fa-solid fa-star me-2"></i><i class="fa-solid fa-star me-2"></i><i class="fa-solid fa-star me-2"></i>
                    <p><i class="fa-solid fa-money-bill-1-wave text-black me-2"></i>1000 Ks</p>
                    <router-link to="#" class="detail-btn">See Detail</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .best-seller {
        margin: 90px 0 20px;
        padding: 0 9%;
    }

    .best-seller img {
        width: 60%;
    }

    .photo-card {
        text-align: center;
        position: relative;
        
    }

    .photo-card span{
        background-color: rgb(200,163,56, .7);
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
    }

    .card-content h4 {
        font-size: 18px;
        font-weight: 500;
        font-style: italic;
    }

    .card-content p {
        font-size: 13px;
        font-weight: bold;
        margin: 8px 0 20px;
        position: absolute;
        bottom: 28px;
        left: 35%;
    }

    .detail-btn {
        position: absolute;
        bottom: 0;
        right: 80px;
    }
</style>
