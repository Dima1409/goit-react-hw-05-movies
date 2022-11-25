import styled from 'styled-components';

const ToTop = styled.div`
position: relative;
`
const Icon = styled.div`
  position: fixed;
  bottom: 40px;
  right: 10px;
  border: 1px solid #000000;
  background-color: teal;
  opacity: 0.5;
  border-radius: 50%;
  z-index: 20;
  width: 25px;
  height: 25px;
  transition: 0.3s cubic-bezier(0.165, 0.84, 0.44, 1); 
  &:hover {
  cursor: pointer;
  color:#000000;
  transform: scale(1.1);
  opacity: 1;
  }
`
export {Icon, ToTop};