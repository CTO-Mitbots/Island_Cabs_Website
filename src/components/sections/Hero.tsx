"use client";

import OutlineButton from "@/components/ui/OutlineButton";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="
      relative
      pt-32
      pb-24
      overflow-hidden
      bg-gradient-to-br
      from-[#f8fafc]
      via-[#b7c6e2]
      to-[#85a1f6]
      "
    >
      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12">
        {/* LEFT CONTENT */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold text-black leading-tight"
          >
            Island Cabs
            <br />
            Rameshwaram Taxi Service
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-black/80 max-w-lg"
          >
            Island Cabs provides reliable taxi services in Rameshwaram for
            temple tours, local sightseeing and outstation trips to Madurai,
            Kanyakumari and other destinations across South India. With over 6
            years of experience, we ensure safe, comfortable and punctual travel
            for tourists and pilgrims visiting Rameshwaram.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-10 flex gap-4 items-center"
          >
            <Link
              href="/contact-us"
              className="inline-block bg-[#0D276D] text-white px-8 py-3 rounded-full font-semibold shadow-md hover:bg-[#6482B9] transition-all duration-300"
            >
              Book Taxi
            </Link>

            <Link href="/cab-services">
              <OutlineButton>Explore Vehicles</OutlineButton>
            </Link>
          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ x: 500, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center md:-mr-20"
        >
          <div className="w-[180%] md:w-[200%] relative z-10">
            <Image
              src="/images/Hero/Car.png"
              alt="Island Cabs taxi service in Rameshwaram for temple tours and Madurai travel"
              width={1900}
              height={1200}
              priority
              className="w-full h-auto drop-shadow-[0_60px_80px_rgba(0,0,0,0.35)]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
