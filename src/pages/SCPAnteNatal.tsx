import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SCPAnteNatal = () => {
  return (
    <>
      <Helmet>
        <title>SCP Ante Natal | Sport Core Pilates</title>
        <meta name="description" content="Personalised equipment-based Pilates designed to support strength, movement, and confidence throughout pregnancy through safe, structured training." />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Sport Core Pilates" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:url" content="https://sportcorepilates.com/scp-ante-natal" />
        <meta property="og:title" content="SCP Ante Natal | Sport Core Pilates" />
        <meta property="og:description" content="Personalised equipment-based Pilates designed to support strength, movement, and confidence throughout pregnancy through safe, structured training." />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://sportcorepilates.com/scp-ante-natal" />
      </Helmet>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="section-padding pt-32 md:pt-40 bg-background">
          <div className="max-w-5xl mx-auto">
            <span className="font-heading text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
              Pregnancy Training
            </span>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground leading-[0.9] mb-6">
              SCP <span className="text-gradient-yellow">Ante Natal</span>
            </h1>
            <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed">
              Personalised equipment-based Pilates designed to support strength, movement, and confidence throughout pregnancy.
            </p>
          </div>
        </section>

        {/* What Is This Class */}
        <section className="section-padding bg-card">
          <div className="max-w-5xl mx-auto">
            <span className="font-heading text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
              What This Is
            </span>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-foreground leading-[0.95] mb-8">
              Personalised Training <span className="text-gradient-yellow">Through Pregnancy</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <p className="font-body text-muted-foreground text-base md:text-lg leading-relaxed">
                SCP Ante Natal is a personalised equipment-based Pilates program designed to support women throughout pregnancy through safe, structured movement.
              </p>
              <p className="font-body text-muted-foreground text-base md:text-lg leading-relaxed">
                Delivered exclusively in a 1:1 or 1:2 format, each session is tailored to your stage of pregnancy, movement needs, and comfort level. The program focuses on maintaining strength, improving posture, supporting mobility, and developing breathing awareness as your body adapts to the demands of pregnancy.
              </p>
            </div>
            <p className="font-body text-muted-foreground text-base md:text-lg leading-relaxed mt-8">
              Our goal is to help you stay active, move confidently, and prepare both physically and mentally for childbirth and the post natal journey.
            </p>
          </div>
        </section>

        {/* Who Is It For */}
        <section className="section-padding bg-background">
          <div className="max-w-5xl mx-auto">
            <span className="font-heading text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
              Who It's For
            </span>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-foreground leading-[0.95] mb-10">
              Designed for <span className="text-gradient-yellow">Pregnancy</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Women looking to stay active during pregnancy",
                "Mothers seeking a personalised approach to movement and exercise",
                "Women wanting to maintain strength, mobility, and confidence throughout pregnancy",
                "Mothers preparing physically and mentally for childbirth",
                "Women looking for a supportive and closely supervised training environment"
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
              Personalised, Equipment-Based <span className="text-gradient-yellow">Training</span>
            </h2>
            <div className="space-y-6">
              {[
                {
                  step: "01",
                  title: "Medical Clearance",
                  text: "All participants require clearance from their gynaecologist before beginning the program."
                },
                {
                  step: "02",
                  title: "Individual Assessment",
                  text: "Sessions are tailored to your stage of pregnancy, movement profile, and individual needs."
                },
                {
                  step: "03",
                  title: "Equipment-Based Pilates",
                  text: "Training may incorporate the Reformer, Chair, Cadillac, and Arc to support posture, strength, mobility, balance, and breathing."
                },
                {
                  step: "04",
                  title: "Ongoing Progression",
                  text: "As your pregnancy progresses, sessions evolve to ensure training remains appropriate, comfortable, and effective."
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

        {/* Outcomes & Benefits */}
        <section className="section-padding bg-background">
          <div className="max-w-5xl mx-auto">
            <span className="font-heading text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
              Outcomes
            </span>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-foreground leading-[0.95] mb-10">
              Move Stronger <span className="text-gradient-yellow">Through Pregnancy</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Improved posture and body awareness",
                "Better strength and stability throughout pregnancy",
                "Increased mobility and movement confidence",
                "Greater breathing awareness and control",
                "A stronger foundation for childbirth and the post natal phase"
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
              Start Your Journey
            </span>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-foreground leading-[0.95] mb-6">
              Train Through Pregnancy with <span className="text-gradient-yellow">Confidence</span>
            </h2>
            <p className="font-body text-muted-foreground text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10">
              Our team will guide you through a personalised training journey designed around your stage of pregnancy, goals, and individual needs.
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

export default SCPAnteNatal;
