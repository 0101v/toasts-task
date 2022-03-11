import React from "react"
import { createPortal } from "react-dom";

const Portal = ({ children }) => {
  const modal = document.createElement("div");
  modal.setAttribute('id');

  React.useEffect(() => {
    document.body.appendChild(modal);

    return () => {
      document.body.removeChild(modal)
    }
  }, [modal])

  return createPortal(children, modal)
}

export const PortalContainer = ({children}) => {
  return <Portal>{children}</Portal>
}