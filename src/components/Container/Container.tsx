import React, { PropsWithChildren } from 'react';

export const Container = (props: PropsWithChildren) => (
   <div className="flex flex-col md:flex-row md:gap-9 w-full max-w-[1217px] h-screen mx-auto my-0 py-0 font-primary overflow-hidden">
      {props.children}
   </div>
);
