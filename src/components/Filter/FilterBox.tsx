import React from 'react';
import CheckboxFilterItem from './CheckboxFilterItem';
import { filterSections } from './filters/filters';
import { FilterGroup } from '../../types/types';
import RangeFilterItem from './RangeFilterItem';

export const FilterBox = () => {
   return (
      <div className="w-[303px] p-6 rounded-md border border-gray-light">
         <header className="flex items-center justify-between mb-4">
            <h2 className="text-gray-darkest text-sb-16">Filter offers</h2>
            <button className=" w-[95] p-2  text-accent-strong text-md-12">Clear filters</button>
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
            inputs={filterSections.salary}
         />
      </div>
   );
};
