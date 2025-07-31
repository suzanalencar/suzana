
'use client';

import { Copy, Heart, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { siteData } from '@/lib/site-data';
import { ProgressCard } from './progress-card';
import Link from 'next/link';

export function Donation() {
  const { toast } = useToast();
  
  const handleCopy = (text: string, type: 'PIX' | 'email') => {
    navigator.clipboard.writeText(text);
    toast({
      title: `${type} key copied!`,
      description: 'Thank you for your support 💚',
    });
  };

  return (
    <section id="support" className="bg-secondary/50">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{siteData.donation.title}</h2>
          <p className="mt-4 text-lg text-muted-foreground">{siteData.donation.message}</p>
        </div>
        <div className="mt-10 mx-auto max-w-xl flex flex-col gap-8">
            <Card className="shadow-lg">
                <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Heart className="text-primary" />
                    <span>Doe com PIX</span>
                </CardTitle>
                <CardDescription>Para doações, use a chave pix abaixo:</CardDescription>
                </CardHeader>
                <CardContent>
                <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-2 rounded-lg border bg-muted p-4">
                    <code className="flex-1 text-center sm:text-left font-mono text-sm text-muted-foreground break-all">
                    {siteData.donation.pixKey}
                    </code>
                    <Button onClick={() => handleCopy(siteData.donation.pixKey, 'PIX')} className="w-full sm:w-auto shrink-0">
                    <Copy className="mr-2 h-4 w-4" />
                    copie chave pix
                    </Button>
                </div>
                </CardContent>
            </Card>
            <Card className="shadow-lg">
                <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <DollarSign className="text-primary" />
                    <span>Doe com PayPal</span>
                </CardTitle>
                <CardDescription>Para doações internacionais, você pode usar o link do PayPal ou copiar meu e-mail abaixo.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <Button asChild className="w-full">
                        <Link href={siteData.donation.paypalLink} target="_blank" rel="noopener noreferrer">
                            Doe com link PayPal
                        </Link>
                    </Button>
                    <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-2 rounded-lg border bg-muted p-4">
                        <code className="flex-1 text-center sm:text-left font-mono text-sm text-muted-foreground break-all">
                        {siteData.donation.pixKey}
                        </code>
                        <Button onClick={() => handleCopy(siteData.donation.pixKey, 'email')} className="w-full sm:w-auto shrink-0">
                        <Copy className="mr-2 h-4 w-4" />
                        copie o e-mail
                        </Button>
                    </div>
                </CardContent>
            </Card>
            <ProgressCard />
        </div>
      </div>
    </section>
  );
}
