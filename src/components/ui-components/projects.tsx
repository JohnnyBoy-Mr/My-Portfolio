"use client";

import ThreeDCarousel, {
  type ThreeDCarouselItem,
} from "@/components/lightswind/3d-carousel";
import { GridPattern } from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";

const items: ThreeDCarouselItem[] = [
  {
    id: 1,
    title: "Vibe Code Editor",
    brand: "Vibe Inc.",
    description:
      "A modern code editor with AI-powered suggestions and real-time collaboration.",
    tags: [
      "React",
      "GitHub",
      "TailwindCSS",
      "TypeScript",
      "Next.js",
      "MongoDB",
      "AI-powered",
    ],
    imageUrl: "",
    link: "https://github.com/JohnnyBoy-Mr/vibe-code-editor",
  },
  {
    id: 2,
    title: "React Basics",
    brand: "React Basics",
    description:
      "A comprehensive guide to React, covering everything from the basic topics.",
    tags: ["React", "GitHub", "Bootstrap", "JavaScript"],
    imageUrl: "",
    link: "https://github.com/JohnnyBoy-Mr/react-basics",
  },
  {
    id: 3,
    title: "React Password Generator",
    brand: "React Password Generator",
    description: "A simple React component for generating random passwords.",
    tags: ["React", "GitHub", "TailwindCSS", "Vite", "JavaScript"],
    imageUrl: "",
    link: "https://github.com/JohnnyBoy-Mr/React-Password-Generator",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
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
            "text-white/6",
            "mask-[radial-gradient(circle_at_center,white,transparent_80%)]"
          )}
        />

        <div className="absolute -left-52 top-0 h-162.5 w-162.5 rounded-full bg-cyan-500/15 blur-[180px]" />
        <div className="absolute -right-52 bottom-0 h-162.5 w-162.5 rounded-full bg-violet-500/15 blur-[180px]" />
        <div className="absolute inset-0 bg-slate-950/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center">
        <h1 className="mb-12 text-5xl font-bold">Projects</h1>

        <div className="relative w-full overflow-visible">
          <ThreeDCarousel
            items={items}
            autoRotate
            rotateInterval={4000}
            cardHeight={600}
          />
        </div>
      </div>
    </section>
  );
}