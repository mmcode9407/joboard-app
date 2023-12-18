import React, { useState } from 'react';
import { Offer } from '../../types/types';
import { countDays } from '../../utils/countDays';
import Modal from '../Modal/Modal';

const OffersListItem = ({ offer }: { offer: Offer }) => {
   const [isOpenModal, setIsOpenModal] = useState(false);
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
      <>
         <li
            className="p-6 border border-gray-light rounded-md bg-white cursor-pointer"
            onClick={() => setIsOpenModal(true)}>
            {/* MOBILE OFFER ITEM */}
            <div className="flex flex-col justify-between gap-4 lg:hidden">
               <h2 className="text-sb-20 text-gray-darkest">{title}</h2>
               <div className="flex gap-3 items-center">
                  <img src={image} alt="Company logo" className="w-8 h-8" />
                  <div className="flex flex-col gap-2">
                     <div className="flex">
                        <p className=" text-md-12 text-gray-darkest pr-3 ">{companyName}</p>
                        <p className=" text-md-12 text-gray-dark px-3 border-l border-gray-light">
                           {city}, {country}
                        </p>
                     </div>
                     <div className="flex">
                        <p className=" text-md-12 text-gray-dark pr-3 ">{seniority}</p>
                        <p className=" text-md-12 text-gray-dark px-3 border-l border-gray-light">
                           {workLocation}
                        </p>
                     </div>
                  </div>
               </div>
               <div className="flex justify-between">
                  <p className="text-md-12 text-accent">
                     {salaryFrom} - {salaryTo} {currency} net
                  </p>
                  <p className="text-reg-12 text-gray-dark">{countDays(updatedAt)} days ago</p>
               </div>
            </div>
            {/* DESKTOP OFFER ITEM */}
            <div className="hidden lg:flex justify-between">
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
               <p className=" text-reg-12 text-gray-dark">{countDays(updatedAt)} days ago</p>
            </div>
         </li>
         <Modal open={isOpenModal} onClose={() => setIsOpenModal(false)} />
      </>
   );
};

export default OffersListItem;
