<template>
    <div class="photo">
        <img src="../../assets/Products/19.t-zone/img.png" alt="">
        <img src="../../assets/Products/15.powder/img.png" alt="">
        <img src="../../assets/Products/10.vitamin-C/img.png" alt="">
        <img src="../../assets/Products/12.pink-egg/img.png" alt="">
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .photo {
        margin: 40px auto 10px;
        height: 250px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-image: linear-gradient(to left,rgba(197, 197, 110, 0.5), rgba(102, 102, 226, 0.5));
        margin-bottom: 20px;
    }

    .photo img {
        width: 20%;
        height: 90%;
        object-fit: cover;
        object-position: center;
    }
</style>
