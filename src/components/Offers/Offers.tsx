import React, { ChangeEvent, useState } from 'react';
import OffersList from '../OffersList/OffersList';
import { Offer, SearchTerm, SearchVariant } from '../../types/types';
import { useOffers } from '../../hooks/useOffers';
import { highlightText } from '../../utils/highlightText';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import SearchInput from '../SearchInput/SearchInput';
import SearchWrapper from '../SearchWrapper/SearchWrapper';

export const filterData = (searchTerm: SearchTerm, data: Offer[]) => {
   return data.filter(offer => {
      const titleMatch = offer.title.toLowerCase().includes(searchTerm.title.toLowerCase());
      const cityMatch = offer.city.toLowerCase().includes(searchTerm.city.toLowerCase());

      return titleMatch && cityMatch;
   });
};

const Offers = () => {
   const [searchTerm, setSearchTerm] = useState<SearchTerm>({ title: '', city: '' });
   const { data: allOffers, isSuccess, isError, error } = useOffers();

   const [titleSuggestions, setTitleSuggestions] = useState<Offer[]>([]);
   const [showTitleSuggestion, setShowTitleSuggestion] = useState(false);
   const [citySuggestions, setCitySuggestions] = useState<Offer[]>([]);
   const [showCitySuggestion, setShowCitySuggestion] = useState(false);
   const ref = useOutsideClick(() => setShowTitleSuggestion(false));

   const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.target.value;
      setSearchTerm({ ...searchTerm, title: inputValue });

      const titleSuggestions =
         (inputValue !== '' &&
            allOffers?.filter(offer =>
               offer.title.toLowerCase().includes(inputValue.toLowerCase()),
            )) ||
         [];

      setTitleSuggestions(titleSuggestions);
   };

   const handleCityChange = (e: ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.target.value;
      setSearchTerm({ ...searchTerm, city: inputValue });

      const citySuggestions =
         (inputValue !== '' &&
            allOffers?.filter(offer =>
               offer.city.toLowerCase().includes(inputValue.toLowerCase()),
            )) ||
         [];

      setCitySuggestions(citySuggestions);
   };

   const suggestionTitleClick = (value: string) => {
      setSearchTerm({ ...searchTerm, title: value });
      setTitleSuggestions([]);
      setCitySuggestions([]);
      setShowTitleSuggestion(false);
      setShowCitySuggestion(false);
   };

   const suggestionCityClick = (value: string) => {
      setSearchTerm({ ...searchTerm, city: value });
      setTitleSuggestions([]);
      setCitySuggestions([]);
      setShowTitleSuggestion(false);
      setShowCitySuggestion(false);
   };

   if (isError) {
      console.error(error);
      return null;
   }

   return (
      <section className="flex flex-col w-[877px] h-screen p-10 bg-gray-lightest gap-[56px]">
         <div className="flex gap-3 " ref={ref}>
            <SearchWrapper>
               <SearchInput
                  variant={SearchVariant.TITLE}
                  placeholder="Search for"
                  value={searchTerm}
                  onChange={handleTitleChange}
                  onFocus={() => setShowTitleSuggestion(true)}
               />
               {showTitleSuggestion && titleSuggestions.length > 0 && (
                  <ul className="absolute top-full translate-y-[2px] left-0 w-full max-h-[188px] flex flex-col shadow-checkboxShadow overflow-y-auto hiddenScrollbar">
                     {titleSuggestions.map(offer => (
                        <li
                           className="flex justify-between items-center px-4 py-3 border border-gray-light bg-white text-gray-dark cursor-pointer"
                           key={offer._id}
                           onClick={() => suggestionTitleClick(offer.title)}>
                           {highlightText(offer.title, searchTerm.title)}
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
                  onChange={handleCityChange}
                  onFocus={() => setShowCitySuggestion(true)}
               />
               {showCitySuggestion && citySuggestions.length > 0 && (
                  <ul className="absolute top-full translate-y-[2px] left-0 w-full max-h-[188px] flex flex-col shadow-checkboxShadow overflow-y-auto hiddenScrollbar">
                     {citySuggestions.map(offer => (
                        <li
                           className="flex justify-between items-center px-4 py-3 border border-gray-light bg-white text-gray-dark cursor-pointer"
                           key={offer._id}
                           onClick={() => suggestionCityClick(offer.city)}>
                           {highlightText(offer.city, searchTerm.city)}
                        </li>
                     ))}
                  </ul>
               )}
            </SearchWrapper>
         </div>
         {isSuccess && <OffersList offers={filterData(searchTerm, allOffers)} />}
      </section>
   );
};

export default Offers;
