import { useState } from "react";
import { Search, MapPin } from "lucide-react";

const locations = [
  { state: "VIC", studios: ["Elsternwick", "South Melbourne", "Richmond", "Fitzroy", "Hawthorn", "Brighton", "Dromana", "Hampton"] },
  { state: "NSW", studios: ["Bondi", "Surry Hills", "Mosman", "Manly", "Cronulla", "Newcastle", "Castle Hill", "Penrith"] },
  { state: "QLD", studios: ["Fortitude Valley", "South Brisbane", "Gold Coast", "Sunshine Coast"] },
  { state: "SA", studios: ["Adelaide CBD", "Findon", "Magill"] },
];

const StudioFinder = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredLocations = locations.map((loc) => ({
    ...loc,
    studios: loc.studios.filter((s) =>
      s.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter((loc) => loc.studios.length > 0);

  return (
    <section id="locations" className="section-padding bg-secondary">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="font-heading text-primary text-sm uppercase tracking-[0.3em] mb-4">
            Studios
          </p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-foreground mb-6">
            FIND YOUR
            <br />
            <span className="text-gradient-yellow">STRONG</span>
          </h2>
        </div>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search by suburb or city..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-card border border-border pl-12 pr-4 py-4 font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-2 px-4 py-2 font-heading text-xs uppercase tracking-wider text-primary hover:text-foreground transition-colors">
              <MapPin className="w-4 h-4" />
              <span className="hidden sm:inline">Use My Location</span>
            </button>
          </div>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredLocations.map((loc) => (
            <div key={loc.state}>
              <h3 className="font-display text-2xl text-primary mb-4">{loc.state}</h3>
              <ul className="space-y-2">
                {loc.studios.map((studio) => (
                  <li key={studio}>
                    <a
                      href="#"
                      className="font-body text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-4 h-px bg-primary transition-all duration-300" />
                      {studio}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* More Coming */}
        <div className="text-center mt-16 pt-12 border-t border-border">
          <p className="font-heading text-muted-foreground text-sm uppercase tracking-wider">
            More locations coming very soon
          </p>
        </div>
      </div>
    </section>
  );
};

export default StudioFinder;
