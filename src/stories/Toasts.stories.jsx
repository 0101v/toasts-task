import React from "react";


import { Toasts } from "../components/Toast";

export default {
  title: "Toast",
  argTypes: {
    toastPosition: {
      options: ['top-right', 'top-left', 'bottom-right', 'bottom-left'],
      control: {
        type: 'radio',
      },
    },
    toastType: {
      options: ['error', 'warning', 'success', 'info'],
      control: {
        type: 'radio',
      },
    },
    toastIsAutoDelete: {
      control: {
        type: 'boolean',
      },
    },
    toastAutoDeleteTime: {
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
    padding: {
      control: {
        type: 'text',
      },
    },
    backgroundColor: {
      control: {
        type: 'color',
      },
    },
    toastAnimation: {
      options: ['from-top', 'from-bottom'],
      control: {
        type: 'radio',
      },
    },
  },
};

export const Toast = ({toastPosition, toastType}) => (
  <Toasts 
    toastPosition={toastPosition || 'top-left'}
    toastType={toastType || 'success'}
  
  
  />
  );