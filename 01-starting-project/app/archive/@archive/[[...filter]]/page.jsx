import NewsList from "@/app/components/news-list";
import { getAvailableNewsYears, getNewsForYear } from "@/app/lib/news";
import Link from "next/link";

const FilteredNewsPage = async ({ params }) => {
  const { filter } = await params;
  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  let news;

  if (selectedYear && !selectedMonth) {
    news = getNewsForYear(selectedYear);
  }

  let newsContent = <p>No news found for the selected period.</p>;

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  const links = getAvailableNewsYears();

  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {links.map((link) => {
              return (
                <li key={link}>
                  <Link href={`/archive/${link}`}>{link}</Link>
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
