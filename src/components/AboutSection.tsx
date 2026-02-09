import aboutImg from "@/assets/about-strong.jpg";

const AboutSection = () => {
  return (
    <section id="first-timers" className="section-padding bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={aboutImg}
                alt="Strong Pilates class in action"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Accent bar */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-primary opacity-20" />
          </div>

          {/* Content */}
          <div>
            <p className="font-heading text-primary text-sm uppercase tracking-[0.3em] mb-4">
              First Timers
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-[0.95]">
              WELCOME TO
              <br />
              <span className="text-gradient-yellow">STRONG PILATES</span>
            </h2>
            <div className="space-y-6 font-body text-muted-foreground">
              <p className="text-lg">
                STRONG is a fitness movement combining rowing or riding with Pilates-inspired movements using our innovative Rowformer and Bikeformer.
              </p>
              <p>
                A STRONG class lasts between 45–50 minutes, incorporating a mixture of cardio HIIT training and Pilates-inspired strength and resistance training.
              </p>
              <div className="grid grid-cols-2 gap-6 py-6 border-t border-b border-border">
                <div>
                  <p className="font-display text-3xl text-primary">50+</p>
                  <p className="font-heading text-xs uppercase tracking-wider text-muted-foreground mt-1">Studios</p>
                </div>
                <div>
                  <p className="font-display text-3xl text-primary">45</p>
                  <p className="font-heading text-xs uppercase tracking-wider text-muted-foreground mt-1">Min Sessions</p>
                </div>
                <div>
                  <p className="font-display text-3xl text-primary">1000+</p>
                  <p className="font-heading text-xs uppercase tracking-wider text-muted-foreground mt-1">Strong Humans</p>
                </div>
                <div>
                  <p className="font-display text-3xl text-primary">12</p>
                  <p className="font-heading text-xs uppercase tracking-wider text-muted-foreground mt-1">Week Cycles</p>
                </div>
              </div>
              <p className="text-sm italic text-muted-foreground">
                "The trainers are able to get the best out of you, whether that be encouraging you to achieve your personal best or modifying moves when needed."
              </p>
            </div>
            <div className="mt-8">
              <a href="#locations" className="btn-strong">
                Book Your First Class
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
