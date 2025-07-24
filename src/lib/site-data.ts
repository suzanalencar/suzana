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
    title: "Apoie meus estudos com uma doação em PIX",
    pixKey: "alencars.suzana@gmail.com", // Example PIX key
    message: "Toda contribuição me ajuda a estar um passo mais perto desse sonho. Obrigada por fazer parte!",
  },
  story: {
    title: "Minha história: uma trajetória para a Alemanha",
    sections: [
      {
        title: "Quem Sou Eu",
        content: "I'm a passionate student with a deep interest in Science and Technology Studies. My academic journey has been driven by a curiosity to understand how society and technology shape one another. Being accepted into the Master's program at Goethe Universität is the culmination of years of hard work and dedication.",
        image: "https://placehold.co/600x400",
        imageHint: "student portrait",
      },
      {
        title: "Ensino Fundamental e Médio?",
        content: "Germany is a global leader in technological innovation and critical thought. The STS program at Goethe Universität offers a unique curriculum and renowned faculty that I believe will be instrumental in my growth as a researcher. This isn't just about a degree; it's about immersing myself in a new culture and academic environment.",
        image: "https://placehold.co/600x400",
        imageHint: "germany landscape",
      },
      {
        title: "Graduação",
        content: "Your support directly helps cover essential costs that are not covered by scholarships. It helps with the flight to Germany, securing a place to live, health insurance, and daily living expenses. You're not just donating; you're investing in a dream and becoming a crucial part of my story.",
        image: "https://placehold.co/600x400",
        imageHint: "community support",
      }
    ]
  },
  professionalExperiences: {
    title: "Experiências Profissionais",
    subtitle: "A brief look into my past roles and projects.",
    experiences: [
      {
        title: "EJEM",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "https://placehold.co/400x300",
        imageHint: "research lab"
      },
      {
        title: "CCR",
        description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: "https://placehold.co/400x300",
        imageHint: "startup office"
      },
      {
        title: "RFM",
        description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        image: "https://placehold.co/400x300",
        imageHint: "team collaboration"
      },
      {
        title: "Alphaville",
        description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        image: "https://placehold.co/400x300",
        imageHint: "tutoring session"
      },
    ]
  },
  fundraising: {
    title: "Custos",
    goal: 98322.41,
    goalEUR: 14615,
    current: 25,
    currency: "BRL",
    budget: [
      { item: "Seguro saúde", cost: 11644.50, costEUR: 1731 },
      { item: "Acomodação e depósito caução", cost: 45915.19, costEUR: 6825},
      { item: "Alimentação", cost: 20182.50, costEUR: 3000  },
      { item: "Matrícula (4 semestres)", cost: 10252.71, costEUR: 1524},
      { item: "Emergência + despesas iniciais", cost: 10327.52, costEUR: 1535.52},
    ],
  },
  navLinks: [
    { name: "Apoie-me", href: "#support" },
    { name: "Minha história", href: "#my-story" },
    { name: "Custos", href: "#custos" },
  ],
  socialLinks: [
    { name: 'Email', href: 'alencars.suzana@gmail.com', icon: Mail },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/suzana-alencar-a57281282/', icon: Linkedin },
    { name: 'Instagram', href: 'https://www.instagram.com/suzanalencar/', icon: Instagram },
  ],
};

export type SiteData = typeof siteData;
