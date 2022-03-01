import classes from './Checkout.module.css';
import useForm from '../../hooks/use-form';
import useHttp from '../../hooks/use-http';

const Checkout = props => {
  const {
    isValid: nameIsValid,
    storedData: enteredName,
    hasError: nameHasError,
    dataChangeHandler: nameChangeHandler,
    dataOnBlurHandler: nameBlurHandler,
    reset: resetNameData,
  } = useForm(storedData => storedData.trim() === '');
  const {
    isValid: streetIsValid,
    storedData: enteredStreet,
    hasError: streetHasError,
    dataChangeHandler: streetChangeHandler,
    dataOnBlurHandler: streetBlurHandler,
    reset: resetStreetData,
  } = useForm(storedData => storedData.trim() === '');
  const {
    isValid: postalCodeIsValid,
    storedData: enteredPostalCode,
    hasError: postalCodeHasError,
    dataChangeHandler: postalCodeChangeHandler,
    dataOnBlurHandler: postalCodeBlurHandler,
    reset: resetPostalCodeData,
  } = useForm(storedData => storedData.trim() === '');
  const {
    isValid: cityIsValid,
    storedData: enteredCity,
    hasError: cityHasError,
    dataChangeHandler: cityChangeHandler,
    dataOnBlurHandler: cityBlurHandler,
    reset: resetCityData,
  } = useForm(storedData => storedData.trim() === '');

  let formIsValid =
    nameIsValid && streetIsValid && postalCodeIsValid && cityIsValid;

  const resetForm = () => {
    resetNameData();
    resetCityData();
    resetPostalCodeData();
    resetStreetData();
  };

  const confirmHandler = event => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }
    console.log(enteredName);
    resetForm();
  };

  const formClasses = invalid => {
    if (invalid) return `${classes.control} ${classes.invalid}`;
    return classes.control;
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={formClasses(nameHasError)}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
      </div>
      <div className={formClasses(streetHasError)}>
        <label htmlFor='street'>Street</label>
        <input
          type='text'
          id='street'
          onChange={streetChangeHandler}
          onBlur={streetBlurHandler}
          value={enteredStreet}
        />
      </div>
      <div className={formClasses(postalCodeHasError)}>
        <label htmlFor='postal'>Postal Code</label>
        <input
          type='text'
          id='postal'
          onChange={postalCodeChangeHandler}
          onBlur={postalCodeBlurHandler}
          value={enteredPostalCode}
        />
      </div>
      <div className={formClasses(cityHasError)}>
        <label htmlFor='city'>City</label>
        <input
          type='text'
          id='city'
          onChange={cityChangeHandler}
          onBlur={cityBlurHandler}
          value={enteredCity}
        />
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
