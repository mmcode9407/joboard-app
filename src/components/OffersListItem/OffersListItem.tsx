import React from 'react';
import { Offer } from '../../types/types';
import { countDays } from '../../utils/countDays';

const OffersListItem = ({ offer }: { offer: Offer }) => {
   const {
      companyName,
      title,
      image,
      country,
      city,
      workLocation,
      seniority,
      salaryFrom,
      salaryTo,
      updatedAt,
      currency,
   } = offer;

   return (
      <li className="flex justify-between p-6 border border-gray-light rounded-md bg-white">
         <div className="flex items-center gap-[26px]">
            <img src={image} alt="Company logo" className="w-11 h-11" />
            <div className="flex flex-col gap-2">
               <h2 className="text-sb-20 text-gray-darkest">{title}</h2>
               <div className="flex ">
                  <p className="text-md-12 text-gray-darkest pr-4 border-r border-gray-light">
                     {companyName}
                  </p>
                  <p className="text-md-12 text-gray-dark px-4 border-r border-gray-light">
                     {city}, {country}
                  </p>
                  <p className="text-md-12 text-gray-dark px-4 border-r border-gray-light">
                     {workLocation}
                  </p>
                  <p className="text-md-12 text-gray-dark px-4 border-r border-gray-light">
                     {seniority}
                  </p>
                  <p className="text-md-12 text-accent pl-4">
                     {salaryFrom} - {salaryTo} {currency} net
                  </p>
               </div>
            </div>
         </div>
         <p className="text-reg-12 text-gray-dark">{countDays(updatedAt)} days ago</p>
      </li>
   );
};

export default OffersListItem;
