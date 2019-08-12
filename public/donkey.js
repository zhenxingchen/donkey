const config = {
  tag: "block",
  attr: {},
  items: [
    {
      tag: "bread",
      attr: {},
      items: [
        {
          tag: "link",
          text: "首页"
        },
        {
          tag: "span",
          text: "列表页"
        }
      ]
    },
    {
      tag: "tab",
      attr: {},
      items: []
    },
    {
      tag: "form",
      attr: {
        name: "donkeyForm",
        action: "https://www.donkey.com",
        style: {
          padding: "10px"
        }
      },
      items: [
        {
          tag: "input",
          label: "姓名",
          cols: ["lg6", "md8", "sm12"],
          attr: {
            name: "username",
            value: "张三",
            disabled: true
          }
        },
        {
          tag: "group",
          label: "性别",
          cols: ["lg6", "md8", "sm12"],
          items: [
            {
              tag: "radio",
              attr: {
                text: "男",
                name: "sex",
                value: "1",
                disabled: true
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
          cols: ["lg6", "md8", "sm12"],
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
          cols: ["lg6", "md8", "sm12"],
          attr: {
            name: "idCard",
          }
        },
        {
          tag: "input",
          label: "学号",
          cols: ["lg6", "md8", "sm12"],
          attr: {
            name: "number",
          }
        },
        {
          tag: "link",
          label: "个人相册",
          cols: ["lg6", "md8", "sm12"],
          text: "点我查看",
          attr: {
            href: "https://www.baidu.com/",
            target: "_blank"
          }
        },
        {
          tag: "group",
          label: "兴趣爱好",
          cols: ["lg6", "md8", "sm12"],
          items: [
            {
              tag: "checkbox",
              attr: {
                id: "JavaScript",
                name: "interesting",
                text: "JavaScript",
                value: "JavaScript"
              }
            },
            {
              tag: "checkbox",
              attr: {
                id: "Java",
                name: "interesting",
                text: "Java",
                value: "Java"
              }
            },
            {
              tag: "checkbox",
              attr: {
                id: "Android",
                name: "interesting",
                text: "Android",
                value: "Android"
              }
            },
            {
              tag: "checkbox",
              attr: {
                id: "IOS",
                name: "interesting",
                value: "IOS",
                text: "IOS",
                disabled: true
              }
            }
          ]
        },
        {
          tag: "select",
          label: "班级",
          cols: ["lg6", "md8", "sm12"],
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
          tag: "selects",
          label: "多选",
          cols: ["lg6", "md8", "sm12"],
        },
        {
          tag: "textarea",
          label: "文本域",
          cols: ["lg6", "md8", "sm12"],
          attr: {

          }
        },
        {
          tag: "group",
          label: " ",
          cols: ["lg6", "md8", "sm12"],
          items: [
            {
              tag: "button",
              text: "查询",
              attr: {
                className: "blue"
              }
            },
            {
              tag: "button",
              text: "导出",
              attr: {
                className: "red"
              }
            }
          ]
        },
      ],
      data: {
        sex: "1",
        interesting: ["JavaScript", "IOS"]
      },
      block: {
        attr: {},
        items: [
          {
            tag: "group",
            attr: {},
            items: [
              {
                tag: "button",
                text: "新建",
                attr: {
                  className: "blue"
                }
              },
              {
                tag: "button",
                text: "修改",
                attr: {
                  className: "green"
                }
              },
              {
                tag: "button",
                text: "删除",
                attr: {
                  className: "gray"
                }
              },
              {
                tag: "button",
                text: "禁用",
                attr: {
                  className: "red"
                }
              },
              {
                tag: "button",
                text: "导入",
                attr: {
                  className: "white"
                }
              }
            ]
          },
          {
            tag: "table",
            attr: {
              name: "pageTable",
              style: {
                margin: "10px 0"
              }
            },
            items: [
              {
                text: "第一列",
                name: "one",
                align: "center",
                width: "400px"
              },
              {
                text: "第二列",
                name: "two",
                align: "center"
              },
              {
                text: "第三列",
                name: "three",
                align: "right"
              }
            ],
            format: {
              one: function(value, rowData, rowIndex) {
                return {
                  tag: "link",
                  text: value,
                  attr: {
                    href: ""
                  }
                };
              },
              three: function (value, rowData, rowIndex) {
                return {
                  tag: "input",
                  attr: {
                    name: "three",
                    value: value
                  }
                };
              }
            },
            data: [
              { one: Date.now(), two: Date.now(), three: Date.now() },
              { one: Date.now(), two: Date.now(), three: Date.now() },
              { one: Date.now(), two: Date.now(), three: Date.now() },
              { one: Date.now(), two: Date.now(), three: Date.now() },
              { one: Date.now(), two: Date.now(), three: Date.now() },
              { one: Date.now(), two: Date.now(), three: Date.now() },
              { one: Date.now(), two: Date.now(), three: Date.now() },
              { one: Date.now(), two: Date.now(), three: Date.now() },
              { one: Date.now(), two: Date.now(), three: Date.now() },
            ],
            pager: {
              attr: {
                page: 1,
                row: 15,
                total: 108,
                jump: true,
                rowsOption: [15, 30, 50, 100],
              },
              statistic: function (page, rows, total) {
                return "";
              },
              onPageChange: function (pageCurr, pageTo) {

              },
              onRowsChange: function (rowsCurr, rowTo) {

              }
            }
          }
        ]
      }
    },
    {
      tag: "block",
      attr: {
        style: {
          padding: "5px",
          background: "#999"
        }
      },
      items: [
        {
          tag: "panel",
          attr: {
            title: "第一个始终占满横屏的面板",
            style: {
              margin: "5px"
            }
          },
          items: [
            {
              tag: "table",
              attr: {
                name: "pageTable"
              },
              items: [
                {
                  text: "第一列",
                  name: "one",
                  align: "center"
                },
                {
                  text: "第二列",
                  name: "two",
                  align: "center"
                },
                {
                  text: "第三列",
                  name: "three",
                  align: "right"
                }
              ],
              format: {
                one: function(value, rowData, rowIndex) {
                  return {
                    tag: "link",
                    text: value,
                    attr: {
                      href: ""
                    }
                  };
                },
                three: function (value, rowData, rowIndex) {
                  return {
                    tag: "input",
                    attr: {
                      name: "three",
                      value: value
                    }
                  };
                }
              },
              data: [
                { one: Date.now(), two: Date.now(), three: Date.now() },
                { one: Date.now(), two: Date.now(), three: Date.now() },
                { one: Date.now(), two: Date.now(), three: Date.now() },
                { one: Date.now(), two: Date.now(), three: Date.now() },
                { one: Date.now(), two: Date.now(), three: Date.now() },
                { one: Date.now(), two: Date.now(), three: Date.now() },
                { one: Date.now(), two: Date.now(), three: Date.now() },
                { one: Date.now(), two: Date.now(), three: Date.now() },
                { one: Date.now(), two: Date.now(), three: Date.now() },
              ],
              pager: {
                attr: {
                  page: 1,
                  row: 15,
                  total: 108,
                  jump: true,
                  rowsOption: [15, 30, 50, 100],
                },
                statistic: function (page, rows, total) {
                  return "";
                },
                onPageChange: function (pageCurr, pageTo) {

                },
                onRowsChange: function (rowsCurr, rowTo) {

                }
              }
            }
          ]
        },
        {
          tag: "panel",
          cols: ["md12"],
          attr: {
            title: "第二个面板",
            style: {
              margin: "5px"
            }
          },
          items: [
            {
              tag: "table",
              attr: {
                name: "pageTable"
              },
              items: [
                {
                  text: "第一列",
                  name: "one",
                  align: "center"
                },
                {
                  text: "第二列",
                  name: "two",
                  align: "center"
                },
                {
                  text: "第三列",
                  name: "three",
                  align: "right"
                }
              ],
              format: {
                one: function(value, rowData, rowIndex) {
                  return {
                    tag: "link",
                    text: value,
                    attr: {
                      href: ""
                    }
                  };
                },
                three: function (value, rowData, rowIndex) {
                  return {
                    tag: "input",
                    attr: {
                      name: "three",
                      value: value
                    }
                  };
                }
              },
              data: [
                { one: Date.now(), two: Date.now(), three: Date.now() },
                { one: Date.now(), two: Date.now(), three: Date.now() },
                { one: Date.now(), two: Date.now(), three: Date.now() },
                { one: Date.now(), two: Date.now(), three: Date.now() },
                { one: Date.now(), two: Date.now(), three: Date.now() },
                { one: Date.now(), two: Date.now(), three: Date.now() },
                { one: Date.now(), two: Date.now(), three: Date.now() },
                { one: Date.now(), two: Date.now(), three: Date.now() },
                { one: Date.now(), two: Date.now(), three: Date.now() },
              ],
              pager: {
                attr: {
                  page: 1,
                  row: 15,
                  total: 108,
                  jump: true,
                  rowsOption: [15, 30, 50, 100],
                },
                statistic: function (page, rows, total) {
                  return "";
                },
                onPageChange: function (pageCurr, pageTo) {

                },
                onRowsChange: function (rowsCurr, rowTo) {

                }
              }
            }
          ]
        },
        {
          tag: "panel",
          cols: ["md12"],
          attr: {
            title: "第三个面板",
            style: {
              margin: "5px"
            }
          },
          items: [
            {
              tag: "table",
              attr: {
                name: "pageTable"
              },
              items: [
                {
                  text: "第一列",
                  name: "one",
                  align: "center"
                },
                {
                  text: "第二列",
                  name: "two",
                  align: "center"
                },
                {
                  text: "第三列",
                  name: "three",
                  align: "right"
                }
              ],
              format: {
                one: function(value, rowData, rowIndex) {
                  return {
                    tag: "link",
                    text: value,
                    attr: {
                      href: ""
                    }
                  };
                },
                three: function (value, rowData, rowIndex) {
                  return {
                    tag: "input",
                    attr: {
                      name: "three",
                      value: value
                    }
                  };
                }
              },
              data: [
                { one: Date.now(), two: Date.now(), three: Date.now() },
                { one: Date.now(), two: Date.now(), three: Date.now() },
                { one: Date.now(), two: Date.now(), three: Date.now() },
                { one: Date.now(), two: Date.now(), three: Date.now() },
                { one: Date.now(), two: Date.now(), three: Date.now() },
                { one: Date.now(), two: Date.now(), three: Date.now() },
                { one: Date.now(), two: Date.now(), three: Date.now() },
                { one: Date.now(), two: Date.now(), three: Date.now() },
                { one: Date.now(), two: Date.now(), three: Date.now() },
              ],
              pager: {
                attr: {
                  page: 1,
                  row: 15,
                  total: 108,
                  jump: true,
                  rowsOption: [15, 30, 50, 100],
                },
                statistic: function (page, rows, total) {
                  return "";
                },
                onPageChange: function (pageCurr, pageTo) {

                },
                onRowsChange: function (rowsCurr, rowTo) {

                }
              }
            }
          ]
        },
        {
          tag: "panel",
          cols: ["md8", "sm12"],
          attr: {
            title: "第四个面板",
            style: {
              margin: "5px"
            }
          },
          items: [
            {
              tag: "table",
              attr: {
                name: "pageTable"
              },
              items: [
                {
                  text: "第一列",
                  name: "one",
                  align: "center"
                },
                {
                  text: "第二列",
                  name: "two",
                  align: "center"
                },
                {
                  text: "第三列",
                  name: "three",
                  align: "right"
                }
              ],
              format: {
                one: function(value, rowData, rowIndex) {
                  return {
                    tag: "link",
                    text: value,
                    attr: {
                      href: ""
                    }
                  };
                },
                three: function (value, rowData, rowIndex) {
                  return {
                    tag: "input",
                    attr: {
                      name: "three",
                      value: value
                    }
                  };
                }
              },
              data: [
                { one: Date.now(), two: Date.now(), three: Date.now() },
                { one: Date.now(), two: Date.now(), three: Date.now() },
                { one: Date.now(), two: Date.now(), three: Date.now() },
                { one: Date.now(), two: Date.now(), three: Date.now() },
                { one: Date.now(), two: Date.now(), three: Date.now() },
                { one: Date.now(), two: Date.now(), three: Date.now() },
                { one: Date.now(), two: Date.now(), three: Date.now() },
                { one: Date.now(), two: Date.now(), three: Date.now() },
                { one: Date.now(), two: Date.now(), three: Date.now() },
              ],
              pager: {
                attr: {
                  page: 1,
                  row: 15,
                  total: 108,
                  jump: true,
                  rowsOption: [15, 30, 50, 100],
                },
                statistic: function (page, rows, total) {
                  return "";
                },
                onPageChange: function (pageCurr, pageTo) {

                },
                onRowsChange: function (rowsCurr, rowTo) {

                }
              }
            }
          ]
        },
        {
          tag: "panel",
          cols: ["md8", "sm12"],
          attr: {
            title: "第五个面板",
            style: {
              margin: "5px"
            }
          },
          items: [
            {
              tag: "table",
              attr: {
                name: "pageTable"
              },
              items: [
                {
                  text: "第一列",
                  name: "one",
                  align: "center"
                },
                {
                  text: "第二列",
                  name: "two",
                  align: "center"
                },
                {
                  text: "第三列",
                  name: "three",
                  align: "right"
                }
              ],
              format: {
                one: function(value, rowData, rowIndex) {
                  return {
                    tag: "link",
                    text: value,
                    attr: {
                      href: ""
                    }
                  };
                },
                three: function (value, rowData, rowIndex) {
                  return {
                    tag: "input",
                    attr: {
                      name: "three",
                      value: value
                    }
                  };
                }
              },
              data: [
                { one: Date.now(), two: Date.now(), three: Date.now() },
                { one: Date.now(), two: Date.now(), three: Date.now() },
                { one: Date.now(), two: Date.now(), three: Date.now() },
                { one: Date.now(), two: Date.now(), three: Date.now() },
                { one: Date.now(), two: Date.now(), three: Date.now() },
                { one: Date.now(), two: Date.now(), three: Date.now() },
                { one: Date.now(), two: Date.now(), three: Date.now() },
                { one: Date.now(), two: Date.now(), three: Date.now() },
                { one: Date.now(), two: Date.now(), three: Date.now() },
              ],
              pager: {
                attr: {
                  page: 1,
                  row: 15,
                  total: 108,
                  jump: true,
                  rowsOption: [15, 30, 50, 100],
                },
                statistic: function (page, rows, total) {
                  return "";
                },
                onPageChange: function (pageCurr, pageTo) {

                },
                onRowsChange: function (rowsCurr, rowTo) {

                }
              }
            }
          ]
        },
        {
          tag: "panel",
          cols: ["md8", "sm24"],
          attr: {
            title: "第六个面板",
            style: {
              margin: "5px"
            }
          },
          items: [
            {
              tag: "table",
              attr: {
                name: "pageTable"
              },
              items: [
                {
                  text: "第一列",
                  name: "one",
                  align: "center"
                },
                {
                  text: "第二列",
                  name: "two",
                  align: "center"
                },
                {
                  text: "第三列",
                  name: "three",
                  align: "right"
                }
              ],
              format: {
                one: function(value, rowData, rowIndex) {
                  return {
                    tag: "link",
                    text: value,
                    attr: {
                      href: ""
                    }
                  };
                },
                three: function (value, rowData, rowIndex) {
                  return {
                    tag: "input",
                    attr: {
                      name: "three",
                      value: value
                    }
                  };
                }
              },
              data: [
                { one: Date.now(), two: Date.now(), three: Date.now() },
                { one: Date.now(), two: Date.now(), three: Date.now() },
                { one: Date.now(), two: Date.now(), three: Date.now() },
                { one: Date.now(), two: Date.now(), three: Date.now() },
                { one: Date.now(), two: Date.now(), three: Date.now() },
                { one: Date.now(), two: Date.now(), three: Date.now() },
                { one: Date.now(), two: Date.now(), three: Date.now() },
                { one: Date.now(), two: Date.now(), three: Date.now() },
                { one: Date.now(), two: Date.now(), three: Date.now() },
              ],
              pager: {
                attr: {
                  page: 1,
                  row: 15,
                  total: 108,
                  jump: true,
                  rowsOption: [15, 30, 50, 100],
                },
                statistic: function (page, rows, total) {
                  return "";
                },
                onPageChange: function (pageCurr, pageTo) {

                },
                onRowsChange: function (rowsCurr, rowTo) {

                }
              }
            }
          ]
        },
        {
          tag: "panel",
          cols: ["lg6", "md8", "sm12"],
          attr: {
            title: "第七个面板",
            style: {
              margin: "5px"
            }
          },
          items: [
            {
              tag: "table",
              attr: {
                name: "pageTable"
              },
              items: [
                {
                  text: "第一列",
                  name: "one",
                  align: "center"
                },
                {
                  text: "第二列",
                  name: "two",
                  align: "center"
                },
                {
                  text: "第三列",
                  name: "three",
                  align: "right"
                }
              ],
              format: {
                one: function(value, rowData, rowIndex) {
                  return {
                    tag: "link",
                    text: value,
                    attr: {
                      href: ""
                    }
                  };
                },
                three: function (value, rowData, rowIndex) {
                  return {
                    tag: "input",
                    attr: {
                      name: "three",
                      value: value
                    }
                  };
                }
              },
              data: [
                { one: Date.now(), two: Date.now(), three: Date.now() },
                { one: Date.now(), two: Date.now(), three: Date.now() },
                { one: Date.now(), two: Date.now(), three: Date.now() },
                { one: Date.now(), two: Date.now(), three: Date.now() },
                { one: Date.now(), two: Date.now(), three: Date.now() },
                { one: Date.now(), two: Date.now(), three: Date.now() },
                { one: Date.now(), two: Date.now(), three: Date.now() },
                { one: Date.now(), two: Date.now(), three: Date.now() },
                { one: Date.now(), two: Date.now(), three: Date.now() },
              ],
              pager: {
                attr: {
                  page: 1,
                  row: 15,
                  total: 108,
                  jump: true,
                  rowsOption: [15, 30, 50, 100],
                },
                statistic: function (page, rows, total) {
                  return "";
                },
                onPageChange: function (pageCurr, pageTo) {

                },
                onRowsChange: function (rowsCurr, rowTo) {

                }
              }
            }
          ]
        },
        {
          tag: "panel",
          cols: ["lg6", "md8", "sm12"],
          attr: {
            title: "第八个快",
            style: {
              margin: "5px"
            }
          },
          items: [
            {
              tag: "table",
              attr: {
                name: "pageTable"
              },
              items: [
                {
                  text: "第一列",
                  name: "one",
                  align: "center"
                },
                {
                  text: "第二列",
                  name: "two",
                  align: "center"
                },
                {
                  text: "第三列",
                  name: "three",
                  align: "right"
                }
              ],
              format: {
                one: function(value, rowData, rowIndex) {
                  return {
                    tag: "link",
                    text: value,
                    attr: {
                      href: ""
                    }
                  };
                },
                three: function (value, rowData, rowIndex) {
                  return {
                    tag: "input",
                    attr: {
                      name: "three",
                      value: value
                    }
                  };
                }
              },
              data: [
                { one: Date.now(), two: Date.now(), three: Date.now() },
                { one: Date.now(), two: Date.now(), three: Date.now() },
                { one: Date.now(), two: Date.now(), three: Date.now() },
                { one: Date.now(), two: Date.now(), three: Date.now() },
                { one: Date.now(), two: Date.now(), three: Date.now() },
                { one: Date.now(), two: Date.now(), three: Date.now() },
                { one: Date.now(), two: Date.now(), three: Date.now() },
                { one: Date.now(), two: Date.now(), three: Date.now() },
                { one: Date.now(), two: Date.now(), three: Date.now() },
              ],
              pager: {
                attr: {
                  page: 1,
                  row: 15,
                  total: 108,
                  jump: true,
                  rowsOption: [15, 30, 50, 100],
                },
                statistic: function (page, rows, total) {
                  return "";
                },
                onPageChange: function (pageCurr, pageTo) {

                },
                onRowsChange: function (rowsCurr, rowTo) {

                }
              }
            }
          ]
        },
        {
          tag: "panel",
          cols: ["lg6", "md8", "sm12"],
          attr: {
            title: "第九个面板",
            style: {
              margin: "5px"
            }
          },
          items: [
            {
              tag: "table",
              attr: {
                name: "pageTable"
              },
              items: [
                {
                  text: "第一列",
                  name: "one",
                  align: "center"
                },
                {
                  text: "第二列",
                  name: "two",
                  align: "center"
                },
                {
                  text: "第三列",
                  name: "three",
                  align: "right"
                }
              ],
              format: {
                one: function(value, rowData, rowIndex) {
                  return {
                    tag: "link",
                    text: value,
                    attr: {
                      href: ""
                    }
                  };
                },
                three: function (value, rowData, rowIndex) {
                  return {
                    tag: "input",
                    attr: {
                      name: "three",
                      value: value
                    }
                  };
                }
              },
              data: [
                { one: Date.now(), two: Date.now(), three: Date.now() },
                { one: Date.now(), two: Date.now(), three: Date.now() },
                { one: Date.now(), two: Date.now(), three: Date.now() },
                { one: Date.now(), two: Date.now(), three: Date.now() },
                { one: Date.now(), two: Date.now(), three: Date.now() },
                { one: Date.now(), two: Date.now(), three: Date.now() },
                { one: Date.now(), two: Date.now(), three: Date.now() },
                { one: Date.now(), two: Date.now(), three: Date.now() },
                { one: Date.now(), two: Date.now(), three: Date.now() },
              ],
              pager: {
                attr: {
                  page: 1,
                  row: 15,
                  total: 108,
                  jump: true,
                  rowsOption: [15, 30, 50, 100],
                },
                statistic: function (page, rows, total) {
                  return "";
                },
                onPageChange: function (pageCurr, pageTo) {

                },
                onRowsChange: function (rowsCurr, rowTo) {

                }
              }
            }
          ]
        },
        {
          tag: "panel",
          cols: ["lg6", "md8", "sm12"],
          attr: {
            title: "第十个面板",
            style: {
              margin: "5px"
            }
          },
          items: [
            {
              tag: "tab",
              attr: {},
              items: []
            }
          ]
        }
      ]
    }
  ]
};

window.dk.start(config);
