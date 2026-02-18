export default function Footer() {
  return (
    <footer className="border-t border-neutral-100 py-8 mt-24">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-400">
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-900 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-900 transition-colors"
          >
            X (Twitter)
          </a>
        </div>
      </div>
    </footer>
  );
}
