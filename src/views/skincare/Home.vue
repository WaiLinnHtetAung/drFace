<template>
    <div class="home">
      <Carousel></Carousel>
      <ToClinic></ToClinic>
      <BestSeller></BestSeller>
      <Products></Products>
    </div>
</template>

<script>

import Products from '../../components/skincare/Products'
import BestSeller from '../../components/skincare/BestSeller'
import ToClinic from '../../components/skincare/ToClinic'
import Carousel from '../../components/skincare/Carousel'
export default {
    components: {
    Products,
    BestSeller,
    ToClinic,
    Carousel, Carousel },
    name: 'HomeView',
  
  }
</script>