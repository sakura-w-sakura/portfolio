import Link from "next/link";

const featuredWorks = [
  {
    id: 1,
    title: "プロジェクト名 A",
    category: "UI/UXデザイン",
    year: "2024",
    description:
      "モバイルアプリのUIデザイン。ユーザーリサーチから始めてプロトタイプまで担当しました。",
    tags: ["Figma", "UXリサーチ", "iOS"],
    color: "bg-neutral-100",
  },
  {
    id: 2,
    title: "プロジェクト名 B",
    category: "Webデザイン",
    year: "2024",
    description:
      "コーポレートサイトのリニューアル。ブランドイメージの刷新とコンバージョン改善が目標でした。",
    tags: ["Figma", "ブランディング", "Web"],
    color: "bg-stone-100",
  },
];

const services = [
  {
    number: "01",
    title: "UIデザイン",
    description:
      "使いやすく美しいインターフェースを設計します。ユーザーの目線に立ったデザインで、最高の体験を実現します。",
  },
  {
    number: "02",
    title: "UXリサーチ",
    description:
      "ユーザーインタビューや調査を通じて、課題を発見し、的確なデザインソリューションを提案します。",
  },
  {
    number: "03",
    title: "ブランディング",
    description:
      "ロゴからブランドガイドラインまで、一貫したビジュアルアイデンティティを構築します。",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-12">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 text-xs font-medium text-neutral-400 tracking-widest uppercase mb-8">
              <span className="w-6 h-px bg-neutral-300"></span>
              Available for work
            </p>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight text-neutral-900 mb-8">
              Hello, I&apos;m
              <br />
              <span className="text-neutral-400">Your Name.</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-500 max-w-xl mb-10 leading-relaxed">
              UI/UXデザイナーとして、使いやすく美しいデジタル体験をつくっています。
              ユーザーを中心に考えた設計で、価値あるプロダクトを生み出します。
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/works"
                className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 text-white text-sm font-medium rounded-full hover:bg-neutral-700 transition-colors"
              >
                制作物を見る
                <span className="text-neutral-400">→</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 border border-neutral-200 text-sm font-medium rounded-full hover:border-neutral-900 transition-colors"
              >
                お問い合わせ
              </Link>
            </div>
          </div>

          {/* Profile placeholder */}
          <div className="w-40 h-40 md:w-52 md:h-52 bg-neutral-100 rounded-full flex-shrink-0 flex items-center justify-center text-neutral-300 text-sm text-center self-center md:self-auto">
            写真
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-8 pt-12 border-t border-neutral-100">
          <div>
            <p className="text-3xl font-bold text-neutral-900 mb-1">3+</p>
            <p className="text-sm text-neutral-400">年の経験</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-neutral-900 mb-1">20+</p>
            <p className="text-sm text-neutral-400">プロジェクト</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-neutral-900 mb-1">15+</p>
            <p className="text-sm text-neutral-400">クライアント</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="border-t border-neutral-100 bg-neutral-50">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <div className="mb-14">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 mb-2">
              サービス
            </h2>
            <p className="text-sm text-neutral-400">What I Do</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.number}>
                <p className="text-xs font-mono text-neutral-300 mb-4">
                  {service.number}
                </p>
                <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Works Section */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="flex items-baseline justify-between mb-14">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 mb-2">
              注目の制作物
            </h2>
            <p className="text-sm text-neutral-400">Featured Works</p>
          </div>
          <Link
            href="/works"
            className="text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors hidden md:block"
          >
            すべて見る →
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {featuredWorks.map((work) => (
            <article
              key={work.id}
              className="group border border-neutral-100 rounded-2xl overflow-hidden hover:border-neutral-300 hover:shadow-sm transition-all"
            >
              <div
                className={`aspect-video ${work.color} flex items-center justify-center text-neutral-300 text-sm`}
              >
                サムネイルをここに追加
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-neutral-400 uppercase tracking-wider">
                    {work.category}
                  </span>
                  <span className="text-xs text-neutral-400">{work.year}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-neutral-900">
                  {work.title}
                </h3>
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

        <div className="mt-8 md:hidden">
          <Link
            href="/works"
            className="text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors"
          >
            すべて見る →
          </Link>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="border-t border-neutral-100">
        <div className="max-w-5xl mx-auto px-6 py-20 text-center">
          <p className="text-xs font-medium text-neutral-400 tracking-widest uppercase mb-6">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 mb-6">
            お気軽にご連絡ください
          </h2>
          <p className="text-neutral-500 max-w-md mx-auto mb-10 leading-relaxed">
            新しいプロジェクトのご相談、お仕事のご依頼など、
            お気軽にお問い合わせください。
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-neutral-900 text-white text-sm font-medium rounded-full hover:bg-neutral-700 transition-colors"
          >
            メッセージを送る
            <span>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
