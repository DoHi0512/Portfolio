import styled from "styled-components";
interface TextType {
  color: string;
}
export const Text = styled.div<TextType>`
  margin-right: 1.5rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.color};
  :hover {
    color: black;
    transition: 0.3s;
    cursor: pointer;
  }
  font-weight: thin;
`;
