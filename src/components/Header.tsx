"use client";
import { sections } from "@/data/sections";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Header() {
  return (
    <header className="relative w-full grid content-center h-20 transtion">
      <motion.div
        className="absolute top-4 left-1/2"
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
        <nav className="grid grid-cols-5 text-center gap-4">
          {sections.map(({ id, label }) => {
            return (
              <Link key={`nav-item-${id}`} href={`#${id}`}>
                {label}
              </Link>
            );
          })}
        </nav>
      </motion.div>
    </header>
  );
}
