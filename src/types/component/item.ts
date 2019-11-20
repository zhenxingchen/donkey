import IBanner from "@types-component/banner";
import IBread from "@types-component/bread";
import IButton from "@types-component/button";
import ICarousel from "@types-component/carousel";
import ICheckbox from "@types-component/checkbox";
import IDate from "@types-component/date";
import IDiv from "@types-component/div";
import IDrawer from "@types-component/drawer"; // todo move out
import IForm from "@types-component/form";
import IFrame from "@types-component/frame";
import IGroup from "@types-component/group";
import IHtml from "@types-component/html";
import IIcon from "@types-component/icon";
import IIFrame from "@types-component/iframe";
import IImg from "@types-component/img";
import IInput from "@types-component/input";
import ILink from "@types-component/link";
import ILayer from "@types-component/layer"; // todo move out
import ILoading from "@types-component/loading"; // todo move out
import IMenu from "@types-component/menu";
import IModal from "@types-component/modal"; // todo move out
import INotice from "@types-component/notice"; // todo move out
import IPager from "@types-component/pager";
import IPanel from "@types-component/panel";
import IProgress from "@types-component/progress";
import IRadio from "@types-component/radio";
import ISelect from "@types-component/select";
import ISlide from "@types-component/slide";
import ISpan from "@types-component/span";
import ISwitch from "@types-component/switch";
import ITab from "@types-component/tab";
import ITable from "@types-component/table";
import ITabs from "@types-component/tabs";
import ITextArea from "@types-component/textarea";
import ITimeLine from "@types-component/timeline";
import IToast from "@types-component/toast"; // todo move out
import ITooltip from "@types-component/tooltip"; // todo move out
import ITransfer from "@types-component/transfer";
import ITree from "@types-component/tree";
import IUpload from "@types-component/upload";

type IItem =
  IBanner
  | IBread
  | IButton
  | ICarousel
  | ICheckbox
  | IDate
  | IDiv
  | IDrawer
  | IForm
  | IFrame
  | IGroup
  | IHtml
  | IIcon
  | IIFrame
  | IImg
  | IInput
  | ILayer
  | ILink
  | ILoading
  | IMenu
  | IModal
  | INotice
  | IPager
  | IPanel
  | IProgress
  | IRadio
  | ISelect
  | ISlide
  | ISpan
  | ISwitch
  | ITab
  | ITable
  | ITabs
  | ITextArea
  | ITimeLine
  | IToast
  | ITooltip
  | ITransfer
  | ITree
  | IUpload;

export default IItem;
