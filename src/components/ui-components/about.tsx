import {
  Code2,
  Laptop,
  FolderOpen,
  GraduationCap,
} from "lucide-react";

import { BlurFade } from "@/components/ui/blur-fade";
import { NumberTicker } from "@/components/ui/number-ticker";
import { GridPattern } from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";

export default function About() {
  return (
    <section
      id="about"
      className="relative isolate overflow-hidden bg-white px-6 py-28 transition-colors duration-500 dark:bg-slate-950"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
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
            "text-emerald-400/80 dark:text-white/6",
            "mask-[radial-gradient(circle_at_center,white,transparent_80%)]"
          )}
        />

        {/* Left Glow */}
        <div className="absolute -left-56 top-0 h-162.5 w-162.5 rounded-full bg-emerald-300/15 blur-[180px] dark:bg-cyan-500/15" />

        {/* Right Glow */}
        <div className="absolute -right-56 bottom-0 h-162.5 w-162.5 rounded-full bg-green-300/15 blur-[180px] dark:bg-violet-500/15" />

        {/* Background */}
        <div className="absolute inset-0 bg-white dark:bg-slate-950" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-2">
        {/* LEFT */}
        <div>
          <BlurFade delay={0.1}>
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.45em] text-emerald-600 dark:text-cyan-400">
              ABOUT ME
            </p>
          </BlurFade>

          <BlurFade delay={0.2}>
            <h1 className="text-5xl font-black leading-[0.95] text-zinc-900 dark:text-white md:text-7xl">
              Turning Ideas
              <br />
              Into{" "}
              <span className="bg-linear-to-r from-emerald-500 via-cyan-500 to-violet-500 bg-clip-text text-transparent">
                Reality.
              </span>
            </h1>
          </BlurFade>

          <BlurFade delay={0.3}>
            <div className="mt-10 space-y-6 text-lg leading-9 text-zinc-600 dark:text-zinc-300">
              <p>
                I'm{" "}
                <span className="font-bold text-emerald-600 dark:text-cyan-400">
                  John-Henry Links
                </span>
                , a Front-End Developer with{" "}
                <span className="font-bold text-zinc-900 dark:text-white">
                  3 years of experience
                </span>{" "}
                building responsive, modern and user-friendly web applications.
              </p>

              <p>
                I specialize in creating clean interfaces using{" "}
                <span className="font-semibold text-zinc-900 dark:text-white">
                  React, Next.js, TypeScript, JavaScript, Tailwind CSS, HTML and
                  CSS.
                </span>
              </p>

              <p>
                I'm passionate about writing maintainable code, learning new
                technologies and creating digital experiences that are both
                functional and visually appealing. Whether I'm developing
                personal projects or collaborating with a team, I strive to
                build applications that deliver an exceptional user experience.
              </p>
            </div>
          </BlurFade>
        </div>

        {/* RIGHT */}
        <div className="grid gap-6 sm:grid-cols-2">
          <StatCard
            icon={<Code2 className="h-8 w-8 text-emerald-500 dark:text-cyan-400" />}
            value={3}
            suffix="+"
            title="Years Experience"
          />

          <StatCard
            icon={<Laptop className="h-8 w-8 text-emerald-500 dark:text-cyan-400" />}
            value={10}
            suffix="+"
            title="Technologies"
          />

          <StatCard
            icon={<FolderOpen className="h-8 w-8 text-emerald-500 dark:text-cyan-400" />}
            value={15}
            suffix="+"
            title="Projects Built"
          />

          <StatCard
            icon={<GraduationCap className="h-8 w-8 text-emerald-500 dark:text-cyan-400" />}
            value={1}
            title="Diploma"
          />
        </div>
      </div>
    </section>
  );
}

interface StatCardProps {
  icon: React.ReactNode;
  value: number;
  title: string;
  suffix?: string;
}
function StatCard({
  icon,
  value,
  title,
  suffix,
}: StatCardProps) {
  return (
    <BlurFade>
      <div
        className="
          group
          rounded-3xl
          border
          border-zinc-200
          bg-white/80
          p-7
          backdrop-blur-xl
          shadow-md
          transition-all
          duration-300
          hover:-translate-y-2
          hover:border-emerald-400
          hover:shadow-xl

          dark:border-white/10
          dark:bg-black/30
          dark:ring-1
          dark:ring-white/10
          dark:hover:border-cyan-400/40
          dark:hover:shadow-[0_0_50px_rgba(34,211,238,0.15)]
        "
      >
        <div className="mb-6 transition-transform duration-300 group-hover:scale-110">
          {icon}
        </div>

        <h2 className="text-5xl font-black leading-none text-zinc-900 dark:text-white">
          <NumberTicker value={value} />
          {suffix}
        </h2>

        <p className="mt-3 text-sm font-medium text-zinc-500 dark:text-zinc-400">
          {title}
        </p>
      </div>
    </BlurFade>
  );
}