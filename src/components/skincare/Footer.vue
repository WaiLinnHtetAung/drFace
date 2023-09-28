<template>
    <footer :class="{blur: isChoose}">
        <div class="row py-5">
            <div class="col-lg-3 col-md-6">
                <div class="logo">
                    <img src="../../assets/images/favicon.png" alt="">
                    <div>Dr.Face</div>
                </div>
                <div class="social">
                    <div><i class="fa-brands fa-facebook-f" style="color:#144fce;"></i></div>
                    <div><i class="fa-brands fa-instagram" style="color: #ee1c54;"></i></div>
                    <div><i class="fa-brands fa-youtube" style="color: #FF0000;"></i></div>
                    <div><i class="fa-brands fa-viber" style="color: #4f0d7b;"></i></div>
                </div>

                <br>
                <br>
                <div class="address">
                    <i class="fa-solid fa-envelope"></i>
                    <div>office@drface.com.mm</div>
                </div>
                <div class="address">
                    <i class="fa-solid fa-globe"></i>
                    <div>drface.com.mm</div>
                </div>
            </div>
            <div class="col-lg-2 col-md-6">
                <h3>About Us</h3>
                <div class="links">
                    <router-link to="#">Home</router-link>
                    <router-link to="#">Products</router-link>
                    <router-link to="#">Skin Care Set</router-link>
                    <router-link to="#">Available Shops</router-link>
                    <router-link to="#">Videos</router-link>
                </div>
                
            </div>
            <div class="col-lg-5 col-md-6">
                <h3>Address</h3>
                <h3>Office</h3>
                <div class="address">
                    <i class="fa-solid fa-location-dot"></i>
                    <div>No 18 , Pinlon Yeik Mon housing, Thingangyun Township, Yangon , Myanmar</div>
                </div>
                <div class="address">
                    <i class="fa-solid fa-phone"></i>
                    <div>+959 976326753</div>
                </div>

                <h3>Clinic 1</h3>
                <div class="address">
                    <i class="fa-solid fa-location-dot"></i>
                    <div>No .1 A 38, Mya Thida Housing , Thingangyun Township, Yangon , Myanmar</div>
                </div>
                <div class="address">
                    <i class="fa-solid fa-phone"></i>
                    <div>+959 423588673 , +959 421079909</div>
                </div>

                <h3>Clinic 2</h3>
                <div class="address">
                    <i class="fa-solid fa-location-dot"></i>
                    <div>No 43, Bo Sein Man Road , Bahan Township, Yangon, Myanmar</div>
                </div>
                <div class="address">
                    <i class="fa-solid fa-phone"></i>
                    <div>+959 940408877</div>
                </div>
            </div>
            <div class="col-lg-2 col-md-6">
                <div class="photos">
                    <img src="../../assets/Products/01.all-in-one/img1df.jpg" alt="">
                    <img src="../../assets/Products/07.lip-balm/viber_image_2023-06-12_10-52-13-247.jpg" alt="">
                    <img src="../../assets/Products/10.vitamin-C/viber_image_2023-06-12_10-53-34-483.jpg" alt="">
                    <img src="../../assets/Products/05.glow-body-serum/viber_image_2023-06-12_10-51-48-127.jpg" alt="">
                    <img src="../../assets/Products/18.remover/viber_image_2023-06-12_11-00-03-196.jpg" alt="">
                    <img src="../../assets/Products/21.skin-care-mask/viber_image_2023-06-12_11-00-44-868.jpg" alt="">
                </div>
            </div>
        </div>
        <hr>
        <p>&copy;&nbsp;Copy Right Served.</p>
    </footer>
</template>

<script>
import { ref } from 'vue';
    import { useRouter } from 'vue-router';
    export default {
        setup() {
            const router = useRouter();
            let isChoose = ref();

            router.afterEach((to) => {
                if(to.path == '/') {
                    isChoose.value = true;
                } else {
                    isChoose.value = false;
                }
            })

            return {isChoose}
        }
    }
</script>

<style scoped>
    footer {
        padding: 30px 9% 10px;
        background-color: #242424;
        color: #fff;
        width: 100%;
        bottom: 0;
    }
    .blur {
        display: none;
    }

    .logo {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .logo img {
        width: 50px;
    }

    .logo div {
        color: #fff;
        font-size: 30px;
        font-weight: bold;
        padding-top: 10px;
    }

    .social {
        display: flex;
        justify-content: start;
        gap: 15px;
        margin-top: 25px;
    }

    .social div {
        width: 30px;
        height: 30px;
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px;
        background-color: #fff;
        transition: .5s ease;
    }

    .social i {
        font-size: 18px;
        transition: .5s ease;
    }

    .social div:hover {
        transform: scale(1.1);
        cursor: pointer;
        box-shadow: 0 0 1rem rgb(240, 235, 235);
    }

    footer h3 {
        margin: 25px 0 20px;
        font-size: 18px;
        font-weight: bold;
        text-align: start;
    }

    footer .links {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;
        gap: 5px;
    }
    footer .links a {
        color: #fff;
        font-size: 13px;
    }

    .address {
        display: flex;
        justify-content: start;
        gap: 10px;
        margin-bottom: 13px;
    }
    .address i {
        padding-top: 3px;
        color: #b58e18;
    }

    .address div {
        font-size: 14px;
    }

    .photos {
        display: flex;
        flex-wrap: wrap;
        margin: 25px 0 0 15px;
    }

    .photos img {
        width: 30%;
        padding: 2px;
    }

    footer p {
        text-align: center;
        font-size: 12px;
    }

    @media (max-width:1500px) {
        .address {
            display: flex;
            justify-content: start;
            gap: 5px;
            margin-bottom: 13px;
        }
        .address i {
            padding-top: 3px;
            color: #b58e18;
        }
    
        .address div {
            font-size: 12px;
        }
    }
</style>
