import React from 'react';
import { PlaceHolderImages, ImagePlaceholder } from '@/lib/placeholder-images';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { CheckCircle, HeartPulse, Waves, PersonStanding, Baby, Users, Target, Video } from 'lucide-react';
import { ContactSection } from '@/components/landing/ContactSection';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const servicesData = [
    {
        slug: 'fisioterapia',
        name: "Fisioterapia Especializada",
        icon: <HeartPulse className="h-10 w-10 text-primary" />,
        shortDescription: "Recuperação, reabilitação e prevenção de lesões com atendimento individualizado e foco total nas suas necessidades.",
        mainDescription: "No Instituto Target, a fisioterapia transcende o tratamento convencional. Criamos uma jornada de recuperação única para você, combinando técnicas de terapia manual, equipamentos de ponta e um plano de tratamento 100% individualizado para acelerar seus resultados e devolver sua qualidade de vida.",
        gallery: [
            PlaceHolderImages.find(p => p.id === 'physio-gallery-1'),
            PlaceHolderImages.find(p => p.id === 'physio-gallery-2'),
            PlaceHolderImages.find(p => p.id === 'physio-gallery-3'),
        ].filter(Boolean) as ImagePlaceholder[],
        videoUrl: "https://i.imgur.com/JkGjVtL.mp4",
        benefits: [
            "Alívio rápido e duradouro da dor",
            "Prevenção de novas lesões",
            "Recuperação acelerada de cirurgias",
            "Melhora na mobilidade e flexibilidade",
            "Aumento de força e performance esportiva"
        ],
        audience: "Ideal para atletas, pessoas com dores crônicas (costas, joelho, ombro), pacientes em pós-operatório e qualquer pessoa que busque uma vida sem limitações por dor.",
        faqs: [
            {
                question: "Qual a duração de uma sessão de fisioterapia?",
                answer: "Cada sessão dura em média 50 a 60 minutos, com foco total no seu plano de tratamento individualizado."
            },
            {
                question: "Preciso de um encaminhamento médico?",
                answer: "Não necessariamente. Realizamos uma avaliação fisioterapêutica completa para entender sua condição e definir o melhor plano de tratamento. Se necessário, podemos trabalhar em conjunto com seu médico."
            },
            {
                question: "O plano de saúde cobre o tratamento?",
                answer: "Trabalhamos com diversos planos de saúde na modalidade de reembolso. Consulte-nos para saber mais sobre as condições."
            }
        ]
    },
    {
        slug: 'natacao-hidroginastica',
        name: "Natação e Hidroginástica",
        icon: <Waves className="h-10 w-10 text-primary" />,
        shortDescription: "Saúde e diversão em nossa piscina aquecida e tratada com ozônio. Aulas para bebês, crianças, adultos e hidroginástica.",
        mainDescription: "Mergulhe em um ambiente de saúde e bem-estar. Nossa piscina, coberta e aquecida, é tratada com ozônio, eliminando o desconforto do cloro e proporcionando uma experiência segura e agradável para todas as idades e necessidades.",
        gallery: [
            PlaceHolderImages.find(p => p.id === 'swim-gallery-1'),
            PlaceHolderImages.find(p => p.id === 'swim-gallery-2'),
            PlaceHolderImages.find(p => p.id === 'swim-gallery-3'),
        ].filter(Boolean) as ImagePlaceholder[],
        videoUrl: "https://i.imgur.com/JkGjVtL.mp4",
        benefits: [
            "Melhora a capacidade cardiorrespiratória",
            "Fortalecimento muscular com baixo impacto",
            "Aulas adaptadas para crianças com PCD",
            "Redução do estresse e melhora do humor",
            "Ambiente seguro e professores especializados"
        ],
        audience: "Perfeito para bebês (a partir de 6 meses), crianças, adultos, gestantes, idosos e pessoas em reabilitação que buscam uma atividade física segura e eficaz.",
        faqs: [
            {
                question: "Qual a temperatura da piscina?",
                answer: "Nossa piscina é mantida em uma temperatura agradável e constante, ideal para todas as idades, incluindo bebês."
            },
            {
                question: "O que é o tratamento com ozônio?",
                answer: "É um método de desinfecção moderno e seguro que reduz drasticamente a necessidade de cloro, evitando irritações na pele, olhos e problemas respiratórios."
            }
        ]
    },
    {
        slug: 'pilates',
        name: "Pilates",
        icon: <PersonStanding className="h-10 w-10 text-primary" />,
        shortDescription: "Aumente sua força, flexibilidade e consciência corporal com o método Pilates. Aulas com aparelhos e de solo.",
        mainDescription: "Encontre o equilíbrio perfeito entre corpo e mente com o Pilates. Nosso estúdio moderno oferece aulas em aparelhos e solo, com turmas reduzidas para garantir atenção máxima e resultados que você sente no dia a dia.",
        gallery: [
            PlaceHolderImages.find(p => p.id === 'pilates-gallery-1'),
            PlaceHolderImages.find(p => p.id === 'pilates-gallery-2'),
            PlaceHolderImages.find(p => p.id === 'pilates-gallery-3'),
        ].filter(Boolean) as ImagePlaceholder[],
        videoUrl: "https://i.imgur.com/JkGjVtL.mp4",
        benefits: [
            "Correção postural e alívio de dores nas costas",
            "Fortalecimento do core (centro de força)",
            "Aumento da flexibilidade e amplitude de movimento",
            "Melhora da concentração e respiração",
            "Prevenção de lesões e melhora do equilíbrio"
        ],
        audience: "Para todos que desejam melhorar a postura, fortalecer o corpo de forma integrada, aumentar a flexibilidade ou buscar uma atividade que conecta corpo e mente.",
        faqs: [
             {
                question: "Nunca fiz Pilates, posso começar?",
                answer: "Com certeza! O Pilates é para todos, independentemente do nível de condicionamento físico. Nossos instrutores irão guiá-lo em cada passo."
            },
            {
                question: "Qual a diferença entre Pilates solo e aparelho?",
                answer: "O Pilates de solo usa o peso do próprio corpo, enquanto os aparelhos usam molas para assistir ou resistir aos movimentos, permitindo uma gama maior de exercícios e ajustes."
            }
        ]
    },
    {
        slug: 'ginastica-kids',
        name: "Ginástica Kids",
        icon: <Baby className="h-10 w-10 text-primary" />,
        shortDescription: "Desenvolvimento motor e diversão para crianças em um ambiente seguro e estimulante, dentro da nossa piscina.",
        mainDescription: "A Ginástica Kids no Instituto Target é a combinação perfeita de diversão e desenvolvimento. Em nossa piscina aquecida, as crianças aprendem novas habilidades, gastam energia e socializam de forma lúdica e segura, sob a supervisão de nossos especialistas.",
        gallery: [
            PlaceHolderImages.find(p => p.id === 'kids-gallery-1'),
            PlaceHolderImages.find(p => p.id === 'kids-gallery-2'),
            PlaceHolderImages.find(p => p.id === 'kids-gallery-3'),
        ].filter(Boolean) as ImagePlaceholder[],
        videoUrl: "https://i.imgur.com/JkGjVtL.mp4",
        benefits: [
            "Desenvolvimento da coordenação motora, equilíbrio e agilidade",
            "Estímulo à socialização e ao trabalho em equipe",
            "Aumento da confiança e autoestima",
            "Gasto de energia de forma saudável e divertida",
            "Aulas temáticas que despertam a criatividade"
        ],
        audience: "Crianças a partir de 3 anos que precisam de uma atividade divertida para desenvolver suas habilidades motoras e sociais em um ambiente seguro e estimulante.",
        faqs: [
            {
                question: "Meu filho não sabe nadar, ele pode participar?",
                answer: "Sim! As aulas de ginástica kids acontecem na parte rasa da piscina e são focadas em movimentos lúdicos, sempre com a supervisão constante de nossos professores."
            }
        ]
    }
];

