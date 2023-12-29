import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";
import { Fragment } from "react";

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  );
};

export default Meals;

// import React from 'react';

// const Meals = ({ meals }) => {
//   return (
//     <div>
//       <h2>Menu</h2>
//       <ul>
//         {meals.map((meal) => (
//           <li key={meal._id}>
//             {meal.name} - ${meal.price.toFixed(2)}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Meals;