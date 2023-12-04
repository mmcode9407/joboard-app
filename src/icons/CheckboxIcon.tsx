import React from 'react';

const CheckboxIcon = ({ checked }: { checked: boolean }) => {
   if (checked) {
      return (
         <div>
            <svg
               width="27"
               height="27"
               viewBox="0 0 27 27"
               fill="none"
               xmlns="http://www.w3.org/2000/svg">
               <g id="Property 1=Checked">
                  <g id="Rectangle 141" filter="url(#filter0_d_2722_8462)">
                     <rect
                        x="4"
                        y="4"
                        width="19"
                        height="19"
                        rx="5"
                        fill="#9564D4"
                        fillOpacity="0.1"
                        shapeRendering="crispEdges"
                     />
                     <rect
                        x="4.5"
                        y="4.5"
                        width="18"
                        height="18"
                        rx="4.5"
                        stroke="#9564D4"
                        shapeRendering="crispEdges"
                     />
                  </g>
                  <path
                     id="Vector 11"
                     d="M9 13L12.5 16.5L19 10"
                     stroke="#9564D4"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                  />
               </g>
               <defs>
                  <filter
                     id="filter0_d_2722_8462"
                     x="0"
                     y="0"
                     width="27"
                     height="27"
                     filterUnits="userSpaceOnUse"
                     colorInterpolationFilters="sRGB">
                     <feFlood floodOpacity="0" result="BackgroundImageFix" />
                     <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                     />
                     <feOffset />
                     <feGaussianBlur stdDeviation="2" />
                     <feComposite in2="hardAlpha" operator="out" />
                     <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.585412 0 0 0 0 0.392157 0 0 0 0 0.831373 0 0 0 0.4 0"
                     />
                     <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_2722_8462"
                     />
                     <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_2722_8462"
                        result="shape"
                     />
                  </filter>
               </defs>
            </svg>
         </div>
      );
   }

   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         width="27"
         height="27"
         viewBox="0 0 27 27"
         fill="none">
         <rect x="4.5" y="4.5" width="18" height="18" rx="4.5" fill="white" stroke="#9564D4" />
      </svg>
   );
};

export default CheckboxIcon;
