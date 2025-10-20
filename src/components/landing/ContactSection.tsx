import { ContactForm } from "@/components/shared/ContactForm";

export function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-headline font-bold">Fale Conosco</h2>
            <p className="mt-4 text-muted-foreground">
              Tem alguma dúvida? Nossa equipe está pronta para ajudar.
            </p>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
