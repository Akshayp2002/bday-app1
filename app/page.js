"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import EnvelopeIntro from "./components/EnvelopeIntro";
import WishDashboard from "./components/WishDashboard";
import FloatingElements from "./components/FloatingElements";

export default function Home() {
  const [opened, setOpened] = useState(false);

  // 👋 Customize the birthday person's name here:
  const birthdayName = "Bestie";

  return (
    <div
      className="relative min-h-screen overflow-hidden bg-[var(--cream)] font-sans text-rose-950 select-none"
      onContextMenu={(e) => e.preventDefault()}
      onDragStart={(e) => e.preventDefault()}
      style={{ WebkitUserSelect: "none", WebkitTouchCallout: "none" }}
    >
      <FloatingElements count={20} />

      <AnimatePresence mode="wait">
        {!opened ? (
          <EnvelopeIntro key="intro" onOpen={() => setOpened(true)} />
        ) : (
          <WishDashboard key="dashboard" name={birthdayName} />
        )}
      </AnimatePresence>
    </div>
  );
}
