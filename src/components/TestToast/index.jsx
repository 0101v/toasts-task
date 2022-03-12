import React from 'react'
import { ToastContainer } from '../ToastContainer'
import toastStories from '../ToastClass'

const TestToast = (toastType,
  toastPosition,
  toastAutoDelete,
  toastAutoDeleteTime,
  size,
  title,
  titleColor,
  backgroundColor,
  ) => {

  const toastSome = () => {
    toastStories.setContainer()
    toastStories.addToast(toastType, size, title, titleColor, backgroundColor)
  }
  return (
    <div>
      <button onClick={toastSome}>toast</button>
      <ToastContainer toastPosition={toastPosition}/>
    </div>
  )
}
export default TestToast