<template>
    <div class="outer-card">
        <div class="content">
            <h4>DR.FACE CLINIC</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint cupiditate eveniet id molestiae possimus rem nobis officia quisquam aliquam eius!</p>
            <router-link to="/clinic" class="dr-btn">Visit Dr.face Clinic</router-link>
        </div>
        <div class="photo">
            <img src="@/assets/images/founder.png" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style>
    .outer-card {
        background: rgb(22,184,187, .8);
        width: 900px;
        height: 300px;
        margin: 40px auto 0px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px 55px;
        border-radius: 7px;
    }
    
    .content {
        width: 450px;
        height: 230px;
        background-color: rgb(60,168,170);
        padding: 35px 20px 10px;
    }

    .content h4 {
        font-weight: bold;
        color: #fff;
    }

    .content p {
        color: #B2F4E4;
        margin: 10px auto 25px;
    }

    .outer-card .photo {
        width: 31%;
    }

    .outer-card .photo img{
        width: 100%;
    }   
</style>
