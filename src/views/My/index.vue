<template>
  <div class="wrapper">
    <div class="top">
      <div class="loginhead">
        <div class="flex border">
          <div class="flexprimary">
            <div class="name">{{username}}</div>
            <div class="somedesc">{{text}}</div>
          </div>
          <div class="useravatar" @click="loadImg">
            <img :src="url" alt class="avatar">
            <input
              hidden
              type="file"
              accept="image/jpeg, image/jpg, image/png"
              capture="camera"
              @change="fileInput"
            >
          </div>
        </div>
      </div>
    </div>
    <div class="list">
      <ul class="itemlist" @click="handleDress">
        <li class="item">收货地址</li>
        <van-icon name="location" class="item1"/>
      </ul>
    </div>
    <div class="list">
      <ul class="itemlist">
        <li class="item item2" @click="gotoFabu">
          我发布的
          <span class="number"></span>
        </li>
      </ul>
    </div>
    <div class="list">
      <ul class="itemlist">
        <li class="item item6" @click="isMsg">帮助与反馈</li>
      </ul>
    </div>
    <div class="list">
      <ul class="itemlist">
        <li class="item item7" @click="shezhi">设置</li>
      </ul>
    </div>
    <div class="buttonwrap">
      <button class="logout" @click="outLogin">退出登录</button>
    </div>
    <div class="block"></div>
    <NavBottom/>
    <van-dialog v-model="show" title="修改用户信息" show-cancel-button closeOnClickOverlay>
      <van-field v-model="username" placeholder="修改用户名"/>
      <van-field v-model="text" placeholder="修改签名"/>
    </van-dialog>
    <van-dialog
      v-model="msg"
      title="反馈信息"
      confirmButtonText="提交"
      @confirm="pushMsg"
      closeOnClickOverlay
    >
      <van-field v-model="msgs" type="textarea" rows="1" autosize placeholder="请输入反馈信息~"/>
    </van-dialog>
  </div>
</template>

<script>
import NavBottom from "@/components/NavBottom";
import { Icon, Dialog, Field, Toast } from "vant";

export default {
  name: "My",
  components: { NavBottom, Icon, Dialog, Field },
  data() {
    return {
      url: sessionStorage.getItem("useravatar"),
      username: sessionStorage.getItem("username"),
      show: false,
      text: "欢迎来到大乡村呀~",
      msg: false,
      msgs: ""
    };
  },
  methods: {
    loadImg() {
      const vm = this;
      const add = document.querySelector("input[type=file]");
      add.click();
      return false;
    },
    fileInput(e) {
      var files = e.target.files;
      console.log(files);
      if (!files.length) return;
      this.createImage(files, e);
    },
    createImage(files, e) {
      const vm = this;
      console.log(this);
      // lrz图片先压缩在加载、
      this.lrz(files[0], { width: 480 })
        .then(function(rst) {
          vm.url = rst.base64;
          window.sessionStorage.setItem("useravatar", vm.url);
          return rst;
        })
        .always(function() {
          // 清空文件上传控件的值
          e.target.value = null;
        });
    },
    handleDress() {
      console.log("hahh", this.$router);
      this.$router.push({ path: "/dress" });
    },
    outLogin() {
      sessionStorage.clear();
      this.$router.push({ path: "/login" });
    },
    gotoFabu() {
      this.$router.push({ path: "/fabu" });
    },
    shezhi() {
      this.show = true;
    },
    isMsg() {
      this.msg = true;
    },
    pushMsg() {
      console.log(this.msgs);
      if (this.msgs !== "") {
        Toast.success("提交成功，感谢您的反馈");
      } else if (this.msgs === "") {
        Toast.fail("请输入信息后再提交");
      }
    }
  }
};
</script>


<style>
.wrapper .van-field__control {
  height: 50px;
  background-color: #eee;
  padding: 15px;
  border-bottom: 1px solid #ddd;
}
.wrapper .van-dialog__header {
  padding: 15px 15px;
}
</style>

<style lang="scss" scoped>
@import url(./index.scss);
</style>

