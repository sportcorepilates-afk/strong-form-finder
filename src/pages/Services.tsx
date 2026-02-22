import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Services | Sport Core Pilates</title>
        <meta name="description" content="Explore the integrated services at Sport Core Pilates, including Physiotherapy and Strength and Conditioning support within a Pilates first performance framework." />
      </Helmet>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="section-padding pt-32 md:pt-40 bg-background">
          <div className="max-w-5xl mx-auto">
            <span className="font-heading text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
              What We Offer
            </span>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground leading-[0.9] mb-6">
              Our <span className="text-gradient-yellow">Services</span>
            </h1>
            <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed">
              Explore the integrated services at Sport Core Pilates, including Physiotherapy and Strength & Conditioning support within a Pilates-first performance framework.
            </p>
          </div>
        </section>

        {/* Pilates First */}
        <section className="section-padding bg-card">
          <div className="max-w-5xl mx-auto">
            <span className="font-heading text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
              Pilates First
            </span>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-foreground leading-[0.95] mb-6">
              The Foundation Of Everything{" "}
              <span className="text-gradient-yellow">We Do</span>
            </h2>
            <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed">
              At Sport Core Pilates, Pilates is the core training system. Physiotherapy and strength & conditioning exist to support and enhance your Performance and Pilates progression.
            </p>
          </div>
        </section>

        {/* Physiotherapy */}
        <section className="section-padding bg-card">
          <div className="max-w-5xl mx-auto">
            <span className="font-heading text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
              Physiotherapy
            </span>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-foreground leading-[0.95] mb-6">
              Movement-Led{" "}
              <span className="text-gradient-yellow">Physiotherapy</span>
            </h2>
            <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed">Our physiotherapy service is embedded within the SCP framework, ensuring rehabilitation is aligned with your training goals. Every session is designed to restore function, reduce pain, and safely return you to performance — not just baseline.

            </p>
          </div>
        </section>

        {/* Strength & Conditioning */}
        <section className="section-padding bg-background">
          <div className="max-w-5xl mx-auto">
            <span className="font-heading text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
              Strength & Conditioning
            </span>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-foreground leading-[0.95] mb-6">
              Performance-Focused{" "}
              <span className="text-gradient-yellow">Strength Training</span>
            </h2>
            <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed">
              Strength and conditioning at SCP supports your Pilates practice with structured load management, progressive overload, and sport-specific programming — all within a controlled, movement-quality-first environment.
            </p>
          </div>
        </section>

        {/* Integrated Approach */}
        <section className="section-padding bg-card">
          <div className="max-w-5xl mx-auto">
            <span className="font-heading text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
              Integrated Approach
            </span>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-foreground leading-[0.95] mb-6">
              Everything Works{" "}
              <span className="text-gradient-yellow">Together</span>
            </h2>
            <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed">At Sport Core Pilates, physiotherapy and strength & conditioning aren't separate add ons — they are integrated within the SCP method to ensure safe progression, durability, long-term performance and joint health.

            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-background text-center">
          <div className="max-w-3xl mx-auto">
            <span className="font-heading text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
              Get Started
            </span>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-foreground leading-[0.95] mb-6">
              Train With Structure.{" "}
              <span className="text-gradient-yellow">Perform With Confidence.</span>
            </h2>
            <p className="font-body text-muted-foreground text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10">
              Begin with a structured assessment and discover how our integrated services can support your goals.
            </p>
            <a className="btn-strong animate-pulse-glow" href="/start-here">
              Start Here
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>);

};

export default Services;