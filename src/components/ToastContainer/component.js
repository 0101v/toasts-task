import styled, { keyframes } from "styled-components";

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

export const ToastWrapper = styled.div`
  position: fixed;
  top: ${({position}) => position.top};
  bottom: ${({position}) => position.bottom};
  left: ${({position}) => position.left};
  right: ${({position}) => position.rigth};
  // animation: ${({toastAnimation}) => toastAnimation === 'from-top' ? fromTopAnimation : fromBottomAnimation} 1s;
`