"use client";

import { fadeUp } from "@/animations/reveal";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

type MotionRevealProps = { children: ReactNode; className?: string };

export function MotionReveal({ children, className }: MotionRevealProps) {
  return (
    <motion.div className={className} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.24 }}>
      {children}
    </motion.div>
  );
}
