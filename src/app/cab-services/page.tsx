import { Car, Headphones, MessageSquare, ShieldCheck } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cab Services in Rameshwaram | Island Cabs",
  description:
    "Island Cabs provides reliable cab services in Rameshwaram including temple tours, airport transfers, outstation travel to Madurai, Kanyakumari and across Tamil Nadu.",
};

export default function CabServicesPage() {
  return (
    <main className="bg-[#F8FAFC]">
      {/* HERO */}
      <section className="pt-32 pb-24 bg-gradient-to-br from-[#f8fafc] via-[#b7c6e2] to-[#85a1f6]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#D6A94E] font-semibold uppercase tracking-wider text-sm">
              Island Cabs
            </span>

            <h1 className="mt-4 text-4xl md:text-5xl font-bold text-[#111827] leading-tight">
              Cab Services in Rameshwaram
            </h1>

            <p className="mt-6 text-gray-600 max-w-lg text-lg">
              Island Cabs provides professional taxi services for temple tours,
              local sightseeing and long-distance travel across Tamil Nadu. Our
              experienced drivers and well maintained vehicles ensure safe and
              comfortable journeys.
            </p>

            <div className="mt-8 flex flex-wrap gap-6 text-[#0D276D] font-semibold">
              <span>✔ Temple Tours</span>
              <span>✔ Airport Transfers</span>
              <span>✔ Outstation Travel</span>
            </div>

            <div className="mt-10 flex gap-6">
              <Link
                href="/contact-us"
                className="bg-[#0D276D] text-white px-8 py-3 rounded-full font-semibold"
              >
                Send Booking Request
              </Link>

              <a
                href="tel:+91XXXXXXXXXX"
                className="border border-[#0D276D] px-8 py-3 rounded-full font-semibold text-[#0D276D]"
              >
                Call Now
              </a>
            </div>
          </div>

          <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/vehicles/Cabs.webp"
              alt="Cab services in Rameshwaram"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-[#111827]">
            Our Cab Services
          </h2>

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            We provide flexible transportation services for tourists, pilgrims
            and business travelers across Tamil Nadu.
          </p>

          <div className="grid md:grid-cols-3 gap-10 mt-16">
            <div className="bg-[#F8FAFC] p-10 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold">Temple Tours</h3>
              <p className="mt-4 text-gray-600">
                Visit Ramanathaswamy Temple and nearby spiritual destinations
                comfortably with our dedicated temple tour taxis.
              </p>
            </div>

            <div className="bg-[#F8FAFC] p-10 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold">Outstation Travel</h3>
              <p className="mt-4 text-gray-600">
                Travel from Rameshwaram to Madurai, Kanyakumari and other cities
                with reliable long distance taxi services.
              </p>
            </div>

            <div className="bg-[#F8FAFC] p-10 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold">Airport Transfers</h3>
              <p className="mt-4 text-gray-600">
                Convenient airport taxi services to Madurai Airport with
                punctual drivers and comfortable vehicles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VEHICLES */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-[#111827]">
            Our Vehicle Fleet
          </h2>

          <div className="mt-16 grid md:grid-cols-4 gap-10">
            {[
              {
                name: "Sedan",
                image: "/images/vehicles/Sedan.jpeg",
                passengers: "Up to 4 Passengers",
              },
              {
                name: "SUV",
                image: "/images/vehicles/Suv.jpeg",
                passengers: "Up to 6 Passengers",
              },
              {
                name: "Luxury Car",
                image: "/images/vehicles/Luxury.jpeg",
                passengers: "Premium Comfort",
              },
              {
                name: "Tempo Traveller",
                image: "/images/vehicles/TempoTraveller.jpeg",
                passengers: "Group Travel",
              },
            ].map((vehicle, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden shadow-md bg-white"
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
                  <h3 className="text-lg font-semibold">{vehicle.name}</h3>

                  <p className="text-gray-600 text-sm mt-2">
                    {vehicle.passengers}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-[#111827]">
            Why Choose Island Cabs
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mt-16">
            {[
              {
                title: "Professional Drivers",
                desc: "Experienced and verified drivers ensuring safe travel.",
                icon: ShieldCheck,
              },
              {
                title: "Comfortable Vehicles",
                desc: "Clean and well maintained vehicles for long journeys.",
                icon: Car,
              },
              {
                title: "24/7 Support",
                desc: "Customer support available anytime for travel coordination.",
                icon: Headphones,
              },
              {
                title: "Transparent Communication",
                desc: "Clear booking coordination and reliable service.",
                icon: MessageSquare,
              },
            ].map((item, i) => {
              const Icon = item.icon;

              return (
                <div key={i} className="bg-[#F8FAFC] p-8 rounded-xl shadow-sm">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#D6A94E]/20 text-[#0D276D] mb-6">
                    <Icon size={22} />
                  </div>

                  <h3 className="text-xl font-semibold text-[#111827]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-gray-600">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#0D276D] text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold">Book Your Taxi Today</h2>

          <p className="mt-6 text-white/80">
            Send a booking request or call us directly to arrange your travel.
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
