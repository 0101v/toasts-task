import { INFO_TOAST, WARNING_TOAST, ERROR_TOAST, SUCCESS_TOAST } from "../constants";
import { hydrate } from "react-dom";
import Toasts from "../components/Toast";

export const getArrToast = (toastArrClass, toastType, id, size, title, titleColor, backgroundColor, toastAnimation) => {
  let type;
  switch (toastType) {
    case 'error':
      type = ERROR_TOAST;
      break;
    case 'warning':
      type = WARNING_TOAST;
      break;
    case 'success':
      type = SUCCESS_TOAST;
      break;
    case 'info':
      type = INFO_TOAST;
      break;
    default:
      console.log(toastType, 'Error')
      break;
  }
  return [...toastArrClass, {...type, id, size, title, titleColor, backgroundColor, toastAnimation}]
}

export const renderToast = (element, container) => hydrate(element, container);

export const getToast = (toastArrClass) => {
  return toastArrClass.map(el => {
    return(
      <Toasts
        key={el.id}
        id={el.id}
        size={el.size || 'medium'}
        title={el.title || el.TITLE}
        titleColor={el.titleColor || el.COLOR}
        backgroundColor={el.backgroundColor || el.BACKGROUND_COLOR}
        close={el.CLOSE}
        icon={el.ICON}
        toastAnimation={el.toastAnimation}

      />
    )})
}