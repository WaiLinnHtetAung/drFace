<template>
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active ">
                <img src="@/assets/images/carousel3.jpg" class="d-block w-100" alt="...">
                <div class="carousel-caption">
                    <h1>WE ARE HERE FOR YOUR SKIN <br>
                        CARE
                    </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni doloremque distinctio eos atque quibusdam repellat vel sed quidem illo perferendis.</p>
                    <router-link to="/products" class="dr-btn">Shop Now</router-link>
                </div>
            </div>
            <div class="carousel-item">
                <img src="@/assets/images/carouesl1.jpeg" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
                <img src="@/assets/images/carousel2.jpeg" class="d-block w-100" alt="...">
                
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style>
    .carousel-item img {
        height: 550px;
    }
    .carousel-caption {
        width: 450px;
        left: 780px;
        bottom: 150px;
        text-align: start;
    }
    .carousel-caption h1 {
        color: rgb(27, 27, 27);
        font-weight: bold;
        text-align: start;
        font-size: 28px;
    }
    .carousel-caption p {
        text-align: start;
        font-size: 13px;
        color: rgb(86, 89, 91);
    }

    .carousel-indicators {
        bottom: 30px;
    }

    .carousel-indicators button {
        width: 13px !important;
        height: 13px !important;
        border-radius: 100%;
    }

    .carousel-indicators button.active {
        background-color: #c8a338 !important;
    }

    #carouselExampleIndicators > button.carousel-control-next > span.carousel-control-next-icon,
    #carouselExampleIndicators > button.carousel-control-prev > span.carousel-control-prev-icon {
        background-color: #21f0e2;
        padding: 20px !important;
        border-radius: 100%;
        background-size: 1.5rem;
    }

    @media (min-width: 1500px) {
        .carousel-item img {
            height: auto;
        }
        .carousel-caption {
            width: 500px;
            left: 1100px;
            bottom: 300px;
            text-align: start;
        }

    }
</style>
