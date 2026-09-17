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
      {/* Star topper */}
      <motion.div
        className="absolute -top-10 z-30 rounded-full bg-gradient-to-br from-yellow-200 to-yellow-500 p-2 shadow-md sm:-top-12 sm:p-2.5"
        animate={{ rotate: [0, 12, -12, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg
          className="h-4 w-4 fill-yellow-100 text-yellow-600 sm:h-5 sm:w-5"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z" />
        </svg>
      </motion.div>
      {/* Candles */}
      <div className="relative z-10 flex gap-3 sm:gap-4">
        {[0, 1, 2].map((i) => (
          <div key={i} className="relative flex flex-col items-center">
            <motion.div
              className="h-5 w-5 rounded-full bg-gradient-to-t from-yellow-300 via-orange-300 to-red-400 blur-[2px] sm:h-6 sm:w-6"
              animate={{
                scale: [1, 1.25, 1],
                opacity: [0.85, 1, 0.85],
              }}
              transition={{
                duration: 0.9 + i * 0.15,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2,
              }}
            />
            <motion.div
              className="absolute -top-1 h-6 w-6 rounded-full bg-yellow-200 opacity-60 blur-md sm:h-7 sm:w-7"
              animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{
                duration: 1 + i * 0.12,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2,
              }}
            />
            <div className="mt-1 h-7 w-1.5 rounded-sm bg-gradient-to-b from-pink-100 to-pink-300 sm:h-9 sm:w-2" />
          </div>
        ))}
      </div>

      {/* Cake top */}
      <div className="relative z-0 -mt-1 h-10 w-44 rounded-t-xl bg-gradient-to-b from-rose-300 to-rose-400 shadow-md sm:h-12 sm:w-56">
        <div className="absolute inset-x-0 top-2 flex justify-around px-3">
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              className="h-2.5 w-2.5 rounded-full bg-white/80 sm:h-3 sm:w-3"
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
            />
          ))}
        </div>
      </div>

      {/* Cake middle */}
      <div className="-mt-1 h-9 w-48 rounded-md bg-gradient-to-b from-violet-200 to-violet-300 shadow-md sm:h-11 sm:w-60" />

      {/* Cake base / plate */}
      <div className="-mt-1 h-4 w-52 rounded-full bg-gradient-to-b from-rose-100 to-rose-200 shadow sm:w-64" />

      {/* Plate shadow */}
      <div className="h-2 w-56 rounded-full bg-rose-900/10 blur-sm sm:w-68" />
    </motion.div>
  );
}
