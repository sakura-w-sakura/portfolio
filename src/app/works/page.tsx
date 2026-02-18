import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Works | Your Name",
};

const works = [
  {
    id: 1,
    title: "プロジェクト名 A",
    category: "UI/UXデザイン",
    year: "2024",
    description: "モバイルアプリのUIデザイン。ユーザーリサーチから始めてプロトタイプまで担当しました。",
    tags: ["Figma", "UXリサーチ", "iOS"],
  },
  {
    id: 2,
    title: "プロジェクト名 B",
    category: "Webデザイン",
    year: "2024",
    description: "コーポレートサイトのリニューアル。ブランドイメージの刷新とコンバージョン改善が目標でした。",
    tags: ["Figma", "ブランディング", "Web"],
  },
  {
    id: 3,
    title: "プロジェクト名 C",
    category: "ブランディング",
    year: "2023",
    description: "スタートアップのロゴ・ブランドアイデンティティ設計。ガイドラインの作成まで行いました。",
    tags: ["Illustrator", "ブランディング"],
  },
];

export default function WorksPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold tracking-tight mb-2">Works</h1>
      <p className="text-neutral-400 mb-16">制作物</p>

      <div className="grid md:grid-cols-2 gap-8">
        {works.map((work) => (
          <article
            key={work.id}
            className="group border border-neutral-100 rounded-2xl overflow-hidden hover:border-neutral-300 transition-colors"
          >
            {/* Thumbnail placeholder */}
            <div className="aspect-video bg-neutral-100 flex items-center justify-center text-neutral-300 text-sm">
              サムネイルをここに追加
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-neutral-400 uppercase tracking-wider">
                  {work.category}
                </span>
                <span className="text-xs text-neutral-400">{work.year}</span>
              </div>
              <h2 className="text-lg font-semibold mb-2 text-neutral-900">{work.title}</h2>
              <p className="text-sm text-neutral-500 leading-relaxed mb-4">
                {work.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {work.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-xs bg-neutral-100 text-neutral-500 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
