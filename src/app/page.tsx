const projects = [
  {
    id: 1,
    title: "Project Name",
    description:
      "A brief description of the project and what was accomplished. The challenges faced and the creative solutions implemented to deliver results.",
    href: "/works",
  },
  {
    id: 2,
    title: "Project Name",
    description:
      "A brief description of the project and what was accomplished. The challenges faced and the creative solutions implemented to deliver results.",
    href: "/works",
  },
  {
    id: 3,
    title: "Project Name",
    description:
      "A brief description of the project and what was accomplished. The challenges faced and the creative solutions implemented to deliver results.",
    href: "/works",
  },
];

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* ── Hero ── */}
      <section className="min-h-screen flex items-center bg-white">
        <div className="max-w-6xl mx-auto px-8 py-24 w-full flex flex-col lg:flex-row items-center gap-16">
          {/* Left */}
          <div className="flex-1 max-w-xl">
            <span className="inline-block bg-orange-500 text-white text-xs font-bold px-5 py-2 rounded-full tracking-widest uppercase mb-8">
              UI/UX Designer
            </span>
            <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              Hello, my name is
              <br />
              Madelyn Torff
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed mb-10">
              I design digital experiences that are beautiful, intuitive, and
              meaningful. Let&apos;s create something great together.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a
                href="#projects"
                className="px-8 py-4 bg-yellow-400 text-gray-900 font-bold rounded-full hover:bg-yellow-300 transition-colors"
              >
                Projects
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-gray-900 text-gray-900 font-bold rounded-full hover:bg-gray-50 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right – blob + photo */}
          <div className="flex-shrink-0 relative w-72 h-72 lg:w-96 lg:h-96">
            {/* Yellow blob */}
            <div
              className="absolute inset-0 bg-yellow-400"
              style={{ borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" }}
            />
            {/* Photo placeholder */}
            <div className="absolute inset-6 rounded-full bg-gray-200 flex items-center justify-center text-gray-400 text-sm font-medium overflow-hidden">
              Photo
            </div>
          </div>
        </div>
      </section>

      {/* ── Projects ── */}
      <section id="projects" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 inline-block relative pb-3">
              Projects
              <span className="absolute bottom-0 left-0 w-full h-2 bg-yellow-400 rounded-full" />
            </h2>
          </div>

          <div className="space-y-20">
            {projects.map((project, i) => (
              <div
                key={project.id}
                className={`flex flex-col ${
                  i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-12 items-center`}
              >
                {/* Image placeholder */}
                <div className="flex-1 w-full aspect-[4/3] bg-gray-100 rounded-2xl flex items-center justify-center text-gray-400 text-sm">
                  Project Image
                </div>

                {/* Text */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed mb-8">
                    {project.description}
                  </p>
                  <a
                    href={project.href}
                    className="inline-block px-8 py-3 border-2 border-gray-900 text-gray-900 font-bold rounded-full hover:bg-gray-50 transition-colors"
                  >
                    View Project
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 inline-block relative pb-3">
              Contact
              <span className="absolute bottom-0 left-0 w-full h-2 bg-yellow-400 rounded-full" />
            </h2>
          </div>

          <div className="max-w-lg">
            <div className="mb-8">
              <input
                type="text"
                placeholder="Name"
                className="w-full border-b-2 border-gray-200 py-4 text-gray-700 placeholder-gray-400 outline-none focus:border-yellow-400 transition-colors bg-transparent text-lg"
              />
            </div>
            <div className="mb-8">
              <input
                type="email"
                placeholder="Email"
                className="w-full border-b-2 border-gray-200 py-4 text-gray-700 placeholder-gray-400 outline-none focus:border-yellow-400 transition-colors bg-transparent text-lg"
              />
            </div>
            <div className="mb-12">
              <textarea
                placeholder="Message"
                rows={5}
                className="w-full border-b-2 border-gray-200 py-4 text-gray-700 placeholder-gray-400 outline-none focus:border-yellow-400 transition-colors bg-transparent text-lg resize-none"
              />
            </div>
            <button className="px-10 py-4 bg-yellow-400 text-gray-900 font-bold rounded-full hover:bg-yellow-300 transition-colors text-lg">
              Send
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
