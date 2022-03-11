import React from "react";
import { ToastWrapper, ToastElem, ToastClose, ToastInfo, ToastImage, ToastTitle } from './component';
import { INFO_TOAST, WARNING_TOAST, ERROR_TOAST, SUCCESS_TOAST, TOAST_POSITIONS } from "../../constants";

export const Toasts = ({toastPosition, toastType}) => {
  const [toastArr, setToastArr] = React.useState([]);
  const [id, setId] = React.useState(0);
  
  const addToast = (toastType) => {
    setId(el => el + 1)
    switch (toastType) {
      case 'error':
        setToastArr(toast => [...toast, {...ERROR_TOAST, id}])
        break;
      case 'warning':
        setToastArr(toast => [...toast, {...WARNING_TOAST, id}])
        break;
      case 'success':
        setToastArr(toast => [...toast, {...SUCCESS_TOAST, id}])
        break;
      case 'info':
        setToastArr(toast => [...toast, {...INFO_TOAST, id}])
        break;
    
      default:

        break;
    }
  }
  const removeToast = (num) => {
    setToastArr(toastArr.filter(el => el.id !== num))
  }
  
  React.useEffect(() => {
    toastArr.length < 3 ? addToast(toastType) : null;
  },[toastType])
  
  
  
  return (
    <ToastWrapper position={TOAST_POSITIONS[toastPosition]}>
      {toastArr.map(el => {
          return (
            <ToastElem
              key={el.id}
              backgroundColor={el.BACKGROUND_COLOR}
            >
              <ToastClose src={el.CLOSE} onClick={() => removeToast(el.id)}/>
              <ToastInfo>
                <ToastImage src={el.ICON} alt='#'/>
                <ToastTitle color={el.COLOR}>{el.TITLE}</ToastTitle>
              </ToastInfo>
            </ToastElem>
          )})
      }
    </ToastWrapper>
  )
}