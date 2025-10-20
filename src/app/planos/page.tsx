
"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { FlipCard } from "@/components/shared/FlipCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const plans = [
    {
        name: "Fisioterapia Individual",
        price: "Consulte",
        features: [
            "Atendimento único e especializado",
            "Foco na sua recuperação e bem-estar",
            "Profissionais altamente qualificados",
            "Avaliação completa e plano de tratamento",
        ],
        image: PlaceHolderImages.find(p => p.id === 'physiotherapy-plan'),
        highlight: false,
    },
    {
        name: "Natação e Hidroginástica",
        price: "A partir de R$ 150",
        features: [
            "Piscina aquecida e tratada com ozônio",
            "Aulas para todas as idades (adultos e crianças)",
            "Inclusão para crianças PCD",
            "Turmas de hidroginástica e ginástica kids",
        ],
        image: PlaceHolderImages.find(p => p.id === 'swimming-plan'),
        highlight: true,
    },
    {
        name: "Pilates e Bem-Estar",
        price: "A partir de R$ 200",
        features: [
            "Aulas de Pilates com equipamentos modernos",
            "Fortalecimento, flexibilidade e consciência corporal",
            "Turmas reduzidas para maior atenção",
            "Ambiente climatizado e acolhedor",
        ],
        image: PlaceHolderImages.find(p => p.id === 'pilates-plan'),
        highlight: false,
    },
];

const PlanCardFront = ({ plan }: { plan: typeof plans[0] }) => (
    <Card className={`h-full w-full flex flex-col bg-card ${plan.highlight ? 'border-primary border-2' : ''}`}>
        {plan.image && (
            <div className="relative aspect-video w-full">
                <Image src={plan.image.imageUrl} alt={plan.name} fill className="object-cover rounded-t-lg" data-ai-hint={plan.image.imageHint} />
                {plan.highlight && <div className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded-full">MAIS POPULAR</div>}
            </div>
        )}
        <CardHeader className="flex-grow">
            <CardTitle className="font-headline">{plan.name}</CardTitle>
            <CardDescription className="text-2xl font-bold text-primary pt-2">{plan.price}</CardDescription>
        </CardHeader>
         <CardFooter>
            <p className="text-xs text-muted-foreground mx-auto hidden sm:block">Passe o mouse para ver detalhes</p>
            <p className="text-xs text-muted-foreground mx-auto sm:hidden">Toque para ver detalhes</p>
        </CardFooter>
    </Card>
);

const PlanCardBack = ({ plan }: { plan: typeof plans[0] }) => (
    <Card className={`h-full w-full flex flex-col p-6 text-center bg-card ${plan.highlight ? 'border-primary border-2' : ''}`}>
        <CardHeader>
            <CardTitle className="font-headline">{plan.name}</CardTitle>
            <CardDescription className="text-lg font-bold text-primary">{plan.price}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
            <ul className="space-y-3 text-left">
                {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                        <span className="text-sm">{feature}</span>
                    </li>
                ))}
            </ul>
        </CardContent>
        <CardFooter>
            <Button asChild className="w-full font-semibold">
                <Link href="/contato">Agendar Avaliação</Link>
            </Button>
        </CardFooter>
    </Card>
);

export default function PlanosPage() {
    return (
        <div className="container mx-auto py-16 md:py-24 px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-headline font-bold">Nossos Planos e Serviços</h1>
                <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
                    Encontre o plano ideal para cuidar da sua saúde, movimento e qualidade de vida.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-y-12 items-center">
                {plans.map((plan, i) => (
                    <div key={i} className={`h-[26rem] sm:h-[28rem] transition-transform duration-300 ${plan.highlight ? 'md:scale-110 z-10' : ''}`}>
                        <FlipCard
                            front={<PlanCardFront plan={plan} />}
                            back={<PlanCardBack plan={plan} />}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
