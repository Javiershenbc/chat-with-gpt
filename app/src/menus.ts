export interface MenuItem {
  label: string;
  link: string;
  icon?: string;
}

export const secondaryMenu: MenuItem[] = [
  {
    label: "URL",
    link: "https://www.sedeblockchain.com/",
    icon: "link",
  },
  {
    label: "instagram",
    link: "https://www.instagram.com/sedeblockchain/",
    icon: "instagram fab",
  },
  // {
  //   label: "website",
  //   link: "https://www.instagram.com/sedeblockchain/",
  //   icon: "website fab",
  // },
];
