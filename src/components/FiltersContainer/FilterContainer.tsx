import React, { useEffect, useState } from 'react';
import { FilterBox } from '../Filter/FilterBox';
import { useResizeScreen } from '../../hooks/useResizeScreen';

const FilterContainer = () => {
   const [openFilters, setOpenFilters] = useState(false);
   const { isMobile } = useResizeScreen();

   const handleToogleMenu = () => {
      setOpenFilters(!openFilters);
   };

   useEffect(() => {
      !isMobile && setOpenFilters(false);
   }, [isMobile]);

   return (
      <header
         className={` ${
            openFilters ? 'h-screen' : ''
         } relative flex flex-col gap-7 md:gap-10  py-5 px-4 md:py-10`}>
         <div className="flex justify-between items-center">
            <h1 className="text-sb-28 font-bold text-gray-darkest">👾 JO-BOARD</h1>
            <button
               className={`md:hidden px-4 py-2 rounded-full text-sb-16 text-gray-darkest ${
                  openFilters ? 'bg-gray-lightest' : 'bg-white border border-accent'
               }`}
               onClick={handleToogleMenu}>
               {openFilters ? 'Close' : 'Filter offers'}
            </button>
         </div>
         <FilterBox showOnMobile={openFilters && isMobile} />
      </header>
   );
};

export default FilterContainer;
