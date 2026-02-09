import heroBg from "@/assets/hero-bg.jpg";
const HeroSection = () => {
  return <section className="relative h-screen w-full overflow-hidden flex items-end">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Sport Core Pilates studio" className="w-full h-full object-cover" loading="eager" />
        <div className="hero-overlay absolute inset-0" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 pb-16 md:pb-24 lg:pb-32">
        <div className="max-w-3xl">
          <p className="font-heading text-primary text-sm md:text-base uppercase tracking-[0.3em] mb-4 animate-fade-in-up">
            Pilates Inspired. Cardio Infused.
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-foreground leading-[0.9] mb-6 animate-fade-in-up" style={{
          animationDelay: "0.2s"
        }}>
            MORE THAN
            <br />
            <span className="text-gradient-yellow">JUST PILATES</span>
          </h1>
          <p className="font-body text-muted-foreground text-base md:text-lg max-w-lg mb-8 animate-fade-in-up" style={{
          animationDelay: "0.4s"
        }}>
            A unique workout experience that fuses Pilates, strength and conditioning into one full-body burn. Designed for your sport or activity. Low impact. High intensity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{
          animationDelay: "0.6s"
        }}>
            <a href="#locations" className="btn-strong animate-pulse-glow">
              ​Start Here   
            </a>
            <a href="#about" className="btn-outline-strong">
              New to SCP?
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-fade-in" style={{
      animationDelay: "1s"
    }}>
        <span className="font-heading text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Scroll</span>
        <div className="w-px h-8 bg-muted-foreground/40 relative overflow-hidden">
          <div className="w-full h-1/2 bg-primary absolute top-0 animate-bounce" />
        </div>
      </div>
    </section>;
};
export default HeroSection;