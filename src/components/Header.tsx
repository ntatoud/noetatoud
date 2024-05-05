"use client";
import { Section, sections } from "@/data/sections";
import { cn } from "@/lib/utils";
import { useSection } from "@/lib/zustand/store";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [scroll, setScroll] = useState(0);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", () => {
    setScroll(scrollY.get());
  });

  return (
    <header
      className={cn(
        "fixed w-full h-20 transition duration-500 md:text-xl text-md z-50",
        {
          "md:scale-[90%] h-20 bg-gradient-to-b from-gray-950 to-gray-950/10 pacity-90 -translate-y-[5%]":
            scroll > 100,
        },
      )}
    >
      <motion.div
        className="absolute grid place-content-center left-1/2 h-20 w-full"
        initial={{
          opacity: 0,
          y: -100,
          translateX: "-50%",
        }}
        animate={{
          opacity: 1,
          y: 0,
          translateX: "-50%",
        }}
      >
        <nav className="grid grid-cols-4 text-center md:gap-4 gap-2">
          {sections.map((section) => {
            return <NavItem key={`nav-item-${section.id}`} {...section} />;
          })}
        </nav>
      </motion.div>
    </header>
  );
}

const NavItem = ({ id, label }: Section) => {
  const currentSectionId = useSection();
  return (
    <Link
      href={`#${id}`}
      className={cn(
        "transition rounded-full py-2 px-4",
        "hover:bg-opacity-80",
        {
          "font-bold scale-105": currentSectionId === id,
          hover: currentSectionId !== id,
        },
      )}
    >
      {label}
    </Link>
  );
};
