import React, { ChangeEvent } from 'react';
import Checkbox from '../Inputs/Checkbox/Checkbox';
import { FilterGroup, ICheckboxInput, JobType } from '../../types/types';
import { useFilters } from '../../context/FiltersContext';

type Sections = FilterGroup.JOBTYPE;

interface CheckboxFilterItemProps {
   title: string;
   section: Sections;
   checkboxes: ICheckboxInput[];
}

const CheckboxFilterItem = ({ checkboxes, title, section }: CheckboxFilterItemProps) => {
   const { filters, setFilters } = useFilters();

   const isChecked = (value: string) => {
      return filters[section].some(el => el === value);
   };

   const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value as JobType;
      const checked = isChecked(value);

      setFilters(prev => {
         const updatedArray = checked
            ? prev[section].filter(el => el !== value)
            : [...prev[section], value];
         return { ...prev, [section]: updatedArray };
      });
   };

   return (
      <div className="flex gap-4 flex-col border-t border-gray-light pt-6 mt-6">
         <h3 className="text-sb-12 text-gray-darkest">{title}</h3>
         <div className="grid grid-cols-2 gap-y-3 ">
            {checkboxes.map(checkbox => {
               const { name, label } = checkbox;
               return (
                  <Checkbox
                     name={name}
                     label={label}
                     value={label}
                     onChange={changeHandler}
                     isChecked={isChecked(label)}
                  />
               );
            })}
         </div>
      </div>
   );
};

export default CheckboxFilterItem;
