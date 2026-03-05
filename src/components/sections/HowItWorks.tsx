import FeatureCard from "@/components/ui/FeatureCard";

export function HowItWorks() {
  return (
    <section className="py-24 bg-white text-center">
      <h2 className="text-4xl font-bold text-[#111827]">
        How to Book a Taxi with Island Cabs
      </h2>

      <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
        Booking a taxi in Rameshwaram with Island Cabs is simple. Send us your
        travel request and our team will contact you to confirm the ride details
        and availability.
      </p>

      <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        <FeatureCard
          number="01"
          title="Send Booking Request"
          description="Submit your pickup location, destination and travel date using our contact form."
        />

        <FeatureCard
          number="02"
          title="Receive Confirmation Call"
          description="Our team will call you to confirm your trip details, vehicle availability and fare."
        />

        <FeatureCard
          number="03"
          title="Enjoy Your Ride"
          description="Your driver will arrive at the scheduled time and take you safely to your destination."
        />
      </div>
    </section>
  );
}
