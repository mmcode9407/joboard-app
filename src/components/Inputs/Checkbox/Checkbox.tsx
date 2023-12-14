import React, { ChangeEvent, useEffect, useState } from 'react';
import CheckboxIcon from '../../../icons/CheckboxIcon';

interface CheckboxProps {
   name: string;
   label?: string;
   value?: string;
   onChange: (e: ChangeEvent<HTMLInputElement>) => void;
   isChecked?: boolean;
}

const Checkbox = ({ name, label, onChange, isChecked, value }: CheckboxProps) => {
   const [checked, setChecked] = useState(isChecked || false);

   useEffect(() => {
      setChecked(!!isChecked);
   }, [isChecked]);

   return (
      <label
         htmlFor={name}
         className={`flex gap-2 items-center py-[8.5px] md:py-0 ${
            checked ? 'text-gray-darkest' : 'text-gray-dark'
         } text-reg-14`}>
         <div className=" flex items-center justify-center cursor-pointer ">
            <input
               type="checkbox"
               name={name}
               id={name}
               className="hidden"
               value={value}
               checked={checked}
               onChange={e => {
                  onChange(e);
                  setChecked(prev => !prev);
               }}
            />
            <CheckboxIcon checked={checked} />
         </div>
         {label && label}
      </label>
   );
};

export default Checkbox;
