import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from './ui/button';
import { Download, Globe } from 'lucide-react';
import { Badge } from './ui/badge';

export function AcceptanceLetter() {
  return (
    <section id="acceptance-letter" className="bg-secondary/50">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center mb-4">
            <Badge variant="secondary" className="text-sm py-1 px-3">
              <Globe className="mr-2 h-4 w-4" />
              Jornada Internacional
            </Badge>
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Letter of Acceptance</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            For transparency, you can view my official acceptance letter from Goethe Universität.
          </p>
        </div>
        <div className="mt-10 mx-auto max-w-3xl">
          <Card className="shadow-lg">
            <CardContent className="p-4 md:p-6">
              <div className="aspect-[3/4] w-full bg-muted rounded-md flex items-center justify-center">
                  <Image
                    src="https://placehold.co/800x1100"
                    alt="Acceptance Letter"
                    width={800}
                    height={1100}
                    className="rounded-md object-cover"
                    data-ai-hint="document letter"
                  />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
