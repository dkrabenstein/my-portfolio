type ProjectImage = { src: string; alt: string };

export type Project = {
  slug: string;
  title: string;
  summary: string;
  disciplines: string[];
  category: string;
  dateRange: string;
  tags: string[];
  image: ProjectImage;
  heroImage: ProjectImage & { caption: string };
  intro: string;
  focus: string;
  stage: string;
  overview: {
    headingLines: string[];
    question: string;
    paragraphs: string[];
  };
  gallery: (ProjectImage & { caption: string })[];
  features: { title: string; description: string }[];
  skills: string[];
  reportHref?: string;
  repoHref?: string;
  demoHref?: string;
};

export const projectsIntro = {
  title: "Projects & explorations.",
  descriptionLines: [
    "From first sketches to working systems. A place for the process,",
    "the details, and the things learned along the way.",
  ],
};

export const contactPrompt = {
  heading: "Have a project in mind?",
  cta: { label: "Let’s connect", href: "/contact" },
};

// Shared labels for the project detail page. The notes flag sample content and can be
// removed once the projects are real.
export const projectDetailCopy = {
  backLink: { label: "← All projects", href: "/projects" },
  eyebrowSuffix: "sample case study",
  factsNoteLines: [
    "Sample project content and concept imagery.",
    "Replace with an actual project, process, and results.",
  ],
  imageryNote: "Illustrative imagery",
  overviewLabel: "Project overview",
  featuresLabel: "Key features",
  skillsLabel: "Skills",
  skillsHeading: "Across disciplines.",
  skillsNoteLines: ["Illustrative skills for this sample project;", "replace with the methods and tools actually used."],
  report: {
    label: "Further reading",
    heading: "The details, documented.",
    note: "Project report PDF · add your report to complete this case study.",
    cta: "Download project report · PDF",
  },
};

const todoOverview = {
  headingLines: ["TODO: overview heading"],
  question: "TODO: the engineering problem this project set out to solve.",
  paragraphs: ["TODO: design decisions, process, and results."],
};

// TODO: these are the sample projects from the design. Replace them with real projects.
// Only "Solar field station" has detail-page content in the design; the others use TODO
// placeholders. Dates and tags are not in the design yet.
export const projects: Project[] = [
  {
    slug: "solar-field-station",
    title: "Solar field station",
    summary: "A concept for a solar-powered station that records environmental conditions beyond the workbench.",
    disciplines: ["Embedded systems", "Product design"],
    category: "Embedded systems + design",
    dateRange: "TODO: date range",
    tags: ["TODO: tags"],
    image: {
      src: "/images/projects/solar-field-station.jpg",
      alt: "A weatherproof enclosure with a small solar panel on a rock beside a mountain lake",
    },
    heroImage: {
      src: "/images/projects/solar-field-station-deployment.jpg",
      alt: "A solar-powered monitoring station on a pole above a lakeshore with dry grass and hills behind",
      caption: "Fig. 01 / Field deployment concept",
    },
    intro:
      "A self-powered environmental monitoring concept, imagined for the places where a power outlet is a long way away.",
    focus: "Power · enclosure · sensing",
    stage: "Illustrative concept",
    overview: {
      headingLines: ["Out of the lab.", "Into the landscape."],
      question:
        "How might a small monitoring system keep collecting useful information without a permanent power supply?",
      paragraphs: [
        "This sample concept brings power management, sensing, and mechanical packaging into one field-ready design brief. A compact solar panel supports periodic measurements, while a serviceable enclosure makes the electronics easy to access.",
        "The proposed workflow moves from a power budget and enclosure sketches to a bench prototype, then outdoor testing. A finished case study would document the trade-offs, measured performance, and what changed between iterations.",
      ],
    },
    gallery: [
      {
        src: "/images/projects/solar-field-station-electronics.jpg",
        alt: "An open green enclosure on a workbench showing a circuit board and wiring inside",
        caption: "Fig. 02 / Electronics & service access",
      },
      {
        src: "/images/projects/solar-field-station-panel-mount.jpg",
        alt: "Close-up of a solar panel bracket mounted on top of a cylindrical green housing",
        caption: "Fig. 03 / Panel mounting detail",
      },
    ],
    features: [
      {
        title: "Solar-first power",
        description: "A small panel and battery concept sized around an intermittent sampling cycle.",
      },
      {
        title: "Serviceable enclosure",
        description: "A gasketed housing with accessible fasteners and a removable electronics tray.",
      },
      {
        title: "Modular sensing",
        description: "Separate connections for temperature, humidity, and other field inputs.",
      },
      {
        title: "Traceable measurements",
        description: "Timestamped records and a simple export path for reviewing collected data.",
      },
    ],
    skills: ["CAD modelling", "Prototyping", "Circuit integration", "Embedded C", "Power budgeting", "Test planning"],
    // TODO: add the project report PDF and set reportHref, e.g. "/reports/solar-field-station.pdf".
  },
  {
    slug: "parametric-test-rig",
    title: "Parametric test rig",
    summary: "An adjustable fixture concept for exploring how geometry changes a simple mechanical test.",
    disciplines: ["Mechanical design", "CAD"],
    category: "Mechanical design + CAD",
    dateRange: "TODO: date range",
    tags: ["TODO: tags"],
    image: {
      src: "/images/projects/parametric-test-rig.jpg",
      alt: "A machined metal test fixture on a workbench surrounded by measuring tools",
    },
    heroImage: {
      src: "/images/projects/parametric-test-rig.jpg",
      alt: "A machined metal test fixture on a workbench surrounded by measuring tools",
      caption: "TODO: figure caption",
    },
    intro: "TODO: one or two sentences introducing the project.",
    focus: "TODO: focus areas",
    stage: "TODO: project stage",
    overview: todoOverview,
    gallery: [],
    features: [],
    skills: [],
  },
  {
    slug: "trail-sensor-node",
    title: "Trail sensor node",
    summary: "A low-power sensor concept that brings field measurements into a readable data log.",
    disciplines: ["Electronics", "Prototyping"],
    category: "Electronics + prototyping",
    dateRange: "TODO: date range",
    tags: ["TODO: tags"],
    image: {
      src: "/images/projects/trail-sensor-node.jpg",
      alt: "A small circuit board beside an open black enclosure and an antenna on a desk",
    },
    heroImage: {
      src: "/images/projects/trail-sensor-node.jpg",
      alt: "A small circuit board beside an open black enclosure and an antenna on a desk",
      caption: "TODO: figure caption",
    },
    intro: "TODO: one or two sentences introducing the project.",
    focus: "TODO: focus areas",
    stage: "TODO: project stage",
    overview: todoOverview,
    gallery: [],
    features: [],
    skills: [],
  },
  {
    slug: "lightweight-bridge-study",
    title: "Lightweight bridge study",
    summary: "A study concept comparing material use and load paths in a small-span truss structure.",
    disciplines: ["Structures", "Analysis"],
    category: "Structures + analysis",
    dateRange: "TODO: date range",
    tags: ["TODO: tags"],
    image: {
      src: "/images/projects/lightweight-bridge-study.jpg",
      alt: "A balsa wood truss bridge model resting on two blocks on a table",
    },
    heroImage: {
      src: "/images/projects/lightweight-bridge-study.jpg",
      alt: "A balsa wood truss bridge model resting on two blocks on a table",
      caption: "TODO: figure caption",
    },
    intro: "TODO: one or two sentences introducing the project.",
    focus: "TODO: focus areas",
    stage: "TODO: project stage",
    overview: todoOverview,
    gallery: [],
    features: [],
    skills: [],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
