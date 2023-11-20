import { Offer, SearchTerm } from '../types/types';

export const filterData = (searchTerm: SearchTerm, data: Offer[]) => {
   return data.filter(offer => {
      const titleMatch = offer.title.toLowerCase().includes(searchTerm.title.toLowerCase());
      const cityMatch = offer.city.toLowerCase().includes(searchTerm.city.toLowerCase());

      return titleMatch && cityMatch;
   });
};
