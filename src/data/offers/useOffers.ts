import { useQuery } from '@tanstack/react-query';
import { getOffers } from '../../api/offersProvider';

export const useOffers = () =>
   useQuery({
      queryKey: ['offers'],
      queryFn: getOffers,
   });
