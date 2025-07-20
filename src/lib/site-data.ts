import type { LucideIcon } from "lucide-react";

export const siteData = {
  name: "Suzana",
  appName: "Mestrado Internacional - Suzana",
  hero: {
    title: "Help Me Study at Goethe Universität",
    subtitle: "I'm Suzana, and I’ve been accepted to study in Germany — with your support, I can make it happen.",
    buttonPrimary: {
      text: "Read My Story",
      href: "#my-story",
    },
    buttonSecondary: {
      text: "Support My Exchange",
      href: "#support",
    },
  },
  university: {
    name: "Goethe Universität Frankfurt",
    image: "https://images.unsplash.com/photo-1590132338664-36a218f62363?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageHint: "university campus",
    badge: "Fall 2025 – Master's Program in STS",
  },
  donation: {
    title: "Support My Journey with a PIX Donation",
    pixKey: "000.000.000-00", // Example PIX key
    message: "Every contribution, no matter the size, brings me one step closer to this dream. Thank you for being part of it.",
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
    title: "Fundraising Goals",
    goal: 5000,
    current: 1500,
    currency: "EUR",
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
    { name: "Support", href: "#support" },
    { name: "My Story", href: "#my-story" },
    { name: "Contact", href: "#contact" },
  ],
};

export type SiteData = typeof siteData;
