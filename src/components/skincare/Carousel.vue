<template>
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active ">
                <img class="lg-img" src="@/assets/images/carousel/1.png" alt="...">
                <img class="md-img" src="@/assets/images/carousel/1_1200.jpg" alt="...">
            </div>
            
            <div class="carousel-item  ">
                <img class="c3-1 lg-img" src="@/assets/images/carousel/2.jpg" alt="...">
                <img class="c3-1 md-img" src="@/assets/images/carousel/2_1200.jpg" alt="...">
            </div>

            <div class="carousel-item slide2 ">
                <img class="lg-img" src="@/assets/images/carousel/3.jpg" alt="...">
                <img class="md-img" src="@/assets/images/carousel/3_1200.png" alt="...">
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
        width: 100%;
        height: 700px;
    }

    .carousel-item .md-img {
        display: none;
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
        background-color: #21f0e2 !important;
    }

    #carouselExampleIndicators > button.carousel-control-next > span.carousel-control-next-icon,
    #carouselExampleIndicators > button.carousel-control-prev > span.carousel-control-prev-icon {
        background-color: #21f0e2;
        padding: 20px !important;
        border-radius: 100%;
        background-size: 1.5rem;
    }

    @media (max-width: 1600px) {
        .carousel-item img {
            width: 100%;
            height: 600px;
        }
    }

    @media (max-width: 1300px) {
        .carousel-item img {
            width: 100%;
            height: 550px;
            margin-top: -35px;
        }

        .carousel-item .lg-img {
            display: none;
        }
        .carousel-item .md-img {
            display: block;
        }
    }
</style>
