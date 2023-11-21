import React, { ChangeEvent, FocusEvent } from 'react';
import SearchIcon from '../../icons/SearchIcon';
import LocationIcon from '../../icons/LocationIcon';
import { SearchTerm, SearchVariant } from '../../types/types';

interface SearchInput {
   variant: SearchVariant;
   placeholder: string;
   onChange: (e: ChangeEvent<HTMLInputElement>) => void;
   value: SearchTerm;
   onFocus: (e: FocusEvent<HTMLInputElement>) => void;
}

const SearchInput = ({ variant, placeholder, value, onChange, onFocus }: SearchInput) => {
   const renderIcon = () => {
      switch (variant) {
         case SearchVariant.TITLE:
            return <SearchIcon />;
         case SearchVariant.CITY:
            return <LocationIcon />;
         default:
            return null;
      }
   };

   return (
      <>
         <input
            className="w-[287px] h-full text-gray-dark text-md-14 placeholder:text-md-14 placeholder:text-gray-dark outline-none"
            type="text"
            name={variant}
            placeholder={placeholder}
            onChange={onChange}
            onFocus={onFocus}
            value={value[variant]}
         />
         {renderIcon()}
      </>
   );
};

export default SearchInput;
