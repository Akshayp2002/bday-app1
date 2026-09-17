"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import EnvelopeIntro from "./components/EnvelopeIntro";
import WishDashboard from "./components/WishDashboard";
import FloatingElements from "./components/FloatingElements";
import RisingBalloons from "./components/RisingBalloons";

export default function Home() {
  const [opened, setOpened] = useState(false);
  const [showBalloons, setShowBalloons] = useState(false);

  // 👋 Customize the birthday person's name here:
  const birthdayName = "Vibzzz";

  const handleOpen = () => {
    setShowBalloons(true);
    setOpened(true);
  };

  return (
    <div
      className="relative min-h-[100dvh] w-full bg-[var(--cream)] font-sans text-rose-950 pb-[env(safe-area-inset-bottom)]"
      onContextMenu={(e) => e.preventDefault()}
      onDragStart={(e) => e.preventDefault()}
      style={{
        WebkitUserSelect: "none",
        WebkitTouchCallout: "none",
        overscrollBehavior: "auto",
        backgroundColor: "var(--cream)",
        overflowY: "auto",
        overflowX: "hidden",
      }}
    >
      <FloatingElements count={20} />
      <RisingBalloons active={showBalloons} count={12} />

      <AnimatePresence mode="wait">
        {!opened ? (
          <EnvelopeIntro key="intro" onOpen={handleOpen} />
        ) : (
          <WishDashboard key="dashboard" name={birthdayName} />
        )}
      </AnimatePresence>
    </div>
  );
}
