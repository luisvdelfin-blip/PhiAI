import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ArrowRight, Sparkles, Brain, Eye, Zap } from "lucide-react";
import { useEffect, useState } from "react";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 0.5) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#E5E5E5] overflow-x-hidden relative">
      {/* Subtle noise texture overlay */}
      <div 
        className="fixed inset-0 opacity-[0.015] pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
        }}
      />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0A0A0A]/80 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="text-4xl font-['Playfair_Display'] font-light text-[#C5A059]">φ</div>
            <span className="text-xl font-['Playfair_Display'] font-light tracking-wider">Phi AI</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-12">
            <button 
              onClick={() => scrollToSection('manifesto')}
              className="text-sm tracking-wide hover:text-[#C5A059] transition-colors duration-300"
            >
              Manifesto
            </button>
            <button 
              onClick={() => scrollToSection('technology')}
              className="text-sm tracking-wide hover:text-[#C5A059] transition-colors duration-300"
            >
              Technology
            </button>
            <button 
              onClick={() => scrollToSection('access')}
              className="text-sm tracking-wide hover:text-[#C5A059] transition-colors duration-300"
            >
              Access
            </button>
          </nav>

          <Button 
            variant="outline" 
            className="border-[#C5A059]/30 text-[#C5A059] hover:bg-[#C5A059]/10 bg-transparent rounded-none px-6 py-2 text-sm tracking-wide font-light"
          >
            Member Login
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-24">
        <div className="relative z-10 text-center max-w-5xl mx-auto">
          {/* Golden Ratio Spiral */}
          <div className="mb-16 flex justify-center">
            <div className="relative w-64 h-64">
              <svg 
                viewBox="0 0 200 200" 
                className="w-full h-full"
                style={{ transform: `rotate(${rotation}deg)`, transition: 'transform 0.05s linear' }}
              >
                <defs>
                  <linearGradient id="spiralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#C5A059" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#C5A059" stopOpacity="0.8" />
                  </linearGradient>
                </defs>
                <path
                  d="M 100 100 L 100 50 A 50 50 0 0 1 150 100 L 150 150 A 100 100 0 0 1 50 150 L 50 50 A 150 150 0 0 1 200 100"
                  fill="none"
                  stroke="url(#spiralGradient)"
                  strokeWidth="0.5"
                  opacity="0.6"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-6xl font-['Playfair_Display'] font-light text-[#C5A059] opacity-40">φ</div>
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-['Playfair_Display'] font-light mb-8 leading-tight tracking-wide">
            Intelligence in<br />Perfect Proportion.
          </h1>
          
          <p className="text-base md:text-lg text-[#E5E5E5]/60 mb-12 max-w-3xl mx-auto leading-relaxed tracking-wide font-light">
            The world's most powerful models unified in a private sanctuary.<br />
            Claude. GPT-4. Gemini. One interface. Absolute discretion.
          </p>
          
          <Button 
            className="border border-[#C5A059] text-[#C5A059] hover:bg-[#C5A059] hover:text-black bg-transparent rounded-none px-12 py-6 text-sm tracking-widest font-light transition-all duration-500"
            onClick={() => scrollToSection('access')}
          >
            REQUEST ACCESS
          </Button>
        </div>
      </section>

      {/* The Power Section - Bento Grid */}
      <section id="technology" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-['Playfair_Display'] font-light mb-6 tracking-wide">
              The Pantheon
            </h2>
            <p className="text-sm text-[#E5E5E5]/50 tracking-widest uppercase">
              Four Minds. One Consciousness.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-white/5 p-px">
            {/* Claude Card */}
            <Card className="bg-[#0A0A0A]/95 border-white/5 backdrop-blur-sm hover:bg-[#0A0A0A]/80 transition-all duration-700 rounded-none group">
              <CardContent className="p-12">
                <div className="mb-8">
                  <div className="w-12 h-12 border border-[#C5A059]/30 flex items-center justify-center mb-6">
                    <Brain className="w-6 h-6 text-[#C5A059]" strokeWidth={1} />
                  </div>
                  <h3 className="text-2xl font-['Playfair_Display'] font-light mb-3 tracking-wide">
                    Claude 3.7
                  </h3>
                  <p className="text-xs text-[#C5A059] tracking-widest uppercase mb-6">The Architect</p>
                </div>
                
                <p className="text-sm text-[#E5E5E5]/60 leading-relaxed font-light">
                  Reasoning that transcends logic. The mind that builds worlds from words, 
                  architecting solutions with surgical precision and philosophical depth.
                </p>
              </CardContent>
            </Card>

            {/* GPT-4o Card */}
            <Card className="bg-[#0A0A0A]/95 border-white/5 backdrop-blur-sm hover:bg-[#0A0A0A]/80 transition-all duration-700 rounded-none group">
              <CardContent className="p-12">
                <div className="mb-8">
                  <div className="w-12 h-12 border border-[#C5A059]/30 flex items-center justify-center mb-6">
                    <Sparkles className="w-6 h-6 text-[#C5A059]" strokeWidth={1} />
                  </div>
                  <h3 className="text-2xl font-['Playfair_Display'] font-light mb-3 tracking-wide">
                    GPT-4o
                  </h3>
                  <p className="text-xs text-[#C5A059] tracking-widest uppercase mb-6">The Omniscient</p>
                </div>
                
                <p className="text-sm text-[#E5E5E5]/60 leading-relaxed font-light">
                  Knowledge without boundaries. The oracle that sees patterns invisible to others, 
                  weaving insights across every domain of human understanding.
                </p>
              </CardContent>
            </Card>

            {/* Gemini Card */}
            <Card className="bg-[#0A0A0A]/95 border-white/5 backdrop-blur-sm hover:bg-[#0A0A0A]/80 transition-all duration-700 rounded-none group">
              <CardContent className="p-12">
                <div className="mb-8">
                  <div className="w-12 h-12 border border-[#C5A059]/30 flex items-center justify-center mb-6">
                    <Zap className="w-6 h-6 text-[#C5A059]" strokeWidth={1} />
                  </div>
                  <h3 className="text-2xl font-['Playfair_Display'] font-light mb-3 tracking-wide">
                    Gemini 1.5 Pro
                  </h3>
                  <p className="text-xs text-[#C5A059] tracking-widest uppercase mb-6">The Synthesizer</p>
                </div>
                
                <p className="text-sm text-[#E5E5E5]/60 leading-relaxed font-light">
                  Context that spans infinity. The mind that holds entire libraries in thought, 
                  connecting distant ideas with effortless grace.
                </p>
              </CardContent>
            </Card>

            {/* Perplexity Card */}
            <Card className="bg-[#0A0A0A]/95 border-white/5 backdrop-blur-sm hover:bg-[#0A0A0A]/80 transition-all duration-700 rounded-none group">
              <CardContent className="p-12">
                <div className="mb-8">
                  <div className="w-12 h-12 border border-[#C5A059]/30 flex items-center justify-center mb-6">
                    <Eye className="w-6 h-6 text-[#C5A059]" strokeWidth={1} />
                  </div>
                  <h3 className="text-2xl font-['Playfair_Display'] font-light mb-3 tracking-wide">
                    Perplexity
                  </h3>
                  <p className="text-xs text-[#C5A059] tracking-widest uppercase mb-6">The Real-Time Eye</p>
                </div>
                
                <p className="text-sm text-[#E5E5E5]/60 leading-relaxed font-light">
                  Truth in the present moment. The sentinel that watches the world unfold, 
                  delivering verified intelligence as reality shapes itself.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Manifesto Section */}
      <section id="manifesto" className="py-32 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="border border-white/5 p-16 backdrop-blur-sm bg-[#0A0A0A]/50">
            <div className="text-center mb-12">
              <div className="text-5xl font-['Playfair_Display'] font-light text-[#C5A059] mb-4">φ</div>
              <h2 className="text-3xl md:text-5xl font-['Playfair_Display'] font-light tracking-wide">
                The Manifesto
              </h2>
            </div>
            
            <div className="space-y-8 text-center">
              <p className="text-base text-[#E5E5E5]/70 leading-relaxed font-light tracking-wide">
                In a world drowning in noise, we offer silence.<br />
                In an age of excess, we practice restraint.
              </p>
              
              <p className="text-base text-[#E5E5E5]/70 leading-relaxed font-light tracking-wide">
                Phi AI is not for everyone.<br />
                It is for those who understand that true power whispers.
              </p>
              
              <p className="text-base text-[#E5E5E5]/70 leading-relaxed font-light tracking-wide">
                We unite the world's most sophisticated intelligences<br />
                in perfect mathematical proportion—the Golden Ratio of AI.
              </p>
              
              <div className="pt-8 border-t border-white/5 mt-12">
                <p className="text-sm text-[#C5A059] tracking-widest uppercase font-light">
                  Intelligence. Privacy. Elegance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="access" className="py-32 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-['Playfair_Display'] font-light mb-6 tracking-wide">
              The Membership
            </h2>
            <p className="text-sm text-[#E5E5E5]/50 tracking-widest uppercase">
              Private Access
            </p>
          </div>

          <Card className="bg-[#0A0A0A]/95 border border-white/10 backdrop-blur-sm rounded-none max-w-2xl mx-auto">
            <CardContent className="p-16">
              <div className="text-center mb-12">
                <div className="mb-6">
                  <span className="text-5xl font-['Playfair_Display'] font-light text-[#C5A059]">R$ 49,90</span>
                  <span className="text-sm text-[#E5E5E5]/50 ml-2">/ month</span>
                </div>
                <p className="text-xs text-[#E5E5E5]/40 tracking-widest uppercase">
                  Billed Monthly
                </p>
              </div>

              <div className="space-y-6 mb-12">
                <div className="flex items-start">
                  <Check className="w-4 h-4 text-[#C5A059] mr-4 mt-1 flex-shrink-0" strokeWidth={1} />
                  <span className="text-sm text-[#E5E5E5]/70 font-light">Unlimited access to Claude 3.7, GPT-4o, Gemini 1.5 Pro, and Perplexity</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-4 h-4 text-[#C5A059] mr-4 mt-1 flex-shrink-0" strokeWidth={1} />
                  <span className="text-sm text-[#E5E5E5]/70 font-light">Unified interface with conversation history</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-4 h-4 text-[#C5A059] mr-4 mt-1 flex-shrink-0" strokeWidth={1} />
                  <span className="text-sm text-[#E5E5E5]/70 font-light">End-to-end encryption and data privacy</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-4 h-4 text-[#C5A059] mr-4 mt-1 flex-shrink-0" strokeWidth={1} />
                  <span className="text-sm text-[#E5E5E5]/70 font-light">Priority support and early access to new models</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-4 h-4 text-[#C5A059] mr-4 mt-1 flex-shrink-0" strokeWidth={1} />
                  <span className="text-sm text-[#E5E5E5]/70 font-light">API access for custom integrations</span>
                </div>
              </div>

              <div className="border-t border-white/5 pt-8 mb-8">
                <p className="text-xs text-[#C5A059] text-center tracking-widest uppercase font-light">
                  Complimentary for Lumière & InmoFlow Partners
                </p>
              </div>

              <Button 
                className="w-full border border-[#C5A059] text-[#C5A059] hover:bg-[#C5A059] hover:text-black bg-transparent rounded-none py-6 text-sm tracking-widest font-light transition-all duration-500"
              >
                REQUEST INVITATION
                <ArrowRight className="ml-2 w-4 h-4" strokeWidth={1} />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
            <div className="flex items-center space-x-2">
              <div className="text-3xl font-['Playfair_Display'] font-light text-[#C5A059]">φ</div>
              <span className="text-lg font-['Playfair_Display'] font-light tracking-wider">Phi AI</span>
            </div>
            
            <div className="flex space-x-12 text-xs tracking-widest uppercase text-[#E5E5E5]/40">
              <a href="#" className="hover:text-[#C5A059] transition-colors duration-300">Privacy</a>
              <a href="#" className="hover:text-[#C5A059] transition-colors duration-300">Terms</a>
              <a href="#" className="hover:text-[#C5A059] transition-colors duration-300">Contact</a>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-xs text-[#E5E5E5]/30 tracking-widest uppercase font-light">
              © 2024 Phi AI. Intelligence in Perfect Proportion.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;