"use client";
import { skills } from "@/data/skills";
import Section from "./Section";

const intialAnimation = {
  right: 0,
  left: 0,
  opacity: 0,
  zIndex: -2,
};

export default function Skills() {
  return (
    <Section title="Skills" id="skills">
      <div className="grid grid-cols-3 place-items-center place-content-start h-full w-full">
        {/* Head */}
        <div className="relative col-span-1">Frontend</div>
        <div className="relative col-span-1">Backend</div>
        <div className="relative col-span-1">Tools</div>
        {/*  Content */}
        <div className="relative col-span-1"></div>
        <div className="relative col-span-1">
          {skills.map((skill, index) => (
            <div key={`skill-${skill.name}`}>{skill.Icon}</div>
          ))}
        </div>
        <div className="relative col-span-1 content-center "></div>
      </div>
    </Section>
  );
}
