import { ReactNode } from "react";
import SectionTitle from "./SectionTitle";

interface SectionProps {
  children: ReactNode;
  title?: string;
  id: string;
}
export default function Section({ ...props }: SectionProps) {
  return (
    <section
      className="flex flex-col items-center w-full max-w-screen h-[50rem] scroll-m-14 bg-red-800 lg:px-24"
      id={props.id}
    >
      <SectionTitle>{props.title}</SectionTitle>
      <div className="py-8 bg-green-800 w-full h-full">{props.children}</div>
    </section>
  );
}
