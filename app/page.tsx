"use client";

import ContactForm from "@/components/ContactForm";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const textSize = useTransform(scrollYProgress, [0, 1], ["40px", "130px"]);
  return (
    <main className="h-screen ">
      <header className="h-16 w-full flex justify-between p-4 absolute">
        <p className="text-3xl font-bold">Omega</p>
        <li className="flex gap-x-4 text-xl">
          <ul>Home</ul>
          <ul>About</ul>
          <ul>Store</ul>
        </li>
      </header>
      <iframe
        src="https://my.spline.design/particleplanet-3c17528e63c277eb63324104e7d663bb/"
        width="100%"
        height="100%"
      ></iframe>
      <div className="h-screen relative flex justify-center items-center">
        <motion.h1 style={{ fontSize: textSize }} className="text-[130px]">
          Planet Omega
        </motion.h1>
      </div>
      <ContactForm />
    </main>
  );
}
