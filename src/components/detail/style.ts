import styled from "styled-components";
export const DetailLayout = styled.div`
  width: 100%;
  height: 24rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DetailBox = styled.div`
  width: 100%;
  height: 85%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const Title = styled.div`
  width: 100%;
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
`;

export const IconBox = styled.div`
  margin-top: 1rem;
  height: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 80%;
  font-size: 1.5rem;
  span {
    font-weight: lighter;
  }
  img {
    margin-right: 1rem;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    object-fit: contain;
  }
`;

export const Template = styled.div`
  
  display: flex;
  align-items: center;
  flex-direction: column;
`;
