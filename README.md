# jak-myself-atomic-design

前回までのレクチャの完成版を開始点として global state を知っている場合と知らない場合の実装について勉強する

# Users.jsx で state を受け取る

- Top.jsx の中の useHistory に渡される state
- Users.jsx の useLocation で受け取る
- その内容を console に表示するだけ

# provider を作成する

## provider というものを作成して、それを利用する親コンポーネントを囲ってあげるイメージで利用する

- UserProvider.jsx の中身で定形の設定をする (export するのが２点ある → 混乱気味 2021/11/02)

### まず UserContext というオブジェクトの空配列初期化で定義する(export する)

- UserContext 　に createContext によって空のオブジェクト初期化したものを入れる
- 最終的に Global state を受け取りたい関数の中で UserContext 　を指定するので注意

### 次に　 Provider('UserProvider') を export の関数として定義する

- props から children を受け取ってそのまま表示できるようにしておく
  -- 囲ったものが global state を知ることができる仕様
- UserContext.Provider の props に value として管理したい値を宣言する
  -- 今は固定の文字列を入れている
- UserContext で定義したオブジェクトを Global state として利用するという紐付けが行われた

##　定義した global state を使うには？

### App.jsx の中で　定義した Provider でコンポーネントを囲ってあげる

- 読んだ通り。囲まれた子コンポーネントは Global state を利用することができる

### 実際に値を取り出すには？　　 UserIconWithName.jsx に実装してある

- useContext を利用すると global state を利用することができる
- 使うときには `import React, { useContext } from "react";`
- `const context = useContext(UserContext);`
- 重要なことはここでどのコンテキストを利用するのか？ということを宣言しながら useContext を呼ぶこと
- UserContext は上述したとおり　 UserProvider の中に定義してある
- 上記の例でいうと context に "KunioHirata" という文字列を入れている → これが参照できるようになった

# 一定の数値だけではなく global state を利用する方法（Hooks と似ているような気がする）

## UserProvider.jsx の中でどこからでも使える変数とセット関数を定義する

-　ここまでは "KunioHirata" という文字列を context としていたが、より汎用的にしていく。

- UserProvider.jsx の中でどのコンポーネントからでも値が参照、変更できるように useState を宣言する
- const [userInfo, setUserInfo] = useState(null);
- こうすると userInfo がグローバル変数、setUserInfo がその変数をセットする関数として定義できる

## 今回のコミットでは、まず Top.jsx の中で setUserInfo を利用して初期値(isAdmin)を設定する

- onClick のところで「管理者」か「一般ユーザ」かというボタンを押したときに管理者ならば isAdmin 　を true 　にする
- setUserInfo({ isAdmin: true });
- 今の所 TypeScript を使っていないので、 UserProvider.jsx で定義した「空のオブジェクト」に数値をここで勝手に入れる感じ
- ここで変更したものは「バケツリレーしなくても」参照することができるので以下にその方法を記載する

## 「UserIconWithName.jsx の中からその情報へアクセスする」

- UserContext を参照する準備をする
  - import React, { useContext } from "react";
  - import { UserContext } from "../../../providers/UserProvider";
- UserContext の値を受け取る方法
  - const { userInfo } = useContext(UserContext);
  - こうすると userInfo の今の中身を受け取ることができる → これに isAdmin が入っている
  - あとは global に userInfo が定義されているかどうかを確認してあれば値を得る。なければ false を入れるなど
  - const isAdmin = userInfo ? userInfo.isAdmin : false;

これでバケツリレーが完全に解消されたことを確認した。

# useContext を利用する際の注意点

- 再レンダリングされる →props の更新があった場合
- useContext 　で指定したグローバル変数を利用している関数は再レンダリングされる
- それが再レンダリングされたときに、その子コンポーネントは再レンダリングされる

## 具体的には

- ユーザカードを表示するところにボタンを作成しておしたら isAdmin (useContext)を切り替えるようにした
- これを押したときにどのコンポーネントが再レンダリングしているかを console.log 上に表示してみた

ということを示したコードになっています。

## useContext 　の変数に関係する（再レンダリングされそうな）コンポーネント

- memo を適用することで無駄な再レンダリングがされなくなる

? もとは props が更新されたときにしか再レンダリングしない　という設定だったはず
