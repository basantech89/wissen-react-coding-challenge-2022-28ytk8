import React from 'react'
import { Toast, ToastContainer } from 'react-bootstrap'
import { useRecoilState } from 'recoil'

import toastState from '../../atoms/toasts'

const WissenToast = () => {
  const [toasts, setToasts] = useRecoilState(toastState)

  const shiftToast = () => {
    const dup = [...toasts]
    dup.shift()
    setToasts(dup)
  }

  return (
    <ToastContainer position="bottom-end" className="wissen-toast">
      {toasts.map((toast, idx) => (
        <Toast
          key={idx}
          bg={toast?.bg}
          onClose={shiftToast}
          delay={1000}
          autohide
        >
          <Toast.Body>{toast?.msg}</Toast.Body>
        </Toast>
      ))}
    </ToastContainer>
  )
}

export default WissenToast
