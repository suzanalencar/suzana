import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { UniversityHighlight } from '@/components/university-highlight';
import { Donation } from '@/components/donation';
import { MyStory } from '@/components/my-story';
import { FundraisingGoals } from '@/components/fundraising-goals';
import { Contact } from '@/components/contact';
import { Separator } from '@/components/ui/separator';
import { AcceptanceLetter } from '@/components/acceptance-letter';

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <UniversityHighlight />
        <Donation />
        <MyStory />
        <AcceptanceLetter />
        <FundraisingGoals />
        <Contact />
      </main>
      <footer className="bg-muted/50">
        <div className="container flex flex-col items-center justify-center gap-2 py-8 text-center text-sm text-muted-foreground">
            <p>Built with 💚 in hopes of a new beginning.</p>
            <p>Goethe Gateway &copy; {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
}
