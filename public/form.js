const breadConfig = {
  tag: "bread",
  attr: {
    split: ">"
  },
  items: [
    {
      tag: "icon",
      attr: {
        name: "fa-coffee"
      }
    },
    {
      tag: "span",
      text: "实验室"
    },
    {
      tag: "span",
      text: "表单"
    }
  ]
};

const formConfig = {
  tag: "form",
  attr: {
    name: "searchForm",
    action: "https://www.some.com",
    method: "post"
  },
  layout: {
    containerStyle: {
      padding: "15px 10px"
    }
  },
  items: [
    {
      tag: "input",
      label: "姓名",
      cols: "lg6 md8 sm12 xs24",
      attr: {
        name: "username",
        value: "zhangsan"
      },
      validate: {
        required: true
      }
    },
    {
      tag: "group",
      label: "性别",
      cols: "lg6 md8 sm12 xs24",
      items: [
        {
          tag: "radio",
          attr: {
            text: "男",
            name: "sex",
            value: "1"
          },
          layout: {
            rootStyle: {
              marginRight: "10px"
            }
          }
        },
        {
          tag: "radio",
          attr: {
            text: "女",
            name: "sex",
            value: "2"
          }
        }
      ]
    },
    {
      tag: "input",
      label: "年龄",
      cols: "lg6 md8 sm12 xs24",
      attr: {
        name: "age",
        value: "23",
        type: "number"
      }
    },
    {
      tag: "input",
      label: "密码",
      cols: "lg6 md8 sm12 xs24",
      attr: {
        name: "password",
        value: "zhangsan",
        type: "password"
      }
    },
    {
      tag: "input",
      label: "邮箱",
      cols: "lg6 md8 sm12 xs24",
      attr: {
        name: "email",
        value: "zhangsan",
        type: "email"
      }
    },
    {
      tag: "select",
      label: "班级",
      cols: "lg6 md8 sm12 xs24",
      attr: {
        name: "class",
        value: "zhangsan",
        placeholder: "请选择班级"
      },
      options: [
        { text: "高三（1）班级", value: "0301" },
        { text: "高三（2）班级", value: "0302" },
        { text: "高三（3）班级", value: "0303" },
        { text: "高三（4）班级", value: "0304" },
        { text: "高三（5）班级", value: "0305" },
        { text: "高三（6）班级", value: "0306" }
      ]
    },
    {
      tag: "upload",
      label: "成绩单",
      text: "上传",
      cols: "lg6 md8 sm12 xs24",
      items: [
        {
          tag: "button",
          items: [
            {
              tag: "icon",
              attr: {
                name: "fa-upload"
              }
            },
            {
              tag: "span",
              text: "上传",
              layout: {
                rootStyle: { marginLeft: "5px" }
              }
            }
          ]
        }
      ]
    },
    {
      tag: "img",
      label: "头像",
      cols: "lg6 md8 sm12 xs24",
      attr: {
        src: "https://s.cn.bing.net/th?id=ODL.c37cac848b0f77eadb9ef8fcb7daa866&w=146&h=146&c=7&rs=1&qlt=80&pid=RichNav",
        height: "33px"
      }
    },
    {
      tag: "span",
      label: "状态",
      text: "正常",
      cols: "lg6 md8 sm12 xs24",
      layout: {
        containerStyle: { color: "#888" }
      },
      items: [
        {
          tag: "icon",
          attr: {
            name: "fa-info"
          }
        },
        {
          tag: "span",
          text: "正常",
          layout: {
            rootStyle: { marginLeft: "5px" }
          }
        }
      ]
    },
    {
      tag: "link",
      label: "详细资料",
      text: "点击查看",
      cols: "lg6 md8 sm12 xs24",
      attr: {
        href: "https://www.baidu.com",
        target: "_blank"
      },
      items: [
        {
          tag: "icon",
          attr: {
            name: "fa-address-card"
          }
        },
        {
          tag: "span",
          text: "点击查看",
          layout: {
            rootStyle: { marginLeft: "10px" }
          }
        }
      ]
    },
    {
      tag: "group",
      label: "专业课",
      cols: "lg12 md12 sm12 xs24",
      items: [
        {
          tag: "checkbox",
          attr: {
            text: "物理",
            name: "professional",
            value: "1"
          },
          layout: {
            rootStyle: {
              marginRight: "15px"
            }
          }
        },
        {
          tag: "checkbox",
          attr: {
            text: "化学",
            name: "professional",
            value: "2"
          },
          layout: {
            rootStyle: {
              marginRight: "15px"
            }
          }
        },
        {
          tag: "checkbox",
          attr: {
            text: "生物",
            name: "professional",
            value: "3"
          },
          layout: {
            rootStyle: {
              marginRight: "15px"
            }
          }
        },
        {
          tag: "checkbox",
          attr: {
            text: "地理",
            name: "professional",
            value: "4"
          },
          layout: {
            rootStyle: {
              marginRight: "15px"
            }
          }
        },
        {
          tag: "checkbox",
          attr: {
            text: "历史",
            name: "professional",
            value: "5"
          },
          layout: {
            rootStyle: {
              marginRight: "15px"
            }
          }
        },
        {
          tag: "checkbox",
          attr: {
            text: "政治",
            name: "professional",
            value: "6"
          }
        }
      ]
    },
    {
      tag: "group",
      layout: {
        rootStyle: {
          textAlign: "center"
        }
      },
      items: [
        {
          tag: "button",
          text: "保存",
          attr: {
            type: "submit",
            color: "blue"
          },
          layout: {
            rootStyle: {
              margin: "5px"
            }
          },
          items: [
            {
              tag: "span",
              text: "查询",
              layout: {
                rootStyle: { marginRight: "10px" }
              }
            },
            {
              tag: "icon",
              attr: {
                name: "fa-search"
              }
            }
          ]
        },
        {
          tag: "button",
          text: "重置",
          attr: {
            type: "reset",
            color: "red",
            disabled: true
          },
          layout: {
            rootStyle: {
              margin: "5px"
            }
          }
        }
      ]
    },
    {
      tag: "table",
      attr: {
        checkType: "checkbox"
      },
      toolbar: {
        tag: "group",
        layout: {
          containerStyle: {
            marginBottom: "10px"
          }
        },
        items: [
          {
            tag: "button",
            text: "新建",
            attr: {
              color: "blue"
            },
            layout: {
              rootStyle: {
                marginRight: "10px"
              }
            }
          },
          {
            tag: "button",
            text: "编辑",
            attr: {
              color: "blue",
              disabled: true
            },
            layout: {
              rootStyle: {
                marginRight: "10px"
              }
            }
          },
          {
            tag: "button",
            text: "删除",
            attr: {
              color: "blue",
              disabled: true
            }
          }
        ]
      },
      columns: [
        { text: "姓名", name: "username" },
        { text: "年龄", name: "age" },
        {
          text: "性别",
          name: "sex",
          format: function(value, obj) {
            return ["", "男", "女"][value];
          }
        },
        { text: "详细资料", name: "detail" }
      ],
      data: [
        { username: "张三", age: "33", sex: "1", detail: "" },
        { username: "张三", age: "33", sex: "1", detail: "" },
        { username: "张三", age: "33", sex: "1", detail: "" },
        { username: "张三", age: "33", sex: "1", detail: "" },
      ],
      pager: {
        tag: "pager",
        layout: {
          containerStyle: { marginTop: "10px" }
        }
      }
    }
  ]
};

window.dk.render([breadConfig, formConfig]);
