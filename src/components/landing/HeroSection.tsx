"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const slides = [
    {
        title: "Ginástica e Natação Kids",
        description: "Desenvolvimento motor e socialização para crianças, incluindo aulas para PCDs.",
        image: PlaceHolderImages.find(p => p.id === 'hero-bg-5'),
    },
    {
        title: "Fisioterapia Especializada",
        description: "Atendimento individualizado para sua reabilitação e bem-estar, focado em resultados duradouros.",
        image: PlaceHolderImages.find(p => p.id === 'hero-bg'),
    },
    {
        title: "Natação e Hidroginástica",
        description: "Saúde e diversão em nossa piscina aquecida e tratada com ozônio para todas as idades.",
        image: PlaceHolderImages.find(p => p.id === 'hero-bg-2'),
    },
    {
        title: "Pilates para Corpo e Mente",
        description: "Fortaleça seu corpo, melhore a postura e ganhe flexibilidade com nossas aulas personalizadas.",
        image: PlaceHolderImages.find(p => p.id === 'hero-bg-4'),
    },
    {
        title: "Performance para Atletas",
        description: "Potencialize seu desempenho e previna lesões com nosso programa de alta performance.",
        image: PlaceHolderImages.find(p => p.id === 'hero-bg-6'),
    },
];

const WHATSAPP_NUMBER = "5511990087799";
const WHATSAPP_MESSAGE = "Olá, tudo bem? Gostaria de tirar algumas dúvidas";
const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;


export function HeroSection() {
  return (
    <div className="relative group">
      <Carousel
        opts={{ loop: true }}
        plugins={[Autoplay({ delay: 5000, stopOnInteraction: true })]}
        className="w-full"
      >
        <CarouselContent className="h-[70vh] min-h-[500px]">
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
                    <h1 className="text-4xl md:text-6xl font-headline font-bold drop-shadow-lg animate-fade-up animation-delay-300">
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
      
      <div className="absolute bottom-10 w-full z-20 flex justify-center animate-fade-up animation-delay-700">
        <div className="flex gap-4">
          <Button asChild size="lg" className="font-semibold">
              <Link href="/servicos">
                Nossos Serviços <ArrowRight className="ml-2" />
              </Link>
          </Button>
          <Button asChild size="lg" variant="secondary">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">Entre em Contato</a>
          </Button>
        </div>
      </div>
    </div>
  );
}
