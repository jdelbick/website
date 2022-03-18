import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Jamie Delbick | Software Engineer',
  lang: 'en',
  description: 'Welcome to my personal website',
};

// HERO DATA
export const heroData = {
  cta: 'About Me',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile-cal.jpg',
  paragraphOne: 'I am currently a Software Engineer at Adobe working on a large-scale enterprise cloud service. From my experience building micro services for the multi-tenant cloud service, I became passionate about Node.js and the Open Source community surrounding it.',
  paragraphTwo: 'Before starting at Adobe in 2018, I was a student at UC Berkeley studying Applied Mathematics with a focus on Computer Science.',
  paragraphThree: 'When I am not coding, you will find me snowboarding, running, or doing anything involving the outdoors.',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'api-world-conference.jpg',
    title: 'Speaker at API World',
    info: 'Jamie, along with an Adobe co-worker, gave a 25 minute virtual talk at API World, one of the largest API focused conferences with over 4000 attendees.',
    info2: 'The talk focused on Content and Commerce AI APIs for Content Intelligence, using AEM text tags as an existing use case.',
    url: 'https://emamo.com/event/api-world-2021/r/speaker/jamie-delbick',
  },
  {
    id: nanoid(),
    img: 'adobe-developers-live-content.jpg',
    title: 'Speaker at Adobe Developers Live - Content',
    info: 'Jamie, along with her co-worker, gave a 25 minute talk on how to extend AEM as a Cloud Service through asset microservices.',
    info2: 'The demo includes a live coding example on how to set up, deploy, and integrate a custom worker using App Builder, previously known as Project Firefly',
    url: 'https://www.youtube.com/watch?v=6wdbd050UMM&t=4s'
  },
  {
    id: nanoid(),
    img: 'adobe-developers-conf.png',
    title: 'Speaker at Adobe Developers Live - Commerce',
    info: 'Jamie gave a 45 minute talk and live demo displaying how to customize asset processing for AEM as a Cloud Service using App Builder, previously known as Project Firefly.',
    info2: '',
    url: 'https://www.youtube.com/watch?v=zpkkkQRoYho&t=10s'
  },
  {
    id: nanoid(),
    title: 'Using Proxyquire with nested dependencies',
    info: 'Medium Article',
    url: 'https://medium.com/@jamie.delbick/using-proxyquire-with-nested-dependencies-fd3a33d780e4',
    buttonName: 'Read here'
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Please reach out to via my email or LinkedIn.',
  btn: 'email',
  email: 'jamie.delbick@gmail.com',
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
    }
  ],
};
