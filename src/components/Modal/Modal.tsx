import React from 'react';
import { createPortal } from 'react-dom';
import XMarkIcon from '../../icons/XMarkIcon';
import { countDays } from '../../utils/countDays';
import { useOffer } from '../../data/offers/useOffers';

interface ModalProps {
   open: boolean;
   onClose: () => void;
   id: string;
}

const Modal = ({ open, onClose, id }: ModalProps) => {
   if (!open) return null;
   const { data: offer, isLoading } = useOffer(id);

   const renderTechStack = (tech: string[]) => {
      return !!tech.length ? tech.join('・') : '';
   };

   return createPortal(
      <>
         <div className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-20 z-20" />
         <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-6 max-w-[1094px] w-full max-h-screen h-full px-[67px] pt-16 pb-11 rounded-md bg-white border border-solid border-gray-light z-20  overflow-y-auto scrollbar">
            <button className="absolute top-5 right-5 " onClick={onClose}>
               <XMarkIcon />
            </button>
            {isLoading ? (
               <h2 className="text-sb-28 text-black">Loading...</h2>
            ) : (
               <>
                  <div className="flex gap-6">
                     <div className="w-[80px] h-[80px]">
                        <img src={offer?.image} alt="Company logo" />
                     </div>
                     <div className="flex flex-col gap-4">
                        <h2 className="text-sb-28 text-black">
                           {offer?.title} | {offer?.companyName}
                        </h2>
                        <p className="text-md-14 text-gray-dark">
                           {offer?.technologies && renderTechStack(offer.technologies)}
                        </p>
                     </div>
                  </div>
                  <div className="flex gap-[18px] w-full">
                     <div className="basis-2/3 bg-gray-lightest p-7">
                        <h3 className="text-sb-20 text-gray-dark">{offer?.title}</h3>
                        <br />
                        <p className="text-md-14 text-gray-dark">{offer?.description}</p>
                     </div>
                     <div className="flex flex-col gap-4 basis-1/3">
                        <div className="flex items-center justify-center px-7 py-4 bg-gray-lightest">
                           <a
                              href={offer?.offerUrl}
                              className="grow rounded-full bg-accent hover:bg-accent-strong  text-white text-md-14 py-2 text-center transition-colors duration-300 cursor-pointer">
                              Visit offer ➔
                           </a>
                        </div>
                        <div className="flex flex-col justify-center grow p-7 bg-gray-lightest">
                           <div className="flex items-center justify-between py-5 first:pt-0 last:pb-0 border-b border-gray-light last:border-none">
                              <p className="text-sb-12 text-gray-darkest">Added</p>
                              <p className="text-reg-14 text-gray-dark text-right">
                                 {offer?.updatedAt && countDays(offer.updatedAt)} days ago
                              </p>
                           </div>
                           <div className="flex items-center justify-between py-5 first:pt-0 last:pb-0 border-b border-gray-light last:border-none">
                              <p className="text-sb-12 text-gray-darkest">Company</p>
                              <p className="text-reg-14 text-gray-dark text-right">
                                 {offer?.companyName}
                              </p>
                           </div>
                           <div className="flex items-center justify-between py-5 first:pt-0 last:pb-0 border-b border-gray-light last:border-none">
                              <p className="text-sb-12 text-gray-darkest">Seniority</p>
                              <p className="text-reg-14 text-gray-dark text-right">
                                 {offer?.seniority}
                              </p>
                           </div>
                           <div className="flex items-center justify-between py-5 first:pt-0 last:pb-0 border-b border-gray-light last:border-none">
                              <p className="text-sb-12 text-gray-darkest">Location</p>
                              <p className="text-reg-14 text-gray-dark text-right">
                                 {offer?.city}, <br /> {offer?.country}
                              </p>
                           </div>
                           <div className="flex items-center justify-between py-5 first:pt-0 last:pb-0 border-b border-gray-light last:border-none">
                              <p className="text-sb-12 text-gray-darkest">Job type</p>
                              <p className="text-reg-14 text-gray-dark text-right">
                                 {offer?.workLocation}
                              </p>
                           </div>
                           <div className="flex items-center justify-between py-5 first:pt-0 last:pb-0 border-b border-gray-light last:border-none">
                              <p className="text-sb-12 text-gray-darkest">Contract</p>
                              <p className="text-reg-14 text-gray-dark text-right">
                                 {offer?.jobType}
                              </p>
                           </div>
                           <div className="flex items-center justify-between py-5 first:pt-0 last:pb-0 border-b border-gray-light  last:border-none">
                              <p className="text-sb-12 text-gray-darkest">Salary</p>
                              <p className="text-reg-14 text-gray-dark text-right">
                                 {offer?.salaryFrom} - {offer?.salaryTo} {offer?.currency} net
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
               </>
            )}
         </div>
      </>,
      document.getElementById('portal') as HTMLElement,
   );
};

export default Modal;
