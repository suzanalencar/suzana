import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { siteData } from '@/lib/site-data';

export function UniversityHighlight() {
  return (
    <section id="university-highlight" className="bg-background">
      <div className="container">
        <Card className="overflow-hidden shadow-lg">
          <CardContent className="p-0">
            <div className="relative">
              <Image
                src={siteData.university.image}
                alt={siteData.university.name}
                width={1200}
                height={600}
                className="w-full h-auto object-cover aspect-[2/1]"
                data-ai-hint={siteData.university.imageHint}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 md:p-8 text-white">
                <h2 className="text-3xl md:text-4xl font-bold">{siteData.university.name}</h2>
                <Badge variant="secondary" className="mt-2 text-sm">
                  {siteData.university.badge}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
