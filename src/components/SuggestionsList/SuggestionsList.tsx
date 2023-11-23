import React from 'react';
import { Offer, SearchVariant } from '../../types/types';
import { highlightText } from '../../utils/highlightText';

interface SuggestionsListProps {
   suggestions: Offer[];
   variant: SearchVariant;
   searchTerm: string;
   handleSuggestionClick: (value: string, variant: SearchVariant) => void;
}

const SuggestionsList = ({
   suggestions,
   variant,
   searchTerm,
   handleSuggestionClick,
}: SuggestionsListProps) => {
   return (
      <ul className="absolute top-full translate-y-[2px] left-0 w-full max-h-[188px] flex flex-col shadow-checkboxShadow overflow-y-auto hiddenScrollbar z-10">
         {suggestions.map(offer => (
            <li
               className="flex justify-between items-center px-4 py-3 border border-gray-light bg-white text-gray-dark cursor-pointer"
               onClick={() => handleSuggestionClick(offer[variant], variant)}
               key={offer._id}>
               {highlightText(offer[variant], searchTerm)}
               {variant === SearchVariant.TITLE && (
                  <p className="text-reg-12 ">{offer.companyName}</p>
               )}
            </li>
         ))}
      </ul>
   );
};

export default SuggestionsList;
