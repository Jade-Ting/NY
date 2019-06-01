<template>
  <div class="thing-body">
    <div class="questions">
      <div class="titlebox">
        <p class="title">农业技术</p>
        <!-- <span class="ask">去提问</span> -->
      </div>
      <div
        class="questionsbox"
        v-for="(question, q) in questions"
        :key="q"
        @click="gotoText(question.title, question.text, question.textImg, question.yutang)"
      >
        <div class="title">{{question.title}}</div>
        <div class="answer">
          <span class="da">
            <van-icon name="volume-o"/>
          </span>
          <div class="text">{{question.answer}}</div>
          <div class="imgshow" v-if="question.img !== undefined ">
            <img :src="question.img" alt>
          </div>
        </div>
        <div class="bottom">
          <div class="yutang">{{question.yutang}}</div>
          <div class="toanswer">点击查看详情</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast, Icon } from "vant";

export default {
  name: "thingBody",
  data() {
    return {
      questions: [],
      tuhao: []
      // swiperOption1: {
      //   slidesPerView: "auto",
      //   spaceBetween: 30
      // }
    };
  },
  created() {
    this.axios
      .get(
        "https://www.easy-mock.com/mock/5cefa9da841b8b4a4ad02e91/example/questions"
      )
      .then(response => {
        console.log(response.data);
        this.questions = response.data.data.questions;
        console.log(this.questions);
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  methods: {
    gotoText(title, text, img, name) {
      console.log("---");
      this.$router.push({
        path: "/text",
        query: { title: title, text: text, img: img, name: name }
      });
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
.title:before {
  content: "";
  width: 0.3rem;
  height: 1.4rem;
  background-color: #ffda44;
  display: inline-block;
  vertical-align: middle;
  margin-right: 0.4rem;
}
.questions .titlebox .ask {
  font-size: 1.4rem;
  font-weight: 700;
  background: url("../../../assets/images/提问.png") no-repeat;
  background-size: 1.8rem 1.8rem;
  width: 6rem;
  padding-left: 1.8rem;
  background-position: 0 100%;
  box-sizing: border-box;
}
.questionsbox {
  padding-top: 1rem;
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
.questionsbox {
  padding-top: 1rem;
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
</style>
