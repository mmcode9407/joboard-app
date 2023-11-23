import { FilterGroup, InputProps, JobType } from '../../../types/types';

interface Filters {
   title: string;
   inputs: InputProps[];
}

export const filters: Filters[] = [
   {
      title: 'Job type',
      inputs: [
         {
            name: 'full-time',
            label: JobType.FULLTIME,
            checked: false,
            type: 'checkbox',
            group: FilterGroup.JOBTYPE,
         },
         {
            name: 'contract',
            label: JobType.CONTRACT,
            checked: false,
            type: 'checkbox',
            group: FilterGroup.JOBTYPE,
         },
         {
            name: 'part-time',
            label: JobType.PARTTIME,
            checked: false,
            type: 'checkbox',
            group: FilterGroup.JOBTYPE,
         },
         {
            name: 'freelance',
            label: JobType.FREELANCE,
            checked: false,
            type: 'checkbox',
            group: FilterGroup.JOBTYPE,
         },
      ],
   },
];
