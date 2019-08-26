import IBlock from "./block";
import IBread from "./bread";
import ICarousel from "./carousel";
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
import IDrop from "./drop";
import IImg from "./img";
import IInput from "./input";
import ILink from "./link";
import IProgress from "./progress";
import IRadio from "./radio";
import ISelect from "./select";
import ISlide from "./slide";
import ISpan from "./span";
import ISwitch from "./switch";
import ITextArea from "./textarea";
import ITransfer from "./transfer";
import IUpload from "./upload";

declare type IItem =
  IBlock | IBread | ICarousel | IForm | IGroup | IHtml
  | IIFrame | IPager | IPanel | ITab | ITable | ITree
  | IButton | ICheckbox | IDrop | IDate | IImg | IInput
  | ILink | IProgress | IRadio | ISelect | ISlide | ISpan
  | ISwitch | ITextArea | ITransfer | IUpload;

export default IItem;
