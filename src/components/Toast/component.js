import styled, {keyframes} from "styled-components";

const fromTopAnimation = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`

const fromBottomAnimation = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`

export const ToastElem = styled.div`
  position: relative;
  overflow: hidden;
  width: ${({size}) => size.width};
  height: ${({size}) => size.height};
  padding: ${({size}) => size.padding};
  margin-bottom: 15px;
  border-radius: 20px;
  background-color: ${(props) => props.backgroundColor};
  font-size: ${({size}) => size.fontSize};
  animation: ${({toastAnimation}) => toastAnimation == 'from-top' ? fromTopAnimation : fromBottomAnimation} 1s;
`
export const ToastClose = styled.img`
  width: ${({size}) => size.widthClose};
  position: absolute;
  right: 15px;
  top: 10px;
  cursor: pointer;
`
export const ToastInfo = styled.div`
  display: flex;
  align-items: center;
  margin: 12px;
`
export const ToastImage = styled.img`
  width: ${({size}) => size.widthSvg};
`
export const ToastTitle = styled.span`
  margin-left: 15px;
  color: ${(props) => props.color};
`
