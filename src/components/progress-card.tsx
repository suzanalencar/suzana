
'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { siteData } from '@/lib/site-data';

export function ProgressCard() {
  const { current, goal } = siteData.fundraising;
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const percentage = (current / goal) * 100;
    const timer = setTimeout(() => setProgress(percentage), 300);
    return () => clearTimeout(timer);
  }, [current, goal]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(amount);
  }

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle>Progresso</CardTitle>
        <CardDescription>
          {formatCurrency(current)} arrecadados de {formatCurrency(goal)}.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Progress value={progress} className="h-4" />
      </CardContent>
      <CardFooter>
        <p className="text-sm text-muted-foreground w-full text-center">
          Obrigada por cada contribuição!
        </p>
      </CardFooter>
    </Card>
  );
}
