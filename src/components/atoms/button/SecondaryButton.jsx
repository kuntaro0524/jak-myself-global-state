import styled from "styled-components";

export const SecondaryButton = (props) => {
  // propsとしてボタンを押したときの関数を受け取って
  const { children, onClick } = props;
  // ボタンを押したときの関数として割り当てる
  return <SButton onClick={onClick}>{children}</SButton>;
};

const SButton = styled.button`
  background-color: green;
  color: #fff;
  padding: 6px 24px;
  border: none;
  border-radius: 15px;
  outline: none;
  font-size: 18px;
  width: 300px;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
