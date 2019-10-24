var frameConfig = {
  tag: "frame",
  items: [
    {
      tag: "banner",
      items: [
        {
          tag: "img",
          attr: {
            id: "",
            text: "",
            src: ""
          }
        },
        {
          tag: "group"
        }
      ]
    },
    {
      tag: "menu",
      attr: {
        conflict: false,
        textField: "text",
        iconField: "icon",
        hrefField: "value",
        childrenField: "children"
      },
      data: [
        {
          text: "",
          href: "",

        }
      ]
    }
  ]
};

window.dk.render(frameConfig);
