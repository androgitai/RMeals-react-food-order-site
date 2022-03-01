import { useState } from 'react';
import classes from './Checkout.module.css';
import useHttp from '../../hooks/use-http';

const Checkout = props => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredStreet, setEnteredStreet] = useState('');
  const [enteredPostalCode, setEnteredPostalCode] = useState('');
  const [enteredCity, setEnteredCity] = useState('');

  const nameChangeHandler = event => {
    setEnteredName(event.target.value);
  };
  const streetChangeHandler = event => {
    setEnteredStreet(event.target.value);
  };
  const postalCodeChangeHandler = event => {
    setEnteredPostalCode(event.target.value);
  };
  const cityChangeHandler = event => {
    setEnteredCity(event.target.value);
  };

  const confirmHandler = event => {
    event.preventDefault();
    console.log(enteredCity, enteredName, enteredPostalCode, enteredStreet);
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          onChange={nameChangeHandler}
          value={enteredName}
        />
      </div>
      <div className={classes.control}>
        <label htmlFor='street'>Street</label>
        <input
          type='text'
          id='street'
          onChange={streetChangeHandler}
          value={enteredStreet}
        />
      </div>
      <div className={classes.control}>
        <label htmlFor='postal'>Postal Code</label>
        <input
          type='text'
          id='postal'
          onChange={postalCodeChangeHandler}
          value={enteredPostalCode}
        />
      </div>
      <div className={classes.control}>
        <label htmlFor='city'>City</label>
        <input
          type='text'
          id='city'
          onChange={cityChangeHandler}
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
