import { Helmet } from "react-helmet-async";
import { Mail, Phone, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | Sport Core Pilates</title>
        <meta name="description" content="Get in touch with Sport Core Pilates. Located in Mumbai. Call, email, or visit us." />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Sport Core Pilates" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:url" content="https://sportcorepilates.com/contact" />
        <meta property="og:title" content="Contact Us | Sport Core Pilates" />
        <meta property="og:description" content="Get in touch with Sport Core Pilates. Located in Mumbai. Call, email, or visit us." />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://sportcorepilates.com/contact" />
      </Helmet>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="section-padding pt-32 md:pt-40 bg-background">
          <div className="max-w-5xl mx-auto">
            <span className="font-heading text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
              Get In Touch
            </span>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground leading-[0.9] mb-6">
              Contact <span className="text-gradient-yellow">Us</span>
            </h1>
            <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed">
              If you have a question about training, physiotherapy, or the studio, our team will be happy to help.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="section-padding bg-card">
          <div className="max-w-5xl mx-auto">
            <span className="font-heading text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
              Contact Information
            </span>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-foreground leading-[0.95] mb-10">
              Reach <span className="text-gradient-yellow">Out</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Email */}
              <div className="bg-background border border-border p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-sm uppercase tracking-[0.2em] text-foreground mb-2">
                  Email
                </h3>
                <a
                  href="mailto:sportcorepilates@gmail.com"
                  className="font-body text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  sportcorepilates@gmail.com
                </a>
              </div>

              {/* Phone */}
              <div className="bg-background border border-border p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-sm uppercase tracking-[0.2em] text-foreground mb-2">
                  Phone / WhatsApp
                </h3>
                <a
                  href="tel:+919930441143"
                  className="font-body text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  +91 9930441143
                </a>
              </div>

              {/* Location */}
              <div className="bg-background border border-border p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-sm uppercase tracking-[0.2em] text-foreground mb-2">
                  Location
                </h3>
                <p className="font-body text-muted-foreground text-sm">
                  Sport Core Pilates, 4th floor, Om Palace, Dr. Ambedkar Road, Pali Hill Bandra West, Mumbai, Maharashtra 400052
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-background text-center">
          <div className="max-w-3xl mx-auto">
            <span className="font-heading text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
              Ready To Begin?
            </span>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-foreground leading-[0.95] mb-6">
              Start Your Journey With{" "}
              <span className="text-gradient-yellow">Sport Core Pilates</span>
            </h2>
            <p className="font-body text-muted-foreground text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10">
              Take the first step toward better movement, strength, and performance.
            </p>
            <a className="btn-strong animate-pulse-glow" href="/start-here">
              Start Here
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
