"use client";

import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

export default function BookingClient() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendBooking = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    setLoading(true);
    setSuccess(false);

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_BOOKING_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );

      formRef.current.reset();
      setSuccess(true);
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <main className="bg-[#F8FAFC]">
      {/* HERO */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#f8fafc] via-[#b7c6e2] to-[#85a1f6]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-[#111827]"
          >
            Book Your Taxi in Rameshwaram
          </motion.h1>

          <p className="mt-6 text-gray-700 max-w-2xl mx-auto text-lg">
            Submit your trip details and the Island Cabs team will contact you
            shortly to confirm your taxi booking.
          </p>
        </div>
      </section>

      {/* QUICK CONTACT */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-6 text-center">
          <a
            href="tel:+91XXXXXXXXXX"
            className="p-8 bg-[#F8FAFC] rounded-xl shadow-sm hover:shadow-md"
          >
            <h3 className="font-semibold text-lg">
              📞 Call for Instant Booking
            </h3>
            <p className="text-gray-600 mt-2">Speak directly with our team</p>
          </a>

          <a
            href="https://wa.me/91XXXXXXXXXX"
            className="p-8 bg-[#F8FAFC] rounded-xl shadow-sm hover:shadow-md"
          >
            <h3 className="font-semibold text-lg">💬 Book via WhatsApp</h3>
            <p className="text-gray-600 mt-2">Quick responses from our team</p>
          </a>
        </div>
      </section>

      {/* BOOKING FORM */}
      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
          >
            <form
              ref={formRef}
              onSubmit={sendBooking}
              className="grid md:grid-cols-2 gap-6"
            >
              <input
                type="hidden"
                name="time"
                value={new Date().toLocaleString()}
              />

              <div className="md:col-span-2">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Full Name"
                  className="w-full px-4 py-3 border rounded-lg"
                />
              </div>

              <input
                type="text"
                name="pickup"
                required
                placeholder="Pickup Location"
                className="px-4 py-3 border rounded-lg"
              />

              <input
                type="text"
                name="drop"
                required
                placeholder="Drop Location"
                className="px-4 py-3 border rounded-lg"
              />

              <input
                type="date"
                name="date"
                required
                className="px-4 py-3 border rounded-lg"
              />

              <input
                type="number"
                name="people"
                required
                min="1"
                placeholder="Number of Passengers"
                className="px-4 py-3 border rounded-lg"
              />

              <div className="md:col-span-2">
                <input
                  type="text"
                  name="contact"
                  required
                  placeholder="Phone Number or Email"
                  className="w-full px-4 py-3 border rounded-lg"
                />
              </div>

              <div className="md:col-span-2">
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Additional details"
                  className="w-full px-4 py-3 border rounded-lg"
                />
              </div>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#0D276D] text-white py-4 rounded-lg font-semibold"
                >
                  {loading ? "Submitting..." : "Confirm Booking"}
                </button>

                {success && (
                  <p className="text-green-600 text-center mt-4">
                    Booking request sent successfully!
                  </p>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* VEHICLE OPTIONS */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827]">
            Choose Your Vehicle
          </h2>

          <div className="mt-16 grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                name: "Sedan",
                image: "/images/vehicles/Sedan.jpeg",
                capacity: "Up to 4 passengers",
              },
              {
                name: "SUV",
                image: "/images/vehicles/Suv.jpeg",
                capacity: "Up to 6 passengers",
              },
              {
                name: "Luxury",
                image: "/images/vehicles/Luxury.jpeg",
                capacity: "Premium comfort",
              },
              {
                name: "Tempo Traveller",
                image: "/images/vehicles/TempoTraveller.jpeg",
                capacity: "Group travel",
              },
            ].map((vehicle, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-md overflow-hidden"
              >
                <div className="relative h-56">
                  <Image
                    src={vehicle.image}
                    alt={vehicle.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6 text-left">
                  <h3 className="font-semibold text-lg">{vehicle.name}</h3>
                  <p className="text-gray-600 text-sm mt-2">
                    {vehicle.capacity}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
