<template>
  <div class="hello">
    <div class="mix">mix用法：@define-mixin定义，@mixin引用
    </div>
    <div>
      <span class="a"></span>
      <span class="b"></span>
      <span class="c"></span>
      <span class="d"></span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'mixin',
  data() {
    return {}
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import './mixin/mixin.css'

</style>
