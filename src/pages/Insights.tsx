import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Clock, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const topics = [
  "Performance",
  "Pilates",
  "Recovery & Mobility",
  "Physiotherapy",
  "Strength & Conditioning",
  "Pregnancy",
  "Movement Science",
  "Longevity",
];

const articles = [
  {
    title: "Why Reformer Pilates Builds Athletes, Not Just Bodies",
    excerpt:
      "Explore how progressive resistance on the reformer translates directly into on-field performance, joint resilience, and sustainable strength.",
    readingTime: "6 min read",
    topic: "Performance",
  },
  {
    title: "The Science of Breath: Diaphragmatic Control for Peak Output",
    excerpt:
      "How respiratory mechanics influence core stability, endurance, and recovery—and why elite performers train the breath first.",
    readingTime: "5 min read",
    topic: "Movement Science",
  },
  {
    title: "Post-Natal Return to Movement: A Phased Framework",
    excerpt:
      "A physio-led progression from pelvic floor reconnection to full-load reformer work, designed for mothers reclaiming strength.",
    readingTime: "8 min read",
    topic: "Pregnancy",
  },
  {
    title: "Mobility Isn't Stretching: Rethinking Recovery",
    excerpt:
      "Active joint control, tissue tolerance, and neuromuscular re-patterning—what modern recovery actually looks like.",
    readingTime: "7 min read",
    topic: "Recovery & Mobility",
  },
  {
    title: "Training for Longevity: The 40-Year Athlete Mindset",
    excerpt:
      "Why the strongest bodies of the next decade will be built on Pilates principles—precision, control, and consistency.",
    readingTime: "6 min read",
    topic: "Longevity",
  },
  {
    title: "Bridging the Gap Between Physio and Performance",
    excerpt:
      "A look at how integrated physiotherapy and reformer training closes the loop from injury to elite readiness.",
    readingTime: "9 min read",
    topic: "Physiotherapy",
  },
];

