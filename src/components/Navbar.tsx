import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import scpLogo from "@/assets/scp-logo.png";
const navLinks = [{
  label: "Classes",
  href: "#workouts"
}, {
  label: "SCP Method",
  href: "#about"
}, {
  label: "The Studio",
  href: "#locations"
}, {
  label: "First Timers",
  href: "#first-timers"
}, {
  label: "Services",
  href: "#franchise"
}];
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
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"}`}>
      <nav className="flex items-center justify-between px-6 md:px-12 lg:px-20 py-4">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img src={scpLogo} alt="Sport Core Pilates" className="h-14 md:h-16 w-auto rounded-lg" />
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map(link => <a key={link.label} href={link.href} className="font-heading text-sm uppercase tracking-[0.15em] text-muted-foreground hover:text-primary transition-colors duration-300">
              {link.label}
            </a>)}
        </div>

        {/* CTA */}
        <div className="hidden lg:block">
          <a href="#locations" className="btn-strong text-xs">
            Find & Book
          </a>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-foreground p-2" aria-label="Toggle menu">
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 top-0 bg-background z-40 transition-all duration-500 ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, i) => <a key={link.label} href={link.href} onClick={() => setMobileOpen(false)} className="font-display text-4xl tracking-[0.1em] text-foreground hover:text-primary transition-colors duration-300" style={{
          animationDelay: `${i * 0.1}s`
        }}>
              {link.label}
            </a>)}
          <a href="#locations" onClick={() => setMobileOpen(false)} className="btn-strong mt-4 text-base">
            Find & Book
          </a>
        </div>
      </div>
    </header>;
};
export default Navbar;