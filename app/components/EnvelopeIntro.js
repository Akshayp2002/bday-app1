"use client";

import { motion } from "framer-motion";
import { Sparkles, Star, Gift } from "lucide-react";

const ornaments = [
  { type: "star", left: "12%", top: "8%", color: "#fda4af", delay: 0 },
  { type: "flower", right: "14%", top: "10%", color: "#c4b5fd", delay: 0.4 },
  { type: "balloon", left: "8%", bottom: "18%", color: "#fb7185", delay: 0.8 },
  { type: "hat", right: "10%", bottom: "22%", color: "#a78bfa", delay: 1.2 },
  { type: "heart", left: "22%", top: "22%", color: "#f472b6", delay: 1.6 },
  { type: "ribbon", right: "20%", bottom: "12%", color: "#fde047", delay: 2 },
];

function HangingOrnament({ type, color, delay }) {
  const shapes = {
    star: (
      <Star className="h-full w-full" fill={color} stroke={color} strokeWidth={1.5} />
    ),
    flower: (
      <svg viewBox="0 0 24 24" className="h-full w-full">
        <circle cx="12" cy="12" r="4" fill="#fef08a" />
        {[0, 60, 120, 180, 240, 300].map((r) => (
          <ellipse
            key={r}
            cx="12"
            cy="5"
            rx="3"
            ry="5"
            fill={color}
            transform={`rotate(${r} 12 12)`}
          />
        ))}
      </svg>
    ),
    balloon: (
      <svg viewBox="0 0 24 24" className="h-full w-full">
        <path d="M12 2a7 7 0 0 1 7 7c0 3.5-3 6-7 10-4-4-7-6.5-7-10a7 7 0 0 1 7-7z" fill={color} />
        <line x1="12" y1="19" x2="12" y2="24" stroke={color} strokeWidth="1.5" />
      </svg>
    ),
    hat: (
      <svg viewBox="0 0 24 24" className="h-full w-full">
        <polygon points="12,2 22,20 2,20" fill={color} />
        <rect x="4" y="18" width="16" height="4" rx="1" fill="#fff" />
      </svg>
    ),
    heart: (
      <svg viewBox="0 0 24 24" className="h-full w-full">
        <path d="M12 21.35l-1.45-1.32C5.4 14.36 2 11.28 2 7.5 2 4.42 4.42 2 7.5 2c1.74 0 3.41.81 4.5 2.09C13.09 2.81 14.76 2 16.5 2 19.58 2 22 4.42 22 7.5c0 3.78-3.4 6.86-8.55 12.54L12 21.35z" fill={color} />
      </svg>
    ),
    ribbon: (
      <svg viewBox="0 0 24 24" className="h-full w-full">
        <path d="M12 2c1 2 3 4 6 4-3 1-5 3-6 6-1-3-3-5-6-6 3 0 5-2 6-4z" fill={color} />
        <line x1="12" y1="12" x2="12" y2="22" stroke={color} strokeWidth="2" />
      </svg>
    ),
  };

  return (
    <motion.div
      className="absolute flex flex-col items-center"
      style={{ width: 42, height: 60 }}
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3 + delay * 0.3, duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        className="h-[2px] w-[2px] bg-rose-300/60"
        style={{ height: 20 }}
      />
      <motion.div
        className="relative"
        style={{ width: 42, height: 42 }}
        animate={{ rotate: [0, 6, -6, 0] }}
        transition={{ duration: 4 + delay, repeat: Infinity, ease: "easeInOut" }}
      >
        {shapes[type]}
      </motion.div>
    </motion.div>
  );
}

export default function EnvelopeIntro({ onOpen }) {
  return (
    <motion.div
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden p-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Decorative border frame */}
      <div className="pointer-events-none absolute inset-4 rounded-[2rem] border-[3px] border-dashed border-rose-300/60 sm:inset-6" />
      <div className="pointer-events-none absolute inset-5 rounded-[1.7rem] border border-rose-200/40 sm:inset-7" />

      {/* Hanging ornaments */}
      {ornaments.map((o, i) => (
        <div
          key={i}
          className="pointer-events-none absolute"
          style={{
            left: o.left,
            right: o.right,
            top: o.top,
            bottom: o.bottom,
          }}
        >
          <HangingOrnament type={o.type} color={o.color} delay={o.delay} />
        </div>
      ))}

      {/* Center invitation card */}
      <motion.button
        onClick={onOpen}
        aria-label="Open birthday card"
        className="relative z-10 flex w-full max-w-sm flex-col items-center rounded-[2rem] bg-[var(--paper)] p-7 card-shadow focus:outline-none focus:ring-4 focus:ring-rose-300 sm:max-w-md sm:p-10"
        initial={{ scale: 0.85, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
        whileHover={{ scale: 1.02, y: -4 }}
        whileTap={{ scale: 0.97 }}
      >
        <div className="mb-5 flex items-center gap-2 text-rose-400">
          <Sparkles className="h-4 w-4" />
          <span className="text-xs font-semibold uppercase tracking-widest text-rose-400">
            A little wish made with love
          </span>
          <Sparkles className="h-4 w-4" />
        </div>

        <motion.h1
          className="text-center font-sans text-4xl font-extrabold leading-[1.1] tracking-tight text-[var(--chocolate)] sm:text-5xl"
          animate={{ opacity: [0.9, 1, 0.9] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          HAPPY
          <br />
          BIRTHDAY
        </motion.h1>

        <p className="font-hand mt-4 text-center text-2xl text-rose-600 sm:text-3xl">
          Someone special deserves this card 💕
        </p>

        <div className="mt-6 flex w-full items-center justify-center gap-3">
          <div className="h-px w-16 bg-rose-200" />
          <span className="text-xl">🎂🎈🎁</span>
          <div className="h-px w-16 bg-rose-200" />
        </div>

        <motion.div
          className="mt-8 inline-flex items-center gap-2 rounded-full border-2 border-[var(--chocolate)] bg-[var(--paper)] px-7 py-3 text-sm font-bold uppercase tracking-widest text-[var(--chocolate)] shadow-[4px_4px_0px_0px_var(--chocolate)]"
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <Gift className="h-4 w-4 text-rose-500" />
          Open
        </motion.div>
      </motion.button>
    </motion.div>
  );
}
