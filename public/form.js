"use.strict";
const config = {
  tag: "form",
  attr: {
    name: "searchForm",
    action: "https://www.some.com",
    method: "post"
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
      cols: "lg6 md8 sm12 xs24"
    },
    {
      tag: "img",
      label: "头像",
      cols: "lg6 md8 sm12 xs24",
      attr: {
        src: "http://img3.duitang.com/uploads/item/201507/23/20150723115018_ma428.thumb.700_0.jpeg",
        height: "40px"
      }
    },
    {
      tag: "span",
      label: "状态",
      text: "正常",
      cols: "lg6 md8 sm12 xs24"
    },
    {
      tag: "link",
      label: "详细资料",
      text: "点击查看",
      cols: "lg6 md8 sm12 xs24"
    },
    {
      tag: "group",
      label: "专业课",
      cols: "lg6 md8 sm12 xs24",
      items: [
        {
          tag: "checkbox",
          attr: {
            text: "物理",
            name: "professional",
            value: "1"
          }
        },
        {
          tag: "checkbox",
          attr: {
            text: "化学",
            name: "professional",
            value: "2"
          }
        },
        {
          tag: "checkbox",
          attr: {
            text: "生物",
            name: "professional",
            value: "3"
          }
        },
        {
          tag: "checkbox",
          attr: {
            text: "地理",
            name: "professional",
            value: "4"
          }
        },
        {
          tag: "checkbox",
          attr: {
            text: "历史",
            name: "professional",
            value: "5"
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
          textAlign: "center",
          margin: "15px 0"
        }
      },
      items: [
        {
          tag: "button",
          text: "保存",
          attr: {
            type: "submit",
            color: "blue"
          }
        },
        {
          tag: "button",
          text: "重置",
          attr: {
            type: "reset",
            color: "red",
            disabled: true
          }
        }
      ]
    },
    {
      tag: "table",

    }
  ],
};

window.dk.start(config);
