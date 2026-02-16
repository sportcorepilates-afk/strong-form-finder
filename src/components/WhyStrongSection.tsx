import { Dumbbell, Heart, Zap, Timer, Users, TrendingUp } from "lucide-react";

const features = [
{
  icon: Zap,
  title: "High Intensity",
  description: "45 minutes of Row. Ride. Reform. Pilates principles, strength training, and intentional cardio."
},
{
  icon: Heart,
  title: "Low Impact",
  description: "Without compromising your body or your exercise high. Do more, sustain longer, recover faster."
},
{
  icon: Dumbbell,
  title: "Full Body Burn",
  description: "Expert-designed 12-week movement cycles that progress week by week with trackable programming."
},
{
  icon: Timer,
  title: "45 Min Sessions",
  description: "Efficient, expertly programmed classes that deliver maximum results in minimum time."
},
{
  icon: Users,
  title: "Community",
  description: "Join a tribe of SCP Humans who push limits and support each other, every single session."
},
{
  icon: TrendingUp,
  title: "Progression",
  description: "Track your performance, beat your personal bests, and see real, measurable improvement."
}];


const WhyStrongSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="font-heading text-primary text-sm uppercase tracking-[0.3em] mb-4 font-bold">
            Why Sport Core Pilates?
          </p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-foreground mb-6">SCP IS WHERE PILATES MEETS
            <br />
            <span className="text-gradient-yellow">STRUCTURED PERFORMANCE</span>
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">
            It's a unique workout experience that fuses Pilates, cardio, and strength into one full-body burn. More variety, more sweat, and more results — all in one session.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, i) =>
          <div
            key={feature.title}
            className="group p-8 bg-card border border-border hover:border-primary/30 transition-all duration-500 hover:-translate-y-1"
            style={{ animationDelay: `${i * 0.1}s` }}>

              <feature.icon className="w-8 h-8 text-primary mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-heading text-xl uppercase tracking-wider text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default WhyStrongSection;