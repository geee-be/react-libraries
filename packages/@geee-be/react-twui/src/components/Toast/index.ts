export {
  toast,
  useToast,
  type ToastOptions,
} from 'react-toastify';
export { Toaster, type ToasterProps } from './Toaster';

export const ToastType = {
  info: 'info',
  success: 'success',
  warning: 'warning',
  error: 'error',
  default: 'default',
} as const;
