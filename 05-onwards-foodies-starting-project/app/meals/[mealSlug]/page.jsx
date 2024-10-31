import './globals.css';

const MealDetails = ({ params }) => {
  return (
    <main>
      <h1>Meal Details!</h1>
      <p>{params.mealSlug}</p>
    </main>
  )
}

export default MealDetails