var menuConfig = {
  tag: "menu",
  attr: {
    id: "menu",
    textField: "text",
    hrefField: "href",
    iconField: "icon",
    childrenField: "children",
    offset: 20
  },
  data: [
    {
      text: "北京",
      icon: "fa-bell",
      childrenOpen: false,
      children: [
        { text: "朝阳区", href: "https://www.baidu.com/" },
        { text: "大兴区" },
        { text: "海淀区" },
        { text: "丰台区" }
      ]
    },
    {
      text: "上海",
      icon: "fa-bell",
      childrenOpen: false,
      children: [
        {
          text: "浦东新区"
        },
        {
          text: "宝山区"
        }
      ]
    },
    {
      text: "天津",
      icon: "fa-bell",
      childrenOpen: false,
      children: [
        {
          text: "河东区"
        },
        {
          text: "河西区"
        }
      ]
    },
    {
      text: "重庆",
      icon: "fa-bell",
      childrenOpen: false,
      children: [
        {
          text: "上岗区"
        },
        {
          text: "下岗区"
        }
      ]
    },
    {
      text: "湖北省",
      icon: "fa-bell",
      childrenOpen: false,
      children: [
        {
          text: "武汉市",
          icon: "fa-bell",
          childrenOpen: false,
          children: [
            { text: "武昌区" },
            { text: "汉口区" },
            { text: "汉阳区" }
          ]
        },
        {
          text: "黄冈市",
          icon: "fa-bell",
          childrenOpen: false,
          children: [
            { text: "罗田县" },
            { text: "浠水县" },
            { text: "英山县" }
          ]
        }
      ]
    }
  ],
  ajax: {}
};

window.dk.render(menuConfig);
