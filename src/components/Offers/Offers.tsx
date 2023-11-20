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

      return titleMatch;
   });
};

const Offers = () => {
   const [searchTerm, setSearchTerm] = useState<SearchTerm>({ title: '', city: '' });
   const { data: allOffers, isSuccess, isError, error } = useOffers();

   const [titleSuggestions, setTitleSuggestions] = useState<Offer[]>([]);
   const [showTitleSuggestion, setShowTitleSuggestion] = useState(false);
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

   const suggestionClick = (title: string) => {
      setSearchTerm({ ...searchTerm, title: title });
      setTitleSuggestions([]);
      setShowTitleSuggestion(false);
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
                           onClick={() => suggestionClick(offer.title)}>
                           {highlightText(offer.title, searchTerm.title)}
                           <p className="text-reg-12 ">{offer.companyName}</p>
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
