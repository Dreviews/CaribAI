import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Bot, Check } from "lucide-react";

export default function ServicesSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 bg-[var(--dark-card)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Our Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive digital solutions tailored for Caribbean businesses, from simple websites to advanced AI automation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Service 1: Website + Booking System */}
          <Card className="bg-[var(--dark-bg)] border-[var(--dark-border)] hover:border-[var(--neon-blue)] hover:shadow-xl transition-all group">
            <CardHeader>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[var(--neon-blue)] to-[var(--neon-green)] rounded-xl flex items-center justify-center mr-4">
                  <Globe className="text-[var(--dark-bg)] w-6 h-6" />
                </div>
                <div>
                  <CardTitle className="text-2xl text-[var(--neon-blue)]">Website + Booking System</CardTitle>
                  <p className="text-gray-400">Professional Digital Presence</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <img 
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400" 
                alt="Modern website booking interface" 
                className="rounded-xl mb-6 w-full h-48 object-cover group-hover:scale-105 transition-transform" 
              />
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <Check className="text-[var(--neon-green)] mr-3 w-5 h-5" />
                  <span>Custom responsive website design</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-[var(--neon-green)] mr-3 w-5 h-5" />
                  <span>Integrated booking & scheduling system</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-[var(--neon-green)] mr-3 w-5 h-5" />
                  <span>Mobile-optimized for Caribbean users</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-[var(--neon-green)] mr-3 w-5 h-5" />
                  <span>Payment processing integration</span>
                </div>
              </div>
              
              <div className="bg-[var(--dark-border)] rounded-xl p-4 mb-6">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-2xl font-bold text-[var(--neon-blue)]">$300-$500</span>
                    <span className="text-gray-400 ml-2">setup</span>
                  </div>
                  <div className="text-right">
                    <span className="text-xl font-semibold text-[var(--neon-green)]">$50/mo</span>
                    <div className="text-sm text-gray-400">maintenance</div>
                  </div>
                </div>
              </div>
              
              <Button 
                onClick={scrollToContact}
                className="w-full bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-green)] text-[var(--dark-bg)] hover:shadow-lg transition-all"
              >
                Get Your Website
              </Button>
            </CardContent>
          </Card>

          {/* Service 2: AI Sales Agent + Customer Support */}
          <Card className="bg-[var(--dark-bg)] border-[var(--dark-border)] hover:border-[var(--neon-green)] hover:shadow-xl transition-all group">
            <CardHeader>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[var(--neon-green)] to-[var(--coral)] rounded-xl flex items-center justify-center mr-4">
                  <Bot className="text-[var(--dark-bg)] w-6 h-6" />
                </div>
                <div>
                  <CardTitle className="text-2xl text-[var(--neon-green)]">AI Sales Agent + Support</CardTitle>
                  <p className="text-gray-400">Intelligent Customer Experience</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400" 
                alt="AI chatbot customer service interface" 
                className="rounded-xl mb-6 w-full h-48 object-cover group-hover:scale-105 transition-transform" 
              />
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <Check className="text-[var(--neon-green)] mr-3 w-5 h-5" />
                  <span>24/7 AI-powered customer support</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-[var(--neon-green)] mr-3 w-5 h-5" />
                  <span>Intelligent sales conversation flows</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-[var(--neon-green)] mr-3 w-5 h-5" />
                  <span>Multi-language support (EN/ES/FR)</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-[var(--neon-green)] mr-3 w-5 h-5" />
                  <span>Lead qualification & nurturing</span>
                </div>
              </div>
              
              <div className="bg-[var(--dark-border)] rounded-xl p-4 mb-6">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-2xl font-bold text-[var(--neon-green)]">$500</span>
                    <span className="text-gray-400 ml-2">setup</span>
                  </div>
                  <div className="text-right">
                    <span className="text-xl font-semibold text-[var(--coral)]">$75-$150/mo</span>
                    <div className="text-sm text-gray-400">based on usage</div>
                  </div>
                </div>
              </div>
              
              <Button 
                onClick={scrollToContact}
                className="w-full bg-gradient-to-r from-[var(--neon-green)] to-[var(--coral)] text-[var(--dark-bg)] hover:shadow-lg transition-all"
              >
                Deploy AI Agent
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Success Stories */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              <span className="gradient-text">Transforming Caribbean Businesses</span>
            </h3>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              See how our AI-powered solutions are helping local businesses thrive in the digital economy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1594736797933-d0d5ad6f5db7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400" 
                alt="Caribbean restaurant owner managing online orders" 
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-[var(--neon-blue)]" 
              />
              <h4 className="text-lg font-semibold mb-2">Restaurant Owner</h4>
              <p className="text-sm text-gray-400">200% increase in online orders</p>
            </div>
            
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1580894894513-541e068a3e2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400" 
                alt="Caribbean boutique owner with digital presence" 
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-[var(--neon-green)]" 
              />
              <h4 className="text-lg font-semibold mb-2">Boutique Owner</h4>
              <p className="text-sm text-gray-400">AI chatbot handles 80% of inquiries</p>
            </div>
            
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400" 
                alt="Caribbean tour guide with booking system" 
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-[var(--coral)]" 
              />
              <h4 className="text-lg font-semibold mb-2">Tour Guide</h4>
              <p className="text-sm text-gray-400">Automated booking saves 10 hours/week</p>
            </div>
            
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400" 
                alt="Caribbean fitness instructor with digital platform" 
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-[var(--neon-blue)]" 
              />
              <h4 className="text-lg font-semibold mb-2">Fitness Instructor</h4>
              <p className="text-sm text-gray-400">Seamless class scheduling & payments</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
