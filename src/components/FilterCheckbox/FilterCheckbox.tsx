import React from 'react';
import CheckboxIcon from '../../icons/CheckboxIcon';
import { FilterGroup, InputProps, JobType } from '../../types/types';

interface CheckboxProps extends InputProps {
   onChange: (field: FilterGroup, value: JobType) => void;
   isFilterExist: (field: FilterGroup, value: JobType) => boolean;
}

const FilterCheckbox = ({ name, label, group, type, onChange, isFilterExist }: CheckboxProps) => {
   const checked = isFilterExist(group, label) ? true : false;

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
               onChange={() => onChange(group, label)}
            />
            <CheckboxIcon checked={checked} />
         </div>
         {label}
      </label>
   );
};

export default FilterCheckbox;
