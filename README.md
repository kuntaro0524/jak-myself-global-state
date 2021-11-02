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
- 上記の例でいうと context に "KunioHirata" という文字列を入れている → これが参照できるようになった
