
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { siteData } from '@/lib/site-data';
import Image from 'next/image';
import { ProgressCard } from './progress-card';

export function FundraisingGoals() {
  const { goal, goalEUR, budget } = siteData.fundraising;
  
  const formatCurrency = (amount: number, currency: 'BRL' | 'EUR') => {
    const locale = currency === 'BRL' ? 'pt-BR' : 'de-DE';
    return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(amount);
  }

  return (
    <section id="custos" className="bg-background">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{siteData.fundraising.title}</h2>
            <div className="mt-4 text-lg text-muted-foreground space-y-4 text-justify">
                <p>
                    Para conseguir o visto de estudante, preciso comprovar que tenho o valor mínimo de <strong>11.904 euros</strong>. Esse valor é obrigatório e deve ser depositado em uma conta bloqueada, como garantia de que posso me sustentar durante o primeiro ano do mestrado.
                </p>
                <p>
                    No entanto, esse dinheiro só pode ser acessado após a liberação do meu visto e minha chegada à Alemanha. Por isso, estou arrecadando doações para cobrir as despesas iniciais da viagem também.
                </p>
            </div>
        </div>
        <div className="mt-10 mx-auto max-w-lg">
             <Image
                src="/Comprovaçãorendaalemanha.JPG"
                alt="Comprovação de Renda para Visto de Estudante na Alemanha"
                width={800}
                height={200}
                className="rounded-lg shadow-lg w-full h-auto"
                data-ai-hint="financial requirement document"
              />
        </div>
        <div className="mt-10 max-w-3xl mx-auto">
            <Card className="shadow-lg h-full">
            <CardHeader>
                <CardTitle>Detalhamento de gastos</CardTitle>
                <CardDescription>Valores para 1 ano (requerimento para obter o visto)</CardDescription>
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
        <div className="mt-10 mx-auto max-w-xl">
            <ProgressCard />
        </div>
      </div>
    </section>
  );
}
