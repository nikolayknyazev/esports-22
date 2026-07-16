import newsImage1 from '../../pages/main/images/news-1.png';
import newsImage2 from '../../pages/main/images/news-2.png';
import newsImage3 from '../../pages/main/images/news-3.png';
import newsImage4 from '../../pages/main/images/news-4.png';
import { NewsItem } from './types';

export const mockNews: NewsItem[] = [
  {
    id: 1,
    image: newsImage1,
    category: 'ТУРНИРЫ',
    title: 'BLAST Premier Spring Final стартует сегодня',
    publishedAt: '1 час назад',
  },
  {
    id: 2,
    image: newsImage2,
    category: 'КОМАНДЫ',
    title: 'Team Spirit побеждают на IEM Dallas 2026',
    publishedAt: '3 часа назад',
  },
  {
    id: 3,
    image: newsImage3,
    category: 'ИНТЕРВЬЮ',
    title: 'donk: «Мы готовы к новым вызовам»',
    publishedAt: '5 часов назад',
  },
  {
    id: 4,
    image: newsImage4,
    category: 'АНАЛИТИКА',
    title: 'Мета CS2: лучшие агенты на текущем патче',
    publishedAt: '1 день назад',
  },
];
