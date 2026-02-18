import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Your Name",
};

export default function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold tracking-tight mb-2">Contact</h1>
      <p className="text-neutral-400 mb-16">お問い合わせ</p>

      <div className="grid md:grid-cols-2 gap-16">
        {/* Info */}
        <div className="space-y-6">
          <p className="text-neutral-500 leading-relaxed">
            お仕事のご依頼・ご相談はお気軽にどうぞ。
            2営業日以内にご返信いたします。
          </p>
          <div className="space-y-3 text-sm">
            <div>
              <span className="font-medium text-neutral-700">Email</span>
              <p className="text-neutral-500 mt-1">your@email.com</p>
            </div>
            <div>
              <span className="font-medium text-neutral-700">SNS</span>
              <div className="flex gap-4 mt-1">
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-500 hover:text-neutral-900 transition-colors"
                >
                  X (Twitter)
                </a>
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-500 hover:text-neutral-900 transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <form className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1.5">
              お名前
            </label>
            <input
              id="name"
              type="text"
              name="name"
              required
              className="w-full px-4 py-2.5 border border-neutral-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition"
              placeholder="山田 太郎"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1.5">
              メールアドレス
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              className="w-full px-4 py-2.5 border border-neutral-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1.5">
              メッセージ
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full px-4 py-2.5 border border-neutral-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition resize-none"
              placeholder="ご相談内容をお書きください"
            />
          </div>
          <button
            type="submit"
            className="w-full px-6 py-3 bg-neutral-900 text-white text-sm font-medium rounded-lg hover:bg-neutral-700 transition-colors"
          >
            送信する
          </button>
          <p className="text-xs text-neutral-400 text-center">
            ※ このフォームはデモ用です。実際の送信には別途設定が必要です。
          </p>
        </form>
      </div>
    </div>
  );
}
