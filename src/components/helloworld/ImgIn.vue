<template>
  <div class="hello">
    <h2>图片</h2>
    <div class="item">
      <span>支持png图片</span><img src="../../assets/images/logo.png" width="40" height="40">
    </div>
    <div class="item">
      <span>支持svg图片</span><img src="../../assets/images/icon-square-big.svg" width="40" height="40">
    </div>
    <div class="item">
      <span>支持背景</span><span class="bg"></span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'iconin',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import './imgin/imgin.css'

</style>