async function getService(slug: string) {
    return servicesData.find(s => s.slug === slug) || null;
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const service = await getService(params.slug);

  if (!service) {
    return {
      title: 'Serviço não encontrado'
    }
  }

  return {
    title: `${service.name} | Instituto Target`,
    description: service.shortDescription,
  }
}

export default async function ServiceDetailPage({ params }: { params: { slug: string } }) {
    const service = await getService(params.slug);

    if (!service) {
        notFound();
    }
    
    return (
      <>
        {/* Hero com Carrossel */}
        <div className="relative bg-background group">
          <Carousel
            opts={{ loop: true }}
            className="w-full"
          >
            <CarouselContent className="h-[75vh] min-h-[500px]">
              {service.gallery.map((image, index) => (
                <CarouselItem key={index} className="relative">
                  {image && (
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      fill
                      className="object-cover"
                      priority={index === 0}
                      data-ai-hint={image.imageHint}
                      sizes="100vw"
                    />
                  )}
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute z-20 inset-0 flex items-center justify-between px-4">
                <CarouselPrevious className="transform-none" />
                <CarouselNext className="transform-none" />
            </div>
             <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 z-10 text-white bg-gradient-to-t from-black/80 to-transparent">
                <div className="container mx-auto">
                    <div className="flex items-center gap-4">
                        <div className="bg-primary/80 p-3 rounded-lg backdrop-blur-sm">{service.icon && React.cloneElement(service.icon, { className: "h-10 w-10 md:h-12 md:w-12 text-primary-foreground" })}</div>
                        <h1 className="font-headline text-3xl md:text-6xl font-bold drop-shadow-lg">{service.name}</h1>
                    </div>
                </div>
            </div>
          </Carousel>
        </div>

        {/* Conteúdo da Página */}
        <div className="container mx-auto py-16 md:py-24 px-4 sm:px-6 lg:px-8 space-y-20">
            
            {/* Descrição Principal e CTA */}
            <section className="max-w-4xl mx-auto grid md:grid-cols-5 gap-8 md:gap-12 items-center">
                 <div className="md:col-span-3">
                    <p className="text-lg text-muted-foreground border-l-4 border-primary pl-6">
                        {service.mainDescription}
                    </p>
                 </div>
                 <div className='md:col-span-2 order-first md:order-last'>
                    <Card className="bg-primary text-primary-foreground text-center p-6 shadow-xl">
                         <CardHeader className="p-2">
                            <CardTitle className="font-headline text-2xl">Pronto para Começar?</CardTitle>
                        </CardHeader>
                        <CardContent className="p-2">
                            <p className="mb-6">Dê o primeiro passo em direção aos seus objetivos. Agende uma avaliação.</p>
                            <Button asChild size="lg" variant="secondary" className="w-full font-bold">
                                <Link href="/contato">Agendar Avaliação</Link>
                            </Button>
                        </CardContent>
                    </Card>
                 </div>
            </section>
            
            {/* Vídeo em Destaque */}
            {service.videoUrl && (
                <section className="max-w-5xl mx-auto">
                    <Card className="overflow-hidden shadow-2xl">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 font-headline text-3xl"><Video className="h-8 w-8 text-primary" /> Veja em Ação</CardTitle>
                            <CardDescription>Sinta um pouco da nossa energia e veja nosso espaço em funcionamento.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="aspect-video">
                                <video
                                    className="w-full h-full rounded-lg"
                                    src={service.videoUrl}
                                    title="Vídeo institucional do Instituto Target"
                                    controls
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                />
                            </div>
                        </CardContent>
                    </Card>
                </section>
            )}

            {/* Benefícios */}
            <section className="max-w-4xl mx-auto">
                <h2 className="font-headline text-3xl md:text-4xl font-bold mb-8 text-center flex items-center justify-center gap-3"><Target className="h-8 w-8 text-primary" />Principais Benefícios</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {service.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start gap-4 p-4 bg-card rounded-lg shadow-sm transition-all hover:shadow-md hover:-translate-y-1">
                            <div className='bg-primary/10 p-2 rounded-full'>
                                <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                            </div>
                            <span>{benefit}</span>
                        </div>
                    ))}
                </div>
            </section>

             {/* Para quem é & FAQs */}
            <section className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-start">
                <div>
                    <h2 className="font-headline text-3xl font-bold mb-6 flex items-center gap-3"><Users className="h-8 w-8 text-primary" />Para Quem é Indicado?</h2>
                    <Card className='h-full'>
                        <CardContent className="p-6">
                            <p className="text-muted-foreground">{service.audience}</p>
                        </CardContent>
                    </Card>
                </div>
                {service.faqs && service.faqs.length > 0 && (
                    <div>
                        <h2 className="font-headline text-3xl font-bold mb-6">Perguntas Frequentes</h2>
                        <Accordion type="single" collapsible className="w-full">
                            {service.faqs.map((faq, index) => (
                                <AccordionItem key={index} value={`item-${index}`}>
                                    <AccordionTrigger className="text-left font-semibold">{faq.question}</AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                )}
            </section>
        </div>

        {/* Seção de Contato Final */}
        <ContactSection />
      </>
    );
}

export async function generateStaticParams() {
  return servicesData.map(service => ({
    slug: service.slug,
  }));
}
