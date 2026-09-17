"use client";

import { motion } from "framer-motion";

export default function BirthdayCake({ className = "" }) {
  return (
    <motion.div
      className={`relative flex flex-col items-center ${className}`}
      initial={{ opacity: 0, scale: 0.85, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 200, damping: 16, delay: 0.4 }}
    >
      {/* Animated sparkles around cake */}
      {[0, 60, 120, 180, 240, 300].map((deg, i) => (
        <motion.div
          key={i}
          className="pointer-events-none absolute z-40 text-yellow-400"
          style={{
            top: "50%",
            left: "50%",
            transform: `rotate(${deg}deg) translateX(${i % 2 === 0 ? 90 : 75}px)`,
          }}
          animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut",
          }}
        >
          ✨
        </motion.div>
      ))}

      {/* Star topper */}
      <motion.div
        className="absolute -top-12 z-30 rounded-full bg-gradient-to-br from-yellow-200 to-yellow-500 p-2.5 shadow-md sm:-top-14 sm:p-3"
        animate={{
          rotate: [0, 12, -12, 0],
          scale: [1, 1.2, 1],
          y: [0, -4, 0],
        }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg
          className="h-5 w-5 fill-yellow-100 text-yellow-600 sm:h-6 sm:w-6"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z" />
        </svg>
      </motion.div>

      {/* Candles */}
      <div className="relative z-10 flex gap-4 sm:gap-5">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="relative flex flex-col items-center">
            <motion.div
              className="h-5 w-5 rounded-full bg-gradient-to-t from-yellow-300 via-orange-300 to-red-400 blur-[2px] sm:h-6 sm:w-6"
              animate={{
                scale: [1, 1.35, 1],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 0.7 + i * 0.12,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.15,
              }}
            />
            <motion.div
              className="absolute -top-2 h-7 w-7 rounded-full bg-yellow-200 opacity-50 blur-lg sm:h-8 sm:w-8"
              animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0.85, 0.4] }}
              transition={{
                duration: 0.9 + i * 0.1,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.15,
              }}
            />
            <motion.div
              className="mt-1 h-8 w-1.5 rounded-sm bg-gradient-to-b from-pink-100 via-pink-300 to-pink-400 sm:h-10 sm:w-2"
              animate={{ scaleY: [1, 1.05, 1] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2,
              }}
            />
          </div>
        ))}
      </div>

      {/* Top tier with dripping frosting */}
      <div className="relative z-0 -mt-1 h-12 w-48 rounded-t-2xl bg-gradient-to-b from-rose-300 to-rose-400 shadow-md sm:h-14 sm:w-60">
        <div className="absolute inset-x-0 top-3 flex justify-around px-4">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <motion.div
              key={i}
              className="h-3 w-3 rounded-full bg-white/90 shadow-sm sm:h-3.5 sm:w-3.5"
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 1.4, repeat: Infinity, delay: i * 0.15 }}
            />
          ))}
        </div>
        {/* Drips */}
        <div className="absolute -bottom-3 inset-x-0 flex justify-between px-1">
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              className="w-5 rounded-b-full bg-rose-300 sm:w-6"
              style={{ height: `${12 + (i % 2) * 8}px` }}
              animate={{ height: ["14px", "22px", "14px"] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.25 }}
            />
          ))}
        </div>
      </div>

      {/* Middle tier */}
      <div className="relative -mt-1 h-11 w-56 rounded-md bg-gradient-to-b from-violet-200 to-violet-300 shadow-md sm:h-14 sm:w-72">
        <div className="absolute inset-x-0 top-1/2 flex -translate-y-1/2 justify-around px-3">
          {["💖", "✨", "🎀", "💖", "✨"].map((e, i) => (
            <motion.span
              key={i}
              className="text-sm sm:text-base"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
            >
              {e}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Bottom tier */}
      <div className="-mt-1 h-9 w-60 rounded-b-2xl bg-gradient-to-b from-rose-200 to-rose-300 shadow-md sm:h-12 sm:w-76">
        <div className="absolute inset-x-0 bottom-2 flex justify-around px-4">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <motion.div
              key={i}
              className="h-2.5 w-2.5 rounded-full bg-white/70 sm:h-3 sm:w-3"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
            />
          ))}
        </div>
      </div>

      {/* Plate */}
      <div className="-mt-1 h-5 w-72 rounded-full bg-gradient-to-b from-rose-100 to-rose-200 shadow-lg sm:w-88" />
      <div className="mt-1 h-2 w-80 rounded-full bg-rose-900/10 blur-sm sm:w-96" />
    </motion.div>
  );
}
