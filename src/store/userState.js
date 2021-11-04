// recoilを使うためのおまじない

import { atom } from "recoil";

export const userState = atom({
  // 共通で利用するための命名。ファイル名と揃えておくのが良いのではないか
  key: "userState",
  default: { isAdmin: false }
});
