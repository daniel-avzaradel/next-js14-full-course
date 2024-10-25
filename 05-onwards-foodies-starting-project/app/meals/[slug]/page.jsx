import './globals.css';

const Meal = ({ params }) => {
  return (
    <main>
      <h1>Meal</h1>
      <p>{params.slug}</p>
    </main>
  )
}

export default Meal