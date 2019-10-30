const prefix = "dk";
const prefixInner = "____";

export default {
  // base
  cls: {
    prefix: prefix,
    prefixInner: prefixInner
  },
  // icon
  icon: {
    arrow: {
      main: `${prefix}-icon-arrow`,
      up: `${prefixInner}up`,
      right: `${prefixInner}right`,
      down: `${prefixInner}down`,
      left: `${prefixInner}left`
    },
    arrowY: {
      main: `${prefix}-icon-arrow-y`,
      down: `${prefixInner}down`,
      up: `${prefixInner}up`
    },
    arrowX: {
      main: `${prefix}-icon-arrow-x`,
      right: `${prefixInner}right`,
      left: `${prefixInner}left`
    },
    angle: {
      main: `${prefix}-icon-angle`,
      up: `${prefixInner}up`,
      right: `${prefixInner}right`,
      down: `${prefixInner}down`,
      left: `${prefixInner}left`
    },
    check: {
      main: `${prefix}-icon-check`
    },
    close: {
      main: `${prefix}-icon-close`
    },
    checkbox: {
      main: `${prefix}-icon-check-box`,
      circle: `${prefixInner}circle`,
      line: `${prefixInner}check-line`,
      fill: `${prefixInner}check-fill`,
      disabled: `${prefixInner}disabled`
    },
    radio: {
      main: `${prefix}-icon-check-radio`,
      checked: `${prefixInner}checked`,
      disabled: `${prefixInner}disabled`
    },
    fold: {
      main: `${prefix}-icon-fold`,
      open: `${prefixInner}open`
    }
  },
  // btn
  btn: {
    main: `${prefix}-btn`,
    blue: `${prefixInner}blue`,
    red: `${prefixInner}red`,
    green: `${prefixInner}green`,
    gray: `${prefixInner}gray`,
    white: `${prefixInner}white`
  }
}