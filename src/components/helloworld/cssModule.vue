<template>
  <div class="hello">
    <h2>cssModule</h2>
    <div :class="$style.h1"></div>
    <div :class="$style.title">标题</div>
    <ul :class="$style.ul">
      <li>
        <div :class="$style.article">1.compose用法</div>
      </li>
      <li>
        <div class="page">2.:global用法</div>
      </li>
      <li>
        <div :class="$style.value">3.@value用法</div>
      </li>
      <li>
        <a href="">泛滥到全局，其他组件(例如：Extend.vue)的链接也受影响，</a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'module',
  data() {
    return {}
  }
}

</script>
<!-- Add "module" attribute to limit CSS to this component only -->
<style module>
@import './module/module.css';

</style>
