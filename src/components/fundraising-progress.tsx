'use client';

import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { siteData } from '@/lib/site-data';
import { useEffect, useState } from 'react';

export function FundraisingProgress() {
  const { current, goal, currency, budget } = siteData.fundraising;
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const percentage = (current / goal) * 100;
    // Add a small delay for animation effect on load
    const timer = setTimeout(() => setProgress(percentage), 300);
    return () => clearTimeout(timer);
  }, [current, goal]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(amount);
  }

  return (
    <section className="bg-secondary/50">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{siteData.fundraising.title}</h2>
        </div>
        <div className="mt-10 grid gap-10 lg:grid-cols-5">
            <div className="lg:col-span-3">
                 <Card className="shadow-lg h-full">
                    <CardHeader>
                        <CardTitle>Budget Breakdown</CardTitle>
                        <CardDescription>Here's how your contribution will be used.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Item</TableHead>
                                    <TableHead className="text-right">Cost</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {budget.map((item, index) => (
                                    <TableRow key={index}>
                                        <TableCell className="font-medium">{item.item}</TableCell>
                                        <TableCell className="text-right">{formatCurrency(item.cost)}</TableCell>
                                    </TableRow>
                                ))}
                                <TableRow className="bg-muted/50 font-bold">
                                    <TableCell>Total Goal</TableCell>
                                    <TableCell className="text-right">{formatCurrency(goal)}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
            <div className="lg:col-span-2">
                <Card className="shadow-lg h-full flex flex-col justify-center">
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
      </div>
    </section>
  );
}
