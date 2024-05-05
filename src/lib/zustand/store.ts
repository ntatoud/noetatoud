import { SectionId } from "@/data/sections";
import { create } from "zustand";

interface SectionStore {
  section: SectionId;
  actions: {
    setSection: (section: SectionId) => void;
  };
}
const useSectionStore = create<SectionStore>((set) => ({
  section: "hero",
  actions: {
    setSection: (section) => set(() => ({ section })),
  },
}));

export const useSection = () => useSectionStore((state) => state.section);
export const useSectionActions = () =>
  useSectionStore((state) => state.actions);
