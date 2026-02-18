import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Your Name",
};

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold tracking-tight mb-2">About</h1>
      <p className="text-neutral-400 mb-16">自己紹介</p>

      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* Avatar placeholder */}
        <div className="aspect-square max-w-sm bg-neutral-100 rounded-2xl flex items-center justify-center text-neutral-300 text-sm">
          写真をここに追加
        </div>

        {/* Bio */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-3">Your Name</h2>
            <p className="text-neutral-500 leading-relaxed">
              UI/UXデザイナーとして○年の経験を持ちます。
              ユーザーを中心に考えた設計と、細部へのこだわりを大切にしています。
              Webアプリ・モバイルアプリのデザインからブランディングまで幅広く対応しています。
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-400 mb-3">
              得意なこと
            </h3>
            <ul className="space-y-2 text-neutral-600 text-sm">
              <li>・ UIデザイン / プロトタイピング</li>
              <li>・ ユーザーリサーチ / 情報設計</li>
              <li>・ ブランドアイデンティティデザイン</li>
              <li>・ デザインシステム構築</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-400 mb-3">
              使用ツール
            </h3>
            <div className="flex flex-wrap gap-2">
              {["Figma", "Adobe Illustrator", "Photoshop", "Notion"].map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1 text-xs font-medium bg-neutral-100 rounded-full text-neutral-600"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
