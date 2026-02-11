import { useState } from "react";
import workoutRow from "@/assets/workout-row.jpg";
import workoutRide from "@/assets/workout-ride.jpg";
import workoutReform from "@/assets/workout-reform.jpg";
const workouts = [{
  title: "SCP Pilates Only",
  subtitle: "Reform",
  image: workoutReform,
  description: "A fusion of dynamic movements and controlled Pilates flows with the use of props to deepen muscle engagement.",
  duration: "45 min"
}, {
  title: "SCP Body",
  subtitle: "Row + Reform",
  image: workoutRow,
  description: "Balanced full-body workout combining rowing intervals with Pilates-inspired reformer movements for total-body conditioning.",
  duration: "45 min"
}, {
  title: "SCP Ride",
  subtitle: "Ride + Reform",
  image: workoutRide,
  description: "High-energy cycling meets reformer Pilates. An explosive cardio and strength experience on our Bikeformer machines.",
  duration: "45 min"
}];
const WorkoutCarousel = () => {
  const [active, setActive] = useState(0);
  return <section id="workouts" className="section-padding bg-secondary">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <p className="font-heading text-primary text-sm uppercase tracking-[0.3em] mb-4 font-bold">
            Our Classes
          </p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-foreground">SCP
REFORM.<br />
            <span className="text-gradient-yellow">​</span>
          </h2>
        </div>

        {/* Workout Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {workouts.map((workout, i) => <div key={workout.title} className={`group relative overflow-hidden cursor-pointer transition-all duration-500 ${active === i ? "lg:scale-105" : "lg:scale-100 lg:opacity-80"}`} onMouseEnter={() => setActive(i)} onClick={() => setActive(i)}>
              {/* Image */}
              <div className="aspect-[3/4] relative overflow-hidden">
                <img src={workout.image} alt={workout.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                <div className="card-overlay absolute inset-0" />

                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <span className="font-heading text-primary uppercase tracking-[0.2em] mb-2 block text-base font-bold">
                    {workout.subtitle}
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl text-foreground mb-3">
                    {workout.title}
                  </h3>
                  <p className={`font-body text-muted-foreground text-sm leading-relaxed transition-all duration-500 ${active === i ? "max-h-24 opacity-100" : "max-h-0 opacity-0 lg:max-h-0 lg:opacity-0"}`}>
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
            </div>)}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a href="#locations" className="btn-strong">
            Book a Class
          </a>
        </div>
      </div>
    </section>;
};
export default WorkoutCarousel;