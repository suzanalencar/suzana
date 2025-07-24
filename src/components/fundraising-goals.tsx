'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { siteData } from '@/lib/site-data';
import Image from 'next/image';

export function FundraisingGoals() {
  const { goal, goalEUR, budget } = siteData.fundraising;
  
  const formatCurrency = (amount: number, currency: 'BRL' | 'EUR') => {
    const locale = currency === 'BRL' ? 'pt-BR' : 'de-DE';
    return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(amount);
  }

  return (
    <section className="bg-background">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{siteData.fundraising.title}</h2>
            <p className="mt-4 text-lg text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
        </div>
        <div className="mt-10 mx-auto max-w-lg">
             <Image
                src="https://placehold.co/600x400"
                alt="Fundraising visual"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
                data-ai-hint="money chart"
              />
        </div>
        <div className="mt-10 max-w-3xl mx-auto">
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
                            <TableHead className="text-right">Euros</TableHead>
                            <TableHead className="text-right">Reais</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {budget.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell className="font-medium">{item.item}</TableCell>
                                <TableCell className="text-right">{formatCurrency(item.costEUR, 'EUR')}</TableCell>
                                <TableCell className="text-right">{formatCurrency(item.cost, 'BRL')}</TableCell>
                            </TableRow>
                        ))}
                        <TableRow className="bg-muted/50 font-bold">
                            <TableCell>Total Goal</TableCell>
                            <TableCell className="text-right">{formatCurrency(goalEUR, 'EUR')}</TableCell>
                            <TableCell className="text-right">{formatCurrency(goal, 'BRL')}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}
