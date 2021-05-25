import availableClasses from "../classes/availableClasses.json"

export const getClasses = async (): Promise<any[]> => {
    const myPromise: Promise<any[]> = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(availableClasses);
        }, 300);
      });

      return myPromise;
        
}