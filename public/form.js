var breadConfig = {
  tag: "bread",
  split: ">",
  items: [
    { tag: "icon", name: "fa-coffee" },
    { tag: "span", text: "实验室" },
    { tag: "icon", name: "fa-coffee" },
    { tag: "span", text: "表单" },
    { tag: "icon", name: "fa-coffee" },
  ]
};

var formConfig = {
  tag: "form",
  name: "searchForm",
  action: "https://www.some.com",
  method: "post",
  containerStyle: {
    padding: "15px 10px"
  },
  items: [
    {
      tag: "div",
      items: [
        {
          tag: "input",
          label: "姓名",
          cols: "lg6 md8 sm12 xs24",
          name: "username",
          value: "zhangsan",
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
              text: "男",
              name: "sex",
              value: "1",
              rootStyle: {
                marginRight: "10px"
              }
            },
            {
              tag: "radio",
              text: "女",
              name: "sex",
              value: "2"
            }
          ]
        },
        {
          tag: "input",
          label: "年龄",
          cols: "lg6 md8 sm12 xs24",
          name: "age",
          value: "23",
          type: "number"
        },
        {
          tag: "input",
          label: "密码",
          cols: "lg6 md8 sm12 xs24",
          name: "password",
          value: "zhangsan",
          type: "password"
        },
        {
          tag: "input",
          label: "邮箱",
          cols: "lg6 md8 sm12 xs24",
          name: "email",
          value: "zhangsan",
          type: "email"
        },
        {
          tag: "select",
          label: "班级",
          cols: "lg6 md8 sm12 xs24",
          name: "class",
          value: "zhangsan",
          placeholder: "请选择班级",
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
                  name: "fa-upload"
                },
                {
                  tag: "span",
                  text: "上传",
                  rootStyle: { marginLeft: "5px" }
                }
              ]
            }
          ]
        },
        {
          tag: "img",
          label: "头像",
          cols: "lg6 md8 sm12 xs24",
          src: "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=4230941942,666991723&fm=58",
          height: "33px"
        },
        {
          tag: "span",
          label: "状态",
          text: "正常",
          cols: "lg6 md8 sm12 xs24",
          containerStyle: { color: "#888" },
          items: [
            {
              tag: "icon",
              name: "fa-info"
            },
            {
              tag: "span",
              text: "正常",
              rootStyle: { marginLeft: "5px" }
            }
          ]
        },
        {
          tag: "link",
          label: "详细资料",
          text: "点击查看",
          cols: "lg6 md8 sm12 xs24",
          href: "https://www.baidu.com",
          target: "_blank",
          items: [
            {
              tag: "icon",
              name: "fa-address-card"
            },
            {
              tag: "span",
              text: "点击查看",
              rootStyle: { marginLeft: "10px" }
            }
          ]
        },
        {
          tag: "switch",
          label: "三好学生",
          cols: "lg6 md8 sm12 xs24",
          name: "good"
        },
        {
          tag: "group",
          label: "专业课",
          cols: "lg12 md12 sm12 xs24",
          items: [
            {
              tag: "checkbox",
              text: "物理",
              name: "professional",
              value: "1",
              rootStyle: {
                marginRight: "15px"
              }
            },
            {
              tag: "checkbox",
              text: "化学",
              name: "professional",
              value: "2",
              rootStyle: {
                marginRight: "15px"
              }
            },
            {
              tag: "checkbox",
              text: "生物",
              name: "professional",
              value: "3",
              rootStyle: {
                marginRight: "15px"
              }
            },
            {
              tag: "checkbox",
              text: "地理",
              name: "professional",
              value: "4",
              rootStyle: {
                marginRight: "15px"
              }
            },
            {
              tag: "checkbox",
              text: "历史",
              name: "professional",
              value: "5",
              rootStyle: {
                marginRight: "15px"
              }
            },
            {
              tag: "checkbox",
              text: "政治",
              name: "professional",
              value: "6"
            }
          ]
        },
      ]
    },
    {
      tag: "group",
      containerStyle: {
        textAlign: "center",
        marginBottom: "20px"
      },
      items: [
        {
          tag: "button",
          text: "保存",
          type: "submit",
          color: "blue",
          rootStyle: {
            marginRight: "10px"
          },
          items: [
            {
              tag: "span",
              text: "查询",
              rootStyle: { marginRight: "10px" }
            },
            {
              tag: "icon",
              name: "fa-search"
            }
          ]
        },
        {
          tag: "button",
          text: "重置",
          type: "reset",
          color: "white"
        }
      ]
    },
    {
      tag: "table",
      checkType: "checkbox",
      toolbar: {
        tag: "group",
        containerStyle: {
          marginBottom: "10px"
        },
        items: [
          {
            tag: "button",
            text: "新建",
            color: "blue",
            rootStyle: {
              marginRight: "10px"
            }
          },
          {
            tag: "button",
            text: "编辑",
            color: "blue",
            rootStyle: {
              marginRight: "10px"
            }
          },
          {
            tag: "button",
            text: "删除",
            color: "blue"
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
        {
          text: "详细资料",
          name: "detail",
          format: function(value, obj) {
            return {
              tag: "link",
              items: [
                {
                  tag: "icon",
                  attr: {
                    name: "fa-address-card"
                  }
                },
                {
                  tag: "span",
                  text: "查看",
                  layout: {
                    rootStyle: { marginLeft: "10px" }
                  }
                }
              ]
            };
          }
        }
      ],
      data: [
        { username: "张三", age: "33", sex: "1", detail: "" },
        { username: "张三", age: "33", sex: "1", detail: "" },
        { username: "张三", age: "33", sex: "1", detail: "" },
        { username: "张三", age: "33", sex: "1", detail: "" },
      ],
      pager: {
        tag: "pager",
        containerStyle: { marginTop: "10px" }
      }
    }
  ]
};

var pageConfig = [breadConfig, formConfig];

window.dk.render(pageConfig);
