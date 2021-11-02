import styled from "styled-components";
// 遷移時のstateの数値を受け取る関数
import { useLocation } from "react-router-dom";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";

// 10このオブジェクトを作成している（ダミー）
// arrayを10個だしてmapで同じデータを出している
// idを取り出して名前に表示するようにした

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `平田邦生 ${val}`,
    image:
      "https://www.pngkey.com/png/full/103-1032664_jpg-transparent-download-cute-free-download-mart-girl.png",
    email: "kunio.hirata@riken.jp",
    phone: "08053191649",
    url: "https://kuntaro.com",
    company: {
      name: "RIKEN/SPring-8 Center"
    }
  };
});

export const Users = () => {
  // 呼び出し側からのstateを受け取る
  const { state } = useLocation();
  console.log(state);

  return (
    <SContainer>
      <h2> ユーザ一覧 </h2>
      <SearchInput />
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

// 縦方向にコンポーネントを積んでいく、中心に合わせる
const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

// カードをグリッド表示する→結構テクいので真似してみるだけというレベル
const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
