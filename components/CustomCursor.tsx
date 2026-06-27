"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isFinePointer, setIsFinePointer] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);

  const mx = useMotionValue(-200);
  const my = useMotionValue(-200);

  const rx = useSpring(mx, { damping: 28, stiffness: 220, mass: 0.45 });
  const ry = useSpring(my, { damping: 28, stiffness: 220, mass: 0.45 });

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setTimeout(() => setIsFinePointer(true), 0);

    const handleMove = (e: MouseEvent) => {
      mx.set(e.clientX);
      my.set(e.clientY);
      setVisible((prev) => (!prev ? true : prev));
    };

    const handleOver = (e: MouseEvent) => {
      if ((e.target as Element)?.closest("a, button, [role='button'], label, input, select, textarea")) {
        setHovering(true);
      }
    };

    const handleOut = (e: MouseEvent) => {
      if ((e.target as Element)?.closest("a, button, [role='button'], label, input, select, textarea")) {
        setHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseover", handleOver);
    document.addEventListener("mouseout", handleOut);
    document.documentElement.addEventListener("mouseleave", () => setVisible(false));
    document.documentElement.addEventListener("mouseenter", () => setVisible(true));

    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseout", handleOut);
    };
  }, [mx, my]);

  if (!isFinePointer) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border transition-colors duration-300 shadow-[0_0_15px_rgba(99,102,241,0)]"
        style={{ x: rx, y: ry, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width: hovering ? 64 : 28,
          height: hovering ? 64 : 28,
          borderColor: hovering ? "rgba(99, 102, 241, 0.7)" : "rgba(255, 255, 255, 0.15)",
          backgroundColor: hovering ? "rgba(99, 102, 241, 0.08)" : "transparent",
          boxShadow: hovering ? "0 0 20px rgba(99, 102, 241, 0.3)" : "0 0 0px rgba(99,102,241,0)",
          opacity: visible ? 1 : 0,
        }}
        transition={{
          width: { type: "spring", stiffness: 150, damping: 15 },
          height: { type: "spring", stiffness: 150, damping: 15 },
          opacity: { duration: 0.3 },
        }}
      />
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full shadow-[0_0_10px_rgba(99,102,241,0.5)]"
        style={{ x: mx, y: my, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width: hovering ? 6 : 6,
          height: hovering ? 6 : 6,
          backgroundColor: "#6366F1",
          opacity: visible ? 1 : 0,
        }}
        transition={{ duration: 0.15 }}
      />
    </>
  );
}
