import { ReactIcon, TypeScriptIcon } from "@/components/Icons";

export const skills = [
  {
    name: "TypeScript",
    Icon: <TypeScriptIcon />,
    animation: {
      right: -100,
      y: 0,
      delay: 0.05,
      opacity: 1,
      zIndex: 1,
    },
  },
  {
    name: "React.js",
    Icon: <ReactIcon />,
    animation: {
      left: -100,
      y: 0,
      delay: 0.07,
      opacity: 1,
      zIndex: 1,
    },
  },
] as const;
