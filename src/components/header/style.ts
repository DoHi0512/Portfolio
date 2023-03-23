import styled from "styled-components";
export const HeaderLayout = styled.div`
  height: 4rem;
  width: 100%;
  position: fixed;
  display: flex;
  flex-direction: column;
`;

export const HeaderNav = styled.div`
  width: 100%;
  height: 3.5rem;
  display : flex;
  flex-direction : row;
`;
export const ProgressBar = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 0.15rem;
`;
interface ProgressProps {
  moveX?: number;
}
export const Progress = styled.div<ProgressProps>`
  width: 20%;
  height: 100%;
  background-color: #20c997;
  transform: translateX(calc(20vw * ${(props) => props.moveX}));
  transition: 0.5s;
`;

export const HeaderText = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
