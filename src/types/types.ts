export enum JobType {
   FULLTIME = 'Full-time',
   PARTTIME = 'Part-time',
   CONTRACT = 'Contract',
   FREELANCE = 'Freelance',
}

export enum Seniority {
   LEAD = 'Lead',
   EXPERT = 'Expert',
   SENIOR = 'Senior',
   MID_REGULAR = 'Mid/Regular',
   JUNIOR = 'Junior',
   INTERN = 'Intern',
}

export enum Location {
   REMOTE = 'Remote',
   PART_REMOTE = 'Part-remote',
   ON_SITE = 'On-site',
}

export enum FilterGroup {
   JOBTYPE = 'jobType',
   SENIORITY = 'seniority',
}

export interface ICheckboxInput {
   name: string;
   label: JobType | Seniority;
   group: FilterGroup;
}

export enum SearchVariant {
   TITLE = 'title',
   CITY = 'city',
}

export type SearchTerm = {
   [key in SearchVariant]: string;
};

export type SearchSuggestionsShow = {
   [key in SearchVariant]: boolean;
};

export interface Offer {
   _id: string;
   city: string;
   companyName: string;
   country: string;
   createdAt: Date;
   currency: string;
   description: string;
   image: string;
   jobType: JobType;
   offerUrl: string;
   salaryFrom: number;
   salaryTo: number;
   seniority: Seniority;
   technologies: string[];
   title: string;
   updatedAt: Date;
   workLocation: Location;
}
