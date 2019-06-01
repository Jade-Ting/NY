<template>
  <div class="wrap">
    <div class="show">
      <div class="head">
        <div class="close" @click="tohome">
          <img src="../../assets/images/close.png" alt>
        </div>
        <div class="title">发布</div>
      </div>
      <div class="block"></div>
      <div class="inputcontainer">
        <div class="inputdetail">
          <input type="text" v-model="title" placeholder="标题">
        </div>
        <div class="inputdetail">
          <input type="text" v-model="desc" placeholder="发布内容">
        </div>
      </div>
      <div class="image-list">
        <div class="list-img" v-show="hasPhoto" @click.stop="addPic">
          <img src="../../assets/images/相机.png">
          <span class="choosephoto">请选择或者拍照上传照片</span>
          <input
            hidden
            type="file"
            accept="image/jpeg, image/jpg, image/png"
            capture="camera"
            @change="fileInput"
          >
        </div>
        <ul class="list-ul" v-show="!hasPhoto">
          <li class="list-li" v-for="(url, index) in imgUrls" :key="index">
            <div class="list-link">
              <img :src="url">
            </div>
            <span class="cancleimg" @click="delImage(index)"></span>
          </li>
          <li class="list-li-add">
            <span class="add-img" @click.stop="addPic"></span>
          </li>
        </ul>
      </div>
      <div class="addr">
        <p class="localadress">{{addr}}</p>
      </div>
      <div class="goodinfo"></div>
      <div class="block"></div>
      <div class="footer">
        <button class="fabu" @click="publish">确定发布</button>
      </div>
    </div>
  </div>
</template>
<script>
import { Toast, Dialog } from "vant";
import util from "../../assets/js/util.js";
export default {
  data() {
    return {
      imgUrls: [],
      hasPhoto: true,
      addr: "",
      title: "",
      desc: ""
    };
  },
  mounted() {
    console.log(this.items);
    console.log(this.$store);
  },
  watch: {
    imgUrls: "showAddpic"
  },
  methods: {
    tohome() {
      this.$router.push({ path: "/" });
      this.$store.dispatch("setCurindex", 0);
    },
    showAddpic() {
      let vm = this;
      if (vm.imgUrls.length >= 1) {
        vm.hasPhoto = false;
      } else {
        vm.hasPhoto = true;
      }
    },
    publish() {
      if (this.title == "") {
        Toast("请输入发布的标题");
        return;
      }
      if (this.desc == "") {
        Toast("描述一下宝贝吧");
        return;
      }
      if (this.imgUrls == "") {
        Dialog.alert({
          message:
            "上传几张宝贝图片吧~~如果无法上传，请确定是否开启拍照权限，如果仍无效果，请移步其他浏览器"
        });
        return;
      }
      Dialog.alert({
        message: "发布成功，去看看吧！"
      }).then(action => {
        var date = new Date();
        var seperator1 = "-";
        var seperator2 = ":";
        var month =
          date.getMonth() + 1 < 10
            ? "0" + (date.getMonth() + 1)
            : date.getMonth() + 1;
        var strDate =
          date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
        var currentdate =
          date.getFullYear() +
          seperator1 +
          month +
          seperator1 +
          strDate +
          " " +
          date.getHours() +
          seperator2 +
          date.getMinutes() +
          seperator2 +
          date.getSeconds();
        console.log(currentdate);
        let obj = {};
        obj.title = this.title;
        obj.desc = this.desc;
        obj.imgUrls = this.imgUrls;
        obj.time = currentdate;
        this.$store.dispatch("setFabuinfo", obj);
        this.$router.push("/my");
        this.$store.dispatch("setFabunum");
        this.$store.dispatch("setCurindex", 1);
      });
    },
    addPic(e) {
      let vm = this;
      let add = document.querySelector("input[type=file]");
      add.click();
      return false;
    },
    fileInput(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files, e);
    },
    createImage(file, e) {
      let vm = this;
      // lrz图片先压缩在加载、
      this.lrz(file[0], { width: 480 })
        .then(function(rst) {
          vm.imgUrls.push(rst.base64);
          return rst;
        })
        .always(function() {
          // 清空文件上传控件的值
          e.target.value = null;
        });
    },
    delImage(index) {
      let vm = this;
      vm.imgUrls.splice(index, 1);
    }
  }
};
</script>
<style lang="css" scoped>
* {
  margin: 0;
  padding: 0;
}
.head {
  display: -webkit-flex;
  display: flex;
  align-items: center;
  height: 5rem;
  background-color: #f8f8f8;
  padding-left: 0.4rem;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
.addr {
  width: 100%;
  height: 3rem;
}
.goodinfo {
  width: 100%;
  margin-top: 1rem;
  padding-top: 1rem;
  box-sizing: border-box;
}
.border {
  width: 90%;
  margin: 0 auto;
  border: 1px solid #f3f3f3;
  border-radius: 1.8rem;
  height: 4rem;
}
.footer {
  width: 100%;
  position: fixed;
  bottom: 0;
  height: 5.5rem;
  display: -webkit-flex;
  display: flex;
  align-items: center;
  background-color: #fff;
}
.fabu {
  outline: none;
  border: none;
  width: 98%;
  height: 4rem;
  background-color: red;
  color: #fff;
  display: block;
  margin: 0 auto;
}
.inputcontainer {
  width: 100%;
}
.inputdetail {
  width: 100%;
  border-bottom: 1px solid #f8f8f8;
}
.inputdetail input {
  border: none;
  outline: none;
  width: 100%;
  height: 4rem;
  padding-left: 1rem;
  box-sizing: border-box;
  font-size: 1.3rem;
}
.inputbox input::-webkit-input-placeholder {
  color: #999999;
}
.image-list {
  text-align: left;
  width: 100%;
  height: 10rem;
  background-color: #f8f8f8;
}
.list-img {
  display: -webkit-flex;
  display: flex;
  height: 10rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.list-img img {
  width: 5rem;
  height: 5rem;
  display: block;
  margin-bottom: 1rem;
}
.choosephoto {
  font-size: 1.4rem;
  color: #888;
}
.list-ul {
  width: 100%;
  /*height: 200px;*/
  height: auto;
  padding: 1rem 1rem;
  background-color: #f8f8f8;
  box-sizing: border-box;
}
.list-ul li {
  width: 25%;
  display: inline-block;
  position: relative;
}
.list-link {
  width: 100%;
}
.list-link img {
  width: 5rem;
  height: 5rem;
}
.cancleimg {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: block;
  background: url("../../assets/images/X.png") no-repeat;
  background-size: cover;
  position: absolute;
  top: -0.8rem;
  left: -0.4rem;
}
.list-li-add {
  height: 5rem;
}
.list-li-add .add-img {
  width: 5rem;
  height: 5rem;
  display: block;
  border: 1px solid #333;
  background: url("../../assets/images/加.png") no-repeat;
  background-size: 3rem 3rem;
  background-position: center center;
}
.wrap {
  width: 100%;
  height: 100%;
}

.block {
  height: 5.5rem;
}
.close img {
  width: 2rem;
  height: 2rem;
}
.title {
  flex: 1;
  text-align: center;
  font-size: 1.6rem;
  font-weight: 700;
}
.selfinput {
  width: 100%;
  background: #fff;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
}
@keyframes focus {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.back img {
  width: 3rem;
  height: 3rem;
}
.title {
  flex: 1;
  text-align: center;
  font-size: 1.6rem;
  font-weight: 700;
}
.block1 {
  height: 4.4rem;
}
</style>