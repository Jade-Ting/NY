<template>
  <div style="margin-bottom: 50px;">
    <div class="interest quanzi">
      <div class="titlebox">
        <p class="title">附近那些事</p>
      </div>
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <div class="list" v-for="(item, i) in lists" :key="i">
          <img :src="item.img" alt class="image">
          <div class="info">
            <div class="head">
              <p class="title" style="margin:0;">{{item.title}}</p>
              <span class="level">{{item.level}}</span>
            </div>
            <div class="text">
              <p class="desc">{{item.desc}}</p>
            </div>
            <div class="hot">
              <span>人气{{item.renqi}}·发布{{item.fabu}}</span>
            </div>
          </div>
        </div>
      </van-pull-refresh>
    </div>
    <NavBottom/>
  </div>
</template>

<script>
import NavBottom from "@/components/NavBottom";
import { PullRefresh } from "vant";

export default {
  name: "Nearby",
  components: { NavBottom, PullRefresh },
  data() {
    return {
      isLoading: false,
      lists: []
    };
  },
  created() {
    this.axios
      .get(
        "https://www.easy-mock.com/mock/5cefa9da841b8b4a4ad02e91/example/list"
      )
      .then(response => {
        this.lists = response.data.lists;
        console.log(this.lists);
      })
      .catch(function(error) {
        console.log(error);
      });
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

<style scoped>
* {
  text-align: left;
}
.interest,
.questions {
  width: 100%;
  background-color: #fff;
  padding: 1rem 1.6rem;
  box-sizing: border-box;
}
.questions {
  margin-top: 1rem;
}
.titlebox {
  width: 100%;
  margin-bottom: 1rem;
}
.questions .titlebox {
  display: -webkit-flex;
  display: flex;
}
.questions .titlebox .title {
  flex: 1;
}
.titlebox .title:before {
  content: "";
  width: 0.3rem;
  height: 1.4rem;
  background-color: #ffda44;
  display: inline-block;
  vertical-align: middle;
  margin-right: 0.4rem;
}
.titlebox .title {
  font-size: 1.4rem;
  font-weight: 600;
}
.list {
  padding-top: 1.2rem;
  box-sizing: border-box;
  padding-bottom: 1rem;
  border-bottom: 1px solid #eee;
  display: -webkit-flex;
  display: flex;
}
.list .image {
  width: 5rem;
  height: 5rem;
}
.list .info {
  flex: 1;
  margin-left: 1rem;
}
.info .head {
  display: -webkit-flex;
  display: flex;
  margin-bottom: 0.4rem;
}
.head .title {
  font-size: 1.4rem;
  font-weight: 600;
  flex: 1;
}
.head .level {
  width: 3.4rem;
  height: 2rem;
  line-height: 2rem;
  background: url("../../assets/images/标签.png") no-repeat;
  background-size: cover;
  background-position: 110% 110%;
  padding-left: 0.8rem;
  box-sizing: border-box;
  color: #fff;
}
.info .text {
  font-size: 1.2rem;
  font-weight: 450;
  margin-bottom: 0.6rem;
}
.info .hot {
  font-style: 1.1rem;
  color: #666;
}
</style>

