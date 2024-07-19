import styled from "styled-components";

export const Button = (props) => {
  return <Btn {...props} />;
};

const Btn = styled.button`
  border-radius: 8px;
  border: 2px solid transparent;
  padding: 0.8rem;
  font-size: 1.2rem;
  font-weight: 00;
  font-family: inherit;
  background-color: #007fff;
  color: #f0f000;
  cursor: pointer;
  transition: border-color 0.25s;
  min-width: 7rem;
  &:hover {
    border-color: #f0f000;
  }
`;
