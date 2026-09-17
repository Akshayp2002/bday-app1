"use client";

import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { X, PartyPopper, Heart } from "lucide-react";

export default function SurpriseModal({ open, onClose, name = "You" }) {
  const launchConfetti = useCallback(() => {
    const duration = 2800;
    const end = Date.now() + duration;

    const colors = ["#f472b6", "#c084fc", "#fb7185", "#fde047", "#fbbf24", "#fda4af"];

    const frame = () => {
      confetti({
        particleCount: 6,
        spread: 100,
        origin: { y: 0.6 },
        colors,
        disableForReducedMotion: true,
      });
      confetti({
        particleCount: 6,
        spread: 110,
        origin: { x: 0.1, y: 0.6 },
        colors,
        disableForReducedMotion: true,
      });
      confetti({
        particleCount: 6,
        spread: 110,
        origin: { x: 0.9, y: 0.6 },
        colors,
        disableForReducedMotion: true,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    frame();
  }, []);

  useEffect(() => {
    if (open) {
      launchConfetti();
    }
  }, [open, launchConfetti]);

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            className="absolute inset-0 bg-rose-900/20 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="note-tape relative z-10 w-full max-w-sm rounded-sm bg-[var(--paper)] p-7 text-center shadow-2xl sm:max-w-md sm:p-10"
            style={{ transform: "rotate(-1deg)" }}
            initial={{ scale: 0.8, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 40 }}
            transition={{ type: "spring", stiffness: 280, damping: 24 }}
          >
            <button
              onClick={onClose}
              className="absolute right-3 top-3 rounded-full p-2 text-rose-400 transition hover:bg-rose-50 hover:text-rose-600"
              aria-label="Close surprise"
            >
              <X className="h-5 w-5" />
            </button>

            <motion.div
              className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-rose-300 to-violet-300 text-white shadow-md"
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 1.5 }}
            >
              <PartyPopper className="h-8 w-8" />
            </motion.div>

            <h3 className="font-sans text-2xl font-extrabold text-[var(--chocolate)] sm:text-3xl">
              Happy Birthday!
            </h3>
            <p className="font-hand mb-5 text-xl leading-relaxed text-rose-700/90 sm:text-2xl">
              Wishing you a day as sweet and wonderful as you are,{" "}
              <span className="font-semibold text-rose-600">{name}</span>! 🎂✨
            </p>

            <div className="flex flex-wrap items-center justify-center gap-2 text-2xl sm:text-3xl">
              {["🎈", "🎂", "🎁", "🌸", "💖"].map((emoji, i) => (
                <motion.span
                  key={i}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 1.4, repeat: Infinity, delay: i * 0.2 }}
                >
                  {emoji}
                </motion.span>
              ))}
            </div>

            <motion.button
              onClick={launchConfetti}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-rose-400 to-violet-400 px-5 py-2 text-sm font-bold text-white shadow-md"
              whileTap={{ scale: 0.95 }}
            >
              <Heart className="h-4 w-4 fill-white text-white" />
              More confetti!
            </motion.button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
