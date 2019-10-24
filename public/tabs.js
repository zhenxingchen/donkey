const tabConfig = {
  tag: "tabs",
  attr: {
    selected: "1"
  },
  items: [
    {
      tag: "tab",
      attr: {
        id: "1",
        text: "页签一"
      },
      layout: {
        containerStyle: {
          margin: "10px"
        }
      },
      items: [
        {
          tag: "form",
          attr: {},
          items: [
            {
              tag: "input",
              label: "姓名",
              cols: "md6"
            },
            {
              tag: "input",
              label: "密码",
              cols: "md6"
            }
          ]
        }
      ]
    },
    {
      tag: "tab",
      attr: {
        id: "2",
        text: "页签二",
        disabled: true
      },
      items: [
        {
          tag: "table"
        }
      ]
    },
    {
      tag: "tab",
      attr: {
        id: "3",
        text: "页签三"
      },
      layout: {
        containerStyle: {
          margin: "10px"
        }
      },
      items: [
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
            { username: "张三", age: "33", sex: "1", detail: "" }
          ],
          pager: {
            tag: "pager",
            layout: {
              containerStyle: { marginTop: "10px" }
            }
          }
        }
      ]
    }
  ]
};

window.dk.render(tabConfig);
