import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { useSetRecoilState } from "recoil";
import { userState } from "../../store/userState";

export const Top = () => {
  // ボタンを押したときにページ遷移をするときに使う関数
  const history = useHistory();

  // userStateで定義した変数に対して「セット関数だけを取り出してつかう」ときの記述
  const setUserInfo = useSetRecoilState(userState);

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
