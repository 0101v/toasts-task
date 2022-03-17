import React from "react";
import { ToastElem, ToastClose, ToastInfo, ToastImage, ToastTitle } from './component';
import { TOAST_SIZE } from "../../constants";
import toastStories from "../ToastClass";
import ErrorBoundary from "../../ErrorBoundary";


const Toasts = ({id, size, title, titleColor, backgroundColor, close, icon, toastAnimation, intevalDeleteId}) => {

  const deleteToast = (e) => {
    toastStories.removeToast(e.target.id, intevalDeleteId, e.type)
  }

  return (
    <ErrorBoundary>
      <ToastElem
        key={id}
        backgroundColor={backgroundColor}
        size={TOAST_SIZE[size]}
        toastAnimation={toastAnimation}
      >
        <ToastClose src={close} size={TOAST_SIZE[size]} id={id} onClick={deleteToast}/>
        <ToastInfo>
          <ToastImage src={icon} size={TOAST_SIZE[size]} alt='#'/>
          <ToastTitle color={titleColor}>{title}</ToastTitle>
        </ToastInfo>
      </ToastElem>         
    </ErrorBoundary>
  )
}

export default Toasts;  