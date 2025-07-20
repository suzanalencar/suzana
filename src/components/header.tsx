'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, University, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { siteData } from '@/lib/site-data';
import { cn } from '@/lib/utils';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = siteData.navLinks.map((link) => (
      <Link
        key={link.name}
        href={link.href}
        onClick={() => setIsMobileMenuOpen(false)}
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        {link.name}
      </Link>
  ));


  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full border-b border-transparent bg-background transition-all duration-300',
        { 'border-border bg-background/80 backdrop-blur-sm': isScrolled }
      )}
    >
      <div className="container flex h-16 items-center">
        <Link href="#" className="mr-6 flex items-center gap-2">
          <University className="h-6 w-6 text-primary" />
          <span className="font-bold">{siteData.appName}</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">{navLinks}</nav>
        <div className="flex flex-1 items-center justify-end gap-4">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[240px]">
              <div className="flex h-full flex-col">
                <div className="mb-8 flex items-center justify-between">
                   <Link href="#" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                    <University className="h-6 w-6 text-primary" />
                    <span className="font-bold">{siteData.appName}</span>
                  </Link>
                </div>
                <nav className="flex flex-col items-start gap-6">
                 {navLinks}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
          <Button asChild className="hidden md:flex">
             <Link href={siteData.hero.buttonSecondary.href}>{siteData.hero.buttonSecondary.text}</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
