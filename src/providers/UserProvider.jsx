// providerというものを作成して、それを利用する親コンポーネントを囲ってあげるイメージで利用する
import React, { createContext } from "react";

// 定義：初期化には空のオブジェクトを渡す
export const UserContext = createContext({});

// なれるしか無いのでなれる
export const UserProvider = (props) => {
  const { children } = props;
  const contextName = "KunioHirata";
  return (
    // valueで指定したものをグローバルなステートとして管理する
    <UserContext.Provider value={{ contextName }}>
      {children}
    </UserContext.Provider>
  );
};
