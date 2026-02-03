import TabakeryHero from "@/components/project/tabakery/TabakeryHero";
import TabakeryFeatures from "@/components/project/tabakery/TabakeryFeatures";
import ErpShowcase from "@/components/project/tabakery/ErpShowcase";

export default function TabakeryPage() {
  return (
    <main className="bg-[#121212]">
      <TabakeryHero />
      <TabakeryFeatures />
      <ErpShowcase />
    </main>
  );
}