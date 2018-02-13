<template>
  <div class="hello">
    <div :class="$style.h1">cssModule用法：</div>
    <ul :class="$style.ul">
      <li>
        <div><a href="">1.变量用法</a></div>
        <div class="detail">内容</div>
      </li>
      <li>
        <div><a href="" class="a">2.apply用法</a></div>
        <div class="Toolbar">内容</div>
      </li>
    </ul>
    <div :class="$style.title">title</div>
    <div class="page">1-2</div>
    <div :class="$style.article">sfasdfasdfasdfasfd</div>
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

$font16: 16px;
$bold:bold;
$mb:10px;
$line-h:26px;

@define-mixin h1 {
  font-size: $font16;
  font-weight: $bold;
  margin-bottom: $mb;
}

.text {
  text-decoration: none;
  color: #35a1d4;
}

.h1 {
  @mixin h1;
}


/*module方式,即使嵌套定义a，@extend还是会泛滥到全局*/

.ul {
  li {
    line-height: $line-h;
    a {
      font-weight: bold;
      @extend .text;
    }
  }
}

</style>
