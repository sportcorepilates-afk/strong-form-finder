const AsSeenIn = () => {
  const brands = ["GQ", "VOGUE", "MEN'S HEALTH", "WOMEN'S HEALTH", "ELLE", "COSMOPOLITAN"];

  return (
    <section className="px-6 md:px-12 lg:px-20 py-12 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto">
        <p className="font-heading text-center text-[10px] uppercase tracking-[0.4em] text-muted-foreground mb-8">
          As Seen In
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {brands.map((brand) => (
            <span
              key={brand}
              className="font-display text-xl md:text-2xl tracking-[0.1em] text-muted-foreground/40 hover:text-muted-foreground transition-colors duration-300"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AsSeenIn;
