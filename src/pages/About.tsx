import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Sport Core Pilates</title>
        <meta name="description" content="Learn about Sport Core Pilates, our philosophy, and our performance-led approach to Pilates training." />
      </Helmet>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="section-padding pt-32 md:pt-40 bg-background">
          <div className="max-w-5xl mx-auto">
            <span className="font-heading text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
              About Us
            </span>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground leading-[0.9] mb-6">
              About <span className="text-gradient-yellow">Sport Core Pilates</span>
            </h1>
            <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed">
              A Pilates-first performance system designed for strength, sport, and long-term durability — built on structured assessment, intelligent progression, and movement precision.
            </p>
          </div>
        </section>

        {/* Our Philosophy */}
        <section className="section-padding bg-card">
          <div className="max-w-5xl mx-auto">
            <span className="font-heading text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
              Our Philosophy
            </span>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-foreground leading-[0.95] mb-6">
              Pilates, Repositioned{" "}
              <span className="text-gradient-yellow">For Performance</span>
            </h2>
            <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed">
              Sport Core Pilates was built on a simple belief: Pilates is a foundational performance system. When structured and progressed intelligently, it develops strength, control, and movement resilience that transfers beyond the studio. At SCP, Pilates is positioned as a central training method — not just for recovery, but for building long-term durability and athletic capability.
            </p>
          </div>
        </section>

        {/* What Sets Us Apart */}
        <section className="section-padding bg-background">
          <div className="max-w-5xl mx-auto">
            <span className="font-heading text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
              What Sets Us Apart
            </span>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-foreground leading-[0.95] mb-6">
              Integrated Strength.{" "}
              <span className="text-gradient-yellow">Structured Assessment</span>
            </h2>
            <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed">What differentiates SCP is simple: strength and conditioning principles are integrated into Pilates training - tailored to the specific demands of your sport or activity. Combined with structured evaluation through the SCP-PX framework, every session is purposeful, progressive and aligned with your performance goals.

            </p>
          </div>
        </section>

        {/* Leadership */}
        <section className="section-padding bg-card">
          <div className="max-w-5xl mx-auto">
            <span className="font-heading text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
              Leadership
            </span>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-foreground leading-[0.95] mb-6">
              Built With{" "}
              <span className="text-gradient-yellow">Strategic Vision</span>
            </h2>
            <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed mb-12">
              Sport Core Pilates is led by a team with deep expertise in movement science, business strategy, and franchise development — united by a shared commitment to elevating the Pilates industry.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
              { name: "Gaurav Mashruwala", role: "Co-Founder & CEO", bio: "Gaurav leads the strategic direction and growth of Sport Core Pilates (SCP). With over two decades of experience in media, business leadership, and building scalable intellectual property, he brings a performance-driven mindset to developing SCP as a structured, system-led Pilates ecosystem. His focus is simple — to position Pilates as a central method for long-term strength, intelligent training, and athletic durability." },
              { name: "Dr. Moushumi Kuvawala", role: "Role Title", bio: "Short biography and background." }].
              map((leader, index) =>
              <div key={index} className="bg-background border border-border rounded-lg p-6 flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full bg-muted mb-4" />
                  <h3 className="font-heading text-lg text-foreground mb-1">{leader.name}</h3>
                  <span className="font-heading text-xs uppercase tracking-[0.2em] text-primary mb-3">{leader.role}</span>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed">{leader.bio}</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="section-padding bg-background text-center">
          <div className="max-w-3xl mx-auto">
            <span className="font-heading text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
              The Future of Pilates
            </span>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-foreground leading-[0.95] mb-6">
              A New Standard for{" "}
              <span className="text-gradient-yellow">Performance-Focused Pilates</span>
            </h2>
            <p className="font-body text-muted-foreground text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10">Whether you're an athlete, an active individual or simply ready to move better for life — Sport Core Pilates provides a structured pathway forward. Purpose - built programming, expert instruction, and a system designed for long - term strength and durability define everything we do.                                                                          

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

export default About;