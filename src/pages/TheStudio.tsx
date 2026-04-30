import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const teamMembers = [
{
  name: "Dr. Moushumi Kuvawala (PT)",
  role: "Role Title",
  image: null,
  bio: "Short biography and background."
},
{
  name: "Dr. Hemakshi Basu (PT)",
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
        <meta name="description" content="Visit our state-of-the-art Pilates studio in Mumbai. Purpose-built for performance training with premium equipment." />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Sport Core Pilates" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:url" content="https://sportcorepilates.com/the-studio" />
        <meta property="og:title" content="The Studio | Sport Core Pilates" />
        <meta property="og:description" content="Visit our state-of-the-art Pilates studio in Mumbai. Purpose-built for performance training with premium equipment." />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://sportcorepilates.com/the-studio" />
      </Helmet>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="section-padding pt-32 md:pt-40 bg-background">
          <div className="max-w-5xl xl:max-w-6xl mx-auto">
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
          <div className="max-w-5xl xl:max-w-6xl mx-auto">
            <span className="font-heading text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
              The Environment  
            </span>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-foreground leading-[0.95] mb-6">
              Built for{" "}
              <span className="text-gradient-yellow">Focused Performance</span>
            </h2>
            <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed">
              Every detail of the SCP studio is designed to support structured, coach led training. From equipment selection to layout and session flow, the space prioritises movement quality, controlled progression, and professional supervision. This is not a drop in the fitness environment - it is a performance training space built with purpose.
            



            </p>
          </div>
        </section>

        {/* How We Train */}
        <section className="section-padding bg-background">
          <div className="max-w-5xl xl:max-w-6xl mx-auto">
            <span className="font-heading text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
              ​How We Train  
            </span>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-foreground leading-[0.95] mb-6">
              Structured Formats.{" "}
              <span className="text-gradient-yellow">Performance Supervised.</span>
            </h2>
            <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed">
              ​SCP sessions are delivered through structured training formats designed for progression and technical supervision. Group training creates a focused performance environment, while private and semi-private sessions allow for deeper personalization within the same structured system. Every format remains aligned with your assessment and training pathway.                             
            



            </p>
          </div>
        </section>

        {/* The Team */}
        <section className="section-padding bg-card">
          <div className="max-w-5xl xl:max-w-6xl mx-auto">
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
              ​Train with Purpose   
            </span>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-foreground leading-[0.95] mb-6">
              Experience the{" "}
              <span className="text-gradient-yellow">SCP Environment</span>
            </h2>
            <p className="font-body text-muted-foreground text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10">
              ​Begin with a structured assessment and step into a training environment built for performance and longevity.              
            

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