import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Monitor, Smartphone, Globe } from "lucide-react";
import heroBg from "@assets/generated_images/abstract_blue_digital_engineering_background.png";

export function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Digital Background" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-semibold tracking-wide mb-6">
            AGÊNCIA DE ENGENHARIA CRIATIVA
          </div>
          <h1 className="text-5xl md:text-7xl font-bold font-heading leading-tight text-white mb-6">
            Transformamos <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 text-glow">Ideias</span> em Realidade Digital
          </h1>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-xl">
            Sites de alta performance, sistemas web complexos e design premiado. 
            Engenharia de software com foco em SEO, segurança e experiência do usuário.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-primary hover:bg-blue-600 text-white rounded-full text-base px-8 h-12">
              Começar Projeto <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-full text-base px-8 h-12">
              Ver Vitrine
            </Button>
          </div>
          
          <div className="mt-12 flex items-center gap-8 text-gray-400">
            <div className="flex items-center gap-2">
              <Monitor className="w-5 h-5 text-blue-400" />
              <span className="text-sm">Web Design</span>
            </div>
            <div className="flex items-center gap-2">
              <Smartphone className="w-5 h-5 text-blue-400" />
              <span className="text-sm">Responsivo</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-blue-400" />
              <span className="text-sm">SEO Otimizado</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:block relative"
        >
          {/* Abstract 3D-like elements representation */}
          <div className="relative w-full h-[500px] rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden p-6 shadow-2xl shadow-primary/20">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
             
             {/* Code mock representation */}
             <div className="font-mono text-sm text-blue-200/60 leading-relaxed overflow-hidden">
                <p><span className="text-purple-400">class</span> <span className="text-yellow-300">EngCre</span> <span className="text-purple-400">extends</span> <span className="text-yellow-300">Agency</span> {'{'}</p>
                <p className="pl-4"><span className="text-purple-400">constructor</span>() {'{'}</p>
                <p className="pl-8">this.stack = ['React', 'Next.js', 'Laravel', 'Django'];</p>
                <p className="pl-8">this.focus = ['UX/UI', 'Performance', 'SEO', 'Security'];</p>
                <p className="pl-8">this.mission = 'Create Digital Excellence';</p>
                <p className="pl-4">{'}'}</p>
                <br/>
                <p className="pl-4"><span className="text-blue-400">deploySolution</span>(client) {'{'}</p>
                <p className="pl-8"><span className="text-purple-400">return</span> new Website({'{'}</p>
                <p className="pl-12">quality: 'Premium',</p>
                <p className="pl-12">speed: 'Lightning',</p>
                <p className="pl-12">design: 'Award Winning'</p>
                <p className="pl-8">{'}'});</p>
                <p className="pl-4">{'}'}</p>
                <p>{'}'}</p>
             </div>

             <div className="absolute bottom-6 right-6 p-4 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-lg">
                <div className="text-xs font-medium opacity-80">Projetos Entregues</div>
                <div className="text-3xl font-bold mt-1">150+</div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
