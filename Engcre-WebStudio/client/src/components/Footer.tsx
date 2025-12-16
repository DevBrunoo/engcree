import { Code2, Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black/40 border-t border-white/5 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          <div className="flex items-center gap-2">
            <Code2 className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold font-heading text-white">
              EngCre
            </span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Instagram className="w-6 h-6" /></a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Linkedin className="w-6 h-6" /></a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Twitter className="w-6 h-6" /></a>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} EngCre - Engenharia Criativa. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
