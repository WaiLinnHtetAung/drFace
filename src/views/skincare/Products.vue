<template>
    <div style="background:#fff;">
        <div class="top-img">
            <img src="@/assets/images/products-img.jpg" alt="">
            <div class="text">
                <h3>Dr.Face Treatments and skin care products</h3>
                <p>This collection of medical-grade products helps banish blemishes and promote clearer skin.</p>
            </div>
        </div>
        <div class="title">All Products</div>
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
                {
                    id: 6,
                    img: require('@/assets/Products/05.glow-body-serum/img.png'),
                    ingredients: ['Glutathtione', 'Naicinamide', 'Hyaluronic acid', 'Shea butter'],
                    name: "Dr.face Glow Booster Body Serum ",
                    price: "1000 Ks",
                    bg: "background-image: -webkit-linear-gradient(65deg, #e4e4e4 50%, #efefef 40%)"
                },
                {
                    id: 7,
                    img: require('@/assets/Products/06.aha-serum/img.png'),
                    ingredients: ['AHA', 'Shea Butter', 'Hyaluronic acid'],
                    name: "Dr.face AHA Repair & Revive Body Serum ",
                    price: "1000 Ks",
                    bg: "background-image: -webkit-linear-gradient(65deg, #e9c16c 50%, #f9e5bc 40%)"
                },
                {
                    id: 8,
                    img: require('@/assets/Products/07.lip-balm/img.png'),
                    ingredients: [],
                    name: "Dr.face Lip Balm ",
                    price: "1000 Ks",
                    bg: "background-image: -webkit-linear-gradient(65deg, #b4ca5a 50%, #ccde80 40%)"
                },
                {
                    id: 9,
                    img: require('@/assets/Products/08.sun-essence/img.png'),
                    ingredients: [],
                    name: "Dr.face Sun Essence SPF 50PA++++",
                    price: "1000 Ks",
                    bg: "background-image: -webkit-linear-gradient(65deg, #d1bd56 50%, #e0d282 40%)"
                },
                {
                    id: 10,
                    img: require('@/assets/Products/09.pore-toner/img.png'),
                    ingredients: [],
                    name: "Dr.face Pore Minimizer Clarifying  Toner ",
                    price: "1000 Ks",
                    bg: "background-image: -webkit-linear-gradient(65deg, #cb6914 50%, #ea8833 40%)"
                },
                {
                    id: 11,
                    img: require('@/assets/Products/10.vitamin-C/img.png'),
                    ingredients: [],
                    name: "Dr.face Vitamin C serum ",
                    price: "1000 Ks",
                    bg: "background-image: -webkit-linear-gradient(65deg, #d9d9d9 50%, #f0ecec 40%)"
                },
                {
                    id: 12,
                    img: require('@/assets/Products/11.aloe-gel/img.png'),
                    ingredients: [],
                    name: "Dr.face Aloe Vera With Tea Tree Oil",
                    price: "1000 Ks",
                    bg: "background-image: -webkit-linear-gradient(65deg, #82b88a 50%, #a9e9b3 40%)"
                },
                {
                    id: 13,
                    img: require('@/assets/Products/12.pink-egg/img.png'),
                    ingredients: [],
                    name: "Dr.face Pink Egg",
                    price: "1000 Ks",
                    bg: "background-image: -webkit-linear-gradient(65deg, #d6aab6 50%, #e4c4cd 40%)"
                },
                {
                    id: 14,
                    img: require('@/assets/Products/13.eye-serum/img.png'),
                    ingredients: ['Adenosine', 'Astaxanthin', 'Glutathtione', 'Niacinamide', 'Panthenol'],
                    name: "Dr.face Advanced Repair Eye Serum",
                    price: "1000 Ks",
                    bg: 'background-image: -webkit-linear-gradient(65deg, #e5bb71 50%, #efcb8b 40%)',
                },
                {
                    id: 15,
                    img: require('@/assets/Products/14.anti-aging/img.png'),
                    ingredients: ['Hyaluronic acid'],
                    name: "Dr.face Anti-Aging Serum",
                    price: "1000 Ks",
                    bg: "background-image: -webkit-linear-gradient(65deg, #f0b5c9 50%, #fdc7d9 40%)"
                },
                {
                    id: 16,
                    img: require('@/assets/Products/15.powder/img.png'),
                    ingredients: ['oil'],
                    name: "Dr.face Powder Foundation",
                    price: "1000 Ks",
                    bg: "background-image: -webkit-linear-gradient(65deg, #d1d1d3 50%, #eaeaec 40%)"
                },
                {
                    id: 17,
                    img: require('@/assets/Products/16.water-gel/img.png'),
                    ingredients: [],
                    name: "Dr.face Skin Moisturizer Water Gel",
                    price: "1000 Ks",
                    bg: "background-image: -webkit-linear-gradient(65deg, #56c0e2 50%, #6ecded 40%)"
                },
                {
                    id: 18,
                    img: require('@/assets/Products/17.treatment-toner/img.png'),
                    ingredients: [],
                    name: "Dr.face Treatment Toning Lotion ",
                    price: "1000 Ks",
                    bg: "background-image: -webkit-linear-gradient(65deg, #c9c8c8 50%, #ecedef 40%)"
                },
                {
                    id: 19,
                    img: require('@/assets/Products/18.remover/img.png'),
                    ingredients: [],
                    name: "Dr.face Tea Tree Make Up Remover Cleansing Wipes ",
                    price: "1000 Ks",
                    bg: "background-image: -webkit-linear-gradient(65deg, #c79d14 50%, #d7bb5e 40%)"
                },
                {
                    id: 20,
                    img: require('@/assets/Products/19.t-zone/img.png'),
                    ingredients: [],
                    name: "Dr.face Tzone pack ",
                    price: "1000 Ks",
                    bg: "background-image: -webkit-linear-gradient(65deg, #d29da2 50%, #fbdcde 40%)"
                },
                {
                    id: 21,
                    img: require('@/assets/Products/20.v-mask/img.png'),
                    ingredients: ['PPC', 'Collagen', 'Caffeine', 'Vitamin-C', 'Gingko biloba leaf extract', 'Pumpkin fruit extract'],
                    name: "Dr.face V Shape Mask",
                    price: "1000 Ks",
                    bg: "background-image: -webkit-linear-gradient(65deg, #b8447a 50%, #d997b6 40%)"
                },
                {
                    id: 22,
                    img: require('@/assets/Products/21.skin-care-mask/img.png'),
                    ingredients: ['CICA Tea Tree Leaf extract', 'Panthenol', 'allantoin', 'Hyaluronic Acid'],
                    name: "Dr.face all in one skin care mask ",
                    price: "1000 Ks",
                    bg: "background-image: -webkit-linear-gradient(65deg, #6f8750 50%, #a5c876 40%)"
                },
                {
                    id: 23,
                    img: require('@/assets/Products/22.spot-gel/img.png'),
                    ingredients: ['Salicylic Acid', 'Moisturizer', 'Centella extract', 'Niacinamide'],
                    name: "Dr.face spot clear gel",
                    price: "1000 Ks",
                    bg: "background-image: -webkit-linear-gradient(65deg, #196892 50%, #7dbee2 40%)"
                },
            ];

            onMounted(() => {
                // window.scrollTo(0,0)
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
        left: 150px;
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

    .title {
        width: 86%;
        padding: 10px 20px;
        border: none;
        margin: 0 auto 15px;
        background: #e3e0e0;
        border-radius: 7px;
        font-size: 18px;
    }

    .products {
        padding: 20px 7%;
    }

    .product-img {
        width: 100%;
        height: 140px;
        text-align: center;
        padding: 0;
        margin: 0;
        background-image: -webkit-linear-gradient(65deg, #196892 50%, #7dbee2 40%)
    }

    .products img {
        width: 60%;
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
