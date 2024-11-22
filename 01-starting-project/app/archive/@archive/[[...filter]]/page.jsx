import NewsList from "@/app/components/news-list";
import { getAvailableNewsMonths, getAvailableNewsYears, getNewsForYear, getNewsForYearAndMonth } from "@/app/lib/news";
import Link from "next/link";

const FilteredNewsPage = async ({ params }) => {
  const { filter } = await params;
  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  let news;
  let links = getAvailableNewsYears();

  if (selectedYear && !selectedMonth) {
    news = getNewsForYear(selectedYear);
    links = getAvailableNewsMonths(selectedYear);
  }

  let newsContent = <p>No news found for the selected period.</p>;
  
  if(selectedYear && selectedMonth) {
    news = getNewsForYearAndMonth(selectedYear, selectedMonth)
  }

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  if( selectedYear && !getAvailableNewsYears().includes(selectedYear)) {
    throw new Error('Invalid filter')
  }


  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {links.map((link) => {
              const href = (selectedYear && selectedMonth) ? `/archive/${link}` : selectedYear ? `/archive/${selectedYear}/${link}` : `/archive/${link}`
              return (
                <li key={link}>
                  <Link href={href}>{link}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      {newsContent}
    </>
  );
};

export default FilteredNewsPage;
