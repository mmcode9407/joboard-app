import React from 'react';

export const highlightText = (text: string, searchText: string) => {
   const parts = text.split(new RegExp(`(${searchText})`, 'gi'));
   return (
      <p className="text-md-14 ">
         {parts.map((part, index) =>
            part.toLowerCase() === searchText.toLowerCase() ? (
               <span key={index} className="font-bold">
                  {part}
               </span>
            ) : (
               part
            ),
         )}
      </p>
   );
};
