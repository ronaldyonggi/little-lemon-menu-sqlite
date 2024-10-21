import { useRef, useEffect } from 'react';
import { MenuItem, MenuItemFlattened, SectionListData } from '../types/types';

export const SECTION_LIST_MOCK_DATA: SectionListData[] = [
  {
    title: 'Appetizers',
    data: [
      {
        id: '1',
        title: 'Pasta',
        price: '10',
      },
      {
        id: '3',
        title: 'Pizza',
        price: '8',
      },
    ],
  },
  {
    title: 'Salads',
    data: [
      {
        id: '2',
        title: 'Caesar',
        price: '2',
      },
      {
        id: '4',
        title: 'Greek',
        price: '3',
      },
    ],
  },
];

/**
 * 3. Implement this function to transform the raw data
 * retrieved by the getMenuItems() function inside the database.js file
 * into the data structure a SectionList component expects as its "sections" prop.
 * @see https://reactnative.dev/docs/sectionlist as a reference
 */

export function getSectionListData(data: MenuItemFlattened[]) {
  // SECTION_LIST_MOCK_DATA is an example of the data structure you need to return from this function.
  // The title of each section should be the category.
  // The data property should contain an array of menu items.
  // Each item has the following properties: "id", "title" and "price"
  const sectionMap = new Map<string, MenuItem[]>();
  for (const item of data) {
    const { category, id, title, price } = item;
    if (!sectionMap.has(category)) {
      sectionMap.set(category, []);
    }

    sectionMap.get(category)!.push({ id, title, price });
  }

  return Array.from(sectionMap, ([key, value]) => ({
    title: key,
    data: value,
  }));
}

export function useUpdateEffect(effect, dependencies = []) {
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      return effect();
    }
  }, dependencies);
}
