import { Offer } from '../types/types';

export const getOffers = async (): Promise<Offer[]> => {
   const response = await fetch('https://training.nerdbord.io/api/v1/joboard/offers');

   if (!response.ok) {
      throw new Error('Something went wrong!');
   }

   const data: Offer[] = await response.json();

   return data;
};

export const getSingleOffer = async (id: string): Promise<Offer> => {
   const response = await fetch(`https://training.nerdbord.io/api/v1/joboard/offers/${id}`);

   if (!response.ok) {
      throw new Error('Something went wrong!');
   }

   const data: Offer = await response.json();

   return data;
};