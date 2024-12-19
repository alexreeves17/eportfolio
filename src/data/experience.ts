export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
}

export const experience: Experience[] = [
  {
    title: 'Technical Product Manager',
    company: 'GE HealthCare',
    period: 'Jul 2021 - Present',
    description:
      'Technical Product Manager for Emergency Department module for flagship platform; writing product specifications, multi-generation feature roadmap, and overseeing product delivery at client implementations.Technical Product Manager for internal Integrated Platform Configuration Engine; writing product requirements & technical specifications to enable consultants to implement features that currently require developer resources.Implemented algorithm to identify critical care downgrade candidates up to 72 hours in advance of transfer readiness, which reduced time-to-transfer by 25% and resulted in 46 bed days saved per year.Own product lifecycle for real-time analytics platform at Pediatrics hospital, ranging from aggregation of capacity data, patient-level throughput and quality alerts, and machine learning capacity forecasting, resulting in a reduction of 1,000+ avoidable days and deferred/delayed admissions by >90%, creating capacity for 300+ patients.Managed real-time data integration requirements and delivery for clients EHRs, 3rd party applications, Data Lakes, and ingestion to internal data model that processes 150,000+ messages per day.Led 3 new product design initiatives in Health Equity & Pathway Management for R&D projects through exploratory research, UI/UX prototyping in Figma, and beta program development & delivery.Created SQL scripts and adoption strategy for clients’ Business Intelligence teams which parses millions of JSON records of historical product audit information and aggregates into flat tables for analysis ',
    skills: [
      'SQL',
      'Simulation Modeling',
      'Figma',
      'Product Requirements',
      'Excel',
    ],
  },
  {
    title: 'CEO, Co-founder',
    company: 'bezel LLC',
    period: 'Mar 2020 - Jul 2021',
    description:
      'I started bezel with two of my best friends with the intention of solving an issue we all struggled with: focusing on our work without distractions. Our app, bezel Focus, aims to streamline the process of a research-backed work style that incorporates frequent micro-breaks. In streamlining the process, we created a method of efficiently structuring balanced work sessions to maximize productivity and minimize burnout.',
    skills: ['Notion', 'Figma', 'Product Requirements'],
  },
  {
    title: 'Audit & Assurance Intern',
    company: 'Deloitte LLP',
    period: 'Jan 2021 - Mar 2021',
    description:
      '• Created interactive dashboards to identify pricing differentials in Oil and Gas reserves exceeding acceptable thresholds. Performed multiple-regression analysis on client revenue data to assess need for further audit procedures.Created statistical sample selections for cash, inventory, and legal confirmations testing.',
    skills: ['Tableau', 'Excel'],
  },
  {
    title: 'Programmatic Analyst Intern',
    company: 'NASA',
    period: 'May 2020 - Aug 2020',
    description:
      'Designed, developed, and deployed an institutional risk tracking system for the Exploration Directorate in MS SharePoint and connected the data to an interactive Tableau dashboard for management use. Automated the data consolidation, preparation, and visualization process for Earned Value Management datasets to increase efficiency in generating monthly reports by reducing manual preparation and leaving more time for insight generation.',
    skills: ['Tableau', 'Excel'],
  },
  {
    title: 'Co-op Contract Specialist',
    company: 'NASA',
    period: 'Aug 2019 - Dec 2019',
    description:
      'Performed contract administration duties on multiple contracts worth $15B+, including the drafting of task orders, processing of invoices, and coordination between Contracting Officer, Contractors, and internal customers.Created an excel-based contract tracking tool that revamped existing tracking methods and added a financial dashboard to provide Contracting Officers with more insight.',
    skills: ['Excel'],
  },
];
