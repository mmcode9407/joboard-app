import React, { ChangeEvent, FocusEvent, useState } from 'react';
import OffersList from '../OffersList/OffersList';
import SearchInput from '../SearchInput/SearchInput';
import SearchWrapper from '../SearchWrapper/SearchWrapper';
import SuggestionsList from '../SuggestionsList/SuggestionsList';
import ResultsInfo from '../ResultsInfo/ResultsInfo';
import { useOffers } from '../../data/offers/useOffers';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import { removeDuplicates } from '../../utils/removeDuplicates';
import { filterData } from '../../utils/filterData';

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
   const isAnySuggestion = suggestions.length > 0;

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
               {showSuggestions[SearchVariant.TITLE] && isAnySuggestion && (
                  <SuggestionsList
                     suggestions={suggestions}
                     variant={SearchVariant.TITLE}
                     searchTerm={searchTerm[SearchVariant.TITLE]}
                     handleSuggestionClick={handleSuggestionClick}
                  />
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
               {showSuggestions[SearchVariant.CITY] && isAnySuggestion && (
                  <SuggestionsList
                     suggestions={suggestions}
                     variant={SearchVariant.CITY}
                     searchTerm={searchTerm[SearchVariant.CITY]}
                     handleSuggestionClick={handleSuggestionClick}
                  />
               )}
            </SearchWrapper>
         </div>
         {filteredOffers.length >= 0 &&
            (!!searchTerm[SearchVariant.TITLE] || !!searchTerm[SearchVariant.CITY]) && (
               <ResultsInfo
                  qty={filteredOffers.length}
                  searchTerm={searchTerm}
                  clear={clearSearch}
               />
            )}
         <OffersList offers={filteredOffers} />
      </section>
   );
};

export default Offers;
