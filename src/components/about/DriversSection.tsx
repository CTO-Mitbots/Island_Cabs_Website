"use client";

import { motion } from "framer-motion";

export default function DriversSection() {
  return (
    <section className="py-24 bg-[#F5F8FF]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold">Our Professional Drivers</h2>

        <p className="mt-6 text-gray-600">
          Experienced drivers who ensure safe and comfortable journeys.
        </p>

        <div className="mt-16 grid md:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((_, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <div className="h-40 bg-gray-200 rounded-lg mb-6 flex items-center justify-center text-gray-400">
                Driver Photo
              </div>

              <h3 className="font-semibold text-lg">Experienced Driver</h3>

              <p className="text-gray-500 mt-2 text-sm">
                Professional Taxi Driver
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
