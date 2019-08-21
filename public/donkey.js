const breadConfig = {
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
};
const tableToolbar = {
  tag: "block",
  attr: {
    className: "mt10 mb10 tal"
  },
  items: [
    {
      tag: "button",
      text: "新建",
      attr: {
        className: "blue mr10"
      }
    },
    {
      tag: "button",
      text: "修改",
      attr: {
        className: "green mr10"
      }
    },
    {
      tag: "button",
      text: "删除",
      attr: {
        className: "gray mr10"
      }
    },
    {
      tag: "button",
      text: "禁用",
      attr: {
        className: "red mr10",
        disabled: true
      }
    },
    {
      tag: "button",
      text: "导入",
      attr: {
        className: "white mr10"
      }
    }
  ]
};
const tablePager = {
  attr: {
    page: 1,
    row: 15,
    total: 108,
    jump: true,
    rowsOption: [15, 30, 50, 100],
    className: "mt10 tal"
  },
  statistic: function (page, rows, total) {
    return "";
  },
  onPageChange: function (pageCurr, pageTo) {

  },
  onRowsChange: function (rowsCurr, rowTo) {

  }
};
const tableChildrenData = [
  {
    id: "1",
    semester: "2019 上学期",
    subject: "语文",
    record: 98
  },
  {
    id: "2",
    semester: "2019 上学期",
    subject: "数学",
    record: 98
  },
  {
    id: "3",
    semester: "2019 上学期",
    subject: "英语",
    record: 98
  }
];
const tableChildrenConfig = {
  tag: "table",
  attr: {
    checkField: "id",
    checkType: "checkbox",
    className: "mb10 ml10 mr10"
  },
  toolbar: tableToolbar,
  columns: [
    {
      text: "学期",
      name: "semester",
    },
    {
      text: "科目",
      name: "subject",
    },
    {
      text: "成绩",
      name: "record",
    }
  ],
  pager: tablePager
};
const tableConfig = {
  tag: "table",
  attr: {
    name: "normalTable",
    checkType: "checkbox",
    checkField: "id",
    className: "mt10 mb10"
  },
  toolbar: tableToolbar,
  columns: [
    {
      text: "学号",
      name: "schoolNo",
      align: "center"
    },
    {
      text: "姓名",
      name: "username",
      align: "center"
    },
    {
      text: "年龄",
      name: "age",
      align: "right"
    }
  ],
  format: {
    schoolNo: function(value, rowData, rowIndex) {
      return {
        tag: "link",
        text: value,
        attr: {
          href: ""
        }
      };
    },
    username: function (value, rowData, rowIndex) {
      return {
        tag: "input",
        attr: {
          name: "username",
          value: value
        }
      };
    },
    age: function (value, rowData, rowIndex) {
      return {
        tag: "input",
        attr: {
          name: "age",
          value: value
        }
      };
    }
  },
  children: tableChildrenConfig,
  data: [
    { id: 1, schoolNo: Date.now(), username: Date.now(), age: Date.now(), children: tableChildrenData },
    { id: 2, schoolNo: Date.now(), username: Date.now(), age: Date.now(), children: tableChildrenData },
    { id: 3, schoolNo: Date.now(), username: Date.now(), age: Date.now(), children: tableChildrenData },
    { id: 4, schoolNo: Date.now(), username: Date.now(), age: Date.now(), children: tableChildrenData },
    { id: 5, schoolNo: Date.now(), username: Date.now(), age: Date.now(), children: tableChildrenData },
    { id: 6, schoolNo: Date.now(), username: Date.now(), age: Date.now(), children: tableChildrenData },
    { id: 7, schoolNo: Date.now(), username: Date.now(), age: Date.now(), children: tableChildrenData },
    { id: 8, schoolNo: Date.now(), username: Date.now(), age: Date.now(), children: tableChildrenData },
    { id: 9, schoolNo: Date.now(), username: Date.now(), age: Date.now(), children: tableChildrenData },
  ],
  pager: tablePager
};

