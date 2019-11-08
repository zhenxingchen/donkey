window.dk.router({
  config: {
    max: 20
  },
  pages: [
    {
      url: "/bread",
      src: "/bread.js",
      name: "config"
    },
    {
      url: "/menu",
      src: "/menu.js",
      name: "menuConfig"
    },
    {
      url: "/form",
      src: "/form.js",
      name: "pageConfig",
      home: true
    }
  ]
});
