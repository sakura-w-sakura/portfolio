# Portfolio - Claude Code 設定

## Figma 連携：Code to Canvas

このプロジェクトは Figma の **Code to Canvas** 機能に対応しています。
Claude Code でビルドしたポートフォリオの UI を、そのまま編集可能な Figma フレームとして送信できます。

---

### 必要なもの

- **Figma デスクトップアプリ**（ブラウザ版では利用不可）
- Figma の **Dev または Full シート**
- Claude Code（npm でインストール済み）

---

### セットアップ手順

#### 1. Figma デスクトップアプリで MCP サーバーを有効化

Figma デスクトップアプリを開き、
**環境設定 → Dev Mode MCP Server** をオンにする。
これでローカルサーバーが `http://127.0.0.1:3845/sse` で起動します。

#### 2. このプロジェクトの MCP 設定（設定済み）

`.mcp.json` はすでに以下の設定になっています：

```json
{
  "mcpServers": {
    "figma-dev-mode-mcp-server": {
      "type": "sse",
      "url": "http://127.0.0.1:3845/sse"
    }
  }
}
```

#### 3. 開発サーバーを起動

```bash
npm run dev
```

ブラウザで `http://localhost:3000` を開き、ポートフォリオを表示します。

#### 4. Figma に送信

Claude Code 上で以下のように入力するだけで、ブラウザに表示中の UI が Figma キャンバスに編集可能なフレームとして送られます：

```
Send this to Figma
```

または日本語で：

```
これを Figma に送って
```

---

### 活用例

```
ホームページのヒーローセクションを Figma に送って
```

```
スキルページ全体をキャプチャして Figma に送信して
```

```
全ページを Figma に送って横並びで比較できるようにして
```

---

### MCP サーバー詳細

| 項目 | 値 |
|------|----|
| サーバー種別 | Figma Dev Mode MCP Server（ローカル） |
| URL | `http://127.0.0.1:3845/sse` |
| Transport | SSE |
| 設定ファイル | `.mcp.json` |

詳細は [Figma MCP 開発者ドキュメント](https://developers.figma.com/docs/figma-mcp-server/local-server-installation/) を参照してください。

---

## 開発コマンド

```bash
npm run dev    # 開発サーバー起動 (http://localhost:3000)
npm run build  # プロダクションビルド
npm run lint   # ESLint 実行
```
