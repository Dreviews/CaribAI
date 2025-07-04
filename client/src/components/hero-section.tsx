import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center tech-pattern">
      <div className="container mx-auto px-4 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="gradient-text">AI-Powered</span><br />
              E-Commerce Solutions<br />
              <span className="text-[var(--coral)]">for Caribbean Businesses</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Transform your local business with cutting-edge AI automation, custom websites, and intelligent marketing systems designed specifically for the Caribbean market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={scrollToContact}
                className="bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-green)] text-[var(--dark-bg)] px-8 py-4 text-lg hover:shadow-lg transition-all animate-glow"
              >
                Start Your Digital Journey
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-[var(--neon-blue)] text-[var(--neon-blue)] px-8 py-4 text-lg hover:bg-[var(--neon-blue)] hover:text-[var(--dark-bg)] transition-all"
              >
                See Our Work
              </Button>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600" 
              alt="Caribbean business owners collaborating with technology" 
              className="rounded-2xl shadow-2xl animate-float" 
            />
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-[var(--neon-green)] to-[var(--neon-blue)] rounded-full animate-pulse-slow"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[var(--coral)] rounded-full animate-pulse-slow"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
