import { Subject } from "rxjs";

const updateSubject = new Subject<{}>();
const insertSubject = new Subject<{}>();
const removeSubject = new Subject<{}>();

export {
  updateSubject,
  insertSubject,
  removeSubject
};
