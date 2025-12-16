import { Code, Layout, ShoppingCart, Search, Database, Smartphone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const services = [
  {
    icon: <Layout className="w-10 h-10 text-primary" />,
    title: "Sites Institucionais",
    description: "Websites profissionais para empresas, dentistas, contabilidade e escritórios. Design limpo e autoridade digital.",
  },
  {
    icon: <ShoppingCart className="w-10 h-10 text-primary" />,
    title: "E-commerce & Lojas",
    description: "Venda online com segurança. Integração de pagamentos, gestão de estoque e experiência de compra fluida.",
  },
  {
    icon: <Code className="w-10 h-10 text-primary" />,
    title: "Sistemas Web Customizados",
    description: "Desenvolvimento sob medida em React, Next.js e Laravel para resolver problemas complexos do seu negócio.",
  },
  {
    icon: <Search className="w-10 h-10 text-primary" />,
    title: "SEO & Performance",
    description: "Otimização técnica para aparecer no Google. Velocidade extrema e estrutura preparada para os motores de busca.",
  },
  {
    icon: <Smartphone className="w-10 h-10 text-primary" />,
    title: "Mobile First Design",
    description: "Sites que funcionam perfeitamente em qualquer dispositivo. Responsividade total e experiência tátil.",
  },
  {
    icon: <Database className="w-10 h-10 text-primary" />,
    title: "CMS & Gestão",
    description: "Integração com WordPress, HubSpot ou painéis administrativos personalizados para você gerenciar seu conteúdo.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Nossos Serviços</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Da concepção ao código, entregamos soluções digitais completas que impulsionam seu negócio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-card/50 border-white/5 backdrop-blur-sm card-hover group">
              <CardHeader>
                <div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors">
                  {service.icon}
                </div>
                <CardTitle className="text-xl text-white">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400 text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
