---
sidebar_position: 4
---

# レベルのエクスポート

レベルの必要な要素をセットアップできたので、HFFでプレイするためにレベルをエクスポートします。  

## サムネイルの撮影
エクスポートするためには、サムネイルが必要です。まずプレイボタンをクリックしUnity上でプレイを開始します。
F8を押すと、自由視点になりますので、サムネイルにしたい位置に移動し、F9を押すとサムネイルが撮影されます。
右上にThumnail Capturedと表示されます。

<img src="/workshop-docs/img/tutorial-levels/export_thumbnail_captured.png" />

## エクスポートウインドウ
Unityメニューの中から、 Human > Human Export をクリックします。

<img src="/workshop-docs/img/tutorial-levels/export_human.png" />

エクスポートする際、タイトルや説明などを入力するウインドウが表示されます。

- ドリームタイトル：レベルの名前を入力します。ワークショップや、ゲーム内で表示されます。
- ドリーム説明：レベルの説明です。ワークショップや、ゲーム内で表示されます。
- ドリームタイプ：マルチプレイヤーを選択します。
- テーマタグ：ワークショップの検索などで使われます。

[ドリームをエクスポート]をクリックしてエクスポートを開始します。

<img src="/workshop-docs/img/tutorial-levels/export.png" />

## HFF内でテストプレイ
エクスポートされたレベルは、HFFゲーム内からプレイすることができます。  
なおこの時点では、ローカルに出力されているだけでワークショップに公開されていません。  

一度Unityを閉じて、HFFを起動します。
出力したレベルは、PLAY > LOCAL > SELECT LEVEL > LOCAL LEVELS に表示されます。

<img src="/workshop-docs/img/tutorial-levels/export_locallevels.png" />
<img src="/workshop-docs/img/tutorial-levels/gameplay.png" />

実際にプレイして、動作に問題がないかを確認します。
- 落下するとリスポーンすること
- ゴールに入ると、レベルクリアすること