import { useState } from "react";
import workoutRow from "@/assets/workout-row.jpg";
import workoutRide from "@/assets/workout-ride.jpg";
import workoutReform from "@/assets/workout-reform.jpg";

const workouts = [
  {
    title: "SCP Foundation",
    subtitle: "Movement Foundations",
    image: workoutReform,
    description:
      "A structured introduction to performance-focused Pilates. Build movement quality, core strength, and control before progressing to advanced training formats.",
    duration: "50 min",
    href: "/scp-foundation",
  },
  {
    title: "SCP Control",
    subtitle: "Progressive Training",
    image: workoutRow,
    description:
      "Designed for experienced Pilates clients, focusing on refined control, strength progression, and elevated movement precision.",
    duration: "50 min",
    href: "/scp-control",
  },
  {
    title: "SCP Performance",
    subtitle: "Sport-Specific",
    image: workoutRide,
    description:
      "Pilates integrated with structured strength and conditioning principles, tailored to the specific demands of your sport.",
    duration: "50 min",
    href: "/scp-performance",
  },
  {
    title: "SCP Reform",
    subtitle: "Recovery & Rehabilitation",
    image: workoutReform,
    description:
      "A structured recovery pathway integrating Physiotherapy, Pilates and rehab Strength training to restore movement, reduce pain, and guide you safely back to performance.",
    duration: "50 min",
    href: "/scp-reform",
  },
  {
    title: "Private Training",
    subtitle: "Personalised Training",
    image: workoutRow,
    description:
      "One-on-one or semi-private (1:2) sessions tailored to your individual goals, movement needs, and performance aspirations.",
    duration: "60 min",
  },
];

const WorkoutCarousel = () => {
  const [active, setActive] = useState(0);

  return (
    <section id="workouts" className="section-padding bg-secondary">
      <div className="max-w-7xl xl:max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="mb-12 md:mb-16 lg:mb-20">
          <p className="font-heading text-primary text-sm uppercase tracking-[0.3em] mb-4 font-bold">
            HOW WE TRAIN
          </p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-foreground">
            CLASSES
          </h2>
        </div>

        {/* Workout Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 lg:gap-5">
          {workouts.map((workout, i) => {
            const Wrapper = workout.href ? "a" : "div";
            const wrapperProps = workout.href ? { href: workout.href } : {};
            return (
            <Wrapper
              key={workout.title}
              {...wrapperProps}
              className={`group relative overflow-hidden cursor-pointer transition-all duration-500 block ${
                active === i
                  ? "lg:ring-2 lg:ring-primary/40 lg:scale-[1.02]"
                  : "lg:opacity-75 hover:lg:opacity-100"
              }`}
              onMouseEnter={() => setActive(i)}
              onClick={() => setActive(i)}
            >
              {/* Image */}
              <div className="aspect-[3/4] relative overflow-hidden">
                <img
                  src={workout.image}
                  alt={workout.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  width={400}
                  height={533}
                />
                <div className="card-overlay absolute inset-0" />
                <div className="card-overlay absolute inset-0" />

                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <span className="font-heading text-primary uppercase tracking-[0.2em] mb-2 block text-base font-bold">
                    {workout.subtitle}
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl text-foreground mb-3">
                    {workout.title}
                  </h3>
                  <p
                    className={`font-body text-muted-foreground text-sm leading-relaxed transition-all duration-500 ${
                      active === i
                        ? "max-h-24 opacity-100"
                        : "max-h-0 opacity-0 lg:max-h-0 lg:opacity-0"
                    }`}
                  >
                    {workout.description}
                  </p>
                  <div className="flex items-center gap-3 mt-4 font-bold">
                    <span className="font-heading text-xs uppercase tracking-wider text-primary">
                      {workout.duration}
                    </span>
                    <span className="w-8 h-px bg-primary" />
                  </div>
                </div>
              </div>
            </Wrapper>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 lg:mt-16">
          <a className="btn-strong" href="/start-here">
            START HERE
          </a>
        </div>
      </div>
    </section>
  );
};

export default WorkoutCarousel;
