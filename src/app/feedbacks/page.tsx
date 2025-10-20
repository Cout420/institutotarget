"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Star, StarHalf } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
    {
        name: "Mariana Silva",
        role: "Paciente de Fisioterapia",
        avatar: PlaceHolderImages.find(p => p.id === 'feedback-avatar-1'),
        stars: 5,
        testimonial: "Recuperei o movimento do meu ombro em tempo recorde! A equipe é incrivelmente atenciosa e profissional. Recomendo de olhos fechados."
    },
    {
        name: "João Pedro",
        role: "Aluno de Natação",
        avatar: PlaceHolderImages.find(p => p.id === 'feedback-avatar-2'),
        stars: 5,
        testimonial: "A piscina com ozônio faz toda a diferença. As aulas são dinâmicas e o professor é muito paciente. Perdi o medo da água aqui!"
    },
    {
        name: "Carla Souza",
        role: "Aluna de Pilates",
        avatar: PlaceHolderImages.find(p => p.id === 'feedback-avatar-3'),
        stars: 5,
        testimonial: "O Pilates mudou minha vida! Minhas dores nas costas desapareceram e me sinto muito mais forte e disposta. O estúdio é impecável."
    },
    {
        name: "Fernando Lima",
        role: "Pai de Aluno (Natação Kids)",
        avatar: PlaceHolderImages.find(p => p.id === 'feedback-avatar-4'),
        stars: 5,
        testimonial: "Meu filho ama as aulas de natação. Os professores são muito carinhosos e conseguem ensinar brincando. A evolução dele é nítida."
    },
     {
        name: "Ana Oliveira",
        role: "Aluna de Hidroginástica",
        avatar: PlaceHolderImages.find(p => p.id === 'feedback-avatar-5'),
        stars: 4.5,
        testimonial: "As aulas de hidroginástica são minha terapia! Um ambiente alegre, ótimos exercícios e sem impacto nas articulações. Me sinto renovada."
    },
     {
        name: "Ricardo Mendes",
        role: "Atleta (Reabilitação Esportiva)",
        avatar: PlaceHolderImages.find(p => p.id === 'feedback-avatar-6'),
        stars: 5,
        testimonial: "A fisioterapia esportiva do Instituto Target foi crucial para minha volta às quadras após uma lesão no joelho. Profissionalismo e conhecimento de ponta."
    }
];

const carouselImages = [
    PlaceHolderImages.find(p => p.id === 'feedback-carousel-1'),
    PlaceHolderImages.find(p => p.id === 'feedback-carousel-2'),
    PlaceHolderImages.find(p => p.id === 'feedback-carousel-3'),
    PlaceHolderImages.find(p => p.id === 'feedback-carousel-4'),
    PlaceHolderImages.find(p => p.id === 'feedback-carousel-5'),
    PlaceHolderImages.find(p => p.id === 'feedback-carousel-6'),
    PlaceHolderImages.find(p => p.id === 'feedback-carousel-7'),
    PlaceHolderImages.find(p => p.id === 'feedback-carousel-8'),
    PlaceHolderImages.find(p => p.id === 'feedback-carousel-9'),
];

const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
        <div className="flex text-yellow-400">
            {[...Array(fullStars)].map((_, i) => <Star key={`full-${i}`} fill="currentColor" className="h-5 w-5" />)}
            {halfStar && <StarHalf key="half" fill="currentColor" className="h-5 w-5" />}
            {[...Array(emptyStars)].map((_, i) => <Star key={`empty-${i}`} className="h-5 w-5" />)}
        </div>
    );
};

export default function FeedbacksPage() {
    return (
        <>
            <div className="relative group">
                <Carousel
                    opts={{ loop: true }}
                    plugins={[Autoplay({ delay: 4000, stopOnInteraction: true })]}
                    className="w-full"
                >
                    <CarouselContent className="h-[60vh] min-h-[400px]">
                        {carouselImages.map((img, index) => (
                            <CarouselItem key={index} className="relative">
                                {img && (
                                    <Image
                                        src={img.imageUrl}
                                        alt={img.description}
                                        fill
                                        className="object-cover"
                                        priority={index === 0}
                                        data-ai-hint={img.imageHint}
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
                </Carousel>
            </div>
            <div className="container mx-auto py-16 md:py-24 px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-headline font-bold">O que Nossos Clientes Dizem</h1>
                    <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
                        A satisfação de quem confia em nosso trabalho é a nossa maior recompensa. Veja algumas histórias de sucesso.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <Card key={index} className="flex flex-col justify-between bg-card shadow-lg transition-all duration-300 hover:shadow-primary/20 hover:-translate-y-2">
                            <CardContent className="pt-6">
                                <div className="flex justify-between items-start mb-4">
                                  {renderStars(testimonial.stars)}
                                </div>
                                <blockquote className="text-muted-foreground italic border-l-4 border-primary pl-4">
                                    "{testimonial.testimonial}"
                                </blockquote>
                            </CardContent>
                            <CardHeader className="flex flex-row items-center gap-4 pt-4">
                                <Avatar className="h-14 w-14">
                                    {testimonial.avatar && <AvatarImage src={testimonial.avatar.imageUrl} alt={testimonial.name} />}
                                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="font-bold text-lg">{testimonial.name}</p>
                                    <p className="text-sm text-primary font-medium">{testimonial.role}</p>
                                </div>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
            </div>
        </>
    );
}
