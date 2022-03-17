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
      const [toastType, size, toastAutoDelete, toastAutoDeleteTime, title, titleColor, backgroundColor, toastAnimation] = arg;
      const id = this.id;
      let intevalDeleteId;
      if (toastAutoDelete) intevalDeleteId = setTimeout(() => this.removeToast(id), toastAutoDeleteTime || 3000);
      this.toastArrClass = getArrToast(this.toastArrClass, toastType, this.id, size, title, titleColor, backgroundColor, toastAnimation, intevalDeleteId)
      this.id++;
    
    renderToast(getToast(this.toastArrClass), this.container) 
  }
  removeToast = (id, timeId, event) => {
    this.toastArrClass = this.toastArrClass.filter(el => el.id != id);
    if (event == 'click' && timeId) clearInterval(timeId);
    renderToast(getToast(this.toastArrClass), this.container)
  }
   
}

const toastStories = new ToastClass();

export default toastStories;