<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li>
        <a href="https://github.com/postcss?page=1" target="_blank">
          postcss Docs
        </a>
      </li>
      <li>
        <a href="https://github.com/postcss/postcss/blob/master/README.cn.md" target="_blank">
          readme
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to PostCss App'
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import './hello/hello.css'

</style>
