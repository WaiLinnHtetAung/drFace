<template>
    <div class="top-header">
        <div class="container d-flex justify-content-between align-items-center">
            <div class="date">
                <i class="fa-solid fa-clock me-2"></i>
                <span>Monday - Saturday, 8AM to 9PM</span>
            </div>
            <div class="contact">
                <i class="fa-solid fa-phone me-2"></i>
                <span>+959 - 43234834343</span>
            </div>
        </div>
    </div>
    <div>
        <nav class="navbar navbar-expand-lg ">
            <div class="container">
                <a class="navbar-brand" href="#">
                    <img src="@/assets/images/logo.png" width="110" alt="">
                </a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item dropdown">
                            <router-link to="/products" class="nav-link active " role="button" >
                                Products
                            </router-link>
                            <!-- <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                
                            </ul> -->
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="#">Skin Care Set</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="#">Available Shops</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="#">Video</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style>
    .top-header {
        background-image: linear-gradient(to right,rgba(194, 153, 34,.9), rgba(194, 153, 34,.9));
        height: 30px;
    }

    .date  {
        padding-top: 3px;
    }

    .date span, .contact span {
        font-size: 12px;
        font-weight: bold;
    }

    .contact i {
        font-size: 14px;
    }

    .navbar {
        background-color: #fff;
        box-shadow: 5px 3px 3px rgb(194, 190, 190);
    }

    .navbar .nav-item a {
        font-size: 14px;
        font-weight: 500;
        margin-left: 10px;
        transition: .5s ease;
    }

    .navbar .nav-item a:hover {
        color: #c1930a;
    }

    @media (max-width: 450px) {
        .top-header {
            display: none;
        }
    }
</style>
