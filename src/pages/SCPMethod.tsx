import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import scpHeroBg from "@/assets/scp-method-hero.jpg";
import { Activity, Shield, Zap } from "lucide-react";

const SCPMethod = () => {
  return (
    <>
      <Helmet>
        <title>The SCP Method | Sport Core Pilates</title>
        <meta name="description" content="Discover the SCP Method - a structured, assessment-led approach to performance-focussed Pilates training." />
      </Helmet>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative h-screen w-full overflow-hidden flex items-end">
          <div className="absolute inset-0">
            <img src={scpHeroBg} alt="SCP Method performance Pilates training" className="w-full h-full object-cover" loading="eager" />
            <div className="hero-overlay absolute inset-0" />
          </div>
          <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 pb-16 md:pb-24 lg:pb-32">
            <div className="max-w-3xl">
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-foreground leading-[0.9] mb-6">
                The SCP Method
              </h1>
              <p className="font-body text-muted-foreground text-base md:text-lg max-w-lg mb-8">
                Discover the SCP Method — a structured, assessment-led approach to performance-focussed Pilates training.
              </p>
              <a className="btn-strong" href="/start-here">
                Start Here
              </a>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="section-padding bg-card">
          <div className="max-w-5xl xl:max-w-6xl mx-auto">
            <span className="font-heading text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
              Our Approach
            </span>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-foreground leading-[0.95] mb-6">
              Pilates First.{" "}
              <span className="text-gradient-yellow">Structure Behind the Performance.</span>
            </h2>
            <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed">
              SCP places Pilates at the centre of training, enhanced by structured strength and performance principles without compromising movement quality.
            </p>
          </div>
        </section>

        {/* SCP-PX Framework */}
        <section className="section-padding bg-background">
          <div className="max-w-5xl xl:max-w-6xl mx-auto">
            <span className="font-heading text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
              Assessment
            </span>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-foreground leading-[0.95] mb-6">
              The SCP-PX{" "}
              <span className="text-gradient-yellow">Assessment Framework</span>
            </h2>
            <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed mb-12">SCP - PX stands for Performance Index - our proprietary framework for evaluating how your body moves and performs. It looks at how well you generate strength, control movement and maintain quality under load, fatigue, or physical stress. Conceptually PX represents Performance x Execution - not just how strong you are, but how well you move when it matters. Every training pathway at SCP begins here.                                           

            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
              {
                icon: Activity,
                title: "Movement Quality",
                description: "Evaluating how you move to build a training plan rooted in precision and control."
              },
              {
                icon: Shield,
                title: "Strength & Control",
                description: "Measuring your capacity to stabilise, resist, and produce force safely under load."
              },
              {
                icon: Zap,
                title: "Performance Demands",
                description: "Understanding the physical demands of your sport or lifestyle to tailor progression."
              }].
              map((pillar) =>
              <div key={pillar.title} className="bg-card border border-border p-8 xl:p-10 group hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                  <pillar.icon className="w-8 h-8 text-primary mb-6" />
                  <h3 className="font-heading text-lg text-foreground mb-3 tracking-wide">
                    {pillar.title}
                  </h3>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Structured Progression */}
        <section className="section-padding bg-card">
          <div className="max-w-5xl mx-auto">
            <span className="font-heading text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
              Progression
            </span>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-foreground leading-[0.95] mb-6">
              Train With a{" "}
              <span className="text-gradient-yellow">Clear Pathway</span>
            </h2>
            <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed">
              Progression through SCP Foundation, SCP Control, SCP Performance, SCP Restore, and Private Training.
            </p>
          </div>
        </section>

        {/* Integrated Support */}
        <section className="section-padding bg-background">
          <div className="max-w-5xl mx-auto">
            <span className="font-heading text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
              Integrated Support
            </span>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-foreground leading-[0.95] mb-6">
              Supported by{" "}
              <span className="text-gradient-yellow">Sports Science Thinking</span>
            </h2>
            <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed">
              SCP integrates physiotherapy insight and strength principles within a Pilates-first framework. This ensures that every program remains precise, progressive, and aligned with your movement capacity — without compromising control, quality, or long-term joint health.
            </p>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section-padding bg-card text-center">
          <div className="max-w-3xl mx-auto">
            <span className="font-heading text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
              Start Your Training
            </span>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-foreground leading-[0.95] mb-6">
              Experience the{" "}
              <span className="text-gradient-yellow">SCP Method</span>
            </h2>
            <p className="font-body text-muted-foreground text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10">
              Begin with a structured assessment and discover the training pathway designed for your body, your sport, and your long-term performance goals.
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

export default SCPMethod;