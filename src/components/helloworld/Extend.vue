<template>
  <div class="hello">
    <h2>Extend</h2>
    <h3>@extend引用一个类名</h3>
    <span class="delta">extend</span>
    <span class="bravo">extend</span>
    <span class="alpha">extend</span>
    <span class="charlie">extend</span>
    <a href="" class="link">extend</a>
    <ul>
      <li>
        <a href="">1.extend</a>
      </li>
      <li>
        <a href="">2.nested</a>
      </li>
    </ul>
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
.delta {
  color: #ffffff;
  background: gray;
}

.charlie {
  @extend .delta;
  font-weight: bold;
}
.alpha {
  @extend .bravo;
  color: red;
}
.bravo {
  @extend .charlie;
  background: blue;
}

ul {
  li {
    line-height: 48px;
    a {
      color: #333;
    }
  }
}



/*main.css定义的全局变量*/

.link {
  @extend .link;
}

</style>
