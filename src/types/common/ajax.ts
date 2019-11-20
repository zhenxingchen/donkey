
interface IAjax {
  url: string;
  method?: string;
  data?: {};
  dataFlat?: boolean;
  load?: boolean;
  headers?: {};
  success?: (result?: object) => any;
  error?: (error?: object) => void;
  status?: (code: number) => void;
}

export default IAjax;
