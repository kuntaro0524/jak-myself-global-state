import styled from "styled-components";
import { useRecoilValue } from "recoil";

// UserProviderで囲まれた親コンポーネントにこれが含まれているとglobal stateが使えるのだが
// それを使うために定義するのがこちら
import React, { memo } from "react";
import { userState } from "../../../store/userState";

// ユーザのイメージと名前だけを使うということを想定してその組み合わせの部分だけを切り離すイメージのmolecule

export const UserIconWithName = memo((props) => {
  // 再レンダリングの機能評価のためのログ
  console.log("UserIconWithName");

  // componentの昨日としては名前とイメージを表示するだけなので受け取るpropsも限定しておいたほうがみんなにとってわかりやすい
  const { name, image } = props;

  // ここで recoil を利用した変数へのアクセスが行われる
  // 値だけを参照したいときは useRecoilValue　とかく。
  // 注意点としてはここで [] で変数と関数をいつもはうけている（useState とか）のだが、単独の情報として代入なので[]とか{}が不要ってこと
  // もともと配列データなのでそりゃそうかって感じ
  const userInfo = useRecoilValue(userState);
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
