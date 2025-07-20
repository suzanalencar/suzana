import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { siteData } from '@/lib/site-data';
import { ArrowRight, Heart, ChevronsDown, Plane } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Hero() {
  return (
    <section className="relative w-full h-screen">
      <Image
        src="https://images.unsplash.com/photo-1590132338664-36a218f62363?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Frankfurt skyline"
        fill
        className="object-cover"
        data-ai-hint="frankfurt skyline"
        priority
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center text-white pb-16 pt-20 sm:pt-12">
        <div className="mb-4 flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1 text-sm text-neutral-200 drop-shadow-sm backdrop-blur-sm">
          <Plane className="h-4 w-4" />
          Mestrado na Alemanha
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Suzana<span style={{ color: '#EBF4EC' }}>Alencar</span>
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-neutral-200 md:text-xl drop-shadow">
          {siteData.hero.subtitle}
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <Button asChild size="lg" variant="ghost" className="border border-white/80 hover:bg-white/10 hover:text-white">
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
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 transition-transform hover:scale-110 animate-bounce mt-20"
          aria-label="Scroll down"
        >
          <ChevronsDown className="h-10 w-10" />
        </Link>
      </div>
    </section>
  );
}
