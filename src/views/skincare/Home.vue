<template>
    <div class="home">
      <Carousel></Carousel>
      <ToClinic></ToClinic>
      <BestSeller></BestSeller>
      <Products></Products>
      <Partners></Partners>
      <Testimonial></Testimonial>
    </div>
</template>

<script>

import Partners from '../../components/skincare/Partners'
import Testimonial from '../../components/skincare/Testimonial'
import Products from '../../components/skincare/Products'
import BestSeller from '../../components/skincare/BestSeller'
import ToClinic from '../../components/skincare/ToClinic'
import Carousel from '../../components/skincare/Carousel'
export default {
    components: {
    Partners,
    Testimonial,
    Products,
    BestSeller,
    ToClinic,
    Carousel, Carousel },
    name: 'HomeView',
  
  }
</script>