"use client";

import { useEffect } from "react";

export function RevealInit() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const nodes = document.querySelectorAll<HTMLElement>(".reveal");

    if (prefersReduced || !("IntersectionObserver" in window)) {
      nodes.forEach((el) => el.classList.add("in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );

    nodes.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);

  return null;
}
