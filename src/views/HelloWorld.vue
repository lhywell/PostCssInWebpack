<template>
  <div class="main">
    <Hello></Hello>
    <ImgIn></ImgIn>
    <IconIn></IconIn>
    <Auto></Auto>
    <Nested></Nested>
    <Variable></Variable>
    <Extend></Extend>
    <mixIn></mixIn>
    <cssNext></cssNext>
    <cssModule></cssModule>
  </div>
</template>
<script>
import Hello from '../components/helloworld/Hello'
import mixIn from '../components/helloworld/mixIn'
import IconIn from '../components/helloworld/IconIn'
import ImgIn from '../components/helloworld/ImgIn'
import Auto from '../components/helloworld/Auto'
import Nested from '../components/helloworld/Nested'
import Variable from '../components/helloworld/Variable'
import Extend from '../components/helloworld/Extend'
import cssNext from '../components/helloworld/cssNext'
import cssModule from '../components/helloworld/cssModule'

export default {
  name: 'HelloWorld',
  data() {
    return {}
  },
  components: {
    Hello,
    mixIn,
    IconIn,
    ImgIn,
    Auto,
    Nested,
    Variable,
    Extend,
    cssNext,
    cssModule
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
  padding: 10px 0;
  border-bottom: 1px solid rgba(0, 0, 0, .2);
  overflow: hidden;
}

</style>
