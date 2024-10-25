import './globals.css';

const Meal = ({ params }) => {
  return (
    <main>
      <h1>Meal</h1>
      <p>{params.mealSlug}</p>
    </main>
  )
}

export default Meal