"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";

export default function SmoothScroll() {
  const lenisRef = useRef<any>(null);
  const rafIdRef = useRef<number | null>(null);

  const initLenis = () => {
    if (typeof window === "undefined") return;
    const win = window as any;
    if (!win.Lenis) return;
    if (lenisRef.current) return;

    const lenis = new win.Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });
    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      rafIdRef.current = requestAnimationFrame(raf);
    }
    rafIdRef.current = requestAnimationFrame(raf);

    if (win.ScrollTrigger && win.gsap) {
      lenis.on("scroll", win.ScrollTrigger.update);
      win.gsap.ticker.add((time: number) => {
        lenis.raf(time * 1000);
      });
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).Lenis) {
      initLenis();
    }

    return () => {
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
      }
    };
  }, []);

  return (
    <Script
      src="https://unpkg.com/lenis@1.1.13/dist/lenis.min.js"
      strategy="afterInteractive"
      onLoad={initLenis}
    />
  );
}
