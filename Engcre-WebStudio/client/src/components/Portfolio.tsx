import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import imgEcommerce from "@assets/generated_images/modern_e-commerce_website_mockup.png";
import imgCorporate from "@assets/generated_images/corporate_business_website_mockup.png";
import imgPortfolio from "@assets/generated_images/creative_portfolio_website_mockup.png";
import imgDental from "@assets/generated_images/medical_dental_clinic_website_mockup.png";
import imgMedical from "@assets/generated_images/modern_medical_clinic_website_mockup.png";
import imgLaw from "@assets/generated_images/brazilian_law_firm_website_mockup.png";
import imgPolitics from "@assets/generated_images/brazilian_political_campaign_website_mockup.png";

const projects = [
  {
    title: "Brasil Futuro",
    category: "Política",
    image: imgPolitics,
    tags: ["Campanha Eleitoral", "Doações", "Agenda"],
  },
  {
    title: "Silva & Santos Advogados",
    category: "Direito",
    image: imgLaw,
    tags: ["Advocacia", "Consultoria", "Institucional"],
  },
  {
    title: "NextLevel E-commerce",
    category: "E-commerce",
    image: imgEcommerce,
    tags: ["Next.js", "Stripe", "Tailwind"],
  },
  {
    title: "Vida Plena Clínica",
    category: "Medicina",
    image: imgMedical,
    tags: ["Telemedicina", "Agendamento", "React"],
  },
  {
    title: "Sorriso Ideal",
    category: "Odontologia",
    image: imgDental,
    tags: ["Wordpress", "SEO", "Booking"],
  },
  {
    title: "Apex Financial",
    category: "Corporativo",
    image: imgCorporate,
    tags: ["Finanças", "B2B", "HubSpot"],
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-secondary/20 relative border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <span className="text-primary font-semibold tracking-wider uppercase text-sm">Vitrine de Projetos</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-2">Trabalhos Selecionados</h2>
          </div>
          <div className="text-gray-400 max-w-md text-right md:text-left">
            Uma curadoria de projetos que definem nosso padrão de qualidade e inovação.
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-primary/10 bg-card"
            >
              {/* Image Container with precise aspect ratio to avoid pixel gaps */}
              <div className="aspect-[4/3] w-full overflow-hidden bg-gray-900">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              
              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6 border border-white/10 rounded-xl">
                <span className="text-primary font-medium mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-white mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
                  {project.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="secondary" 
                      className="bg-white/10 backdrop-blur-md text-white border border-white/10 hover:bg-white/20"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
