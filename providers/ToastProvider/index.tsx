import React from 'react';

const ToastsContext = React.createContext([]);

function toastReducer(state, action) {
  switch (action.type) {
    case 'add': {
      state.push(action.payload);
      console.log('reducer', state);
      return state;
    }
    case 'shift': {
      state.shift();
      return state;
    }
    default: {
      throw new Error(`Unhandled actiont type ${action.type}`);
    }
  }
}

const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toasts, dispatchToast] = React.useReducer(toastReducer, []);

  const addToast = (msg, bg = 'success') =>
    dispatchToast({ type: 'add', payload: { msg, bg } });

  const removeToast = () => dispatchToast({ type: 'shift' });

  const toast = toasts[0];
  const showToast = !!toast;

  const value = {
    toasts,
    toast,
    showToast,
    dispatchToast,
    addToast,
    removeToast,
  };

  return (
    <ToastsContext.Provider value={value}>{children}</ToastsContext.Provider>
  );
};

function useToasts() {
  const context = React.useContext(ToastsContext);
  if (context === undefined) {
    throw new Error('useToasts must be used within a ToastsProvider');
  }
  return context;
}

export { ToastProvider, useToasts };
