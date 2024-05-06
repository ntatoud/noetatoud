import { ReactNode } from "react";

export default function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-4xl font-semibold text-primary tracking-tighter">
      {children}
    </h2>
  );
}
