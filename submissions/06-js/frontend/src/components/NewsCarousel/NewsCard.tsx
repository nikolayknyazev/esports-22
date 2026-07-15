import './index.css';

import { NewsItem } from "./types";

interface NewsCardProps {
  news: NewsItem;
}

export const NewsCard = ({ news }: NewsCardProps) => {
  return (
    <article className="news-card">
      <img
        src={news.image}
        alt={news.title}
        className="news-card-image"
      />

      <div className="news-card-content">
        <span className="news-card-category">
          {news.category}
        </span>

        <h3 className="news-card-title">
          {news.title}
        </h3>

        <span className="news-card-time">
          {news.publishedAt}
        </span>
      </div>
    </article>
  );
};