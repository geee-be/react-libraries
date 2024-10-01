'use client';

import type { FC } from 'react';
import { ToastContainer, type ToastContainerProps } from 'react-toastify';
import './style.css';

export interface ToasterProps extends ToastContainerProps {
  children: React.ReactNode;
}

export const Toaster: FC<ToasterProps> = ({ children }) => (
  <>
    {children}
    <ToastContainer />
  </>
);
