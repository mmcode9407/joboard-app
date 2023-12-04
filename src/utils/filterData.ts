import { IFilters } from '../context/FiltersContext';
import { Offer, SearchTerm } from '../types/types';

export const filterData = (searchTerm: SearchTerm, data: Offer[], otherFilters?: IFilters) => {
   return data.filter(offer => {
      const searchMatch = filterBySearch(searchTerm, offer);
      const otherMatchers = otherFilters ? filterByOthersFilters(otherFilters, offer) : true;

      return searchMatch && otherMatchers;
   });
};

const filterBySearch = (searchTerm: SearchTerm, offer: Offer) => {
   return Object.entries(searchTerm).every(([key, value]) => {
      const field = offer[key as keyof SearchTerm].toLowerCase();
      return value === '' || field.includes(value.toLowerCase());
   });
};

const filterByOthersFilters = (otherFilters: IFilters, offer: Offer) => {
   return Object.entries(otherFilters).every(([key, values]) => {
      const field = offer[key as keyof IFilters];
      const isFieldNumber = typeof field === 'number';

      if (Array.isArray(values)) {
         return values.length === 0 || values.includes(field);
      } else if (typeof values === 'number' && isFieldNumber) {
         return field >= values;
      }
   });
};