const Insights = () => {
  const [email, setEmail] = useState("");

  const handleBrowse = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("latest-insights")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail("");
    alert("Thanks for subscribing. Insights will land in your inbox soon.");
  };

  return (
    <>
      <Helmet>
        <title>Movement Insights | Future of Movement | Sport Core Pilates</title>
        <meta
          name="description"
          content="Explore evidence-based articles and expert insights on Pilates, movement, physiotherapy, recovery, strength & conditioning, pregnancy, performance, and longevity from Future of Movement by Sport Core Pilates."
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Sport Core Pilates" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:url" content="https://sportcorepilates.com/insights" />
        <meta property="og:title" content="Movement Insights | Future of Movement | Sport Core Pilates" />
        <meta
          property="og:description"
          content="Evidence-based articles and expert perspectives on movement, performance, rehabilitation, pregnancy, recovery, and longevity."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://sportcorepilates.com/insights" />
      </Helmet>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="section-padding pt-32 md:pt-40 bg-background">
          <div className="max-w-5xl mx-auto">
            <span className="font-heading text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
              Curated by Future of Movement
            </span>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground leading-[0.9] mb-6">
              Movement <span className="text-gradient-yellow">Insights</span>
            </h1>
            <p className="font-body text-muted-foreground text-base md:text-lg max-w-3xl leading-relaxed mb-10">
              Evidence-based articles, expert perspectives, and practical insights on movement,
              performance, rehabilitation, pregnancy, recovery, and longevity—designed to help you
              move better, train smarter, and perform for life.
            </p>
            <a href="#latest-insights" onClick={handleBrowse} className="btn-strong">
              Browse Articles
            </a>
          </div>
        </section>

        {/* Featured Insight */}
        <section className="section-padding bg-card">
          <div className="max-w-6xl mx-auto">
            <span className="font-heading text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
              Featured Insight
            </span>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-foreground leading-[0.95] mb-12">
              This Month's <span className="text-gradient-yellow">Read</span>
            </h2>

            <article className="grid md:grid-cols-2 gap-0 border border-border bg-background">
              <div className="aspect-[4/3] md:aspect-auto bg-gradient-to-br from-secondary via-muted to-secondary flex items-center justify-center">
                <span className="font-heading text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  Featured Image
                </span>
              </div>
              <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                <span className="font-heading text-xs uppercase tracking-[0.25em] text-primary mb-4">
                  Performance
                </span>
                <h3 className="font-display text-2xl md:text-3xl lg:text-4xl text-foreground leading-tight mb-4">
                  The Pilates-First Athlete: A New Model for Modern Performance
                </h3>
                <p className="font-body text-muted-foreground text-sm md:text-base leading-relaxed mb-6">
                  Why the world's most durable athletes are shifting from gym-first to Pilates-first
                  programming—and what it means for the future of training, rehab, and longevity.
                </p>
                <div className="flex items-center gap-2 text-muted-foreground mb-8">
                  <Clock className="w-4 h-4" />
                  <span className="font-heading text-xs uppercase tracking-[0.2em]">
                    10 min read
                  </span>
                </div>
                <a href="#" className="btn-outline-strong self-start">
                  Read Article
                </a>
              </div>
            </article>
          </div>
        </section>

        {/* Browse by Topic */}
        <section className="section-padding bg-background">
          <div className="max-w-6xl mx-auto">
            <span className="font-heading text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
              Explore
            </span>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-foreground leading-[0.95] mb-12">
              Browse by <span className="text-gradient-yellow">Topic</span>
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {topics.map((topic) => (
                <a
                  key={topic}
                  href="#latest-insights"
                  className="group border border-border bg-card p-6 md:p-8 hover:border-primary transition-all duration-300"
                >
                  <h3 className="font-heading text-base md:text-lg text-foreground group-hover:text-primary transition-colors mb-3">
                    {topic}
                  </h3>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Latest Insights */}
        <section id="latest-insights" className="section-padding bg-card scroll-mt-24">
          <div className="max-w-6xl mx-auto">
            <span className="font-heading text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
              The Journal
            </span>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-foreground leading-[0.95] mb-12">
              Latest <span className="text-gradient-yellow">Insights</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <article
                  key={article.title}
                  className="group border border-border bg-background flex flex-col"
                >
                  <div className="aspect-[4/3] bg-gradient-to-br from-secondary via-muted to-secondary flex items-center justify-center">
                    <span className="font-heading text-xs uppercase tracking-[0.3em] text-muted-foreground">
                      Article Image
                    </span>
                  </div>
                  <div className="p-6 md:p-8 flex flex-col flex-1">
                    <span className="font-heading text-xs uppercase tracking-[0.25em] text-primary mb-3">
                      {article.topic}
                    </span>
                    <h3 className="font-heading text-lg md:text-xl text-foreground leading-tight mb-3 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="font-body text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-muted-foreground mb-5">
                      <Clock className="w-3.5 h-3.5" />
                      <span className="font-heading text-[0.7rem] uppercase tracking-[0.2em]">
                        {article.readingTime}
                      </span>
                    </div>
                    <a
                      href="#"
                      className="font-heading text-xs uppercase tracking-[0.2em] text-primary inline-flex items-center gap-2 self-start"
                    >
                      Read More <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="section-padding bg-background">
          <div className="max-w-3xl mx-auto text-center">
            <span className="font-heading text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
              Newsletter
            </span>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-foreground leading-[0.95] mb-6">
              Stay <span className="text-gradient-yellow">Connected</span>
            </h2>
            <p className="font-body text-muted-foreground text-base md:text-lg leading-relaxed mb-10">
              Receive practical movement insights, evidence-based articles, and expert updates
              from Future of Movement.
            </p>
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                aria-label="Email address"
                className="flex-1 bg-card border border-border px-6 py-4 font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
              <button type="submit" className="btn-strong">
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Insights;
