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
        content: "Me chamo Suzana Alencar, tenho 23 anos e sou graduada em Engenharia Civil. Desde a infância, fui incentivada a pesquisar, ler e escrever, o que despertou em mim uma paixão por compreender como as cidades funcionam, são construídas e podem se tornar mais acessíveis e sustentáveis. Também fui profundamente influenciada pelas escolas que frequentei, onde o incentivo ao voluntariado me ensinou o valor de ajudar o outro e atuar de forma ética e comprometida com o bem coletivo.\n\nAo longo da minha formação, desenvolvi um interesse crescente pela interligação entre ciência, tecnologia e sociedade, buscando entender como esses campos moldam a vida cotidiana. Acredito no poder do conhecimento para transformar realidades e sou movida pelo desejo de contribuir com soluções que promovam justiça social, inovação e sustentabilidade. Aprender com diferentes culturas, desafios e histórias é o que me inspira a continuar estudando e atuando em contextos globais.",
        images: [
          { url: "https://placehold.co/600x400", hint: "student portrait" },
          { url: "https://placehold.co/600x400", hint: "volunteer work" }
        ],
      },
      {
        title: "Ensino Fundamental e Médio",
        content: "Desde pequena, fui incentivada a ler, escrever e pesquisar. Quando tinha por volta de 8 anos, participei de um concurso de escrita literária na escola e recebi minha primeira medalha, um reconhecimento que marcou profundamente meu interesse pelo conhecimento. Ainda na infância, aprendi sobre empatia e responsabilidade social, valores que me acompanham até hoje. Por morar e estudar em uma comunidade com grande diversidade cultural, desenvolvi um olhar sensível às diferentes realidades e um senso de pertencimento que me motiva a agir em prol do coletivo. Aos 12 anos, tive a oportunidade de visitar a nascente do rio Tietê e escrever um texto para um livro elaborado pela turma: uma vivência que despertou ainda mais meu gosto pela pesquisa de campo, pela observação e pela escrita com propósito.\n\nDesde então, venho me engajando em diversas ações voluntárias, como distribuição de produtos de higiene, roupas e alimentos em contextos de vulnerabilidade. Durante a pandemia, organizei e participei de campanhas de arrecadação, dedicando fins de semana a garantir que pessoas em situação de rua tivessem acesso ao básico. Essas experiências reforçaram minha convicção de que o conhecimento deve caminhar lado a lado com a ação social.\n\nNo ensino médio, mergulhei em atividades acadêmicas que ampliaram minha visão de mundo. Fui participante ativa de Simulações da ONU, onde pude desenvolver minha oratória, argumentação e capacidade de negociação. Em 2018, fui contemplada com a LALA Scholarship (Latin American Leadership Academy) para participar de um bootcamp de liderança juvenil na Colômbia, voltado à formação de jovens comprometidos com o impacto social na América Latina. Infelizmente, o evento coincidiu com meu calendário escolar, e não pude comparecer, mas o reconhecimento por meio da bolsa segue como um marco importante da minha trajetória e dos meus valores.",
        images: [
            { url: "https://placehold.co/600x400", hint: "germany landscape" },
            { url: "https://placehold.co/600x400", hint: "classroom" }
        ],
      },
      {
        title: "Graduação",
        content: "Your support directly helps cover essential costs that are not covered by scholarships. It helps with the flight to Germany, securing a place to live, health insurance, and daily living expenses. You're not just donating; you're investing in a dream and becoming a crucial part of my story.",
        images: [
            { url: "https://placehold.co/600x400", hint: "community support" },
            { url: "https://placehold.co/600x400", hint: "graduation ceremony" }
        ],
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
