import { useState } from 'react';
const useForm = valideData => {
  const [storedData, setStoredData] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const isValid = !valideData(storedData);
  const hasError = isTouched && !isValid;

  const dataOnBlurHandler = () => {
    setIsTouched(true);
  };

  const dataChangeHandler = event => {
    setStoredData(event.target.value);
  };
  const reset = () => {
    setStoredData('');
    setIsTouched(false);
  };

  return {
    isValid,
    storedData,
    hasError,
    dataChangeHandler,
    dataOnBlurHandler,
    reset,
  };
};

export default useForm;
