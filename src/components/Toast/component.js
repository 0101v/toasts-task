import styled from "styled-components";

export const ToastWrapper = styled.div`
  position: fixed;
  top: ${({position}) => position.top};
  bottom: ${({position}) => position.bottom};
  left: ${({position}) => position.left};
  right: ${({position}) => position.rigth};
`

export const ToastElem = styled.div`
  position: relative;
  overflow: hidden;
  width: 300px;
  height: 60px;
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 20px;
  background-color: ${(props) => props.backgroundColor};
`
export const ToastClose = styled.img`
  width: 15px;
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
  width: 35px;
`
export const ToastTitle = styled.span`
  font-size: 18px;
  margin-left: 15px;
  color: ${(props) => props.color};
`
