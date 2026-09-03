import { createFileRoute } from "@tanstack/react-router";
import { Loader } from "@/components/jnex/Loader";
import { Navbar } from "@/components/jnex/Navbar";
import { Hero } from "@/components/jnex/Hero";
import { Products } from "@/components/jnex/Products";
import { ScrollLine } from "@/components/jnex/ScrollLine";
import { RoiCalculator } from "@/components/jnex/RoiCalculator";
import { CustomDev } from "@/components/jnex/CustomDev";
import { Story } from "@/components/jnex/Story";
import { ExitIntent } from "@/components/jnex/ExitIntent";
import { Footer } from "@/components/jnex/Footer";

const title = "Jenex Solution — JNEX POS & LMS Software for Sri Lankan Businesses";
const description =
  "JNEX builds offline-ready POS and institute management software that gives business owners control, clarity and their evenings back. 3-day free trial.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen bg-background">
      <Loader />
      <Navbar />
      <main className="relative">
        <ScrollLine />
        <Hero />
        <Products />
        <RoiCalculator />
        <CustomDev />
        <Story />
      </main>
      <Footer />
      <ExitIntent />
    </div>
  );
}
