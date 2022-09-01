import { atom } from 'recoil';

const toastState = atom({
  key: 'toasts', // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
});

export default toastState;
