import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import Link from "next/link";
import { HeartPulse, Waves, PersonStanding, Baby } from "lucide-react";

const services = [
    {
        name: "Fisioterapia Especializada",
        description: "Recuperação, reabilitação e prevenção de lesões com atendimento individualizado e foco total nas suas necessidades.",
        icon: <HeartPulse className="h-10 w-10 text-primary" />,
        image: PlaceHolderImages.find(p => p.id === 'physiotherapy-plan'),
        slug: 'fisioterapia'
    },
    {
        name: "Natação e Hidroginástica",
        description: "Saúde e diversão em nossa piscina aquecida e tratada com ozônio. Aulas para bebês, crianças, adultos e hidroginástica.",
        icon: <Waves className="h-10 w-10 text-primary" />,
        image: PlaceHolderImages.find(p => p.id === 'swimming-plan'),
        slug: 'natacao-hidroginastica'
    },
    {
        name: "Pilates",
        description: "Aumente sua força, flexibilidade e consciência corporal com o método Pilates. Aulas com aparelhos e de solo.",
        icon: <PersonStanding className="h-10 w-10 text-primary" />,
        image: PlaceHolderImages.find(p => p.id === 'pilates-plan'),
        slug: 'pilates'
    },
    {
        name: "Ginástica Kids",
        description: "Desenvolvimento motor e diversão para crianças em um ambiente seguro e estimulante, dentro da nossa piscina.",
        icon: <Baby className="h-10 w-10 text-primary" />,
        image: PlaceHolderImages.find(p => p.id === 'kids-gallery-1'),
        slug: 'ginastica-kids'
    }
];

export const metadata = {
  title: "Serviços | Instituto Target",
  description: "Conheça nossos serviços de fisioterapia, natação, hidroginástica, pilates e mais.",
};

export default function ServicosPage() {
  return (
    <div className="container mx-auto py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">Nossos Serviços</h1>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Cuidamos de você em cada detalhe. Conheça as modalidades que oferecemos para promover sua saúde e bem-estar.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map(service => (
          <Link key={service.slug} href={`/servicos/${service.slug}`} className="block group">
            <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-primary/20 hover:shadow-lg hover:-translate-y-1 bg-card">
              {service.image && (
                <div className="relative w-full h-48">
                  <Image
                    src={service.image.imageUrl}
                    alt={service.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    data-ai-hint={service.image.imageHint}
                  />
                </div>
              )}
              <div className="flex flex-col justify-center p-6 flex-grow">
                <CardHeader className="p-0">
                  <div className="flex items-start gap-4 mb-2">
                    {service.icon}
                    <CardTitle className="font-headline text-2xl group-hover:text-primary transition-colors">{service.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-0 flex-grow">
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
