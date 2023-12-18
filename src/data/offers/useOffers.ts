import { useQuery } from '@tanstack/react-query';
import { getOffers, getSingleOffer } from '../../api/offersProvider';

export const useOffers = () =>
   useQuery({
      queryKey: ['offers'],
      queryFn: getOffers,
   });

export const useOffer = (id: string) => 
   useQuery({ queryKey: ['offers', id], queryFn: () => getSingleOffer(id) });
;