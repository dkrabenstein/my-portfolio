import { site } from "@/data/site";

export type ContactDetail = {
  label: string;
  value: string;
  // Link rows show an arrow; they only become clickable once href is set.
  isLink?: boolean;
  href?: string;
  external?: boolean;
};

export const contactIntro = {
  title: "Let’s Connect",
  body: "Whether you're a recruiter, fellow engineer, or just a curious stranger, I'd love to hear from you.",
};

// Values come from data/site.ts. Until they're filled in, the design's placeholder text shows.
export const contactDetails: ContactDetail[] = [
  { label: "Location:", value: site.locationShort },
  {
    label: "Linkedin",
    value: site.linkedinUrl ? site.linkedinUrl.replace(/^https?:\/\/(www\.)?/, "") : "Add profile URL",
    isLink: true,
    href: site.linkedinUrl || undefined,
    external: true,
  },
  {
    label: "Email",
    value: site.email || "Add email address",
    isLink: true,
    href: site.email ? `mailto:${site.email}` : undefined,
  },
];

export const contactImage = {
  src: "/images/contact/okanagan-shoreline.jpg",
  alt: "A rocky lakeshore with driftwood under a pale evening sky and distant hills",
};
