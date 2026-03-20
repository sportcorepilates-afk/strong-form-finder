import { useState } from "react";
import { Instagram, Facebook, Youtube } from "lucide-react";
import scpLogo from "@/assets/scp-logo.png";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail("");
    alert("Thanks for subscribing! Welcome to the Sport Core Pilates community.");
  };

  return (
    <footer className="bg-card border-t border-border">
      {/* Main Footer */}
      <div className="px-6 md:px-12 lg:px-20 xl:px-28 2xl:px-36 py-12 lg:py-16">
        <div className="max-w-7xl xl:max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="flex items-center">
              <img
                src={scpLogo}
                alt="Sport Core Pilates"
                className="h-10 w-auto"
                width={40}
                height={40}
              />
            </a>
            <p className="font-body text-muted-foreground text-sm lg:text-base mt-4 leading-relaxed">
              Pilates First.
              <br />
              Performance Driven.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors p-1"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors p-1"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors p-1"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading text-xs uppercase tracking-[0.2em] text-foreground mb-4">
              Classes
            </h4>
            <ul className="space-y-3">
              {[
                { label: "SCP Foundation", href: "/scp-foundation" },
                { label: "SCP Control", href: "/scp-control" },
                { label: "SCP Performance", href: "/scp-performance" },
                { label: "SCP Reform", href: "/scp-reform" },
                { label: "Private Training", href: "/#workouts" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    className="font-body text-muted-foreground text-sm hover:text-primary transition-colors"
                    href={item.href}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-xs uppercase tracking-[0.2em] text-foreground mb-4">
              SCP
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/about"
                  className="font-body text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  About Us
                </a>
              </li>
              {[
                { label: "SCP Method", href: "/scp-method" },
                { label: "Services", href: "/services" },
                { label: "The Studio", href: "/the-studio" },
                { label: "Start Here", href: "/start-here" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="font-body text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-xs uppercase tracking-[0.2em] text-foreground mb-4">
              RESOURCES
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Terms & Conditions", href: "/terms-and-conditions" },
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Gift Cards", href: "#" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="font-body text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="px-6 md:px-12 lg:px-20 xl:px-28 2xl:px-36 py-6 border-t border-border">
        <div className="max-w-7xl xl:max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-muted-foreground text-xs">
            © 2025 Sport Core Pilates. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="/privacy-policy"
              className="font-body text-muted-foreground text-xs hover:text-primary transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="font-body text-muted-foreground text-xs hover:text-primary transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
