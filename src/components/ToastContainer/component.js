import styled from "styled-components";

const positionDefault = (obj) => {
  if (!obj) return '12px';
}

export const ToastWrapper = styled.div`
  position: fixed;

  top: ${({position}) => position.top || positionDefault(position)};
  bottom: ${({position}) => position.bottom};
  left: ${({position}) => position.left || positionDefault(position)};
  right: ${({position}) => position.rigth};
`