"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type TouchEvent,
} from "react";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

import { Card, CardContent } from "./card";
import { useIsMobile } from "@/hooks/use-mobile";

export interface ThreeDCarouselItem {
  id: number;
  title: string;
  brand: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link: string;
}

interface ThreeDCarouselProps {
  items: ThreeDCarouselItem[];
  autoRotate?: boolean;
  rotateInterval?: number;
  cardHeight?: number;
}

export default function ThreeDCarousel({
  items,
  autoRotate = true,
  rotateInterval = 4000,
  cardHeight = 650,
}: ThreeDCarouselProps) {
  const [active, setActive] = useState(0);

  const carouselRef = useRef<HTMLDivElement>(null);

  const [isHovering, setIsHovering] = useState(false);
  const [isInView, setIsInView] = useState(false);

  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const isMobile = useIsMobile();

  const minSwipeDistance = 50;

  /* -------------------------------------------------------- */
  /* Intersection Observer                                     */
  /* -------------------------------------------------------- */

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      {
        threshold: 0.25,
      }
    );

    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }

    return () => observer.disconnect();
  }, []);

  /* -------------------------------------------------------- */
  /* Auto Rotate                                               */
  /* -------------------------------------------------------- */

  useEffect(() => {
    if (!autoRotate || !isInView || isHovering) return;

    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % items.length);
    }, rotateInterval);

    return () => clearInterval(interval);
  }, [
    autoRotate,
    rotateInterval,
    isHovering,
    isInView,
    items.length,
  ]);

  /* -------------------------------------------------------- */
  /* Touch                                                     */
  /* -------------------------------------------------------- */

  const onTouchStart = (e: TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    setTouchEnd(null);
  };

  const onTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;

    if (distance > minSwipeDistance) {
      setActive((prev) => (prev + 1) % items.length);
    }

    if (distance < -minSwipeDistance) {
      setActive((prev) => (prev - 1 + items.length) % items.length);
    }
  };

  /* -------------------------------------------------------- */
  /* 3D Positioning                                             */
  /* -------------------------------------------------------- */

  const getCardStyle = (index: number): CSSProperties => {
    const total = items.length;

    let position = index - active;

    if (position > total / 2) {
      position -= total;
    }

    if (position < -total / 2) {
      position += total;
    }

    switch (position) {
      case 0:
        return {
          transform:
            "translateX(0px) translateZ(180px) rotateY(0deg) scale(1)",
          opacity: 1,
          zIndex: 30,
        };

      case -1:
        return {
          transform:
            "translateX(-520px) translateZ(0px) rotateY(38deg) scale(.86)",
          opacity: .55,
          zIndex: 20,
        };

      case 1:
        return {
          transform:
            "translateX(520px) translateZ(0px) rotateY(-38deg) scale(.86)",
          opacity: .55,
          zIndex: 20,
        };

      default:
        return {
          transform: "scale(.7)",
          opacity: 0,
          pointerEvents: "none",
          zIndex: 0,
        };
    }
  };

  const previous = () =>
    setActive((prev) => (prev - 1 + items.length) % items.length);

  const next = () =>
    setActive((prev) => (prev + 1) % items.length);
    return (
    <section
      id="ThreeDCarousel"
      className="flex w-full items-center justify-center bg-transparent"
    >
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          ref={carouselRef}
          className="relative h-190 overflow-visible"
          style={{
            perspective: "2200px",
          }}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Cards */}
          <div className="absolute inset-0 flex items-center justify-center overflow-visible">
            {items.map((item, index) => (
              <div
                key={item.id}
                className="absolute left-1/2 top-1/2 w-175 max-w-[90vw]"
                style={{
                  ...getCardStyle(index),
                  transformStyle: "preserve-3d",
                  transition:
                    "transform 700ms cubic-bezier(.22,1,.36,1), opacity 600ms ease",
                  marginLeft: "-350px",
                  marginTop: `-${cardHeight / 2}px`,
                }}
              >
                <Card
                  className="overflow-hidden rounded-3xl border bg-background shadow-2xl transition-shadow hover:shadow-[0_25px_80px_rgba(0,0,0,.35)]"
                  style={{
                    height: `${cardHeight}px`,
                    backfaceVisibility: "hidden",
                  }}
                >
                  {/* Hero Image */}
                  <div
                    className="relative flex h-72 items-center justify-center overflow-hidden bg-black"
                    style={{
                      backgroundImage: `url(${item.imageUrl})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }}
                  >
                    <div className="absolute inset-0 bg-black/55" />

                    <div className="relative z-10 text-center text-white">
                      <h2 className="mb-3 text-4xl font-bold tracking-wide">
                        {item.brand.toUpperCase()}
                      </h2>

                      <div className="mx-auto mb-4 h-1 w-16 rounded-full bg-white" />

                      <p className="text-lg opacity-90">{item.title}</p>
                    </div>
                  </div>

                  {/* Content */}
                  <CardContent className="flex h-full flex-col p-8">
                    <h3 className="mb-2 text-3xl font-bold">
                      {item.title}
                    </h3>

                    <p className="mb-5 text-base text-muted-foreground">
                      {item.brand}
                    </p>

                    <p className="grow text-lg leading-8 text-muted-foreground">
                      {item.description}
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border bg-muted px-4 py-2 text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-10 inline-flex items-center gap-2 text-lg font-medium transition hover:gap-4"
                    >
                      View Project

                      <ArrowRight className="h-5 w-5" />
                    </a>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Navigation */}
          {!isMobile && (
            <>
              <button
                onClick={previous}
                className="absolute left-6 top-1/2 z-50 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border bg-background/90 shadow-xl backdrop-blur transition hover:scale-110"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <button
                onClick={next}
                className="absolute right-6 top-1/2 z-50 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border bg-background/90 shadow-xl backdrop-blur transition hover:scale-110"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}

          {/* Dots */}
          <div className="absolute bottom-8 left-0 right-0 z-50 flex justify-center gap-3">
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  active === index
                    ? "w-10 bg-primary"
                    : "w-3 bg-muted-foreground/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}