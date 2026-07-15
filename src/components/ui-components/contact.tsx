import { ArrowRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

import { cn } from "@/lib/utils";

import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { BlurFade } from "@/components/ui/blur-fade";
import { GridPattern } from "@/components/ui/grid-pattern";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative isolate flex min-h-screen items-center justify-center overflow-hidden px-6 py-24"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Grid */}
        <GridPattern
          squares={[
            [2, 3],
            [4, 6],
            [7, 2],
            [8, 8],
            [10, 5],
            [13, 10],
            [15, 6],
            [18, 12],
            [20, 8],
            [22, 15],
            [25, 4],
            [28, 11],
            [31, 7],
            [34, 14],
          ]}
          className={cn(
            "absolute inset-0 h-full w-full",
            "text-white/6",
            "mask-[radial-gradient(circle_at_center,white,transparent_80%)]"
          )}
        />

        {/* Cyan Glow */}
        <div className="absolute -left-52 top-0 h-162.5 w-162.5 rounded-full bg-cyan-500/15 blur-[180px]" />

        {/* Purple Glow */}
        <div className="absolute -right-52 bottom-0 h-162.5 w-162.5 rounded-full bg-violet-500/15 blur-[180px]" />

        {/* Subtle Dark Tint */}
        <div className="absolute inset-0 bg-slate-950/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
        {/* Badge */}
        <BlurFade delay={0.1}>
          <div className="group rounded-full border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40">
            <AnimatedShinyText className="inline-flex items-center gap-2 px-6 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300">
              LET&apos;S CONNECT
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </AnimatedShinyText>
          </div>
        </BlurFade>

        {/* Heading */}
        <BlurFade delay={0.2}>
          <h1 className="mt-12 max-w-4xl text-5xl font-black leading-[0.95] text-white md:text-7xl lg:text-8xl">
            Ready to build
            <br />
            something{" "}
            <span className="bg-linear-to-r from-cyan-400 via-sky-400 to-violet-500 bg-clip-text text-transparent">
              great
            </span>
            <br />
            together?
          </h1>
        </BlurFade>

        {/* Description */}
        <BlurFade delay={0.3}>
          <p className="mt-10 max-w-3xl text-lg leading-8 text-gray-300 md:text-xl">
            Whether you're a recruiter, startup, company, or fellow developer,
            I'm always open to meaningful conversations, collaborations and
            exciting opportunities.
          </p>
        </BlurFade>

        {/* Email Card */}
        <BlurFade delay={0.4}>
          <a
            href="mailto:johnhenrylinks@gmail.com"
            className="group mt-14 flex w-full max-w-2xl items-center justify-between rounded-3xl border border-white/10 bg-black/30 px-8 py-6 backdrop-blur-2xl ring-1 ring-white/10 transition-all duration-500 hover:border-cyan-400/40 hover:shadow-[0_0_80px_rgba(34,211,238,0.18)]"
          >
            <div className="flex items-center gap-4">
              <Mail className="h-7 w-7 text-cyan-300" />

              <span className="text-xl font-bold text-white md:text-3xl">
                johnhenrylinks@gmail.com
              </span>
            </div>

            <ArrowRight className="h-7 w-7 text-white transition-transform duration-300 group-hover:translate-x-2" />
          </a>
        </BlurFade>

        {/* Socials */}
        <BlurFade delay={0.5}>
          <div className="mt-14 flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/JohnnyBoy-Mr"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-full border border-white/10 bg-black/25 px-8 py-4 text-white backdrop-blur-xl ring-1 ring-white/10 transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/10"
            >
              <FaGithub className="text-xl transition-transform duration-300 group-hover:scale-110" />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/john-henry-links-a05397190"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-full border border-white/10 bg-black/25 px-8 py-4 text-white backdrop-blur-xl ring-1 ring-white/10 transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/10"
            >
              <FaLinkedin className="text-xl transition-transform duration-300 group-hover:scale-110" />
              LinkedIn
            </a>

            <a
              href="http://drive.google.com/open?id=1A_4djJah5CY3lKufXDAOSvb_i1eH4Dk1&resourcekey=0"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 bg-black/25 px-8 py-4 text-white backdrop-blur-xl ring-1 ring-white/10 transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/10"
            >
              Resume
            </a>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}