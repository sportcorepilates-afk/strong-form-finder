import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SCPControl = () => {
  return (
    <>
      <Helmet>
        <title>SCP Control | Sport Core Pilates</title>
        <meta
          name="description"
          content="A progressive Pilates class focused on control, strength, and structured training beyond the fundamentals." />
        
      </Helmet>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="section-padding pt-32 md:pt-40 bg-background">
          <div className="max-w-5xl mx-auto">
            <span className="font-heading text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
              Progressive Training
            </span>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground leading-[0.9] mb-6">
              SCP <span className="text-gradient-yellow">Control</span>
            </h1>
            <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed">
              Designed for experienced Pilates clients, focusing on refined control, strength progression, and elevated movement precision beyond the fundamentals.
            </p>
          </div>
        </section>

        {/* What Is This Class */}
        <section className="section-padding bg-card">
          <div className="max-w-5xl mx-auto">
            <span className="font-heading text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
              The Class
            </span>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-foreground leading-[0.95] mb-8">
              What Is <span className="text-gradient-yellow">SCP Control</span>?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <p className="font-body text-muted-foreground text-base md:text-lg leading-relaxed">
                SCP Control is our progressive training class for clients who have built a solid foundation and are ready to advance. The class challenges your movement quality with increased complexity, load, and tempo — demanding greater strength, coordination, and focus.
              </p>
              <p className="font-body text-muted-foreground text-base md:text-lg leading-relaxed">
                Using reformer and equipment-based exercises with structured progressions, each session builds on your existing capabilities — refining control, deepening core strength, and elevating your overall training standard.
              </p>
            </div>
          </div>
        </section>

        {/* Who Is It For */}
        <section className="section-padding bg-background">
          <div className="max-w-5xl mx-auto">
            <span className="font-heading text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
              Who It's For
            </span>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-foreground leading-[0.95] mb-10">
              Ready to <span className="text-gradient-yellow">progress</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
              {
                title: "Foundation Graduates",
                text: "Clients who have completed SCP Foundation and are ready for the next level of training."
              },
              {
                title: "Experienced Practitioners",
                text: "Those with existing Pilates experience who demonstrate strong movement quality and body awareness."
              },
              {
                title: "Committed Athletes",
                text: "Individuals looking to integrate structured Pilates into their broader training programme for performance gains."
              }].
              map((item) =>
              <div
                key={item.title}
                className="bg-card border border-border p-8">
                
                  <h3 className="font-heading text-sm uppercase tracking-[0.2em] text-primary mb-3">
                    {item.title}
                  </h3>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* What To Expect */}
        <section className="section-padding bg-card">
          <div className="max-w-5xl mx-auto">
            <span className="font-heading text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
              What To Expect
            </span>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-foreground leading-[0.95] mb-10">
              Progressive, Controlled{" "}
              <span className="text-gradient-yellow">Training</span>
            </h2>
            <div className="space-y-6">
              {[
              {
                step: "01",
                title: "Dynamic Warm-Up",
                text: "Targeted activation and mobility work to prepare your body for higher-intensity movement."
              },
              {
                step: "02",
                title: "Progressive Reformer Work",
                text: "Advanced reformer and equipment-based exercises with increased load, complexity, and tempo demands."
              },
              {
                step: "03",
                title: "Strength & Control Sequences",
                text: "Challenging movement combinations that develop deep core strength, stability, and full-body coordination."
              },
              {
                step: "04",
                title: "Cool-Down & Integration",
                text: "Guided recovery work to reinforce movement patterns and support long-term progression."
              }].
              map((item) =>
              <div
                key={item.step}
                className="flex gap-6 md:gap-8 items-start border-b border-border pb-6 last:border-0 last:pb-0">
                
                  <span className="font-display text-3xl md:text-4xl text-primary/30 shrink-0">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="font-heading text-base md:text-lg uppercase tracking-[0.1em] text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="font-body text-muted-foreground text-sm md:text-base leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Outcomes & Benefits */}
        <section className="section-padding bg-background">
          <div className="max-w-5xl mx-auto">
            <span className="font-heading text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
              ​Outcomes
            </span>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-foreground leading-[0.95] mb-10">
              What You'll <span className="text-gradient-yellow">Gain</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
              "Greater strength, control, and movement precision",
              "Enhanced core stability under increased demand",
              "Structured progression towards SCP Performance",
              "Improved coordination and full-body integration"].
              map((benefit) =>
              <div
                key={benefit}
                className="flex items-start gap-4 bg-card border border-border p-6">
                
                  <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
                  <p className="font-body text-muted-foreground text-sm md:text-base leading-relaxed">
                    {benefit}
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-card text-center">
          <div className="max-w-3xl mx-auto">
            <span className="font-heading text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
              Take The Next Step
            </span>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-foreground leading-[0.95] mb-6">
              Elevate Your <span className="text-gradient-yellow">Training</span>
            </h2>
            <p className="font-body text-muted-foreground text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10">
              Push beyond the fundamentals and take your movement quality to the next level. Continue building strength, control, and movement precision within the SCP system.  
            </p>
            <a className="btn-strong" href="/start-here">
              Start Here
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>);

};

export default SCPControl;