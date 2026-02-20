import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SCPMethod = () => {
  return (
    <>
      <Helmet>
        <title>The SCP Method | Sport Core Pilates</title>
        <meta name="description" content="Discover the SCP Method - a structured, assessment-led approach to performance-focussed Pilates training." />
      </Helmet>
      <Navbar />
      <main className="min-h-screen pt-24">
        <section className="px-6 md:px-12 lg:px-20 py-16 max-w-5xl mx-auto">
          <h1 className="font-display text-4xl md:text-6xl tracking-tight text-foreground mb-6">
            The SCP Method
          </h1>
          <p className="font-body text-lg text-muted-foreground leading-relaxed max-w-3xl">
            Discover the SCP Method — a structured, assessment-led approach to performance-focussed Pilates training.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default SCPMethod;
