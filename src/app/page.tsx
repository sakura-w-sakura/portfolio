import Link from "next/link";

export default function Home() {
  return (
    <section className="max-w-5xl mx-auto px-6 flex flex-col justify-center min-h-[calc(100vh-4rem)] py-24">
      <p className="text-sm font-medium text-neutral-400 tracking-widest uppercase mb-6">
        Designer Portfolio
      </p>
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight text-neutral-900 mb-6">
        Hello, I&apos;m<br />
        <span className="text-neutral-400">Your Name.</span>
      </h1>
      <p className="text-lg md:text-xl text-neutral-500 max-w-xl mb-10 leading-relaxed">
        UI/UXデザイナーとして、使いやすく美しいデジタル体験をつくっています。
      </p>
      <div className="flex flex-wrap gap-4">
        <Link
          href="/works"
          className="inline-flex items-center px-6 py-3 bg-neutral-900 text-white text-sm font-medium rounded-full hover:bg-neutral-700 transition-colors"
        >
          制作物を見る
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center px-6 py-3 border border-neutral-300 text-sm font-medium rounded-full hover:border-neutral-900 transition-colors"
        >
          お問い合わせ
        </Link>
      </div>
    </section>
  );
}
