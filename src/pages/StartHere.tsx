import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const StartHere = () => {
  useEffect(() => {
    document.title = "Start Here | Sport Core Pilates";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "Begin your journey at Sport Core Pilates with a structured assessment and performance-focused onboarding process.");
    } else {
      const newMeta = document.createElement("meta");
      newMeta.name = "description";
      newMeta.content = "Begin your journey at Sport Core Pilates with a structured assessment and performance-focused onboarding process.";
      document.head.appendChild(newMeta);
    }
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight text-foreground mb-6">
            START HERE
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            Begin your journey at Sport Core Pilates with a structured assessment and performance-focused onboarding process.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default StartHere;
