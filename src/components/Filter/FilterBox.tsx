import React from 'react';
import FilterItem from './FilterItem';
import { filters } from './filters/filters';

export const FilterBox = () => {
   return (
      <div className="w-[303px] p-6 rounded-md border border-gray-light">
         <header className="flex items-center justify-between mb-4">
            <h2 className="text-gray-darkest text-sb-16">Filter offers</h2>
            <button className=" w-[95] p-2  text-accent-strong text-md-12">Clear filters</button>
         </header>
         {filters.map(({ title, inputs }) => (
            <FilterItem title={title} inputs={inputs} key={title} />
         ))}
      </div>
   );
};
