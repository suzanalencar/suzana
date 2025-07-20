import type { LucideIcon } from "lucide-react";

export const siteData = {
  name: "Suzana",
  appName: "Goethe Gateway",
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
    image: "https://placehold.co/1200x600",
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
        content: "I'm a passionate student with a deep interest in Science and Technology Studies. My academic journey has been driven by a curiosity to understand how society and technology shape one another. Being accepted into the Master's program at Goethe Universität is the culmination of years of hard work and dedication."
      },
      {
        title: "Why Germany?",
        content: "Germany is a global leader in technological innovation and critical thought. The STS program at Goethe Universität offers a unique curriculum and renowned faculty that I believe will be instrumental in my growth as a researcher. This isn't just about a degree; it's about immersing myself in a new culture and academic environment."
      },
      {
        title: "Your Impact",
        content: "Your support directly helps cover essential costs that are not covered by scholarships. It helps with the flight to Germany, securing a place to live, health insurance, and daily living expenses. You're not just donating; you're investing in a dream and becoming a crucial part of my story."
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
    { name: "My Story", href: "#my-story" },
    { name: "Support", href: "#support" },
    { name: "Contact", href: "#contact" },
  ],
};

export type SiteData = typeof siteData;
