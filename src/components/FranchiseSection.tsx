import { ArrowRight } from "lucide-react";

const FranchiseSection = () => {
  return (
    <section id="franchise" className="section-padding bg-background relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <p className="font-heading text-primary text-sm uppercase tracking-[0.3em] mb-4">START YOUR TRAINING

            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-[0.95]">TRAIN WITH STRUCTURE
SCP STUDIO
              <br />
              <span className="text-gradient-yellow">Perform with confidence. </span>
            </h2>
            <p className="font-body text-muted-foreground text-lg mb-6">Begin with a structured assessment and discover the training format designed for your body and your goals.   

            </p>
            <ul className="space-y-4 mb-8">
              {["Proven business model", "Comprehensive training & support", "Premium brand with strong demand", "Innovative fitness technology"].map((item) =>
              <li key={item} className="flex items-center gap-3 font-body text-foreground">
                  <span className="w-2 h-2 bg-primary flex-shrink-0" />
                  {item}
                </li>
              )}
            </ul>
            <a href="#" className="btn-strong inline-flex items-center gap-3">
              Enquire Now
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {[
            { number: "50+", label: "Studios Nationwide" },
            { number: "200%", label: "Growth Year on Year" },
            { number: "#1", label: "Pilates Franchise" },
            { number: "10K+", label: "Weekly Members" }].
            map((stat) =>
            <div
              key={stat.label}
              className="bg-card border border-border p-8 text-center hover:border-primary/30 transition-colors duration-300">

                <p className="font-display text-3xl md:text-4xl text-primary mb-2">{stat.number}</p>
                <p className="font-heading text-xs uppercase tracking-wider text-muted-foreground">{stat.label}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

};

export default FranchiseSection;