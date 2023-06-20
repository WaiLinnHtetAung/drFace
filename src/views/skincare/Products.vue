<template>
    <div style="background:#fff;">
        <div class="top-img">
            <img src="@/assets/images/products-img.jpg" alt="">
            <div class="text">
                <h3>Dr.Face Treatments and skin care products</h3>
                <p>This collection of medical-grade products helps banish blemishes and promote clearer skin.</p>
            </div>
        </div>
        <div class="row products">
            <div class="col-lg-3 col-md-6 product-card">
                <div class="product-img">
                    <img src="../../assets/Products/01.all-in-one/img1.png" alt="">
                </div>
                <div class="ingredients">
                    <span>Lauric Acid</span>
                    <span>Vitamin A & E</span>
                    <span>Antioxidants</span>
                </div>
                <h2>Dr.face all in one facial cleanser</h2>
                <div class="rating">
                    <i class="fa-solid fa-star me-2"></i><i class="fa-solid fa-star me-2"></i><i class="fa-solid fa-star me-2"></i><i class="fa-solid fa-star me-2"></i><i class="fa-solid fa-star me-2"></i>
                </div>
                <p><i class="fa-solid fa-money-bill-1-wave text-black me-2"></i>1000 Ks</p>
                <router-link to="#">See Detail</router-link>
            </div>
            <div class="col-lg-3 col-md-6">

            </div>
            <div class="col-lg-3 col-md-6">

            </div>
            <div class="col-lg-3 col-md-6">

            </div>
            <div class="col-lg-3 col-md-6">
                
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .top-img {
        position: relative;
        margin-bottom: 50px;
    }
    .top-img img{
        width: 100%;
        height: 400px;
        object-fit: cover;
        object-position: center;
        filter: brightness(.9);
    }
    .top-img .text {
        position: absolute;
        bottom: 30%;
        left: 80px;
        width: 500px;
    }

    .text h3 {
        font-size: 33px;
        font-weight: bold;
        font-family: fantasy;
    }
    .text p {
        font-size: 14px;
        margin-top: 20px;
    }

    .products {
        padding: 20px 5%;
    }

    .product-img {
        width: 100%;
        height: 200px;
        text-align: center;
        background: rgb(223, 222, 222);
        padding: 0;
        margin: 0;
    }

    .products img {
        width: 70%;
        object-fit: cover;
        height: 100%;
    }

    .ingredients {
        display: flex;
        flex-wrap: wrap;
        gap: 4px;
        justify-content: center;
        margin: 20px auto 10px;
    }
    .ingredients span {
        border: 1px solid rgb(73, 63, 63);
        padding: 1px 10px 1px;
        font-size: 11px;
        border-radius: 10px;
    }
</style>
