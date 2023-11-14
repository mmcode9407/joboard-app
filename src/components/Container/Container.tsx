import React, { PropsWithChildren } from 'react';

export const Container = (props: PropsWithChildren) => (
   <div className="max-w-[1217px] mx-auto my-0 py-0 md:px-6 px-2 font-primary">
      {props.children}
   </div>
);
