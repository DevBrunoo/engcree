import { CheckCircle2 } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 bg-card/30">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Sobre a EngCre</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            A <strong>EngCre (Engenharia Criativa)</strong> nasceu da fusão entre a precisão da engenharia de software e a liberdade do design criativo. 
          </p>
          <p className="text-gray-400 leading-relaxed mb-8">
            Nossa missão é elevar o padrão da web brasileira. Não criamos apenas sites; construímos ativos digitais que geram valor, atraem leads e posicionam marcas como líderes em seus segmentos.
          </p>
          
          <div className="space-y-4">
            {[
              "Equipe especializada em UI/UX Design premiado",
              "Foco obsessivo em Performance e SEO",
              "Segurança avançada em cada linha de código",
              "Suporte contínuo e evolutivo"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                <span className="text-gray-200">{item}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl opacity-20 blur-2xl"></div>
          <div className="relative bg-background border border-white/10 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-white mb-6">Por que escolher a EngCre?</h3>
            <div className="space-y-8">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-gray-400">Comprometimento com Prazos</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">TOP 3 com o melhor do SEO</div>
                <div className="text-gray-400">Colocamos clientes no topo das buscas</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">Suporte 24 horas</div>
                <div className="text-gray-400">Monitoramento de Sistemas</div>
              </div>
                <div>
                <div className="text-4xl font-bold text-primary mb-2">Rapido e responsivo</div>
                <div className="text-gray-400">Sites mais velozes, para todos os dispositivos</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
