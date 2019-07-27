/**
 * ajax
 */
export default interface IAjax {
  url: string;
  method?: "get" | "GET" | "post" | "POST";
  data?: object;
  load?: boolean;
  headers?: object;
  success?: (result?: object) => any;
  error?: (error?: object) => void;
  status?: (code: number) => void;
}
