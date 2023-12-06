import { Offer } from '../types/types';

export const findMaxSalaryFrom = (offers: Offer[]): number => {
   let maxSalaryFrom = 0;

   for (let i = 0; i < offers.length; i++) {
      const currSalaryFrom = offers[i].salaryFrom;

      if (currSalaryFrom > maxSalaryFrom) {
         maxSalaryFrom = currSalaryFrom;
      }
   }

   return maxSalaryFrom;
};
