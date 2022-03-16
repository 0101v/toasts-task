import React from "react";
import { ToastElem, ToastClose, ToastInfo, ToastImage, ToastTitle } from './component';
import { TOAST_SIZE } from "../../constants";
import toastStories from "../ToastClass";


const Toasts = ({id, size, title, titleColor, backgroundColor, close, icon, toastAnimation}) => {

  return (
    <ToastElem
      key={id}
      backgroundColor={backgroundColor}
      size={TOAST_SIZE[size]}
      toastAnimation={toastAnimation}
    >
      <ToastClose src={close} size={TOAST_SIZE[size]} id={id} onClick={e => toastStories.removeToast(e.target.id)}/>
      <ToastInfo>
        <ToastImage src={icon} size={TOAST_SIZE[size]} alt='#'/>
        <ToastTitle color={titleColor}>{title}</ToastTitle>
      </ToastInfo>
    </ToastElem>         
  )
}

export default Toasts;  