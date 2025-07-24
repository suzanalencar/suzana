
'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { siteData } from '@/lib/site-data';
import { useOnScreen } from '@/hooks/use-on-screen';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { User, Book, HardHat } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

const StorySection = ({
  title,
  content,
  images,
  isLast,
  index,
}: {
  title: string;
  content: string;
  images: { url: string; hint: string }[];
  isLast: boolean;
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref, { threshold: 0.2, triggerOnce: true });
  const [api, setApi] = useState<CarouselApi>();

  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  useEffect(() => {
    if (!api || !isVisible) {
      return;
    }
  }, [api, isVisible]);

  const imageSide = index % 2 === 0 ? 'right' : 'left';

  return (
    <div ref={ref} className="relative pl-8">
      {!isLast && (
        <div
          className="absolute left-[18px] top-5 h-full w-0.5 bg-border -translate-x-1/2"
          aria-hidden="true"
        />
      )}
      <div className="flex items-center">
        <div className="z-10 flex h-9 w-9 items-center justify-center rounded-full bg-primary ring-8 ring-background">
          <span className="text-xl font-bold text-primary-foreground">
            {title.charAt(0)}
          </span>
        </div>
      </div>
      <Card
        className={cn(
          'mt-4 transition-all duration-700 ease-out',
          isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-4'
        )}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 w-full">
            <div className={cn( 
                "flex flex-col justify-center",
                imageSide === 'left' ? 'md:order-last' : ''
            )}>
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center gap-4">
                  {title === "Quem Sou Eu" && (
                    <div className="bg-primary/20 p-3 rounded-full">
                      <User className="h-8 w-8 text-primary" />
                    </div>
                  )}
                  {title === "Ensino Fundamental e Médio" && (
                    <div className="bg-primary/20 p-3 rounded-full">
                      <Book className="h-8 w-8 text-primary" />
                    </div>
                  )}
                  {title === "Graduação" && (
                    <div className="bg-primary/20 p-3 rounded-full">
                      <HardHat className="h-8 w-8 text-primary" />
                    </div>
                  )}
                  <span>{title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-base text-muted-foreground leading-relaxed text-justify space-y-4">
                  {content.split('\n\n').map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </CardContent>
            </div>
            <div className={cn("p-6 md:p-8 flex flex-col justify-center items-center flex-1", imageSide === 'right' ? 'md:order-last' : '')}>
                {images.length > 1 ? (
                  <Carousel
                    setApi={setApi}
                    plugins={[plugin.current]}
                    opts={{ align: 'start', loop: true }}
                    className="w-full max-w-sm"
                  >
                    <CarouselContent>
                      {images.map((image, i) => (
                        <CarouselItem key={i}>
                          <div className="relative aspect-[4/3]">
                            <Image
                              src={image.url}
                              alt={`${title} - image ${i + 1}`}
                              fill
                              className="rounded-lg object-cover w-full h-full shadow-[8px_8px_0px_hsl(var(--primary))]"
                              data-ai-hint={image.hint}
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="hidden sm:flex" />
                    <CarouselNext className="hidden sm:flex" />
                  </Carousel>
                ) : (
                  <div className="flex flex-col gap-4 w-full">
                    {images.map((image, i) => (
                        <div key={i} className="relative aspect-[4/3] w-full">
                            <Image
                                src={image.url}
                                alt={`${title} - image ${i + 1}`}
                                fill
                                className="rounded-lg object-cover w-full h-full shadow-[8px_8px_0px_hsl(var(--primary))]"
                                data-ai-hint={image.hint}
                            />
                        </div>
                    ))}
                  </div>
                )}
            </div>
        </div>
      </Card>
    </div>
  );
};

export function MyStory() {
  return (
    <section id="my-story" className="bg-background">
      <div className="container">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {siteData.story.title}
            </h2>
          </div>
          <div className="space-y-12">
            {siteData.story.sections.map((item, index) => (
              <StorySection
                key={index}
                index={index}
                title={item.title}
                content={item.content}
                images={item.images}
                isLast={index === siteData.story.sections.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
