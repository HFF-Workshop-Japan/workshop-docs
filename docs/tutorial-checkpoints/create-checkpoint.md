# チェックポイントの作成

チェックポイントの構成要素は主に２つです。  
この二つのコンポーネントを持つGameObjectがチェックポイントとして動作します。

- Checkpoint(Script)
- Box Cllider ボックスコライダー

## 空のゲームオブジェクトを作成

Level階層配下に、空のゲームオブジェクトを作成します。

Hierarchyウインドウの`Level`を右クリックし、`Create Empty`を選択します。

<img src="/workshop-docs/img/tutorial-checkpoints/tutorial_levels_checkpoint_1.png" />

## 必要なコンポーネントを追加

Hierarchyウインドウで作成した`GameObject`をクリックすると、画面右側のInspectorウインドウに情報が表示されます。
**[Add Component]**ボタンから、下記のコンポーネントを追加し、コンポーネントの値を設定してください。

- **Checkpoint(Script)**を追加
- `Number`に`1`と入力。

`Number`属性は、レベル内でユニークである必要があります。  
`InitialSpawnpoint`オブジェクトにも同じスクリプトが設定されており、`Number`に`0`が設定されているので、
新規に作成するチェックポイントには `1~` の連番を設定していきます。

- **Box Cllider**
- `Is Trigger`にチェック

今回はスクリプトで検出したいため`Is Trigge`にチェックを入れます。  
すると、プレイヤーは箱に衝突せずにすり抜け、スクリプトはプレイヤーを衝突を検知できます。

次に、チェックポイントで重要な設定がInspectorウインドウ上部に表示されている`Layer`です。  
ここを、`Default`ではなく、`Triggers`に設定することでカメラが`Box Cllider`を壁と認識しなくなります。

最後に、`GameObject`を`Checkpoint`といったわかりやすい名前に変更しておきます。

さて、ここまで設定すると下記のようになります。

<img src="/workshop-docs/img/tutorial-checkpoints/tutorial_levels_checkpoint_2.png" />

## 当たり判定を広げる（オプション）

デフォルトでは、`Box Colider`は非常に小さく、プレイヤーがトリガーに触れることなく次のステージに進んでしまう可能性があります。実際の大きさは、上記の画像で黄緑の線で囲われた部分（ほぼ赤丸の範囲）となっています。  

Box Coliderの当たり判定を広げるには、Inspectorウインドウの`Box Cllider`にある`Edit Cllider`をクリックすることで編集可能です。

<img src="/workshop-docs/img/tutorial-checkpoints/tutorial_levels_checkpoint_3.png" />

## 複数のチェックポイントを配置する

チェックポイントはレベル内に複数配置できます。  
最初に作成したCheckpointオブジェクトを選択し、コピー＆ペーストすることで複製できます。  

注意点として、Checkpointオブジェクトに設定された`Checkpoint(Script)`の`Number`もコピーされてしまうため、レベル内でユニークになるように番号を設定してください。

<img src="/workshop-docs/img/tutorial-checkpoints/tutorial_levels_checkpoint_4.png" />

## 動作検証する

レベルをエクスポートして動作確認を行います。  

設置したチェックポイントの`Box Collider`に触れると、画面右上に**"Saving..."**と表示されます。  
その後、奈落に落下し`Fall Trigger`に触れると、セーブポイントにリスポーンされます。  

これでチェックポイントの設定は成功です。

<img src="/workshop-docs/img/tutorial-checkpoints/tutorial_levels_checkpoint_5.png" />
