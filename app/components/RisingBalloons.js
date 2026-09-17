"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BALLOON_COLORS = ["#fda4af", "#c4b5fd", "#fb7185", "#fde047", "#a78bfa", "#f9a8d4"];

function Balloon({ color, size, left, delay, duration, index }) {
  const sway = index % 2 === 0 ? [0, 10, -8, 12, -6, 4] : [0, -10, 8, -12, 6, -4];

  return (
    <motion.div
      className="pointer-events-none fixed z-40 will-change-transform"
      style={{
        left,
        bottom: -80,
        width: size,
        height: size * 1.35,
      }}
      initial={{ y: 0, opacity: 0, scale: 0.7, x: 0 }}
      animate={{
        y: [0, -120, -260, -420, -620, -950],
        opacity: [0, 1, 1, 0.95, 0.55, 0],
        scale: [0.7, 1, 1, 1.03, 1, 0.92],
        x: sway,
        rotate: [0, 3, -2, 4, -3, 1],
      }}
      transition={{
        duration,
        delay,
        ease: "easeInOut",
      }}
    >
      <svg viewBox="0 0 40 56" className="h-full w-full" style={{ overflow: "visible" }}>
        <path
          d="M20 0c11 0 20 9 20 20 0 11-9 22-20 28C9 42 0 31 0 20 0 9 9 0 20 0z"
          fill={color}
        />
        <path
          d="M20 48 L20 56"
          stroke={color}
          strokeWidth="1.5"
          fill="none"
        />
        <ellipse cx="14" cy="10" rx="5" ry="7" fill="white" opacity="0.25" />
      </svg>
    </motion.div>
  );
}

export default function RisingBalloons({ active = false, count = 12 }) {
  const [burst, setBurst] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 640);
  }, []);

  useEffect(() => {
    if (active) {
      setBurst((b) => b + 1);
    }
  }, [active]);

  useEffect(() => {
    if (burst > 0) {
      const timer = setTimeout(() => setBurst(0), 7000);
      return () => clearTimeout(timer);
    }
  }, [burst]);

  const finalCount = isMobile ? Math.min(count, 5) : Math.min(count, 8);

  const balloons = Array.from({ length: finalCount }).map((_, i) => ({
    id: `${burst}-${i}`,
    color: BALLOON_COLORS[i % BALLOON_COLORS.length],
    size: isMobile ? 26 + (i % 4) * 5 : 32 + (i % 5) * 7,
    left: `${8 + ((i * (isMobile ? 16 : 9)) % 84)}%`,
    delay: i * 0.1,
    duration: isMobile ? 3.2 + ((i % 3) * 0.4) : 5 + ((i % 4) * 0.5),
    index: i,
  }));

  return (
    <AnimatePresence mode="popLayout">
      {burst > 0 && (
        <div className="pointer-events-none fixed inset-0 z-40 overflow-hidden">
          {balloons.map((b) => (
            <Balloon key={b.id} {...b} />
          ))}
        </div>
      )}
    </AnimatePresence>
  );
}

export function useBalloonTrigger() {
  const [active, setActive] = useState(false);

  const trigger = useCallback(() => {
    setActive(false);
    requestAnimationFrame(() => setActive(true));
  }, []);

  return [active, trigger];
}
