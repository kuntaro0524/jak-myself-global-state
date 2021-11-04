import "./styles.css";
import { Router } from "./router/Router";
import { UserProvider } from "./providers/UserProvider";
import { RecoilRoot } from "recoil";

export default function App() {
  return (
    // recoilを利用するときのタグ
    <RecoilRoot>
      <UserProvider>
        {/* {console.log(contextName)} */}
        <Router />
      </UserProvider>
    </RecoilRoot>
  );
}
