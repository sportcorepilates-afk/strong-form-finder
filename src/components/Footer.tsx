import { useState } from "react";
import { Instagram, Facebook, Youtube, ArrowRight } from "lucide-react";
import scpLogo from "@/assets/scp-logo.png";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would submit to a Google Form or backend
    setEmail("");
    alert("Thanks for subscribing! Welcome to the Sport Core Pilates community.");
  };

  return (
    <footer className="bg-card border-t border-border">
      {/* Newsletter Band */}
      <div className="px-6 md:px-12 lg:px-20 py-12 md:py-16 border-b border-border">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="font-display text-2xl md:text-3xl text-foreground mb-2">
              JOIN THE <span className="text-gradient-yellow">SCP</span> COMMUNITY
            </h3>
            <p className="font-body text-muted-foreground text-sm">
              Get exclusive offers, workout tips, and studio updates.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="flex w-full lg:w-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 lg:w-72 bg-background border border-border px-4 py-3 font-body text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
            <button type="submit" className="btn-strong px-6">
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer */}
      <div className="px-6 md:px-12 lg:px-20 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center">
              <img src={scpLogo} alt="Sport Core Pilates" className="h-10 w-auto" />
            </a>
            <p className="font-body text-muted-foreground text-sm mt-4 leading-relaxed">
              Pilates Inspired.
              <br />
              Cardio Infused.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="YouTube">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading text-xs uppercase tracking-[0.2em] text-foreground mb-4">
              Workouts
            </h4>
            <ul className="space-y-2">
              {["SCP Pilates Only", "SCP Body", "SCP Ride", "Beginner Class"].map((item) => (
                <li key={item}>
                  <a href="#workouts" className="font-body text-muted-foreground text-sm hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-xs uppercase tracking-[0.2em] text-foreground mb-4">
              Company
            </h4>
            <ul className="space-y-2">
              {["About SCP", "Locations", "Careers", "Franchising", "Contact"].map((item) => (
                <li key={item}>
                  <a href="#" className="font-body text-muted-foreground text-sm hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-xs uppercase tracking-[0.2em] text-foreground mb-4">
              Support
            </h4>
            <ul className="space-y-2">
              {["First Timers", "FAQs", "Pricing", "Gift Cards", "Terms & Conditions"].map((item) => (
                <li key={item}>
                  <a href="#" className="font-body text-muted-foreground text-sm hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="px-6 md:px-12 lg:px-20 py-6 border-t border-border">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-muted-foreground text-xs">
            © 2025 Sport Core Pilates. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="font-body text-muted-foreground text-xs hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="font-body text-muted-foreground text-xs hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
