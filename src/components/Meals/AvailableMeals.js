import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'MANGO SHRIMP ROLL',
    description:
      'Krab† mix, shrimp tempura, avocado and cucumber rolled and topped with lightly seared salmon, fresh mango slices and sweet eel sauce; finished with green tempura bits',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'SMOKY SALMON ROLL',
    description:
      'Smoky salmon mix, cucumber and avocado, rolled and topped with lightly torched salmon and red pepper, jalapeño smoky mayo and togarashi; served with sweet eel sauce',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'TAKO TO ME ROLL',
    description:
      'Spicy octopus mix and cucumber, rolled with red tempura bits, sliced and topped with octopus, spicy mayo and Sriracha; finished with green tempura bits and togarashi',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'SURF & TURF ROLL',
    description:
      'Spicy tuna mix, shrimp tempura and cucumber, rolled and topped with seared filet mignon, drizzled with black pepper soy sauce; finished with green onion and red bell pepper',
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
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
