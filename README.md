<p align="center">
  <h1 align="center">donkey</h1>
  <h6 align="center">中文：驴 / 拼音： lv</h6>
  <h2 align="center">默默的做着一些有意义的事情，不忘初心即可</h2>
</p>

### 使用方式

等发布了之后再补充。

### 开发模式启动步骤

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

脚本暂时还未编写，待后期完善。

### 优化备忘

- 每个组件只负责自己内部的样式，外层大框架样式抽离统一调整
- 主题颜色单独一个 less 文件定义
- 表单布局单独一个 less 文件定义
- 组件再进一步细化