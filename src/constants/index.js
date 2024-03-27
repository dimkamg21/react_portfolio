import {
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  scss,
  reactjs,
  redux,
  tailwind,
  nodejs,
  postgresql,
  git,
  figma,
  phone_catalog,
  game2048,
  nothind_landing,
  threejs,
  student,
  linkedIn
} from "../assets";

export const contactMe = {
  name: "linkedIn",
  icon: linkedIn,
  link: 'https://www.linkedin.com/in/dmytro-hlukhenkyi/',
};

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "tech",
    title: "Tech",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "CE student",
    icon: student,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "SCSS",
    icon: scss,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Postgresql",
    icon: postgresql,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const projects = [
  {
    name: "Phone Catalog",
    description:
      "Online phone catalog that allows to filter, find and order different gadgets, providing convenient  and beautiful interface",
    tags: [
      {
        name: "react with ts",
        color: "blue-text-gradient",
      },
      {
        name: "redux/toolkit",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: phone_catalog,
    source_code_link: "https://github.com/dimkamg21/react_phone-shop",
  },
  {
    name: "Nothing landing",
    description:
      "Interactive landing that with high-conversion rate, which provided high quality leads",
    tags: [
      {
        name: "html5",
        color: "blue-text-gradient",
      },
      {
        name: "bem",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: nothind_landing,
    source_code_link: "https://github.com/dimkamg21/nothing-landing",
  },
  {
    name: "2048 game",
    description:
        "2048 is a well-known puzzle game where players combine identical tiles by sliding them on a grid with the aim of creating a tile with the number 2048 or a number close to it. The game requires strategic thinking and planning every move to achieve the highest score possible.",
    tags: [
      {
        name: "js",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: game2048,
    source_code_link: "https://github.com/dimkamg21/js_2048-game?tab=readme-ov-file",
  },
];

export { services, technologies, projects };
