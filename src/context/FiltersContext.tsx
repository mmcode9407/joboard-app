﻿import React, {
   Dispatch,
   PropsWithChildren,
   SetStateAction,
   createContext,
   useContext,
   useState,
} from 'react';
import { FilterGroup, JobType, Location, Seniority } from '../types/types';

export interface IFilters {
   [FilterGroup.JOBTYPE]: JobType[];
   [FilterGroup.SENIORITY]: Seniority[];
   [FilterGroup.LOCATION]: Location[];
   [FilterGroup.SALARY]: number;
}

interface IFiltersContext {
   filters: IFilters;
   setFilters: Dispatch<SetStateAction<IFilters>>;
   clearFilters: () => void;
}

const initialFilters = {
   [FilterGroup.JOBTYPE]: [],
   [FilterGroup.SENIORITY]: [],
   [FilterGroup.LOCATION]: [],
   [FilterGroup.SALARY]: 0,
};

const FiltersContext = createContext<IFiltersContext | undefined>(undefined);

export const FiltersProvider = ({ children }: PropsWithChildren) => {
   const [filters, setFilters] = useState<IFilters>(initialFilters);

   const clearFilters = () => {
      setFilters(initialFilters);
   };

   return (
      <FiltersContext.Provider value={{ filters, setFilters, clearFilters }}>
         {children}
      </FiltersContext.Provider>
   );
};

export const useFilters = (): IFiltersContext => {
   const context = useContext(FiltersContext);
   if (!context) {
      throw new Error('useFilters must be used within a FiltersContextProvider');
   }
   return context;
};
