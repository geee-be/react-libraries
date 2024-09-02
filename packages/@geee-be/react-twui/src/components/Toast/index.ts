import './style.css';
// import 'react-toastify/dist/ReactToastify.css';

export {
  ToastContainer as Toaster,
  toast,
  useToast,
  type ToastOptions,
} from 'react-toastify';

export const ToastType = {
  info: 'info',
  success: 'success',
  warning: 'warning',
  error: 'error',
  default: 'default',
} as const;
