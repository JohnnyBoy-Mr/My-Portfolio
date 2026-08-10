"use client";

import { cn } from "@/lib/utils";
import { RetroGrid } from "@/components/ui/retro-grid";
import { IconCloud } from "@/components/ui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "java",
  "react",
  "html5",
  "css3",
  "nodejs",
  "vuejs",
  "express",
  "trello",
  "mongodb",
  "postman",
  "nextjs",
  "prisma",
  "amazonaws",
  "vercel",
  "github",
  "visualstudiocode",
  "tailwindcss",
  "vite",
  "Angular",
  "bootstrap",
  "jquery",
  "cSharp",
  "dotnet",
  "react-native",
];


export default function TechStack() {
 const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  return (
    <section
      id="techstack"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <RetroGrid   className="absolute inset-0"
  opacity={0.8}
  darkLineColor="#fa021b"
  lightLineColor="#fa021b" />

      {/* Optional overlay for readability */}
      <div className="absolute inset-0 -z-10 bg-background/70 backdrop-blur-[1px]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        <h1 className="mb-10 text-5xl font-bold">Tech Stack</h1>

        <div
          className={cn(
            "relative flex h-125 w-full max-w-md flex-col overflow-hidden p-2",
          )}
        >

          <IconCloud images={images} />

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-linear-to-t from-background to-transparent" />
        </div>
      </div>
    </section>
)};