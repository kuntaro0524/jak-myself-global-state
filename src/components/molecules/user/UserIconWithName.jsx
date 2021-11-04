import styled from "styled-components";

// UserProviderで囲まれた親コンポーネントにこれが含まれているとglobal stateが使えるのだが
// それを使うために定義するのがこちら
import React, { memo, useContext } from "react";
import { UserContext } from "../../../providers/UserProvider";

// ユーザのイメージと名前だけを使うということを想定してその組み合わせの部分だけを切り離すイメージのmolecule

export const UserIconWithName = memo((props) => {
  // 再レンダリングの機能評価のためのログ
  console.log("UserIconWithName");

  // componentの昨日としては名前とイメージを表示するだけなので受け取るpropsも限定しておいたほうがみんなにとってわかりやすい
  const { name, image } = props;
  // 実際にGlobal stateの内容を受け取るところ
  // どのcontextかを指定してあげる必要がある
  // さらに変化するパラメタとしてUserProviderに設定したuserInfo（global管理されている数値）
  const { userInfo } = useContext(UserContext);
  console.log(userInfo);

  // 受け取った context から isAdminを取り出す
  const isAdmin = userInfo ? userInfo.isAdmin : false;

  return (
    <SContainer>
      <SImage alt="profile" height={160} src={image} />
      <SName> {name} </SName>
      {isAdmin && <SEdit> 編集 </SEdit>}
    </SContainer>
  );
});

// ユーザ名と画像を中央揃え
const SContainer = styled.div`
  text-align: center;
`;

// 画像を丸っぽくする
const SImage = styled.img`
  border-radius: 30%;
  background-color: green;
`;

// 名前の表示;
const SName = styled.p`
  font-size: 36px;
  font-weight: bold;
`;

// 名前の表示;
const SEdit = styled.p`
  text-decoration: underline;
  color: #aaa;
  cursor: pointer;
`;
