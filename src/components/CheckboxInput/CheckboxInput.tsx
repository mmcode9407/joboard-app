﻿import React from 'react';
import CheckboxIcon from '../../icons/CheckboxIcon';
import { useFilters } from '../../context/FiltersContext';
import { InputProps } from '../../types/types';

const CheckboxInput = ({ name, label, group, type }: InputProps) => {
   const { filters, setFilters } = useFilters();
   const checked = filters[group].some(el => el === label);

   const onChange = () => {
      if (!checked) {
         setFilters({ ...filters, [group]: [...filters[group], label] });
      } else {
         setFilters({
            ...filters,
            [group]: filters[group].filter(el => el !== label),
         });
      }
   };

   return (
      <label
         htmlFor={name}
         className={`flex gap-2 items-center ${
            checked ? 'text-gray-darkest' : 'text-gray-dark'
         } text-reg-14`}>
         <div className=" flex items-center justify-center cursor-pointer ">
            <input
               type={type}
               name={name}
               id={name}
               className="hidden"
               checked={checked}
               onChange={onChange}
            />
            <CheckboxIcon checked={checked} />
         </div>
         {label}
      </label>
   );
};

export default CheckboxInput;
