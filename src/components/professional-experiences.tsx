import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { siteData } from '@/lib/site-data';

export function ProfessionalExperiences() {
  return (
    <section id="professional-experiences" className="bg-secondary/50">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {siteData.professionalExperiences.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {siteData.professionalExperiences.subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {siteData.professionalExperiences.experiences.map((exp, index) => (
            <Card key={index} className="flex flex-col overflow-hidden shadow-lg transition-transform hover:scale-105 duration-300">
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
          ))}
        </div>
      </div>
    </section>
  );
}
