const config = {
  form: {
    attr: {
      name: "donkeyForm",
      action: "https://www.donkey.com"
    },
    items: [
      {
        tag: "input",
        label: "姓名",
        cols: 6,
        attr: {
          name: "username",
          value: "张三",
          disabled: true
        }
      },
      {
        tag: "group",
        label: "性别",
        cols: 6,
        items: [
          {
            tag: "radio",
            label: "男",
            attr: {
              name: "sex",
              value: "1",
              disabled: true
            }
          },
          {
            tag: "radio",
            label: "女",
            attr: {
              name: "sex",
              value: "2"
            }
          }
        ]
      },
      {
        tag: "input",
        label: "年龄",
        cols: 6,
        attr: {
          name: "age",
          value: "123"
        },
        onBlur: function (target) {
          console.log(this, target, target.value);
        }
      },
      {
        tag: "input",
        label: "身份证号码",
        cols: 6,
        attr: {
          name: "idCard",
        }
      },
      {
        tag: "input",
        label: "学号",
        cols: 12,
        attr: {
          name: "number",
        }
      },
      {
        tag: "group",
        label: "兴趣爱好",
        cols: 12,
        items: [
          {
            tag: "checkbox",
            label: "JavaScript",
            attr: {
              id: "JavaScript",
              name: "interesting",
              value: "JavaScript"
            }
          },
          {
            tag: "checkbox",
            label: "Java",
            attr: {
              id: "Java",
              name: "interesting",
              value: "Java"
            }
          },
          {
            tag: "checkbox",
            label: "Android",
            attr: {
              id: "Android",
              name: "interesting",
              value: "Android"
            }
          },
          {
            tag: "checkbox",
            label: "IOS",
            attr: {
              id: "IOS",
              name: "interesting",
              value: "IOS",
              disabled: true
            }
          }
        ]
      },
      {
        tag: "select",
        label: "班级",
        cols: 6,
        attr: {
          name: "clazz"
        },
        ajax: {},
        onChange: function (text) {
        },
        onSelect: function (target) {
        },
        options: [
          {
            text: "三年一班",
            value: "1"
          },
          {
            text: "三年二班",
            value: "2"
          },
          {
            text: "三年三班",
            value: "3"
          },
          {
            text: "三年四班",
            value: "4"
          },
          {
            text: "三年五班",
            value: "5"
          },
          {
            text: "三年六班",
            value: "6"
          },
          {
            text: "三年七班",
            value: "7"
          },
          {
            text: "三年八班",
            value: "8"
          }
        ]
      },
      {
        tag: "group",
        label: " ",
        attr: {},
        items: [
          {
            tag: "button",
            text: "保存",
            attr: {
              className: "dk-btn-primary"
            }
          },
          {
            tag: "button",
            text: "保存",
            attr: {
              className: "dk-btn-danger"
            }
          }
        ]
      },
      {
        tag: "textarea",
        label: "文本域",
        attr: {

        }
      }
    ],
    data: {
      sex: "1",
      interesting: ["JavaScript", "IOS"]
    }
  }
};

window.dk.start(config);