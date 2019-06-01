<template>
  <div class="news">
    <Header :class="totop?'fixed':'mint-navbar'"/>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <Swiper :images="images"/>
      <lazy-component>
        <BigCBody/>
      </lazy-component>
    </van-pull-refresh>
    <NavBottom/>
  </div>
</template>

<script>
import Header from "./components/Header";
import Swiper from "@/components/Swiper";
import NavBottom from "@/components/NavBottom";
import BigCBody from "./components/BigCBody";
import { PullRefresh } from "vant";
import { Lazyload } from "vant";

export default {
  name: "BigCountry",
  components: { Header, Swiper, NavBottom, BigCBody, PullRefresh, Lazyload },
  data() {
    return {
      totop: false,
      isLoading: false,
      images: [
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559243909924&di=3be94e6342be665c2612206276253ce7&imgtype=0&src=http%3A%2F%2Fimg001.hc360.cn%2Fg2%2FM02%2F6F%2F7E%2FwKhQuFKut7qETqpSAAAAADFEM94507.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559243935087&di=4d18e468ae061fdc69a6c1f01fa46e2d&imgtype=0&src=http%3A%2F%2Fdpic.tiankong.com%2Fde%2F00%2FQJ6483886918.jpg%3Fx-oss-process%3Dstyle%2Fshows",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559243972891&di=f5f60e5304203080ac809f455bb7b154&imgtype=0&src=http%3A%2F%2Fhao.fogang136.com%2Fzb_users%2Fupload%2F2015%2F05%2F201505031430617883589111.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559244054864&di=939e4b4bf23e7174163d3f5aebc089e7&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Ffront%2F271%2Fw640h431%2F20181228%2FFDyi-hqtwzee5489867.jpg"
      ]
    };
  },
  mounted() {
    document.documentElement.scrollTop = document.body.scrollTop = 0;
    window.addEventListener("scroll", this.menu, false);
  },
  methods: {
    menu() {
      var Height = document.querySelector(".news").offsetTop;
      this.scroll = document.body.scrollTop;
      if (this.scroll >= Height - 65) {
        this.totop = true;
      } else {
        this.totop = false;
      }
    },
    onRefresh() {
      setTimeout(() => {
        this.$toast("刷新成功");
        this.isLoading = false;
        this.count++;
      }, 500);
    }
  },
  destroyed() {
    // 取消监听事件
    window.removeEventListener("scroll", this.menu, false);
  }
};
</script>
