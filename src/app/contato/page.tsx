"use client";

import { ContactForm } from "@/components/shared/ContactForm";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const slides = [
    {
        title: "Uma Equipe Dedicada",
        description: "Conheça os profissionais por trás do seu bem-estar.",
        image: PlaceHolderImages.find(p => p.id === 'contact-carousel-1'),
    },
    {
        title: "Um Espaço para Cuidar de Você",
        description: "Estrutura completa e moderna para seus tratamentos.",
        image: PlaceHolderImages.find(p => p.id === 'contact-carousel-2'),
    },
    {
        title: "Recepção Acolhedora",
        description: "Sinta-se bem-vindo desde o primeiro momento.",
        image: PlaceHolderImages.find(p => p.id === 'contact-carousel-3'),
    },
];

export default function ContatoPage() {
  return (
    <>
        <div className="relative group">
            <Carousel
                opts={{ loop: true }}
                plugins={[Autoplay({ delay: 5000, stopOnInteraction: true })]}
                className="w-full"
            >
                <CarouselContent className="h-[60vh] min-h-[400px]">
                {slides.map((slide, index) => (
                    <CarouselItem key={index} className="relative">
                    {slide.image && (
                        <Image
                        src={slide.image.imageUrl}
                        alt={slide.image.description}
                        fill
                        className="object-cover"
                        priority={index === 0}
                        data-ai-hint={slide.image.imageHint}
                        sizes="100vw"
                        />
                    )}
                    <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center text-white p-4 z-10">
                        <div className="z-10">
                            <h1 className="text-4xl md:text-5xl font-headline font-bold drop-shadow-lg animate-fade-up animation-delay-300">
                            {slide.title}
                            </h1>
                            <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-white/90 drop-shadow animate-fade-up animation-delay-500">
                            {slide.description}
                            </p>
                        </div>
                    </div>
                    </CarouselItem>
                ))}
                </CarouselContent>
                <div className="absolute z-20 inset-0 flex items-center justify-between px-4">
                    <CarouselPrevious className="transform-none" />
                    <CarouselNext className="transform-none" />
                </div>
            </Carousel>
        </div>

        <div className="container mx-auto py-16 md:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-headline font-bold">Entre em Contato</h1>
                    <p className="mt-4 text-muted-foreground">
                        Estamos aqui para ajudar. Envie-nos uma mensagem e retornaremos o mais breve possível.
                    </p>
                </div>
                <ContactForm />
            </div>
        </div>
    </>
  );
}
