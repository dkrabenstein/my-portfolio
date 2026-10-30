export type AboutSection = {
  id: string;
  title: string;
  meta?: string;
  body: string;
};

export const aboutIntro = {
  eyebrow: "Background / approach / perspective",
  title: "About me.",
  subtitleLines: ["The person behind the projects.", "A little context for the work, and the curiosity behind it."],
};

export const aboutAside = {
  image: {
    src: "/images/about/okanagan-cliff.jpg",
    alt: "Pine trees on a rocky bluff above a lake in the Okanagan",
  },
  caption: "Okanagan, BC",
  captionNote: "Landscape study",
  noteLines: [
    "BIOGRAPHY / TO PERSONALIZE",
    "Bracketed details and sample copy are editable placeholders, not confirmed credentials.",
  ],
};

// TODO: every section below is placeholder copy from the design. Replace the bracketed
// details and sample copy with real information.
export const aboutSections: AboutSection[] = [
  {
    id: "education",
    title: "Education",
    meta: "[Program or qualification] · [Institution] · [Dates]",
    body: "Add a short account of your studies, the subjects that shaped your thinking, and the work that helped turn theory into practice.",
  },
  {
    id: "experience",
    title: "Experience",
    meta: "[Role or placement] · [Organization] · [Dates]",
    body: "Introduce your relevant experience here: the problems you worked on, your contribution, and what you learned in the process.",
  },
  {
    id: "skills",
    title: "Skills",
    body: "Sample copy: Analytical thinking, hands-on prototyping, and clear technical communication. Replace this with your own engineering disciplines, software, and workshop skills.",
  },
  {
    id: "interests",
    title: "Interests",
    body: "Sample copy: Time outdoors brings a different perspective to time at the workbench. Add the places, activities, and curiosities that make this story your own.",
  },
];
