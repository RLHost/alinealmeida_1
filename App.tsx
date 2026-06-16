
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
  MessageCircle
} from 'lucide-react';

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
            alt="Espaço de Aprendizagem - Aline Almeida" 
            className={`transition-all duration-300 w-auto object-contain ${isScrolled ? 'h-14' : 'h-20'}`}
          />
        </a>
        <div className="flex gap-4 md:gap-8 items-center">
          <a href="#solucoes" className="text-emerald-900 font-medium hover:text-emerald-600 transition">Serviços</a>
          <a href="#sobre" className="text-emerald-900 font-medium hover:text-emerald-600 transition">Sobre</a>
          <a href="#contato" className="bg-emerald-500 text-white px-5 py-2 rounded-full font-bold hover:bg-emerald-600 transition shadow-lg shadow-emerald-200">Agendar</a>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => (
  <header className="relative min-h-screen flex items-center pt-20 overflow-hidden">
    {/* Animated Background Elements */}
    <div className="absolute top-20 right-10 w-64 h-64 bg-emerald-100 rounded-full blur-3xl opacity-60 soft-float"></div>
    <div className="absolute bottom-10 left-10 w-80 h-80 bg-sky-100 rounded-full blur-3xl opacity-60 soft-float" style={{ animationDelay: '2s' }}></div>

    <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
      <div className="space-y-8 animate-fade-in">
        <div className="inline-block px-4 py-1 bg-emerald-100 text-emerald-700 rounded-full font-bold text-sm tracking-wide">
          NEUROPSICOPEDAGOGIA CLÍNICA
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-emerald-900 leading-tight">
          Transforme a <span className="text-emerald-500">Dificuldade</span> em <span className="text-sky-500">Descoberta</span>
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
          Seu filho merece aprender com leveza. No Espaço de Aprendizagem, utilizamos a ciência e o afeto para destravar o potencial cognitivo e emocional de cada criança.
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
            href="#solucoes" 
            className="flex items-center justify-center gap-2 border-2 border-emerald-200 text-emerald-800 px-8 py-4 rounded-3xl font-bold text-lg hover:bg-emerald-50 transition"
          >
            Conhecer Método
          </a>
        </div>
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <div className="flex -space-x-2">
            {[1,2,3,4].map(i => (
              <img key={i} src={`https://picsum.photos/40/40?random=${i}`} className="w-8 h-8 rounded-full border-2 border-white" alt="Client" />
            ))}
          </div>
          <span>+200 famílias transformadas em Cotia</span>
        </div>
      </div>
      <div className="relative">
        <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1503454537199-53f8a098362b?auto=format&fit=crop&w=800&q=80" 
            alt="Criança aprendendo feliz" 
            className="w-full h-full object-cover"
          />
        </div>
        {/* Floating cards */}
        <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl z-20 flex items-center gap-4 animate-bounce-slow">
          <div className="bg-sky-100 p-3 rounded-2xl text-sky-600">
            <Smile className="w-8 h-8" />
          </div>
          <div>
            <p className="font-bold text-gray-800">Autoestima</p>
            <p className="text-xs text-gray-500">Foco no Bem-estar</p>
          </div>
        </div>
        <div className="absolute top-10 -right-6 bg-white p-4 rounded-3xl shadow-xl z-20 flex items-center gap-3 animate-pulse">
          <div className="bg-amber-100 p-2 rounded-xl text-amber-600">
            <Star className="w-6 h-6 fill-current" />
          </div>
          <p className="font-bold text-sm text-gray-800">Especialista em TDAH</p>
        </div>
      </div>
    </div>
  </header>
);

