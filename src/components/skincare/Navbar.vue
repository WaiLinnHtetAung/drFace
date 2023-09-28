<template>
    <div class="top-header">
        <div class=" d-flex justify-content-between align-items-center">
            <div class="date">
                <i class="fa-solid fa-clock me-2"></i>
                <span>Monday - Saturday, 8AM to 9PM</span>
            </div>
            <div class="contact">
                <i class="fa-solid fa-phone me-2"></i>
                <span>+959 - 976326753</span>
            </div>
        </div>
    </div>
    <div>
        <nav class="navbar navbar-expand-lg ">
            <a class="navbar-brand" href="/drface">
                <img src="@/assets/images/logo.png " width="110" alt="">
            </a>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link to="/drface" class="nav-link">Home</router-link>
                    </li>
                    <li class="nav-item dropdown">
                        <router-link to="/products" class="nav-link " >
                            Products 
                        </router-link>
                        <!-- <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            
                        </ul> -->
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/set-cateogry" :class="{active: currentRoute.slice(0,4) == '/set'}">Skincare Set</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/available-shop">Available Shops</router-link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/comming">Vlog</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
import { ref } from 'vue';
    import { useRouter } from 'vue-router';
    export default {
        setup() {
            let router = useRouter();
            let currentRoute = ref('');

            router.afterEach(to => {
                currentRoute.value = to.path;
            });

            return {currentRoute}
        }
    }
</script>

<style>
    .top-header {
        background-image: linear-gradient(to right,rgba(194, 153, 34,.9), rgba(194, 153, 34,.9));
        height: 35px;
        line-height: 35px;
        padding: 0 15%;
    }

    .date span, .contact span {
        font-size: 16px;
        font-weight: bold;
    }

    .contact i {
        font-size: 16px;
    }

    .navbar {
        background-color: #fff;
        box-shadow: 5px 3px 3px rgb(194, 190, 190);
        padding: 0 15%;
    }

    .navbar-brand {
        width: 150px;
    }

    .navbar-brand img {
        width: 100%;
        object-fit: contain;
        margin: 10px 0;
    }

    .navbar .nav-item a {
        font-size: 16px;
        font-weight: 700;
        margin-left: 10px;
        padding: 3px 20px;
    }
    

    .navbar .nav-item a:hover {
        color: #c1930a;
    }

    .navbar .nav-item a.router-link-active {
        background: #c1930a;
        color: #fff;
        border-radius: 15px;
    }

    .navbar .nav-item a.active {
        background: #c1930a;
        color: #fff;
        border-radius: 15px;
    }

    @media (max-width: 1600px) {
        .top-header, .navbar {
            padding: 0 9%;
        }
    }

    @media (max-width: 1200px) {
        .top-header, .navbar {
            padding: 0 3%;
        }
    }

    @media (max-width: 450px) {
        .top-header {
            display: none;
        }
    }
</style>
