﻿import React, { ChangeEvent, FocusEvent, useState } from 'react';
import OffersList from '../OffersList/OffersList';
import SearchInput from '../SearchInput/SearchInput';
import SearchWrapper from '../SearchWrapper/SearchWrapper';
import { useOffers } from '../../hooks/useOffers';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import { removeDuplicates } from '../../utils/removeDuplicates';
import { filterData } from '../../utils/filterData';
import { highlightText } from '../../utils/highlightText';

import { Offer, SearchSuggestionsShow, SearchTerm, SearchVariant } from '../../types/types';
import { initSearchSuggestionsState, initSearchTerm } from './initialData/initialData';

const Offers = () => {
   const { data: allOffers, isSuccess, isError, error } = useOffers();
   const [searchTerm, setSearchTerm] = useState<SearchTerm>(initSearchTerm);
   const [suggestions, setSuggestions] = useState<Offer[]>([]);
   const [showSuggestions, setShowSuggestions] = useState<SearchSuggestionsShow>(
      initSearchSuggestionsState,
   );

   const ref = useOutsideClick(() => {
      setShowSuggestions(initSearchSuggestionsState);
      setSuggestions([]);
   });
   const filteredOffers = isSuccess ? filterData(searchTerm, allOffers) : [];

   const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.target.value;
      const inputName = e.target.name as SearchVariant;

      setSearchTerm({ ...searchTerm, [inputName]: inputValue });
      settingSuggestions(inputValue, inputName);
   };

   const handleInputFocus = (e: FocusEvent<HTMLInputElement>) => {
      const inputName = e.target.name as SearchVariant;

      setShowSuggestions({
         ...showSuggestions,
         [SearchVariant.TITLE]: inputName === SearchVariant.TITLE,
         [SearchVariant.CITY]: inputName === SearchVariant.CITY,
      });
      settingSuggestions(searchTerm[inputName], inputName);
   };

   const settingSuggestions = (term: string, variant: SearchVariant) => {
      const suggestions =
         (term !== '' &&
            allOffers?.filter(offer =>
               offer[variant].toLowerCase().includes(term.toLowerCase()),
            )) ||
         [];

      setSuggestions(removeDuplicates(suggestions, variant));
   };

   const clearSearch = () => {
      setSearchTerm(initSearchTerm);
   };

   const handleSuggestionClick = (value: string, variant: SearchVariant) => {
      setSearchTerm({ ...searchTerm, [variant]: value });
      setShowSuggestions(initSearchSuggestionsState);
      setSuggestions([]);
   };

   if (isError) {
      console.error(error);
      return null;
   }

   return (
      <section className=" w-[877px] h-screen p-10 bg-gray-lightest gap-[56px]">
         <div className="flex gap-3 mb-6" ref={ref}>
            <SearchWrapper>
               <SearchInput
                  variant={SearchVariant.TITLE}
                  placeholder="Search for"
                  value={searchTerm}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
               />
               {showSuggestions.title && suggestions.length > 0 && (
                  <ul className="absolute top-full translate-y-[2px] left-0 w-full max-h-[188px] flex flex-col shadow-checkboxShadow overflow-y-auto hiddenScrollbar">
                     {suggestions.map(offer => (
                        <li
                           className="flex justify-between items-center px-4 py-3 border border-gray-light bg-white text-gray-dark cursor-pointer"
                           key={offer._id}
                           onClick={() => handleSuggestionClick(offer.title, SearchVariant.TITLE)}>
                           {highlightText(offer.title, SearchVariant.TITLE)}
                           <p className="text-reg-12 ">{offer.companyName}</p>
                        </li>
                     ))}
                  </ul>
               )}
            </SearchWrapper>
            <SearchWrapper>
               <SearchInput
                  variant={SearchVariant.CITY}
                  placeholder="Search location"
                  value={searchTerm}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
               />
               {showSuggestions.city && suggestions.length > 0 && (
                  <ul className="absolute top-full translate-y-[2px] left-0 w-full max-h-[188px] flex flex-col shadow-checkboxShadow overflow-y-auto hiddenScrollbar">
                     {suggestions.map(offer => (
                        <li
                           className="flex justify-between items-center px-4 py-3 border border-gray-light bg-white text-gray-dark cursor-pointer"
                           key={offer._id}
                           onClick={() => handleSuggestionClick(offer.city, SearchVariant.CITY)}>
                           {highlightText(offer.city, SearchVariant.CITY)}
                        </li>
                     ))}
                  </ul>
               )}
            </SearchWrapper>
         </div>
         {filteredOffers.length > 0 && (searchTerm.city !== '' || searchTerm.title !== '') && (
            <div className="flex items-center gap-4 mb-4">
               <p className="text-sb-16 text-gray-darkest tracking-tighter">
                  {filteredOffers.length} offers found{' '}
                  {searchTerm.title !== '' && `for "${searchTerm.title}"`}{' '}
                  {searchTerm.city !== '' && `in "${searchTerm.city}"`}
               </p>
               <button className="w-[95] p-2 text-accent-strong text-md-12" onClick={clearSearch}>
                  Clear search
               </button>
            </div>
         )}
         <OffersList offers={filteredOffers} />
      </section>
   );
};

export default Offers;
