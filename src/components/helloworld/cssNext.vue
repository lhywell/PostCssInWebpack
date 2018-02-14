<template>
  <div class="hello">
    <h2>cssnext</h2>
    <ul>
      <li>
        <div class="title">1.变量用法</div>
        <div class="detail">内容</div>
      </li>
      <li>
        <div>2.@apply用法</div>
        <div class="Toolbar">内容</div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'cssnext',
  data() {
    return {}
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cssnext {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
}
ul {
  & li {
    line-height: 26px;
  }
}


/*在variables_next.css里面定义*/

.title {
  color: var(--color-title);
}
.detail {
  color: var(--color-detail);
}



/*在postcss.config.js里面定义*/

.Toolbar {
  @apply --toolbar-theme;
}

</style>
