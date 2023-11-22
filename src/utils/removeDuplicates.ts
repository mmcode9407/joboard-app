import { Offer, SearchVariant } from '../types/types';

export const removeDuplicates = (arr: Offer[], key: SearchVariant) => {
   return arr.reduce((acc, curr) => {
      const existingKey = acc.find(obj => obj[key] === curr[key]);
      if (!existingKey) {
         return [...acc, curr];
      }
      return acc;
   }, [] as Offer[]);
};
