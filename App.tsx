import React, { useEffect, useState } from 'react';
import { 
  Heart, 
  Brain, 
  BookOpen, 
  Smile, 
  Star, 
  CheckCircle, 
  Instagram, 
  MapPin, 
  Phone, 
  Clock,
  ArrowRight,
  MessageCircle,
  Puzzle,
  Music,
  Palette,
  Shield,
  Users,
  Sparkles,
  Activity,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';

// ScrollReveal component for triggering transition effects on scroll
const ScrollReveal = ({ children }: { children: React.ReactNode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      {children}
    </div>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-white/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <img 
            src="./espaco_adh.svg" 
            alt="Espaço de Aprendizagem & Desenvolvimento Humano" 
            className={`transition-all duration-300 w-auto object-contain ${isScrolled ? 'h-10 md:h-16' : 'h-14 md:h-24'}`}
          />
        </a>

        {/* Botão Hamburger (Mobile) */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-emerald-900 focus:outline-none p-2 hover:bg-emerald-50 rounded-full transition"
          aria-label="Alternar Menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menu Desktop */}
        <div className="hidden lg:flex gap-8 items-center">
          <a href="#diferenciais" className="text-emerald-900 font-medium hover:text-emerald-600 transition relative group py-2">
            Diferenciais
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#servicos" className="text-emerald-900 font-medium hover:text-emerald-600 transition relative group py-2">
            Serviços
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#sobre" className="text-emerald-900 font-medium hover:text-emerald-600 transition relative group py-2">
            Sobre
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#contato" className="bg-emerald-500 text-white px-5 py-2 rounded-full font-bold hover:bg-emerald-600 transition shadow-lg shadow-emerald-200">Agendar</a>
        </div>
      </div>

      {/* Menu Dropdown Mobile */}
      <div className={`lg:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-72 opacity-100 mt-2 border-t border-emerald-50 bg-white/95 backdrop-blur-md' : 'max-h-0 opacity-0 pointer-events-none'}`}>
        <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
          <a 
            href="#diferenciais" 
            onClick={() => setIsMenuOpen(false)}
            className="text-emerald-900 font-medium hover:text-emerald-600 transition py-2 border-b border-emerald-50/50"
          >
            Diferenciais
          </a>
          <a 
            href="#servicos" 
            onClick={() => setIsMenuOpen(false)}
            className="text-emerald-900 font-medium hover:text-emerald-600 transition py-2 border-b border-emerald-50/50"
          >
            Serviços
          </a>
          <a 
            href="#sobre" 
            onClick={() => setIsMenuOpen(false)}
            className="text-emerald-900 font-medium hover:text-emerald-600 transition py-2 border-b border-emerald-50/50"
          >
            Sobre
          </a>
          <a 
            href="#contato" 
            onClick={() => setIsMenuOpen(false)}
            className="bg-emerald-500 text-white px-5 py-2 rounded-full font-bold hover:bg-emerald-600 transition text-center shadow-lg shadow-emerald-200"
          >
            Agendar
          </a>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const [positions, setPositions] = useState([
    { top: "-4%", left: "-4%", right: "auto" },
    { top: "10%", right: "-4%", left: "auto" },
    { top: "85%", left: "-4%", right: "auto" },
    { top: "50%", right: "-4%", left: "auto" }
  ]);

  const card1Options = [
    { label: "Autismo & Transtornos", desc: "Neurodesenvolvimento", icon: "Puzzle" },
    { label: "Psicopedagogia", desc: "Dificuldades de Aprendizagem", icon: "Brain" },
    { label: "Neuropsicologia", desc: "Bebês a Idosos", icon: "Activity" }
  ];

  const card2Options = [
    { label: "Acolhimento Humano", desc: "Olhar Individualizado", icon: "Heart" },
    { label: "Autonomia", desc: "Qualidade de Vida", icon: "Sparkles" },
    { label: "Evolução Contínua", desc: "Terapias Integradas", icon: "CheckCircle" }
  ];

  const card3Options = [
    { label: "Fisioterapia", desc: "Saúde & Movimento", icon: "Activity" },
    { label: "Psicologia", desc: "Saúde Emocional", icon: "Smile" },
    { label: "Habilidades Sociais", desc: "Desenvolvimento Coletivo", icon: "Users" }
  ];

  const card4Options = [
    { label: "Reforço Escolar", desc: "Apoio Pedagógico", icon: "BookOpen" },
    { label: "Arte & Pintura", desc: "Expressão Criativa", icon: "Palette" },
    { label: "Musicalização", desc: "Sensório-Motor", icon: "Music" }
  ];

  const iconMap: Record<string, React.ComponentType<any>> = {
    Heart,
    Brain,
    BookOpen,
    Smile,
    Star,
    CheckCircle,
    Puzzle,
    Music,
    Palette,
    Sparkles,
    Activity,
    Users
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % 3);
        setPositions([
          { top: `${Math.floor(Math.random() * 14) - 4}%`, left: `${Math.floor(Math.random() * 14) - 4}%`, right: 'auto' },
          { top: `${Math.floor(Math.random() * 20) + 5}%`, right: `${Math.floor(Math.random() * 14) - 4}%`, left: 'auto' },
          { top: `${Math.floor(Math.random() * 15) + 75}%`, left: `${Math.floor(Math.random() * 14) - 4}%`, right: 'auto' },
          { top: `${Math.floor(Math.random() * 20) + 45}%`, right: `${Math.floor(Math.random() * 14) - 4}%`, left: 'auto' }
        ]);
        setVisible(true);
      }, 500);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const c1 = card1Options[index];
  const c2 = card2Options[index];
  const c3 = card3Options[index];
  const c4 = card4Options[index];

  const Icon1 = iconMap[c1.icon] || Smile;
  const Icon2 = iconMap[c2.icon] || Smile;
  const Icon3 = iconMap[c3.icon] || Smile;
  const Icon4 = iconMap[c4.icon] || Smile;

  return (
    <header className="relative min-h-[120vh] md:min-h-[800px] lg:min-h-[900px] xl:min-h-screen flex items-center pt-28 pb-20 md:pt-40 md:pb-24 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-emerald-100 rounded-full blur-3xl opacity-60 soft-float"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-sky-100 rounded-full blur-3xl opacity-60 soft-float" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-fade-in">
          <div className="inline-block px-4 py-1 bg-emerald-100 text-emerald-700 rounded-full font-bold text-sm tracking-wide">
            DESENVOLVIMENTO COGNITIVO, EMOCIONAL E SOCIAL
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-emerald-900 leading-tight">
            Evolução, Autonomia e <span className="text-emerald-500">Qualidade de Vida</span> para Todas as <span className="text-sky-500">Idades</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
            O <strong>Espaço de Aprendizagem & Desenvolvimento Humano</strong> é um ambiente multidisciplinar preparado para acolher, estimular e desenvolver crianças, adolescentes, adultos, idosos e famílias.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="https://wa.me/5511949494368" 
              target="_blank"
              className="flex items-center justify-center gap-2 bg-emerald-500 text-white px-8 py-4 rounded-3xl font-bold text-lg hover:bg-emerald-600 transition shadow-2xl shadow-emerald-200 group"
            >
              Quero Agendar uma Avaliação
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </a>
            <a 
              href="#servicos" 
              className="flex items-center justify-center gap-2 border-2 border-emerald-200 text-emerald-800 px-8 py-4 rounded-3xl font-bold text-lg hover:bg-emerald-50 transition"
            >
              Ver Especialidades
            </a>
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <div className="flex -space-x-2">
              {[1,2,3,4].map(i => (
                <img key={i} src={`./avatar_${i}.jpg`} className="w-8 h-8 rounded-full border-2 border-white" alt="Equipe" />
              ))}
            </div>
            <span>Atendimento integrado e humanizado em Cotia</span>
          </div>
        </div>
        <div className="relative">
          <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl">
            <img 
              src="./hero_autism.png" 
              alt="Atendimento acolhedor e multidisciplinar" 
              className="w-full h-80 md:h-[500px] object-cover"
            />
          </div>
          {/* Floating cards */}
          <div 
            style={{ ...positions[0], transitionDelay: '0ms' }}
            className={`absolute bg-white py-3 px-5 rounded-3xl shadow-xl z-20 flex items-center gap-3 transition-all duration-500 transform ${visible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2'}`}
          >
            <div className="bg-sky-100 p-2 rounded-2xl text-sky-600">
              <Icon1 className="w-6 h-6" />
            </div>
            <div>
              <p className="font-bold text-sm text-gray-800">{c1.label}</p>
              <p className="text-xs text-gray-500">{c1.desc}</p>
            </div>
          </div>

          <div 
            style={{ ...positions[1], transitionDelay: '100ms' }}
            className={`absolute bg-white py-3 px-5 rounded-3xl shadow-xl z-20 flex items-center gap-3 transition-all duration-500 transform ${visible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2'}`}
          >
            <div className="bg-emerald-100 p-2 rounded-2xl text-emerald-600">
              <Icon2 className="w-6 h-6" />
            </div>
            <div>
              <p className="font-bold text-sm text-gray-800">{c2.label}</p>
              <p className="text-xs text-gray-500">{c2.desc}</p>
            </div>
          </div>

          <div 
            style={{ ...positions[2], transitionDelay: '200ms' }}
            className={`absolute bg-white py-3 px-5 rounded-3xl shadow-xl z-20 flex items-center gap-3 transition-all duration-500 transform ${visible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2'}`}
          >
            <div className="bg-amber-100 p-2 rounded-2xl text-amber-600">
              <Icon3 className="w-6 h-6" />
            </div>
            <div>
              <p className="font-bold text-sm text-gray-800">{c3.label}</p>
              <p className="text-xs text-gray-500">{c3.desc}</p>
            </div>
          </div>

          <div 
            style={{ ...positions[3], transitionDelay: '300ms' }}
            className={`absolute bg-white py-3 px-5 rounded-3xl shadow-xl z-20 flex items-center gap-3 transition-all duration-500 transform ${visible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2'}`}
          >
            <div className="bg-rose-100 p-2 rounded-2xl text-rose-600">
              <Icon4 className="w-6 h-6" />
            </div>
            <div>
              <p className="font-bold text-sm text-gray-800">{c4.label}</p>
              <p className="text-xs text-gray-500">{c4.desc}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

const DifferentialsSection = () => (
  <section className="py-24 bg-sky-50" id="diferenciais">
    <div className="container mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-6">Diferenciais do Nosso Espaço</h2>
        <p className="text-lg text-gray-600">Um ambiente preparado para acolher, estimular e desenvolver, promovendo segurança emocional, aprendizado e bem-estar.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {[
          { icon: <Users className="w-6 h-6" />, title: "Atendimento Multidisciplinar", desc: "Integração de diferentes especialidades terapêuticas e educacionais." },
          { icon: <Heart className="w-6 h-6" />, title: "Ambiente Acolhedor", desc: "Estrutura familiar pensada para o aconchego e segurança emocional." },
          { icon: <Smile className="w-6 h-6" />, title: "Plano Individualizado", desc: "Proposta terapêutica desenhada para a singularidade de cada pessoa." },
          { icon: <Sparkles className="w-6 h-6" />, title: "Desenvolvimento Integral", desc: "Foco no amadurecimento cognitivo, social e emocional." },
          { icon: <Star className="w-6 h-6" />, title: "Equipe Especializada", desc: "Profissionais qualificados em constante evolução profissional." },
        ].map((item, idx) => (
          <div key={idx} className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border-b-4 border-emerald-300 flex flex-col justify-between">
            <div>
              <div className="text-emerald-600 mb-4 bg-emerald-50 w-12 h-12 flex items-center justify-center rounded-xl">{item.icon}</div>
              <h3 className="text-lg font-bold text-emerald-900 mb-2">{item.title}</h3>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mt-2">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const categories = [
    {
      title: "Aprendizagem e Desenvolvimento",
      icon: <Brain className="w-6 h-6" />,
      items: [
        "Psicopedagogia clínica e institutional",
        "Neuropsicopedagogia clínica e institucional",
        "Reforço escolar especializado",
        "Tratamento de dificuldades de aprendizagem",
        "Estimulação cognitiva global"
      ]
    },
    {
      title: "Autismo e Neurodesenvolvimento",
      icon: <Puzzle className="w-6 h-6" />,
      items: [
        "Psicologia voltada para o autismo",
        "Fisioterapia voltada para o autismo",
        "Treino de habilidades sociais",
        "Desenvolvimento e integração sensorial"
      ]
    },
    {
      title: "Neuropsicologia",
      icon: <Activity className="w-6 h-6" />,
      items: [
        "Atendimento especializado a Bebês",
        "Atendimento especializado a Crianças",
        "Atendimento especializado a Adolescentes",
        "Atendimento especializado a Adultos",
        "Atendimento especializado a Idosos",
        "Avaliação e reabilitação cognitiva completa"
      ]
    },
    {
      title: "Arte e Musicalização",
      icon: <Palette className="w-6 h-6" />,
      items: [
        "Aulas e sessões de Musicalização",
        "Oficinas de Arte, desenho e pintura",
        "Espaços de expressão criativa livre"
      ]
    },
    {
      title: "Saúde Emocional",
      icon: <Heart className="w-6 h-6" />,
      items: [
        "Sessões de Psicanálise",
        "Sessões de Psicoterapia individual",
        "Orientação e suporte familiar contínuo"
      ]
    },
    {
      title: "Apoio Psicossocial",
      icon: <Shield className="w-6 h-6" />,
      items: [
        "Atendimento focado em situações de violência doméstica",
        "Escuta qualificada e orientação social especializada"
      ]
    }
  ];

  const activeCategory = activeTab >= 0 ? categories[activeTab] : categories[0];

  const handleTabClick = (idx: number, e: React.MouseEvent<HTMLButtonElement>) => {
    const isOpen = activeTab === idx;
    setActiveTab(isOpen ? -1 : idx);

    if (!isOpen) {
      const button = e.currentTarget;
      const container = button.parentElement;
      if (container) {
        setTimeout(() => {
          const rect = container.getBoundingClientRect();
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          const targetY = rect.top + scrollTop - 100; // 100px offset for fixed navbar
          window.scrollTo({
            top: targetY,
            behavior: 'smooth'
          });
        }, 320); // 320ms delay is perfect to wait for the 300ms transition to stabilize
      }
    }
  };

  return (
    <section id="servicos" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-6">Nossas Especialidades e Serviços</h2>
          <p className="text-lg text-gray-600">Uma equipe integrada que oferece suporte completo para todas as fases da vida, do neurodesenvolvimento infantil ao acolhimento de idosos.</p>
        </div>
        
        {/* Mobile Accordion Navigation */}
        <div className="lg:hidden space-y-4">
          {categories.map((cat, idx) => {
            const isOpen = activeTab === idx;
            return (
              <div 
                key={idx} 
                className={`border rounded-[2rem] overflow-hidden transition-all duration-300 ${
                  isOpen 
                    ? 'border-emerald-200 bg-emerald-50/20 shadow-md' 
                    : 'border-emerald-100 bg-white hover:bg-emerald-50/10'
                }`}
              >
                <button
                  onClick={(e) => handleTabClick(idx, e)}
                  className="w-full flex items-center justify-between p-6 font-bold text-left transition-colors text-emerald-900"
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-2.5 rounded-xl transition-colors ${isOpen ? 'bg-emerald-500 text-white' : 'bg-emerald-100 text-emerald-700'}`}>
                      {cat.icon}
                    </div>
                    <span className="text-base font-bold">{cat.title}</span>
                  </div>
                  <ChevronDown className={`w-6 h-6 text-emerald-600 transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-[800px] opacity-100 border-t border-emerald-100/50' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-6 space-y-6">
                    <ul className="space-y-4">
                      {cat.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex gap-3 items-start text-gray-700 text-base">
                          <CheckCircle className="text-emerald-500 w-5 h-5 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="pt-6 border-t border-emerald-100 flex flex-col gap-4 items-stretch">
                      <div className="text-gray-500 text-sm text-center">Quer saber mais sobre estas terapias?</div>
                      <a
                        href="https://wa.me/5511949494368"
                        target="_blank"
                        className="flex items-center justify-center gap-2 bg-sky-500 text-white px-6 py-3 rounded-full font-bold hover:bg-sky-600 transition shadow-lg shadow-sky-100"
                      >
                        Falar com Especialista
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Desktop Sidebar + Card Layout */}
        <div className="hidden lg:flex gap-12 items-start">
          {/* Tabs Column */}
          <div className="w-1/3 flex flex-col gap-3">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-4 px-6 py-4 rounded-2xl font-bold text-left transition-all duration-300 ${
                  activeTab === idx 
                    ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-100 translate-x-2' 
                    : 'bg-emerald-50/50 text-emerald-800 hover:bg-emerald-50'
                }`}
              >
                <div className={`p-2 rounded-xl transition-colors ${activeTab === idx ? 'bg-white/20' : 'bg-emerald-100 text-emerald-700'}`}>
                  {cat.icon}
                </div>
                <span className="text-base">{cat.title}</span>
              </button>
            ))}
          </div>

          {/* Details Content Card */}
          <div className="w-2/3 bg-emerald-50/30 border border-emerald-100 p-12 rounded-[2.5rem] relative min-h-[380px] flex flex-col justify-between">
            <div className="animate-fade-in" key={activeTab}>
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-emerald-100 text-emerald-700 rounded-2xl">
                  {activeCategory.icon}
                </div>
                <h3 className="text-2xl font-bold text-emerald-900">{activeCategory.title}</h3>
              </div>
              <ul className="space-y-4">
                {activeCategory.items.map((item, idx) => (
                  <li key={idx} className="flex gap-3 items-start text-gray-700 text-lg">
                    <CheckCircle className="text-emerald-500 w-6 h-6 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-8 border-t border-emerald-100 flex flex-row gap-4 items-center justify-between">
              <span className="text-gray-500 text-sm">Quer saber mais sobre estas terapias?</span>
              <a
                href="https://wa.me/5511949494368"
                target="_blank"
                className="flex items-center gap-2 bg-sky-500 text-white px-6 py-3 rounded-full font-bold hover:bg-sky-600 transition shadow-lg shadow-sky-100"
              >
                Falar com Especialista
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const HowItWorksSection = () => (
  <section className="py-24 bg-sky-50/50">
    <div className="container mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-6">Como Funciona o Acompanhamento</h2>
        <p className="text-lg text-gray-600">Um processo estruturado de forma ética e profissional para garantir a melhor evolução de cada paciente.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
        {[
          { step: "01", title: "Agendamento", desc: "Entre em contato via WhatsApp para alinhar o melhor horário e tirar dúvidas preliminares." },
          { step: "02", title: "Avaliação Inicial", desc: "Entendimento aprofundado do histórico cognitivo, emocional e do desenvolvimento." },
          { step: "03", title: "Plano Personalizado", desc: "Construção de uma rota de intervenção integrada adaptada às necessidades específicas." },
          { step: "04", title: "Acompanhamento Contínuo", desc: "Sessões periódicas, orientação familiar e contato com outros profissionais se necessário." },
        ].map((item, idx) => (
          <div key={idx} className="bg-white p-8 rounded-3xl shadow-md border border-sky-100 group hover:border-emerald-300 transition-all hover:-translate-y-1 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start gap-4 mb-4">
                <h3 className="text-xl font-bold text-emerald-900">{item.title}</h3>
                <span className="text-3xl font-black text-sky-200 group-hover:text-emerald-300 transition-colors duration-300 shrink-0">{item.step}</span>
              </div>
              <p className="text-gray-500 leading-relaxed text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const AboutSection = () => (
  <section id="sobre" className="py-24 bg-emerald-50">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
      <div className="md:w-2/5">
        <div className="relative">
          <div className="absolute -inset-4 bg-emerald-200 rounded-[4rem] rotate-3 opacity-50"></div>
          <img 
            src="./foto_aline_almeida.jpg" 
            alt="Aline Almeida" 
            className="relative rounded-[4rem] shadow-2xl z-10 w-full object-cover aspect-[4/5]"
          />
        </div>
      </div>
      <div className="md:w-3/5 space-y-6">
        <div className="flex items-center gap-3 text-emerald-600 font-bold uppercase tracking-wider text-sm">
          <div className="w-12 h-[2px] bg-emerald-600"></div>
          Conheça a Especialista
        </div>
        <h2 className="text-4xl font-bold text-emerald-900 leading-tight">
          Aline Almeida <br />
          <span className="text-emerald-500 font-normal text-xl block mt-2">
            Pedagoga • Psicopedagoga • Neuropsicopedagoga Clínica e Institucional
          </span>
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Profissional dedicada ao desenvolvimento humano, à aprendizagem e à saúde emocional. Minha atuação integra educação e terapias de forma acolhedora, proporcionando um olhar altamente individualizado e empático a cada caso.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Com ampla formação clínica e institucional, conduzo o <strong>Espaço de Aprendizagem & Desenvolvimento Humano</strong> para acolher não apenas crianças, mas pessoas de todas as idades (incluindo adultos e idosos) que buscam desenvolvimento, reabilitação cognitiva, autonomia e qualidade de vida.
        </p>
        <div className="grid grid-cols-2 gap-6 pt-6">
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-emerald-100">
            <p className="text-emerald-600 font-bold text-lg mb-1">Olhar Individualizado</p>
            <p className="text-gray-500 text-sm">Avaliação e terapias personalizadas</p>
          </div>
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-emerald-100">
            <p className="text-emerald-600 font-bold text-lg mb-1">Educação & Terapias</p>
            <p className="text-gray-500 text-sm">Atuação integrada e acolhedora</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer id="contato" className="bg-emerald-900 text-white pt-24 pb-12">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-[12rem_1fr_1fr_1fr_4rem] gap-12 mb-20 items-start">
        {/* Coluna 1: Logo */}
        <div className="flex justify-start w-full">
          <img src="./espaco_adh.svg" className="w-[9rem] object-contain" alt="Logo" />
        </div>

        {/* Coluna 2: Texto e descritivo */}
        <div className="space-y-4">
          <h4 className="font-bold text-xl leading-tight">Espaço de Aprendizagem e Desenvolvimento Humano</h4>
          <p className="text-emerald-100 text-base leading-relaxed">
            Ambiente multidisciplinar dedicado ao desenvolvimento cognitivo, emocional e social para promover autonomia e qualidade de vida.
          </p>
        </div>

        {/* Coluna 3: Localização */}
        <div className="space-y-6">
          <h4 className="font-bold text-xl">Localização</h4>
          <ul className="space-y-4 text-emerald-100">
            <li className="flex gap-3">
              <MapPin className="w-5 h-5 shrink-0 text-emerald-400" />
              <span className="text-base">R. Padre Luiz Martini, 75 - Vila Sao Joaquim, Cotia - SP, 06700-467</span>
            </li>
            <li className="flex gap-3">
              <Phone className="w-5 h-5 shrink-0 text-emerald-400" />
              <span className="text-base">(11) 94949-4368</span>
            </li>
          </ul>
        </div>

        {/* Coluna 4: Horários */}
        <div className="space-y-6">
          <div>
            <h4 className="font-bold text-xl mb-4">Horários</h4>
            <div className="flex gap-3 text-emerald-100">
              <Clock className="w-5 h-5 shrink-0 text-emerald-400" />
              <div>
                <p className="text-base font-medium">Segunda a Sábado</p>
                <p className="text-sm text-emerald-300">Com horários agendados</p>
              </div>
            </div>
          </div>
        </div>

        {/* Coluna 5: Redes Sociais */}
        <div className="flex flex-row md:flex-col gap-4 items-center justify-start md:justify-center">
          <a href="https://www.instagram.com/espaco_de_aprendizagem_e_desen" target="_blank" className="p-3 bg-emerald-800 rounded-full hover:bg-emerald-700 transition" title="Instagram">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="https://maps.app.goo.gl/7TCULuwgKj2kBXZu8" target="_blank" className="p-3 bg-emerald-800 rounded-full hover:bg-emerald-700 transition" title="Como chegar (Google Maps)">
            <MapPin className="w-6 h-6" />
          </a>
        </div>
      </div>
      <div className="border-t border-emerald-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-emerald-300 gap-4 text-center">
        <p>&copy; 2024 Espaço de Aprendizagem & Desenvolvimento Humano. Todos os direitos reservados.</p>
        <p>Desenvolvido pela <a href="https://relvidigital.com.br" target="_blank" className="underline hover:text-white transition">Relvi Digital</a> com ❤️ para transformar vidas.</p>
      </div>
    </div>
  </footer>
);

const FloatingWhatsApp = () => (
  <a 
    href="https://wa.me/5511949494368" 
    target="_blank" 
    className="fixed bottom-8 right-8 z-[100] bg-green-500 text-white p-5 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all animate-pulse"
    title="Fale conosco no WhatsApp"
  >
    <MessageCircle className="w-8 h-8 fill-current" />
  </a>
);

export default function App() {
  useEffect(() => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
      preloader.style.opacity = '0';
      preloader.style.visibility = 'hidden';
      const timeout = setTimeout(() => {
        preloader.remove();
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white selection:bg-emerald-200 selection:text-emerald-900">
      <Navbar />
      <Hero />
      <ScrollReveal>
        <DifferentialsSection />
      </ScrollReveal>
      <ScrollReveal>
        <ServicesSection />
      </ScrollReveal>
      <ScrollReveal>
        <HowItWorksSection />
      </ScrollReveal>
      <ScrollReveal>
        <AboutSection />
      </ScrollReveal>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
