import React from 'react';
import './styles.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Provider } from 'react-redux';

import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './containers/AppRoutes';

import store from './redux-store';
import { ToastProvider } from './providers/ToastProvider';

const container = document.getElementById('app');

const root = createRoot(container!); // createRoot(container!) if you use TypeScript

const App = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <ToastProvider>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </ToastProvider>
      </Provider>
    </React.StrictMode>
  );
};

root.render(<App />);
