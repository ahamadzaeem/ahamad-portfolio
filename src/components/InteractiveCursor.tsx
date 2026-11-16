"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function InteractiveCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop pointer devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (
        target?.closest("button") ||
        target?.closest("a") ||
        target?.closest("input") ||
        target?.closest("textarea") ||
        target?.closest("[data-clickable]")
      ) {
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Ambient background glow follower */}
      <motion.div
        className="pointer-events-none fixed z-0 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[100px]"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 150,
          mass: 0.8,
        }}
      />

      {/* Outer ring */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-50 rounded-full border border-cyan-400/50"
        animate={{
          x: mousePosition.x - (isPointer ? 24 : 16),
          y: mousePosition.y - (isPointer ? 24 : 16),
          width: isPointer ? 48 : 32,
          height: isPointer ? 48 : 32,
          backgroundColor: isPointer ? "rgba(56, 189, 248, 0.12)" : "transparent",
          borderColor: isPointer ? "rgba(56, 189, 248, 0.9)" : "rgba(56, 189, 248, 0.4)",
        }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 250,
          mass: 0.4,
        }}
      />

      {/* Precision center dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-50 h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#38bdf8]"
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
          scale: isPointer ? 0 : 1,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 400,
        }}
      />
    </>
  );
}

