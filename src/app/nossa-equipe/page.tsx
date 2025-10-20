import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

const teamMembers = [
    {
        name: "Dr. Ana Silva",
        role: "Fisioterapeuta Chefe",
        description: "Especialista em reabilitação ortopédica e desportiva, com mais de 15 anos de experiência.",
        image: PlaceHolderImages.find(p => p.id === 'team-member-1')
    },
    {
        name: "Carlos Matos",
        role: "Coordenador Aquático",
        description: "Professor de natação e hidroginástica, apaixonado por promover saúde através da água.",
        image: PlaceHolderImages.find(p => p.id === 'team-member-2')
    },
    {
        name: "Juliana Costa",
        role: "Instrutora de Pilates",
        description: "Certificada internacionalmente, ajuda nossos clientes a encontrar força, flexibilidade e equilíbrio.",
        image: PlaceHolderImages.find(p => p.id === 'team-member-3')
    },
    {
        name: "Dr. Ricardo Mendes",
        role: "Fisioterapeuta Pediátrico",
        description: "Focado no desenvolvimento motor infantil e tratamento de condições neurológicas em crianças.",
        image: PlaceHolderImages.find(p => p.id === 'team-member-4')
    },
    {
        name: "Sofia Andrade",
        role: "Nutricionista Esportiva",
        description: "Aliada dos nossos atletas, otimizando performance e recuperação através da alimentação.",
        image: PlaceHolderImages.find(p => p.id === 'team-member-5')
    },
    {
        name: "Lucas Ferreira",
        role: "Preparador Físico",
        description: "Especialista em treino de força e condicionamento para atletas de alta performance.",
        image: PlaceHolderImages.find(p => p.id === 'team-member-6')
    },
    {
        name: "Dra. Beatriz Lima",
        role: "Fisioterapeuta Pélvica",
        description: "Apoio especializado na saúde da mulher, gestantes e pós-parto, com foco no bem-estar íntimo.",
        image: PlaceHolderImages.find(p => p.id === 'team-member-7')
    },
    {
        name: "Mariana Alves",
        role: "Recepcionista e Relacionamento",
        description: "O primeiro sorriso que você vê. Pronta para agendar suas aulas e garantir a melhor experiência.",
        image: PlaceHolderImages.find(p => p.id === 'team-member-8')
    },
    {
        name: "Pedro Gonçalves",
        role: "Professor de Natação Infantil",
        description: "Transforma o aprendizado da natação em uma aventura segura e divertida para os pequenos.",
        image: PlaceHolderImages.find(p => p.id === 'team-member-9')
    }
];

export const metadata = {
  title: "Nossa Equipe | Instituto Target",
  description: "Conheça os profissionais qualificados e dedicados do Instituto Target.",
};

export default function NossaEquipePage() {
  return (
    <div className="container mx-auto py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">Nossa Equipe</h1>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Profissionais apaixonados e dedicados a cuidar da sua saúde e bem-estar em cada etapa.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map(member => (
          <Card key={member.name} className="text-center overflow-hidden transition-all duration-300 hover:shadow-primary/20 hover:shadow-lg hover:-translate-y-1">
            {member.image && (
                <div className="relative aspect-square w-full">
                    <Image
                        src={member.image.imageUrl}
                        alt={`Retrato de ${member.name}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        data-ai-hint={member.image.imageHint}
                    />
                </div>
            )}
            <CardHeader>
              <CardTitle className="font-headline text-2xl">{member.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-semibold text-primary">{member.role}</p>
              <p className="mt-2 text-sm text-muted-foreground">{member.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
