import { useCallback, useState } from 'react';

const useHttp = () => {
  const [availableMeals, setAvailableMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [httpError, setHttpError] = useState(null);

  const sendRequest = useCallback(async url => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Something went wrong...');
      }

      const responseData = await response.json();

      let loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          price: responseData[key].price,
          description: responseData[key].description,
        });
      }
      setAvailableMeals(loadedMeals);
    } catch (error) {
      setIsLoading(false);
      setHttpError(error.message);
    }
    setIsLoading(false);
  }, []);
  return {
    availableMeals,
    sendRequest,
    isLoading,
    httpError,
  };
};

export default useHttp;
