import Image from "next/image";
import { Instagram } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="border-t py-8 mt-16">
      <div className="container mx-auto text-center text-muted-foreground text-sm flex flex-col items-center">
        <div className="mb-4">
          <Image 
            src="https://i.imgur.com/Y1yOBXb.png" 
            alt="Instituto Target Logo" 
            width={160} 
            height={36} 
          />
        </div>
        <p>© {new Date().getFullYear()} Instituto Target. Todos os direitos reservados.</p>
        <p>Promovendo saúde, movimento e bem-estar para toda a família.</p>
        <div className="mt-4">
            <Button asChild variant="ghost" size="icon">
                <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <Instagram className="h-6 w-6" />
                </Link>
            </Button>
        </div>
      </div>
    </footer>
  );
}
