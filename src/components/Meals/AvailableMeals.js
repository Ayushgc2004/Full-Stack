import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "PavBhaji",
    description: "Special",
    price: 80,
  },
  {
    id: "m2",
    name: "Aloo Tikki Burger",
    description: "Delicious and affordable.",
    price: 75,
  },
  {
    id: "m3",
    name: "Pizza",
    description: "Yummy",
    price: 120,
  },
  {
    id: "m4",
    name: "Paneer Butter Masala",
    description: "Common and Tasty",
    price: 250,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;