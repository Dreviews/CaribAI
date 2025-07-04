import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-[var(--dark-bg)]/90 backdrop-blur-md border-b border-[var(--dark-border)]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="relative w-8 h-8">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-[var(--neon-blue)] to-[var(--neon-green)] animate-pulse-slow"></div>
              <div className="relative w-full h-full rounded-lg bg-gradient-to-br from-[var(--neon-blue)] to-[var(--neon-green)] flex items-center justify-center">
                <svg className="w-6 h-6 text-[var(--dark-bg)]" fill="currentColor" viewBox="0 0 24 24">
                  {/* Robot head */}
                  <rect x="6" y="4" width="12" height="8" rx="2" />
                  {/* Robot eyes */}
                  <circle cx="9" cy="7" r="1" />
                  <circle cx="15" cy="7" r="1" />
                  {/* Robot mouth */}
                  <rect x="10" y="9" width="4" height="1" rx="0.5" />
                  {/* Robot body */}
                  <rect x="8" y="12" width="8" height="6" rx="1" />
                  {/* Robot arms */}
                  <rect x="5" y="13" width="2" height="4" rx="1" />
                  <rect x="17" y="13" width="2" height="4" rx="1" />
                  {/* Robot legs */}
                  <rect x="9" y="18" width="2" height="4" rx="1" />
                  <rect x="13" y="18" width="2" height="4" rx="1" />
                  {/* Robot antenna */}
                  <circle cx="12" cy="2" r="1" />
                  <line x1="12" y1="3" x2="12" y2="4" strokeWidth="1" stroke="currentColor" />
                </svg>
              </div>
            </div>
            <span className="text-xl font-bold gradient-text">CaribAI</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection("services")}
              className="text-white hover:text-[var(--neon-blue)] transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection("about")}
              className="text-white hover:text-[var(--neon-blue)] transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="text-white hover:text-[var(--neon-blue)] transition-colors"
            >
              Contact
            </button>
            <Button 
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-green)] text-[var(--dark-bg)] hover:shadow-lg transition-all"
            >
              Get Started
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-[var(--dark-border)] py-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection("services")}
                className="text-white hover:text-[var(--neon-blue)] transition-colors text-left"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection("about")}
                className="text-white hover:text-[var(--neon-blue)] transition-colors text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="text-white hover:text-[var(--neon-blue)] transition-colors text-left"
              >
                Contact
              </button>
              <Button 
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-green)] text-[var(--dark-bg)] w-full"
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
