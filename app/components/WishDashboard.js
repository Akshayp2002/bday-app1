"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Heart, Cake, Stars } from "lucide-react";
import SurpriseModal from "./SurpriseModal";
import BirthdayCake from "./BirthdayCake";

const DEFAULT_MESSAGES = [
  "You said I'm one of the favourite people you've ever had in your life, but I want you to know that you are also someone I'm genuinely grateful to have in mine.",
  "Thank you for choosing me as one of your people.",
  "Thank you for trusting me with pieces of yourself.",
  "Thank you for being there, even in the smallest ways.",
  "With you, I never feel like I have to pretend to be someone else.",
  "I remember the conversations, the stupid jokes, the random moments, the things you said without even realising how much they stayed with me.",
  "And your words about having \"one person being enough\"...",
  "I hope you know that you will always my \"Ah… that's my person.\" 🫂🤍",
  "You are my comfort and the one of the sweetest and kind person i know. And I hope you never forget how much you mean to me. 😭😚",
  "Wherever life takes us, I hope you get everything you've ever dreamed of. I hope life is always kind to you and takes you to all the places your heart wishes to go.",
  "You have such a beautiful heart and such a wonderful personality, and I genuinely hope the world gives you all the love, happiness, success and peace that you deserve. May God bless you always and protect the beautiful person you are. 🌷",
  "I hope every prayer you make finds its way back to you as a blessing, and every dream you carry quietly in your heart becomes a reality someday.",
  "And wherever we end up in life, I'll always be grateful that, for a little while—or maybe for a lifetime—our paths crossed. ❤️",
  "Go live the life you dream about. And please, don't forget that somewhere in this world, there will always be someone genuinely wishing the very best for you. 🫂✨",
  "𝗛𝗮𝗽𝗽𝘆 𝗯𝗶𝗿𝘁𝗵𝗱𝗮𝘆 𝗺𝘆 𝗳𝗮𝘃𝗼𝘂𝗿𝗶𝘁𝗲 𝗽𝗲𝗿𝘀𝗼𝗻!! 🎀💋",
];

function Petal({ className, color }) {
  return (
    <div
      className={`petal ${className}`}
      style={{ background: color }}
    />
  );
}

export default function WishDashboard({ name = "Bestie" }) {
  const [showSurprise, setShowSurprise] = useState(false);

  return (
    <motion.main
      className="relative flex min-h-screen flex-col items-center px-4 py-8 sm:px-6 sm:py-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Decorative frame */}
      <div className="pointer-events-none fixed inset-4 rounded-[2rem] border-[3px] border-dashed border-rose-300/50 sm:inset-6" />
      <div className="pointer-events-none fixed inset-5 rounded-[1.7rem] border border-rose-200/30 sm:inset-7" />

      {/* Pressed flower corners */}
      <Petal className="fixed -left-2 top-10 rotate-45" color="#fda4af" />
      <Petal className="fixed -right-3 top-24 -rotate-12" color="#c4b5fd" />
      <Petal className="fixed bottom-16 -left-3 -rotate-45" color="#fb7185" />
      <Petal className="fixed bottom-24 -right-2 rotate-12" color="#fda4af" />

      <div className="relative z-10 w-full max-w-2xl">
        {/* Top header note */}
        <motion.header
          className="note-tape mb-6 rounded-[2rem] bg-[var(--paper)] p-6 text-center card-shadow sm:p-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-3 flex items-center justify-center gap-2 text-rose-400">
            <Sparkles className="h-3.5 w-3.5" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-rose-400 sm:text-xs">
              A Special Wish For
            </span>
            <Sparkles className="h-3.5 w-3.5" />
          </div>

          <motion.h1
            className="text-center font-sans text-[2.1rem] font-extrabold leading-[1.05] tracking-tight text-[var(--chocolate)] sm:text-5xl"
            animate={{ opacity: [0.92, 1, 0.92] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          >
            Happy
            <br />
            Birthday
          </motion.h1>

          <motion.h2
            className="font-hand mt-2 text-4xl font-bold text-rose-600 sm:mt-3 sm:text-6xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.25, type: "spring", stiffness: 200, damping: 15 }}
          >
            {name}! 🎂
          </motion.h2>

          <div className="mx-auto mt-5 flex max-w-xs items-center justify-center gap-3 sm:max-w-sm">
            <div className="h-px flex-1 bg-rose-200" />
            <span className="text-lg">💖🎈🎁</span>
            <div className="h-px flex-1 bg-rose-200" />
          </div>

          <p className="font-hand mx-auto mt-4 max-w-sm text-xl leading-relaxed text-rose-700/90 sm:text-2xl">
            To the one who knows all my stories and still chooses to stick around — this little card is for you.
          </p>
        </motion.header>

        {/* Photos */}
        <section className="mb-8 flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-8">
          <PhotoCard
            onClick={() => setShowSurprise(true)}
            src="/images/birthday-girl.jpg"
            alt="Birthday girl"
            caption="Us being us 💕"
            rotate={-3}
          />
          <PhotoCard
            onClick={() => setShowSurprise(true)}
            src="/images/memory.jpg"
            alt="Special memory"
            caption="My favourite person 🫂"
            rotate={2}
          />
        </section>

        {/* Handwritten note block */}
        <motion.div
          className="note-tape relative mx-auto mb-8 max-w-xl rounded-sm bg-[var(--parchment)] p-6 shadow-sm sm:p-8"
          style={{ transform: "rotate(-0.5deg)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="absolute -top-3 left-1/2 flex -translate-x-1/2 items-center gap-1">
            <Heart className="h-4 w-4 fill-rose-300 text-rose-300" />
            <Heart className="h-3 w-3 fill-violet-300 text-violet-300" />
            <Heart className="h-4 w-4 fill-rose-300 text-rose-300" />
          </div>

          <h3 className="mb-4 text-center font-sans text-sm font-bold uppercase tracking-widest text-rose-400">
            Dear {name},
          </h3>

          <div className="space-y-4">
            {DEFAULT_MESSAGES.map((text, index) => (
              <motion.p
                key={index}
                className="font-hand text-xl leading-snug text-rose-900/85 sm:text-[1.6rem]"
                initial={{ opacity: 0, x: index % 2 === 0 ? -12 : 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.12 }}
              >
                {text}
              </motion.p>
            ))}
          </div>

          <p className="font-hand mt-6 text-right text-2xl text-rose-600 sm:text-3xl">
            — Your bestie 💕
          </p>
        </motion.div>

        {/* Birthday cake */}
        <BirthdayCake className="mx-auto mb-4" />
      </div>

      <SurpriseModal open={showSurprise} onClose={() => setShowSurprise(false)} name={name} />
    </motion.main>
  );
}

function PhotoCard({ src, alt, caption, onClick, rotate }) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      className="group gold-clip relative flex w-full cursor-pointer flex-col bg-white p-3 pb-5 text-left shadow-md transition hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-rose-300 sm:w-56 sm:p-4"
      style={{ transform: `rotate(${rotate}deg)` }}
      whileHover={{ scale: 1.03, rotate: 0 }}
      whileTap={{ scale: 0.97 }}
    >
      <div className="relative aspect-square w-full overflow-hidden bg-rose-50">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover sepia-[0.06] transition duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 80vw, 260px"
        />
      </div>
      <p className="font-hand mt-3 text-center text-lg text-rose-700 sm:text-xl">
        {caption}
      </p>
    </motion.button>
  );
}
