
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from './ui/button';
import { Download, Globe } from 'lucide-react';
import { Badge } from './ui/badge';

export function AcceptanceLetter() {
  return (
    <section id="acceptance-letter" className="bg-primary text-primary-foreground py-12 sm:py-16 md:py-20">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center mb-10">
            <h3 className="text-2xl font-semibold tracking-tight text-primary-foreground/90 mb-4 flex items-center justify-center gap-2">
              <Globe className="h-6 w-6" />
              Jornada Internacional
            </h3>
            <Card className="text-left shadow-lg mb-8 text-foreground">
                <CardHeader>
                <CardTitle className="text-2xl text-center">
                    Goethe Universität Frankfurt
                </CardTitle>
                </CardHeader>
                <CardContent>
                <div className="text-muted-foreground text-justify space-y-4">
                    <p>
                    A Alemanha é um dos países que mais investem em ciência, tecnologia e educação pública de qualidade e, para quem sonha em aprofundar os estudos com senso crítico e impacto social, ela oferece caminhos únicos. É exatamente nesse cenário que está a Goethe Universität Frankfurt, uma das universidades mais renomadas da Europa, localizada em uma cidade pulsante, diversa e que respira pensamento. Foi lá que nasceram ideias que mudaram a forma como o mundo entende política, cultura e sociedade — como a famosa Escola de Frankfurt, com nomes como Adorno e Habermas.
                    </p>
                    
                    <div className="flex items-center justify-center p-6 rounded-lg">
                        <Image
                        src="/Goethe.jpg"
                        alt="Goethe Universität Frankfurt"
                        width={400}
                        height={400}
                        className="rounded-lg object-cover shadow-lg max-w-full h-auto"
                        data-ai-hint="frankfurt campus"
                        />
                    </div>

                    <p>
                    O curso que vou fazer, chamado Science and Technology Studies: Economies, Governance, Life, parte de uma pergunta essencial: como a ciência e a tecnologia moldam - e são moldadas - pela sociedade? O o mestrado propõe olhar com mais profundidade para os interesses, escolhas e impactos por trás das decisões técnicas. A partir do pensamento interdisciplinar, os alunos desenvolvem ferramentas para compreender como o mundo funciona e como ele poderia funcionar melhor.
                    </p>
                    <p>
                    Como venho da engenharia, esse curso representa a chance de conectar o lado técnico com o humano, o político e o ambiental. Ele permite repensar ideias como “eficiência” e “progresso” a partir de realidades concretas: cidades, infraestruturas, desigualdades. Diante da crise climática e das urgências urbanas, acredito que não basta apenas criar soluções: é preciso entender para quem, com que consequências e a partir de que perspectivas estamos criando. E é exatamente isso que esse mestrado me oferece: um espaço de pensamento, prática e transformação.
                    </p>
                </div>
                </CardContent>
            </Card>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Letter of Acceptance</h2>
          <p className="mt-4 text-lg text-primary-foreground/80">
            Para transparência, aqui está minha carta de aceite:
          </p>
        </div>
        <div className="mx-auto max-w-3xl">
          <Card className="shadow-lg">
            <CardContent className="p-4 md:p-6">
              <div className="aspect-[3/4] w-full bg-muted rounded-md flex items-center justify-center">
                  <Image
                    src="/GOETHEIMG.jpg"
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
