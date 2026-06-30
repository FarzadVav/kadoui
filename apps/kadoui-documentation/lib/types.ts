export type NavItemT = {
  title: string;
  href: string;
  items?: NavItemT[];
};

export type PropRowT = {
  name: string;
  type: string;
  default?: string;
  required?: boolean;
  description: string;
};

export type DocSectionT = {
  id: string;
  title: string;
  description?: string;
  content?: string;
  code?: string;
  preview?: React.ReactNode;
};

export type TailwindDocT = {
  slug: string;
  title: string;
  description: string;
  overview: string;
  cssVariables?: PropRowT[];
  utilities: PropRowT[];
  sections: DocSectionT[];
  notes?: string[];
};

export type ReactDocT = {
  slug: string;
  title: string;
  description: string;
  overview: string;
  importCode: string;
  parts?: PropRowT[];
  props: PropRowT[];
  searchParamsVariant?: {
    name: string;
    props: PropRowT[];
    notes?: string[];
  };
  sections: DocSectionT[];
  notes?: string[];
};
