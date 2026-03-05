import Link from "next/link";

export default function PopularRoutes() {
  const routes = [
    {
      title: "Rameshwaram to Madurai Taxi",
      description:
        "Comfortable taxi service from Rameshwaram to Madurai for temple visits, airport transfers and city travel.",
      link: "/rameshwaram-to-madurai-taxi",
    },
    {
      title: "Rameshwaram to Kanyakumari Taxi",
      description:
        "Travel from Rameshwaram to Kanyakumari with experienced drivers and well maintained vehicles.",
      link: "/rameshwaram-to-kanyakumari-taxi",
    },
    {
      title: "Rameshwaram to Dhanushkodi Taxi",
      description:
        "Book a taxi to explore Dhanushkodi beach and nearby attractions with Island Cabs.",
      link: "/rameshwaram-to-dhanushkodi-taxi",
    },
  ];

  return (
    <section className="py-24 bg-white text-center">
      <h2 className="text-4xl font-bold text-[#111827]">
        Popular Taxi Routes from Rameshwaram
      </h2>

      <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
        Island Cabs offers reliable taxi services from Rameshwaram to major
        destinations across Tamil Nadu including Madurai, Kanyakumari and
        Dhanushkodi.
      </p>

      <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {routes.map((route, i) => (
          <div
            key={i}
            className="bg-[#F5F8FF] p-8 rounded-2xl shadow-sm hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-[#0D276D]">
              {route.title}
            </h3>

            <p className="mt-3 text-gray-600">{route.description}</p>

            <Link
              href={route.link}
              className="inline-block mt-6 text-sm font-semibold text-[#0D276D] hover:underline"
            >
              View Details →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
