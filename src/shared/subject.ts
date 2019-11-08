import { Subject } from "rxjs";

const docClickSubject = new Subject<{}>();
const winResizeSubject = new Subject<{}>();

const ajaxSubject = new Subject<{}>();
const alertSubject = new Subject<{}>();
const closeSubject = new Subject<{}>();

const updateSubject = new Subject<{}>();
const insertSubject = new Subject<{}>();
const removeSubject = new Subject<{}>();

export {
  docClickSubject,
  winResizeSubject,
  ajaxSubject,
  alertSubject,
  closeSubject,
  updateSubject,
  insertSubject,
  removeSubject
};
