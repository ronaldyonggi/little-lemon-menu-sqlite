type MenuItem = {
  id: string;
  title: string;
  price: string;
};

export interface SectionListData {
  title: string;
  data: MenuItem[];
}

// export interface MenuItemOriginal extends MenuItem {
//   category: {
//     title: string;
//   };
// }

export interface MenuItemFlattened extends MenuItem {
  category: string;
}

