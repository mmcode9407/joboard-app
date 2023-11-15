import React from 'react';
import OffersListItem from '../OffersListItem/OffersListItem';

const sampleData = [1, 2, 3, 4, 5];

const OffersList = () => {
   return (
      <ul className="flex flex-col gap-2">
         {sampleData.map(item => (
            <OffersListItem />
         ))}
      </ul>
   );
};

export default OffersList;
