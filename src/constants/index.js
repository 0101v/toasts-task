import errorIcon from '../assets/ErrorIcon.svg';
import infoIcon from '../assets/InfoIcon.svg';
import successIcon from '../assets/SuccessIcon.svg';
import warningIcon from '../assets/WarningIcon.svg';

export const INFO_TOAST = {
  TYPE: 'info',
  ICON: infoIcon,
  TITLE: 'Info toast example',
  BACKGROUND_COLOR: '#9A40D3',
  COLOR: '#FFFFFF',
}
export const WARNING_TOAST = {
  TYPE: 'warning',
  ICON: warningIcon,
  TITLE: 'Warning toast example',
  BACKGROUND_COLOR: '#F4E048',
  COLOR: '#000000',
}
export const ERROR_TOAST = {
  TYPE: 'error',
  ICON: errorIcon,
  TITLE: 'Error toast example',
  BACKGROUND_COLOR: '#E25837',
  COLOR: '#FFFFFF',
}
export const SUCCESS_TOAST = {
  TYPE: 'success',
  ICON: successIcon,
  TITLE: 'Success toast example',
  BACKGROUND_COLOR: '#37E29A',
  COLOR: '#FFFFFF',
}