export const countDays = (date: Date) => {
   const targetDate = new Date(date);
   const now = new Date();

   const timeDiff = now.getTime() - targetDate.getTime();
   const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));

   return daysDiff;
};
