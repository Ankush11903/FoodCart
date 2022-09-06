import classes from "./AvailableMeals.module.css";
import Card from "../Ui/Card";
import MealItem from "./MealItem/MealItem";


const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Samosa",
    description: "Finest Snacks",
    price: 25,
  },
  {
    id: "m2",
    name: "Momo",
    description: "A delhi specialty!",
    price: 69,
  },
  {
    id: "m3",
    name: "Vada pav",
    description: "A Mumbai specialty!",
    price: 49,
  },
  {
    id: "m4",
    name: "Dosa",
    description: "A South Indian Dish",
    price: 99,
  },
];

export default function AvailableMeals() {
  
  const mealsList = DUMMY_MEALS.map((meal) => {
    return (
      <MealItem
        id={meal.id}
        key={meal.id}
        name={meal.name}
        price={meal.price}
        description={meal.description}
      />
    );
  });
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
}
