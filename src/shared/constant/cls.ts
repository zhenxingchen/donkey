import { PREFIX, PREFIX_INNER } from "@shared/constant/prefix";

const CLS = {
  form: {
    item: `${PREFIX}-form-item`
  },
  btn: {
    main: `${PREFIX}-btn`,
    blue: `${PREFIX_INNER}blue`,
    red: `${PREFIX_INNER}red`,
    green: `${PREFIX_INNER}green`,
    gray: `${PREFIX_INNER}gray`,
    white: `${PREFIX_INNER}white`,
    disabled: `${PREFIX_INNER}disabled`
  },
  icon: {
    arrow: {
      main: `${PREFIX}-icon-arrow`,
      up: `${PREFIX_INNER}up`,
      right: `${PREFIX_INNER}right`,
      down: `${PREFIX_INNER}down`,
      left: `${PREFIX_INNER}left`,
      disabled: `${PREFIX_INNER}disabled`
    },
    arrowY: {
      main: `${PREFIX}-icon-arrow-y`,
      down: `${PREFIX_INNER}down`,
      up: `${PREFIX_INNER}up`,
      disabled: `${PREFIX_INNER}disabled`
    },
    arrowX: {
      main: `${PREFIX}-icon-arrow-x`,
      right: `${PREFIX_INNER}right`,
      left: `${PREFIX_INNER}left`,
      disabled: `${PREFIX_INNER}disabled`
    },
    angle: {
      main: `${PREFIX}-icon-angle`,
      up: `${PREFIX_INNER}up`,
      right: `${PREFIX_INNER}right`,
      down: `${PREFIX_INNER}down`,
      left: `${PREFIX_INNER}left`,
      disabled: `${PREFIX_INNER}disabled`
    },
    check: {
      main: `${PREFIX}-icon-check`,
      disabled: `${PREFIX_INNER}disabled`
    },
    close: {
      main: `${PREFIX}-icon-close`,
      disabled: `${PREFIX_INNER}disabled`
    },
    checkbox: {
      main: `${PREFIX}-icon-check-box`,
      circle: `${PREFIX_INNER}circle`,
      line: `${PREFIX_INNER}check-line`,
      fill: `${PREFIX_INNER}check-fill`,
      disabled: `${PREFIX_INNER}disabled`
    },
    radio: {
      main: `${PREFIX}-icon-check-radio`,
      checked: `${PREFIX_INNER}checked`,
      disabled: `${PREFIX_INNER}disabled`
    },
    fold: {
      close: `${PREFIX}-icon-fold`,
      open: `${PREFIX_INNER}open`,
      disabled: `${PREFIX_INNER}disabled`
    }
  },
  transition: {
    border: `${PREFIX}-transition-border`,
    opacity: `${PREFIX}-transition-opacity`
  },
  animation: {
    main: "animated",
    bounce: "bounce",
    flash: "flash",
    pulse: "pulse",
    rubberBand: "rubberBand",
    shake: "shake",
    headShake: "headShake",
    swing: "swing",
    tada: "tada",
    wobble: "wobble",
    jello: "jello",
    bounceIn: "bounceIn",
    bounceInDown: "bounceInDown",
    bounceInLeft: "bounceInLeft",
    bounceInRight: "bounceInRight",
    bounceInUp: "bounceInUp",
    bounceOut: "bounceOut",
    bounceOutDown: "bounceOutDown",
    bounceOutLeft: "bounceOutLeft",
    bounceOutRight: "bounceOutRight",
    bounceOutUp: "bounceOutUp",
    fadeIn: "fadeIn",
    fadeInDown: "fadeInDown",
    fadeInDownBig: "fadeInDownBig",
    fadeInLeft: "fadeInLeft",
    fadeInLeftBig: "fadeInLeftBig",
    fadeInRight: "fadeInRight",
    fadeInRightBig: "fadeInRightBig",
    fadeInUp: "fadeInUp",
    fadeInUpBig: "fadeInUpBig",
    fadeOut: "fadeOut",
    fadeOutDown: "fadeOutDown",
    fadeOutDownBig: "fadeOutDownBig",
    fadeOutLeft: "fadeOutLeft",
    fadeOutLeftBig: "fadeOutLeftBig",
    fadeOutRight: "fadeOutRight",
    fadeOutRightBig: "fadeOutRightBig",
    fadeOutUp: "fadeOutUp",
    fadeOutUpBig: "fadeOutUpBig",
    flipInX: "flipInX",
    flipInY: "flipInY",
    flipOutX: "flipOutX",
    flipOutY: "flipOutY",
    lightSpeedIn: "lightSpeedIn",
    lightSpeedOut: "lightSpeedOut",
    rotateIn: "rotateIn",
    rotateInDownLeft: "rotateInDownLeft",
    rotateInDownRight: "rotateInDownRight",
    rotateInUpLeft: "rotateInUpLeft",
    rotateInUpRight: "rotateInUpRight",
    rotateOut: "rotateOut",
    rotateOutDownLeft: "rotateOutDownLeft",
    rotateOutDownRight: "rotateOutDownRight",
    rotateOutUpLeft: "rotateOutUpLeft",
    rotateOutUpRight: "rotateOutUpRight",
    hinge: "hinge",
    jackInTheBox: "jackInTheBox",
    rollIn: "rollIn",
    rollOut: "rollOut",
    zoomIn: "zoomIn",
    zoomInDown: "zoomInDown",
    zoomInLeft: "zoomInLeft",
    zoomInRight: "zoomInRight",
    zoomInUp: "zoomInUp",
    zoomOut: "zoomOut",
    zoomOutDown: "zoomOutDown",
    zoomOutLeft: "zoomOutLeft",
    zoomOutRight: "zoomOutRight",
    zoomOutUp: "zoomOutUp",
    slideInDown: "slideInDown",
    slideInLeft: "slideInLeft",
    slideInRight: "slideInRight",
    slideInUp: "slideInUp",
    slideOutDown: "slideOutDown",
    slideOutLeft: "slideOutLeft",
    slideOutRight: "slideOutRight",
    slideOutUp: "slideOutUp",
    heartBeat: "heartBeat"
  },
  animationSpeed: {
    2: "delay-2s",
    3: "delay-2s",
    4: "delay-2s",
    5: "delay-2s",
    slow: "slow", // 2s
    slower: "slower", // 3s
    fast: "fast", // 800ms
    faster: "faster" // 500ms
  }
};

export default CLS;
