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
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border border-indigo-500/50"
        style={{ x: rx, y: ry, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width: hovering ? 44 : 28,
          height: hovering ? 44 : 28,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          width: { duration: 0.2, ease: "easeOut" },
          height: { duration: 0.2, ease: "easeOut" },
          opacity: { duration: 0.3 },
        }}
      />
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
        style={{ x: mx, y: my, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width: 5,
          height: 5,
          backgroundColor: hovering ? "#6366F1" : "#F1F5F9",
          opacity: visible ? 1 : 0,
        }}
        transition={{ duration: 0.15 }}
      />
    </>
  );
}
