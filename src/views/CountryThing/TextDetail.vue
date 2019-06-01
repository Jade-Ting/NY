<template>
  <div class="questionsbox" style="padding-top: 0;">
    <div class="title">
      {{question.title}}
      <div class="yutang">{{question.name}}</div>
    </div>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <div class="answer">
        <div class="text">{{question.answer[0]}}</div>
        <img
          v-if="question.textImg"
          :src="question.textImg[0]"
          style="width: 35px, height: 18px"
          alt
        >
        <div class="text">{{question.answer[1]}}</div>
        <img
          v-if="question.textImg"
          :src="question.textImg[1]"
          style="width: 30px, height: 18px"
          alt
        >
        <div class="text">{{question.answer[2]}}</div>
      </div>
    </van-pull-refresh>
    <!-- <div class="bottom">
      <div class="yutang">{{question.yutang}}</div>
    </div>-->
  </div>
</template>

<script>
import { PullRefresh } from "vant";

export default {
  components: { PullRefresh },
  data() {
    return {
      isLoading: false,
      question: {}
    };
  },
  created() {
    this.question.title = this.$route.query.title;
    this.question.answer = this.$route.query.text;
    this.question.textImg = this.$route.query.img;
    this.question.name = this.$route.query.name;
    console.log(this.question);
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
  margin: 0;
  padding: 0;
  text-align: left;
}
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
  font-size: 1.4rem;
  font-weight: 600;
}
/* .title:before {
    content: "";
    width: 0.3rem;
    height: 1.4rem;
    background-color: #000;
    display: inline-block;
    vertical-align: middle;
    margin-right: 0.4rem;
  } */
.questionsbox {
  padding-top: 0;
  padding-bottom: 1rem;
  border-bottom: 1px solid #efefef;
  margin-top: 65px;
}
.questionsbox:last-child {
  border-bottom: none;
}
.questionsbox .title {
  font-size: 1.4rem;
  font-weight: 600;
  padding: 10px 5px;
  background-color: #ffda44;
  position: fixed;
  width: 100%;
  top: 0;
}
.questionsbox {
  padding-bottom: 1rem;
  border-bottom: 1px solid #efefef;
}
.questionsbox:last-child {
  border-bottom: none;
}
.questionsbox .title {
  font-size: 1.4rem;
  font-weight: 600;
}
.text {
  flex: 1;
  font-weight: 500;
  font-size: 14px;
  text-indent: 26px;
  line-height: 24px;
}
.da {
  background-color: #ffda44;
  display: inline-block;
  width: 1.8rem;
  height: 1.6rem;
  text-align: center;
  margin-right: 0.6rem;
  color: #333;
}
.answer img {
  width: 4rem;
  height: 4rem;
  margin-left: 1rem;
}
.bottom {
  display: -webkit-flex;
  display: flex;
  margin-top: 0.6rem;
}
.yutang {
  flex: 1;
  color: #888;
  font-size: 10px;
  line-height: 22px;
}
.toanswer {
  color: #7dc5eb;
  font-weight: 700;
}
.questions .answer {
  display: -webkit-flex;
  display: flex;
  margin-top: 0.6rem;
  color: #666;
  font-size: 1.3rem;
}

.van-swipe {
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
  z-index: 1;
}
.van-swipe__track {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  transition-property: transform;
  box-sizing: content-box;
}
.van-swipe-item {
  width: 10rem;
  height: auto;
  padding: 1rem 0.6rem 0.6rem;
  box-sizing: border-box;
  margin-bottom: 0.4rem;
  text-align: center;
}
.answer img {
  width: 330px;
  height: 200px;
}
</style>

