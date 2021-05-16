---
sidebar_position: 2
---

# Unityプロジェクトの作成

Unityの準備が完了したら、レベルの作成を開始できます。


## 新しいUnityProjectの作成

まず、Unity画面右上の[+New]ボタンから、新しいプロジェクトを作成します。

- Project name: プロジェクト名。自分が管理しやすい名前をつけます。例：HffTutorial
- Location: プロジェクトの保存先を指定します。例としてデスクトップに作成したHFFフォルダを指定しています。
- Organization: 作成者名。自分のIDが表示されています。変更する必要はありません。
- Template: テンプレート。3Dを選択して下さい。変更する必要はありません。

その他の項目も特に変更する必要はありません。[Create project]をクリックして作成します。

## HFF用のプロジェクト設定

次にやるべきことは、HFFレベル作成用にプロジェクトをセットアップすることです。  

1. HFFのAssetをインポートする
2. HFFのProjectSettingを適用する

幸いなことに、HFFワークショップディレクトリ配下にそれらのリソースが用意されています。
```
C:¥Program Files(x86)¥Steam¥steamapps¥common¥Human Fall Flat¥WorkshopPackage
```

### 1. HFFのAssetをインポートする

Assets > Import Package > Custom Package... を選択し、上記のパスにある `Human.unitypackage`を開きます。  

全てにチェックがついていることを確認し、[Import]をクリックします。
この処理には5分~10分程度の時間を要します。

### 2. HumanFallFlatのProjectSettingを適用する

上記のパスにある`ProjectSettings`フォルダを丸ごと、先ほど作成したUnityプロジェクトのフォルダにコピー＆ペーストします。
その後、Unityを再起動し、Unityプロジェクトを開き直して下さい。

### 確認

Unity画面下部に配置される[Project]タブのAssetsが下記のような状態になっていることを確認します。
Unity画面上部のメニュー内に[Human]が追加されていることを確認します。

これでHFF用プロジェクト設定は完了です。