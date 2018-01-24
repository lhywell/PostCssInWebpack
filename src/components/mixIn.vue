<template>
  <div class="hello">
    <div class="auto">autoprefix用法：
      <div class="item">item</div>
    </div>
    <div class="nested">嵌套用法：
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
    <div class="var">变量用法：
      <div class="menu">menu</div>
      <div class="menu_link">menu</div>
    </div>
    <div>extend用法：
      <span class="delta">extend</span>
      <span class="bravo">extend</span>
      <span class="alpha">extend</span>
      <span class="charlie">extend</span>
    </div>
    <div class="mix">mix用法：
    <span class="search"></span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'mixin',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import './mixin/mixin.css'

</style>
