import React from "react";
import { ToastWrapper } from './component';
import { TOAST_POSITIONS } from "../../constants";

export const ToastContainer = ({toastPosition='top-right', toastAnimation}) => {

  return <ToastWrapper id="container" position={TOAST_POSITIONS[toastPosition]} toastAnimation={toastAnimation}/>
}