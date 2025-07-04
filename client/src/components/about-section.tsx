import { Brain, MapPin, Handshake, Smartphone } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-[var(--dark-card)]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">About CaribAI</span>
            </h2>
            <p className="text-xl text-gray-300 mb-6">
              We're a Caribbean-focused digital transformation agency specializing in AI-powered e-commerce solutions. Our mission is to bridge the digital divide by making advanced technology accessible to local businesses.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <Brain className="text-[var(--neon-blue)] mr-4 w-6 h-6" />
                <span>5+ years in AI and automation</span>
              </div>
              <div className="flex items-center">
                <MapPin className="text-[var(--neon-green)] mr-4 w-6 h-6" />
                <span>Caribbean market expertise</span>
              </div>
              <div className="flex items-center">
                <Handshake className="text-[var(--coral)] mr-4 w-6 h-6" />
                <span>100+ local businesses served</span>
              </div>
              <div className="flex items-center">
                <Smartphone className="text-[var(--neon-blue)] mr-4 w-6 h-6" />
                <span>Mobile-first design approach</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600" 
              alt="Digital business automation dashboard" 
              className="rounded-2xl shadow-2xl" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--dark-bg)]/80 via-transparent to-transparent rounded-2xl"></div>
            <div className="absolute bottom-8 left-8 right-8">
              <div className="bg-[var(--dark-bg)]/90 backdrop-blur-sm rounded-xl p-4">
                <div className="font-mono text-sm space-y-1">
                  <div className="text-[var(--neon-green)]">&gt; Initializing AI systems...</div>
                  <div className="text-[var(--neon-green)]">&gt; Connecting to Caribbean markets...</div>
                  <div className="text-[var(--neon-blue)]">&gt; Ready to transform your business!</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
