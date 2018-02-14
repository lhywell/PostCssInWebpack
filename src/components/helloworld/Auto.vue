<template>
  <div class="hello">
    <h2>Autoprefix</h2>
    <h3>安装了postcss-cssnext，里面包含autoprefix</h3>
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
