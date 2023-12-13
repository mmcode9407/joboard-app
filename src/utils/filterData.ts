import { IFilters } from '../context/FiltersContext';
import { Offer, SearchTerm } from '../types/types';

export const filterOffers = (searchTerm: SearchTerm, offers: Offer[], otherFilters: IFilters) => {
   return offers
      .filter(filterByTitle(searchTerm.title))
      .filter(filterByCity(searchTerm.city))
      .filter(filterByJobType(otherFilters.jobType))
      .filter(filterBySeniority(otherFilters.seniority))
      .filter(filterByLocation(otherFilters.workLocation))
      .filter(filterBySalary(otherFilters.salaryFrom));
};

const filterByTitle = (title: string) => {
   return (offer: Offer) => !title || offer.title.toLowerCase().includes(title.toLowerCase());
};
const filterByCity = (city: string) => {
   return (offer: Offer) => !city || offer.city.toLowerCase().includes(city.toLowerCase());
};
const filterByJobType = (jobType: string[]) => {
   return (offer: Offer) => !jobType.length || jobType.includes(offer.jobType);
};
const filterBySeniority = (seniority: string[]) => {
   return (offer: Offer) => !seniority.length || seniority.includes(offer.seniority);
};
const filterByLocation = (location: string[]) => {
   return (offer: Offer) => !location.length || location.includes(offer.workLocation);
};
const filterBySalary = (salaryFrom: number) => {
   return (offer: Offer) => offer.salaryFrom >= salaryFrom;
};
