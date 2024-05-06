"use client";

import bearstudio from "@/../public/bearstudio.svg";
import forkit from "@/../public/forkit.png";
import Section from "@/components/Section";
import TextBadge from "@/components/TextBadge";
import { motion } from "framer-motion";
import Image from "next/image";
import CTA from "./CTA";
import SocialMedias from "./SocialMedias";
export default function Hero() {
  return (
    <Section className="h-[40rem]" id="hero">
      <div className="relative flex flex-col h-full justify-center gap-8">
        <div className="flex flex-col text-left justify-end gap-2">
          <p className=" md:text-lg text-primary">Hey 👋, my name is</p>
          <motion.h1
            className="text-5xl font-bold lg:text-7xl"
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            Noé Tatoud.
          </motion.h1>
          <h2 className="text-3xl leading-4 md:text-4xl font-semibold text-muted-foreground lg:text-6xl">
            Fullstack web developer
          </h2>
          <p className="prose-invert prose-neutral text-lg py-2 leading-7">
            Currently working at
            <TextBadge
              logo={
                <Image
                  src={bearstudio}
                  alt="Bearstudio logo"
                  width={14}
                  height={14}
                  className="!mr-2 inline-flex"
                />
              }
              href="https://bearstudio.fr"
              hasLink
              className="text-[#FFC10E]  bg-[#085867]/50 font-medium"
            >
              BearStudio
            </TextBadge>
            as a junior web developer.
            <br />
            Volunteer for
            <TextBadge
              logo={<Image src={forkit} alt="Bearstudio logo" height={10} />}
              href="https://forkit.community"
              hasLink
              className="bg-black"
            />
          </p>
        </div>

        <div className="flex justify-start gap-8">
          <CTA />
          <SocialMedias />
        </div>
      </div>
    </Section>
  );
}
