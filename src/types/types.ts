enum JobType {
   FULLTIME = 'Full-time',
   PARTTIME = 'Part-time',
   CONTRACT = 'Contract',
   FREELANCE = 'Freelance',
}

enum Seniority {
   LEAD = 'Lead',
   EXPERT = 'Expert',
   SENIOR = 'Senior',
   MID_REGULAR = 'Mid/Regular',
   JUNIOR = 'Junior',
   INTERN = 'Intern',
}

enum Location {
   REMOTE = 'Remote',
   PART_REMOTE = 'Part-remote',
   ON_SITE = 'On-site',
}

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
