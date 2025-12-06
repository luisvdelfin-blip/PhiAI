import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Check, X, Sparkles, Brain, Zap, Shield, Users, Building, Calendar, Home } from "lucide-react";
import { useEffect, useState } from "react";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #D4AF37 0%, transparent 50%), 
                             radial-gradient(circle at 75% 75%, #D4AF37 0%, transparent 50%)`,
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        />
        
        <div className="relative z-10 text-center max-w-6xl mx-auto">
          <div className="mb-8">
            <Badge className="bg-[#D4AF37]/20 text-[#D4AF37] border-[#D4AF37]/30 mb-6 px-4 py-2 text-sm font-medium">
              <Sparkles className="w-4 h-4 mr-2" />
              A Inteligência Suprema
            </Badge>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            <span className="font-['Playfair_Display'] bg-gradient-to-r from-white via-white to-[#D4AF37] bg-clip-text text-transparent">
              A Inteligência Suprema.
            </span>
            <br />
            <span className="font-['Playfair_Display'] text-[#D4AF37]">
              Em Perfeita Harmonia.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            A única plataforma que une GPT-4o, Claude 3.7, Gemini 1.5 Pro e Perplexity 
            em uma interface privada e segura.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-black font-semibold px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Acessar o Chat PhiAI
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10 px-8 py-4 text-lg rounded-full transition-all duration-300"
              onClick={() => scrollToSection('ecosystem')}
            >
              Conheça Nossas Soluções Verticais
            </Button>
          </div>
        </div>
      </section>

      {/* The Power Section */}
      <section className="py-24 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-['Playfair_Display'] font-bold mb-6">
              O Poder da <span className="text-[#D4AF37]">Unificação</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Por que pagar 5 assinaturas? Tenha os modelos mais potentes do mundo no seu bolso.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Chaos Side */}
            <Card className="bg-red-900/20 border-red-500/30 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <X className="w-8 h-8 text-red-400 mr-3" />
                  <h3 className="text-2xl font-bold text-red-400">O Caos das Assinaturas</h3>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span>ChatGPT Plus</span>
                    <span className="text-red-400 font-bold">$20/mês</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Claude Pro</span>
                    <span className="text-red-400 font-bold">$20/mês</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Gemini Advanced</span>
                    <span className="text-red-400 font-bold">$20/mês</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Perplexity Pro</span>
                    <span className="text-red-400 font-bold">$20/mês</span>
                  </div>
                  <div className="border-t border-red-500/30 pt-4">
                    <div className="flex justify-between items-center text-xl font-bold">
                      <span>Total Mensal:</span>
                      <span className="text-red-400">~R$ 400/mês</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-400 text-sm">
                  Múltiplas interfaces, dados espalhados, sem integração.
                </p>
              </CardContent>
            </Card>

            {/* Harmony Side */}
            <Card className="bg-[#D4AF37]/10 border-[#D4AF37]/30 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Check className="w-8 h-8 text-[#D4AF37] mr-3" />
                  <h3 className="text-2xl font-bold text-[#D4AF37]">A Harmonia PhiAI</h3>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span>GPT-4o + Claude 3.7 + Gemini 1.5 Pro + Perplexity</span>
                    <span className="text-[#D4AF37] font-bold">Incluído</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Interface Unificada</span>
                    <span className="text-[#D4AF37] font-bold">Incluído</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Dados Privados & Seguros</span>
                    <span className="text-[#D4AF37] font-bold">Incluído</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Suporte Premium</span>
                    <span className="text-[#D4AF37] font-bold">Incluído</span>
                  </div>
                  <div className="border-t border-[#D4AF37]/30 pt-4">
                    <div className="flex justify-between items-center text-xl font-bold">
                      <span>Total Mensal:</span>
                      <span className="text-[#D4AF37]">R$ 49,90/mês</span>
                    </div>
                  </div>
                </div>
                
                <Badge className="bg-[#D4AF37] text-black font-bold">
                  GRÁTIS para clientes empresariais
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The Ecosystem Section */}
      <section id="ecosystem" className="py-24 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-['Playfair_Display'] font-bold mb-6">
              Powered by <span className="text-[#D4AF37]">PhiAI</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Nossas Soluções Especializadas. PhiAI é o motor por trás de sistemas específicos para cada indústria.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Lumière AI */}
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-[#D4AF37] transition-colors">
                    Lumière AI
                  </h3>
                  <Badge variant="outline" className="border-pink-500/50 text-pink-400">
                    Estética & Spas
                  </Badge>
                </div>
                
                <p className="text-gray-300 mb-6">
                  Automação de agenda e vendas com elegância. IA especializada para o mercado de beleza e bem-estar.
                </p>
                
                <div className="space-y-2 text-sm text-gray-400">
                  <div className="flex items-center">
                    <Check className="w-4 h-4 text-[#D4AF37] mr-2" />
                    Agendamento Inteligente
                  </div>
                  <div className="flex items-center">
                    <Check className="w-4 h-4 text-[#D4AF37] mr-2" />
                    Vendas Automatizadas
                  </div>
                  <div className="flex items-center">
                    <Check className="w-4 h-4 text-[#D4AF37] mr-2" />
                    Atendimento 24/7
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* InmoFlow */}
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-4">
                    <Building className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-[#D4AF37] transition-colors">
                    InmoFlow
                  </h3>
                  <Badge variant="outline" className="border-blue-500/50 text-blue-400">
                    Imobiliárias
                  </Badge>
                </div>
                
                <p className="text-gray-300 mb-6">
                  Atendimento inteligente para corretores. IA que qualifica leads e agenda visitas automaticamente.
                </p>
                
                <div className="space-y-2 text-sm text-gray-400">
                  <div className="flex items-center">
                    <Check className="w-4 h-4 text-[#D4AF37] mr-2" />
                    Qualificação de Leads
                  </div>
                  <div className="flex items-center">
                    <Check className="w-4 h-4 text-[#D4AF37] mr-2" />
                    Agendamento de Visitas
                  </div>
                  <div className="flex items-center">
                    <Check className="w-4 h-4 text-[#D4AF37] mr-2" />
                    CRM Integrado
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Jota Hub */}
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-[#D4AF37] transition-colors">
                    Jota Hub
                  </h3>
                  <Badge variant="outline" className="border-emerald-500/50 text-emerald-400">
                    Enterprise
                  </Badge>
                </div>
                
                <p className="text-gray-300 mb-6">
                  Gestão corporativa sob medida. Plataforma completa para empresas que buscam excelência operacional.
                </p>
                
                <div className="space-y-2 text-sm text-gray-400">
                  <div className="flex items-center">
                    <Check className="w-4 h-4 text-[#D4AF37] mr-2" />
                    Automação de Processos
                  </div>
                  <div className="flex items-center">
                    <Check className="w-4 h-4 text-[#D4AF37] mr-2" />
                    Analytics Avançado
                  </div>
                  <div className="flex items-center">
                    <Check className="w-4 h-4 text-[#D4AF37] mr-2" />
                    Integração Completa
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The Philosophy Section */}
      <section className="py-24 px-4 relative">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-16">
            <h2 className="text-4xl md:text-6xl font-['Playfair_Display'] font-bold mb-6">
              Perfect Harmony <span className="text-[#D4AF37]">Intelligence</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Nossa metodologia baseada na Proporção Áurea. Não vendemos apenas software. 
              Criamos sistemas onde a tecnologia potencializa o humano.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#D4AF37]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-10 h-10 text-[#D4AF37]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Inteligência</h3>
              <p className="text-gray-400">IA que compreende contexto e nuances humanas</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-[#D4AF37]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-10 h-10 text-[#D4AF37]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Eficiência</h3>
              <p className="text-gray-400">Automação que libera tempo para o que importa</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-[#D4AF37]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-10 h-10 text-[#D4AF37]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Segurança</h3>
              <p className="text-gray-400">Privacidade e proteção de dados em primeiro lugar</p>
            </div>
          </div>

          <Card className="bg-[#D4AF37]/5 border-[#D4AF37]/20 backdrop-blur-sm max-w-4xl mx-auto">
            <CardContent className="p-12">
              <blockquote className="text-2xl md:text-3xl font-['Playfair_Display'] italic text-center leading-relaxed">
                "A verdadeira inovação acontece quando a matemática encontra a arte, 
                e o código encontra a alma humana."
              </blockquote>
              <p className="text-[#D4AF37] text-center mt-6 font-semibold">
                — Filosofia PhiAI
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-[#D4AF37] mb-4">PhiAI</h3>
              <p className="text-gray-400 mb-4">
                A Inteligência Suprema em Perfeita Harmonia.
              </p>
              <p className="text-sm text-gray-500">
                Parte do Ecossistema Home Office Inteligente.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Plataforma</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Login</a></li>
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Chat PhiAI</a></li>
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">API</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Soluções</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Lumière AI</a></li>
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">InmoFlow</a></li>
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Jota Hub</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Suporte</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Documentação</a></li>
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Suporte</a></li>
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Termos</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 text-center text-gray-400">
            <p>&copy; 2024 PhiAI. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;