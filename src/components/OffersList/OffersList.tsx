import React from 'react';
import OffersListItem from '../OffersListItem/OffersListItem';
import { Offer } from '../../types/types';

const OffersList = ({ offers }: { offers: Offer[] }) => {
   return (
      <ul className="flex flex-col gap-2 h-full overflow-y-auto">
         {offers.map(offer => (
            <OffersListItem key={offer._id} offer={offer} />
         ))}
      </ul>
   );
};

export default OffersList;