const PainSection = () => (
  <section className="py-24 bg-sky-50">
    <div className="container mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-6">Você já sentiu que algo está impedindo seu filho de brilhar?</h2>
        <p className="text-lg text-gray-600">As dificuldades na escola raramente são "preguiça". Quase sempre são barreiras cognitivas não identificadas que geram sofrimento e frustração.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { icon: <Clock className="w-8 h-8" />, title: "Dificuldade de Foco", desc: "Ele se perde em tarefas simples ou demora horas para terminar a lição de casa?" },
          { icon: <BookOpen className="w-8 h-8" />, title: "Lentidão na Leitura", desc: "A alfabetização parece um processo doloroso e cheio de resistência?" },
          { icon: <Heart className="w-8 h-8" />, title: "Desmotivação Escolar", desc: "Seu filho chora para ir à escola ou diz que 'não é inteligente o suficiente'?" },
        ].map((item, idx) => (
          <div key={idx} className="bg-white p-10 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 border-b-4 border-sky-200">
            <div className="text-sky-500 mb-6 bg-sky-50 w-16 h-16 flex items-center justify-center rounded-2xl">{item.icon}</div>
            <h3 className="text-xl font-bold text-emerald-900 mb-4">{item.title}</h3>
            <p className="text-gray-600 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const SolutionSection = () => (
  <section id="solucoes" className="py-24">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row gap-16 items-center">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold text-emerald-900 mb-8">Nossa Missão é <span className="text-emerald-500">Recuperar o Prazer</span> de Aprender</h2>
          <div className="space-y-6">
            {[
              { title: "Avaliação Neuropsicopedagógica", desc: "Identificamos como o cérebro do seu filho processa a informação e onde estão as barreiras." },
              { title: "Intervenção Individualizada", desc: "Plano terapêutico focado nas dificuldades específicas (Leitura, Escrita, Raciocínio)." },
              { title: "Apoio às Funções Executivas", desc: "Trabalhamos organização, memória de trabalho e controle de impulsos." },
              { title: "Parceria com a Escola", desc: "Alinhamos estratégias com os professores para um suporte 360 graus." },
            ].map((s, idx) => (
              <div key={idx} className="flex gap-4 group">
                <div className="mt-1"><CheckCircle className="text-emerald-500 w-6 h-6 group-hover:scale-125 transition" /></div>
                <div>
                  <h4 className="font-bold text-emerald-800 text-lg">{s.title}</h4>
                  <p className="text-gray-600">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="mt-10 bg-sky-500 text-white px-10 py-4 rounded-full font-bold hover:bg-sky-600 transition shadow-xl shadow-sky-100">
            Falar com a Especialista
          </button>
        </div>
        <div className="md:w-1/2 grid grid-cols-2 gap-4">
          <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=400&q=80" className="rounded-3xl shadow-lg mt-8" alt="Terapia" />
          <img src="https://images.unsplash.com/photo-1491308323061-f07b6f3e4624?auto=format&fit=crop&w=400&q=80" className="rounded-3xl shadow-lg" alt="Criança brincando" />
          <img src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=400&q=80" className="rounded-3xl shadow-lg" alt="Aprendizado" />
          <img src="https://images.unsplash.com/photo-1545630593-c15c2560910e?auto=format&fit=crop&w=400&q=80" className="rounded-3xl shadow-lg -mt-8" alt="Desenvolvimento" />
        </div>
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
            src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&w=800&q=80" 
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
          Olá, eu sou a Aline Almeida. <br />
          <span className="text-emerald-500 font-normal italic">Neuropsicopedagoga apaixonada por potencial humano.</span>
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Com anos de experiência clínica e acadêmica, fundei o Espaço de Aprendizagem para ser um porto seguro onde crianças e adolescentes em Cotia podem encontrar as ferramentas certas para vencer seus desafios escolares.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Acredito que cada mente é única. Meu trabalho não é apenas corrigir "erros", mas construir pontes entre o cérebro da criança e o conhecimento, sempre com foco na saúde emocional.
        </p>
        <div className="grid grid-cols-2 gap-6 pt-6">
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-emerald-100">
            <p className="text-3xl font-bold text-emerald-600 mb-1">+500</p>
            <p className="text-gray-500 text-sm">Avaliações Realizadas</p>
          </div>
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-emerald-100">
            <p className="text-3xl font-bold text-emerald-600 mb-1">Especialista</p>
            <p className="text-gray-500 text-sm">Pós-Graduada em Neuropsicopedagogia</p>
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
          <div className="flex items-center gap-3">
            <div className="bg-white p-2 rounded-full">
              <Brain className="text-emerald-900 w-6 h-6" />
            </div>
            <span className="font-bold text-2xl">Espaço de Aprendizagem</span>
          </div>
          <p className="text-emerald-100 text-lg max-w-sm">
            Cuidando do futuro através do desenvolvimento cognitivo e emocional no presente.
          </p>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/espaco_de_aprendizagem_e_desen?igsh=ZzUza2s1dGJob2w2" target="_blank" className="p-3 bg-emerald-800 rounded-full hover:bg-emerald-700 transition">
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
                <p>Segunda a Sexta</p>
                <p className="text-sm text-emerald-300">08:00 - 18:00</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-emerald-800 pt-8 flex flex-col md:row justify-between items-center text-sm text-emerald-300 gap-4 text-center">
        <p>&copy; 2024 Espaço de Aprendizagem - Aline Almeida. Todos os direitos reservados.</p>
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
      <PainSection />
      <SolutionSection />
      <AboutSection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
