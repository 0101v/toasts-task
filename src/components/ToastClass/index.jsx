import { getArrToast, renderToast, getToast } from "../../helpers";

class ToastClass {
  constructor() {
    if (ToastClass.instance == null) {
      this.toastArrClass = []
      this.id = 1
      ToastClass.instance = this
      return this 
    }
    return ToastClass.instance
  }
  setContainer() {
    this.container = document.getElementById('container')
  }

  addToast = (...arg) => {
      const [toastType, size, title, titleColor, backgroundColor, toastAnimation] = arg;
      
      this.pastToastType = toastType;  
      this.toastArrClass = getArrToast(this.toastArrClass, toastType, this.id, size,title,titleColor,backgroundColor, toastAnimation)
      this.id++;
    
    renderToast(getToast(this.toastArrClass), this.container) 
  }
  removeToast = id => {
    this.toastArrClass = this.toastArrClass.filter(el => el.id != id);
    renderToast(getToast(this.toastArrClass), this.container)
  }
   
}

const toastStories = new ToastClass();

export default toastStories;