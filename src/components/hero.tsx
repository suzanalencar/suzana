import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { siteData } from '@/lib/site-data';
import { ArrowRight, Heart, ChevronDown } from 'lucide-react';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="relative w-full bg-secondary/50">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://placehold.co/1920x1080"
          alt="Frankfurt cityscape"
          fill
          className="object-cover"
          data-ai-hint="frankfurt cityscape"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="container relative z-10 flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center text-center text-white">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-md">
          {siteData.hero.title}
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-neutral-200 md:text-xl drop-shadow-sm">
          {siteData.hero.subtitle}
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
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
          className="absolute bottom-4 text-white transition-transform hover:scale-110 animate-bounce"
          aria-label="Scroll down"
        >
          <ChevronDown className="h-10 w-10" />
        </Link>
      </div>
    </section>
  );
}
