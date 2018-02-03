# vue项目中的postcss与webpack配置

@(笔记)[css]

- 系统：window10
- node版本：8.9.4
- webpack版本:3.6.0

-------------------
PostCSS 最强大之处在于它是模块化并且基于插件的架构，不过这也是个缺点。如果你之前在项目中使用 Sass/Less/Stylus (比如大多数的设计师和前端开发者)，你从不需要配置任何东西——它们内置了全部实用功能，开箱即用。然而，PostCSS 需要你做一些配置。你不得不从一眼看不到底的插件列表选择插件,

### 运行PostCSS
运行PostCSS的方法有很多种。你可以很容易地将它添加到 Gulp 或 Webpack 的构建过程中；但是这篇指南中，我们要让事情尽可能简单，我们将使用 PostCSS 的 CLI。大多数人需要像这样全局安装它：

```node
npm install -g postcss-cli
```

然而，我推荐安装在可运行的本地环境，让他位于你当前工作的项目：

```node
npm install --save-dev postcss-cli
```
安装完了就可以看下PostCSS可执行哪些命令
```js
// 1. 先看下这个命令有哪些参数可以用
postcss --help

Usage: /usr/local/bin/postcss -use plugin [--config|-c config.json] [--output|-o
output.css] [input.css]

选项：
  -c, --config       JSON file with plugin configuration
  -u, --use          postcss plugin name (can be used multiple times)
  -o, --output       Output file (stdout if not provided)
  -d, --dir          Output directory
  -r, --replace      Replace input file(s) with generated output       [boolean]
  -s, --syntax       Alternative input syntax parser
  -p, --parser       Alternative CSS parser
  -t, --stringifier  Alternative output stringifier
  -w, --watch        auto-recompile when detecting source changes
  -v, --version      显示版本号                                        [boolean]
  -h, --help         显示帮助信息                                      [boolean]

示例：
  postcss --use autoprefixer -c             Use autoprefixer as a postcss plugin
  options.json -o screen.css screen.css
  postcss --use autoprefixer                Pass plugin parameters in
  --autoprefixer.browsers "> 5%" -o         plugin.option notation
  screen.css screen.css
  postcss -u postcss-cachify -u             Use multiple plugins and multiple
  autoprefixer -d build *.css               input files

Please specify at least one plugin name.
```
### 示例PostCSS配置

如果你是从一个 Sass 项目迁移过来的，你可能想要有：

- CSS @imports
- CSS @extends
- $variables
- Nested classes
- Mixins
- Autoprefixing
- 自定义@font-face

为了获得这些功能，你需要安装相关的模块：

https://github.com/postcss/postcss-import

https://github.com/postcss/postcss-simple-vars

https://github.com/travco/postcss-extend

https://github.com/postcss/postcss-nested

https://github.com/postcss/postcss-mixins

https://github.com/postcss/postcss-url

https://github.com/michael-ciniawsky/postcss-load-config

https://github.com/jonathantneal/postcss-font-magician

注意：插件提供了与 Sass 几乎相同的语法,但有一些语法略微不同(比如 postcss-mixins 更强大)，所以更多信息请在上面的页面中确认。

然后用一行命令安装它们：
```node
npm install --save-dev style-loader css-loader postcss-loader postcss-load-config postcss-import postcss-simple-vars postcss-extend postcss-nested postcss-font-magician
```

安装完后，你会发现在package.json中devDependencies字段增加了style-loader、css-loader、postcss-loader、postcss-load-config、postcss-import、postcss-simple-vars、postcss-extend、postcss-nested、postcss-mixins、postcss-font-magician这些内容

### PostCSS在webpack中的配置

通过vue-cli构建的vue应用集成了webpack的基础配置，你需要找到build/webpack.base.conf.js中module/rules中增加如下配置：

