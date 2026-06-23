"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
  className?: string;
}

export default function FadeIn({
  children,
  delay = 0,
  direction,
  duration = 0.5,
  className = "",
}: FadeInProps) {
  const directions = {
    up: { y: 20, x: 0 },
    down: { y: -20, x: 0 },
    left: { x: 20, y: 0 },
    right: { x: -20, y: 0 },
  };

  const initial = direction ? directions[direction] : { opacity: 0 };

  return (
    <motion.div
      initial={{ ...initial, opacity: 0 }}
      whileInView={{ y: 0, x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
