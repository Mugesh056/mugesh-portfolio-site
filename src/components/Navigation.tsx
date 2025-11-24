import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "./NavLink"; // your custom NavLink
import { useLocation } from "react-router-dom";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "About", href: "about" },
    { label: "Skills", href: "skills" },
    { label: "Experience", href: "experience" },
    { label: "Education", href: "education" },
    { label: "Certifications", href: "certifications" },
    { label: "Contact", href: "contact" },
  ];

  // Scroll to section on click
  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass shadow-lg py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <a
            href="#hero"
            className="text-2xl font-bold gradient-text"
            onClick={() => handleScrollToSection("hero")}
          >
            MG
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleScrollToSection(item.href)}
                className="text-foreground/80 hover:text-primary transition-colors duration-300 font-medium"
              >
                {item.label}
              </button>
            ))}

            <Button
              asChild
              variant="default"
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 animate-glow"
            >
              <a href="/Mugesh_Gunasekaran_Resume.pdf" download>
                <Download className="w-4 h-4 mr-2" />
                Resume
              </a>
            </Button>
          </div>

          {/* Mobile Menu */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 glass rounded-lg p-4 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleScrollToSection(item.href)}
                className="block text-foreground/80 hover:text-primary transition-colors duration-300 py-2"
              >
                {item.label}
              </button>
            ))}
            <Button
              asChild
              variant="default"
              className="w-full bg-gradient-to-r from-primary to-secondary"
            >
              <a href="/Mugesh_Gunasekaran_Resume.pdf" download>
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
