'use client';

import { Copy, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { siteData } from '@/lib/site-data';
import { Progress } from './ui/progress';
import { useEffect, useState } from 'react';

export function Donation() {
  const { toast } = useToast();
  const { current, goal } = siteData.fundraising;
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const percentage = (current / goal) * 100;
    const timer = setTimeout(() => setProgress(percentage), 300);
    return () => clearTimeout(timer);
  }, [current, goal]);

  const handleCopy = () => {
    navigator.clipboard.writeText(siteData.donation.pixKey);
    toast({
      title: 'PIX key copied!',
      description: 'Thank you for your support 💚',
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(amount);
  }

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
                    <span>Donate with PIX</span>
                </CardTitle>
                <CardDescription>Click to copy the key below.</CardDescription>
                </CardHeader>
                <CardContent>
                <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-2 rounded-lg border bg-muted p-4">
                    <code className="flex-1 text-center sm:text-left font-mono text-sm text-muted-foreground break-all">
                    {siteData.donation.pixKey}
                    </code>
                    <Button onClick={handleCopy} className="w-full sm:w-auto shrink-0">
                    <Copy className="mr-2 h-4 w-4" />
                    Copy PIX Key
                    </Button>
                </div>
                </CardContent>
            </Card>

            <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle>Progress</CardTitle>
                    <CardDescription>
                        {formatCurrency(current)} raised of {formatCurrency(goal)} goal.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Progress value={progress} className="h-4" />
                </CardContent>
                <CardFooter>
                    <p className="text-sm text-muted-foreground w-full text-center">
                        Thank you for every single contribution!
                    </p>
                </CardFooter>
            </Card>
        </div>
      </div>
    </section>
  );
}
