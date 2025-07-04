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
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--neon-blue)] to-[var(--neon-green)] flex items-center justify-center">
              <span className="text-[var(--dark-bg)] font-bold text-sm">AI</span>
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
