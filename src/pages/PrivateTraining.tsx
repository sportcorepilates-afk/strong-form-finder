import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivateTraining = () => {
  return (
    <>
      <Helmet>
        <title>Private Training | Sport Core Pilates</title>
        <meta name="description" content="One-on-one Pilates sessions tailored to your goals. Personalised attention for faster results." />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Sport Core Pilates" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:url" content="https://sportcorepilates.com/private-training" />
        <meta property="og:title" content="Private Training | Sport Core Pilates" />
        <meta property="og:description" content="One-on-one Pilates sessions tailored to your goals. Personalised attention for faster results." />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://sportcorepilates.com/private-training" />
      </Helmet>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="section-padding pt-32 md:pt-40 bg-background">
          <div className="max-w-5xl mx-auto">
            <span className="font-heading text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
              Personalised Training
            </span>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground leading-[0.9] mb-6">
              Private <span className="text-gradient-yellow">Training</span>
            </h1>
            <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed">
              One-on-one and semi-private sessions across Pilates, Strength & Conditioning, Exercise physiology or Physiotherapy tailored to your individual goals, movement needs, and performance aspirations — delivered within the SCP framework.
            </p>
          </div>
        </section>

        {/* What Private Training Includes */}
        <section className="section-padding bg-card">
          <div className="max-w-5xl mx-auto">
            <span className="font-heading text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
              What's Included
            </span>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-foreground leading-[0.95] mb-8">
              Training Built <span className="text-gradient-yellow">Around You</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <p className="font-body text-muted-foreground text-base md:text-lg leading-relaxed">
                Private training gives you dedicated coaching across Pilates, Strength and Conditioning, or Physiotherapy — or a combination of all three. Every session is programmed specifically for you, based on a thorough assessment of your movement, goals, and training history.
              </p>
              <p className="font-body text-muted-foreground text-base md:text-lg leading-relaxed">
                Whether you're managing an injury, preparing for a sporting event, or simply want focused attention on your movement quality, private sessions offer the structure and personalisation that group classes can't replicate.
              </p>
            </div>
          </div>
        </section>

        {/* Who It's For */}
        <section className="section-padding bg-background">
          <div className="max-w-5xl mx-auto">
            <span className="font-heading text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
              Who It's For
            </span>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-foreground leading-[0.95] mb-10">
              Designed for <span className="text-gradient-yellow">Every Level</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Active Adults",
                  text: "Anyone looking for personalised coaching to move better, get stronger, and train with purpose — regardless of experience level.",
                },
                {
                  title: "Athletes & Performers",
                  text: "Anyone looking for personalised coaching to move better, get stronger, and train with purpose — regardless of experience level.",
                },
                {
                  title: "Rehabilitation Clients",
                  text: "Individuals recovering from injury or surgery who need a guided, progressive return to movement and strength.",
                },
              ].slice(0, 3).map((item, index) => (
                <div
                  key={`${item.title}-${index}`}
                  className="bg-card border border-border p-8"
                >
                  <h3 className="font-heading text-sm uppercase tracking-[0.2em] text-primary mb-3">
                    {item.title}
                  </h3>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Training Formats */}
        <section className="section-padding bg-card">
          <div className="max-w-5xl mx-auto">
            <span className="font-heading text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
              Training Formats
            </span>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-foreground leading-[0.95] mb-10">
              Choose Your <span className="text-gradient-yellow">Format</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-background border border-border p-8 md:p-10">
                <span className="font-display text-3xl md:text-4xl text-primary/30 block mb-4">
                  1:1
                </span>
                <h3 className="font-heading text-base md:text-lg uppercase tracking-[0.1em] text-foreground mb-3">
                  One-on-One Training
                </h3>
                <p className="font-body text-muted-foreground text-sm md:text-base leading-relaxed">
                  Fully individualised sessions with your coach's undivided attention. Ideal for complex rehab cases, sport-specific goals, or anyone who prefers dedicated one-on-one coaching.
                </p>
              </div>
              <div className="bg-background border border-border p-8 md:p-10">
                <span className="font-display text-3xl md:text-4xl text-primary/30 block mb-4">
                  1:2
                </span>
                <h3 className="font-heading text-base md:text-lg uppercase tracking-[0.1em] text-foreground mb-3">
                  Semi-Private Training
                </h3>
                <p className="font-body text-muted-foreground text-sm md:text-base leading-relaxed">
                  Train alongside one other person while still receiving personalised programming and coaching. A great option for training partners, couples, or those who enjoy a shared training environment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Outcomes & Benefits */}
        <section className="section-padding bg-background">
          <div className="max-w-5xl mx-auto">
            <span className="font-heading text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
              Outcomes
            </span>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-foreground leading-[0.95] mb-10">
              What You'll <span className="text-gradient-yellow">Gain</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "A fully personalised training plan aligned to your goals",
                "Faster progress through focused, one-on-one coaching",
                "Improved movement quality, strength, and body confidence",
                "Seamless integration of Pilates, strength, and rehab as needed",
              ].map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-start gap-4 bg-card border border-border p-6"
                >
                  <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
                  <p className="font-body text-muted-foreground text-sm md:text-base leading-relaxed">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-card text-center">
          <div className="max-w-3xl mx-auto">
            <span className="font-heading text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
              Get Started
            </span>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-foreground leading-[0.95] mb-6">
              Train on <span className="text-gradient-yellow">Your Terms</span>
            </h2>
            <p className="font-body text-muted-foreground text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10">
              Tell us about your goals and we'll design a private training programme built around you.
            </p>
            <a className="btn-strong" href="/start-here">
              Start Here
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default PrivateTraining;
