import './index.css';

import { mockNews } from './mockNews';
import { NewsCard } from './NewsCard';

export const NewsCarousel = () => {
  return (
    <div className="news">
      <div className="news-carousel">
        {mockNews.map((news) => (
          <NewsCard key={news.id} news={news} />
        ))}

        <button className="news-all-link" type="button">
          Все новости →
        </button>
      </div>
    </div>
  );
};
