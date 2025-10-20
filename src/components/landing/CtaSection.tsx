import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CtaSection() {
  
  return (
    <section className="bg-card">
      <div className="container mx-auto px-0">
        <div className="grid md:grid-cols-2 items-center">
          <div className="p-8 md:p-12 lg:p-16">
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary">Agende sua Avaliação</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Dê o primeiro passo em direção a uma vida com mais saúde e sem dor. Nossa equipe está pronta para criar um plano de tratamento exclusivo para você.
            </p>
            <Button asChild size="lg" className="mt-8 font-semibold">
              <Link href="/contato">
                Fale Conosco
                <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
          <div className="relative h-80 md:h-full w-full overflow-hidden md:rounded-l-lg">
            <video
              src="https://i.imgur.com/JkGjVtL.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              title="Vídeo institucional do Instituto Target"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
