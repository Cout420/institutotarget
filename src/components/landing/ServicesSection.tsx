import { Card, CardContent, CardDescription, CardTitle, CardHeader } from "@/components/ui/card";
import { HeartPulse, Waves, PersonStanding, Rocket, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: <HeartPulse className="h-10 w-10 text-primary" />,
    title: "Fisioterapia",
    description: "Atendimento especializado e individual para sua reabilitação e qualidade de vida.",
    slug: '/servicos/fisioterapia',
  },
  {
    icon: <Waves className="h-10 w-10 text-primary" />,
    title: "Natação e Hidro",
    description: "Piscina aquecida e tratada com ozônio. Aulas para todas as idades.",
    slug: '/servicos/natacao-hidroginastica',
  },
  {
    icon: <PersonStanding className="h-10 w-10 text-primary" />,
    title: "Pilates",
    description: "Fortaleça seu corpo, melhore sua postura e ganhe flexibilidade.",
    slug: '/servicos/pilates',
  },
  {
    icon: <Rocket className="h-10 w-10 text-primary" />,
    title: "Performance",
    description: "Potencialize seu desempenho e previna lesões com nosso programa para atletas.",
    slug: '/servicos/fisioterapia', // TODO: create a dedicated page for performance
  },
];

export function ServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-headline font-bold">Nossos Pilares de Cuidado</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Oferecemos um cuidado completo e integrado para o seu corpo e mente, com atividades para todas as fases da vida.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Link href={service.slug} key={index} className="block group">
                <Card className="h-full text-center flex flex-col items-center p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-2 hover:shadow-primary/10">
                    <CardHeader className="p-0">
                        <div className="inline-block bg-primary/10 p-4 rounded-full mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                            {service.icon}
                        </div>
                        <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 mt-4 flex-grow">
                        <CardDescription>{service.description}</CardDescription>
                    </CardContent>
                </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
