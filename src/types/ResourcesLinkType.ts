type ResourcesChildType = {
  title: string;
  link?: string;
};
export type ResourcesLinkType = {
  title: string;
  link?: string;
  height?: string;
  child: ResourcesChildType[];
};
