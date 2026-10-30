export type PageLink = {
  title: string;
  href: string;
  image: { src: string; alt: string };
};

export const hero = {
  markers: ["Personal engineering portfolio", "Based in Kelowna, BC"],
  title: "Duncan Rabenstein",
  cta: { label: "Explore my projects", href: "/projects" },
  image: {
    src: "/images/home/okanagan-landscape.jpg",
    alt: "A lake winding between dry hills and forested slopes in the Okanagan at dusk",
  },
};

export const aboutIntro = {
  headingLines: ["Bridging Hardware and Code"],
  // TODO: provisional statement from the design; replace with your own words.
  body: "I’m drawn to the space between an idea and something you can hold, test, and improve. This is a place to share what I’m building, what I’m learning, and the questions that keep me curious.",
  portrait: {
    imageUrl: "/images/home/portrait.jpg",
    imageAlt: "Portrait of Duncan Rabenstein",
  },
};

export const explore = {
  heading: "A few places to start.",
  links: [
    {
      title: "Projects",
      href: "/projects",
      image: {
        src: "/images/home/card-projects.jpg",
        alt: "A machined metal assembly on a cluttered workbench",
      },
    },
    {
      title: "About me",
      href: "/about",
      image: {
        src: "/images/home/card-about.jpg",
        alt: "A dirt trail through dry grassland and pine trees toward distant hills",
      },
    },
    {
      title: "Contact",
      href: "/contact",
      image: {
        src: "/images/home/card-contact.jpg",
        alt: "A calm lake at sunset with a forested shoreline",
      },
    },
  ] satisfies PageLink[],
};
