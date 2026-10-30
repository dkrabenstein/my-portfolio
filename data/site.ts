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
  footerTagline: "Engineering / ideas / outdoors",
  location: "Okanagan, BC · Canada",
  locationShort: "Okanagan, BC",
  // TODO: add the resume PDF to public/ at this path.
  resumeHref: "/resume.pdf",
  // TODO: add contact details. Empty values show placeholders on the contact page.
  email: "",
  githubUrl: "",
  linkedinUrl: "",
  nav: [
    { label: "home", href: "/" },
    { label: "projects", href: "/projects" },
    {
      label: "about me",
      href: "/about",
      menu: {
        heading: "On this page",
        items: aboutSections.map((section) => ({ label: section.title, href: `/about#${section.id}` })),
      },
    },
    { label: "contact", href: "/contact" },
  ] satisfies NavItem[],
};

export const socialLinks: ExternalLink[] = [
  { label: "Github", href: site.githubUrl || "#" },
  { label: "LinkedIn", href: site.linkedinUrl || "#" },
];
