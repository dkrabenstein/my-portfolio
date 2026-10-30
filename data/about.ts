export type AboutEntry = {
  title: string;
  organization: string;
  location: string;
  dates: string;
  bullets: string[];
};

export type AboutSkillGroup = {
  label: string;
  items: string[];
};

type AboutSectionBase = {
  id: string;
  title: string;
};

export type AboutSection = AboutSectionBase &
  (
    | { kind: "entries"; entries: AboutEntry[] }
    | { kind: "groups"; groups: AboutSkillGroup[] }
    | { kind: "list"; items: string[] }
  );

export const aboutIntro = {
  eyebrow: "Background / approach / perspective",
  title: "About me.",
  subtitleLines: ["The person behind the projects.", "A little context for the work, and the curiosity behind it."],
  background: {
    src: "/images/about/Interests.jpg",
    alt: "Six friends holding a Canadian flag in a forest clearing",
  },
};

// Content for the sections below comes from data/Duncan_Rabenstein_Resume_Technician.pdf.
export const aboutSections: AboutSection[] = [
  {
    id: "education",
    title: "Education",
    kind: "entries",
    entries: [
      {
        title: "Bachelor of Applied Science in Electrical Engineering – Mechatronics",
        organization: "University of British Columbia",
        location: "Kelowna, BC",
        dates: "September 2020 – May 2026",
        bullets: [
          "Selected coursework: Signals and Communication Systems, Microcomputer Engineering, Digital Logic Design, Instrumentation & Data Analysis, Data Structures, and Technical Communication.",
        ],
      },
    ],
  },
  {
    id: "experience",
    title: "Experience",
    kind: "entries",
    entries: [
      {
        title: "Distribution Co-op Student",
        organization: "Primary Engineering and Construction",
        location: "Kelowna, BC",
        dates: "May 2023 – December 2023",
        bullets: [
          "Delivered technical customer support and project coordination for over 50 electrical and gas service installations, working directly with homeowners, electricians, and utility contractors.",
          "Drafted detailed technical documentation, system layouts, and electrical schematics in AutoCAD according to municipal and utility engineering standards.",
          "Accelerated gas service billing workflows by programming custom VBA automation scripts, eliminating manual data entry errors and cutting administrative processing time by 30%.",
        ],
      },
      {
        title: "Software Engineering Co-op Student",
        organization: "EarthDaily Analytics",
        location: "Vancouver, BC",
        dates: "January 2024 – April 2024",
        bullets: [
          "Collaborated within an Agile team to engineer Python-based software to identify homogeneous regions in Synthetic Aperture Radar (SAR) satellite imagery, enabling automated processing of large datasets.",
          "Automated SAR image processing workflows using the Science Toolbox Exploitation Platform and Linux scripts, reducing manual intervention and improving reproducibility of analysis pipelines.",
          "Conducted research on methane emissions from thawing permafrost to support development of a software proposal.",
        ],
      },
    ],
  },
  {
    id: "skills",
    title: "Skills",
    kind: "groups",
    groups: [
      {
        label: "Protocols & Networks",
        items: ["Serial (UART, RS-485 concepts)", "RF/Zigbee concepts", "TCP/IP basics", "Wireless synchronization"],
      },
      {
        label: "Troubleshooting & Tools",
        items: ["Digital oscilloscope", "Digital multimeter (DMM)", "Function generator", "Logic analyzer"],
      },
      {
        label: "Software & Environments",
        items: ["Linux", "Windows", "Python", "Embedded C/C++", "AutoCAD", "VBA", "Git/GitHub", "VS Code"],
      },
      {
        label: "Soft Skills",
        items: ["Technical support (email/phone)", "Technical writing", "Customer coordination", "Field/lab testing"],
      },
    ],
  },
  {
    id: "interests",
    title: "Interests",
    kind: "list",
    items: ["Ski coaching", "Rock climbing", "Mountain biking", "Soccer", "Ultimate frisbee", "Home automation hardware"],
  },
];
