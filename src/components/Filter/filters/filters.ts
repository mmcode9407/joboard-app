import { FilterGroup, ICheckboxInput, JobType } from '../../../types/types';

export interface FilterSections {
   jobType: ICheckboxInput[];
}

export const filterSections: FilterSections = {
   jobType: [
      {
         name: 'full-time',
         label: JobType.FULLTIME,
         group: FilterGroup.JOBTYPE,
      },
      {
         name: 'contract',
         label: JobType.CONTRACT,
         group: FilterGroup.JOBTYPE,
      },
      {
         name: 'part-time',
         label: JobType.PARTTIME,
         group: FilterGroup.JOBTYPE,
      },
      {
         name: 'freelance',
         label: JobType.FREELANCE,
         group: FilterGroup.JOBTYPE,
      },
   ],
};
