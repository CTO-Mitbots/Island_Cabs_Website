import RoutePage from "@/components/routes/RoutePage";

export default function Page() {
  return (
    <RoutePage
      title="Rameshwaram to Kanyakumari Taxi"
      description="Island Cabs offers comfortable taxi service from Rameshwaram to Kanyakumari for tourists exploring the southern tip of India."
      distance="310 km"
      duration="6 – 7 hours"
      image="/images/routes/kanyakumari.jpg"
      attractions={[
        "Vivekananda Rock Memorial",
        "Thiruvalluvar Statue",
        "Kanyakumari Beach",
      ]}
    />
  );
}
