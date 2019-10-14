/**
 * bread
 */
var config = {
  tag: "bread",
  attr: {
    id: "bread"
  },
  items: [
    {
      tag: "link",
      text: "首页",
      layout: {
        componentStyle: {
          color: "#fff"
        }
      }
    },
    {
      tag: "span",
      text: "列表页"
    }
  ],
  layout: {
    rootStyle: {
      background: "#333",
      color: "#fff",
      borderBottom: "0"
    }
  }
};

window.dk.start(config);
