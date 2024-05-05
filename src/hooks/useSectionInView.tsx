import { SectionId } from "@/data/sections";
import { useSectionActions } from "@/lib/zustand/store";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export const useSectionInView = (sectionId: SectionId) => {
  const { setSection } = useSectionActions();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.8 });

  useEffect(() => {
    if (isInView) {
      setSection(sectionId);
    }
  });

  return {
    ref,
  };
};
