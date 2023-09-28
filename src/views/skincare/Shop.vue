<template>
    <div class="shops">
        <div class="banner">
            <div class="img">
                <img src="@/assets/images/shop.png" alt="">
            </div>
            <div class="text">
                <img src="@/assets/images/shopnow.png" alt="">
                <h2>Available Shops</h2>
                <p class="text-muted">Dr.Face Skin Care products are available all around the places.</p>
                <p class="text-muted">You can find nearest shops from below address</p>
            </div>
        </div>
        <div class="address-container">
            <div class="address">
                <h3>Dr.Face Skin Care တွေကို နေရာအနှံ့ ဝယ်ယူအားပေးလို့ရပါပြီ ....</h3>
                <h5>ရန်ကုန် နဲ့ မန္တလေး ပြီးရင် အခြားမြို့တွေကို အက္ခရာအစဥ်အလိုက်စီထားတာဖြစ်လို့ အလွယ်တကူရှာလို့ရပါတယ်။</h5>
                <div class="tabs">
                    <button @click="current = 'address'" :class="{active: current == 'address'}">Address</button>
                    <button @click="current = 'online'" :class="{active: current == 'online'}">Online Sites</button>
                </div>
                <v-expansion-panels variant="inset" class="my-4" v-if="current == 'address'">
                    <v-expansion-panel
                      v-for="(add, i) in address"
                      :key="i"
                      color="#e2e2e2"
                    >
                        <v-expansion-panel-title class="title">{{ add.city }}</v-expansion-panel-title>
                        <div class="" style="max-height: 500px; overflow-y:scroll;">
                            <v-expansion-panel-text v-for="(location, i) in add.location" :key="i">
                                <i class="fa-solid fa-location-dot me-2"></i>{{ location }}
                            </v-expansion-panel-text>
                        </div>
                    </v-expansion-panel>
                </v-expansion-panels>

                <div class="online-site" v-else>
                    <div class="card">
                        <div class="card-body">
                            <div>
                                <i class="fa-solid fa-globe me-4"></i>
                                <a href="https://www.facebook.com/flx/warn/?u=https%3A%2F%2Fwww.shop.com.mm%2Fshop%2Fdrface%2F%3Ffbclid%3DIwAR3V6WQR2NgApoZRItNr3KXWmLwQoW8fyjy14RQhWgj8TIDteJe9f9e_DEc&h=AT2xdD8sI3q3EIWsAUV9q-uS2E1qTQNv-hPkAmt-XAV9tVN5PUY11zYzQ4P2cdCwyvJlTiPdtv8AAms8__D7VsKg5x-gj-aoT9JabB8ETO_ArQnOz2v_WPkRFxRsuJv7n6SazWVG3XXphdDm2Y2kihqvrbMVF-zn72Vjgig4kTH2xLrOwX-Q4d6356X9rikVHbk-QT0DAM9ReQcz6RE1xyHfCC0wnYYz-NuNpGD6XH0QaWpPqFV2OkOvo4QKUrbpBII" target="_blank">Shop.com.mm</a>
                            </div>
                            <div>
                                <i class="fa-solid fa-globe me-4"></i>
                                <a href="#">Food Panda</a>
                            </div>
                            <div>
                                <i class="fa-solid fa-globe me-4"></i>
                                <a href="#">Grab</a>
                            </div>
                            <div>
                                <i class="fa-solid fa-globe me-4"></i>
                                <a href="#">GoFresh Myanmar </a>
                            </div>
                            <div>
                                <i class="fa-solid fa-globe me-4"></i>
                                <a href="https://www.zegobird.com" target="_blink">Zegobird </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { computed, onMounted, ref } from 'vue'
import { useStore } from 'vuex'
    export default {
        setup() {
            let store = useStore();
            let address = computed(() => store.getters['getAddress']);
            let current = ref('address');

            onMounted(() => {
                window.scrollTo(0,0)
            })

            return {address, current}
        }
    }
</script>

