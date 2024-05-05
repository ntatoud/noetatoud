"use client";

import { SectionId } from "@/data/sections";
import { useSectionInView } from "@/hooks/useSectionInView";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import SectionTitle from "./SectionTitle";

interface SectionProps {
  children: ReactNode;
  title?: string;
  id: SectionId;
  className?: string;
}
export default function Section({ ...props }: SectionProps) {
  const { ref } = useSectionInView(props.id);
  return (
    <section
      className={cn(
        "flex flex-col items-center w-full max-w-screen h-[50rem] scroll-m-24 px-4 md:px-16 lg:px-24",
        props.className,
      )}
      id={props.id}
      ref={ref}
    >
      <SectionTitle>{props.title}</SectionTitle>
      <div className="py-8 w-full h-full">{props.children}</div>
    </section>
  );
}
