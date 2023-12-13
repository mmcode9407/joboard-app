import React, { ChangeEvent, useState } from 'react';
import { useResizeScreen } from '../../../hooks/useResizeScreen';

export interface RangeInputProps {
   name: string;
   onChange: (e: ChangeEvent<HTMLInputElement>) => void;
   value: number;
   maxValue: number;
   minValue: number;
   step?: number;
}

const RangeInput = ({ name, onChange, value, maxValue, minValue, step }: RangeInputProps) => {
   const [position, setPosition] = useState(0);
   const { isMobile } = useResizeScreen();

   return (
      <div className="">
         <div className="relative h-[40px] md:h-[24px] mx-[3.5px]">
            <p
               className="absolute inline-block bottom-0 -translate-x-1/2 text-md-16 text-gray-dark text-center"
               style={{
                  left: `${(value / maxValue) * 100}%`,
                  bottom: `${isMobile ? position : 0}px`,
               }}>
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
            onMouseUp={e => setPosition(0)}
            onMouseDown={e => setPosition(16)}
            onTouchStart={e => setPosition(16)}
            onTouchEnd={e => setPosition(0)}
         />
      </div>
   );
};

export default RangeInput;
