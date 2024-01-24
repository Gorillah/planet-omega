"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Fetch() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const textY = useTransform(scrollYProgress, [0, 1], ["100%", "140%"]);
  return (
    <motion.div
      style={{ backgroundSize: textY }}
      ref={ref}
      className="flex flex-col justify-center items-center w-full space-y-6 h-screen bg-[url('/space-planet-science-night-generated-by-ai.jpg')] bg-no-repeat bg-cover bg-center bg-fixed"
    >
      <h2 className="text-6xl font-bold">Contact Us</h2>
      <p className="w-1/2 text-xl text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore
      </p>
      <button className="text-xl bg-white text-black py-2 px-4 rounded-md">
        Contact
      </button>
    </motion.div>
  );
}
