export {
  type ToastOptions,
  toast,
  useToast,
} from 'react-toastify';
export { Toaster, type ToasterProps } from './Toaster';

export const ToastType = {
  info: 'info',
  success: 'success',
  warning: 'warning',
  error: 'error',
  default: 'default',
} as const;
