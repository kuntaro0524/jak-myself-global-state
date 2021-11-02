import styled from "styled-components";

// UserProviderで囲まれた親コンポーネントにこれが含まれているとglobal stateが使えるのだが
// それを使うために定義するのがこちら
import React, { useContext } from "react";
import { UserContext } from "../../../providers/UserProvider";

// ユーザのイメージと名前だけを使うということを想定してその組み合わせの部分だけを切り離すイメージのmolecule

export const UserIconWithName = (props) => {
  // componentの昨日としては名前とイメージを表示するだけなので受け取るpropsも限定しておいたほうがみんなにとってわかりやすい
  const { name, image, isAdmin } = props;
  // 実際にGlobal stateの内容を受け取るところ
  // どのcontextかを指定してあげる必要がある
  const context = useContext(UserContext);
  console.log(context);

  return (
    <SContainer>
      <SImage alt="profile" height={160} src={image} />
      <SName> {name} </SName>
      {isAdmin && <SEdit> 編集 </SEdit>}
    </SContainer>
  );
};

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
