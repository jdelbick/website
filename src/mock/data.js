import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Jamie Delbick | Software Engineer',
  lang: 'en',
  description:
    'Jamie Delbick is a staff software engineer at Adobe leading teams and building AI-first enterprise products for creative and marketing workflows.',
};

// HERO DATA
export const heroData = {
  eyebrow: 'Staff Software Engineer at Adobe',
  title: 'I lead engineering teams building AI-first enterprise products.',
  subtitle:
    'With 8+ years of experience, I work on Adobe GenStudio for Performance Marketing, building creative tools that help enterprise teams generate, customize, and scale content. On the side, I explore developer tools, Claude skills, and practical ways to build with AI.',
  highlights: ['AI-First Products', 'Engineering Leadership', 'Enterprise SaaS', 'Creative Technology'],
  primaryCta: 'Explore my work',
  secondaryCta: 'Read my writing',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile-jamie.webp',
  paragraphOne:
    'I am a full-stack staff software engineer at Adobe with 8+ years of experience building enterprise products. I lead teams of engineers building AI-first experiences for GenStudio for Performance Marketing, with a current focus on GenStudio Create Canvas and the creative workflows marketers use to generate, customize, and scale content.',
  paragraphTwo:
    'My day-to-day work spans product engineering, technical leadership, extensibility, and cross-functional execution. Outside of my core product work, I like experimenting with developer tools and AI-assisted workflows, including Claude skills that connect agents to real tools, authenticated APIs, and production-grade systems.',
  paragraphThree:
    'Before GenStudio, I built microservices for AEM as a Cloud Service and helped implement GenStudio Insights integrations with Meta, LinkedIn, and Customer Journey Analytics. Outside of work, I like snowboarding, exploring San Francisco, running, and building overly personalized tools for real life.',
  resume: 'https://www.linkedin.com/in/jamiedelbick/',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    title: 'GenStudio ChatGPT Ads Integration',
    type: 'Product launch',
    info:
      'Built the GenStudio for Performance Marketing integration for brand-governed ChatGPT ads, helping marketers assemble approved ad creative for a new conversational AI performance channel.',
    info2:
      'The workflow connects GenStudio, Workfront approvals, and activation so enterprise teams can move quickly while preserving brand governance.',
    buttonName: 'View announcement',
    url: 'https://www.linkedin.com/feed/update/urn:li:activity:7457519779596349440/',
  },
  {
    id: nanoid(),  
    img: 'adobe-summit-2025.png',
    title: 'Speaker at Adobe Summit 2025',
    type: 'Speaking',
    info: 'Co-presented "A Developer\'s Guide: Extending Adobe GenStudio" at Adobe Summit 2025 to 900+ virtual attendees, covering how to extend Adobe GenStudio for Performance Marketing.',
    info2: 'Shared hands-on experience building GenStudio extensions through real-world scenarios, live code samples, and practical integration examples to help developers build their own customizations.',
    url: 'https://business.adobe.com/summit/2025/sessions/a-developers-guide-extending-adobe-genstudio-os606.html',
  },
  {
    id: nanoid(),
    title: 'Claude Skills',
    type: 'Open source',
    info: 'A reusable collection of Claude Code skills that capture workflows, tool knowledge, and repeatable agent instructions across projects.',
    info2:
      'The repository includes my wedding website workflow and has become a place to productize the patterns I use for practical AI-assisted development.',
    buttonName: 'View repo',
    url: 'https://github.com/jdelbick/claude-skills',
  },
  {
    id: nanoid(),
    img: 'api-world-conference.jpg',
    title: 'Speaker at API World',
    type: 'Speaking',
    info: 'I gave a 25 minute virtual talk, along with an Adobe co-worker, at API World, one of the largest API focused conferences with over 4000 attendees.',
    info2: 'The talk focused on Content and Commerce AI APIs for Content Intelligence, using AEM text tags as an existing use case.',
    url: 'https://emamo.com/event/api-world-2021/r/speaker/jamie-delbick',
  },
  {
    id: nanoid(),
    img: 'adobe-developers-live-content.jpg',
    title: 'Speaker at Adobe Developers Live - Content',
    type: 'Speaking',
    info: 'Along with a co-worker, gave a 25 minute talk on how to extend AEM as a Cloud Service through asset microservices.',
    info2: 'The demo includes a live coding example on how to set up, deploy, and integrate a custom worker using App Builder, previously known as Project Firefly.',
    url: 'https://www.youtube.com/watch?v=6wdbd050UMM&t=4s'
  },
  {
    id: nanoid(),
    img: 'adobe-developers-conf.png',
    title: 'Speaker at Adobe Developers Live - Commerce',
    type: 'Speaking',
    info: 'Gave a 45 minute talk and live demo displaying how to customize asset processing for AEM as a Cloud Service using App Builder, previously known as Project Firefly.',
    info2: '',
    url: 'https://www.youtube.com/watch?v=zpkkkQRoYho&t=10s'
  },
  {
    id: nanoid(),
    title: 'Personal Website',
    type: 'Project',
    info: 'Personal Website adapted from a Gatsby template written in React.',
    buttonName: 'Source code',
    url: 'https://github.com/jdelbick/website'
  },
];

// WRITING DATA
export const writingData = [
  {
    id: nanoid(),
    title: 'I Built My Wedding Website with Claude',
    type: 'AI-assisted development',
    info:
      'A Medium article walking through how I used Claude to design and build a custom wedding website, turning a personal project into a repeatable AI-assisted workflow.',
    url: 'https://medium.com/@jamie.delbick/i-built-my-wedding-website-with-claude-and-so-can-you-55ec7be04dfb',
  },
  {
    id: nanoid(),
    title: 'Giving AI Access to Okta-Protected APIs',
    type: 'Claude skills',
    info:
      'A practical pattern for building a Claude skill that can work with APIs protected by Okta, without hand-waving away the messy authentication details.',
    url: 'https://medium.com/@jamie.delbick/giving-your-ai-assistant-access-to-okta-protected-apis-b4b497d78b38',
  },
  {
    id: nanoid(),
    title: 'Using Proxyquire with Nested Dependencies',
    type: 'Testing',
    info:
      'A Medium article about switching mocking libraries for Node.js Mocha tests and handling nested dependencies cleanly.',
    url: 'https://medium.com/@jamie.delbick/using-proxyquire-with-nested-dependencies-fd3a33d780e4',
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
