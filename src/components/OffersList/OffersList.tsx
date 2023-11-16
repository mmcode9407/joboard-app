import React from 'react';
import OffersListItem from '../OffersListItem/OffersListItem';
import { useQuery } from '@tanstack/react-query';
import { getOffers } from '../../api/offersProvider';

const OffersList = () => {
   const { data, isSuccess, isError, error } = useQuery({
      queryKey: ['offers'],
      queryFn: getOffers,
   });

   if (isError) {
      console.error(error);
      return null;
   }

   return (
      <ul className="flex flex-col gap-2 h-full overflow-y-auto">
         {isSuccess && data.map(offer => <OffersListItem key={offer._id} offer={offer} />)}
      </ul>
   );
};

export default OffersList;
