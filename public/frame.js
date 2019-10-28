const frameConfig = {
  tag: "frame",
  attr: {},

  // 第一种方式
  logo: {},
  banner: {
    nav: {},
    toolbar: {}
  },
  menu: {},
  tabs: {},

  // 第二种方式
  items: [
    {
      tag: "logo"
    },
    {
      tag: "banner",
      items: [{ tag: "logo" }, { tag: "nav" }]
    },
    {
      tag: "menu",
      items: [{ tag: "logo" }]
    },
    {
      tag: "tabs",
      items: []
    }
  ]
};

window.dk.render(frameConfig);
