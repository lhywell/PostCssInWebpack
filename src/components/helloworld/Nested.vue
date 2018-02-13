<template>
  <div class="hello">
    <div class="nested">嵌套用法：
      <ul>
        <li>
          <div><a href="">1.Less</a></div>
        </li>
        <li>
          <div><a href="">2.Sass</a></div>
        </li>
        <li>
          <div><a href="">3.PostCss</a></div>
        </li>
      </ul>
    </div>
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
.nested {
  ul {
    & li {
      margin: 4px 0;
      line-height: 20px;
    }
    & a {
      color: #333;
    }
  }
}

</style>
