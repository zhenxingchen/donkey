import IBlock from "./block";
import IBread from "./bread";
import IForm from "./form";
import IGroup from "./group";
import IHtml from "./html";
import IIFrame from "./iframe";
import IPager from "./pager";
import IPanel from "./panel";
import ITab from "./tab";
import ITable from "./table";
import ITree from "./tree";

import IButton from "./button";
import ICheckbox from "./checkbox";
import IDate from "./date";
import IImg from "./img";
import IInput from "./input";
import ILink from "./link";
import IProgress from "./progress";
import IRadio from "./radio";
import ISelect from "./select";
import ISlide from "./slide";
import ISpan from "./span";
import ITextArea from "./textarea";
import IUpload from "./upload";

declare type IItem =
  IBlock | IBread | IForm | IGroup | IHtml | IIFrame |
  IPager | IPanel | ITab | ITable | ITree |
  IButton | ICheckbox | IDate | IImg | IInput | ILink |
  IProgress | IRadio | ISelect | ISlide | ISpan |
  ITextArea | IUpload;

export default IItem;
