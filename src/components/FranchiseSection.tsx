import { ArrowRight } from "lucide-react";

const FranchiseSection = () => {
  return (
    <section
      id="franchise"
      className="section-padding bg-background relative overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl xl:max-w-[1400px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <p className="font-heading text-primary text-sm uppercase tracking-[0.3em] mb-4">
              START YOUR TRAINING
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 lg:mb-8 leading-[0.95]">
              TRAIN WITH STRUCTURE.
              <br />
              <span className="text-gradient-yellow">
                Perform with confidence.
              </span>
            </h2>
            <p className="font-body text-muted-foreground text-lg lg:text-xl mb-6 lg:mb-8 leading-relaxed">
              Begin with a structured assessment and discover the training
              format designed for your body and your goals.
            </p>
            <a
              className="btn-strong inline-flex items-center gap-3 group"
              href="/start-here"
            >
              Start Here
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FranchiseSection;
