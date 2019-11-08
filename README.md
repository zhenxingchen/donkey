<p align="center">
  <h1 align="center">donkey</h1>
  <h6 align="center">中文：驴 / 拼音： lv</h6>
  <h2 align="center">默默的做着一些有意义的事情，不忘初心即可</h2>
</p>

# 约定和说明

### 目标

> `管理系统`

管理系统和动态表单项目中，表单字段超多、校验各异和交互复杂，这些通常是开发者们最为头大的东东。donkey 就是为了简化这些事情的一个前端框架。顺便做了比如弹窗、侧边栏、吐司提示等一些好用的组件。期望某一天，大家都可以使用 donkey 可以开发任意管理系统

### 使用

> `JSON`

化繁为简，任何复杂的页面都可以使用一致性的 json 配置组件，组成一颗树形配置渲染并完成所有页面端的工作。

### UI

> `AntDesign`

严格按照 [AntDesign 设计语言](https://ant.design/docs/spec/introduce-cn) 重新编写每一个组件展现。

### 动画

> `Animate.css`

框架内置动画效果尽量使用开源 [animate.css](https://github.com/daneden/animate.css) 实现，部分细小交互动画为框架参考业界交互设计实现。大部分组件交互动画还支持用户自定义配置。

### 图标

> `Awesome Icon Fonts`

框架内置图标使用开源 [awesome icon fonts](https://fontawesome.com/) 字体库文件（需额外引入），或用户自定义指定字体图标库。

在此对以上开源设计及项目表示**感谢**。

# 使用方式

等发布了之后再补充。

# 开发模式

- 安装依赖库

```
npm install
```

- 启动开发模式

```
npm run dev
```

- 浏览器访问

[http://localhost:9000/](http://localhost:9000/)

如需更改端口号，请在 `scripts/dev.js` devServer 配置项中修改 port。

- 打包输出

```
npm run build
```

# 常用插件

- [awesome-font-icons-en_US](https://fontawesome.com/icons)
- [awesome-font-icons-zh_CN](http://www.fontawesome.com.cn/faicons/)
- [animate.css](https://daneden.github.io/animate.css/)
