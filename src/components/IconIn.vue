<template>
  <div class="hello">
    <div class="ii">
      <span>支持自定义@font-face规则</span><span class="icon-polygon"></span>
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
@import './common/icons.css'
</style>
