<template>
  <div class="ny-swiper">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index" width="500">
        <img :src="image" class="swiper-img">
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from "vant";

export default {
  name: "Swiper",
  components: { Swipe, SwipeItem },
  props: ["images"]
};
</script>

<style lang="css">
.ny-swiper .van-swipe {
  height: 20rem;
  background: blue;
  margin-top: 45px;
}
.swiper-img {
  width: 100%;
  height: 100%;
}
</style>
