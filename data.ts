import { RiComputerLine } from 'react-icons/ri';
import { FaServer } from 'react-icons/fa';
import { AiOutlineAntDesign, AiOutlineApi } from 'react-icons/ai';
import { MdDeveloperMode } from 'react-icons/md';
import { IProject, Service, Skill } from './types';

import { BsCircleFill } from 'react-icons/bs';

export const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: 'Frontend Development',
    about:
      'I  build  scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ',
  },
  {
    Icon: FaServer,
    title: 'Backend  Development',
    about:
      'handle database, server, api using <b>Express </b> & other popular frameworks',
  },
  {
    Icon: AiOutlineApi,
    title: 'API Development',
    about: 'I can develop robust  REST API using  <b>Node API</b> ',
  },

  {
    Icon: RiComputerLine,
    title: 'Metaverse',
    about:
      'I can develop web 3 apps called dapps using Moralis, Metamasx wallet and mint NFTs',
  },
];

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: 'HTML',
    level: '70',
  },
  {
    Icon: BsCircleFill,
    name: 'CSS',
    level: '75',
  },
  {
    Icon: BsCircleFill,
    name: 'JAVASCRIPT',
    level: '80',
  },
  {
    Icon: BsCircleFill,
    name: 'TAILWINDCSS',
    level: '70',
  },
  {
    Icon: BsCircleFill,
    name: 'TYPESCRIPT',
    level: '80',
  },
  {
    Icon: BsCircleFill,
    name: 'REACT',
    level: '95',
  },
  {
    Icon: BsCircleFill,
    name: 'NEXTJS',
    level: '50',
  },
  {
    Icon: BsCircleFill,
    name: 'NODEJS',
    level: '30',
  },
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: 'GIT',
    level: '80',
  },
  {
    Icon: BsCircleFill,
    name: 'VS CODE',
    level: '100',
  },
  {
    Icon: BsCircleFill,
    name: 'POSTMAN',
    level: '60',
  },
  {
    Icon: BsCircleFill,
    name: 'GOOGLE',
    level: '95',
  },
];

export const projects: IProject[] = [
  {
    id: 1,
    name: 'MOVIE APP',
    description: 'This app was inspired by hulu Movie app ',
    image_path: '/images/home.jpg',
    deployed_url: 'https://sprout-streaming-app.vercel.app',
    github_url: 'https://github.com/sproutjeph/sprout-streaming-app',
    category: ['react'],
    key_techs: ['React', 'Next Js', 'Tailwindcss'],
  },
  {
    id: 2,
    name: 'Estore',
    image_path: '/images/e-store.png',
    deployed_url: 'https://my-store.vercel.app',
    github_url: 'https://github.com/sproutjeph/my-store',
    category: ['react'],
    description: 'An web app is my motocycle online store',
    key_techs: ['React', 'MongoDB', 'Framer Motion'],
  },

  {
    id: 3,
    name: 'Blog',
    image_path: '/images/project-4.jpg',
    deployed_url: 'https://github.com/sproutjeph?tab=repositories/',
    github_url: 'https://github.com/sproutjeph?tab=repositories',
    category: ['node', 'mongo', 'react'],
    description:
      'Social Media app for developers who can share project,create posts,etc...',
    key_techs: ['React', 'Node', 'Express', 'Mongo', 'REST API'],
  },

  {
    id: 4,
    name: 'Realtime Chat App',
    image_path: '/images/4.jpg',
    deployed_url: 'https://github.com/sproutjeph?tab=repositories',
    github_url: 'https://github.com/sproutjeph?tab=repositories',
    category: ['node', 'react'],
    description: 'Basic Realtime Chat App where you can chat with other users',
    key_techs: ['React', 'Node', 'Express', 'Socket', 'Bootstrap'],
  },

  {
    id: 5,
    name: 'Uber Clone',
    image_path: '/images/project-2.jpg',
    deployed_url: 'https://github.com/sproutjeph?tab=repositories/',
    github_url: 'https://github.com/sproutjeph?tab=repositories',
    category: ['next js', 'react'],
    description: 'This is Uber Clone i used Mapbox API and geocoding',
    key_techs: ['React', 'Next Js', 'Node REST API'],
  },

  {
    id: 6,
    name: 'NFT Marketplace',
    image_path: '/images/project-4.jpg',
    deployed_url: 'https://github.com/sproutjeph?tab=repositories',
    github_url: 'https://github.com/sproutjeph?tab=repositories',
    category: ['express'],
    description: 'This is an NFT Marketplace',
    key_techs: ['Next js', 'Moralis', 'TYPESCRIPT'],
  },
];
