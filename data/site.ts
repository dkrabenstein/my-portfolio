import { aboutSections } from "@/data/about";

export type NavItem = {
  label: string;
  href: string;
  menu?: {
    heading: string;
    items: { label: string; href: string }[];
  };
};

export type ExternalLink = {
  label: string;
  href: string;
};

export const site = {
  name: "Duncan Rabenstein",
  title: "Duncan Rabenstein – Engineering Portfolio",
  description: "Personal engineering portfolio of Duncan Rabenstein.",
  location: "Kelowna, BC · Canada",
  locationShort: "Kelowna, BC",
  resumeHref: "/resume.pdf",
  // TODO: add contact details. Empty values show placeholders on the contact page.
  email: "dkrabenstein@gmail.com",
  githubUrl: "https://github.com/dkrabenstein",
  linkedinUrl: "https://www.linkedin.com/in/duncan-rabenstein/",
  nav: [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    {
      label: "About Me",
      href: "/about",
      menu: {
        heading: "On this page",
        items: aboutSections.map((section) => ({ label: section.title, href: `/about#${section.id}` })),
      },
    },
    { label: "Contact", href: "/contact" },
  ] satisfies NavItem[],
};

export const socialLinks: ExternalLink[] = [
  { label: "Github", href: site.githubUrl || "#" },
  { label: "LinkedIn", href: site.linkedinUrl || "#" },
];
