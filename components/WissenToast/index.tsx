import React from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';
import { useRecoilState } from 'recoil';
import toastState from '../../atoms/toasts';

import '/.styles';

const WissenToast = () => {
  const [toasts, setToasts] = useRecoilState(toastState);

  const shiftToast = () => {
    const dup = [...toasts];
    dup.shift();
    setToasts(dup);
  };

  const toast = toasts[0];

  if (!!toast) {
    return (
      <ToastContainer position="bottom-end" className="wissen-toast">
        {toasts.map((toast, idx) => (
          <Toast
            key={idx}
            bg={toast?.bg}
            // onClose={shiftToast}
            // delay={3000}
            // autohide
          >
            <Toast.Body>{toast?.msg}</Toast.Body>
          </Toast>
        ))}
      </ToastContainer>
    );
  }

  return null;
};

export default WissenToast;
