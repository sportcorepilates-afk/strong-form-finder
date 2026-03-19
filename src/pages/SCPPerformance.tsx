import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SCPPerformance = () => {
  return (
    <>
      <Helmet>
        <title>SCP Performance | Sport Core Pilates</title>
        <meta
          name="description"
          content="A Pilates-first training class that integrates strength and conditioning principles to improve sport performance, movement efficiency, and long-term durability." />
        
      </Helmet>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="section-padding pt-32 md:pt-40 bg-background">
          <div className="max-w-5xl mx-auto">
            <span className="font-heading text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
              Sport-Specific
            </span>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground leading-[0.9] mb-6">
              SCP <span className="text-gradient-yellow">Performance</span>
            </h1>
            <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed">
              A Pilates-first training class that integrates strength and conditioning principles to improve sport performance, movement efficiency, and long-term durability.
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
              What Is <span className="text-gradient-yellow">SCP Performance</span>?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <p className="font-body text-muted-foreground text-base md:text-lg leading-relaxed">
                SCP Performance is a sport focussed training class that integrates strength and conditioning principles within a pilates framework. It is designed to improve how your body moves, generates force, and performs in you chosen sport or activity. This class applies advanced movement strategies tailored to the demands of your sport or training goals.
              </p>
              <p className="font-body text-muted-foreground text-base md:text-lg leading-relaxed">
                Using reformer and equipment based training combined with sport-specific conditioning principles, each session targets power, endurance, and resilience — helping you perform at your best while reducing injury risk.
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
              Built for <span className="text-gradient-yellow">athletes</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
              {
                title: "Competitive Athletes",
                text: "Athletes looking to gain a competitive edge through sport-specific movement training and injury prevention strategies."
              },
              {
                title: "Control Graduates",
                text: "Clients who have progressed through SCP Control and are ready to train at a higher intensity with sport-focused programming."
              },
              {
                title: "Active Performers",
                text: "High-level recreational athletes and active adults who want to optimise performance and long-term durability."
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
              Performance-Driven{" "}
              <span className="text-gradient-yellow">Sessions</span>
            </h2>
            <div className="space-y-6">
              {[
              {
                step: "01",
                title: "Sport-Specific Warm-Up",
                text: "Dynamic activation targeting the movement patterns and muscle groups most relevant to your sport or training demands."
              },
              {
                step: "02",
                title: "Advanced Reformer & Conditioning",
                text: "High-intensity reformer work combined with strength and conditioning drills designed to build power, speed, and endurance."
              },
              {
                step: "03",
                title: "Performance Sequences",
                text: "Complex, multi-plane movement sequences that challenge coordination, reactive stability, and sport-specific strength."
              },
              {
                step: "04",
                title: "Recovery & Integration",
                text: "Targeted cool-down and mobility work to support recovery, reinforce movement quality, and prepare you for your next session."
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
              Outcomes
            </span>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-foreground leading-[0.95] mb-10">
              What You'll <span className="text-gradient-yellow">Gain</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
              "Enhanced sport-specific power, speed, and endurance",
              "Greater injury resilience and long-term durability",
              "Improved movement efficiency under high-intensity demands",
              "Advanced full-body coordination and reactive stability"].
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
              Train for <span className="text-gradient-yellow">Performance</span>
            </h2>
            <p className="font-body text-muted-foreground text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10">
              Take your training to the highest level. Integrate Pilates with sport-specific conditioning to move better, perform stronger, and stay resilient.
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

export default SCPPerformance;