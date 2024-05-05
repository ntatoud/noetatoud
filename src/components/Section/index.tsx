"use client";

import { SectionId } from "@/data/sections";
import { useSectionInView } from "@/hooks/useSectionInView";
import { ReactNode } from "react";
import SectionTitle from "./SectionTitle";

interface SectionProps {
  children: ReactNode;
  title?: string;
  id: SectionId;
}
export default function Section({ ...props }: SectionProps) {
  const { ref } = useSectionInView(props.id);
  return (
    <section
      className="flex flex-col items-center w-full max-w-screen h-[50rem] scroll-m-24 lg:px-24"
      id={props.id}
      ref={ref}
    >
      <SectionTitle>{props.title}</SectionTitle>
      <div className="py-8 w-full h-full">{props.children}</div>
    </section>
  );
}
