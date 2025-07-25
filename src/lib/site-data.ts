
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
        content: "Me chamo Suzana Alencar, tenho 23 anos e sou graduada em Engenharia Civil. Desde a infância, fui incentivada a pesquisar, ler e escrever, o que despertou em mim uma paixão por compreender como as cidades funcionam, são construídas e podem se tornar mais **acessíveis e sustentáveis**. Também fui profundamente influenciada pelas escolas que frequentei, onde o incentivo ao **voluntariado** me ensinou o valor de ajudar o outro e atuar de forma ética e comprometida com o bem coletivo.\n\nAo longo da minha formação, desenvolvi um interesse crescente pela interligação entre ciência, tecnologia e sociedade, buscando entender como esses campos moldam a vida cotidiana. Acredito no poder do conhecimento para **transformar realidades** e sou movida pelo desejo de contribuir com soluções que promovam **justiça social, inovação e sustentabilidade**. Aprender com diferentes culturas, desafios e histórias é o que me inspira a continuar estudando e atuando em contextos globais.",
        images: [
          { url: "/eu.JPG", hint: "student portrait" },
        ],
      },
      {
        title: "Ensino Fundamental e Médio",
        content: "Desde pequena, fui incentivada a ler, escrever e pesquisar. Quando tinha por volta de 8 anos, participei de um concurso de escrita literária na escola e recebi minha **primeira medalha**, um reconhecimento que marcou profundamente meu interesse pelo conhecimento. Ainda na infância, aprendi sobre empatia e responsabilidade social, valores que me acompanham até hoje. Por morar e estudar em uma comunidade com grande diversidade cultural, desenvolvi um olhar sensível às diferentes realidades e um senso de pertencimento que me motiva a agir em prol do coletivo. Aos 12 anos, tive a oportunidade de visitar a nascente do rio Tietê e escrever um texto para um livro elaborado pela turma: uma vivência que despertou ainda mais meu gosto pela **pesquisa de campo**, pela observação e pela escrita com propósito.\n\nDesde então, venho me engajando em diversas ações voluntárias, como distribuição de produtos de higiene, roupas e alimentos em contextos de vulnerabilidade. Durante a **pandemia**, organizei e participei de campanhas de arrecadação, dedicando fins de semana a garantir que pessoas em situação de rua tivessem acesso ao básico. Essas experiências reforçaram minha convicção de que o conhecimento deve caminhar lado a lado com a ação social.\n\nNo ensino médio, mergulhei em atividades acadêmicas que ampliaram minha visão de mundo. Fui participante ativa de **Simulações da ONU**, onde pude desenvolver minha oratória, argumentação e capacidade de negociação. Em 2018, fui contemplada com a **LALA Scholarship** (Latin American Leadership Academy) para participar de um bootcamp de liderança juvenil na Colômbia, voltado à formação de jovens comprometidos com o impacto social na América Latina. Infelizmente, o evento coincidiu com meu calendário escolar, e não pude comparecer, mas o reconhecimento por meio da bolsa segue como um marco importante da minha trajetória e dos meus valores.",
        images: [
            { url: "/BJ.jpg", hint: "germany landscape" },
            { url: "/simu3.JPG", hint: "classroom" },
            { url: "/simu2.JPG", hint: "student event" }
        ],
      },
      {
        title: "Graduação",
        content: "Comecei a faculdade cheia de planos, mas um mês e meio depois veio a pandemia. Mesmo assim, fiz o possível para me manter ativa. Logo no segundo semestre, entrei para a **EJEM**, a Empresa Júnior de Engenharia do Mackenzie. Primeiro atuei como projetista, depois como gerente de RH. Aprendi a lidar com prazos, pessoas e projetos de verdade, e essa vivência me ajudou a entender o que realmente me motivava dentro da engenharia.\n\nNo ensino remoto, fui **monitora** de Física II e de Materiais de Construção. Foi uma forma de me manter próxima da universidade e também de me desafiar a explicar conteúdos técnicos para outras pessoas. Assim que as coisas voltaram ao presencial, comecei meu primeiro estágio. Pude acompanhar obras, aprender na prática e entender melhor o impacto real das decisões técnicas no dia a dia da cidade.\n\nCom o tempo, fui me interessando cada vez mais por pesquisa. Consegui uma **bolsa do MackPesquisa** para estudar sustentabilidade na área de materiais de construção. E quando chegou a hora do TCC, já sabia que queria falar sobre **mobilidade urbana**. Escrevi sobre os caminhos possíveis para tornar as cidades mais acessíveis, conectadas e sustentáveis. Foi nesse processo que entendi como engenharia e tecnologia podem (e devem) caminhar junto com o cuidado pelas pessoas e pelo lugar onde vivem.",
        images: [
            { url: "/grad1.jpg", hint: "graduation ceremony" },
            { url: "/facul.JPG", hint: "university building" },
            { url: "/ejem.jpg", hint: "student group" }
        ],
      }
    ]
  },
  professionalExperiences: {
    title: "Experiências Profissionais",
    experiences: [
      {
        title: "EJEM",
        description: "Comecei na EJEM trabalhando com projetos de engenharia civil e, mais adiante, atuei como gerente de RH. Foi onde aprendi a lidar com prazos, pessoas e responsabilidades reais, ainda dentro da universidade.",
        image: "/ejem mack logo.png",
        imageHint: "research lab"
      },
      {
        title: "CCR",
        description: "No meu primeiro estágio, integrei a equipe de Via Permanente. Acompanhei de perto serviços essenciais para a manutenção da malha ferroviária, ganhando noções valiosas sobre infraestrutura e operação em escala.",
        image: "/CCR.png",
        imageHint: "startup office"
      },
      {
        title: "RFM",
        description: "Trabalhei na obra de um edifício residencial, acompanhando de perto as etapas construtivas e os processos de orçamento. Foi ali que aproximei o conhecimento técnico de obra com a rotina de campo.",
        image: "/rfm.jpg",
        imageHint: "team collaboration"
      },
      {
        title: "Alphaville",
        description: "Atualmente, atuo na equipe de gestão técnica de projetos da loteadora. Participo do desenvolvimento de empreendimentos em diferentes regiões do Brasil, com foco em viabilidade, planejamento e urbanismo sustentável.",
        image: "/alphaville.png",
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
