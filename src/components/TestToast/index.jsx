import React from 'react'
import { ToastContainer } from '../ToastContainer'
import { Button } from './component';
import toastStories from '../ToastClass'

const TestToast = (toastType,
  toastPosition,
  toastAutoDelete,
  toastAutoDeleteTime,
  size,
  title,
  titleColor,
  backgroundColor,
  toastAnimation
  ) => {

  const toastSome = () => {
    toastStories.setContainer()
    toastStories.addToast(toastType, size, title, titleColor, backgroundColor, toastAnimation, toastAutoDelete, toastAutoDeleteTime)
  }
  return (
    <div>
      <Button onClick={toastSome}>toast</Button>
      <ToastContainer toastPosition={toastPosition} />
    </div>
  )
}
export default TestToast