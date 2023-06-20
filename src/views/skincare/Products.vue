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
            <div class="col-lg-3 col-md-6 product-card mb-5" v-for="(product, index) in products" :key="index">
                <div class="product-img" :style="product.bg">
                    <img :src="product.img" alt="">
                </div>
                <div class="ingredients" >
                    <span v-for="(item, index) in product.ingredients" :key="index">{{ item }}</span>
                </div>
                <h2>{{product.name}}</h2>
                <div class="rating">
                    <i class="fa-solid fa-star me-2"></i><i class="fa-solid fa-star me-2"></i><i class="fa-solid fa-star me-2"></i><i class="fa-solid fa-star me-2"></i><i class="fa-solid fa-star me-2"></i>
                    <p><i class="fa-solid fa-money-bill-1-wave me-2"></i>{{product.price}}</p>
                </div>
                <div class="detail"><router-link to="#">See Detail</router-link></div>
            </div>
            
        </div>
    </div>
</template>

<script>
import { onMounted, onUpdated } from 'vue';
    export default {
        setup() {
            let products = [
                {
                    id: 1,
                    img: require('@/assets/Products/01.all-in-one/img1.png'),
                    ingredients: ['Lauric Acid', 'Vitamin A & E', 'Antioxidants'],
                    name: "Dr.face all in one facial cleanser ",
                    price: "1000 Ks",
                    bg: "background-image: -webkit-linear-gradient(65deg, #d5a5ad 50%, #e1bbc2 40%);"
                },
                {
                    id: 2,
                    img: require('@/assets/Products/01.all-in-one/img2.png'),
                    ingredients: ['Lauric Acid', 'Vitamin A & E', 'Antioxidants'],
                    name: "Dr.face all in one facial cleanser ",
                    price: "1000 Ks",
                    bg: "background-image: -webkit-linear-gradient(65deg, #4987e6 50%, #85b1f3 40%)"
                },
                {
                    id: 3,
                    img: require('@/assets/Products/02.gluta/img.png'),
                    ingredients: ['Glutathione', 'Vitamin – C', 'Collagen Peptide', 'CoQ10'],
                    name: "The Beauty Doctor (Gluta Glow Dietary Supplement)",
                    price: "1000 Ks",
                    bg: "background-image: -webkit-linear-gradient(65deg, #f2b1b7 50%, #f2bdb9 40%)"
                },
                {
                    id: 4,
                    img: require('@/assets/Products/03.byebye/img.png'),
                    ingredients: ['Salicylic acid', 'Calamine', 'Sulfur'],
                    name: "Dr.face Bye Bye Blemishes Solution Drying Lotion",
                    price: "1000 Ks",
                    bg: "background-image: -webkit-linear-gradient(65deg, #ed677f 50%, #e78a9b 40%)"
                },
                {
                    id: 5,
                    img: require('@/assets/Products/04.acne-back-spray/img.png'),
                    ingredients: ['Salicylic acid', 'Zinc', 'Vitamin E', 'Chamomile extract'],
                    name: "Dr.Face Body Acne Spray ",
                    price: "1000 Ks",
                    bg: "background-image: -webkit-linear-gradient(65deg, #93b9a2 50%, #d5e5d8 40%)"
                },
            ];

            onMounted(() => {
                window.scrollTo(0,0)
            })

            return {products}
        }
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
        font-style: italic;
    }
    .text p {
        font-size: 14px;
        margin-top: 20px;
    }

    .product-card {
        position: relative;
        height: 370px;

    }

    .products {
        padding: 20px 5%;
    }

    .product-img {
        width: 100%;
        height: 130px;
        text-align: center;
        padding: 0;
        margin: 0;
        background-image: -webkit-linear-gradient(65deg, #93b9a2 50%, #d5e5d8 40%)
    }

    .products img {
        width: 50%;
        object-fit: cover;
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
        color: #e2c164 ;
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
</style>
