import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";

export const Top = () => {
  // ボタンを押したときにページ遷移をするときに使う関数
  const history = useHistory();

  // コンテキストを利用してフラグをGlobalな情報として管理するように変更する
  // UserProviderの中で定義したセット関数だけをわたしてあげる
  const { setUserInfo } = useContext(UserContext);

  // 管理者のフラグはGlobalに管理する
  // 画面遷移はそれだけの機能で
  const onClickAdmin = () => {
    setUserInfo({ isAdmin: true });
    history.push("users");
  };

  // 管理者のフラグはGlobalに管理する
  // 画面遷移はそれだけの機能で
  const onClickUser = () => {
    setUserInfo({ isAdmin: false });
    history.push("users");
  };

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
