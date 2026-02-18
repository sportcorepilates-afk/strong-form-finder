import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  useEffect(() => {
    document.title = "About Sport Core Pilates";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "Learn about Sport Core Pilates, our philosophy, and our performance-led approach to Pilates training.");
    } else {
      const newMeta = document.createElement("meta");
      newMeta.name = "description";
      newMeta.content = "Learn about Sport Core Pilates, our philosophy, and our performance-led approach to Pilates training.";
      document.head.appendChild(newMeta);
    }
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight text-foreground mb-6">
            ABOUT US
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            Learn about Sport Core Pilates, our philosophy, and our performance-led approach to Pilates training.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default About;
