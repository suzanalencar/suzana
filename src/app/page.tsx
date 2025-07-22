import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { UniversityHighlight } from '@/components/university-highlight';
import { Donation } from '@/components/donation';
import { MyStory } from '@/components/my-story';
import { FundraisingGoals } from '@/components/fundraising-goals';
import { Contact } from '@/components/contact';
import { Separator } from '@/components/ui/separator';
import { AcceptanceLetter } from '@/components/acceptance-letter';
import { ProfessionalExperiences } from '@/components/professional-experiences';
import { siteData } from '@/lib/site-data';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main>
        <Hero />
        <UniversityHighlight />
        <Donation />
        <MyStory />
        <ProfessionalExperiences />
        <AcceptanceLetter />
        <FundraisingGoals />
        {/* <Contact /> */}
      </main>
      <footer className="bg-muted/50 border-t">
        <div className="container py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div>
                    <h3 className="font-bold text-lg">{siteData.appName}</h3>
                    <p className="text-muted-foreground text-sm mt-2">
                        Supporting my academic journey to Germany.
                    </p>
                </div>
                <div>
                    <h4 className="font-semibold tracking-wider uppercase text-sm mb-3">My Journey</h4>
                    <nav className="flex flex-col gap-2">
                        {siteData.navLinks.map((link) => (
                            <Link key={link.href} href={link.href} className="text-muted-foreground hover:text-foreground transition-colors text-sm w-fit">
                            {link.name}
                            </Link>
                        ))}
                    </nav>
                </div>
                <div>
                    <h4 className="font-semibold tracking-wider uppercase text-sm mb-3">Connect With Me</h4>
                    <div className="flex items-center gap-4">
                        {siteData.socialLinks.map((social) => (
                            <Link key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                                <social.icon className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            <Separator />
            <div className="mt-8 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left text-sm text-muted-foreground gap-4">
                <p>Built with 💚 in hopes of a new beginning.</p>
                <p>{siteData.appName} &copy; {new Date().getFullYear()}</p>
            </div>
        </div>
      </footer>
    </div>
  );
}
