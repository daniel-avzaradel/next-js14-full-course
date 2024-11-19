const FilteredNewsPage = async ({ params }) => {

  const { year } = await params

  return (
    <div>
      <h1>{year}</h1>
    </div>
  )
}

export default FilteredNewsPage