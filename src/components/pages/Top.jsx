import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { SecondaryButton } from "../atoms/button/SecondaryButton";

export const Top = () => {
  // ボタンを押したときにページ遷移をするときに使う関数
  const history = useHistory();

  const onClickAdmin = () => history.push("/users");
  const onClickUser = () => history.push("/users");

  return (
    <SContainer>
      <h2> Top page death! </h2>
      <SecondaryButton onClick={onClickAdmin}> 管理者ユーザ </SecondaryButton>
      <br />
      <br />

      <SecondaryButton onClick={onClickUser}> 一般ユーザ </SecondaryButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
