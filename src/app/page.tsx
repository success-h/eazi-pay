import { ForWho } from "@/components/ForIndividual&Businesses";
import { FreeForever } from "@/components/FreeForever";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Demo } from "@/components/RequestDemo";

export default function Home() {
  return (
    <main>
      <Hero />
      <ForWho />
      <HowItWorks />
      <FreeForever />
      <Demo />
    </main>
  );
}
