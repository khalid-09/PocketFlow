import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './components/theme-provider.tsx';
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from './lib/react-query.ts';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from '@/components/ui/sonner';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools
          initialIsOpen={false}
          buttonPosition="bottom-left"
        />
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </QueryClientProvider>
    </ThemeProvider>
    <Toaster position="bottom-right" />
  </React.StrictMode>
);
