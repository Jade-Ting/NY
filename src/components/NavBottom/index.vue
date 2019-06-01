<template>
  <div class="footer">
    <div
      class="item item2"
      :class="{icon11: footerIndex === 0, icon1: footerIndex !== 0}"
      @click="gotoBigCountry"
    >大乡村</div>
    <div
      class="item item2"
      :class="{icon22: footerIndex === 1, icon2: footerIndex !== 1}"
      @click="gotoCountryThing"
    >乡里事</div>
    <div class="item item1" @click="gotoLogin">
      <div class="outbox">
        <span class="open"></span>
      </div>
      <p class="commit">发布</p>
    </div>
    <div
      class="item item2"
      :class="{icon44: footerIndex === 3, icon4: footerIndex !== 3}"
      @click="gotoNearby"
    >附近</div>
    <div
      class="item item2"
      :class="{icon55: footerIndex === 4, icon5: footerIndex !== 4}"
      @click="gotoMy"
    >我的</div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "NavBottom",
  data() {
    return {
      footerIndex: ""
    };
  },
  mounted() {
    this.footerIndex = this.$store.getters.curindex;
  },
  methods: {
    gotoBigCountry() {
      console.log(this);
      this.$store.dispatch("setCurindex", 0);
      this.$router.push({ path: "/home" });
    },
    gotoCountryThing() {
      this.$store.dispatch("setCurindex", 1);
      this.$router.push({ path: "/thing" });
    },
    gotoLogin() {
      if (sessionStorage.getItem("username")) {
        this.$router.push({ path: "/publishMessage" });
      } else {
        this.$router.push({ path: "/login" });
      }
    },
    gotoNearby() {
      if (sessionStorage.getItem("username")) {
        this.$store.dispatch("setCurindex", 3);
        this.$router.push({ path: "/nearby" });
      } else {
        this.$router.push({ path: "/login" });
      }
    },
    gotoMy() {
      if (sessionStorage.getItem("username")) {
        this.$store.dispatch("setCurindex", 4);
        this.$router.push({ path: "/my" });
      } else {
        this.$router.push({ path: "/login" });
      }
    }
  }
};
</script>

<style lang="css" scoped>
@import "./index.css";
</style>
