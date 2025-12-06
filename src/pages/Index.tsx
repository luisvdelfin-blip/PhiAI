import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ArrowRight, Shield, Zap, Sparkles, MessageSquare, Lock, TrendingUp, Brain, Eye } from "lucide-react";
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
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00E1B4]/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00E1B4]/15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#00E1B4]/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#0F1117]/80 border-b border-[#00E1B4]/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <div className="text-4xl text-[#00E1B4] font-light">φ</div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('recursos')}
              className="text-sm text-gray-400 hover:text-[#00E1B4] transition-colors"
            >
              Recursos
            </button>
            <button 
              onClick={() => scrollToSection('precos')}
              className="text-sm text-gray-400 hover:text-[#00E1B4] transition-colors"
            >
              Preços
            </button>
            <button 
              onClick={() => scrollToSection('sobre')}
              className="text-sm text-gray-400 hover:text-[#00E1B4] transition-colors"
            >
              Sobre
            </button>
          </nav>

          <Button 
            variant="outline" 
            className="border-[#00E1B4] text-[#00E1B4] hover:bg-[#00E1B4]/10 bg-transparent rounded-lg px-6"
          >
            Entrar
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-24">
        <div className="relative z-10 text-center max-w-6xl mx-auto">
          <div className="inline-block mb-6 px-4 py-2 rounded-full border border-[#00E1B4]/20 bg-[#00E1B4]/5 backdrop-blur-sm">
            <span className="text-sm text-gray-300">🚀 Agora com Claude 3.7 Sonnet</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-light mb-6 leading-tight">
            A Inteligência Suprema.
            <br />
            <span className="text-[#00E1B4]">
              Unificada.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Chega de pagar R$ 400/mês. Acesse Claude 3.7, GPT-4o, Gemini 1.5 Pro 
            e Perplexity em uma única interface privada.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button 
              className="bg-[#00E1B4] text-black hover:bg-[#00E1B4]/90 rounded-lg px-8 py-6 text-lg font-medium shadow-lg shadow-[#00E1B4]/30"
              onClick={() => scrollToSection('precos')}
            >
              Começar Agora
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline"
              className="border-[#00E1B4]/30 text-white hover:bg-[#00E1B4]/10 bg-transparent rounded-lg px-8 py-6 text-lg"
            >
              Ver Demo
            </Button>
          </div>

          {/* Floating Chat Interface Mockup */}
          <div className="relative max-w-4xl mx-auto">
            <div className="relative rounded-2xl border border-[#00E1B4]/20 bg-[#1A1D29]/80 backdrop-blur-xl overflow-hidden shadow-2xl shadow-[#00E1B4]/20">
              {/* Model Switcher Animation */}
              <div className="border-b border-[#00E1B4]/10 p-4 flex items-center justify-between bg-[#0F1117]/50">
                <div className="flex items-center space-x-3">
                  <MessageSquare className="w-5 h-5 text-[#00E1B4]" />
                  <span className="text-sm font-medium">Modelo Ativo:</span>
                  <div className="px-3 py-1 rounded-lg bg-[#00E1B4]/10 border border-[#00E1B4]/20">
                    <span className="font-semibold text-[#00E1B4]">{models[activeModel]}</span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  {models.map((_, idx) => (
                    <div 
                      key={idx}
                      className={`w-2 h-2 rounded-full transition-all ${
                        idx === activeModel ? 'bg-[#00E1B4] w-6' : 'bg-white/20'
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
                    <p className="text-sm text-gray-300">Explique computação quântica de forma simples</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-[#00E1B4] flex-shrink-0"></div>
                  <div className="flex-1 bg-[#00E1B4]/10 rounded-lg p-4 border border-[#00E1B4]/20">
                    <p className="text-sm text-gray-300">A computação quântica usa princípios da mecânica quântica...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Grid (Bento Style) */}
      <section id="sobre" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-light mb-4">
              Por que escolher Phi AI?
            </h2>
            <p className="text-xl text-gray-400 font-light">
              Uma assinatura. Possibilidades ilimitadas.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Price Card */}
            <Card className="bg-gradient-to-br from-[#1A1D29] to-[#0F1117] border border-[#00E1B4]/10 hover:border-[#00E1B4]/30 transition-all duration-300 rounded-2xl group">
              <CardContent className="p-8">
                <div className="mb-6">
                  <TrendingUp className="w-12 h-12 text-[#00E1B4] mb-4" strokeWidth={1.5} />
                  <h3 className="text-5xl font-light mb-2">R$ 49,90</h3>
                  <p className="text-gray-400 font-light">por mês</p>
                </div>
                <div className="pt-6 border-t border-[#00E1B4]/10">
                  <p className="text-sm text-gray-400 mb-2 font-light">Compare com:</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">ChatGPT Plus</span>
                      <span className="line-through text-gray-600">R$ 100/mês</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Claude Pro</span>
                      <span className="line-through text-gray-600">R$ 100/mês</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Gemini Advanced</span>
                      <span className="line-through text-gray-600">R$ 100/mês</span>
                    </div>
                    <div className="flex justify-between text-sm font-medium pt-2 border-t border-[#00E1B4]/10">
                      <span className="text-[#00E1B4]">Economia Total</span>
                      <span className="text-[#00E1B4]">~80%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Models Card */}
            <Card className="bg-gradient-to-br from-[#1A1D29] to-[#0F1117] border border-[#00E1B4]/10 hover:border-[#00E1B4]/30 transition-all duration-300 rounded-2xl group">
              <CardContent className="p-8">
                <div className="mb-6">
                  <Sparkles className="w-12 h-12 text-[#00E1B4] mb-4" strokeWidth={1.5} />
                  <h3 className="text-2xl font-light mb-2">Todos os Modelos Premium</h3>
                  <p className="text-gray-400 font-light">Unificados em um só lugar</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 border border-white/10">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-xs font-bold">AI</div>
                    <div>
                      <p className="font-medium text-sm">Claude 3.7 Sonnet</p>
                      <p className="text-xs text-gray-500">Anthropic</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 border border-white/10">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-xs font-bold">GP</div>
                    <div>
                      <p className="font-medium text-sm">GPT-4o</p>
                      <p className="text-xs text-gray-500">OpenAI</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 border border-white/10">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-xs font-bold">GM</div>
                    <div>
                      <p className="font-medium text-sm">Gemini 1.5 Pro</p>
                      <p className="text-xs text-gray-500">Google</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 border border-white/10">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-xs font-bold">PX</div>
                    <div>
                      <p className="font-medium text-sm">Perplexity</p>
                      <p className="text-xs text-gray-500">Busca em Tempo Real</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Privacy Card */}
            <Card className="bg-gradient-to-br from-[#1A1D29] to-[#0F1117] border border-[#00E1B4]/10 hover:border-[#00E1B4]/30 transition-all duration-300 rounded-2xl group">
              <CardContent className="p-8">
                <div className="mb-6">
                  <Shield className="w-12 h-12 text-[#00E1B4] mb-4" strokeWidth={1.5} />
                  <h3 className="text-2xl font-light mb-2">Seus Dados São Seus</h3>
                  <p className="text-gray-400 font-light">Sem treinamento de modelos</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-[#00E1B4] flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <div>
                      <p className="text-sm font-medium">Criptografia ponta a ponta</p>
                      <p className="text-xs text-gray-500">Segurança de nível militar</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-[#00E1B4] flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <div>
                      <p className="text-sm font-medium">Zero treinamento</p>
                      <p className="text-xs text-gray-500">Seus dados permanecem privados</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-[#00E1B4] flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <div>
                      <p className="text-sm font-medium">Conforme LGPD</p>
                      <p className="text-xs text-gray-500">Padrões brasileiros</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-[#00E1B4] flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <div>
                      <p className="text-sm font-medium">Workspace privado</p>
                      <p className="text-xs text-gray-500">Ambiente isolado</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="recursos" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-light mb-4">
              Feito para Profissionais
            </h2>
            <p className="text-xl text-gray-400 font-light">
              Tudo que você precisa para maximizar sua produtividade com IA
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-gradient-to-br from-[#1A1D29] to-[#0F1117] border border-[#00E1B4]/10 hover:border-[#00E1B4]/20 transition-all duration-300 rounded-2xl">
              <CardContent className="p-6">
                <Zap className="w-10 h-10 text-[#00E1B4] mb-4" strokeWidth={1.5} />
                <h3 className="text-lg font-medium mb-2">Troca Instantânea</h3>
                <p className="text-sm text-gray-400 font-light">Mude de modelo no meio da conversa sem perder contexto</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-[#1A1D29] to-[#0F1117] border border-[#00E1B4]/10 hover:border-[#00E1B4]/20 transition-all duration-300 rounded-2xl">
              <CardContent className="p-6">
                <MessageSquare className="w-10 h-10 text-[#00E1B4] mb-4" strokeWidth={1.5} />
                <h3 className="text-lg font-medium mb-2">Histórico Unificado</h3>
                <p className="text-sm text-gray-400 font-light">Todas as conversas em um só lugar, pesquisáveis e organizadas</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-[#1A1D29] to-[#0F1117] border border-[#00E1B4]/10 hover:border-[#00E1B4]/20 transition-all duration-300 rounded-2xl">
              <CardContent className="p-6">
                <Lock className="w-10 h-10 text-[#00E1B4] mb-4" strokeWidth={1.5} />
                <h3 className="text-lg font-medium mb-2">Acesso via API</h3>
                <p className="text-sm text-gray-400 font-light">Integre com suas ferramentas e fluxos de trabalho</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-[#1A1D29] to-[#0F1117] border border-[#00E1B4]/10 hover:border-[#00E1B4]/20 transition-all duration-300 rounded-2xl">
              <CardContent className="p-6">
                <Brain className="w-10 h-10 text-[#00E1B4] mb-4" strokeWidth={1.5} />
                <h3 className="text-lg font-medium mb-2">Roteamento Inteligente</h3>
                <p className="text-sm text-gray-400 font-light">Seleciona automaticamente o melhor modelo para sua tarefa</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section id="precos" className="py-32 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-[#1A1D29] to-[#0F1117] border border-[#00E1B4]/20 rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-[#00E1B4]/5"></div>
            <div className="relative z-10">
              <h2 className="text-5xl md:text-6xl font-light mb-6">
                Pronto para evoluir sua IA?
              </h2>
              <p className="text-xl text-gray-400 mb-8 font-light">
                Junte-se a milhares de profissionais usando Phi AI
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  className="bg-[#00E1B4] text-black hover:bg-[#00E1B4]/90 rounded-lg px-12 py-6 text-lg font-medium shadow-lg shadow-[#00E1B4]/30"
                >
                  Começar - R$ 49,90/mês
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
              <p className="text-sm text-gray-500 mt-6 font-light">
                Acesso cortesia para parceiros Lumière & InmoFlow
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-[#00E1B4]/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-3">
              <div className="text-3xl text-[#00E1B4]">φ</div>
              <span className="text-lg font-light">Phi AI</span>
            </div>
            
            <div className="flex space-x-8 text-sm text-gray-400">
              <a href="#" className="hover:text-[#00E1B4] transition-colors">Privacidade</a>
              <a href="#" className="hover:text-[#00E1B4] transition-colors">Termos</a>
              <a href="#" className="hover:text-[#00E1B4] transition-colors">Contato</a>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500 font-light">
              © 2025 Phi AI. Feito no Brasil 🇧🇷
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;