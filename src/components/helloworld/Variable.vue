<template>
  <div class="hello">
    <h2>Variable</h2>
    <h3>$variable定义键，冒号后边定义值，$variable进行引用</h3>
    <div class="menu">menu</div>
    <div class="menu_link">menu</div>
  </div>
</template>
<script>
export default {
  name: 'nested',
  data() {
    return {}
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
$dir: top;
$blue: #056ef0;
$column: 200px;

.menu_link {
  background: $blue;
  width: $column;
}
.menu {
  width: calc(4 * $column);
  margin-$(dir): 10px;
}

</style>
