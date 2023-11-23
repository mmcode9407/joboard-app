import React from 'react';
import { SearchTerm, SearchVariant } from '../../types/types';

interface ResultsInfoProps {
   qty: number;
   searchTerm: SearchTerm;
   clear: () => void;
}

const ResultsInfo = ({ qty, searchTerm, clear }: ResultsInfoProps) => {
   return (
      <div className="flex items-center gap-1 md:gap-4 mb-4">
         <p className="text-sb-16 text-gray-darkest tracking-tighter">
            {qty} offers found{' '}
            {searchTerm[SearchVariant.TITLE] !== '' && `for "${searchTerm[SearchVariant.TITLE]}"`}{' '}
            {searchTerm[SearchVariant.CITY] !== '' && `in "${searchTerm[SearchVariant.CITY]}"`}
         </p>
         <button className="w-[95] p-2 text-accent-strong text-md-12" onClick={clear}>
            Clear search
         </button>
      </div>
   );
};

export default ResultsInfo;
