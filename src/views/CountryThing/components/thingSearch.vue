<template>
  <div class="thing-serch">
    <van-search placeholder="请输入搜索关键词"/>
  </div>
</template>

<script>
import { Search } from "vant";
export default {
  name: "thingSearch",
  components: { Search }
};
</script>

 <style>
.thing-serch {
  display: block;
  position: fixed;
  height: 54px;
  width: 100%;
  z-index: 99;
  top: 0;
}
</style>
