import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Jamie Delbick | Software Engineer',
  lang: 'en',
  description: 'Welcome to my personal website',
};

// HERO DATA
export const heroData = {
  cta: 'Learn more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile-cal.jpg',
  paragraphOne: 'I am currently a Fullstack Senior Software Engineer at Adobe working on Adobe GenStudio for Performance Marketing. I previously built microservices for AEM as a Cloud Service, and then transitioned to GenStudio where I helped implement the insights platform - integrating data from Meta, LinkedIn, and other sources with Customer Journey Analytics (CJA) to create compelling dashboards and visualizations that show how marketing assets perform.',
  paragraphTwo: 'Now I focus on the GenStudio canvas, building the creative tools that enable marketers to generate and customize content. I also work extensively on extensibility, helping developers build integrations and extensions for the platform - including the expertise I shared in my recent Adobe Summit talk on extending GenStudio.',
  paragraphThree: 'Before starting at Adobe in 2018, I was a student at UC Berkeley studying Applied Mathematics with a focus on Computer Science. When I am not coding, you will find me snowboarding, running, or doing anything involving the outdoors.',
  resume: 'https://www.linkedin.com/in/jamiedelbick/', // Link to LinkedIn profile as resume
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),  
    img: 'adobe-summit-2025.png',
    title: 'Speaker at Adobe Summit 2025',
    info: 'A Developer\'s Guide: Extending Adobe GenStudio - Discover how to extend and enhance GenStudio for Performance Marketing. Dive into key concepts, tools, and best practices that empower you to build integrations, create extensions, and adapt the product to meet your unique requirements.',
    info2: 'Key takeaways include getting the technical knowledge to unlock new possibilities and gaining practical experience through real-world scenarios, code samples, and examples tailored to a developer\'s workflow.',
    url: 'https://business.adobe.com/summit/2025/sessions/a-developers-guide-extending-adobe-genstudio-os606.html',
  },
  {
    id: nanoid(),
    img: 'api-world-conference.jpg',
    title: 'Speaker at API World',
    info: 'I gave a 25 minute virtual talk, along with an Adobe co-worker, at API World, one of the largest API focused conferences with over 4000 attendees.',
    info2: 'The talk focused on Content and Commerce AI APIs for Content Intelligence, using AEM text tags as an existing use case.',
    url: 'https://emamo.com/event/api-world-2021/r/speaker/jamie-delbick',
  },
  {
    id: nanoid(),
    img: 'adobe-developers-live-content.jpg',
    title: 'Speaker at Adobe Developers Live - Content',
    info: 'Along with a co-worker, gave a 25 minute talk on how to extend AEM as a Cloud Service through asset microservices.',
    info2: 'The demo includes a live coding example on how to set up, deploy, and integrate a custom worker using App Builder, previously known as Project Firefly.',
    url: 'https://www.youtube.com/watch?v=6wdbd050UMM&t=4s'
  },
  {
    id: nanoid(),
    img: 'adobe-developers-conf.png',
    title: 'Speaker at Adobe Developers Live - Commerce',
    info: 'Gave a 45 minute talk and live demo displaying how to customize asset processing for AEM as a Cloud Service using App Builder, previously known as Project Firefly.',
    info2: '',
    url: 'https://www.youtube.com/watch?v=zpkkkQRoYho&t=10s'
  },
  {
    id: nanoid(),
    title: 'Using Proxyquire with nested dependencies',
    info: 'Medium Article about my experience switching to a new mocking library for Node.js Mocha tests.',
    url: 'https://medium.com/@jamie.delbick/using-proxyquire-with-nested-dependencies-fd3a33d780e4',
    buttonName: 'Read here'
  },
  {
    id: nanoid(),
    title: 'Personal Website',
    info: 'Personal Website adapted from a Gatsby template written in React.',
    buttonName: 'Source code',
    url: 'https://github.com/jdelbick/website'
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Please reach out to me via my email or LinkedIn.',
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/jamiedelbick/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/jdelbick',
    },
    {
      id: nanoid(),
      name: 'envelope',
      url: 'mailto:jamie.delbick@gmail.com'
    }
  ],
};
