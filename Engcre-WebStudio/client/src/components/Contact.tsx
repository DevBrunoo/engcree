import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Vamos Conversar?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Tem um projeto em mente? Preencha o formulário abaixo e nossa equipe entrará em contato em até 24 horas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="bg-card/50 border-white/10 backdrop-blur-sm">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Email</h3>
                  <p className="text-gray-400">contato@engcre.com.br</p>
                  <p className="text-gray-400">projetos@engcre.com.br</p>
                  <p className="text-gray-400">engcree@gmail.com</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 border-white/10 backdrop-blur-sm">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">WhatsApp</h3>
                  <p className="text-gray-400">(16) 99178-1426</p>
                  <p className="text-sm text-gray-500 mt-1">Atendimento 24h em todos os dias da semana</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-white/10 backdrop-blur-sm">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Localização</h3>
                  <p className="text-gray-400">São Paulo, SP - Brasil</p>
                  <p className="text-gray-400">Atendemos todo o Brasil remotamente</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Form */}
          <div className="bg-card border border-white/10 rounded-2xl p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Nome</label>
                  <Input placeholder="Seu nome" className="bg-background/50 border-white/10 text-white" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Telefone</label>
                  <Input placeholder="(11) 99999-9999" className="bg-background/50 border-white/10 text-white" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Email</label>
                <Input type="email" placeholder="seu@email.com" className="bg-background/50 border-white/10 text-white" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Mensagem</label>
                <Textarea placeholder="Conte sobre seu projeto..." className="bg-background/50 border-white/10 text-white min-h-[120px]" />
              </div>
              <Button className="w-full bg-primary hover:bg-blue-600 text-white h-12 text-base font-semibold">
                Enviar Mensagem <Send className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
