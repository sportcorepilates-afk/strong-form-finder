import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const teamMembers = [
{
  name: "Team Member Name",
  role: "Role Title",
  image: null,
  bio: "Short biography and background."
},
{
  name: "Team Member Name",
  role: "Role Title",
  image: null,
  bio: "Short biography and background."
},
{
  name: "Team Member Name",
  role: "Role Title",
  image: null,
  bio: "Short biography and background."
}];


const TheStudio = () => {
  return (
    <>
      <Helmet>
        <title>The Studio | Sport Core Pilates</title>
        <meta
          name="description"
          content="Explore the performance-focused training environment designed for precision, progression and long-term durability." />

      </Helmet>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="section-padding pt-32 md:pt-40 bg-background">
          <div className="max-w-5xl mx-auto">
            <span className="font-heading text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
              The Studio
            </span>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground leading-[0.9] mb-6">
              Where Performance{" "}
              <span className="text-gradient-yellow">Meets Precision</span>
            </h1>
            <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed">
              A purpose-built training environment designed for structured
              progression, athletic durability, and movement precision — every
              detail engineered to support your performance journey.
            </p>
          </div>
        </section>

        {/* The Environment */}
        <section className="section-padding bg-card">
          <div className="max-w-5xl mx-auto">
            <span className="font-heading text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
              The Environment  
            </span>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-foreground leading-[0.95] mb-6">
              Built for{" "}
              <span className="text-gradient-yellow">Focussed Performance</span>
            </h2>
            <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed">
              Our studio is designed with intention — from the equipment
              selection to the spatial layout. Every element supports focused,
              distraction-free training where you can push boundaries safely.
              Premium reformers, controlled lighting, and a clean aesthetic
              create an environment where serious work happens.
            </p>
          </div>
        </section>

        {/* How We Train */}
        <section className="section-padding bg-background">
          <div className="max-w-5xl mx-auto">
            <span className="font-heading text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
              Our Approach
            </span>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-foreground leading-[0.95] mb-6">
              How We{" "}
              <span className="text-gradient-yellow">Train</span>
            </h2>
            <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed">
              Training at Sport Core Pilates is structured, progressive, and
              purposeful. Every session is built on the SCP Method — integrating
              strength and conditioning principles into Pilates to develop
              real-world durability. Small class sizes ensure personalised
              attention, and every movement is coached with precision.
            </p>
          </div>
        </section>

        {/* The Team */}
        <section className="section-padding bg-card">
          <div className="max-w-5xl mx-auto">
            <span className="font-heading text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
              Our People
            </span>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-foreground leading-[0.95] mb-6">
              The{" "}
              <span className="text-gradient-yellow">Team</span>
            </h2>
            <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed mb-12">
              Our instructors are movement specialists trained in the SCP
              Method — combining deep Pilates expertise with strength and
              conditioning knowledge to deliver results-driven coaching.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) =>
              <div
                key={index}
                className="bg-background border border-border rounded-lg p-6 flex flex-col items-center text-center">

                  {member.image ?
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover mb-4" /> :


                <div className="w-24 h-24 rounded-full bg-muted mb-4" />
                }
                  <h3 className="font-heading text-lg text-foreground mb-1">
                    {member.name}
                  </h3>
                  <span className="font-heading text-xs uppercase tracking-[0.2em] text-primary mb-3">
                    {member.role}
                  </span>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="section-padding bg-background text-center">
          <div className="max-w-3xl mx-auto">
            <span className="font-heading text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
              Your Next Step
            </span>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-foreground leading-[0.95] mb-6">
              Train With{" "}
              <span className="text-gradient-yellow">Purpose</span>
            </h2>
            <p className="font-body text-muted-foreground text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10">
              Experience a training environment built for performance. Whether
              you're an athlete or an active individual ready to move better —
              this is where it starts.
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

export default TheStudio;