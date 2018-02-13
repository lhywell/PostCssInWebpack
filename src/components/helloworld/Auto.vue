<template>
  <div class="hello">
    <div class="auto">autoprefix用法：安装了postcss-cssnext，里面包含autoprefix
    </div>
    <div class="item">item</div>
  </div>
</template>
<script>
export default {
  name: 'iconin',
  data() {
    return {}
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import './auto/auto.css'

</style>
