import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SCPReform = () => {
  return (
    <>
      <Helmet>
        <title>SCP Reform | Sport Core Pilates</title>
        <meta
          name="description"
          content="A structured recovery pathway integrating Physiotherapy, Pilates and rehab Strength training to restore movement, reduce pain, and guide you safely back to performance." />
        
      </Helmet>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="section-padding pt-32 md:pt-40 bg-background">
          <div className="max-w-5xl mx-auto">
            <span className="font-heading text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
              Recovery & Rehabilitation
            </span>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground leading-[0.9] mb-6">
              SCP <span className="text-gradient-yellow">Reform</span>
            </h1>
            <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed">
              A structured recovery pathway integrating Physiotherapy, Pilates
              and Rehab Strength training to restore movement, reduce pain, and
              guide you safely back to performance.
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
              What Is <span className="text-gradient-yellow">SCP Reform</span>?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <p className="font-body text-muted-foreground text-base md:text-lg leading-relaxed">
                SCP Reform is our structured recovery programme that begins with a physiotherapy assessment to understand your condition, movement limitations and readiness for training. These sessions are designed for clients transitioning from physiotherapy or managing ongoing pain and injury. The programme bridges the gap between clinical rehabilitation and performance training — combining physiotherapy principles, reformer-based Pilates, and progressive strength work.
              




              </p>
              <p className="font-body text-muted-foreground text-base md:text-lg leading-relaxed">
                Once cleared by the Physiotherapist, each session is carefully designed to rebuild movement confidence, restore functional capacity, and guide you safely back toward full training. Every step is aligned to ensure a safe and effective return to movement and long term performance.      
              


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
              Built for your{" "}
              <span className="text-gradient-yellow">recovery</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
              {
                title: "Post-Physiotherapy Clients",
                text: "Individuals who have completed or are transitioning from physiotherapy and need a structured pathway back to full movement."
              },
              {
                title: "Injury Recovery",
                text: "Clients managing chronic pain, post-surgical recovery, or recurring injuries who need controlled, progressive training."
              },
              {
                title: "Returning Athletes",
                text: "Active individuals and athletes looking to safely rebuild strength and movement confidence after injury or time away."
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
              Guided Recovery{" "}
              <span className="text-gradient-yellow">Sessions</span>
            </h2>
            <div className="space-y-6">
              {[
              {
                step: "01",
                title: "Assessment & Activation",
                text: "Targeted warm-up and movement screening to identify limitations and prepare your body for safe, effective work."
              },
              {
                step: "02",
                title: "Reformer-Based Rehabilitation",
                text: "Controlled reformer and equipment exercises designed to restore movement patterns, improve joint stability, and reduce pain."
              },
              {
                step: "03",
                title: "Progressive Strength Work",
                text: "Structured loading progressions that rebuild functional strength at a pace matched to your recovery stage."
              },
              {
                step: "04",
                title: "Recovery & Integration",
                text: "Guided cool-down focusing on tissue recovery, mobility maintenance, and reinforcing the movement gains from each session."
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
              "Restored movement quality and reduced pain",
              "Rebuilt strength and functional capacity after injury",
              "A structured pathway from rehabilitation to performance training",
              "Confidence to return to sport and full training safely"].
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
              ​Begin Your Recovery
            </span>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-foreground leading-[0.95] mb-6">
              Recover With <span className="text-gradient-yellow">Purpose</span>
            </h2>
            <p className="font-body text-muted-foreground text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10">
              Move beyond pain and back toward performance. SCP Reform gives you
              the structure and support to rebuild with confidence.
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

export default SCPReform;