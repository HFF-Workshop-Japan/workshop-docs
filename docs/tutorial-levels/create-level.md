---
sidebar_position: 3
---

# レベルの作成

さて、準備が整ったところでレベルの作成を始めます。

作ったばかりのProjectは、不要なオブジェクトが配置されているのでこれを削除します。

<img src="/workshop-docs/img/tutorial-levels/ready_level_create_delete.png" />

次に、Assets > Workshop > Prefabsを選択し、 Levelオブジェクトをプロジェクト直下にドラッグ＆ドロップして配置します。

- Level: HFFのレベルには、このレベルオブジェクトが必要です。
-  FailTrigger: 落下検知ボックス。プレイヤーがこのボックスに触れると、リスポーンされます。
-  PassTrigger: ゴール検知ボックス。レベルのゴールに配置して、ゴール判定を実装します。
-  Directional Light: 光源。

追加されたオブジェクトは、想像できるようにレベルに必要な要素です。  
落下したプレイヤーをリスポーンさせるためのFailTrigger、ゴールさせるための PassTriggerは、主要な要素です。  

<img src="/workshop-docs/img/tutorial-levels/ready_level_create_set_level.png" />

# オブジェクトの配置

Assets > Workshop > Prefabsにある多数のオブジェクトは、そのままSceneウインドウにドラッグ＆ドロップすることで3D空間上に配置することができます。  

Prefabsが青いボックスになり3Dオブジェクトが表示されない場合、Reinport Allを実行することでこの問題を修正できます。

<img src="/workshop-docs/img/tutorial-levels/reimport_all.png" />
<img src="/workshop-docs/img/tutorial-levels/reimport_all_dialog.png" />

貴方がレベル作成初心者の場合、これらPrefabsで用意された3Dオブジェクトを組み合わせてレベルを作成していくことができます。
ここでは、シンプルなレベルを作成しました。

いくつかのPrefabsを組み合わせてステージを作成しました。  
スタート地点にInitialSpawnPointを配置し、ゲートの奥にPassTriggerを配置しました。

<img src="/workshop-docs/img/tutorial-levels/create_simple_level.png" />

# Unity上でプレイ

画面中央のプレイボタンをクリックすると、Gameタブでプレイすることができます。
ちょっとした動作検証などをUnity上で行うことができます。

<img src="/workshop-docs/img/tutorial-levels/create_simple_level.png" />

また、この時カーソルが表示されてしまいますが、Workshop海外コミュニティメンバーによりDiscord上でカーソルを非表示にするスクリプトが配布されています。
https://discord.com/channels/547081451003314178/547378453826109441/565197272443387905

ダウンロード後、Assetsにドラッグ&ドロップした後、Levelオブジェクトにスクリプトをドラッグ&ドロップすることで適用されます。
以降、プレイボタンを押したときにカーソルが表示されなくなります。カーソルを再度表示するにはキーボードの[L]を押します。

<img src="/workshop-docs/img/tutorial-levels/lockcursor_download.png" />
<img src="/workshop-docs/img/tutorial-levels/lockcursor.png" />