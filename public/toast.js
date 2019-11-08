const toastGroup = {
  tag: "group",
  label: "吐司",
  items: [
    {
      tag: "button",
      text: "默认",
      layout: {
        rootStyle: { marginRight: "10px" }
      },
      onClick: function() {
        dk.toast("我是一个普通吐司，默认延时 2s 自动关闭");
      }
    },
    {
      tag: "button",
      text: "延时 5s",
      layout: {
        rootStyle: { marginRight: "10px" }
      },
      onClick: function() {
        dk.toast({
          message: "我是一个延时 5s 的吐司",
          delay: 5000
        });
      }
    },
    {
      tag: "button",
      text: "成功",
      layout: {
        rootStyle: { marginRight: "10px" }
      },
      onClick: function() {
        dk.toast({
          message: "我是一个失败的吐司",
          type: "success"
        });
      }
    },
    {
      tag: "button",
      text: "错误",
      layout: {
        rootStyle: { marginRight: "10px" }
      },
      onClick: function() {
        dk.toast({
          message: "我是一个错误的吐司",
          type: "error"
        });
      }
    },
    {
      tag: "button",
      text: "提示",
      layout: {
        rootStyle: { marginRight: "10px" }
      },
      onClick: function() {
        dk.toast({
          message: "我是一个提示的吐司",
          type: "info"
        });
      }
    },
    {
      tag: "button",
      text: "警告",
      layout: {
        rootStyle: { marginRight: "10px" }
      },
      onClick: function() {
        dk.toast({
          message: "我是一个警告的吐司",
          type: "warn"
        });
      }
    },
    {
      tag: "button",
      text: "自定义图标",
      layout: {
        rootStyle: { marginRight: "10px" }
      },
      onClick: function() {
        dk.toast({
          message: "我是一个自定义图标的吐司",
          icon: "fa-coffee"
        });
      }
    }
  ]
};

dk.render(toastGroup);
