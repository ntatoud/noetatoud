import { ReactNode } from "react";

export default function SectionTitle({ children }: { children: ReactNode }) {
  return <h2 className="text-4xl font-semibold">{children}</h2>;
}
