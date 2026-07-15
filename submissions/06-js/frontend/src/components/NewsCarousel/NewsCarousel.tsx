import './index.css';

import { mockNews } from "./mockNews";
import { NewsCard } from "./NewsCard";

export const NewsCarousel = () => {
  return (
    <div className="news">
      <div className="news-carousel">
        {mockNews.map((news) => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>

      <div className="news-all-link">
        <span>Все новости →</span>
      </div>
    </div>
  );
};