const tableParentAndChildConfig = {
  tag: "table",
  attr: {
    name: "parentAndChildTable",
    checkField: "id",
    checkType: "checkbox",
  },
  columns: [
    {
      text: "姓名",
      name: "username"
    },
    {
      text: "性别",
      name: "sex"
    },
    {
      text: "年龄",
      name: "age"
    }
  ],
  data: [
    {
      username: "陈振兴",
      sex: "1",
      age: "32",
      children: [
        {
          semester: "2018",
          subjects: "语文",
          record: "112"
        },
        {
          semester: "2018",
          subjects: "数学",
          record: "124"
        },
        {
          semester: "2018",
          subjects: "数学",
          record: "124"
        }
      ]
    }
  ],
  children: {
    tag: "table",
    attr: {

    },
    columns: [
      {
        text: "学期",
        name: "semester"
      },
      {
        text: "科目",
        name: "subjects"
      },
      {
        text: "成绩",
        name: "record"
      }
    ]
  }
}

const formItems = [
  {
    tag: "input",
    label: "姓名",
    cols: "lg6 md8 sm12",
    attr: {
      name: "username",
      value: "张三",
      disabled: true
    }
  },
  {
    tag: "group",
    label: "性别",
    cols: "lg6 md8 sm12",
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
    cols: "lg6 md8 sm12",
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
    cols: "lg6 md8 sm12",
    attr: {
      name: "idCard",
    }
  },
  {
    tag: "input",
    label: "学号",
    cols: "lg6 md8 sm12",
    attr: {
      name: "number",
    }
  },
  {
    tag: "link",
    label: "个人相册",
    cols: "lg6 md8 sm12",
    text: "点我查看",
    attr: {
      href: "https://www.baidu.com/",
      target: "_blank"
    }
  },
  {
    tag: "group",
    label: "兴趣爱好",
    cols: "lg6 md8 sm12",
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
    cols: "lg6 md8 sm12",
    attr: {
      name: "clazz"
    },
    ajax: {},
    onChange: function (text) {
    },
    onSelect: function (target) {
    },
    data: [
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
    tag: "textarea",
    label: "文本域",
    cols: "lg6 md8 sm12",
    attr: {

    }
  },
  {
    tag: "group",
    label: " ",
    cols: "lg6 md8 sm12",
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
];

const tabConfig = {
  tag: "tab",
  attr: {},
  items: []
};

const config = {
  tag: "block",
  attr: {},
  items: [
    breadConfig,
    tabConfig,
    {
      tag: "form",
      attr: {
        name: "donkeyForm",
        action: "https://www.donkey.com",
        className: "p10"
      },
      items: formItems,
      block: {
        attr: {},
        items: [ tableConfig ]
      },
      data: {
        sex: "1",
        interesting: ["JavaScript", "IOS"]
      },
    },
    {
      tag: "block",
      attr: {
        style: {
          padding: "5px 3px",
          background: "#666"
        }
      },
      items: [
        {
          tag: "panel",
          attr: {
            style: {
              margin: "5px"
            }
          },
          items: [ tabConfig ]
        },
        {
          tag: "panel",
          cols: "md12",
          attr: {
            title: "第 2 个面板",
            className: "m5"
          },
          items: []
        },
        {
          tag: "panel",
          cols: "md12",
          attr: {
            title: "第 3 个面板",
            className: "m5"
          },
          items: []
        },
        {
          tag: "panel",
          cols: "md8 sm12",
          attr: {
            title: "第 4 个面板",
            className: "m5"
          },
          items: []
        },
        {
          tag: "panel",
          cols: "md8 sm12",
          attr: {
            title: "第 5 个面板",
            className: "m5"
          },
          items: []
        },
        {
          tag: "panel",
          cols: "md8 sm24",
          attr: {
            title: "第 6 个面板",
            className: "m5"
          },
          items: []
        },
        {
          tag: "panel",
          cols: "lg6 md8 sm12",
          attr: {
            title: "第 7 个面板",
            className: "m5"
          },
          items: []
        },
        {
          tag: "panel",
          cols: "lg6 md8 sm12",
          attr: {
            title: "第 8 个快",
            className: "m5"
          },
          items: []
        },
        {
          tag: "panel",
          cols: "lg6 md8 sm12",
          attr: {
            title: "第 9 个面板",
            className: "m5"
          },
          items: []
        },
        {
          tag: "panel",
          cols: "lg6 md8 sm12",
          attr: {
            title: "第 10 个面板",
            className: "m5"
          },
          items: []
        }
      ]
    }
  ]
};

window.dk.start(config);
