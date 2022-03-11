import React from "react";

import TestComponent from "../TestComponent/TestComponent";

export default {
  title: "TestComponent",
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
  },
};

export const Primary = () => <TestComponent theme="primary" />;

export const Secondary = () => <TestComponent theme="secondary" />;