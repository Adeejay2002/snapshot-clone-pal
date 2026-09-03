import { createFileRoute } from "@tanstack/react-router";
import { Loader } from "@/components/jnex/Loader";
import { Navbar } from "@/components/jnex/Navbar";
import { Hero } from "@/components/jnex/Hero";
import { Products } from "@/components/jnex/Products";
import { ScrollLine } from "@/components/jnex/ScrollLine";
import { RoiCalculator } from "@/components/jnex/RoiCalculator";
import { Testimonials } from "@/components/jnex/Testimonials";
import { Pricing } from "@/components/jnex/Pricing";
import { CustomDev } from "@/components/jnex/CustomDev";
import { Story } from "@/components/jnex/Story";
import { Support } from "@/components/jnex/Support";
import { ExitIntent } from "@/components/jnex/ExitIntent";
import { Footer } from "@/components/jnex/Footer";

const title = "Jenex Solution — JNEX POS & LMS Software for Sri Lankan Businesses";
const description =
  "JNEX builds offline-ready POS and institute management software that gives business owners control, clarity and their evenings back. 3-day free trial.";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Jenex Solution",
  alternateName: "JNEX",
  description,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Wakwella Road",
    addressLocality: "Galle",
    addressCountry: "LK",
  },
  telephone: "+94764026876",
  email: "jnexlk@gmail.com",
};

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
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(structuredData),
      },
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
        <Testimonials />
        <RoiCalculator />
        <Pricing />
        <CustomDev />
        <Story />
        <Support />
      </main>
      <Footer />
      <ExitIntent />
    </div>
  );
}
