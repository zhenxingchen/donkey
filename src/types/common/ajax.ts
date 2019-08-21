/**
 * ajax
 */
export default interface IAjax {
  url: string;
  method?: string;
  data?: {};
  load?: boolean;
  headers?: {};
  success?: (result?: object) => any;
  error?: (error?: object) => void;
  status?: (code: number) => void;
}
