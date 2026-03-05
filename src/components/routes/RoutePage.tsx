import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  description: string;
  distance: string;
  duration: string;
  image: string;
  attractions: string[];
}

export default function RoutePage({
  title,
  description,
  distance,
  duration,
  image,
  attractions,
}: Props) {
  return (
    <main>
      {/* HERO */}
      <section className="relative py-32 bg-gradient-to-br from-[#eef2ff] via-white to-[#e0e7ff]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-[#111827]">{title}</h1>

            <p className="mt-6 text-gray-600">{description}</p>

            <div className="mt-8 flex gap-4">
              <Link
                href="/contact-us"
                className="bg-[#0D276D] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#6482B9]"
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

          <div className="relative h-[380px] rounded-2xl overflow-hidden shadow-xl">
            <Image src={image} alt={title} fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* ROUTE DETAILS */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold">Route Overview</h2>

          <p className="mt-6 text-gray-600">
            The distance for this journey is approximately <b>{distance}</b>.
            The travel duration is usually around <b>{duration}</b>
            depending on road and traffic conditions.
          </p>
        </div>
      </section>

      {/* ATTRACTIONS */}
      <section className="py-24 bg-[#F5F8FF]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center">
            Popular Attractions
          </h2>

          <div className="grid md:grid-cols-3 gap-10 mt-16">
            {attractions.map((item, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition"
              >
                <h3 className="font-semibold text-lg">{item}</h3>
                <p className="text-gray-600 mt-3">
                  A popular destination visited by tourists traveling through
                  this route.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VEHICLES */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">
            Vehicles Available with Island Cabs
          </h2>

          <div className="grid md:grid-cols-3 gap-10 mt-16">
            <div className="border rounded-xl p-8">
              <h3 className="font-semibold text-lg">Sedan</h3>
              <p className="text-gray-600 mt-3">
                Comfortable for couples and small families.
              </p>
            </div>

            <div className="border rounded-xl p-8">
              <h3 className="font-semibold text-lg">SUV</h3>
              <p className="text-gray-600 mt-3">
                Spacious vehicles ideal for group travel.
              </p>
            </div>

            <div className="border rounded-xl p-8">
              <h3 className="font-semibold text-lg">Luxury</h3>
              <p className="text-gray-600 mt-3">
                Premium vehicles for comfortable travel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-28 bg-[#F5F8FF]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#111827]">
              Why Choose Island Cabs
            </h2>

            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Island Cabs has been serving tourists and pilgrims visiting
              Rameshwaram for over 6 years with reliable taxi services,
              professional drivers and comfortable vehicles.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {/* Experience */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#0D276D] text-white font-bold text-lg">
                6+
              </div>

              <h3 className="mt-6 font-semibold text-lg">
                Years of Experience
              </h3>

              <p className="mt-3 text-gray-600 text-sm">
                Serving travelers and pilgrims visiting Rameshwaram with
                reliable taxi services.
              </p>
            </div>

            {/* Drivers */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#0D276D] text-white">
                🚗
              </div>

              <h3 className="mt-6 font-semibold text-lg">
                Professional Drivers
              </h3>

              <p className="mt-3 text-gray-600 text-sm">
                Experienced local drivers who ensure safe and comfortable travel
                across Tamil Nadu.
              </p>
            </div>

            {/* Vehicles */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#0D276D] text-white">
                ⭐
              </div>

              <h3 className="mt-6 font-semibold text-lg">
                Well Maintained Vehicles
              </h3>

              <p className="mt-3 text-gray-600 text-sm">
                Clean and comfortable cars suitable for long distance travel and
                sightseeing tours.
              </p>
            </div>

            {/* Support */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#0D276D] text-white">
                📞
              </div>

              <h3 className="mt-6 font-semibold text-lg">
                Easy Booking Support
              </h3>

              <p className="mt-3 text-gray-600 text-sm">
                Send a booking request or call us directly to arrange your taxi
                service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#0D276D] text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold">
            Book Your Taxi with Island Cabs
          </h2>

          <p className="mt-6 text-white/80">
            Send a booking request or call us to confirm your travel.
          </p>

          <div className="mt-10 flex justify-center gap-6">
            <Link
              href="/contact-us"
              className="bg-white text-[#0D276D] px-8 py-3 rounded-full font-semibold"
            >
              Send Request
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
