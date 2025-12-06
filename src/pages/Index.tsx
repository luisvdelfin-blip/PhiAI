import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ArrowRight, Shield, Zap, Sparkles, MessageSquare, Lock, TrendingUp, Brain, Eye, Layers, Search, Plug, Target } from "lucide-react";
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
          <div className="flex items-center space-x-3">
            <div className="text-3xl text-[#00E1B4] font-light">φ</div>
            <span className="text-lg font-light">Phi AI</span>
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
              onClick={() => scrollToSection('metodologia')}
              className="text-sm text-gray-400 hover:text-[#00E1B4] transition-colors"
            >
              Metodologia
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
            <span className="text-sm text-gray-300">✨ Perfect Harmony Intelligence</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-light mb-6 leading-tight">
            A Harmonia Perfeita entre
            <br />
            <span className="text-[#00E1B4]">
              as Melhores IAs do Mundo.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Não fragmentada. Unificada. Acesse Claude 3.7, GPT-4o, Gemini 1.5 Pro 
            e Perplexity em uma única interface inteligente. A proporção ideal entre custo e potência.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button 
              className="bg-[#00E1B4] text-black hover:bg-[#00E1B4]/90 rounded-lg px-10 py-6 text-lg font-medium shadow-lg shadow-[#00E1B4]/30"
              onClick={() => scrollToSection('precos')}
            >
              Acessar o Ecossistema Phi
              <ArrowRight className="ml-2 w-5 h-5" />
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
                    <p className="text-sm text-gray-300">Analise o mercado imobiliário brasileiro em 2025</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-[#00E1B4] flex-shrink-0"></div>
                  <div className="flex-1 bg-[#00E1B4]/10 rounded-lg p-4 border border-[#00E1B4]/20">
                    <p className="text-sm text-gray-300">Baseado em dados recentes, o mercado imobiliário brasileiro apresenta...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section - Harmonic Investment */}
      <section id="precos" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-light mb-4">
              Uma Assinatura.
              <br />
              <span className="text-[#00E1B4]">Multiplicidade de Inteligências.</span>
            </h2>
            <p className="text-xl text-gray-400 font-light max-w-3xl mx-auto">
              Por que pagar por ruído quando você pode pagar pela harmonia? 
              Centralize seus custos e potencialize seus resultados.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            {/* Chaos Card */}
            <Card className="bg-gradient-to-br from-[#1A1D29] to-[#0F1117] border border-red-500/20 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 px-3 py-1 bg-red-500/20 text-red-400 text-xs font-medium rounded-bl-lg">
                CAOS
              </div>
              <CardContent className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-light mb-2 text-gray-400">Múltiplas Assinaturas</h3>
                  <div className="text-4xl font-light text-red-400 mb-4">~R$ 400<span className="text-xl">/mês</span></div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <div className="w-1.5 h-1.5 bg-red-500/50 rounded-full"></div>
                    <span>ChatGPT Plus: R$ 100/mês</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <div className="w-1.5 h-1.5 bg-red-500/50 rounded-full"></div>
                    <span>Claude Pro: R$ 100/mês</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <div className="w-1.5 h-1.5 bg-red-500/50 rounded-full"></div>
                    <span>Gemini Advanced: R$ 100/mês</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <div className="w-1.5 h-1.5 bg-red-500/50 rounded-full"></div>
                    <span>Perplexity Pro: R$ 100/mês</span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-white/5">
                  <p className="text-xs text-gray-500 font-light">Fragmentação. Múltiplas interfaces. Custos dispersos.</p>
                </div>
              </CardContent>
            </Card>

            {/* Harmony Card */}
            <Card className="bg-gradient-to-br from-[#00E1B4]/10 to-[#0F1117] border border-[#00E1B4]/30 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 px-3 py-1 bg-[#00E1B4]/20 text-[#00E1B4] text-xs font-medium rounded-bl-lg">
                HARMONIA
              </div>
              <CardContent className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-light mb-2">Phi AI</h3>
                  <div className="text-5xl font-light text-[#00E1B4] mb-4">R$ 49,90<span className="text-xl">/mês</span></div>
                  <p className="text-sm text-gray-400 font-light">Eficiência de Custo Otimizada</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-sm">
                    <Check className="w-4 h-4 text-[#00E1B4]" strokeWidth={2} />
                    <span>Claude 3.7 Sonnet</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Check className="w-4 h-4 text-[#00E1B4]" strokeWidth={2} />
                    <span>GPT-4o</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Check className="w-4 h-4 text-[#00E1B4]" strokeWidth={2} />
                    <span>Gemini 1.5 Pro</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Check className="w-4 h-4 text-[#00E1B4]" strokeWidth={2} />
                    <span>Perplexity</span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-[#00E1B4]/10">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Economia Total</span>
                    <span className="text-2xl font-light text-[#00E1B4]">87,5%</span>
                  </div>
                  <p className="text-xs text-gray-400 font-light">Unificação. Interface única. Custo centralizado.</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Trust Badge */}
          <div className="max-w-3xl mx-auto">
            <Card className="bg-gradient-to-br from-[#1A1D29] to-[#0F1117] border border-[#00E1B4]/10 rounded-2xl">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <Shield className="w-12 h-12 text-[#00E1B4] flex-shrink-0" strokeWidth={1.5} />
                  <div>
                    <h3 className="text-xl font-light mb-2">Soberania dos Dados</h3>
                    <p className="text-sm text-gray-400 font-light leading-relaxed">
                      Criptografia ponta a ponta. Seus dados não treinam modelos. 
                      Conformidade total com LGPD. Workspace privado e isolado.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section - High Performance Tools */}
      <section id="recursos" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-light mb-4">
              Ferramentas Desenhadas para
              <br />
              <span className="text-[#00E1B4]">a Alta Performance</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Card 1: Sinergia Dinâmica */}
            <Card className="bg-gradient-to-br from-[#1A1D29] to-[#0F1117] border border-[#00E1B4]/10 hover:border-[#00E1B4]/30 transition-all duration-300 rounded-2xl group">
              <CardContent className="p-8">
                <Layers className="w-12 h-12 text-[#00E1B4] mb-6" strokeWidth={1.5} />
                <h3 className="text-2xl font-light mb-3">Sinergia Dinâmica</h3>
                <p className="text-sm text-gray-400 font-light leading-relaxed">
                  Alterne entre GPT e Claude instantaneamente, sem perder o contexto. 
                  A transição é fluida, mantendo a continuidade da conversa e maximizando 
                  a qualidade das respostas.
                </p>
              </CardContent>
            </Card>

            {/* Card 2: Memória Centralizada */}
            <Card className="bg-gradient-to-br from-[#1A1D29] to-[#0F1117] border border-[#00E1B4]/10 hover:border-[#00E1B4]/30 transition-all duration-300 rounded-2xl group">
              <CardContent className="p-8">
                <Search className="w-12 h-12 text-[#00E1B4] mb-6" strokeWidth={1.5} />
                <h3 className="text-2xl font-light mb-3">Memória Centralizada</h3>
                <p className="text-sm text-gray-400 font-light leading-relaxed">
                  O caos de múltiplas abas eliminado. Tudo em um fluxo pesquisável. 
                  Encontre qualquer conversa, insight ou resposta em segundos, 
                  independente do modelo usado.
                </p>
              </CardContent>
            </Card>

            {/* Card 3: Conexão Phygital */}
            <Card className="bg-gradient-to-br from-[#1A1D29] to-[#0F1117] border border-[#00E1B4]/10 hover:border-[#00E1B4]/30 transition-all duration-300 rounded-2xl group">
              <CardContent className="p-8">
                <Plug className="w-12 h-12 text-[#00E1B4] mb-6" strokeWidth={1.5} />
                <h3 className="text-2xl font-light mb-3">Conexão Phygital</h3>
                <p className="text-sm text-gray-400 font-light leading-relaxed">
                  Leve a inteligência da Phi AI para dentro dos seus processos via API. 
                  Integre com suas ferramentas, automatize workflows e expanda 
                  as capacidades do seu negócio.
                </p>
              </CardContent>
            </Card>

            {/* Card 4: Seleção Áurea */}
            <Card className="bg-gradient-to-br from-[#1A1D29] to-[#0F1117] border border-[#00E1B4]/10 hover:border-[#00E1B4]/30 transition-all duration-300 rounded-2xl group">
              <CardContent className="p-8">
                <Target className="w-12 h-12 text-[#00E1B4] mb-6" strokeWidth={1.5} />
                <h3 className="text-2xl font-light mb-3">Seleção Áurea</h3>
                <p className="text-sm text-gray-400 font-light leading-relaxed">
                  Nossa 'Smart Routing' seleciona matematicamente a IA mais capaz 
                  para sua tarefa. Análise de código? Claude. Pesquisa em tempo real? 
                  Perplexity. Sempre a escolha perfeita.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section id="metodologia" className="py-32 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-[#1A1D29] to-[#0F1117] border border-[#00E1B4]/20 rounded-3xl p-12 md:p-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-[#00E1B4]/5"></div>
            <div className="relative z-10 text-center">
              <div className="inline-block mb-6 px-4 py-2 rounded-full border border-[#00E1B4]/20 bg-[#00E1B4]/10 backdrop-blur-sm">
                <span className="text-sm text-[#00E1B4] font-medium">Perfect Harmony Intelligence</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-light mb-6">
                Muito mais que uma Plataforma.
                <br />
                <span className="text-[#00E1B4]">Uma Metodologia.</span>
              </h2>
              
              <p className="text-lg text-gray-400 font-light leading-relaxed max-w-3xl mx-auto mb-8">
                A Phi AI nasceu da aplicação da Perfect Harmony Intelligence em grandes 
                operações empresariais. Ao assinar, você entra para o ecossistema de 
                eficiência que está redefinindo o mercado.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-light text-[#00E1B4] mb-2">φ</div>
                  <p className="text-sm text-gray-400 font-light">Proporção Áurea</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-light text-[#00E1B4] mb-2">∞</div>
                  <p className="text-sm text-gray-400 font-light">Possibilidades Infinitas</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-light text-[#00E1B4] mb-2">∑</div>
                  <p className="text-sm text-gray-400 font-light">Soma das Inteligências</p>
                </div>
              </div>

              <div className="mt-12">
                <Button 
                  className="bg-[#00E1B4] text-black hover:bg-[#00E1B4]/90 rounded-lg px-12 py-6 text-lg font-medium shadow-lg shadow-[#00E1B4]/30"
                >
                  Começar Agora
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <p className="text-sm text-gray-500 mt-4 font-light">
                  Acesso cortesia para parceiros Lumière & InmoFlow
                </p>
              </div>
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
              Phi AI - Inteligência em Perfeita Proporção
            </p>
            <p className="text-xs text-gray-600 mt-2 font-light">
              © 2025 Phi AI. Feito no Brasil 🇧🇷
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;