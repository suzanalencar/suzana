import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { siteData } from '@/lib/site-data';
import { ArrowRight, Heart, ChevronsDown, Plane } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative w-full h-screen bg-background">
      <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center pb-16 pt-20">
        <div className="mb-4 flex items-center gap-2 rounded-full border border-muted-foreground/30 bg-muted/50 px-4 py-1 text-sm text-foreground/80 backdrop-blur-sm">
          <Plane className="h-4 w-4" />
          Mestrado na Alemanha
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          Suzana<span style={{ color: '#1A2421' }}>Alencar</span>
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl">
          {siteData.hero.subtitle}
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <Button asChild size="lg" variant="outline">
            <Link href={siteData.hero.buttonPrimary.href}>
              {siteData.hero.buttonPrimary.text}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild size="lg">
            <Link href={siteData.hero.buttonSecondary.href}>
              <Heart className="mr-2 h-5 w-5" />
              {siteData.hero.buttonSecondary.text}
            </Link>
          </Button>
        </div>
        <Link
          href="#university-highlight"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground transition-transform hover:scale-110 animate-bounce"
          aria-label="Scroll down"
        >
          <ChevronsDown className="h-10 w-10" />
        </Link>
      </div>
    </section>
  );
}
