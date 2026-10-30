export type PageLink = {
  eyebrow: string;
  title: string;
  summary: string;
  href: string;
  image: { src: string; alt: string };
};

export const hero = {
  markers: ["Personal engineering portfolio", "Based in Kelowna, BC"],
  title: "Duncan Rabenstein",
  tagline: "A field journal of ideas, projects, and possibilities.",
  cta: { label: "Explore my projects", href: "/projects" },
  image: {
    src: "/images/home/okanagan-landscape.jpg",
    alt: "A lake winding between dry hills and forested slopes in the Okanagan at dusk",
  },
};

export const aboutIntro = {
  eyebrow: "A little about me / draft",
  headingLines: ["Bridging Hardware and Code"],
  // TODO: provisional statement from the design; replace with your own words.
  body: "I’m drawn to the space between an idea and something you can hold, test, and improve. This is a place to share what I’m building, what I’m learning, and the questions that keep me curious.",
  note: "Provisional personal statement · edit to make it yours.",
  cta: { label: "More about me", href: "/about" },
  portrait: {
    imageUrl: "/images/home/portrait.jpg",
    imageAlt: "Portrait of Duncan Rabenstein",
  },
};

export const explore = {
  heading: "A few places to start.",
  eyebrow: "Explore the field journal",
  links: [
    {
      eyebrow: "The work",
      title: "Projects",
      summary: "Ideas made tangible. Explore the project journal.",
      href: "/projects",
      image: {
        src: "/images/home/card-projects.jpg",
        alt: "A machined metal assembly on a cluttered workbench",
      },
    },
    {
      eyebrow: "The person",
      title: "About me",
      summary: "Background, interests, and the way I approach things.",
      href: "/about",
      image: {
        src: "/images/home/card-about.jpg",
        alt: "A dirt trail through dry grassland and pine trees toward distant hills",
      },
    },
    {
      eyebrow: "The conversation",
      title: "Contact",
      summary: "A good project often starts with a simple hello.",
      href: "/contact",
      image: {
        src: "/images/home/card-contact.jpg",
        alt: "A calm lake at sunset with a forested shoreline",
      },
    },
  ] satisfies PageLink[],
};
