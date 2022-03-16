import styled from "styled-components";

export const ToastWrapper = styled.div`
  position: fixed;
  top: ${({position}) => position.top};
  bottom: ${({position}) => position.bottom};
  left: ${({position}) => position.left};
  right: ${({position}) => position.rigth};
`