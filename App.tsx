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
  Activity
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

// Sub-components defined outside for performance
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <img 
            src="./espaco_adh.svg" 
            alt="Espaço de Aprendizagem & Desenvolvimento Humano" 
            className={`transition-all duration-300 w-auto object-contain ${isScrolled ? 'h-14' : 'h-20'}`}
          />
        </a>
        <div className="flex gap-4 md:gap-8 items-center">
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
    </nav>
  );
};

const Hero = () => (
  <header className="relative min-h-screen flex items-center pt-24 overflow-hidden">
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
              <img key={i} src={`https://picsum.photos/40/40?random=${i}`} className="w-8 h-8 rounded-full border-2 border-white" alt="Equipe" />
            ))}
          </div>
          <span>Atendimento integrado e humanizado em Cotia</span>
        </div>
      </div>
      <div className="relative">
        <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80" 
            alt="Atendimento acolhedor e multidisciplinar" 
            className="w-full h-80 md:h-[500px] object-cover"
          />
        </div>
        {/* Floating cards */}
        <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl z-20 flex items-center gap-4 animate-bounce-slow">
          <div className="bg-sky-100 p-3 rounded-2xl text-sky-600">
            <Smile className="w-8 h-8" />
          </div>
          <div>
            <p className="font-bold text-gray-800">Acolhimento</p>
            <p className="text-xs text-gray-500">Olhar Humano e Individualizado</p>
          </div>
        </div>
        <div className="absolute top-10 -right-6 bg-white p-4 rounded-3xl shadow-xl z-20 flex items-center gap-3 animate-pulse">
          <div className="bg-amber-100 p-2 rounded-xl text-amber-600">
            <Star className="w-6 h-6 fill-current" />
          </div>
          <p className="font-bold text-sm text-gray-800">Multidisciplinar</p>
        </div>
      </div>
    </div>
  </header>
);

const DifferentialsSection = () => (
  <section className="py-24 bg-sky-50" id="diferenciais">
    <div className="container mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-6">Diferenciais do Nosso Espaço</h2>
        <p className="text-lg text-gray-600">Um ambiente preparado para acolher, estimular e desenvolver, promovendo segurança emocional, aprendizado e bem-estar.</p>
      </div>
      <div className="grid md:grid-cols-5 gap-6">
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
        "Psicopedagogia clínica e institucional",
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

  return (
    <section id="servicos" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-6">Nossas Especialidades e Serviços</h2>
          <p className="text-lg text-gray-600">Uma equipe integrada que oferece suporte completo para todas as fases da vida, do neurodesenvolvimento infantil ao acolhimento de idosos.</p>
        </div>
        
        {/* Responsive Grid/List of Pillars */}
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Tabs Column */}
          <div className="w-full lg:w-1/3 flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 scrollbar-none">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-4 px-6 py-4 rounded-2xl font-bold text-left transition-all duration-300 shrink-0 lg:shrink-1 ${
                  activeTab === idx 
                    ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-100 translate-x-2' 
                    : 'bg-emerald-50/50 text-emerald-800 hover:bg-emerald-50'
                }`}
              >
                <div className={`p-2 rounded-xl transition-colors ${activeTab === idx ? 'bg-white/20' : 'bg-emerald-100 text-emerald-700'}`}>
                  {cat.icon}
                </div>
                <span className="text-sm md:text-base">{cat.title}</span>
              </button>
            ))}
          </div>

          {/* Details Content Card */}
          <div className="w-full lg:w-2/3 bg-emerald-50/30 border border-emerald-100 p-8 md:p-12 rounded-[2.5rem] relative min-h-[380px] flex flex-col justify-between">
            <div className="animate-fade-in" key={activeTab}>
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-emerald-100 text-emerald-700 rounded-2xl">
                  {categories[activeTab].icon}
                </div>
                <h3 className="text-2xl font-bold text-emerald-900">{categories[activeTab].title}</h3>
              </div>
              <ul className="space-y-4">
                {categories[activeTab].items.map((item, idx) => (
                  <li key={idx} className="flex gap-3 items-start text-gray-700 text-lg">
                    <CheckCircle className="text-emerald-500 w-6 h-6 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-8 border-t border-emerald-100 flex flex-col sm:flex-row gap-4 items-center justify-between">
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
      <div className="grid md:grid-cols-4 gap-8 relative">
        {[
          { step: "01", title: "Agendamento", desc: "Entre em contato via WhatsApp para alinhar o melhor horário e tirar dúvidas preliminares." },
          { step: "02", title: "Avaliação Inicial", desc: "Entendimento aprofundado do histórico cognitivo, emocional e do desenvolvimento." },
          { step: "03", title: "Plano Personalizado", desc: "Construção de uma rota de intervenção integrada adaptada às necessidades específicas." },
          { step: "04", title: "Acompanhamento Contínuo", desc: "Sessões periódicas, orientação familiar e contato com outros profissionais se necessário." },
        ].map((item, idx) => (
          <div key={idx} className="bg-white p-8 rounded-3xl shadow-md border border-sky-100 relative group hover:border-emerald-300 transition duration-300">
            <span className="text-5xl font-black text-sky-100 group-hover:text-emerald-100 transition absolute top-4 right-6">{item.step}</span>
            <h3 className="text-xl font-bold text-emerald-900 mb-3 relative z-10">{item.title}</h3>
            <p className="text-gray-500 leading-relaxed text-sm">{item.desc}</p>
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
      <div className="grid md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-2 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <img src="./espaco_adh.svg" className="w-[60%] bg-white p-3 rounded-2xl object-contain" alt="Logo" />
            <span className="font-bold text-lg md:text-xl leading-tight">Espaço de Aprendizagem e Desenvolvimento Humano</span>
          </div>
          <p className="text-emerald-100 text-lg max-w-sm">
            Ambiente multidisciplinar dedicado ao desenvolvimento cognitivo, emocional e social para promover autonomia e qualidade de vida.
          </p>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/espaco_de_aprendizagem_e_desen" target="_blank" className="p-3 bg-emerald-800 rounded-full hover:bg-emerald-700 transition">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="https://maps.app.goo.gl/7TCULuwgKj2kBXZu8" target="_blank" className="p-3 bg-emerald-800 rounded-full hover:bg-emerald-700 transition">
              <MapPin className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-xl mb-6">Localização</h4>
          <ul className="space-y-4 text-emerald-100">
            <li className="flex gap-3">
              <MapPin className="w-5 h-5 shrink-0 text-emerald-400" />
              <span>R. Padre Luiz Martini, 75 - Vila Sao Joaquim, Cotia - SP, 06700-467</span>
            </li>
            <li className="flex gap-3">
              <Phone className="w-5 h-5 shrink-0 text-emerald-400" />
              <span>(11) 94949-4368</span>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-xl mb-6">Horários</h4>
          <ul className="space-y-4 text-emerald-100">
            <li className="flex gap-3">
              <Clock className="w-5 h-5 shrink-0 text-emerald-400" />
              <div>
                <p>Segunda a Sábado</p>
                <p className="text-sm text-emerald-300">Com horários agendados</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-emerald-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-emerald-300 gap-4 text-center">
        <p>&copy; 2024 Espaço de Aprendizagem & Desenvolvimento Humano. Todos os direitos reservados.</p>
        <p>Desenvolvido com ❤️ para transformar vidas.</p>
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
