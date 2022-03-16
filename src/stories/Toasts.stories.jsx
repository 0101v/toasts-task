import TestToast from "../components/TestToast"

export default {
  title: "Toast",
  argTypes: {
    toastType: {
      options: ['error', 'warning', 'success', 'info'],
      defaultValue: 'success',
      control: {
        type: 'radio',
      },
    },
    toastPosition: {
      options: ['top-right', 'top-left', 'bottom-right', 'bottom-left'],
      defaultValue: 'top-left',
      control: {
        type: 'radio',
      },
    },
    toastAutoDelete: {
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
    toastAutoDeleteTime: {
      defaultValue: 3000,
      control: {
        type: 'number',
      },
    },
    title: {
      control: {
        type: 'text',
      },
    },
    titleColor: {
      control: {
        type: 'color',
      },
    },
    size: {
      options: ['small', 'medium', 'large'],
      defaultValue: 'medium',
      control: {
        type: 'radio',
      },
    },
    backgroundColor: {
      control: {
        type: 'color',
      },
    },
    toastAnimation: {
      options: ['from-top', 'from-bottom'],
      defaultValue: 'from-top',
      control: {
        type: 'radio',
      },
    },
  },
};

export const Toast = ({toastType,toastPosition,toastAutoDelete,toastAutoDeleteTime, size, title, titleColor, backgroundColor, toastAnimation}) => {
  
  return TestToast(
    toastType,
    toastPosition,
    toastAutoDelete,
    toastAutoDeleteTime,
    size,
    title,
    titleColor,
    backgroundColor,
    toastAnimation
  )
}