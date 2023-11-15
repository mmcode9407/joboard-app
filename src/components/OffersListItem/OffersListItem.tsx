import React from 'react';

const OffersListItem = () => {
   return (
      <li className="flex justify-between p-6 w-[797px] border border-gray-light rounded-md">
         <div className="flex items-center gap-[26px]">
            <img src="public/Rectangle 3.png" alt="test" />
            <div className="flex flex-col gap-2">
               <h2 className="text-sb-20 text-gray-darkest">Infrastructure Architect</h2>
               <div className="flex ">
                  <p className="text-md-12 text-gray-darkest pr-4 border-r border-gray-light">
                     GOPro
                  </p>
                  <p className="text-md-12 text-gray-dark px-4 border-r border-gray-light">
                     Barcelona, Spain
                  </p>
                  <p className="text-md-12 text-gray-dark px-4 border-r border-gray-light">
                     Fully remote
                  </p>
                  <p className="text-md-12 text-gray-dark px-4 border-r border-gray-light">
                     Senior
                  </p>
                  <p className="text-md-12 text-accent pl-4">10000 - 18000 PLN net</p>
               </div>
            </div>
         </div>
         <p className="text-reg-12 text-gray-dark">4 days ago</p>
      </li>
   );
};

export default OffersListItem;
