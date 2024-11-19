import NewsList from "@/app/components/news-list"
import { getNewsForYear } from "@/app/lib/news";

const FilteredNewsPage = async ({ params }) => {

  const { year } = await params;
  const news = getNewsForYear(year)

  return (
    <NewsList news={news} />
  )
}

export default FilteredNewsPage