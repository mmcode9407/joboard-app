import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { FilterGroup, InputProps, JobType } from '../../types/types';
import { useFilters } from '../../context/FiltersContext';

interface FilterItemProps {
   title: string;
   inputs: InputProps[];
}

const FilterItem = ({ inputs, title }: FilterItemProps) => {
   const { filters, setFilters } = useFilters();

   const inputType = {
      checkbox: ({ name, label, checked, group, type }: InputProps) => (
         <FilterCheckbox
            name={name}
            label={label}
            checked={checked}
            group={group}
            type={type}
            onChange={changeHandler}
            isFilterExist={isFilterExist}
         />
      ),
   };

   const isFilterExist = (field: FilterGroup, value: JobType) => {
      return filters[field].some(el => el === value);
   };

   const changeHandler = (field: FilterGroup, value: JobType) => {
      const checked = isFilterExist(field, value);
      if (!checked) {
         setFilters({ ...filters, [field]: [...filters[field], value] });
      } else {
         setFilters({
            ...filters,
            [field]: filters[field].filter(el => el !== value),
         });
      }
   };

   return (
      <div className="flex gap-4 flex-col border-t border-gray-light pt-6 mt-6">
         <h3 className="text-sb-12 text-gray-darkest">{title}</h3>
         <div className="grid grid-cols-2 gap-y-3 ">
            {inputs.map(item => {
               return <React.Fragment key={item.name}>{inputType[item.type](item)}</React.Fragment>;
            })}
         </div>
      </div>
   );
};

export default FilterItem;
