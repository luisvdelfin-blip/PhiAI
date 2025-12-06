import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ArrowRight, Shield, Zap, Sparkles, MessageSquare, Lock, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";

const Index = () => {
  const [activeModel, setActiveModel] = useState(0);
  const models = ["GPT-4o", "Claude 3.7", "Gemini 1.5 Pro", "Perplexity"];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveModel((prev) => (prev + 1) % models.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#0F1117] text-white overflow-x-hidden relative">
      {/* Animated Background Gradients */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#0F1117]/80 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-[#FCD34D] to-[#3B82F6] rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-lg">φ</span>
            </div>
            <span className="text-xl font-bold">Phi AI</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('features')}
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection('comparison')}
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Compare
            </button>
          </nav>

          <Button 
            variant="outline" 
            className="border-white/20 text-white hover:bg-white/10 bg-transparent rounded-lg px-6"
          >
            Sign In
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-24">
        <div className="relative z-10 text-center max-w-6xl mx-auto">
          <div className="inline-block mb-6 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
            <span className="text-sm text-gray-300">🚀 Now with Claude 3.7 Sonnet</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            The World's Best Models.
            <br />
            <span className="bg-gradient-to-r from-[#FCD34D] via-[#3B82F6] to-[#FCD34D] bg-clip-text text-transparent">
              One Interface.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Stop paying $60/mo for each AI. Access Claude 3.7, GPT-4o, Gemini 1.5 Pro, 
            and Perplexity in a single, private workspace.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button 
              className="bg-gradient-to-r from-[#FCD34D] to-[#3B82F6] text-black hover:opacity-90 rounded-lg px-8 py-6 text-lg font-semibold shadow-lg shadow-blue-500/50"
              onClick={() => scrollToSection('pricing')}
            >
              Start Chatting Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 bg-transparent rounded-lg px-8 py-6 text-lg"
            >
              View Demo
            </Button>
          </div>

          {/* Floating Chat Interface Mockup */}
          <div className="relative max-w-4xl mx-auto">
            <div className="relative rounded-2xl border border-white/10 bg-[#1A1D29]/80 backdrop-blur-xl overflow-hidden shadow-2xl shadow-blue-500/20">
              {/* Model Switcher Animation */}
              <div className="border-b border-white/10 p-4 flex items-center justify-between bg-[#0F1117]/50">
                <div className="flex items-center space-x-3">
                  <MessageSquare className="w-5 h-5 text-[#FCD34D]" />
                  <span className="text-sm font-medium">Active Model:</span>
                  <div className="px-3 py-1 rounded-lg bg-gradient-to-r from-[#FCD34D]/20 to-[#3B82F6]/20 border border-white/10">
                    <span className="font-bold text-[#FCD34D]">{models[activeModel]}</span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  {models.map((_, idx) => (
                    <div 
                      key={idx}
                      className={`w-2 h-2 rounded-full transition-all ${
                        idx === activeModel ? 'bg-[#FCD34D] w-6' : 'bg-white/20'
                      }`}
                    />
                  ))}
                </div>
              </div>
              
              {/* Chat Preview */}
              <div className="p-6 space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex-shrink-0"></div>
                  <div className="flex-1 bg-white/5 rounded-lg p-4 border border-white/10">
                    <p className="text-sm text-gray-300">Explain quantum computing in simple terms</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FCD34D] to-[#3B82F6] flex-shrink-0"></div>
                  <div className="flex-1 bg-gradient-to-br from-[#FCD34D]/10 to-[#3B82F6]/10 rounded-lg p-4 border border-white/10">
                    <p className="text-sm text-gray-300">Quantum computing uses quantum mechanics principles...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Grid (Abacus Style) */}
      <section id="comparison" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              Why Choose Phi AI?
            </h2>
            <p className="text-xl text-gray-400">
              One subscription. Unlimited possibilities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Price Card */}
            <Card className="bg-gradient-to-br from-[#1A1D29] to-[#0F1117] border border-white/10 hover:border-[#FCD34D]/50 transition-all duration-300 rounded-2xl group">
              <CardContent className="p-8">
                <div className="mb-6">
                  <TrendingUp className="w-12 h-12 text-[#FCD34D] mb-4" strokeWidth={1.5} />
                  <h3 className="text-4xl font-bold mb-2">R$ 49,90</h3>
                  <p className="text-gray-400">per month</p>
                </div>
                <div className="pt-6 border-t border-white/10">
                  <p className="text-sm text-gray-400 mb-2">Compare to:</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">ChatGPT Plus</span>
                      <span className="line-through text-gray-600">$20/mo</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Claude Pro</span>
                      <span className="line-through text-gray-600">$20/mo</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Gemini Advanced</span>
                      <span className="line-through text-gray-600">$20/mo</span>
                    </div>
                    <div className="flex justify-between text-sm font-bold pt-2 border-t border-white/10">
                      <span className="text-[#FCD34D]">Total Savings</span>
                      <span className="text-[#FCD34D]">~$10/mo</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Models Card */}
            <Card className="bg-gradient-to-br from-[#1A1D29] to-[#0F1117] border border-white/10 hover:border-[#3B82F6]/50 transition-all duration-300 rounded-2xl group">
              <CardContent className="p-8">
                <div className="mb-6">
                  <Sparkles className="w-12 h-12 text-[#3B82F6] mb-4" strokeWidth={1.5} />
                  <h3 className="text-2xl font-bold mb-2">All Premium Models</h3>
                  <p className="text-gray-400">Unified in one place</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 border border-white/10">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-xs font-bold">AI</div>
                    <div>
                      <p className="font-semibold text-sm">Claude 3.7 Sonnet</p>
                      <p className="text-xs text-gray-500">Anthropic</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 border border-white/10">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-xs font-bold">GP</div>
                    <div>
                      <p className="font-semibold text-sm">GPT-4o</p>
                      <p className="text-xs text-gray-500">OpenAI</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 border border-white/10">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-xs font-bold">GM</div>
                    <div>
                      <p className="font-semibold text-sm">Gemini 1.5 Pro</p>
                      <p className="text-xs text-gray-500">Google</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 border border-white/10">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-xs font-bold">PX</div>
                    <div>
                      <p className="font-semibold text-sm">Perplexity</p>
                      <p className="text-xs text-gray-500">Real-time Search</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Privacy Card */}
            <Card className="bg-gradient-to-br from-[#1A1D29] to-[#0F1117] border border-white/10 hover:border-green-500/50 transition-all duration-300 rounded-2xl group">
              <CardContent className="p-8">
                <div className="mb-6">
                  <Shield className="w-12 h-12 text-green-500 mb-4" strokeWidth={1.5} />
                  <h3 className="text-2xl font-bold mb-2">Zero Data Training</h3>
                  <p className="text-gray-400">Your privacy guaranteed</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <div>
                      <p className="text-sm font-medium">End-to-end encryption</p>
                      <p className="text-xs text-gray-500">Military-grade security</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <div>
                      <p className="text-sm font-medium">No model training</p>
                      <p className="text-xs text-gray-500">Your data stays yours</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <div>
                      <p className="text-sm font-medium">GDPR compliant</p>
                      <p className="text-xs text-gray-500">European standards</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <div>
                      <p className="text-sm font-medium">Private workspace</p>
                      <p className="text-xs text-gray-500">Isolated environment</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              Built for Power Users
            </h2>
            <p className="text-xl text-gray-400">
              Everything you need to maximize AI productivity
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-gradient-to-br from-[#1A1D29] to-[#0F1117] border border-white/10 hover:border-white/20 transition-all duration-300 rounded-2xl">
              <CardContent className="p-6">
                <Zap className="w-10 h-10 text-[#FCD34D] mb-4" strokeWidth={1.5} />
                <h3 className="text-lg font-bold mb-2">Instant Switching</h3>
                <p className="text-sm text-gray-400">Change models mid-conversation without losing context</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-[#1A1D29] to-[#0F1117] border border-white/10 hover:border-white/20 transition-all duration-300 rounded-2xl">
              <CardContent className="p-6">
                <MessageSquare className="w-10 h-10 text-[#3B82F6] mb-4" strokeWidth={1.5} />
                <h3 className="text-lg font-bold mb-2">Unified History</h3>
                <p className="text-sm text-gray-400">All conversations in one place, searchable and organized</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-[#1A1D29] to-[#0F1117] border border-white/10 hover:border-white/20 transition-all duration-300 rounded-2xl">
              <CardContent className="p-6">
                <Lock className="w-10 h-10 text-green-500 mb-4" strokeWidth={1.5} />
                <h3 className="text-lg font-bold mb-2">API Access</h3>
                <p className="text-sm text-gray-400">Integrate with your tools and workflows</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-[#1A1D29] to-[#0F1117] border border-white/10 hover:border-white/20 transition-all duration-300 rounded-2xl">
              <CardContent className="p-6">
                <Sparkles className="w-10 h-10 text-purple-500 mb-4" strokeWidth={1.5} />
                <h3 className="text-lg font-bold mb-2">Smart Routing</h3>
                <p className="text-sm text-gray-400">Auto-select the best model for your task</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section id="pricing" className="py-32 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-[#1A1D29] to-[#0F1117] border border-white/10 rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FCD34D]/10 to-[#3B82F6]/10"></div>
            <div className="relative z-10">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                Ready to upgrade your AI?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Join thousands of professionals using Phi AI
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  className="bg-gradient-to-r from-[#FCD34D] to-[#3B82F6] text-black hover:opacity-90 rounded-lg px-12 py-6 text-lg font-semibold shadow-lg shadow-blue-500/50"
                >
                  Get Started - R$ 49,90/mo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
              <p className="text-sm text-gray-500 mt-6">
                Complimentary access for Lumière & InmoFlow partners
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-[#FCD34D] to-[#3B82F6] rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-lg">φ</span>
              </div>
              <span className="text-lg font-bold">Phi AI Systems</span>
            </div>
            
            <div className="flex space-x-8 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              © 2025 Phi AI Systems. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;