"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const elements = ["🎀", "💖", "🌸", "✨", "🎂", "🎈", "🌷", "💫", "🧁", "🌙", "🎁", "🎉"];

// Deterministic pseudo-random generator so server and client produce the same values.
function seededRandom(seed) {
  let value = seed;
  return () => {
    value = (value * 9301 + 49297) % 233280;
    return value / 233280;
  };
}

function createItems(count, seed = 1) {
  const rand = seededRandom(seed);
  return Array.from({ length: count }).map((_, i) => ({
    id: i,
    size: Math.round(14 + rand() * 14),
    left: Math.round(rand() * 1000) / 10,
    delay: Math.round(rand() * 80) / 10,
    duration: Math.round((12 + rand() * 12) * 10) / 10,
    symbol: elements[i % elements.length],
  }));
}

export default function FloatingElements({ count = 14 }) {
  const [items, setItems] = useState(() => createItems(count, 1));

  useEffect(() => {
    setItems(createItems(count, 1));
  }, [count]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {items.map((item) => (
        <motion.span
          key={item.id}
          className="absolute opacity-40"
          style={{
            left: `${item.left}%`,
            fontSize: item.size,
            bottom: "-10vh",
          }}
          initial={{ y: 0, opacity: 0, rotate: 0 }}
          animate={{
            y: [0, -140],
            opacity: [0, 0.45, 0],
            rotate: [0, 20, -10, 0],
          }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            delay: item.delay,
            ease: "linear",
          }}
        >
          {item.symbol}
        </motion.span>
      ))}
    </div>
  );
}
