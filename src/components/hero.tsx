import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { siteData } from '@/lib/site-data';
import { ArrowRight, Heart } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative w-full bg-secondary/50">
      <div className="container relative z-10 flex min-h-[calc(80vh-4rem)] flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          {siteData.hero.title}
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl">
          {siteData.hero.subtitle}
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button asChild size="lg" variant="outline" className="bg-background">
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
      </div>
       <div className="absolute inset-0 z-0 opacity-50 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/80 via-background to-background"></div>
    </section>
  );
}
