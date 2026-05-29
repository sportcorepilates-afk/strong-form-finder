import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SCPPostNatal = () => {
  return (
    <>
      <Helmet>
        <title>SCP Post Natal | Sport Core Pilates</title>
        <meta name="description" content="A structured post natal Pilates program designed to help mothers rebuild strength, restore movement, improve core function, and return to activity with confidence." />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Sport Core Pilates" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:url" content="https://sportcorepilates.com/scp-post-natal" />
        <meta property="og:title" content="SCP Post Natal | Sport Core Pilates" />
        <meta property="og:description" content="A structured post natal Pilates program designed to help mothers rebuild strength, restore movement, improve core function, and return to activity with confidence." />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://sportcorepilates.com/scp-post-natal" />
      </Helmet>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="section-padding pt-32 md:pt-40 bg-background">
          <div className="max-w-5xl mx-auto">
            <span className="font-heading text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
              Post Natal Training
            </span>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground leading-[0.9] mb-6">
              SCP <span className="text-gradient-yellow">Post Natal</span>
            </h1>
            <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed">
              A structured post natal Pilates program designed to help mothers rebuild strength, restore movement, improve core function, and return to activity with confidence.
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
              What Is <span className="text-gradient-yellow">SCP Post Natal</span>?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <p className="font-body text-muted-foreground text-base md:text-lg leading-relaxed">
                SCP Post Natal is a guided Pilates program built for mothers in the postpartum phase. The class focuses on restoring deep core function, rebuilding pelvic floor coordination, and re-establishing the movement patterns the body needs after pregnancy and birth.
              </p>
              <p className="font-body text-muted-foreground text-base md:text-lg leading-relaxed">
                Sessions are delivered on the mat and / or reformer and supporting equipment with progressive coaching — meeting you where your body is today and guiding you safely toward strength, stability, and confident return to activity.
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
              Built for your <span className="text-gradient-yellow">recovery</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
              {
                title: "New Mothers",
                text: "Cleared to exercise and ready to begin a structured return to movement after birth."
              },
              {
                title: "Returning To Training",
                text: "Mothers further into the postpartum journey looking to rebuild strength and movement quality."
              },
              {
                title: "Active Mothers",
                text: "Previously active individuals wanting a safe, progressive pathway back to confident performance."
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
              Guided, Progressive <span className="text-gradient-yellow">Sessions</span>
            </h2>
            <div className="space-y-6">
              {[
              {
                step: "01",
                title: "Breath & Core Reconnection",
                text: "Restoring diaphragmatic breathing, deep core engagement, and pelvic floor awareness."
              },
              {
                step: "02",
                title: "Foundational Strength",
                text: "Mat / Reformer and equipment-based exercises rebuilding postural control, alignment, and full-body strength."
              },
              {
                step: "03",
                title: "Progressive Movement",
                text: "Gradual progressions in load and complexity to restore confident, functional movement."
              },
              {
                step: "04",
                title: "Return To Activity",
                text: "Movement preparation that bridges recovery and a safe return to training, sport, or daily demands."
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
              "Restored core and pelvic floor function",
              "Rebuilt strength and postural stability",
              "Improved movement quality and body awareness",
              "Confidence to return to training and daily activity"].
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
              Rebuild With <span className="text-gradient-yellow">Confidence</span>
            </h2>
            <p className="font-body text-muted-foreground text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10">
              Begin a guided post natal pathway built around recovery, strength, and a confident return to movement.
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

export default SCPPostNatal;
