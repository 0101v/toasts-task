import errorIcon from '../assets/ErrorIcon.svg';
import infoIcon from '../assets/InfoIcon.svg';
import successIcon from '../assets/SuccessIcon.svg';
import warningIcon from '../assets/WarningIcon.svg';
import close from "../assets/close.svg"

export const INFO_TOAST = {
  TYPE: 'info',
  ICON: infoIcon,
  CLOSE: close,
  TITLE: 'Info toast example',
  BACKGROUND_COLOR: '#9A40D3',
  COLOR: '#FFFFFF',
}
export const WARNING_TOAST = {
  TYPE: 'warning',
  ICON: warningIcon,
  CLOSE: close,
  TITLE: 'Warning toast example',
  BACKGROUND_COLOR: '#F4E048',
  COLOR: '#000000',
}
export const ERROR_TOAST = {
  TYPE: 'error',
  ICON: errorIcon,
  CLOSE: close,
  TITLE: 'Error toast example',
  BACKGROUND_COLOR: '#E25837',
  COLOR: '#FFFFFF',
}
export const SUCCESS_TOAST = {
  TYPE: 'success',
  ICON: successIcon,
  CLOSE: close,
  TITLE: 'Success toast example',
  BACKGROUND_COLOR: '#37E29A',
  COLOR: '#FFFFFF',
}

export const TOAST_POSITIONS = {
  ['top-right']: {
    top: '12px',
    rigth: "12px",
  },
  ['top-left']: {
    top: '12px',
    left: '12px',
  },
  ['bottom-right']: {
    rigth: '12px',
    bottom: '12px',
  },
  ['bottom-left']: {
    bottom: '12px',
    left: '12px',
  }
};
export const TOAST_SIZE = {
  ['small']: {
    width: '250px',
    height: '50px',
    padding: '7px',
    fontSize: '16px',
    widthClose: '10px',
    widthSvg: '30px',
  },
  ['medium']: {
    width: '300px',
    height: '60px',
    padding: '10px',
    fontSize: '18px',
    widthClose: '15px',
    widthSvg: '35px',
  },
  ['large']: {
    width: '350px',
    height: '70px',
    padding: '15px',
    fontSize: '22px',
    widthClose: '20px',
    widthSvg: '40px',
  }
};