<style scoped>
    .shops .banner {
        background: linear-gradient(to left, rgba(233, 180, 35, 0.5), rgba(199, 15, 45, 0.5));
        padding: 30px 13%;
        display: flex;
        align-items: center;
        gap: 80px;
    }

    .shops .banner .img {
        width: 50%;
    }

    .shops .banner .img img {
        width: 100%;
    }

    .shops .banner .text {
        align-self: flex-start;
    }

    .shops .banner .text img {
        width: 60%;
    }

    .shops .banner .text h2 {
        font-weight: bold;
        font-size: 42px;
        margin-bottom: 20px;
        color: #fff;
    }

    .shops .banner .text p {
        margin-bottom: 0px;
        font-size: 16px;
        font-weight: bold;
    }

    .shops .address-container {
        padding: 30px 15%;
    }

    .shops .address-container h3 {
        color: rgb(167, 29, 172);
        font-weight: bold;
        margin: 20px 0px;
    }

    .shops .address-container h5 {
        margin-bottom: 20px;
    }

    .shops .address-container .tabs {
        background: #fff;
        padding: 10px 15px;
        margin: 30px 0px 20px;
        border-radius: 25px;
        display: inline-flex;
        gap: 10px;
    }

    .shops .address-container .tabs button {
        padding: 7px 15px;
        border-radius: 20px;
        transition: .3s ease-out;
    }

    .shops .address-container .tabs button.active {
        background: rgb(199, 174, 30, .8);
        color: #fff;
    }

    .v-expansion-panels {
        padding: 0px 30px;
    }

    .v-expansion-panel-title {
        color: #fff !important;
        font-weight: bold;
    }

    .v-expansion-panel .title {
        color: #333 !important;
        background: #f2f2f2;
    }

    .shops .online-site {
        padding: 0px 90px 0px 30px;
    }

    .shops .card-body {
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 30px;
    }

    .shops .card-body i {
        color: goldenrod;
    }

    .shops .card-body a {
        text-decoration: none;
    }

    @media (max-width: 1600px) {
        .shops .banner {
            padding: 30px 10%;
        }

        .shops .address-container {
            padding: 30px 12%;
        }

        .shops .banner .text h2 {
            font-size: 38px;
        }
    }

    @media (max-width: 1200px) {
        .shops .banner {
            padding: 30px 5%;
        }

        .shops .address-container {
            padding: 30px 7%;
        }
        .shops .banner .img img {
            width: 90%;
        }
    
        .shops .banner .text img {
            width: 40%;
        }
        .shops .banner .text h2 {
            font-size: 33px;
        }

        .shops .banner .text p {
            font-size: 14px;
        }

        .shops .address-container h3 {
            font-size: 24px;
        }

        .shops .address-container h5 {
            font-size: 18px;
        }

        .shops .address-container .tabs {
            padding: 7px 10px;
            margin: 30px 0px 20px;
            gap: 3px;
        }
    
        .shops .address-container .tabs button {
            padding: 5px 10px;
            font-size: 14px;
        }
    }

    @media (max-width: 1080px) {
        .shops .banner .text img {
            width: 30%;
        }
    }

    @media (max-width: 990px) {
        .shops .banner {
            gap: 30px;
        }
        .shops .banner .img img {
            width: 100%;
        }
        .shops .address-container {
            padding: 30px 3%;
        }
        .v-expansion-panels {
            padding: 0px 10px;
        }

        .shops .banner .text img {
            width: 30%;
        }
        .shops .banner .text h2 {
            font-size: 28px;
        }

        .shops .banner .text p {
            font-size: 12px;
        }
    }

    @media (max-width: 768px) {
        .shops .banner .img img {
            width: 250px;
        }

        .shops .banner .text {
            align-self: center;
        }
        .shops .banner .text img {
            width: 25%;
        }
        .shops .banner .text h2 {
            font-size: 22px;
        }

        .shops .banner .text p {
            font-size: 11px;
        }

        .shops .address-container h3 {
            font-size: 20px;
        }

        .shops .address-container h5 {
            font-size: 16px;
        }
    }

    @media (max-width: 490px) {
        .shops .banner {
            flex-direction: column;
            gap: 10px;
        }

        .shops .banner .img {
            display: flex;
            justify-content: center;
        }
        .shops .banner .text {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .v-expansion-panels {
            padding: 0px 3px;
        }

        .shops .v-expansion-panel-text {
            font-size: 14px;
        }

        .shops .online-site {
            padding: 30px 20px;
        }
      
    }

</style>
