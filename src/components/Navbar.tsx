import { useState, useEffect, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import scpLogo from "@/assets/scp-logo.png";

const navLinks = [
  { label: "Classes", href: "/#workouts" },
  { label: "SCP Method", href: "/scp-method" },
  { label: "The Studio", href: "/the-studio" },
  { label: "Services", href: "/services" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="flex items-center justify-between px-6 md:px-12 lg:px-20 xl:px-28 2xl:px-36 py-4 max-w-[1920px] mx-auto w-full">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img
            src={scpLogo}
            alt="Sport Core Pilates"
            className="h-14 md:h-16 w-auto rounded-lg"
            width={64}
            height={64}
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10 xl:gap-14">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="nav-link-desktop"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:block">
          <a href="/start-here" className="btn-strong text-xs lg:text-sm">
            Start Here
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-foreground p-2 cursor-pointer"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 top-0 bg-background z-40 transition-all duration-500 ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-display text-4xl tracking-[0.1em] text-foreground hover:text-primary transition-colors duration-300"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/start-here"
            onClick={() => setMobileOpen(false)}
            className="btn-strong mt-4 text-base"
          >
            Start Here
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
