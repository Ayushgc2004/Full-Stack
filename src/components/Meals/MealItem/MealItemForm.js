import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import { useState } from "react";

const MealItemForm = (props) => {
  const [enteredAmount, setEnteredAmount] = useState("");
  const [amountIsValid, setAmountIsValid] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 10
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
    setEnteredAmount(""); // Clear the input after submission
    setAmountIsValid(true);
  };

  const amountInputChangeHandler = (event) => {
    // You can add additional validation or formatting logic here
    setEnteredAmount(event.target.value);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        label="Qty"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "10",
          step: "1",
          value: enteredAmount,
          onChange: amountInputChangeHandler,
        }}
        // placeholder="0"
      />

      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-10).</p>}
    </form>
  );
};

export default MealItemForm;
