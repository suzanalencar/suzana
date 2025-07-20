'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { siteData } from '@/lib/site-data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { submitContactForm } from '@/app/actions';
import { Send } from 'lucide-react';
import { useState } from 'react';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  message: z.string().min(10, {
    message: 'Message must be at least 10 characters.',
  }).max(500, {
    message: 'Message must not be longer than 500 characters.'
  }),
});

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    const result = await submitContactForm(values);

    if (result.success) {
      toast({
        title: 'Message Sent!',
        description: 'Thank you for reaching out. I will get back to you soon!',
      });
      form.reset();
    } else {
       toast({
        title: 'Error',
        description: result.message || 'Something went wrong. Please try again.',
        variant: 'destructive',
      });
    }
    setIsSubmitting(false);
  }

  return (
    <section id="contact" className="bg-background">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{siteData.contact.title}</h2>
            <p className="mt-4 text-lg text-muted-foreground">{siteData.contact.message}</p>
        </div>

        <div className="mt-10 mx-auto max-w-xl">
            <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle>Send a Message</CardTitle>
                    <CardDescription>Fill out the form below and I'll get back to you.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Your Name" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="your.email@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                         <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                                <Textarea placeholder="Your message of support..." {...field} rows={6} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <Button type="submit" className="w-full" disabled={isSubmitting}>
                           {isSubmitting ? 'Sending...' : (
                               <>
                                <Send className="mr-2 h-4 w-4" />
                                Send Message
                               </>
                           )}
                        </Button>
                    </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}
