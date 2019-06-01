<template>
  <div>
    <van-tabs v-model="active" class="container">
      <van-tab title="农产品" class="container-item">
        <div
          class="mt-cell"
          v-for="(data, n) in news"
          :key="n"
          :data-id="data.id"
          @click="gotoDetail(data.desc, data.img )"
        >
          <div class="head">
            <img :src="data.avatar" class="avatar" alt>
            <div class="info">
              <p class="title">{{data.name}}</p>
              <p class="time">{{data.time}}</p>
            </div>
            <span class="price">{{data.price}}</span>
          </div>
          <div class="imgbox">
            <img :src="data.img" class="show" alt>
          </div>
          <div class="detail">
            <p class="desc">{{data.desc}}</p>
          </div>
          <div class="bottom">
            <div class="addr">{{data.add}}</div>
            <div class="kind">{{data.kind}}</div>
            <div class="star">
              <div style="display: inline-block" v-if="data.star !== '' ">{{data.star}}</div>
              <div style="display: inline-block" v-if="data.num !== '' ">{{data.num}}</div>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="农家乐" class="container-item">
        <div
          class="mt-cell"
          v-for="(data, i) in nears"
          :key="i"
          @click="gotoDetail(data.desc, data.img )"
        >
          <div class="head">
            <img :src="data.avatar" class="avatar" alt>
            <div class="info">
              <p class="title">{{data.name}}</p>
              <p class="time">{{data.time}}</p>
            </div>
            <span class="price">{{data.price}}</span>
          </div>
          <div class="imgbox">
            <img :src="data.img" class="show" alt>
          </div>
          <div class="detail">
            <p class="desc">{{data.desc}}</p>
          </div>
          <div class="bottom">
            <div class="addr">{{data.add}}</div>
            <div class="kind">{{data.kind}}</div>
            <div class="star" v-if="data.star !== '' ">{{data.star}}</div>
            <div class="star" v-if="data.num !== '' ">{{data.num}}</div>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { Tab, Tabs, Toast } from "vant";
import axios from "axios";

export default {
  name: "BigCBody",
  components: { Tab, Tabs },
  data() {
    return {
      active: 0,
      news: [],
      nears: []
    };
  },
  created() {
    this.getNews();
    this.getNears();
  },
  methods: {
    getNews() {
      axios
        .get(
          "https://www.easy-mock.com/mock/5cefa9da841b8b4a4ad02e91/example/query"
        )
        .then(response => {
          const data = response.data.data.results;
          this.news = data;
        })
        .catch(error => {
          Toast(error);
        });
    },
    getNears() {
      axios
        .get(
          "https://www.easy-mock.com/mock/5cefa9da841b8b4a4ad02e91/example/country"
        )
        .then(response => {
          const data = response.data.data.results;
          this.nears = data;
        })
        .catch(err => {
          Toast(err);
        });
    },
    gotoDetail(desc, img) {
      this.$router.push({
        path: "/goodsDetail",
        query: { desc: desc, img: img }
      });
    }
  }
};
</script>

<style lang="scss">
.mt-cell {
  width: 100%;
  margin-bottom: 0.8rem;
}
.container {
  margin-bottom: 1.2rem;
  text-align: left;
}
.van-tabs__line {
  background-color: #ffda44;
}
.f14 {
  font-size: 1.4rem;
}
.fixed {
  position: fixed;
  top: 45px;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 100;
}
.container-item {
  width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
  box-sizing: border-box;
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
}
.container-item .head {
  display: -webkit-flex;
  display: flex;
  align-items: center;
}
.head .avatar {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
}
/* .head .info {
  flex: 1;
  margin-left: 0.8rem;
} */
.head .title {
  font-size: 1.4rem;
  color: #000;
  margin-bottom: 0.2rem;
  margin-left: 15px;
}
.head .time {
  font-size: 1.2rem;
  color: #999;
  padding-left: 1.4rem;
  background-size: 14px 14px;
  background-position: 0 87%;
}
.head .price {
  margin-right: 0.4rem;
  // color: red;
  font-size: 1.4rem;
  font-weight: 700;
  position: absolute;
  right: 8px;
}
.imgbox {
  margin-top: 0.4rem;
  width: 22rem;
  height: 20rem;
}
.imgbox .show {
  width: 100%;
  height: 100%;
}
.detail {
  margin-top: 0.6rem;
  width: 100%;
  color: #000;
  font-weight: 500;
  font-size: 1.4rem;
  padding-bottom: 0.6rem;
  border-bottom: 1px solid #f3f3f3;
}
.bottom {
  margin-top: 0.8rem;
  color: #7dc5eb;
  display: -webkit-flex;
  display: flex;
  font-weight: 500;
  font-size: 1.2rem;
  margin-bottom: 0.8rem;
}
.bottom .kind {
  margin-left: 1rem;
  flex: 0.5;
}
.bottom .star {
  color: #888;
  position: absolute;
  right: 10px;
}
</style>

