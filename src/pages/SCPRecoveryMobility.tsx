import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import workoutRecovery from "@/assets/workout-recovery.jpg";

const SCPRecoveryMobility = () => {
  return (
    <>
      <Helmet>
        <title>SCP Recovery & Mobility | Sport Core Pilates</title>
        <meta name="description" content="A structured recovery and mobility class designed to improve movement quality, reduce stiffness, enhance flexibility, and support long-term performance." />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Sport Core Pilates" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:url" content="https://sportcorepilates.com/scp-recovery-mobility" />
        <meta property="og:title" content="SCP Recovery & Mobility | Sport Core Pilates" />
        <meta property="og:description" content="A structured recovery and mobility class designed to improve movement quality, reduce stiffness, enhance flexibility, and support long-term performance." />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://sportcorepilates.com/scp-recovery-mobility" />
      </Helmet>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="section-padding pt-32 md:pt-40 bg-background">
          <div className="max-w-5xl mx-auto">
            <span className="font-heading text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
              Recovery & Mobility
            </span>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground leading-[0.9] mb-6">
              SCP <span className="text-gradient-yellow">Recovery & Mobility</span>
            </h1>
            <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed mb-10">
              A structured recovery and mobility class designed to improve movement quality, reduce stiffness, and support long-term performance.
            </p>
            <img
              src={workoutRecovery}
              alt="Athletic man performing a guided mobility and recovery exercise with a resistance band and trigger ball"
              className="w-full h-auto object-cover"
              width={1024}
              height={1024}
            />
          </div>
        </section>

        {/* What This Is */}
        <section className="section-padding bg-card">
          <div className="max-w-5xl mx-auto">
            <span className="font-heading text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
              What This Is
            </span>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-foreground leading-[0.95] mb-8">
              Recovery as <span className="text-gradient-yellow">Part of Training</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <p className="font-body text-muted-foreground text-base md:text-lg leading-relaxed">
                SCP Recovery & Mobility is a recovery-focused group class designed to help your body move better, recover more effectively, and maintain long-term performance.
              </p>
              <p className="font-body text-muted-foreground text-base md:text-lg leading-relaxed">
                Using Pilates equipment, mobility training, trigger balls, resistance bands, and guided release techniques, the class focuses on improving joint mobility, reducing muscular tension, and restoring movement quality throughout the body.
              </p>
            </div>
            <p className="font-body text-muted-foreground text-base md:text-lg leading-relaxed mt-8">
              Whether you're recovering from training, managing the effects of a demanding work week, or looking to move with greater ease, SCP Recovery & Mobility provides a structured approach to recovery that supports how you train, perform, and feel.
            </p>
          </div>
        </section>

        {/* Who It's For */}
        <section className="section-padding bg-background">
          <div className="max-w-5xl mx-auto">
            <span className="font-heading text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
              Who It's For
            </span>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-foreground leading-[0.95] mb-10">
              Designed for <span className="text-gradient-yellow">Active Bodies</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Individuals experiencing stiffness, tightness, or reduced mobility",
                "Active adults looking to improve flexibility and movement quality",
                "Athletes seeking a structured approach to recovery",
                "People recovering from periods of high training load or physical fatigue",
                "Individuals wanting to improve posture, mobility, and body awareness"
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-4 bg-card border border-border p-6"
                >
                  <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
                  <p className="font-body text-muted-foreground text-sm md:text-base leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
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
              Guided Recovery and <span className="text-gradient-yellow">Mobility Training</span>
            </h2>
            <div className="space-y-6">
              {[
                {
                  step: "01",
                  title: "Mobility and Flexibility Training",
                  text: "Guided exercises designed to improve joint mobility, flexibility, and overall movement efficiency."
                },
                {
                  step: "02",
                  title: "Release Techniques",
                  text: "Trigger balls, resistance bands, and Pilates equipment are incorporated to reduce muscular tension and improve tissue quality."
                },
                {
                  step: "03",
                  title: "Full-Body Recovery",
                  text: "Sessions are designed to restore movement from the neck to the ankles while supporting better posture, balance, and control."
                },
                {
                  step: "04",
                  title: "Recovery Through Movement",
                  text: "Every session combines movement, mobility, and recovery principles to help you feel better prepared for daily activity, training, and sport."
                }
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex gap-6 md:gap-8 items-start border-b border-border pb-6 last:border-0 last:pb-0"
                >
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
              ))}
            </div>
          </div>
        </section>

        {/* Outcomes */}
        <section className="section-padding bg-background">
          <div className="max-w-5xl mx-auto">
            <span className="font-heading text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
              Outcomes
            </span>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-foreground leading-[0.95] mb-10">
              Move Freer. <span className="text-gradient-yellow">Recover Better.</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Improved mobility and flexibility",
                "Reduced stiffness and muscular tension",
                "Better posture and movement quality",
                "Enhanced body awareness and control",
                "Improved recovery between training sessions",
                "Greater readiness for daily activity and sport"
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
              Make Recovery Part of Training
            </span>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-foreground leading-[0.95] mb-6">
              Move Better <span className="text-gradient-yellow">Tomorrow</span>
            </h2>
            <p className="font-body text-muted-foreground text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10">
              Recovery is not a break from training. It is part of training. Discover a structured approach to mobility and recovery designed to help you move well, train consistently, and perform at your best.
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

export default SCPRecoveryMobility;
