import React from 'react';
import CheckboxFilterItem from './CheckboxFilterItem';
import { filterSections } from './filters/filters';
import { FilterGroup } from '../../types/types';
import RangeFilterItem from './RangeFilterItem';
import { useFilters } from '../../context/FiltersContext';

export const FilterBox = ({ showOnMobile }: { showOnMobile: boolean }) => {
   const { clearFilters } = useFilters();

   return (
      <div
         className={`${
            showOnMobile ? 'block' : 'hidden'
         }  md:block md:w-[303px] p-6 rounded-md border border-gray-light bg-white overflow-y-auto scrollbar`}>
         <header className="flex items-center justify-between mb-4">
            <h2 className="text-gray-darkest text-sb-16">Filter offers</h2>
            <button className=" w-[95] p-2  text-accent-strong text-md-12" onClick={clearFilters}>
               Clear filters
            </button>
         </header>
         <CheckboxFilterItem
            title="Job type"
            section={FilterGroup.JOBTYPE}
            checkboxes={filterSections.jobType}
         />
         <CheckboxFilterItem
            title="Seniority"
            section={FilterGroup.SENIORITY}
            checkboxes={filterSections.seniority}
         />
         <CheckboxFilterItem
            title="Location"
            section={FilterGroup.LOCATION}
            checkboxes={filterSections.location}
         />
         <RangeFilterItem
            title="Salary (min.)"
            section={FilterGroup.SALARY}
            input={filterSections.salary}
         />
      </div>
   );
};
