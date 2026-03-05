"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/70 border-b border-white/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/Hero/IslandLogo.png"
            alt="Island Cabs Rameshwaram Taxi Service"
            width={40}
            height={40}
          />

          <span className="text-xl font-bold text-[#0D276D]">Island Cabs</span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-10 font-medium text-[#111827]">
          <Link href="/">Home</Link>

          <Link href="/about-us">About</Link>

          {/* SERVICES DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-[#0D276D]">
              Cab Services
              <ChevronDown size={16} />
            </button>

            {servicesOpen && (
              <div className="absolute top-full mt-4 w-64 bg-white rounded-lg shadow-lg border p-4 flex flex-col gap-3">
                <Link
                  href="/cab-services"
                  className="font-semibold text-[#0D276D]"
                >
                  All Cab Services
                </Link>

                <Link href="/rameshwaram-to-madurai-taxi">
                  Rameshwaram → Madurai Taxi
                </Link>

                <Link href="/rameshwaram-to-kanyakumari-taxi">
                  Rameshwaram → Kanyakumari Taxi
                </Link>

                <Link href="/rameshwaram-to-dhanushkodi-taxi">
                  Rameshwaram → Dhanushkodi Taxi
                </Link>
              </div>
            )}
          </div>

          <Link href="/contact-us">Contact</Link>
        </nav>

        {/* CTA */}
        <Link
          href="/book-now"
          className="hidden md:block bg-[#0D276D] text-white px-5 py-2 rounded-lg font-medium shadow-md hover:bg-[#6482B9]"
        >
          Request Booking
        </Link>

        {/* MOBILE MENU */}
        <button
          className="md:hidden text-[#0D276D]"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE NAV */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="flex flex-col px-6 py-6 gap-5 font-medium">
            <Link href="/" onClick={() => setMobileOpen(false)}>
              Home
            </Link>

            <Link href="/about-us" onClick={() => setMobileOpen(false)}>
              About
            </Link>

            <Link href="/cab-services" onClick={() => setMobileOpen(false)}>
              Cab Services
            </Link>

            <Link
              href="/rameshwaram-to-madurai-taxi"
              onClick={() => setMobileOpen(false)}
            >
              Rameshwaram → Madurai Taxi
            </Link>

            <Link
              href="/rameshwaram-to-kanyakumari-taxi"
              onClick={() => setMobileOpen(false)}
            >
              Rameshwaram → Kanyakumari Taxi
            </Link>

            <Link
              href="/rameshwaram-to-dhanushkodi-taxi"
              onClick={() => setMobileOpen(false)}
            >
              Rameshwaram → Dhanushkodi Taxi
            </Link>

            <Link href="/contact-us" onClick={() => setMobileOpen(false)}>
              Contact
            </Link>

            <Link
              href="/book-now"
              onClick={() => setMobileOpen(false)}
              className="bg-[#0D276D] text-white text-center py-3 rounded-lg"
            >
              Request Booking
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
