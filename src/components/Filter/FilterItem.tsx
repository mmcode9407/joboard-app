import React from 'react';
import CheckboxInput from '../CheckboxInput/CheckboxInput';
import { InputProps } from '../../types/types';

interface FilterItemProps {
   title: string;
   inputs: InputProps[];
}

const FilterItem = ({ inputs, title }: FilterItemProps) => {
   const inputType = {
      checkbox: ({ name, label, checked, group, type }: InputProps) => (
         <CheckboxInput name={name} label={label} checked={checked} group={group} type={type} />
      ),
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
