var config = {
  tag: "bread",
  attr: {
    id: "bread",
    type: "hidden",
    split: "/"
  },
  layout: {
    rootStyle: {
      background: "#333",
      color: "#fff",
      borderBottom: "0"
    }
  },
  items: [
    {
      tag: "link",
      text: "首页",
      layout: {
        componentStyle: {
          color: "#fff"
        }
      },
      onClick: function(e) {
        lv.sss({
          start: "sss",
          end: "dd"
        })
      }
    },
    {
      tag: "span",
      text: " > "
    },
    {
      tag: "span",
      text: "列表页"
    }
  ]
};

console.log("aaaaaa");

// window.dk.start(config);
