import { SectionId } from "@/data/sections";
import { useSectionActions } from "@/lib/zustand/store";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const useSectionInView = (sectionId: SectionId) => {
  const { setSection } = useSectionActions();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.8 });

  if (isInView) {
    setSection(sectionId);
  }
  return {
    ref,
  };
};
