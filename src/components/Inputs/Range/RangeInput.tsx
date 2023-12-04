import React, { ChangeEvent } from 'react';

export interface RangeInputProps {
   name: string;
   onChange: (e: ChangeEvent<HTMLInputElement>) => void;
   value: number;
   maxValue: number;
   minValue: number;
   step?: number;
}

const RangeInput = ({ name, onChange, value, maxValue, minValue, step }: RangeInputProps) => {
   return (
      <div>
         <div className="relative mx-[3.5px]">
            <p
               className="relative  -translate-x-1/2 text-md-14 text-gray-dark text-center"
               style={{ left: `${(value / maxValue) * 100}%` }}>
               {value}
            </p>
         </div>
         <input
            type="range"
            name={name}
            id={name}
            min={minValue}
            max={maxValue}
            step={step}
            value={value}
            className="slider"
            onChange={onChange}
         />
      </div>
   );
};

export default RangeInput;
