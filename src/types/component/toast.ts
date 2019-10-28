/**
 * 吐司
 */
export default interface IToast {
  message?: string;
  delay?: number;
  icon?: string;
  theme?: "white" | "dark";
  type?: "error" | "success" | "warn" | "info";
}