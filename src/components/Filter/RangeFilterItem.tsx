import React, { ChangeEvent, useMemo } from 'react';
import { FilterGroup, IRangeInput } from '../../types/types';
import { useFilters } from '../../context/FiltersContext';
import RangeInput from '../Inputs/Range/RangeInput';
import { useOffers } from '../../data/offers/useOffers';
import { findMaxSalaryFrom } from '../../utils/findMaxSalaryFrom';

interface FilterItemProps {
   title: string;
   section: FilterGroup.SALARY;
   inputs: IRangeInput[];
}

const RangeFilterItem = ({ inputs, section, title }: FilterItemProps) => {
   const { data: allOffers } = useOffers();
   const { filters, setFilters } = useFilters();

   const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      const value = parseInt(e.target.value);
      setFilters(prev => ({ ...prev, [section]: value }));
   };

   const maxSalaryFrom = useMemo(() => {
      if (allOffers) {
         return findMaxSalaryFrom(allOffers);
      }

      return 0;
   }, [allOffers]);

   return (
      <div className="flex gap-4 flex-col border-t border-gray-light pt-6 mt-6">
         <h3 className="text-sb-12 text-gray-darkest">{title}</h3>
         {inputs.map(input => (
            <RangeInput
               key={input.name}
               name={input.name}
               onChange={changeHandler}
               value={filters[FilterGroup.SALARY]}
               maxValue={maxSalaryFrom}
               minValue={0}
               step={1}
            />
         ))}
      </div>
   );
};

export default RangeFilterItem;
