import React from 'react';
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
      <div className="flex gap-2 items-center">
         <div
            className=" flex items-center justify-center cursor-pointer "
            onClick={() => onChange()}>
            <input type={type} name={name} id={name} className="hidden" />
            <CheckboxIcon checked={checked} />
         </div>
         <label
            htmlFor={name}
            className={`${checked ? 'text-gray-darkest' : 'text-gray-dark'} text-reg-14`}>
            {label}
         </label>
      </div>
   );
};

export default CheckboxInput;
