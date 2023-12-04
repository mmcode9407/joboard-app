﻿import { FilterGroup, ICheckboxInput, JobType, Seniority } from '../../../types/types';

export interface FilterSections {
   jobType: ICheckboxInput[];
   seniority: ICheckboxInput[];
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
   seniority: [
      {
         name: 'lead',
         label: Seniority.LEAD,
         group: FilterGroup.SENIORITY,
      },
      {
         name: 'expert',
         label: Seniority.EXPERT,
         group: FilterGroup.SENIORITY,
      },
      {
         name: 'senior',
         label: Seniority.SENIOR,
         group: FilterGroup.SENIORITY,
      },
      {
         name: 'mid/regular',
         label: Seniority.MID_REGULAR,
         group: FilterGroup.SENIORITY,
      },
      {
         name: 'junior',
         label: Seniority.JUNIOR,
         group: FilterGroup.SENIORITY,
      },
      {
         name: 'intern',
         label: Seniority.INTERN,
         group: FilterGroup.SENIORITY,
      },
   ],
};
