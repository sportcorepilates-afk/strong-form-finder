import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const focusAreas = [
  "Performance",
  "Rehabilitation",
  "Biomechanics",
  "Coaching",
  "Longevity",
  "Movement Science",
  "Human Performance",
];

const FutureOfMovement = () => {
  return (
    <>
      <Helmet>
        <title>Future of Movement | Sport Core Pilates</title>
        <meta
          name="description"
          content="A premium movement education and industry platform exploring performance, rehabilitation, biomechanics, coaching, and human movement through interdisciplinary learning experiences."
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Sport Core Pilates" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:url" content="https://sportcorepilates.com/future-of-movement" />
        <meta property="og:title" content="Future of Movement | Sport Core Pilates" />
        <meta
          property="og:description"
          content="A premium movement education and industry platform exploring performance, rehabilitation, biomechanics, coaching, and human movement through interdisciplinary learning experiences."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://sportcorepilates.com/future-of-movement" />
      </Helmet>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="section-padding pt-32 md:pt-40 bg-background">
          <div className="max-w-5xl mx-auto">
            <span className="font-heading text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
              FOM
            </span>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground leading-[0.9] mb-6">
              Future of <span className="text-gradient-yellow">Movement</span>
            </h1>
            <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed">
              Exploring the future of movement through education, performance, rehabilitation, and interdisciplinary learning.
            </p>
          </div>
        </section>

        {/* About */}
        <section className="section-padding bg-card">
          <div className="max-w-5xl mx-auto">
            <span className="font-heading text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
              About FOM
            </span>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-foreground leading-[0.95] mb-8">
              The Education Platform of <span className="text-gradient-yellow">Sport Core Pilates</span>
            </h2>
            <div className="space-y-6 max-w-3xl">
              <p className="font-body text-muted-foreground text-base md:text-lg leading-relaxed">
                Future of Movement (FOM) is the education and industry platform of Sport Core Pilates — created to bring together movement professionals, coaches, therapists, trainers, and performance experts through world-class learning experiences and interdisciplinary collaboration.
              </p>
              <p className="font-body text-muted-foreground text-base md:text-lg leading-relaxed">
                FOM explores the future of human movement through the lens of performance, rehabilitation, biomechanics, coaching, longevity, movement science, and real-world application.
              </p>
              <p className="font-body text-muted-foreground text-base md:text-lg leading-relaxed">
                Through workshops, masterclasses, certifications, events, and curated conversations, FOM aims to build a stronger movement culture and learning ecosystem for India.
              </p>
            </div>
          </div>
        </section>

        {/* Focus Areas */}
        <section className="section-padding bg-background">
          <div className="max-w-5xl mx-auto">
            <span className="font-heading text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
              Focus Areas
            </span>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-foreground leading-[0.95] mb-12">
              Disciplines We <span className="text-gradient-yellow">Explore</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {focusAreas.map((area) => (
                <div
                  key={area}
                  className="border border-border bg-card p-6 hover:border-primary transition-colors"
                >
                  <h3 className="font-heading text-lg uppercase tracking-[0.15em] text-foreground">
                    {area}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Future Vision */}
        <section className="section-padding bg-card">
          <div className="max-w-5xl mx-auto">
            <span className="font-heading text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
              Future Vision
            </span>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-foreground leading-[0.95] mb-12">
              Building a <span className="text-gradient-yellow">Movement Ecosystem</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Workshops",
                  desc: "Hands-on learning sessions led by leading practitioners across performance and rehabilitation disciplines.",
                },
                {
                  title: "Masterclasses",
                  desc: "Deep, focused sessions with global experts exploring advanced concepts in movement and human performance.",
                },
                {
                  title: "Certifications",
                  desc: "Structured programs that equip professionals with credible, evidence-informed methodologies.",
                },
                {
                  title: "Events",
                  desc: "Conferences and gatherings that connect movement professionals across India and beyond.",
                },
                {
                  title: "Collaborative Learning",
                  desc: "Curated conversations and interdisciplinary exchanges between coaches, therapists, and performance experts.",
                },
                {
                  title: "Industry Platform",
                  desc: "A long-term ecosystem dedicated to elevating the standard of movement education in India.",
                },
              ].map((item) => (
                <div key={item.title} className="border-l-2 border-primary pl-6">
                  <h3 className="font-heading text-xl uppercase tracking-[0.15em] text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="font-body text-muted-foreground text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="section-padding bg-background">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-foreground leading-[0.95] mb-6">
              Join the <span className="text-gradient-yellow">Movement</span>
            </h2>
            <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Be part of a growing community shaping the future of movement education and human performance in India.
            </p>
            <a href="/contact" className="btn-strong">
              Contact Us
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default FutureOfMovement;
