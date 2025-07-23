import type { LucideIcon } from "lucide-react";
import { Mail, Linkedin, Instagram } from 'lucide-react';

export const siteData = {
  name: "Suzana",
  appName: "Mestrado Internacional - Suzana",
  hero: {
    title: "SuzanaAlencar",
    subtitle: "A educação me trouxe até aqui. Com você, posso ir ainda mais longe.",
    buttonPrimary: {
      text: "Leia minha história",
      href: "#my-story",
    },
    buttonSecondary: {
      text: "Apoie meu mestrado",
      href: "#support",
    },
  },
  university: {
    name: "Goethe Universität Frankfurt",
    image: "/Goethe.jpg",
    imageHint: "university campus",
    badge: "Mestrado em Science and Technology Studies",
  },
  donation: {
    title: "Aopie meus estudos com uma doação em PIX",
    pixKey: "alencars.suzana@gmail.com", // Example PIX key
    message: "Toda contribuição me ajuda a estar um passo mais perto desse sonho. Obrigada por ser parte disso!",
  },
  story: {
    title: "My Story: A Journey to Germany",
    sections: [
      {
        title: "Who I Am",
        content: "I'm a passionate student with a deep interest in Science and Technology Studies. My academic journey has been driven by a curiosity to understand how society and technology shape one another. Being accepted into the Master's program at Goethe Universität is the culmination of years of hard work and dedication.",
        image: "https://placehold.co/600x400",
        imageHint: "student portrait",
      },
      {
        title: "Why Germany?",
        content: "Germany is a global leader in technological innovation and critical thought. The STS program at Goethe Universität offers a unique curriculum and renowned faculty that I believe will be instrumental in my growth as a researcher. This isn't just about a degree; it's about immersing myself in a new culture and academic environment.",
        image: "https://placehold.co/600x400",
        imageHint: "germany landscape",
      },
      {
        title: "Your Impact",
        content: "Your support directly helps cover essential costs that are not covered by scholarships. It helps with the flight to Germany, securing a place to live, health insurance, and daily living expenses. You're not just donating; you're investing in a dream and becoming a crucial part of my story.",
        image: "https://placehold.co/600x400",
        imageHint: "community support",
      }
    ]
  },
  professionalExperiences: {
    title: "Professional Experiences",
    subtitle: "A brief look into my past roles and projects.",
    experiences: [
      {
        title: "Research Assistant",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "https://placehold.co/400x300",
        imageHint: "research lab"
      },
      {
        title: "Tech Startup Intern",
        description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: "https://placehold.co/400x300",
        imageHint: "startup office"
      },
      {
        title: "Community Project Lead",
        description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        image: "https://placehold.co/400x300",
        imageHint: "team collaboration"
      },
      {
        title: "Academic Tutor",
        description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        image: "https://placehold.co/400x300",
        imageHint: "tutoring session"
      },
      {
        title: "Freelance Analyst",
        description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.",
        image: "https://placehold.co/400x300",
        imageHint: "data analysis"
      }
    ]
  },
  fundraising: {
    title: "Meta",
    goal: 81000,
    current: 25,
    currency: "BRL",
    budget: [
      { item: "Round-trip Airfare", cost: 1200, currency: "€" },
      { item: "First 3 Months' Rent & Deposit", cost: 2100, currency: "€" },
      { item: "Health Insurance (1 Year)", cost: 800, currency: "€" },
      { item: "Visa & Administrative Fees", cost: 300, currency: "€" },
      { item: "Initial Living Expenses (Food, Transport)", cost: 600, currency: "€" },
    ],
  },
  contact: {
    title: "Get in Touch",
    message: "Have questions or want to send a message of support? I'd love to hear from you!",
  },
  navLinks: [
    { name: "Apoie-me", href: "#support" },
    { name: "My Story", href: "#my-story" },
  ],
  socialLinks: [
    { name: 'Email', href: 'mailto:example@email.com', icon: Mail },
    { name: 'LinkedIn', href: '#', icon: Linkedin },
    { name: 'Instagram', href: '#', icon: Instagram },
  ],
};

export type SiteData = typeof siteData;
