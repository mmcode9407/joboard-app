import React, { PropsWithChildren } from 'react';

const SearchWrapper = ({ children }: PropsWithChildren) => {
   return (
      <div className="relative flex items-center justify-between w-full h-[50px] pl-6 pr-2 bg-white shadow-checkboxShadow rounded-md">
         {children}
      </div>
   );
};

export default SearchWrapper;
