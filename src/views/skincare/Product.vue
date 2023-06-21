<template>
    <div class="product">
        <div class="bar">
            <router-link to="/products">All Products</router-link> &nbsp;/&nbsp;
            <span>{{product.name}}</span>
        </div>
        <div class="row">
            <div class="col-lg-5">
                <div class="product-img" >
                    <img :src="product.img" alt="">
                </div>
            </div>
            <div class="col-lg-7">
                <div class="product-info">
                    <h2>{{product.name}}</h2>
                    <div class="rating">
                        <i class="fa-solid fa-star me-2"></i><i class="fa-solid fa-star me-2"></i><i class="fa-solid fa-star me-2"></i><i class="fa-solid fa-star me-2"></i><i class="fa-solid fa-star me-2"></i>
                    </div>
                    <div class="ingredients" >
                        <span v-for="(item, index) in product.ingredients" :key="index">{{ item }}</span>
                    </div>
                    <div v-html="product.info"></div>
                    <div class="price">
                        Price - {{ product.price }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { computed } from 'vue';
    import { useStore } from 'vuex';
    export default {
        props: ['id'],
        setup(props) {
            let store = useStore();
            store.dispatch('getProduct', props.id);
            let product = computed(() => store.getters['getProduct'])

            return {product}
        }
    }
</script>

<style scoped>
    .product {
        padding: 30px 9%;
        background: #fff;
    }

    .bar {
        background: #f9f9f9;
        padding: 10px 30px;
        border-radius: 7px;
    }
    .bar a, .bar span{
        color: #3e3d3d;
        font-size: 14px;
    }

    .product-img {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .product-img img {
        width: 100%;
        object-fit: cover;
    }
    .row {
        margin: 40px 0;
    }

    .product-info {
        padding-top: 20px;
        margin-top: 20px;
    }
    .product-info h2 {
        font-weight: bold;
        font-style: italic;
        font-size: 20px;
    }
    .product-info .rating {
        margin: 50px 0 10px 15px;
    }

    .product-info .rating i {
        color: #e8ba1f;
    }

    .product-info .price {
        margin: 30px 0 10px 15px;
        font-weight: bold;
    }

    .ingredients {
        display: flex;
        flex-wrap: wrap;
        gap: 4px;
        justify-content: start;
        margin: 0px 0 20px 10px;
        padding: 0 5px;
    }
    .ingredients span {
        border: 1px solid rgb(73, 63, 63);
        padding: 0px 10px;
        font-size: 10px;
        border-radius: 10px;
    }

</style>
