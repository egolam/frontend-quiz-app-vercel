import CategorySelection from "@/components/CategorySelection";
import WelcomeScreen from "@/components/WelcomeScreen";

export default function Home() {
  return (
    <section className="flex lg:flex-row flex-col lg:gap-32 md:gap-16 gap-10">
      <WelcomeScreen/>
      <CategorySelection/>
    </section>
  );
}
