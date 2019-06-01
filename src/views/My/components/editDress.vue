<template>
  <van-address-edit
    :area-list="areaList"
    show-postal
    show-delete
    show-set-default
    show-search-result
    :address-info="addressInfo"
    :search-result="searchResult"
    @save="onSave"
    @delete="onDelete"
    @change-detail="onChangeDetail"
  />
</template>

<script>
import AreaList from "./areaList";
import { Toast } from "vant";
export default {
  data() {
    return {
      areaList: AreaList,
      searchResult: [],
      addressInfo: {
        name: "",
        tel: "",
        addressDetail: "",
        id: ""
      }
    };
  },

  created() {
    if (this.$route.query.name) {
      const data = this.$route.query;
      this.addressInfo.name = data.name;
      this.addressInfo.tel = data.tel;
      this.addressInfo.addressDetail = data.address;
      this.addressInfo.id = data.id;
    }
  },
  methods: {
    onSave(value) {
      console.log(value);
      localStorage.setItem("name", value.name);
      localStorage.setItem("tel", value.tel);
      localStorage.setItem(
        "address",
        `${value.province}${value.city}${value.county}${value.addressDetail}`
      );
      localStorage.setItem("isDefault", value.isDefault);
      setTimeout(() => {
        this.$router.push({ path: "/dress" });
        Toast("地址已保存");
      }, 3000);
    },
    onDelete() {
      if (this.$route.query.name) {
        localStorage.removeItem("name");
        localStorage.removeItem("tel");
        localStorage.removeItem("name");
        localStorage.removeItem("address");
        localStorage.removeItem("isDefault");
        setTimeout(() => {
          this.$router.push({ path: "/dress", query: { save: true } });
          Toast("删除成功");
        }, 3000);
      } else {
        Toast("请选择地址后再进行删除");
      }
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: "黄龙万科中心",
            address: "杭州市西湖区"
          }
        ];
      } else {
        this.searchResult = [];
      }
    }
  }
};
</script>

