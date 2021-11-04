// providerというものを作成して、それを利用する親コンポーネントを囲ってあげるイメージで利用する
import React, { createContext, useState } from "react";

// 定義：初期化には空のオブジェクトを渡す
export const UserContext = createContext({});

// なれるしか無いのでなれる
export const UserProvider = (props) => {
  const { children } = props;
  // どの関数からでもデータを参照して、変更できるようにvalueとして値と関数を渡してあげる
  // このまま利用するとこの情報が更新されるとそれをつかっているコンポーネントはすべて再レンダリングされる
  const [userInfo, setUserInfo] = useState({ isAdmin: false });

  return (
    // valueで指定したものをグローバルなステートとして管理する
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};
