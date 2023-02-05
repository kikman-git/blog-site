import type { SocialObjects } from "./types";

export const SITE = {
  url: "",
  author: "Phat Nguyen",
  desc: "Welcome to my site!",
  title: "PhatNg",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerpage: 5,
};

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/kikman-git",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: ` ${SITE.title} on LinkedIn`,
    active: true,
  },
];
