import { MenuItemFlattened } from './types';

const isString = (text: unknown): text is string => {
  return typeof text === 'string' || text instanceof String;
};

const isNumber = (input: unknown): input is number => {
  return typeof input === 'number' || input instanceof Number;
};

const parseId = (id: unknown): string | number => {
  if (!id || (!isString(id) && !isNumber(id))) {
    throw new Error('Incorrect or missing id');
  }
  return id;
};

const parseTitle = (title: unknown): string => {
  if (!title || !isString(title)) {
    throw new Error('Incorrect or missing title');
  }
  return title;
};

const parsePrice = (price: unknown): string => {
  if (!price || !isString(price)) {
    throw new Error('Incorrect or missing price');
  }
  return price;
};

const parseCategory = (category: unknown): string => {
  if (!category || !isString(category)) {
    throw new Error('Incorrect or missing category');
  }
  return category;
};

export const toMenuItem = (object: unknown): MenuItem => {
  if (!object || typeof object !== 'object') {
    throw new Error('Incorrect or missing data');
  }
  if ('id' in object && 'title' in object && 'price' in object) {
    const menuItem: MenuItem = {
      id: parseId(object.id),
      title: parseTitle(object.title),
      price: parsePrice(object.price),
    };
    return menuItem;
  }
  throw new Error('Incorrect data: some fields are missing');
};

export const toMenuItemFlattened = (object: unknown): MenuItemFlattened => {
  if (!object || typeof object !== 'object') {
    throw new Error('Incorrect or missing data');
  }
  if (
    'id' in object &&
    'title' in object &&
    'price' in object &&
    'category' in object
  ) {
    const menuItem: MenuItemFlattened = {
      id: parseId(object.id),
      title: parseTitle(object.title),
      price: parsePrice(object.price),
      category: parseCategory(object.category),
    };
    return menuItem;
  }
  throw new Error('Incorrect data: some fields are missing');
};
