import React from 'react';
import OffersListItem from '../OffersListItem/OffersListItem';
import { useQuery } from '@tanstack/react-query';
import { getOffers } from '../../api/offersProvider';

const OffersList = () => {
   const { data, isSuccess } = useQuery({
      queryKey: ['offers'],
      queryFn: getOffers,
   });

   return (
      <ul className="flex flex-col gap-2 h-full overflow-y-auto">
         {isSuccess && data.map(offer => <OffersListItem key={offer._id} offer={offer} />)}
      </ul>
   );
};

export default OffersList;
