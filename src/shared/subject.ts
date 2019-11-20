import { fromEvent, Subject } from "rxjs";

const docClickSubject = fromEvent(document, "click");
const winResizeSubject = fromEvent(window, "resize");
const winCloseSubject = fromEvent(window, "close");
const enterKeySubject = fromEvent(document, "keyup");
const escKeySubject = fromEvent(document, "keyup");

const ajaxTriggerSubject = new Subject<{}>();
const alertSubject = new Subject<{}>();
const closeSubject = new Subject<{}>();
const configUpdateSubject = new Subject<{}>();
const disabledSubject = new Subject<{}>();
const enableSubject = new Subject<{}>();
const formSubmitSubject = new Subject<{}>();
const formUpdateSubject = new Subject<{}>();
const itemPopSubject = new Subject<{}>();
const itemPushSubject = new Subject<{}>();
const itemSpliceSubject = new Subject<{}>();
const readonlySubject = new Subject<{}>();
const validateSubject = new Subject<{}>();
const visibleSubject = new Subject<{}>();

export {
  docClickSubject,
  winResizeSubject,
  winCloseSubject,
  enterKeySubject,
  escKeySubject,

  ajaxTriggerSubject,
  alertSubject,
  closeSubject,
  configUpdateSubject,
  disabledSubject,
  enableSubject,
  formSubmitSubject,
  formUpdateSubject,
  itemPopSubject,
  itemPushSubject,
  itemSpliceSubject,
  readonlySubject,
  validateSubject,
  visibleSubject
};
