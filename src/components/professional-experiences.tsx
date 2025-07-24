'use client';

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { siteData } from '@/lib/site-data';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { useOnScreen } from '@/hooks/use-on-screen';

export function ProfessionalExperiences() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(containerRef, { threshold: 0.2, triggerOnce: true });
  const [api, setApi] = useState<CarouselApi>();

  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  useEffect(() => {
    if (!api) {
      return;
    }

    if (isVisible) {
      plugin.current.play();
    } else {
      plugin.current.stop();
    }
  }, [isVisible, api]);

  return (
    <section id="professional-experiences" className="bg-secondary/50" ref={containerRef}>
      <div className="container">
        <div className="mx-auto max-w-4xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {siteData.professionalExperiences.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {siteData.professionalExperiences.subtitle}
          </p>
        </div>
        <div className="flex justify-center">
            <Carousel
                setApi={setApi}
                plugins={[plugin.current]}
                opts={{
                    align: 'start',
                    loop: true,
                }}
                className="w-full max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl"
                >
                <CarouselContent>
                    {siteData.professionalExperiences.experiences.map((exp, index) => (
                    <CarouselItem key={index} className="sm:basis-1/2 lg:basis-1/3">
                        <div className="p-1 h-full">
                        <Card className="flex flex-col overflow-hidden shadow-lg transition-transform hover:scale-105 duration-300 h-full">
                            <div className="aspect-[4/3] relative w-full">
                            <Image
                                src={exp.image}
                                alt={exp.title}
                                fill
                                className="object-cover"
                                data-ai-hint={exp.imageHint}
                            />
                            </div>
                            <div className="p-4 flex flex-col flex-grow">
                            <h3 className="font-bold text-md">{exp.title}</h3>
                            <p className="text-sm text-muted-foreground mt-1 flex-grow">
                                {exp.description}
                            </p>
                            </div>
                        </Card>
                        </div>
                    </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="hidden sm:flex" />
                <CarouselNext className="hidden sm:flex" />
            </Carousel>
        </div>
      </div>
    </section>
  );
}
