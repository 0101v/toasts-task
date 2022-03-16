import React from "react";
import { ToastWrapper } from './component';
import { TOAST_POSITIONS } from "../../constants";



export const ToastContainer = ({toastPosition='top-right'}) => {
  
  return <ToastWrapper id="container" position={TOAST_POSITIONS[toastPosition]}/>
}