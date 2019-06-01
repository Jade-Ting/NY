<template>
  <div class="wrapper">
    <section class="header">
      <div class="scanner">
        <img src="../../../assets/images/二维码.png" alt>
        <input type="file" name="file" capture="camera">
      </div>
      <router-link to="/search" class="search">
        <input type="search" placeholder="搜索农家乐/农场品">
      </router-link>
      <div class="morekind">
        <img src="../../../assets/images/分类.png" alt>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  // min-height: 70rem;
  position: relative;
  .block {
    height: 4.5rem;
  }
  .header {
    width: 100%;
    height: 4.5rem;
    background-color: #ffda44;
    z-index: 10;
    position: fixed;
    top: 0;
    display: -webkit-flex;
    display: flex;
    align-items: center;
    .scanner {
      width: 2rem;
      height: 2rem;
      margin-left: 1rem;
      margin-right: 1rem;
      img {
        width: 2rem;
        height: 2rem;
      }
      input {
        display: none;
      }
    }
    .search {
      flex: 1;
      height: 3rem;
      display: flex;
      align-items: center;
      outline: none;
      border-radius: 0.4rem;
      border: none;
      padding-left: 2.8rem;
      background-color: #fff;
      // background-image: url("../../../assets/images/search.png");
      background-repeat: no-repeat;
      background-size: 1.8rem 1.8rem;
      background-position: 0.8rem 50%;
      input {
        border: none;
      }
    }
    .morekind {
      width: 2rem;
      height: 2rem;
      margin-left: 1rem;
      margin-right: 1rem;
      img {
        width: 2rem;
        height: 2rem;
      }
    }
  }
}
</style>
