export const removeDuplicates = <T, K extends keyof T>(arr: T[], key: K) => {
   return arr.reduce((acc, curr) => {
      const existingKey = acc.find(obj => obj[key] === curr[key]);
      if (!existingKey) {
         return [...acc, curr];
      }
      return acc;
   }, [] as T[]);
};
