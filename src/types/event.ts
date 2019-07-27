/**
 * window event
 */
export interface IWindowEvent {
  onAfterPrint: (e: Event) => void | boolean;
  onBeforePrint: (e: Event) => void | boolean;
  onBeforeUnload: (e: Event) => void | boolean;
  onError: (e: Event) => void | boolean;
  onHasChange: (e: Event) => void | boolean;
  onLoad: (e: Event) => void | boolean;
  onMessage: (e: Event) => void | boolean;
  onOffline: (e: Event) => void | boolean;
  onOnline: (e: Event) => void | boolean;
  onPageHide: (e: Event) => void | boolean;
  onPageShow: (e: Event) => void | boolean;
  onPopState: (e: Event) => void | boolean;
  onRedo: (e: Event) => void | boolean;
  onResize: (e: Event) => void | boolean;
  onStorage: (e: Event) => void | boolean;
  onUndo: (e: Event) => void | boolean;
  onUnload: (e: Event) => void | boolean;
}

/**
 * form event
 */
export interface IFormEvent {
  onBlur: (e: Event) => void | boolean;
  onChange: (e: Event) => void | boolean;
  onContextMenu: (e: Event) => void | boolean;
  onFocus: (e: Event) => void | boolean;
  onFormChange: (e: Event) => void | boolean;
  onFormInput: (e: Event) => void | boolean;
  onInput: (e: Event) => void | boolean;
  onInvalid: (e: Event) => void | boolean;
  onReset: (e: Event) => void | boolean;
  onSelect: (e: Event) => void | boolean;
  onSubmit: (e: Event) => void | boolean;
}

/**
 * mouse event
 */
export interface IMouseEvent {
  onClick: (e: Event) => void | boolean;
  onDbClick: (e: Event) => void | boolean;
  onDrag: (e: Event) => void | boolean;
  ondDragEnd: (e: Event) => void | boolean;
  onDragEnter: (e: Event) => void | boolean;
  onDragLeave: (e: Event) => void | boolean;
  onDragOver: (e: Event) => void | boolean;
  onDragStart: (e: Event) => void | boolean;
  onDrop: (e: Event) => void | boolean;
  onMouseDown: (e: Event) => void | boolean;
  onMouseMove: (e: Event) => void | boolean;
  onMouseOut: (e: Event) => void | boolean;
  onMouseOver: (e: Event) => void | boolean;
  onMouseUp: (e: Event) => void | boolean;
  onMouseWheel: (e: Event) => void | boolean;
  onScroll: (e: Event) => void | boolean;
}

/**
 * keyboard event
 */
export interface IKeyBoradEvent {
  onKeyDown: (e: Event) => void | boolean;
  onKeyPress: (e: Event) => void | boolean;
  onKeyUp: (e: Event) => void | boolean;
}
