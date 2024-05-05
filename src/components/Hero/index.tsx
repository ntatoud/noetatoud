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
        <div className="flex flex-col text-center justify-end gap-2">
          <motion.h1
            className="text-6xl font-bold"
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            Noé Tatoud
          </motion.h1>
          <h2 className="text-4xl font-semibold text-muted-foreground">
            Fullstack web developer
          </h2>
          <p className="prose-invert prose-neutral text-lg p-2">
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
              className="text-[#DEA900] bg-[#085867]/80 font-medium"
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

        <div className="flex flex-col justify-center items-center gap-8 md:flex-row md:items-start">
          <CTA />
          <SocialMedias />
        </div>
      </div>
    </Section>
  );
}
