import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SCPFoundation = () => {
  return (
    <>
      <Helmet>
        <title>SCP Foundation | Sport Core Pilates</title>
        <meta
          name="description"
          content="An introductory Pilates class focused on movement quality, control, and building a strong foundation for structured training." />
        
      </Helmet>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="section-padding pt-32 md:pt-40 bg-background">
          <div className="max-w-5xl mx-auto">
            <span className="font-heading text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
              Movement Foundations
            </span>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground leading-[0.9] mb-6">
              SCP <span className="text-gradient-yellow">Foundation</span>
            </h1>
            <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed">
              A structured introduction to performance-focused Pilates. Build movement quality, core strength, and control before progressing to advanced training formats.
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
              What Is <span className="text-gradient-yellow">SCP Foundation</span>?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <p className="font-body text-muted-foreground text-base md:text-lg leading-relaxed">
                SCP Foundation is our introductory Pilates class designed for those beginning their training journey or returning after a break. The class focuses on establishing proper movement patterns, developing core stability, and building the body awareness needed for structured progression.
              </p>
              <p className="font-body text-muted-foreground text-base md:text-lg leading-relaxed">
                Using reformer and equipment-based exercises and guided instruction, each session is designed to build competence and confidence — ensuring you move with quality before adding complexity. This is where your SCP journey begins.
              </p>
            </div>
          </div>
        </section>

        {/* Who Is It For */}
        <section className="section-padding bg-background">
          <div className="max-w-5xl mx-auto">
            <span className="font-heading text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
              Who It's For?
            </span>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-foreground leading-[0.95] mb-10">
              Built for your <span className="text-gradient-yellow">starting point</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
              {
                title: "Beginners",
                text: "New to Pilates or reformer training and looking for a structured, supportive starting point."
              },
              {
                title: "Returning Clients",
                text: "Coming back after time away and wanting to rebuild your movement foundations with confidence."
              },
              {
                title: "Active Individuals",
                text: "Experienced in other forms of training but new to the SCP methodology and assessment-led approach."
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
              Structured, Coach-Led <span className="text-gradient-yellow">Sessions</span>
            </h2>
            <div className="space-y-6">
              {[
              {
                step: "01",
                title: "Warm-Up & Activation",
                text: "Guided mobility and activation drills to prepare your body for the session ahead."
              },
              {
                step: "02",
                title: "Foundation Movements",
                text: "Reformer and equipment based exercises focusing on alignment, core engagement, and movement control."
              },
              {
                step: "03",
                title: "Progressive Challenge",
                text: "Structured progressions that build strength and coordination at a pace suited to your ability."
              },
              {
                step: "04",
                title: "Cool-Down & Recovery",
                text: "Stretching and breathwork to support recovery and reinforce the movement patterns practised."
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
              Results
            </span>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-foreground leading-[0.95] mb-10">
              What You'll <span className="text-gradient-yellow">Gain</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
              "Improved movement quality and body awareness",
              "Stronger core stability and postural control",
              "Confidence to progress to SCP Control and beyond",
              "A clear understanding of the SCP training methodology"].
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
              ​Start Your Journey    
            </span>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-foreground leading-[0.95] mb-6">
              Build Your <span className="text-gradient-yellow">Foundation</span>
            </h2>
            <p className="font-body text-muted-foreground text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10">
              Start with the fundamentals and set yourself up for long-term progress. Your SCP journey begins here.
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

export default SCPFoundation;