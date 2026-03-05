"use client";

import { motion } from "framer-motion";
import { useState, useRef } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";

export default function ContactClient() {

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);
    setSuccess(false);

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      formRef.current.reset();
      setSuccess(true);
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  const faqs = [
    {
      question: "Do you provide taxi services in Rameshwaram?",
      answer:
        "Yes, Island Cabs offers reliable taxi services in Rameshwaram including temple tours and sightseeing trips."
    },
    {
      question: "Can I book a taxi from Rameshwaram to Madurai?",
      answer:
        "Yes, we provide comfortable taxi services from Rameshwaram to Madurai with experienced drivers."
    },
    {
      question: "Do you offer taxis to Kanyakumari?",
      answer:
        "Yes, Island Cabs provides outstation taxi services from Rameshwaram to Kanyakumari and nearby destinations."
    },
    {
      question: "How can I book a cab with Island Cabs?",
      answer:
        "You can submit the booking request form on this page or call us directly for quick taxi booking."
    }
  ];

  return (
    <main>

      {/* HERO */}
      <section className="pt-32 pb-24 bg-gradient-to-br from-[#f8fafc] via-[#b7c6e2] to-[#85a1f6]">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          <div>

            <span className="text-[#D6A94E] font-semibold uppercase text-sm">
              Contact Island Cabs
            </span>

            <h1 className="mt-4 text-5xl font-bold">
              Book Your Taxi in Rameshwaram
            </h1>

            <p className="mt-6 text-gray-600 max-w-lg text-lg">
              Need a taxi for temple tours, sightseeing or outstation travel?
              Contact Island Cabs for reliable and comfortable journeys.
            </p>

          </div>

          <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/Hero/Contact-Us.jpg"
              alt="Contact Island Cabs"
              fill
              className="object-cover"
            />
          </div>

        </div>

      </section>

      {/* QUICK CONTACT */}
      <section className="py-16 bg-white">

        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-6 text-center">

          <a
            href="tel:+91XXXXXXXXXX"
            className="p-8 bg-[#F8FAFC] rounded-xl shadow-sm hover:shadow-md"
          >
            <h3 className="text-lg font-semibold">📞 Call Now</h3>
            <p className="text-gray-600 mt-2">Speak with our team instantly</p>
          </a>

          <a
            href="https://wa.me/91XXXXXXXXXX"
            className="p-8 bg-[#F8FAFC] rounded-xl shadow-sm hover:shadow-md"
          >
            <h3 className="text-lg font-semibold">💬 WhatsApp</h3>
            <p className="text-gray-600 mt-2">Chat with us for quick booking</p>
          </a>

          <a
            href="mailto:info@islandcabs.com"
            className="p-8 bg-[#F8FAFC] rounded-xl shadow-sm hover:shadow-md"
          >
            <h3 className="text-lg font-semibold">✉️ Email</h3>
            <p className="text-gray-600 mt-2">Send your travel request</p>
          </a>

        </div>

      </section>

      {/* CONTACT FORM */}
      <section className="pb-20 pt-10">

        <div className="max-w-4xl mx-auto px-6">

          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="bg-white p-10 rounded-2xl shadow-md space-y-6"
          >

            <input
              type="text"
              name="user_name"
              placeholder="Full Name"
              required
              className="w-full border rounded-lg px-4 py-3"
            />

            <input
              type="email"
              name="user_email"
              placeholder="Email Address"
              required
              className="w-full border rounded-lg px-4 py-3"
            />

            <input
              type="text"
              name="location"
              placeholder="Pickup Location"
              className="w-full border rounded-lg px-4 py-3"
            />

            <textarea
              rows={4}
              name="message"
              placeholder="Tell us about your travel requirement"
              required
              className="w-full border rounded-lg px-4 py-3"
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-[#0D276D] text-white w-full py-3 rounded-lg"
            >
              {loading ? "Sending..." : "Submit Booking Request"}
            </button>

            {success && (
              <p className="text-green-600 text-center">
                Message sent successfully!
              </p>
            )}

          </form>

        </div>

      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">

        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center">
            Frequently Asked Questions
          </h2>

          <div className="mt-16 space-y-6">

            {faqs.map((faq, index) => (

              <div key={index} className="bg-[#F8FAFC] rounded-xl shadow-sm">

                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full text-left p-6 flex justify-between"
                >

                  <span className="font-semibold">{faq.question}</span>
                  <span>{openIndex === index ? "-" : "+"}</span>

                </button>

                {openIndex === index && (
                  <p className="px-6 pb-6 text-gray-600">
                    {faq.answer}
                  </p>
                )}

              </div>

            ))}

          </div>

        </div>

      </section>

    </main>
  );
}