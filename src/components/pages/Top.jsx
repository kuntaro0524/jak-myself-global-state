import styled from "styled-components";
import { SecondaryButton } from "../atoms/button/SecondaryButton";

export const Top = () => {
  const onClickAdmin = () => alert("管理者だよ");
  const onClickUser = () => alert("ユーザだよ");
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
