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
                <svg className="w-5 h-5 text-[var(--dark-bg)]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 22C6.5 22 2 17.5 2 12S6.5 2 12 2s10 4.5 10 10-4.5 10-10 10z"/>
                  <circle cx="8" cy="8" r="1.5"/>
                  <circle cx="16" cy="8" r="1.5"/>
                  <path d="M12 15c2.2 0 4-1.8 4-4h-2c0 1.1-.9 2-2 2s-2-.9-2-2H8c0 2.2 1.8 4 4 4z"/>
                  <path d="M7 13h2v2H7zM15 13h2v2h-2z"/>
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
