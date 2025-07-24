
'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { siteData } from '@/lib/site-data';
import { useOnScreen } from '@/hooks/use-on-screen';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

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

  const imageSide = index % 2 === 0 ? 'left' : 'right';

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
        <div className="grid grid-cols-1 md:grid-cols-2">
            <div className={cn(
                "flex flex-col justify-center p-6 md:p-8",
                imageSide === 'right' ? 'md:order-last' : ''
            )}>
              <CardHeader>
                <CardTitle className="text-2xl">{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-base text-muted-foreground leading-relaxed text-justify space-y-4">
                  {content.split('\n\n').map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </CardContent>
            </div>
            <div className="p-6 md:p-8 flex flex-col justify-center">
                <div className="flex flex-col gap-4 h-full">
                {images.map((image, i) => (
                    <div key={i} className="relative flex-1">
                        <Image
                            src={image.url}
                            alt={`${title} - image ${i + 1}`}
                            fill
                            className="rounded-lg object-cover w-full h-auto shadow-[8px_8px_0px_hsl(var(--primary))]"
                            data-ai-hint={image.hint}
                        />
                    </div>
                ))}
                </div>
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
        <div className="mx-auto max-w-5xl">
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
