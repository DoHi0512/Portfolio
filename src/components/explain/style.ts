import styled from "styled-components";
export const Icon = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: flex-end;
  :hover {
    cursor: pointer;
    svg {
      color: #20c997;
      margin-bottom: 0.2rem;
      transition: 0.3s;
    }
    span {
      transition: 0.3s;
      opacity: 1;
    }
  }
  :not(:hover) {
    svg,
    span {
      transition: 0.3s;
    }
  }
  span {
    opacity: 0;
    font-size: 0.5rem;
    color: #777777;
  }
`;