webpack.base.conf.js
```webpack
{
  test: /\.css$/,
  use: [
    'style-loader',
    {
      loader: 'css-loader',
      options: { importLoaders: 1 }
    },
    'postcss-loader'
  ]
},
```
postcss-loader默认会去查找一个配置文件postcss.config.js，然后需要新建一个postcss.config.js文件。统一管理插件需要把之前安装的包放到plugins里面，并且采用默认配置，默认配置就是每个插件的value值为空对象，不使用某个插件就是false，没有在配置文件里声明的插件是不会生效的，所以配置文件很重要，每个插件也可以定义option，关于插件的option配置需要查询每个插件自定义的配置，关于配置文件说明请看[postcss-load-config](https://github.com/michael-ciniawsky/postcss-load-config)

postcss.config.js
```js
module.exports = {
  parser: false,
  map: false,
  from: '',
  to: '',
  plugins: {
    "postcss-import": {},
    "postcss-simple-vars": {},
    "postcss-extend": {},
    "postcss-nested": {},
    "postcss-mixins": {},
    "postcss-cssnext": {},
    "postcss-url": { url: 'inline' }
  }
}
```
postcss-loader会在文件中遍历查找这个配置文件，所以不需要手动配置路径查找，采用默认的方式就好，当然也支持指定路径，需要在webpack.base.config.js中配置，关于文档请看[postcss-loader](https://github.com/postcss/postcss-loader)文档

webpack.base.config.js
```js
{
  loader: 'postcss-loader',
  options: {
    config: {
      path: 'path/to/postcss.config.js'
    }
  }
}
```

### 在vue组件中引用样式
之后需要在每个vue文件中引入相应的组件样式

HelloWorld.vue
```vue
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


```
Hello.vue

```vue
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
@import './src/assets/css/hello.css'
</style>

```

hello.css
```css
/*文件内部是隔离的，随便定义类名*/
.hello {
  border-bottom: 1px solid rgba(0,0,0,0.2);
  padding:0 0 20px 0;
}
h1{
  font-size: 14px;
  font-family: '微软雅黑'
}
ul {
  list-style: none;
  li {
    padding-left:20px;
    line-height: 20px;
  }
}
a{
  color: red
}

```
在每个vue组件中，通过定义可选的[scoped](https://cn.vuejs.org/v2/guide/comparison.html#%E7%BB%84%E4%BB%B6%E4%BD%9C%E7%94%A8%E5%9F%9F%E5%86%85%E7%9A%84-CSS)属性，可以生成单文件组件作用域，每个vue引用了独立的样式，这样可以做到组件间样式分离，彼此不影响。当然也可以采用[css-modules](http://www.ruanyifeng.com/blog/2016/06/css_modules.html)的方式，用module替换scoped。

在开发中经常碰到样式全局泛滥的情况，比如说在一个组件样式里定义了a类名，会泛滥到全局，我通常的解决方案是为每个组件定义一个特殊不重复的id，然后所有的样式嵌套在id下，这样不会泛滥到全局，这是对于开发经验久的人比较管用。在多人协同开发，经常会碰到一个实习生，或者开发经验1年所有的新手，会在组件样式里写类似.content这种重名风险高的类名，恰好你也在自己的组件中定义了#dashboard .content，这样别的组件的.content样式会继承过来，会导致整个页面样式乱掉，所以总结来说，我推荐在样式中定义scoped。

在postcss中同样也存在实现css-modules规范的插件，[postcss-modules](https://github.com/css-modules/postcss-modules#integration-with-templates)

于是执行npm run dev，你会看到所有样式已经加载进了页面，当你改动css文件的内容，webpack也会实时进行监听，不需要重新编译。

### 更改引入路径
之前每个组件引入的样式文件，路径都是在根目录下，'./src/assets/css/XXX.css',现在为了统一引入的方便，我们把入口改下，

postcss.config.js
```js
module.exports = {
  parser: false,
  map: false,
  from: './src/assets/css/main.css',
  to: '',
  plugins: {
    "postcss-import": {},
    "postcss-simple-vars": {},
    "postcss-extend": {},
    "postcss-nested": {},
    "postcss-mixins": {},
    "postcss-cssnext": {},
    "postcss-url": { url: 'inline' }
  }
}


```
看到from字段，改成一个'./src/assets/css/main.css'文件，这个文件可以作为所有样式文件的入口，相应的所有vue文件的样式引入路径都要改

Hello.vue
```vue
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
```
可以看到文件Hello.vue组件引入样式文件路径，变更为'./hello/hello.css'

### 引入import
最重要的一点就是如果引用一个以上文件的话，尾部一定加上分号，否则解析不了

```css
@import "./common/variables.css";

@import './common/public.css';
```

### 引入autoprefix
因为我们加入了postcss-cssnext插件，可以支持自动补充前缀，试下

注意：postcss-cssnext内部有autoprefixer插件的，也就不需要安装autoprefixer.
```bash
postcss-cssnext found a duplicate plugin ('autoprefixer') in your postcss plugins. This might be inefficient. You should remove 'autoprefixer' from your postcss plugin list since it's already included by postcss-cssnext.
Note: If, for a really specific reason, postcss-cssnext warnings are irrelevant for your use case, and you really know what you are doing, you can disable this warnings by setting  'warnForDuplicates' option of postcss-cssnext to 'false'.
```

```css
.item {
  display: flex;
  align-items: center;
  margin:10px 0;
}
```
解析后
```css
.item[data-v-26256330] {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin: 10px 0;
}
```
### 引入url
postcss-url插件，是定义了rebase，inline，copy三种模式，在本文中，我们采用inline模式，"postcss-url": { url: 'inline' }

inline模式，是从vue组件的位置作为根目录，定义url，路径定义准确的话，解析后会通过webpack对图片进行base64的转化。

```css
.bg {
  background: url('../assets/images/logo.png');
  background-size: 40px 40px;
  width: 40px;
  height: 40px;
  display: inline-block;
}
```
解析后
```css
.bg[data-v-26256330] {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAGXRFW…JEoVCCKBRKEIVCCaJQKJQgCoUSRKFQgigUShCFIhP8vwADACog5YM65zugAAAAAElFTkSuQmCC);
    background-size: 40px 40px;
    width: 40px;
    height: 40px;
    display: inline-block;
}
```

### 引入嵌套
因为我们加入了postcss-nested插件，可以支持嵌套的样式，试下
```css
ul {
  list-style-type: none;
  padding: 0;
  li {
    display: inline-block;
    margin: 0 10px;
  }
}
```
解析后
```css
ul[data-v-656039f0] {
  list-style-type: none;
  padding: 0;
}
ul li[data-v-656039f0] {
    display: inline-block;
    margin: 0 10px;
}
```

### 引入变量
因为我们加入了postcss-simple-vars插件，可以支持变量的，试下
```css
$dir:    top;
$blue:   #056ef0;
$column: 200px;

.menu_link {
    background: $blue;
    width: $column;
}
.menu {
    width: calc(4 * $column);
    margin-$(dir): 10px;
}
```
### 引入自定义@font-face规则
需要安装postcss-font-magician插件，并把它写入到插件配置postcss.config.js中。
自定义@font-face规则，需要定义一个名字，并把字体所在的路径写入，css文件中引入定义的名字，下面定义了一个icomoon名字。

postcss.config.js
```js
module.exports = {
  parser: false,
  map: false,
  from: './src/assets/css/main.css',
  to: '',
  plugins: {
    "postcss-import": {},
    "postcss-simple-vars": {},
    "postcss-extend": {},
    "postcss-nested": {},
    "postcss-mixins": {},
    "postcss-cssnext": {},
    "postcss-font-magician": {
      custom: {
        'icomoon': {
          variants: {
            normal: {
              400: {
                url: {
                  woff: './src/assets/css/common/fonts/icomoon.woff',
                  ttf: './src/assets/css/common/fonts/icomoon.ttf',
                  eot: './src/assets/css/common/fonts/icomoon.eot',
                  svg: './src/assets/css/common/fonts/icomoon.svg'
                }
              }
            }
          }
        }
      }
    },
    "postcss-url": { url: 'inline' }
  }
}
```
icon.css
```css
[class^="icon-"],
[class*=" icon-"] {
    /* use !important to prevent issues with browser extensions that change fonts */
    font-family: 'icomoon' !important;
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    vertical-align: middle;
    /* Better Font Rendering =========== */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

/*工具栏*/

.icon-circle:before {
    content: "\e903";
    @include tool-icon;
    margin-right: 8px;
}
```

### 引入继承
因为我们加入了postcss-extend插件，可以支持继承的，试下
```html
<div>extend用法：
  <span class="delta">extend</span>
  <span class="bravo">extend</span>
  <span class="alpha">extend</span>
  <span class="charlie">extend</span>
</div>
```

```css
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
```
解析后
```
.delta[data-v-ab5bb33e], .charlie[data-v-ab5bb33e], .bravo[data-v-ab5bb33e], .alpha[data-v-ab5bb33e] {
    color: #ffffff;
    background: gray;
}
.bravo[data-v-ab5bb33e], .alpha[data-v-ab5bb33e] {
    background: blue;
}
.charlie[data-v-ab5bb33e], .bravo[data-v-ab5bb33e], .alpha[data-v-ab5bb33e] {
    font-weight: bold;
}
```
### 引入mix
mix用法，功能强大了很多，支持变量引入

```css
@define-mixin tag-bg {
    border-radius: 50%;
    display: inline-block;
    width: 12px;
    height: 12px;
}
.tag {
    @mixin tag-bg
}
```
解析后
```
.tag {
    border-radius: 50%;
    display: inline-block;
    width: 12px;
    height: 12px;
}
```
