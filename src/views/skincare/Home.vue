<template>
    <div class="home">
      <Carousel></Carousel>
      <ToClinic></ToClinic>
      <BestSeller></BestSeller>
      <Products></Products>
      <Photo></Photo>
      <Testimonial></Testimonial>
    </div>
</template>

<script>

import Testimonial from '../../components/skincare/Testimonial'
import Photo from '../../components/skincare/Photo'
import Products from '../../components/skincare/Products'
import BestSeller from '../../components/skincare/BestSeller'
import ToClinic from '../../components/skincare/ToClinic'
import Carousel from '../../components/skincare/Carousel'
export default {
    components: {
    Testimonial,
    Photo,
    Products,
    BestSeller,
    ToClinic,
    Carousel, Carousel },
    name: 'HomeView',
  
  }
</script>