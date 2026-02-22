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
      {/* Main Footer */}
      <div className="px-6 md:px-12 lg:px-20 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center">
              <img src={scpLogo} alt="Sport Core Pilates" className="h-10 w-auto" />
            </a>
            <p className="font-body text-muted-foreground text-sm mt-4 leading-relaxed">
            Pilates First.
              <br />
              Performance Driven.
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
              Classes
            </h4>
            <ul className="space-y-2">
              {["SCP Foundation", "SCP Control", "SCP Performance", "SCP Restore", "Private Training"].map((item) =>
              <li key={item}>
                  <a className="font-body text-muted-foreground text-sm hover:text-primary transition-colors" href="/#workouts">
                    {item}
                  </a>
                </li>
              )}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-xs uppercase tracking-[0.2em] text-foreground mb-4">SCP

            </h4>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="font-body text-muted-foreground text-sm hover:text-primary transition-colors">About Us

                </a>
              </li>
              {[
              { label: "SCP Method", href: "/scp-method" },
              { label: "Services", href: "/services" },
              { label: "The Studio", href: "#" },
                { label: "Start Here", href: "/start-here" },
                { label: "Contact", href: "#" },
              ].map((item) =>
              <li key={item.label}>
                  <a href={item.href} className="font-body text-muted-foreground text-sm hover:text-primary transition-colors">
                    {item.label}
                  </a>
                </li>
              )}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-xs uppercase tracking-[0.2em] text-foreground mb-4">RESOURCES

            </h4>
            <ul className="space-y-2">
              {["Terms & Conditions", "Privacy Policy", "Gift Cards"].map((item) =>
              <li key={item}>
                  <a href="#" className="font-body text-muted-foreground text-sm hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              )}
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
    </footer>);

};

export default Footer;