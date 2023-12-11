<template>
  <div class="img-review">
    <img :src="require(`@/assets/images/review/${img_url + 1}.jpg`)" alt="" />
  </div>
</template>

<script>
export default {
  props: ["img_url"],
};
</script>

<style scoped>
.img-review {
  background: #f2f2f2;
}

.img-review img {
  width: 100%;
}
</style>
