import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from './ui/button';
import { Download, Globe } from 'lucide-react';
import { Badge } from './ui/badge';

export function AcceptanceLetter() {
  return (
    <section id="acceptance-letter" className="bg-primary text-primary-foreground py-12 sm:py-16 md:py-20">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-10">
            <Card className="text-left shadow-lg mb-8 text-foreground">
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="md:col-span-1">
                  <Image
                    src="https://placehold.co/400x400"
                    alt="International Journey"
                    width={400}
                    height={400}
                    className="rounded-t-lg md:rounded-l-lg md:rounded-t-none object-cover h-full w-full"
                    data-ai-hint="journey travel"
                  />
                </div>
                <div className="md:col-span-2">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Globe className="h-5 w-5 text-primary" />
                      Jornada Internacional
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
                    </p>
                  </CardContent>
                </div>
              </div>
            </Card>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Letter of Acceptance</h2>
          <p className="mt-4 text-lg text-primary-foreground/80">
            For transparency, you can view my official acceptance letter from Goethe Universität.
          </p>
        </div>
        <div className="mx-auto max-w-3xl">
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
