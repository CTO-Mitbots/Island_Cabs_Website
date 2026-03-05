import AboutHero from "@/components/about/AboutHero";
import DriversSection from "@/components/about/DriversSection";
import FeatureCard from "@/components/ui/FeatureCard";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Island Cabs | Rameshwaram Taxi Service",
  description:
    "Island Cabs is a trusted taxi service based in Rameshwaram with over 6 years of experience providing travel to Madurai, Kanyakumari and across Tamil Nadu.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />

      {/* COMPANY STATS */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
          <div className="p-10 rounded-2xl shadow-sm bg-[#F5F8FF]">
            <h3 className="text-4xl font-bold text-[#0D276D]">6+</h3>
            <p className="mt-2 text-gray-600">Years Experience</p>
          </div>

          <div className="p-10 rounded-2xl shadow-sm bg-[#F5F8FF]">
            <h3 className="text-4xl font-bold text-[#0D276D]">1000+</h3>
            <p className="mt-2 text-gray-600">Happy Travelers</p>
          </div>

          <div className="p-10 rounded-2xl shadow-sm bg-[#F5F8FF]">
            <h3 className="text-4xl font-bold text-[#0D276D]">24/7</h3>
            <p className="mt-2 text-gray-600">Customer Support</p>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold">Our Mission</h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              Our mission is to provide safe, reliable and comfortable taxi
              services for travelers visiting Rameshwaram and nearby
              destinations. We focus on punctuality, professional drivers and
              well maintained vehicles.
            </p>

            <p className="mt-6 text-gray-600 leading-relaxed">
              Whether you need a temple tour, sightseeing taxi or long distance
              travel to cities like Madurai and Kanyakumari, Island Cabs ensures
              a smooth and stress-free journey.
            </p>
          </div>

          <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/Hero/Company.jpg"
              alt="Island Cabs taxi service"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 bg-[#F5F8FF]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold">Our Core Values</h2>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <FeatureCard
              number="01"
              title="Safety First"
              description="Experienced drivers and strict safety standards ensure secure travel."
            />

            <FeatureCard
              number="02"
              title="Customer Commitment"
              description="We prioritize customer satisfaction and reliable service."
            />

            <FeatureCard
              number="03"
              title="Professional Service"
              description="Clean vehicles, punctual drivers and dependable taxi operations."
            />
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-[#111827]">
              Areas We Serve
            </h2>

            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Island Cabs offers reliable taxi services from Rameshwaram to
              popular destinations across Tamil Nadu for tourists and pilgrims.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {/* Rameshwaram */}
            <div className="group bg-gradient-to-br from-[#F5F8FF] to-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition">
              <div className="w-14 h-14 rounded-xl bg-[#0D276D] flex items-center justify-center text-white text-xl">
                📍
              </div>

              <h3 className="mt-6 font-semibold text-lg text-[#111827]">
                Rameshwaram
              </h3>

              <p className="mt-2 text-gray-600 text-sm">
                Local temple tours and sightseeing taxi services.
              </p>
            </div>

            {/* Madurai */}
            <div className="group bg-gradient-to-br from-[#F5F8FF] to-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition">
              <div className="w-14 h-14 rounded-xl bg-[#0D276D] flex items-center justify-center text-white text-xl">
                🛕
              </div>

              <h3 className="mt-6 font-semibold text-lg text-[#111827]">
                Madurai
              </h3>

              <p className="mt-2 text-gray-600 text-sm">
                Comfortable taxi rides to Meenakshi Amman Temple and city
                attractions.
              </p>
            </div>

            {/* Kanyakumari */}
            <div className="group bg-gradient-to-br from-[#F5F8FF] to-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition">
              <div className="w-14 h-14 rounded-xl bg-[#0D276D] flex items-center justify-center text-white text-xl">
                🌅
              </div>

              <h3 className="mt-6 font-semibold text-lg text-[#111827]">
                Kanyakumari
              </h3>

              <p className="mt-2 text-gray-600 text-sm">
                Travel to the southernmost tip of India with scenic coastal
                routes.
              </p>
            </div>

            {/* Dhanushkodi */}
            <div className="group bg-gradient-to-br from-[#F5F8FF] to-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition">
              <div className="w-14 h-14 rounded-xl bg-[#0D276D] flex items-center justify-center text-white text-xl">
                🌊
              </div>

              <h3 className="mt-6 font-semibold text-lg text-[#111827]">
                Dhanushkodi
              </h3>

              <p className="mt-2 text-gray-600 text-sm">
                Explore the famous ghost town and pristine beach near
                Rameshwaram.
              </p>
            </div>
          </div>
        </div>
      </section>

      <DriversSection />

      {/* CTA */}
      <section className="py-24 bg-[#0D276D] text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold">
            Book Your Taxi with Island Cabs
          </h2>

          <p className="mt-6 text-white/80">
            Send a booking request or call us directly to arrange your trip.
          </p>

          <div className="mt-10 flex justify-center gap-6">
            <Link
              href="/contact-us"
              className="bg-white text-[#0D276D] px-8 py-3 rounded-full font-semibold"
            >
              Send Booking Request
            </Link>

            <a
              href="tel:+91XXXXXXXXXX"
              className="border border-white px-8 py-3 rounded-full"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
