<template>
  <div class="main">
    <Hello></Hello>
    <ImgIn></ImgIn>
    <IconIn></IconIn>
    <mixIn></mixIn>
  </div>
</template>
<script>
import Hello from './Hello'
import mixIn from './mixIn'
import IconIn from './IconIn'
import ImgIn from './ImgIn'

export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Hello,
    mixIn,
    IconIn,
    ImgIn,
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  padding: 10px;
  font-size: 14px;
  font-family: '微软雅黑'
}
.hello {
  margin: 10px 0;
  border-bottom: 1px solid rgba(0, 0, 0, .2);
  overflow: hidden;
}

</style>
