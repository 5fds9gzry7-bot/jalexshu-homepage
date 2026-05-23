import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Mathematics Notes",
    description: "Clear notes on algebra, probability, differential equations, and linear algebra.",
    tag: "Math",
  },
  {
    title: "Python & AI Practice",
    description: "Small coding projects for numerical computing, machine learning, and automation.",
    tag: "Coding",
  },
  {
    title: "MV Editing Archive",
    description: "A personal collection of video editing experiments inspired by 1980s Japanese and Hong Kong music.",
    tag: "Video",
  },
  {
    title: "Language Learning Log",
    description: "Japanese, Korean, Vietnamese, Cantonese, and English learning records with etymology notes.",
    tag: "Languages",
  },
];

const interests = [
  {
    icon: "∑",
    title: "Pure Mathematics",
    text: "Algebra, abstraction, structures, and mathematical reasoning.",
  },
  {
    icon: "</>",
    title: "AI & Programming",
    text: "Python, machine learning, automation, and practical coding tools.",
  },
  {
    icon: "文",
    title: "Languages",
    text: "English, Japanese, Cantonese, Vietnamese, Korean, and Chinese historical linguistics.",
  },
  {
    icon: "♪",
    title: "Music & Video",
    text: "1980s Japanese and Hong Kong songs, MV editing, subtitles, and visual style.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function JalexPersonalHomepage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.24),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(236,72,153,0.18),_transparent_35%)]" />
        <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-8 lg:px-8">
          <nav className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-neutral-950 font-bold">
                J
              </div>
              <div>
                <p className="font-semibold tracking-wide">Jalex Shu</p>
                <p className="text-xs text-neutral-400">Mathematics · AI · Languages</p>
              </div>
            </div>
            <a
              href="mailto:syx1049329707@gmail.com"
              className="hidden rounded-full border border-white/10 px-4 py-2 text-sm text-neutral-200 transition hover:border-white/30 hover:bg-white/10 sm:inline-flex"
            >
              Contact
            </a>
          </nav>

          <div className="grid flex-1 items-center gap-12 py-20 lg:grid-cols-[1.15fr_0.85fr]">
            <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.7 }}>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-neutral-300">
                <span>✦</span>
                Undergraduate Mathematics Student
              </div>
              <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
                Building a bridge between
                <span className="block bg-gradient-to-r from-indigo-300 via-fuchsia-300 to-rose-200 bg-clip-text text-transparent">
                  mathematics and creativity.
                </span>
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-neutral-300">
                I am Jalex Shu, an undergraduate mathematics student interested in algebra, optimization, artificial intelligence, language learning, and video editing culture.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-neutral-950 transition hover:bg-neutral-200"
                >
                  View Projects <span>→</span>
                </a>
                <a
                  href="#about"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 px-6 py-3 font-medium text-neutral-100 transition hover:border-white/30 hover:bg-white/10"
                >
                  About Me
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur"
            >
              <div className="rounded-[1.5rem] bg-neutral-900 p-6">
                <div className="mb-6 flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-red-400" />
                  <div className="h-3 w-3 rounded-full bg-yellow-400" />
                  <div className="h-3 w-3 rounded-full bg-green-400" />
                </div>
                <pre className="overflow-x-auto text-sm leading-7 text-neutral-300">
                  <code>{`const jalex = {
  major: "Mathematics",
  interests: [
    "Algebra",
    "Optimization",
    "AI",
    "Languages",
    "MV Editing"
  ],
  goal: "Think deeply, build clearly."
};`}</code>
                </pre>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-white/5 p-4">
                  <div className="mb-3 text-xl text-indigo-300">🎓</div>
                  <p className="text-sm text-neutral-400">Current Focus</p>
                  <p className="font-medium">Math + AI Skills</p>
                </div>
                <div className="rounded-2xl bg-white/5 p-4">
                  <div className="mb-3 text-xl text-fuchsia-300">⌖</div>
                  <p className="text-sm text-neutral-400">Based in</p>
                  <p className="font-medium">China / Singapore</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-300">About</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">I like abstract ideas that can become real tools.</h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-neutral-300">
            <p>
              My academic background is in mathematics. I enjoy abstract thinking, especially topics connected to algebra, structures, optimization, and mathematical modeling.
            </p>
            <p>
              At the same time, I am building practical skills in programming, AI, and automation. I want to use code not only for assignments, but also for personal projects, learning systems, and creative media work.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {interests.map((item) => (
            <div key={item.title} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:bg-white/[0.07]">
              <div className="mb-5 text-2xl font-semibold text-neutral-200">{item.icon}</div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-neutral-400">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-fuchsia-300">Projects</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">Selected Work</h2>
            </div>
            <p className="max-w-xl text-neutral-400">
              A simple project section. Replace these cards with your GitHub repositories, notes, videos, or portfolio pieces later.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project) => (
              <article key={project.title} className="group rounded-3xl border border-white/10 bg-neutral-950 p-6 transition hover:-translate-y-1 hover:border-white/25">
                <div className="mb-8 inline-flex rounded-full bg-white/10 px-3 py-1 text-xs text-neutral-300">
                  {project.tag}
                </div>
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="mt-4 leading-7 text-neutral-400">{project.description}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm text-neutral-300 transition group-hover:text-white">
                  Coming soon <span>→</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-8 md:p-12">
          <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-200">Contact</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight">Let&apos;s connect.</h2>
              <p className="mt-5 max-w-2xl leading-7 text-neutral-300">
                I am open to academic conversations, coding practice, language learning exchange, and creative video projects.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
              <a href="mailto:syx1049329707@gmail.com" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-neutral-950 transition hover:bg-neutral-200">
                <span>✉</span> Email Me
              </a>
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-6 py-3 font-medium transition hover:border-white/30 hover:bg-white/10">
                <span>◆</span> GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} Jalex Shu. Built with React and Tailwind CSS.
      </footer>
    </main>
  );
}
