<template>
  <div class="thing-container">
    <thingSearch/>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <div class="banner">
        <Swiper :images="images"/>
      </div>
      <thingBody/>
    </van-pull-refresh>
    <NavBottom/>
  </div>
</template>

<script>
import Swiper from "@/components/Swiper";
import thingSearch from "./components/thingSearch";
import NavBottom from "@/components/NavBottom";
import thingBody from "./components/thingBody";
import { PullRefresh } from "vant";

export default {
  name: "CountryThing",
  components: { Swiper, thingSearch, NavBottom, thingBody, PullRefresh },
  data() {
    return {
      isLoading: false,
      images: [
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559248551946&di=a662a7432049f6d4b61f7fe26913176a&imgtype=0&src=http%3A%2F%2Fminimg.hexun.com%2Fi6.hexunimg.cn%2F2014-07-01%2F166219460_240x180.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559248826838&di=dec8e99654ee7afb8c3ce2c3776a4880&imgtype=0&src=http%3A%2F%2Fimg.zwbk.org%2Fbaike%2Fspic%2F2011%2F06%2F15%2F20110615115749316_7126.jpg",
        "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1758392893,2690839383&fm=11&gp=0.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559249014268&di=17cdc25081e83df4aae3c9960a641a84&imgtype=0&src=http%3A%2F%2Fmmbiz.qpic.cn%2Fmmbiz_jpg%2F39C35R8blJd0cCQazjFMtk1GUULiaWgiaF6kDdeUzTqEo7QvbuKW08SQOI4W2iakiawfLvWV8qO30SYK1WwiaYIsN3g%2F640%3Fwx_fmt%3Djpeg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559249035465&di=422af887b0d7ed53044efcb154f83d74&imgtype=0&src=http%3A%2F%2Fpaper.zjrb.cn%2FPdf%2F2014%2F06%2F10%2F697R52HM4W%2FPicture%2F201406092346117.gif",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559249070588&di=0196e12083712a08d47c5672066c3edb&imgtype=0&src=http%3A%2F%2Fimg2.bmlink.com%2Fbig%2Fsupply%2F2017%2F2%2F27%2F9%2F027033225180131.jpg"
      ]
    };
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        this.$toast("刷新成功");
        this.isLoading = false;
        this.count++;
      }, 500);
    }
  }
};
</script>

<style lang="scss">
.banner {
  .ny-swiper .van-swipe {
    height: 15rem;
    margin-top: 0;
  }
}
.thing-container {
  margin-top: 54px;
}
</style>

