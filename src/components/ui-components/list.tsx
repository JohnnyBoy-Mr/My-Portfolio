"use client";

import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/ui/animated-list";
import { RetroGrid } from "@/components/ui/retro-grid";

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}

let notifications = [
  {
    name: "Symphony Secondary School",
    description: "Matric",
    time: "2011 - 2016",
    icon: "🎓",
    color: "#00C9A7",
  },
  {
    name: "NorthLink College Tygerberg Campus",
    description: "A+",
    time: "2017-2017",
    icon: "🎓",
    color: "#FFB800",
  },
  {
    name: "Damelin College",
    description: "Diploma in Information Technology",
    time: "2018 - 2021",
    icon: "🎓",
    color: "#FF3D71",
  },
  {
    name: "CustomApp",
    description: "Software Engineer",
    time: "2021-2025",
    icon: "💻",
    color: "#1E86FF",
  },
  {
    name: "Udemy",
    description: "Full Stack Web Development Bootcamp",
    time: "2026-2026",
    icon: "🎓",
    color: "#FC466B",
  },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-100 cursor-pointer overflow-hidden rounded-2xl p-4",
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] text-black",
        "transform-gpu dark:bg-transparent dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:text-white"
      )}
    >
      <div className="flex items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{ backgroundColor: color }}
        >
          <span className="text-lg">{icon}</span>
        </div>

        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex items-center text-lg font-medium">
            <span className="text-sm sm:text-lg text-gray-500 dark:text-white/60">
              {name}
            </span>
            <span className="mx-1 text-gray-500 dark:text-white/60">·</span>
            <span className="text-xs text-gray-500 dark:text-white/60">
              {time}
            </span>
          </figcaption>

          <p className="text-sm text-gray-500 dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export function AnimatedListDemo({
  className,
}: {
  className?: string;
}) {
  return (
    <section
      id="journey"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <RetroGrid   className="absolute inset-0"
  opacity={0.8}
  darkLineColor="#38bdf8"
  lightLineColor="#2563eb" />

      {/* Optional overlay for readability */}
      <div className="absolute inset-0 -z-10 bg-background/70 backdrop-blur-[1px]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        <h1 className="mb-10 text-5xl font-bold">Journey</h1>

        <div
          className={cn(
            "relative flex h-125 w-full max-w-md flex-col overflow-hidden p-2",
            className
          )}
        >
          <AnimatedList>
            {notifications.map((item, idx) => (
              <Notification key={idx} {...item} />
            ))}
          </AnimatedList>

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-linear-to-t from-background to-transparent" />
        </div>
      </div>
    </section>
  );
}