import React, {
   Dispatch,
   PropsWithChildren,
   SetStateAction,
   createContext,
   useContext,
   useState,
} from 'react';
import { FilterGroup, JobType } from '../types/types';

interface IFilters {
   [FilterGroup.JOBTYPE]: JobType[];
}

interface IFiltersContext {
   filters: IFilters;
   setFilters: Dispatch<SetStateAction<IFilters>>;
   clearFilters: () => void;
}

const FiltersContext = createContext<IFiltersContext | undefined>(undefined);

export const FiltersProvider = ({ children }: PropsWithChildren) => {
   const [filters, setFilters] = useState<IFilters>({ jobType: [] });

   const clearFilters = () => {
      setFilters({ jobType: [] });
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
